# AI 主体版之后叠加原版随机增强

先由 AI 根据音乐、歌词与分镜主动组合原生组件，生成可预览的主体版，再运行一次可移除的原版随机增强。主体版的布局、文字、参数、时间、种子、配色、字体、运动、转场、已有事件与人工图层保持原样。

```powershell
node scripts/cli.mjs create --spec examples/storyboard.json --out output/baseline.jizura.json
node scripts/cli.mjs preview --project output/baseline.jizura.json --time 3 --out output/baseline.png
node scripts/cli.mjs enhance --project output/baseline.jizura.json --seed 42 --strength standard --out output/enhanced.jizura.json --report output/enhancement-report.json
node scripts/cli.mjs preview --project output/enhanced.jizura.json --time 3 --out output/enhanced.png
node scripts/cli.mjs render --project output/enhanced.jizura.json --out output/enhanced.mp4
# 同一工程重抽：替换已有增强层，不无限堆叠
node scripts/cli.mjs enhance --project output/enhanced.jizura.json --seed 43 --strength gentle --out output/alternate.jizura.json
# 只删随机增强，保留当前主体及其他人工修改
node scripts/cli.mjs clear-enhancement --project output/alternate.jizura.json --out output/without-enhancement.jizura.json
```

`--strength gentle|standard|dense` 对应透明度 0.22/0.34/0.45、每镜头后景装饰总量上限 1/2/3（已有后景装饰计入上限）。未传种子时从主体种子确定性派生。可用 `--from 10 --to 20` 限定时间段，`--exclude 1:0,2:0` 排除镜头；行/镜头从 0 开始。工程中可设置 `overrides[line].enhance:false` 或 `agent.cuts["line:cut"].enhance:false` 表示该段需要留白。未明确禁止的空装饰/空背景允许补充。

网页底部「Agent 工程」面板提供种子、强度、时间范围、「保留主体并随机增强 / 重抽」与「移除随机增强」。保存完整 `.jizura.json` 后，AI 可读取同一层的配方与报告继续编辑。原版随机编排按钮仍保留原来的全局重排功能；此新增步骤用于保留当前主体的第二轮补充。

## 真实原版机制与冲突控制

共享 `J.Agent.enhance(project, {seed,strength,from,to,exclude})` 返回 `{project,report}`；`J.Agent.clearEnhancement(project)` 返回移除增强后的工程。内部调用原版 `J.omakase` 选择氛围与候选池，再由原版 `J.plan` 生成组件与完整参数。尊重原工程关闭的组件及扩展包开关，不改组件实现，不另外绘制文字或装饰。

直接使用 JavaScript 接口时先 `const ready = await J.Agent.prepare(raw)` 加载工程字体和音频，再调用 `J.Agent.enhance(ready.project, options)`。CLI 已完成此准备步骤。原版全局手法/效果参数锁定保持对应候选池和参数值；行锁与图层锁则直接跳过其时间段。

只取原生 `layer:'back'` 装饰和背景，沿用主体的实际几何、摄像机、配色和时间。原版 busy/subtle 筛选继续生效，重复装饰 ID 排除，已有非空背景保留。原版效果仅处理增强层本身；不改变主体的入场、保持、退场或转场。候选不是强制填满，部分镜头可能没有可用补充。

渲染时用同一个原生渲染器绘制主体及已有图层的真实透明前景，包含文字、字幕、装饰、运动、关键帧和转场，然后把其 alpha 扩展为保护区域。增强层在此区域被裁掉，再低透明度合成。遮罩宽度最多 640 像素，以额外边距覆盖抗锯齿边缘；此遮罩仅限制新增层的覆盖范围，不替代组件画面。密集前景或满屏人工图层可导致增强层大部分不可见。

锁定行和已有锁定图层覆盖的时间段跳过增强，包括之后新增的锁。若增强层自身已锁定，重抽或移除会报错，须经用户授权解锁。增强层在原版前/后景素材导出中只出现在后景，避免重复叠入前景。

## 保存、续编与边界

增强存为 `agent.layers` 中 `generator:'native-enhance'` 的完整原生工程。`renderLayer:'back'`、`protectBase:true`、`respectLocks:true` 控制共享渲染器的合成方式；`report` 记录种子、氛围、强度、范围、每镜头候选和跳过状态。主体与层内完整配方均由统一工程快照保存。无需网页即可创建、预览和导出。

主体后续改变位置、文字、运动时，保护遮罩按当前实际画面重新计算。大幅改变镜头时间/组件/分镜后应重新运行增强，使补充候选与新镜头一致。移除操作只删带生成标记的层，保留当前主体、已有人工层、音频和字体；不是恢复整个旧工程文件。

保护机制保证补充不绘制到检测到的原生前景保护区域。它不能判断音乐语义、画面是否漂亮或颜色是否合适，Agent 仍须比较主体版与增强版的真实预览，包括转场、间奏与繁忙镜头，选择合适密度。不要把整套原版全局随机重排直接覆盖到 AI 版以冒充此步骤。

`npm run test:enhance` 实际检查主体字段和配方一致、相同种子重现、重抽替换、移除恢复像素、前景保护区域逐像素一致、锁定帧、后续锁定、前景导出、网页按钮/保存/打开、命令行接口以及真实 MP4 解码。
