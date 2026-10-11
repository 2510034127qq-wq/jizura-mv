# JIZURA 完整 Agent Skill

交付单位为本目录 `jizura-mv`。862 个注册组件（860 个可选组件 + 标题与间奏）、27 套视觉风格、全部原生绘制与组合逻辑、原网页编辑器、必要资源和 Agent 脚本均在此目录。完整源码只有一份，位于 `runtime/native`；网页和无界面入口加载同一组文件。

## 安装

将整个目录复制到任意位置，或放入目标项目的 `.agents/skills/jizura-mv` / Agent 的技能目录。不要只复制 `SKILL.md`。

环境：Node.js 22+、npm、Python 3.10+。Python 只用于保留原版 UI 的七语言构建，无需 pip 包。无界面调用需要 Chromium：优先使用已安装 Chrome/Edge，否则安装 Playwright Chromium。

```powershell
cd <复制后的 Skill 目录>
npm ci
npm run build
# 电脑没有 Chrome/Edge 时：
npm run install:browser
```

`JIZURA_BROWSER` 可指定任意兼容的 Chromium 可执行文件；`JIZURA_PYTHON` 可指定 Python。Playwright 浏览器默认安装到本 Skill 的 `node_modules/.browsers`。依赖版本在 `package-lock.json` 固定。

运行时不连接外部网络。40 个原字体家族、42 个 family/weight 规格、79 个完整字体文件及其 OFL 已附带，约 559 MiB；不使用近似字体、不裁剪字符集。`scripts/vendor-fonts.mjs` 仅供维护者重新获取已声明的原规格，普通安装不必运行。

## Agent 调用

以下命令在 Skill 目录运行；也可从其他目录用脚本的绝对路径调用。工程和输出路径始终相对调用方。

```powershell
# 查询与选择组件（此命令不启动浏览器）
node scripts/cli.mjs query --group layout --search "环" --limit 10
node scripts/cli.mjs query --id layout.center

# 创建包含日文主镜头、中文字幕图层、关键帧和转场的完整工程
node scripts/cli.mjs create --spec examples/storyboard.json --out output/movie.jizura.json
# 添加原曲：上条命令增加 --audio song.wav（也支持浏览器可解码的 MP3 等）

# 检查镜头和最终参数
node scripts/cli.mjs inspect --project output/movie.jizura.json --out output/inspect.json
node scripts/cli.mjs preview --project output/movie.jizura.json --time 1 --out output/frame.png

# AI 主体版之后，叠加原版随机补充（保留主体，避开前景和锁定片段）
node scripts/cli.mjs enhance --project output/movie.jizura.json --seed 42 --strength standard --out output/enhanced.jizura.json
node scripts/cli.mjs preview --project output/enhanced.jizura.json --time 1 --out output/enhanced.png
# 重抽改种子即可；移除只删除随机增强层
node scripts/cli.mjs clear-enhancement --project output/enhanced.jizura.json --out output/baseline-again.jizura.json

# 锁定第 0 行、修改第 1 行并调整第 2 行的时间
node scripts/cli.mjs edit --project output/movie.jizura.json --operations examples/edits.json --out output/revised.jizura.json

# 全视频、片段、单镜头、透明素材、前后景序列
node scripts/cli.mjs render --project output/revised.jizura.json --out output/movie.mp4
node scripts/cli.mjs render --project output/revised.jizura.json --from 2 --to 3 --out output/segment.mp4
node scripts/cli.mjs render --project output/revised.jizura.json --clip 1:0 --out output/clip.mp4
node scripts/cli.mjs render --project output/revised.jizura.json --format pngzip --transparent --from 0 --to 2 --out output/alpha.zip
node scripts/cli.mjs render --project output/revised.jizura.json --format layers --from 0 --to 2 --out output/layers.zip
```

默认使用工程的画幅、分辨率和 fps，可用 `--res 720 --fps 24` 调整。导出器支持原来的 720p–4K、24/30/60fps 等；具体速度和编码支持取决于设备。主镜头和附加图层都使用原生组件；多个背景/装饰/字幕通过图层组合，顺序由 `z` 控制。MP4 使用原版 WebCodecs、mp4-muxer 和真实浏览器文件流。透明输出使用无损 PNG ZIP。视频缺少 AAC 支持时会同时导出 WAV，供后期或兼容播放器使用。

## 网页启动与人工调整

```powershell
node scripts/cli.mjs editor --project output/revised.jizura.json --port 8765
# 或 npm start，打开空工程编辑器
```

打开终端输出的本地 URL，默认简体中文；可加 `--lang ja|en|zh-hant|ko|id|vi`。`Ctrl+C` 停止服务。原版简单/详细/手机模式、随机编排、历史、局部重抽、锁定、时间轴、歌词编辑、手法筛选、全部风格、音频与字体上传、自动保存及导出控件保留。

底部新增「Agent 工程」面板可编辑任意镜头的原生参数、运动控制、关键帧和附加图层，也可管理多个本地工程。原版组件选择控件仍可修改 AI 镜头；切换组件时，旧组件的专属参数和对应参数关键帧会释放，公共位置/时间控制继续保留。随机重抽会释放未锁定镜头的固定配方。

同一面板的「原版随机增强」可在当前 AI 版上补充背景和后景装饰，调整强度、种子、时间段，重抽或移除。使用实际前景遮罩保护主体与字幕，锁定时间段跳过；需预览确认整体视觉密度。详细机制与接口见 [随机增强](references/random-enhancement.md)。

AI 显式指定的 start/end 可以通过原版时间控件修改；歌词撤销/重做和方案历史也会恢复 Agent 参数。附加图层保留原生背景图形，可用 `background:false` 单独关闭。

使用原版「保存」或新面板保存完整 `.jizura.json`，再让 AI `inspect` / `edit`。音频和上传字体随工程嵌入，不依赖另一台电脑的浏览器数据库。浏览器工程库受本地存储容量限制；较大的音频工程请保存文件。

## 文档与验证

- [组件索引](references/components.md) / [机器查询索引](references/components.json)：全部 ID、名称、分类、标签、参数、方法签名、源码位置与调用例子。
- [统一工程格式与接口](references/project-format.md)：原生字段、全部配方参数、时间轴、关键帧、图层、资源和锁定。
- [源码审计](references/audit.md)：原始提交、实际数量、逐项比对与结构选择。
- [验收结果](references/verification.md)：真实渲染、网页往返、视频解码与可移植安装证据。

```powershell
npm test
npm run test:enhance
node tests/portability.mjs
```

源文件修改后运行 `npm run build`。无需将 `node_modules`、`dist` 或输出文件作为另一套项目交付；这些目录可重建。原始 JIZURA MIT 许可证及 mp4-muxer MIT 声明随 Skill 保留，字体许可见 `assets/fonts/*-OFL.txt`。
