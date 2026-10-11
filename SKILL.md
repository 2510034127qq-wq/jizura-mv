---
name: jizura-mv
description: 使用完整 JIZURA 原生组件制作或编辑音乐 PV/MV、歌词动画和透明素材；支持 Agent 无界面渲染与原版网页编辑器的双向工程编辑。
---

# JIZURA PV/MV 制作

此目录就是完整 Skill。包含 860 个可选组件、标题/间奏两个特殊布局、27 套风格、共享 Canvas2D 引擎、字体资源、原版七语言编辑器和真实导出器。所有脚本按自身目录定位资源，不依赖调用方工作目录。

首次使用，在本 Skill 目录运行 `npm ci` 和 `npm run build`。需要 Node.js 22+、Python 3.10+ 和 Chromium。可直接使用已安装 Chrome/Edge；没有时运行 `npm run install:browser`，或通过 `JIZURA_BROWSER` 指定浏览器可执行文件。[README.md](README.md) 给出完整安装和运行命令。

## 制作与续编

1. 由 Agent 理解音乐、歌词和分镜；将已确认的歌词时间、镜头意图和字幕写成工程配置。Skill 不要求额外音乐模型。可嵌入原曲，亦可直接使用已知节拍和时间。
2. 使用 `node scripts/cli.mjs query --search "关键词"` 查询组件，或按 `--group layout` / `--id layout.center` 获取参数、组合示例和源码位置。查询无需启动浏览器。完整目录为 [references/components.json](references/components.json)，人工浏览用 [references/components.md](references/components.md)。根据字数、画面比例、标签和原生 fits/busy/treat 等规则选择组件。
3. 写原生工程字段与 `agent` 扩展。根据音乐与镜头意图组合主体布局、进入/保持/退出动画、背景、装饰、文字加工、摄像机、效果和转场；按阶段与层级协作，无需每帧固定组件数量。优先通过 `overrides[line]`、`cutTech` 指定组件，通过 `agent.cuts["line:cut"]` 指定全部原生参数及关键帧。正常制作使用本 Skill 的完整原生组件；配置和编排脚本由 Agent 编写，绘制由共享运行时执行。位置为设计像素，时间为秒，行/镜头索引从 0 开始。见 [references/project-format.md](references/project-format.md)。
4. `node scripts/cli.mjs create --spec storyboard.json --audio song.wav --out movie.jizura.json` 生成完整可编辑工程。`--audio` 可省略。会记录所有最终镜头、参数、时间、事件、种子和嵌入资源，供另一个 Agent 检查与续编。
5. 先用 `preview --project movie.jizura.json --time 2 --out baseline.png` 检查 AI 主体版。默认再执行 `enhance --project movie.jizura.json --seed 42 --strength standard --out enhanced.jizura.json`，叠加原版随机规划生成的后景装饰、背景及层内效果。保留主体版作为比较，预览增强后的代表镜头与转场；按歌曲密度选择轻/标准/较丰富，冲突或拥挤时改种子、减弱、排除镜头或 `clear-enhancement`。用户要求纯 AI 版、固定画面或禁止随机时跳过这一步。详见 [references/random-enhancement.md](references/random-enhancement.md)。
6. 用 `render --project enhanced.jizura.json --out movie.mp4` 导出最终选定版本。`--from/--to` 支持片段，`--clip 1:0` 支持独立镜头，`--format pngzip --transparent` 支持透明动画素材，`--format layers` 支持原版前景/后景序列。
7. 人工调整时启动 `editor --project enhanced.jizura.json`，让用户保存 `.jizura.json`。随后 `inspect --project edited.jizura.json` 读取实际修改。用 `edit --operations edits.json --out continued.jizura.json` 续编指定片段。增强层与种子随工程往返；大幅调整分镜后按需重抽同一层。实际操作示例见 [examples/edits.json](examples/edits.json)。

## 必须保留的状态

- 编辑用户已有工程时，先检查行锁与图层锁。`edit` 默认拒绝修改已锁定行/图层；只有用户明确要求时才提交 `unlock` 操作。不要通过原始 JSON 改写绕过锁检查。
- 使用原生组件 ID，不用 AE 导出的近似 ID 续编。原有 AE JSON 是历史兼容导出；完整工程交换必须使用 `.jizura.json`。
- 沿用所有不相关的原生字段、`agent` 字段、资源、种子、图层顺序、人工参数与关键帧。不要重新创建整个工程以修改一个片段。
- 无人声/无歌词的段落照音乐编排背景、装饰、运动和效果；使用原生 `[interlude 秒数]` 或明确间奏工程，不虚构歌词。需要保持留白的镜头设置 `overrides[line].enhance:false` 或 `agent.cuts["line:cut"].enhance:false`，随机补充会跳过。
- 参数输出来自原生 `plan`；静态索引记录字段与样例，动态条件、合法值和调用方式以对应源码和 [references/EXPRESSION_PACKS.md](references/EXPRESSION_PACKS.md) 为准。不要把样例当作唯一合法参数。
- 导出完成后检查真实输出文件、时长、画面与音轨。H.264 没有 alpha，透明素材应使用 PNG 序列；AAC 不可用时脚本同时保存 WAV。

可用 `npm test` 运行全组件、像素一致性、工程往返、锁定和真实导出测试；`npm run test:enhance` 验证增强、前景保护、锁定、回退、网页往返与真实视频；`node tests/portability.mjs` 检查脱离本目录后的独立安装与运行。验证结果和限制见 [references/verification.md](references/verification.md)。
