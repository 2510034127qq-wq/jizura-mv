# 统一工程格式与接口

原生 `version:1` 工程的全部字段保留；新增 `agent.version:1`。组件索引与工程均使用语言无关 ID。完整实例见 `examples/storyboard.json`。

## 原生工程

`lyrics` 支持 LRC、逐行歌词、`/` 手动分镜、`*强调*`、`!` 冲击标记、`|注释` 和 `[interlude 秒数]`。`style`、`fonts`、`colors`、`fx`、`aspect`、`res`、`fps`、`seed`、`enabled`、`extra/wa/typo/kinetic/horror`、`unify/typeset/centerFree` 以及其余原生状态按原源码处理。

时间轴优先通过 `timing.lineTimes`、LRC 和 `overrides[line].cutTime` 设定。`timing` 的 `bpm/beatOffset/snap/offset/tail/lineScale` 保留。Agent 可直接提供 `agent.audioTiming: {duration,beats,energy,energyRate}`；网页上传音频仍保留原版自动检测，不引入额外模型。

`overrides[line]` 支持 `layout/enter/hold/exit/decor/treat/bg/cam/trans`、`single/cuts/seed`、`cutTech/cutLayouts/cutQuiet/cutTime` 及原生锁定快照。`decor` 在此位置是 ID 数组。全部原组合规则仍由原规划器计算：字数适配、风格偏置、忙碌背景抑制、三次色差绘制、中央留空、语言字形、节拍与转场等。

## 精确配方与参数

`agent.cuts["行:行内镜头"]` 对最终配方施加精确修改，编号从 0 开始。可使用全部镜头原生字段，主要为：

| 字段 | 含义 |
|---|---|
| layout、enter、hold、exit | 原生组件 ID |
| params | 布局组件原生 plan 输出，完整 JSON，无需改名 |
| decor | 完整装饰配方数组 `{id,seed,n,...}`；数组顺序与原生前/后景规则保留 |
| treat / treatP | 文字加工组件及其全部参数 |
| bg / bgP | 背景组件及其全部参数 |
| cam / camP | 摄像机组件及其全部参数 |
| trans / transP / transDur / morph | 转场组件及其全部参数、秒数与原生字形变换 |
| start / end / inDur / outDur / stagger | 秒数；start/end 可覆写个别镜头时间，行时间随之更新 |
| text / lineText / note / words / scheme / seed | 内容、注释、单词块、配色索引与随机种子 |
| controls | `{x,y,rotation,scaleX,scaleY,opacity}`，前景文字和装饰的统一控制；位置单位为设计像素，角度为度 |
| enhance | `false` 表示此镜头不接受第二轮随机补充；行级可设 `overrides[line].enhance:false` |
| keyframes | 任意可序列化参数的时间控制，见下节 |

切换组件且没有提供对应参数时，运行时调用该组件原生 `plan` 生成配方。提供参数时直接交给原组件，不使用近似值。布局专属参数可先 `create/inspect` 获得真实值，再修改。详情查 `components.json` 中 `parameters/samples/metadata/sources`；静态字段索引包含源码中直接读取的字段，动态对象、条件与合法值以对应源码为准。

`agent.events` 为额外画面效果数组 `{t,type,amp,dur}`。`type` 使用 fx 组件 key，`t/dur` 为工程秒数；原生注册表 fx 元数据的 `dur` 是 24fps 基准帧数，两者勿混淆。

## 关键帧

```json
{
  "agent": {
    "cuts": {
      "0:0": {
        "keyframes": [
          {"path":"controls.x","easing":"inOutSine","keys":[{"time":0,"value":-100},{"time":1.5,"value":150}]},
          {"path":"params.size","easing":"linear","keys":[{"time":0,"value":120},{"time":1.5,"value":200}]}
        ]
      }
    }
  }
}
```

路径允许 `params.*`、`treatP.*`、`bgP.*`、`camP.*`、`transP.*`、`decor.索引.*`、`controls.*`，并支持嵌套字段。数值插值，字符串和布尔值采用阶跃。可选 `linear/step/inQuad/outQuad/inOutCubic/inOutSine`；首尾关键帧以外保持端点值，时间严格递增且非负。镜头关键帧时间相对镜头起点，图层关键帧时间相对图层起点；渲染时不改变保存的配方。

## 多图层

`agent.layers` 中每项为 `{id,z,start,end,offset,visible,locked,opacity,blend,background,controls,keyframes,project}`。`project` 是完整原生工程，可包含自己的镜头参数、关键帧和事件。每层调用同一个渲染器并以 alpha 叠加，默认保留原生背景图形而不填充底色；`background:false` 可关闭该层背景图形。默认继承主工程画幅和 fps；建议所有图层使用同一画幅。`offset` 设定层内播放起点。层级按 `z` 从小到大排列，位于主工程上方；装饰内部的 front/back 仍按原生规则处理。

图层关键帧仅使用 `controls.*`；组件参数关键帧写在 `layer.project.agent.cuts`。不支持嵌套图层工程，可直接使用同级图层展开。不同文字、组件、背景、字幕可组成任意数量的独立层。`blend` 使用 Canvas2D 的原生合成模式。

可选 `renderLayer:'back'|'front'` 使用原版前/后景绘制通道；`protectBase:true` 按主工程及已有图层的实际透明前景遮罩裁剪该层，`respectLocks:true` 在锁定行/已有锁定图层的时间段跳过。第二轮原版随机增强使用这些字段及 `generator:'native-enhance'` 标记，完整接口见 [random-enhancement.md](random-enhancement.md)。

## 工程快照与资源

`agent.resolved` 保存签名和完整最终规划结果，包括所有镜头参数、事件、内容、种子、时间、配色及事件所有者。工程配置一致时恢复精确快照；原生配置或扩展有变化时重新规划。不要手改 `resolved`；通过 `edit` 编辑会正确清理旧快照并重新保存。

`agent.assets.audio={name,mime,data}`，`agent.assets.fonts=[{key,label,family,weight,data}]`，`data` 是无前缀 base64。上传资源嵌入工程，字体及原曲恢复使用浏览器真实 FontFace/AudioContext。普通内置字体由 Skill 的本地字体资产提供。

## 编辑操作

`edit --operations ops.json` 的输入为数组：

| op | 操作字段 |
|---|---|
| cut | line、cut、patch；修改一个镜头 |
| line | line、text、time、components；修改一行歌词/时间/原生组件选择 |
| lock | line；保存当前真实配方和事件快照 |
| unlock | line；显式解除行锁 |
| project | patch；修改全局字段，有锁时拒绝可能影响锁定内容的字段 |
| layer | id、patch 或 remove:true；增改删图层，有图层锁时拒绝 |
| lock-layer / unlock-layer | id；显式设置或解除图层锁 |

可同时组合多个操作。未指定字段全部保留。锁定行的直接改动会失败；锁定图层的改动会失败。共享同一个 LRC 源文本的行也受到锁保护。需要用户授权解锁才写入 `unlock`。

修改歌词时保留已有 LRC 时间标签，并重新计算与文字内容有关的布局参数；公共运动控制保持。通过原版时间控件改时间时，目标镜头对应的 Agent 固定 start/end 会释放，之后以原版时间轴为准。原版歌词撤销/重做与方案历史同步恢复 Agent 参数。需要设置非连续的独立 start/end 时，可在 Agent 面板直接编辑这些字段。

## JavaScript 接口

脚本可以导入 `scripts/host.mjs` 的 `session`，在真实无 UI Chromium 内调用：

```js
import {session} from './scripts/host.mjs';
const result = await session(async page => page.evaluate(async raw => {
  const {project,plan,audio} = await J.Agent.prepare(raw);
  // J.registry(group)[key]、J.order(group) 查询完整原生注册表。
  // new J.Renderer().frame(ctx,plan,time,{scale,transparent}) 绘制真实帧。
  // J.exportMP4 / J.exportPNGZip 为原版导出函数。
  return J.Agent.serialize(project,plan);
}, rawProject));
```

`normalize/validate/prepare/edit/serialize` 同时供网页和 Agent 使用。编辑器宿主接口 `J.uiApi.openProject(project)`、`J.uiApi.replan()`、`J.uiApi.seek(time)` 可用于自动化真实网页验收。
