# 完整组件目录

索引由真实浏览器加载原生注册表生成；包含特殊标题/间奏组件。参数类型为原生 plan 采样结果，静态读取字段一并列出。全部方法、条件和动态字段以对应源码为最终定义。查询完整 JSON 用 `node scripts/cli.mjs query --id layout.center`。

- layout: 184 可选 / 186 注册
- enter: 125 可选 / 125 注册
- hold: 52 可选 / 52 注册
- exit: 109 可选 / 109 注册
- decor: 130 可选 / 130 注册
- treat: 62 可选 / 62 注册
- bg: 66 可选 / 66 注册
- cam: 36 可选 / 36 注册
- fx: 69 可选 / 69 注册
- trans: 27 可选 / 27 注册

## layout.center · 中央

布局、排版与文字组合：居中 / Center (center)。标签：glitch, calm, pop, editorial, emotional, horror；参数位置：params。

参数：accent, font, ox, oy, sub, sx, track, under。

源码：runtime/native/06_layouts.js:150 (fits)；runtime/native/06_layouts.js:151 (plan)；runtime/native/06_layouts.js:152 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"center","params":{"font":"zenkaku","sx":1,"track":0.1169649312645197,"sub":true,"under":false,"accent":true,"ox":-0.010574964224360883,"oy":0.014407992158085109}}}
```

## layout.mixed · 大小ミックス

布局、排版与文字组合：大小混排 / Mixed (mixed)。标签：calm, pop, editorial, emotional；参数位置：params。

参数：accentIdx, fontBig, fontSmall, mode, rotAmp, smallK。

源码：runtime/native/06_layouts.js:169 (fits)；runtime/native/06_layouts.js:170 (plan)；runtime/native/06_layouts.js:171 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"mixed","params":{"fontBig":"mincho_light","fontSmall":"gothic_med","mode":"stair","rotAmp":8.46432875096798,"smallK":0.4646064870385453,"accentIdx":14}}}
```

## layout.vcols · 縦書き

布局、排版与文字组合：竖排 / Vertical text (vcols)。标签：glitch, calm, editorial, emotional, horror；参数位置：params。

参数：cols, font, perCol, side, variant。

源码：runtime/native/06_layouts.js:207 (fits)；runtime/native/06_layouts.js:208 (plan)；runtime/native/06_layouts.js:213 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"vcols","params":{"variant":"split","cols":3,"font":"gothic_black","side":"dim","perCol":4}}}
```

## layout.marquee · 流れる帯

布局、排版与文字组合：流动横幅 / Scrolling banner (marquee)。标签：glitch, graphic；参数位置：params。

参数：font, rowStyle, rows, speed, sx。

源码：runtime/native/06_layouts.js:241 (fits)；runtime/native/06_layouts.js:242 (plan)；runtime/native/06_layouts.js:243 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"marquee","params":{"rows":4,"rowStyle":"box","speed":0.7639582995092495,"font":"zenkaku","sx":1.25}}}
```

## layout.tile · 敷き詰め

布局、排版与文字组合：满版平铺 / Tiled text (tile)。标签：glitch, graphic；参数位置：params。

参数：flicker, font, knock, rowsN, tileFont, unit。

源码：runtime/native/06_layouts.js:241 (fits)；runtime/native/06_layouts.js:270 (plan)；runtime/native/06_layouts.js:271 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"tile","params":{"unit":"chunk","knock":"box","flicker":true,"font":"zenkaku","tileFont":"mincho","rowsN":16}}}
```

## layout.scatter · 散らし

布局、排版与文字组合：散落 / Scatter (scatter)。标签：glitch, pop；参数位置：params。

参数：extras, font, fontB。

源码：runtime/native/06_layouts.js:300 (fits)；runtime/native/06_layouts.js:301 (plan)；runtime/native/06_layouts.js:302 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"scatter","params":{"font":"zenkaku","fontB":"dela","extras":true}}}
```

## layout.ring · 円環

布局、排版与文字组合：环形 / Ring (ring)。标签：pop；参数位置：params。

参数：R, center, font, fontC, orient, speed。

源码：runtime/native/06_layouts.js:169 (fits)；runtime/native/06_layouts.js:328 (plan)；runtime/native/06_layouts.js:329 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"ring","params":{"orient":"upright","center":"word","speed":-7.01666628010571,"R":0.29734696718165654,"font":"mincho_light","fontC":"gothic_black"}}}
```

## layout.wave · 波の軌跡

布局、排版与文字组合：波浪轨迹 / Wave (wave)。标签：pop；参数位置：params。

参数：amp, font, freq, trail, travel。

源码：runtime/native/06_layouts.js:169 (fits)；runtime/native/06_layouts.js:363 (plan)；runtime/native/06_layouts.js:364 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"wave","params":{"amp":0.14210895486408845,"freq":1.393315175920725,"trail":7,"font":"zenkaku","travel":-0.3119534542202018}}}
```

## layout.huge · 画面突き抜け

布局、排版与文字组合：超出画面 / Oversized text (huge)。标签：glitch, pop, graphic, emotional, horror；参数位置：params。

参数：dir, font, grad, label。

源码：runtime/native/06_layouts.js:389 (fits)；runtime/native/06_layouts.js:390 (plan)；runtime/native/06_layouts.js:391 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"huge","params":{"font":"zenkaku","grad":false,"dir":-1,"label":true}}}
```

## layout.labels · ラベル貼り

布局、排版与文字组合：标签贴 / Labels (labels)。标签：pop, graphic；参数位置：params。

参数：center, font, fontC, unit, variant。

源码：runtime/native/06_layouts.js:412 (fits)；runtime/native/06_layouts.js:413 (plan)；runtime/native/06_layouts.js:414 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"labels","params":{"variant":"scatter","unit":"word","center":"word","font":"gothic_med","fontC":"gothic_black"}}}
```

## layout.condensed · 縦長圧縮

布局、排版与文字组合：瘦长压缩 / Condensed (condensed)。标签：glitch, graphic, emotional；参数位置：params。

参数：count, font, sx, sy。

源码：runtime/native/06_layouts.js:460 (fits)；runtime/native/06_layouts.js:461 (plan)；runtime/native/06_layouts.js:462 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"condensed","params":{"count":1,"sx":0.5304159197583794,"sy":1.2483287939801813,"font":"dela"}}}
```

## layout.gloss · 注釈

布局、排版与文字组合：注解 / Annotation (gloss)。标签：calm, editorial；参数位置：params。

参数：bgText, font, side, vertNote。

源码：runtime/native/06_layouts.js:241 (fits)；runtime/native/06_layouts.js:478 (plan)；runtime/native/06_layouts.js:479 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"gloss","params":{"font":"dela","side":"left","bgText":true,"vertNote":false}}}
```

## layout.type · タイプ

布局、排版与文字组合：打字 / Type (type)。标签：calm, editorial, horror；参数位置：params。

参数：align, font, prompt。

源码：runtime/native/06_layouts.js:512 (fits)；runtime/native/06_layouts.js:513 (plan)；runtime/native/06_layouts.js:514 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"type","params":{"font":"mincho","align":"center","prompt":true}}}
```

## layout.diag · 斜め帯

布局、排版与文字组合：斜带 / Diagonal band (diag)。标签：pop, graphic；参数位置：params。

参数：ang, band, font, second。

源码：runtime/native/06_layouts.js:530 (fits)；runtime/native/06_layouts.js:531 (plan)；runtime/native/06_layouts.js:532 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"diag","params":{"ang":-18.28119398187846,"band":"accent","second":false,"font":"gothic_black"}}}
```

## layout.circle · 円窓

布局、排版与文字组合：圆窗 / Circle (circle)。标签：calm, graphic, editorial, emotional；参数位置：params。

参数：font, off, variant, vertical。

源码：runtime/native/06_layouts.js:460 (fits)；runtime/native/06_layouts.js:556 (plan)；runtime/native/06_layouts.js:557 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"circle","params":{"variant":"ring","vertical":false,"font":"mincho_light","off":-0.029500011596828704}}}
```

## layout.stack · 残像スタック

布局、排版与文字组合：残影堆叠 / Echo stack (stack)。标签：glitch, calm, editorial, emotional, horror；参数位置：params。

参数：copies, dir, font, gap, style, xs。

源码：runtime/native/06_layouts.js:241 (fits)；runtime/native/06_layouts.js:585 (plan)；runtime/native/06_layouts.js:586 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"stack","params":{"copies":5,"dir":-1,"style":"outline","font":"mincho","gap":0.8695627633761615,"xs":0.014961815122514967}}}
```

## layout.pill · カプセル

布局、排版与文字组合：胶囊 / Pill (pill)。标签：pop, graphic；参数位置：params。

参数：font, grad, smalls。

源码：runtime/native/06_layouts.js:530 (fits)；runtime/native/06_layouts.js:604 (plan)；runtime/native/06_layouts.js:605 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"pill","params":{"grad":false,"font":"zenkaku","smalls":true}}}
```

## layout.title · タイトル

布局、排版与文字组合：标题 / タイトル (title)。标签：；参数位置：params。

参数：font。

源码：runtime/native/06_layouts.js:639 (fits)；runtime/native/06_layouts.js:640 (plan)；runtime/native/06_layouts.js:641 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"title","params":{"font":"mincho_light"}}}
```

## layout.interlude · 間奏

布局、排版与文字组合：间奏 / 間奏 (interlude)。标签：；参数位置：params。

参数：showTitle, titleText, variant。

源码：runtime/native/06_layouts.js:639 (fits)；runtime/native/06_layouts.js:653 (plan)；runtime/native/06_layouts.js:654 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"interlude","params":{"variant":"rings"}}}
```

## layout.hrFlashlight · 懐中電灯

布局、排版与文字组合：手电筒 / Flashlight (hrFlashlight)。标签：horror, emotional；参数位置：params。

参数：dark, dust, font, path, rk, sx, sy。

源码：runtime/native/11p_horror1.js:91 (fits)；runtime/native/11p_horror1.js:92 (plan)；runtime/native/11p_horror1.js:95 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"hrFlashlight","params":{"font":"zenkaku","path":"read","rk":1.0520102734677494,"dark":0.9148688290128485,"dust":true,"sx":-0.2650908464100212,"sy":-0.0634497853461653}}}
```

## layout.hrDoorGap · 扉の隙間

布局、排版与文字组合：门缝 / Door Gap (hrDoorGap)。标签：horror, editorial；参数位置：params。

参数：font, pause, side, vert, wedge。

源码：runtime/native/06_layouts.js:412 (fits)；runtime/native/11p_horror1.js:143 (plan)；runtime/native/11p_horror1.js:147 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"hrDoorGap","params":{"font":"dela","vert":false,"side":1,"pause":0.1977083285013214,"wedge":false}}}
```

## layout.hrWallScrawl · 壁の落書き

布局、排版与文字组合：墙上涂写 / Wall Scrawl (hrWallScrawl)。标签：horror, glitch；参数位置：params。

参数：font, hand, mainHand, red, rise, rows。

源码：runtime/native/11p_horror1.js:195 (fits)；runtime/native/11p_horror1.js:196 (plan)；runtime/native/11p_horror1.js:199 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"hrWallScrawl","params":{"font":"mincho_light","hand":"klee","rows":8,"mainHand":false,"red":0.08478138168808072,"rise":0.7217556722578593}}}
```

## layout.hrCctv · 監視モニター

布局、排版与文字组合：监控屏幕 / CCTV Monitor (hrCctv)。标签：horror, glitch, editorial；参数位置：params。

参数：act, box, cam0, font, v。

源码：runtime/native/11p_horror1.js:91 (fits)；runtime/native/11p_horror1.js:243 (plan)；runtime/native/11p_horror1.js:246 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"hrCctv","params":{"font":"zenkaku","v":"single","act":1,"cam0":10,"box":true}}}
```

## layout.hrOuija · 降霊盤

布局、排版与文字组合：通灵板 / Spirit Board (hrOuija)。标签：horror；参数位置：params。

参数：font, fontB, jit, latin。

源码：runtime/native/11p_horror1.js:195 (fits)；runtime/native/11p_horror1.js:317 (plan)；runtime/native/11p_horror1.js:320 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"hrOuija","params":{"font":"dela","fontB":"mincho","jit":0.6196874782559462,"latin":false}}}
```

## layout.hrMissing · 尋ね人

布局、排版与文字组合：寻人启事 / Missing Poster (hrMissing)。标签：horror, editorial；参数位置：params。

参数：ang, font, fontH, off, stains, torn。

源码：runtime/native/06_layouts.js:412 (fits)；runtime/native/11p_horror1.js:389 (plan)；runtime/native/11p_horror1.js:392 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"hrMissing","params":{"font":"mincho_light","fontH":"zenkaku","ang":-0.8604170049075037,"off":0.03696493126451969,"torn":1,"stains":3}}}
```

## layout.hrWrongOne · 一字だけ違う

布局、排版与文字组合：唯一不对的字 / The Wrong Glyph (hrWrongOne)。标签：horror, editorial, calm；参数位置：params。

参数：ang, font, nums, red, sink, wrong。

源码：runtime/native/06_layouts.js:169 (fits)；runtime/native/11p_horror1.js:462 (plan)；runtime/native/11p_horror1.js:469 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"hrWrongOne","params":{"font":"dela","wrong":4,"ang":90,"red":false,"nums":true,"sink":0.1561831764644012}}}
```

## layout.hrRisingDark · 闇から這い出る

布局、排版与文字组合：从黑暗爬出 / Out of the Dark (hrRisingDark)。标签：horror, emotional；参数位置：params。

参数：font, pulls, rim, span。

源码：runtime/native/11p_horror1.js:195 (fits)；runtime/native/11p_horror1.js:509 (plan)；runtime/native/11p_horror1.js:512 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"hrRisingDark","params":{"font":"mincho_light","pulls":5,"span":0.5065624927519821,"rim":false}}}
```

## layout.hrRedacted · 黒塗り文書

布局、排版与文字组合：涂黑文件 / Redacted File (hrRedacted)。标签：horror, editorial；参数位置：params。

参数：font, leak, row, stamp, stampAng。

源码：runtime/native/11p_horror1.js:553 (fits)；runtime/native/11p_horror1.js:554 (plan)；runtime/native/11p_horror1.js:557 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"hrRedacted","params":{"font":"gothic_med","row":0.5386630351841449,"stamp":true,"stampAng":-7.535671249032021,"leak":0.1371720725321211}}}
```

## layout.hrStaticTv · 砂嵐のテレビ

布局、排版与文字组合：雪花电视 / Static TV (hrStaticTv)。标签：horror, glitch；参数位置：params。

参数：ant, font, off, tune。

源码：runtime/native/11p_horror1.js:195 (fits)；runtime/native/11p_horror1.js:618 (plan)；runtime/native/11p_horror1.js:621 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"hrStaticTv","params":{"font":"zenkaku","off":0.028997276388108728,"tune":0.37541665700264276,"ant":30.92865750193596}}}
```

## layout.hrSpiritPhoto · 心霊写真

布局、排版与文字组合：灵异照片 / Spirit Photo (hrSpiritPhoto)。标签：horror, emotional；参数位置：params。

参数：ang, hand, side, spot, win。

源码：runtime/native/06_layouts.js:412 (fits)；runtime/native/11p_horror1.js:677 (plan)；runtime/native/11p_horror1.js:680 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"hrSpiritPhoto","params":{"hand":"klee","ang":2.416439699009061,"spot":[0.4385416425066069,0.5424123281612991],"win":true,"side":-1}}}
```

## layout.hrWrongShadow · 影が違う

布局、排版与文字组合：不对劲的影子 / Wrong Shadow (hrWrongShadow)。标签：horror, emotional, graphic；参数位置：params。

参数：dir, font, k, lean, turn。

源码：runtime/native/11p_horror1.js:740 (fits)；runtime/native/11p_horror1.js:741 (plan)；runtime/native/11p_horror1.js:744 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"hrWrongShadow","params":{"font":"mincho_light","k":1.7966575879603623,"turn":0.5254166570026427,"dir":-1,"lean":5.239069084404036}}}
```

## layout.knSlamStack · 積み上げ

布局、排版与文字组合：堆叠重击 / Slam Stack (knSlamStack)。标签：pop, graphic；参数位置：params。

参数：acc, align, font, from, rule, tilt。

源码：runtime/native/11p_kinetic1.js:149 (fits)；runtime/native/11p_kinetic1.js:151 (plan)；runtime/native/11p_kinetic1.js:155 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"knSlamStack","params":{"font":"zenkaku","align":"left","from":"scale","acc":4,"tilt":3.374045378062874,"rule":true}}}
```

## layout.knQuarterTurn · 直角ターン

布局、排版与文字组合：直角转向 / Quarter Turn (knQuarterTurn)。标签：pop, graphic, editorial；参数位置：params。

参数：acc, end, font, joint, sgn。

源码：runtime/native/06_layouts.js:169 (fits)；runtime/native/11p_kinetic1.js:220 (plan)；runtime/native/11p_kinetic1.js:223 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"knQuarterTurn","params":{"font":"mincho_light","sgn":-1,"end":"all","acc":1,"joint":false}}}
```

## layout.knSwapCenter · 入れ替わり

布局、排版与文字组合：逐字替换 / Word Swap (knSwapCenter)。标签：pop, graphic, glitch；参数位置：params。

参数：acc, font, fontL, mode, ticks, x, y。

源码：runtime/native/11p_kinetic1.js:149 (fits)；runtime/native/11p_kinetic1.js:283 (plan)；runtime/native/11p_kinetic1.js:286 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"knSwapCenter","params":{"font":"zenkaku","fontL":"mincho_light","mode":"punch","ticks":false,"acc":true}}}
```

## layout.knZoomDive · 文字へ潜る

布局、排版与文字组合：钻入字中 / Dive Into Letter (knZoomDive)。标签：pop, emotional, graphic；参数位置：params。

参数：acc, cap, font。

源码：runtime/native/06_layouts.js:169 (fits)；runtime/native/11p_kinetic1.js:338 (plan)；runtime/native/11p_kinetic1.js:341 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"knZoomDive","params":{"font":"mincho_light","cap":true,"acc":true}}}
```

## layout.knFlowSnap · 流れて整列

布局、排版与文字组合：流动后对齐 / Flow and Snap (knFlowSnap)。标签：graphic, pop, editorial；参数位置：params。

参数：acc, amp, font, grid, lam。

源码：runtime/native/11p_kinetic1.js:390 (fits)；runtime/native/11p_kinetic1.js:392 (plan)；runtime/native/11p_kinetic1.js:395 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"knFlowSnap","params":{"font":"zenkaku","amp":0.14449863819405437,"lam":0.5442708212533034,"grid":"rules","acc":3}}}
```

## layout.knSeesaw · シーソー

布局、排版与文字组合：跷跷板 / Seesaw (knSeesaw)。标签：pop, graphic；参数位置：params。

参数：acc, font, fulc, order, x。

源码：runtime/native/06_layouts.js:300 (fits)；runtime/native/11p_kinetic1.js:470 (plan)；runtime/native/11p_kinetic1.js:473 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"knSeesaw","params":{"font":"zenkaku","order":"out","acc":true,"fulc":"round"}}}
```

## layout.knTypeSlam · タイプ→スラム

布局、排版与文字组合：打字→重击 / Type then Slam (knTypeSlam)。标签：pop, graphic, editorial；参数位置：params。

参数：burst, font, key, side。

源码：runtime/native/11p_kinetic1.js:524 (fits)；runtime/native/11p_kinetic1.js:526 (plan)；runtime/native/11p_kinetic1.js:529 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"knTypeSlam","params":{"font":"zenkaku","key":"last","side":"below","burst":false}}}
```

## layout.knRhythmCuts · 語のカット割り

布局、排版与文字组合：逐字分镜 / Word Jump Cuts (knRhythmCuts)。标签：pop, graphic, glitch；参数位置：params。

参数：fin, font, fontB, shots, side, x, y。

源码：runtime/native/11p_kinetic1.js:149 (fits)；runtime/native/11p_kinetic1.js:590 (plan)；runtime/native/11p_kinetic1.js:594 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"knRhythmCuts","params":{"font":"zenkaku","fontB":"gothic_black","shots":["tilt","huge","small","vert","crop","band"],"side":1,"fin":"center"}}}
```

## layout.knPathRide · ループ軌道

布局、排版与文字组合：环形轨道 / Loop Track (knPathRide)。标签：pop, graphic；参数位置：params。

参数：acc, font, rail, side。

源码：runtime/native/06_layouts.js:300 (fits)；runtime/native/11p_kinetic1.js:677 (plan)；runtime/native/11p_kinetic1.js:680 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"knPathRide","params":{"font":"zenkaku","side":-1,"rail":"line","acc":false}}}
```

## layout.knGearWords · 歯車

布局、排版与文字组合：齿轮 / Gears (knGearWords)。标签：pop, graphic；参数位置：params。

参数：dir, fillMode, font。

源码：runtime/native/06_layouts.js:169 (fits)；runtime/native/11p_kinetic1.js:723 (plan)；runtime/native/11p_kinetic1.js:726 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"knGearWords","params":{"font":"zenkaku","dir":-1,"fillMode":"alt"}}}
```

## layout.knCollide · 正面衝突

布局、排版与文字组合：正面冲撞 / Head-on Crash (knCollide)。标签：pop, graphic, glitch；参数位置：params。

参数：acc, at, font, spark。

源码：runtime/native/06_layouts.js:169 (fits)；runtime/native/11p_kinetic1.js:778 (plan)；runtime/native/11p_kinetic1.js:781 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"knCollide","params":{"font":"zenkaku","acc":"none","spark":true,"at":0.34464328750967976}}}
```

## layout.knTumble · 箱転がし

布局、排版与文字组合：翻滚方块 / Tumbling Boxes (knTumble)。标签：pop, graphic；参数位置：params。

参数：acc, box, floor, font, li, w, x, y。

源码：runtime/native/06_layouts.js:169 (fits)；runtime/native/11p_kinetic1.js:844 (plan)；runtime/native/11p_kinetic1.js:847 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"knTumble","params":{"font":"zenkaku","box":"none","acc":2,"floor":false}}}
```

## layout.knReflow · 縦から横へ

布局、排版与文字组合：竖排转横排 / Vertical to Line (knReflow)。标签：editorial, graphic, emotional；参数位置：params。

参数：at, dir, font, swirl。

源码：runtime/native/06_layouts.js:169 (fits)；runtime/native/11p_kinetic1.js:893 (plan)；runtime/native/11p_kinetic1.js:897 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"knReflow","params":{"font":"dela","dir":"v2h","swirl":-1,"at":0.3977083285013214}}}
```

## layout.knPadGrid · パッド

布局、排版与文字组合：打击垫 / Drum Pads (knPadGrid)。标签：pop, graphic, glitch；参数位置：params。

参数：beat, flash, font, round。

源码：runtime/native/11p_kinetic1.js:149 (fits)；runtime/native/11p_kinetic1.js:930 (plan)；runtime/native/11p_kinetic1.js:933 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"knPadGrid","params":{"font":"zenkaku","round":false,"flash":"accent","beat":false}}}
```

## layout.lowerThird · 下部テロップ

布局、排版与文字组合：下方字幕条 / Lower third (lowerThird)。标签：editorial, calm, emotional；参数位置：params。

参数：bar, font, label, lift, side。

源码：runtime/native/11p_layoutsA.js:195 (fits)；runtime/native/11p_layoutsA.js:196 (plan)；runtime/native/11p_layoutsA.js:197 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"lowerThird","params":{"font":"zenkaku","side":"right","bar":"tab","label":"copy","lift":0.009912552675232292}}}
```

## layout.corners · 対角配置

布局、排版与文字组合：对角配置 / Opposite corners (corners)。标签：graphic, editorial, calm；参数位置：params。

参数：chunks, diag, font, link, ratio。

源码：runtime/native/11p_kinetic1.js:149 (fits)；runtime/native/11p_layoutsA.js:253 (plan)；runtime/native/11p_layoutsA.js:254 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"corners","params":{"chunks":["夜明けの","色を覚えてる"],"font":"mincho_light","diag":"anti","link":"straight","ratio":0.76}}}
```

## layout.staircase · 階段

布局、排版与文字组合：阶梯 / Staircase (staircase)。标签：graphic, pop, editorial；参数位置：params。

参数：dir, flip, font, nums, shrink, tread, units。

源码：runtime/native/11p_kinetic1.js:149 (fits)；runtime/native/11p_layoutsA.js:315 (plan)；runtime/native/11p_layoutsA.js:323 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"staircase","params":{"units":["夜明けの","色を","覚え","てる"],"dir":"up","flip":false,"shrink":0.8501666628010571,"font":"mincho_light","tread":"line","nums":false}}}
```

## layout.zigzag · ジグザグ

布局、排版与文字组合：锯齿 / Zigzag (zigzag)。标签：pop, graphic；参数位置：params。

参数：amp, font, orient, phase, rails, tilt。

源码：runtime/native/11p_kinetic1.js:390 (fits)；runtime/native/11p_layoutsA.js:380 (plan)；runtime/native/11p_layoutsA.js:384 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"zigzag","params":{"font":"zenkaku","orient":"h","amp":0.31416439699009063,"phase":1,"rails":"over","tilt":true}}}
```

## layout.arcTop · 虹の弧

布局、排版与文字组合：彩虹弧 / Rainbow arc (arcTop)。标签：pop, emotional, graphic；参数位置：params。

参数：font, guide, span, under。

源码：runtime/native/11p_kinetic1.js:390 (fits)；runtime/native/11p_layoutsA.js:435 (plan)；runtime/native/11p_layoutsA.js:436 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"arcTop","params":{"font":"gothic_black","span":134.66575879603624,"guide":"ticks","under":"no"}}}
```

## layout.spiral · 螺旋

布局、排版与文字组合：螺旋 / Spiral (spiral)。标签：emotional, graphic, calm；参数位置：params。

参数：dir, fill, font, guide, speed。

源码：runtime/native/06_layouts.js:169 (fits)；runtime/native/11p_layoutsA.js:498 (plan)；runtime/native/11p_layoutsA.js:499 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"spiral","params":{"font":"mincho_light","dir":-1,"speed":5.885416425066069,"guide":false,"fill":"repeat"}}}
```

## layout.gridCells · 升目

布局、排版与文字组合：方格 / Grid cells (gridCells)。标签：graphic, editorial, pop；参数位置：params。

参数：acc, fill, font, gap, nums。

源码：runtime/native/11p_kinetic1.js:149 (fits)；runtime/native/11p_layoutsA.js:563 (plan)；runtime/native/11p_layoutsA.js:564 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"gridCells","params":{"font":"mincho_light","gap":0.1,"acc":37,"fill":"ink","nums":true}}}
```

## layout.dropCap · 大きな頭文字

布局、排版与文字组合：首字放大 / Drop cap (dropCap)。标签：editorial, emotional, calm；参数位置：params。

参数：cap, capFont, font, meta, rules。

源码：runtime/native/11p_layoutsA.js:613 (fits)；runtime/native/11p_layoutsA.js:614 (plan)；runtime/native/11p_layoutsA.js:615 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"dropCap","params":{"capFont":"dela","font":"dela","cap":"accent","rules":false,"meta":true}}}
```

## layout.justified · 版面

布局、排版与文字组合：版心 / Justified (justified)。标签：editorial, calm, emotional；参数位置：params。

参数：dens, fillFont, font, mark, pos。

源码：runtime/native/11p_layoutsA.js:692 (fits)；runtime/native/11p_layoutsA.js:693 (plan)；runtime/native/11p_layoutsA.js:694 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"justified","params":{"font":"mincho_light","fillFont":"mincho","mark":"under","pos":0.66,"dens":0.06596502107009292}}}
```

## layout.frameBox · 額縁

布局、排版与文字组合：画框 / Picture frame (frameBox)。标签：editorial, calm, graphic；参数位置：params。

参数：caps, font, shape, style。

源码：runtime/native/11p_layoutsA.js:195 (fits)；runtime/native/11p_layoutsA.js:762 (plan)；runtime/native/11p_layoutsA.js:763 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"frameBox","params":{"font":"mincho","style":"corners","caps":"tl-br","shape":"wide"}}}
```

## layout.bubble · 吹き出し

布局、排版与文字组合：对话框 / Bubble (bubble)。标签：pop, emotional；参数位置：params。

参数：burst, font, off, shape, style, tail, tilt。

源码：runtime/native/11p_layoutsA.js:195 (fits)；runtime/native/11p_layoutsA.js:830 (plan)；runtime/native/11p_layoutsA.js:831 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"bubble","params":{"font":"zenkaku","shape":"thought","style":"outline","tail":-1,"off":-0.025218618311919273,"tilt":1.1221361341886222,"burst":true}}}
```

## layout.subtitleBar · 字幕帯

布局、排版与文字组合：字幕条 / Subtitle bar (subtitleBar)。标签：emotional, calm, editorial；参数位置：params。

参数：bar, big, bigFont, drift, font, place, tc。

源码：runtime/native/11p_layoutsA.js:878 (fits)；runtime/native/11p_layoutsA.js:879 (plan)；runtime/native/11p_layoutsA.js:880 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"subtitleBar","params":{"font":"mincho","bigFont":"mincho_light","big":"dim","bar":0.12424123281612992,"tc":"rec","place":"band","drift":1}}}
```

## layout.ticker · ティッカー

布局、排版与文字组合：新闻跑马灯 / Ticker (ticker)。标签：pop, glitch, graphic；参数位置：params。

参数：bug, font, main, speed, tag。

源码：runtime/native/06_layouts.js:207 (fits)；runtime/native/11p_layoutsA.js:944 (plan)；runtime/native/11p_layoutsA.js:945 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"ticker","params":{"font":"zenkaku","tag":"ON AIR","speed":0.9885416425066069,"main":"center","bug":true}}}
```

## layout.splitScreen · 二分割

布局、排版与文字组合：二分割 / Split screen (splitScreen)。标签：graphic, pop, editorial；参数位置：params。

参数：font, plate, side, split, tilt。

源码：runtime/native/06_layouts.js:530 (fits)；runtime/native/11p_layoutsA.js:1011 (plan)；runtime/native/11p_layoutsA.js:1012 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"splitScreen","params":{"font":"zenkaku","split":"v","plate":"accent","side":-1,"tilt":14.478138168808073}}}
```

## layout.mirror · 鏡像

布局、排版与文字组合：镜像 / Mirror (mirror)。标签：calm, emotional, graphic；参数位置：params。

参数：font, ripple, squash, strength, ticks。

源码：runtime/native/11p_layoutsA.js:1065 (fits)；runtime/native/11p_layoutsA.js:1066 (plan)；runtime/native/11p_layoutsA.js:1067 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"mirror","params":{"font":"mincho_light","strength":0.458663035184145,"squash":0.7,"ripple":false,"ticks":true}}}
```

## layout.sideways · 縦倒し

布局、排版与文字组合：横躺竖排 / Sideways text (sideways)。标签：editorial, graphic, pop；参数位置：params。

参数：copy, font, rule, side。

源码：runtime/native/11p_kinetic1.js:390 (fits)；runtime/native/11p_layoutsA.js:1116 (plan)；runtime/native/11p_layoutsA.js:1117 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"sideways","params":{"font":"zenkaku","side":"right","copy":"stack","rule":false}}}
```

## layout.edgeFrame · 外周

布局、排版与文字组合：沿边环绕 / Edge frame (edgeFrame)。标签：graphic, editorial, glitch；参数位置：params。

参数：corner, edgeFont, font, inner, sep, speed。

源码：runtime/native/11p_layoutsA.js:1065 (fits)；runtime/native/11p_layoutsA.js:1172 (plan)；runtime/native/11p_layoutsA.js:1173 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"edgeFrame","params":{"font":"mincho_light","edgeFont":"mono","sep":"　・　","speed":1.0848246563225983,"corner":"cross","inner":true}}}
```

## layout.perspective · 奥行き

布局、排版与文字组合：景深 / Perspective (perspective)。标签：graphic, emotional, glitch；参数位置：params。

参数：copies, font, guides, mode, speed, vx。

源码：runtime/native/06_layouts.js:530 (fits)；runtime/native/11p_layoutsA.js:1218 (plan)；runtime/native/11p_layoutsA.js:1219 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"perspective","params":{"font":"zenkaku","mode":"floor","copies":5,"speed":0.4116082187741995,"guides":true,"vx":-1}}}
```

## layout.hanko · 落款

布局、排版与文字组合：落款 / Signature seal (hanko)。标签：calm, emotional, editorial；参数位置：params。

参数：font, rot, seal, sealFont, vert。

源码：runtime/native/11p_layoutsA.js:1271 (fits)；runtime/native/11p_layoutsA.js:1272 (plan)；runtime/native/11p_layoutsA.js:1273 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"hanko","params":{"font":"mincho","sealFont":"dela","vert":true,"seal":"haku","rot":-3.530606563668698}}}
```

## layout.genkou · 原稿用紙

布局、排版与文字组合：稿纸 / Manuscript paper (genkou)。标签：calm, editorial, emotional；参数位置：params。

参数：font, indent, lineC, pad。

源码：runtime/native/11p_layoutsA.js:1341 (fits)；runtime/native/11p_layoutsA.js:1342 (plan)；runtime/native/11p_layoutsA.js:1343 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"genkou","params":{"font":"mincho","lineC":"sub","indent":true,"pad":4}}}
```

## layout.panels · コマ割り

布局、排版与文字组合：漫画分格 / Comic panels (panels)。标签：pop, graphic, emotional；参数位置：params。

参数：acc, chunks, font, fx, slant, widths。

源码：runtime/native/11p_kinetic1.js:149 (fits)；runtime/native/11p_layoutsA.js:1405 (plan)；runtime/native/11p_layoutsA.js:1406 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"panels","params":{"chunks":["夜明けの","色を","覚えてる"],"font":"mincho_light","acc":2,"fx":"tone","slant":9.848246563225985,"widths":[0.9115162175963634,1.1091602100641467,0.8261818651924842]}}}
```

## layout.filmstrip · フィルム

布局、排版与文字组合：胶片 / Filmstrip (filmstrip)。标签：emotional, calm, graphic；参数位置：params。

参数：chunks, codes, dir, font, tilt, tone。

源码：runtime/native/11p_horror1.js:91 (fits)；runtime/native/11p_layoutsA.js:1482 (plan)；runtime/native/11p_layoutsA.js:1483 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"filmstrip","params":{"chunks":["夜明けの","色を","覚えてる"],"font":"mincho_light","dir":-1,"tone":"ink","codes":false,"tilt":0}}}
```

## layout.quote · 引用

布局、排版与文字组合：引用 / Quote (quote)。标签：editorial, emotional, calm；参数位置：params。

参数：attrib, font, markC, markFont, marks。

源码：runtime/native/11p_layoutsA.js:195 (fits)；runtime/native/11p_layoutsA.js:1555 (plan)；runtime/native/11p_layoutsA.js:1556 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"quote","params":{"font":"dela","markFont":"mincho","marks":"double","markC":"sub","attrib":true}}}
```

## layout.ruler · 寸法線

布局、排版与文字组合：尺寸线 / Dimension lines (ruler)。标签：graphic, editorial, glitch；参数位置：params。

参数：dims, font, guides, ticks, unit。

源码：runtime/native/11p_layoutsA.js:1065 (fits)；runtime/native/11p_layoutsA.js:1601 (plan)；runtime/native/11p_layoutsA.js:1602 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"ruler","params":{"font":"mincho","dims":"bottomLeft","ticks":true,"guides":false,"unit":"px"}}}
```

## layout.searchBar · 検索窓

布局、排版与文字组合：搜索框 / Search bar (searchBar)。标签：pop, graphic；参数位置：params。

参数：fill, font, pos, shape, sugg。

源码：runtime/native/06_layouts.js:207 (fits)；runtime/native/11p_layoutsA.js:1667 (plan)；runtime/native/11p_layoutsA.js:1668 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"searchBar","params":{"font":"dela","shape":"rect","fill":"outline","sugg":4,"pos":"center"}}}
```

## layout.chat · チャット

布局、排版与文字组合：聊天 / Chat (chat)。标签：pop, emotional；参数位置：params。

参数：alt, font, msgs, side0。

源码：runtime/native/11p_layoutsA.js:1341 (fits)；runtime/native/11p_layoutsA.js:1727 (plan)；runtime/native/11p_layoutsA.js:1728 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"chat","params":{"msgs":["夜明けの","色を","覚えてる"],"font":"dela","side0":-1,"alt":true}}}
```

## layout.notification · 通知

布局、排版与文字组合：通知 / Notification (notification)。标签：pop, emotional, calm；参数位置：params。

参数：app, font, pos, stack。

源码：runtime/native/11p_layoutsA.js:1790 (fits)；runtime/native/11p_layoutsA.js:1791 (plan)；runtime/native/11p_layoutsA.js:1792 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"notification","params":{"font":"dela","pos":"center","stack":true,"app":"MESSAGE"}}}
```

## layout.ticket · チケット

布局、排版与文字组合：票券 / Ticket (ticket)。标签：pop, graphic, editorial；参数位置：params。

参数：fill, font, label, serial, tilt。

源码：runtime/native/06_layouts.js:207 (fits)；runtime/native/11p_layoutsA.js:1848 (plan)；runtime/native/11p_layoutsA.js:1849 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"ticket","params":{"font":"mincho_light","fill":"outline","tilt":-1.2291671498678625,"label":"TICKET","serial":247814}}}
```

## layout.rain · 文字の雨

布局、排版与文字组合：文字雨 / Letter rain (rain)。标签：glitch, graphic, emotional；参数位置：params。

参数：density, font, order, orient, rf, speed, tint。

源码：runtime/native/06_layouts.js:412 (fits)；runtime/native/11p_layoutsB.js:92 (plan)；runtime/native/11p_layoutsB.js:103 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"rain","params":{"font":"mincho_light","rf":"gothic_med","orient":"h","density":0.582958322702907,"speed":1.1732164375483989,"tint":"sub","order":"random"}}}
```

## layout.hanging · 吊り下げ

布局、排版与文字组合：吊挂 / Hanging (hanging)。标签：pop, calm, emotional；参数位置：params。

参数：amp, dir, font, kick, ph, rail, shape, tag。

源码：runtime/native/11p_layoutsB.js:171 (fits)；runtime/native/11p_layoutsB.js:173 (plan)；runtime/native/11p_layoutsB.js:179 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"hanging","params":{"font":"mincho_light","shape":"random","dir":1,"tag":false,"rail":true,"amp":0.09435113445157185,"kick":0.16581819226499647,"ph":2.365502146538347}}}
```

## layout.orbit · 周回

布局、排版与文字组合：环绕 / Orbit (orbit)。标签：calm, graphic, emotional；参数位置：params。

参数：fo, font, speed, tilt, unit, variant。

源码：runtime/native/11p_horror1.js:195 (fits)；runtime/native/11p_layoutsB.js:254 (plan)；runtime/native/11p_layoutsB.js:261 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"orbit","params":{"font":"mincho_light","fo":"dela","variant":"ring","tilt":11.46432875096798,"speed":34.36640840256587,"unit":"self"}}}
```

## layout.tunnel · トンネル

布局、排版与文字组合：隧道 / Tunnel (tunnel)。标签：glitch, graphic, emotional；参数位置：params。

参数：font, fontC, persp, q, speed, style, unit。

源码：runtime/native/11p_horror1.js:195 (fits)；runtime/native/11p_layoutsB.js:327 (plan)；runtime/native/11p_layoutsB.js:334 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"tunnel","params":{"font":"zenkaku","fontC":"mincho_light","q":1.4954166570026428,"speed":0.3816082187741995,"style":"alt","unit":"line","persp":true}}}
```

## layout.wordCloud · ワードクラウド

布局、排版与文字组合：文字云 / Word cloud (wordCloud)。标签：pop, editorial, graphic；参数位置：params。

参数：accentN, font, fonts, outlineK, vert, wide。

源码：runtime/native/11p_horror1.js:195 (fits)；runtime/native/11p_layoutsB.js:394 (plan)；runtime/native/11p_layoutsB.js:401 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"wordCloud","params":{"font":"zenkaku","fonts":["mincho","zenkaku","mincho"],"vert":0,"accentN":3,"outlineK":0,"wide":1.3971251788781955}}}
```

## layout.bounceLine · 跳ねる

布局、排版与文字组合：弹跳 / Bouncing line (bounceLine)。标签：pop；参数位置：params。

参数：font, hop, line, mode, shadow, tempo, tilt。

源码：runtime/native/06_layouts.js:169 (fits)；runtime/native/11p_layoutsB.js:479 (plan)；runtime/native/11p_layoutsB.js:485 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"bounceLine","params":{"font":"zenkaku","mode":"beat","hop":0.46295832270290704,"tempo":0.5654473968967795,"shadow":true,"line":"dots","tilt":true}}}
```

## layout.elastic · ゴム

布局、排版与文字组合：橡皮筋 / Elastic (elastic)。标签：pop, graphic；参数位置：params。

参数：amp, anchor, ang, every, font, orient。

源码：runtime/native/11p_layoutsB.js:171 (fits)；runtime/native/11p_layoutsB.js:552 (plan)；runtime/native/11p_layoutsB.js:559 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"elastic","params":{"font":"mincho_light","orient":"diag","ang":-8.262499710079283,"every":1.2239069084404037,"amp":0.40305340335471557,"anchor":"dot"}}}
```

## layout.crossBands · 交差帯

布局、排版与文字组合：交叉带 / Crossing bands (crossBands)。标签：graphic, pop, glitch；参数位置：params。

参数：ang, fb, font, plate, sep, speed, swap。

源码：runtime/native/11p_horror1.js:195 (fits)；runtime/native/11p_layoutsB.js:622 (plan)；runtime/native/11p_layoutsB.js:628 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"crossBands","params":{"font":"zenkaku","fb":"dela","ang":16.393749565118924,"plate":"shadow","speed":0.8239069084404036,"swap":false,"sep":"／"}}}
```

## layout.stickerBomb · ステッカー

布局、排版与文字组合：贴纸 / Sticker collage (stickerBomb)。标签：pop, graphic；参数位置：params。

参数：cnt, font, fs, main, rot, spin。

源码：runtime/native/11p_horror1.js:740 (fits)；runtime/native/11p_layoutsB.js:687 (plan)；runtime/native/11p_layoutsB.js:695 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"stickerBomb","params":{"font":"zenkaku","fs":"dela","main":"rrect","cnt":6,"rot":-2.521861831191927,"spin":4.122136134188622}}}
```

## layout.neon · ネオン

布局、排版与文字组合：霓虹 / Neon (neon)。标签：calm, emotional；参数位置：params。

参数：flick, font, frame, sub, tube。

源码：runtime/native/11p_horror1.js:195 (fits)；runtime/native/11p_layoutsB.js:769 (plan)；runtime/native/11p_layoutsB.js:775 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"neon","params":{"font":"zenkaku","tube":"accent2","frame":"under","flick":false,"sub":true}}}
```

## layout.keycaps · キーキャップ

布局、排版与文字组合：键帽 / Keycaps (keycaps)。标签：pop, graphic；参数位置：params。

参数：accent, font, legend, plate, stagger, style。

源码：runtime/native/11p_layoutsA.js:1271 (fits)；runtime/native/11p_layoutsB.js:866 (plan)；runtime/native/11p_layoutsB.js:872 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"keycaps","params":{"font":"zenkaku","style":"dark","stagger":true,"accent":16,"legend":true,"plate":false}}}
```

## layout.bubbles · 泡

布局、排版与文字组合：泡泡 / Bubbles (bubbles)。标签：pop, calm；参数位置：params。

参数：font, motes, rise, style, wob。

源码：runtime/native/11p_horror1.js:740 (fits)；runtime/native/11p_layoutsB.js:934 (plan)；runtime/native/11p_layoutsB.js:937 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"bubbles","params":{"font":"zenkaku","style":"solid","rise":0.024410415845224635,"wob":1.0848246563225983,"motes":true}}}
```

## layout.slotMachine · スロット

布局、排版与文字组合：老虎机 / Slot machine (slotMachine)。标签：pop, glitch；参数位置：params。

参数：font, line, style, v。

源码：runtime/native/11p_layoutsA.js:1271 (fits)；runtime/native/11p_layoutsB.js:990 (plan)；runtime/native/11p_layoutsB.js:993 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"slotMachine","params":{"font":"zenkaku","style":"cabinet","v":14.885416425066069,"line":false}}}
```

## layout.flipBoard · パタパタ

布局、排版与文字组合：翻牌看板 / Flip board (flipBoard)。标签：graphic, editorial；参数位置：params。

参数：flips, font, header, style。

源码：runtime/native/11p_horror1.js:740 (fits)；runtime/native/11p_layoutsB.js:1058 (plan)；runtime/native/11p_layoutsB.js:1061 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"flipBoard","params":{"font":"zenkaku","header":false,"flips":4,"style":"fg"}}}
```

## layout.credits · エンドロール

布局、排版与文字组合：片尾字幕 / End credits (credits)。标签：calm, editorial, emotional；参数位置：params。

参数：fc, font, off, speed, variant。

源码：runtime/native/06_layouts.js:412 (fits)；runtime/native/11p_layoutsB.js:1120 (plan)；runtime/native/11p_layoutsB.js:1123 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"credits","params":{"font":"dela","fc":"gothic_med","variant":"center","speed":0.055201027346774935,"off":2.478138168808073}}}
```

## layout.zoomRepeat · 連続拡大

布局、排版与文字组合：连续放大 / Zoom repeat (zoomRepeat)。标签：glitch, emotional, graphic；参数位置：params。

参数：dir, font, q, speed, style, twist。

源码：runtime/native/11p_horror1.js:740 (fits)；runtime/native/11p_layoutsB.js:1175 (plan)；runtime/native/11p_layoutsB.js:1181 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"zoomRepeat","params":{"font":"mincho_light","dir":-1,"style":"alt","twist":0,"q":1.4345190397137775,"speed":0.5217556722578592}}}
```

## layout.splitHalves · 上下割り

布局、排版与文字组合：上下分割 / Split halves (splitHalves)。标签：graphic, glitch, editorial；参数位置：params。

参数：dir, font, gap, line, variant。

源码：runtime/native/11p_horror1.js:195 (fits)；runtime/native/11p_layoutsB.js:1213 (plan)；runtime/native/11p_layoutsB.js:1216 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"splitHalves","params":{"font":"mincho_light","variant":"shear","dir":1,"line":"short","gap":0.07}}}
```

## layout.columnsBig · 大小縦組

布局、排版与文字组合：大小竖排 / Contrasting columns (columnsBig)。标签：editorial, calm, emotional；参数位置：params。

参数：font, fs, mark, off, rule, side。

源码：runtime/native/11p_layoutsA.js:1271 (fits)；runtime/native/11p_layoutsB.js:1259 (plan)；runtime/native/11p_layoutsB.js:1262 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"columnsBig","params":{"font":"mincho_light","fs":"gothic_med","side":"left","rule":false,"mark":"bar","off":0.018702268903143707}}}
```

## layout.circleWords · 同心円

布局、排版与文字组合：同心圆 / Concentric words (circleWords)。标签：graphic, calm, editorial；参数位置：params。

参数：dir, font, fr, guides, rings, speed, ticks。

源码：runtime/native/11p_horror1.js:195 (fits)；runtime/native/11p_layoutsB.js:1306 (plan)；runtime/native/11p_layoutsB.js:1309 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"circleWords","params":{"font":"mincho_light","fr":"mincho","rings":3,"speed":11.848246563225985,"dir":1,"ticks":false,"guides":true}}}
```

## layout.dotMatrix · ドット表示

布局、排版与文字组合：点阵显示 / Dot matrix (dotMatrix)。标签：graphic, glitch, pop；参数位置：params。

参数：col, font, panel, reveal, shape。

源码：runtime/native/11p_horror1.js:740 (fits)；runtime/native/11p_layoutsB.js:1406 (plan)；runtime/native/11p_layoutsB.js:1409 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"dotMatrix","params":{"font":"dot","reveal":"scroll","panel":true,"col":"fg","shape":"round"}}}
```

## layout.depthStack · 奥行き重ね

布局、排版与文字组合：景深重叠 / Depth stack (depthStack)。标签：graphic, emotional, glitch；参数位置：params。

参数：ang, copies, dist, font, style, sway。

源码：runtime/native/11p_horror1.js:740 (fits)；runtime/native/11p_layoutsB.js:1470 (plan)；runtime/native/11p_layoutsB.js:1474 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"depthStack","params":{"font":"dela","ang":125.79945527762175,"copies":8,"dist":0.46956276337616143,"style":"dim","sway":true}}}
```

## layout.typeSpecimen · 書体見本

布局、排版与文字组合：字体样本 / Type specimen (typeSpecimen)。标签：editorial, graphic；参数位置：params。

参数：fonts, grid, main, num。

源码：runtime/native/11p_layoutsB.js:1510 (fits)；runtime/native/11p_layoutsB.js:1511 (plan)；runtime/native/11p_layoutsB.js:1518 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"typeSpecimen","params":{"main":"mincho_light","fonts":["mincho","tokumin","dela","mincho_black","dot","gothic_light"],"grid":"g2","num":15}}}
```

## layout.kanjiFocus · 一字強調

布局、排版与文字组合：单字强调 / Character focus (kanjiFocus)。标签：emotional, editorial, calm；参数位置：params。

参数：dir, dots, font, fs, low, mode, pos。

源码：runtime/native/06_layouts.js:169 (fits)；runtime/native/11p_layoutsB.js:1567 (plan)；runtime/native/11p_layoutsB.js:1570 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"kanjiFocus","params":{"font":"mincho_light","fs":"zenkaku","mode":"outline","pos":"side","low":true,"dots":true,"dir":1}}}
```

## layout.halfVertical · 縦横混植

布局、排版与文字组合：直横混排 / Mixed vertical type (halfVertical)。标签：editorial, graphic；参数位置：params。

参数：font, guide, shape。

源码：runtime/native/11p_layoutsB.js:1618 (fits)；runtime/native/11p_layoutsB.js:1619 (plan)；runtime/native/11p_layoutsB.js:1622 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"halfVertical","params":{"font":"mincho_light","shape":"colRow","guide":"tick"}}}
```

## layout.curtain · 幕

布局、排版与文字组合：布幕 / Curtain (curtain)。标签：emotional, pop, graphic；参数位置：params。

参数：col, drape, font, pleats, variant。

源码：runtime/native/06_layouts.js:412 (fits)；runtime/native/11p_layoutsB.js:1688 (plan)；runtime/native/11p_layoutsB.js:1691 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"curtain","params":{"font":"mincho_light","variant":"shutter","col":"velvet","drape":false,"pleats":true}}}
```

## layout.equalizer · イコライザー

布局、排版与文字组合：等化器 / Equalizer (equalizer)。标签：pop, graphic, glitch；参数位置：params。

参数：col, font, peaks, style, tempo, thin。

源码：runtime/native/11p_horror1.js:740 (fits)；runtime/native/11p_layoutsB.js:1749 (plan)；runtime/native/11p_layoutsB.js:1752 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"equalizer","params":{"font":"zenkaku","style":"blocks","thin":2,"peaks":false,"col":"accent","tempo":0.5093129495740868}}}
```

## layout.tape · テープ

布局、排版与文字组合：胶带 / Tape (tape)。标签：pop, editorial, graphic；参数位置：params。

参数：ang, col, font, fs, lines, piece, trim, variant。

源码：runtime/native/06_layouts.js:412 (fits)；runtime/native/11p_layoutsB.js:1830 (plan)；runtime/native/11p_layoutsB.js:1838 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"tape","params":{"font":"zenkaku","fs":"mincho","variant":"stack","ang":9.656287657096982,"col":"accent","piece":true,"lines":true}}}
```

## layout.magazine · 見開き

布局、排版与文字组合：杂志跨页 / Magazine spread (magazine)。标签：editorial, calm, emotional；参数位置：params。

参数：folio, font, img, kicker, qf, seed, variant。

源码：runtime/native/06_layouts.js:207 (fits)；runtime/native/11p_layoutsC.js:420 (plan)；runtime/native/11p_layoutsC.js:425 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"magazine","params":{"font":"mincho","qf":"mincho","variant":"vertical","folio":148,"kicker":"ESSAY","seed":6870,"img":"sun"}}}
```

## layout.headlineDeck · 見出しとリード

布局、排版与文字组合：标题与导言 / Headline and deck (headlineDeck)。标签：editorial, graphic, calm；参数位置：params。

参数：dbl, font, kicker, mark, variant。

源码：runtime/native/11p_layoutsA.js:1341 (fits)；runtime/native/11p_layoutsC.js:585 (plan)；runtime/native/11p_layoutsC.js:589 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"headlineDeck","params":{"font":"zenkaku","variant":"split","kicker":"COVER STORY","mark":"dot","dbl":true}}}
```

## layout.contents · 目次

布局、排版与文字组合：目录 / Contents (contents)。标签：editorial, calm；参数位置：params。

参数：chunks, ctx, font, mark, page0, step, variant。

源码：runtime/native/11p_layoutsC.js:667 (fits)；runtime/native/11p_layoutsC.js:669 (plan)；runtime/native/11p_layoutsC.js:678 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"contents","params":{"font":"mincho_light","chunks":["夜明けの","色を","覚えてる"],"variant":"tate","page0":17,"step":19,"mark":"bar","ctx":true}}}
```

## layout.footnote · 脚注

布局、排版与文字组合：注脚 / Footnote (footnote)。标签：editorial, calm, emotional；参数位置：params。

参数：align, chunks, font, marks, top。

源码：runtime/native/11p_layoutsA.js:692 (fits)；runtime/native/11p_layoutsC.js:785 (plan)；runtime/native/11p_layoutsC.js:790 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"footnote","params":{"font":"zenkaku","chunks":["夜明けの","色を","覚えてる"],"marks":"star","align":"center","top":false}}}
```

## layout.proofread · 校正刷り

布局、排版与文字组合：校样 / Proof sheet (proofread)。标签：editorial, graphic, calm；参数位置：params。

参数：font, g1, g2, marks, pen, rot, stamp, tombo。

源码：runtime/native/11p_layoutsC.js:667 (fits)；runtime/native/11p_layoutsC.js:853 (plan)；runtime/native/11p_layoutsC.js:860 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"proofread","params":{"font":"mincho_light","pen":"gothic_med","marks":["box","dots"],"stamp":false,"tombo":true,"g1":39,"g2":62,"rot":4.800246760249138}}}
```

## layout.numbered · 番号付き

布局、排版与文字组合：编号 / Numbered (numbered)。标签：graphic, editorial, pop；参数位置：params。

参数：chunks, font, label, num, numFont, variant。

源码：runtime/native/11p_kinetic1.js:149 (fits)；runtime/native/11p_layoutsC.js:972 (plan)；runtime/native/11p_layoutsC.js:982 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"numbered","params":{"font":"mincho_light","numFont":"zenkaku","chunks":["夜明けの","色を","覚えてる"],"variant":"rows","num":"dim","label":"STEP"}}}
```

## layout.poster · ポスター

布局、排版与文字组合：海报 / Poster (poster)。标签：graphic, pop, editorial；参数位置：params。

参数：ang, dot, font, head, lines, variant。

源码：runtime/native/11p_layoutsA.js:1065 (fits)；runtime/native/11p_layoutsC.js:1066 (plan)；runtime/native/11p_layoutsC.js:1074 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"poster","params":{"font":"zenkaku","lines":["夜明けの","色を","覚えてる"],"variant":"block","dot":true,"head":"TOUR","ang":0}}}
```

## layout.swissGrid · スイスグリッド

布局、排版与文字组合：瑞士网格 / Swiss grid (swissGrid)。标签：graphic, editorial, calm；参数位置：params。

参数：chunks, font, label, shape, variant。

源码：runtime/native/06_layouts.js:207 (fits)；runtime/native/11p_layoutsC.js:1168 (plan)；runtime/native/11p_layoutsC.js:1173 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"swissGrid","params":{"font":"zenkaku","chunks":["夜明けの","色を","覚えてる"],"variant":"b","shape":"square","label":false}}}
```

## layout.dictionary · 辞書

布局、排版与文字组合：辞典 / Dictionary (dictionary)。标签：editorial, calm, emotional；参数位置：params。

参数：font, mark, page, pos, seed, tabY, variant。

源码：runtime/native/06_layouts.js:412 (fits)；runtime/native/11p_layoutsC.js:1236 (plan)；runtime/native/11p_layoutsC.js:1240 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"dictionary","params":{"font":"dela","variant":"page","pos":"連語","page":1219,"tabY":0.336297599284444,"mark":"■","seed":582}}}
```

## layout.ema · 絵馬

布局、排版与文字组合：绘马 / Ema wish plaque (ema)。标签：emotional, calm, pop；参数位置：params。

参数：back, emblem, font, swing, vert。

源码：runtime/native/06_layouts.js:412 (fits)；runtime/native/11p_layoutsC.js:1332 (plan)；runtime/native/11p_layoutsC.js:1337 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"ema","params":{"font":"dela","vert":true,"emblem":"knot","swing":-13.982510535046458,"back":[[-0.8836361547000706,-1.6919942758977413,0.955016650329344,80],[-0.34674965869635344,-6.810136202722788,0.8719932632637211,47],[-0.3049126141704619,0.43306053429841995,0.8676559867570177,47],[-0.26453672628849745,-7.780894827097654,0.9889387526316569,63],[-0.07771696709096432,-5.889669608324766,0.9993258863803931,53],[0.5024212170392275,-1.9564214311540127,1.0187613604473882,92],[-0.8518163994885981,-4.880325131118298,0.98967479839921,81]]}}}
```

## layout.ransom · 切り抜き文字

布局、排版与文字组合：剪报字 / Cutout letters (ransom)。标签：pop, glitch, graphic；参数位置：params。

参数：fonts, look, shadow, tilt。

源码：runtime/native/06_layouts.js:412 (fits)；runtime/native/11p_layoutsC.js:1427 (plan)；runtime/native/11p_layoutsC.js:1435 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"ransom","params":{"fonts":["gothic_black","dela","zenkaku","mincho_light","mincho","gothic_med","mono","brush"],"look":[[5,0,-1.903493560384959,1.0384213124215602,0.06000308450311423,326],[0,1,-0.37707995949313045,0.9512139817327261,0.005413256678730244,270],[3,2,-8.753506680484861,1.0818416033685208,0.027962821582332265,461],[1,4,0.6274310373701155,1.0803873947262763,-0.02445526788942516,875],[7,0,-5.490365772508085,1.0827837419509887,0.06299451165832579,933],[2,2,4.809430662542582,1.1501048173010349,-0.04687897237017751,657],[6,4,-1.5581242181360722,0.8459559850394726,0.044304632861167204,631],[1,0,7.263656948693097,1.0256166286766528,0.016757067199796444,635],[6,2,-1.6369616794399917,1.134117418155074,-0.013589936122298238,199],[0,0,-8.130577940493822,1.0309078432619572,-0.09284774954430759,571]],"tilt":2.356993032619357,"shadow":true}}}
```

## layout.newspaper · 新聞

布局、排版与文字组合：报纸 / Newspaper (newspaper)。标签：editorial, graphic, pop；参数位置：params。

参数：font, issue, mast, rev, seed, spin, variant。

源码：runtime/native/06_layouts.js:412 (fits)；runtime/native/11p_layoutsC.js:1517 (plan)；runtime/native/11p_layoutsC.js:1521 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"newspaper","params":{"font":"mincho_light","variant":"tate","spin":true,"rev":false,"seed":2478,"mast":"夜更新聞","issue":2687}}}
```

## layout.vinyl · レコード

布局、排版与文字组合：黑胶唱片 / Vinyl record (vinyl)。标签：emotional, pop, calm；参数位置：params。

参数：arm, cat, font, rpm, side, sleeve, variant。

源码：runtime/native/11p_layoutsA.js:1065 (fits)；runtime/native/11p_layoutsC.js:1644 (plan)；runtime/native/11p_layoutsC.js:1648 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"vinyl","params":{"font":"mincho_light","variant":"sleeve","side":"B","rpm":"33⅓","sleeve":"card","cat":2553,"arm":true}}}
```

## layout.cassette · カセット

布局、排版与文字组合：卡带 / Cassette (cassette)。标签：emotional, pop, calm；参数位置：params。

参数：band, font, len, shell, side, tilt。

源码：runtime/native/11p_layoutsA.js:1065 (fits)；runtime/native/11p_layoutsC.js:1715 (plan)；runtime/native/11p_layoutsC.js:1719 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"cassette","params":{"font":"dela","shell":"accent","band":"stripe","side":"A","tilt":1.4961815122514963,"len":"C-46"}}}
```

## layout.bookSpine · 背表紙

布局、排版与文字组合：书背 / Book spine (bookSpine)。标签：calm, editorial, emotional；参数位置：params。

参数：books, font, hero, variant, vol。

源码：runtime/native/11p_horror1.js:195 (fits)；runtime/native/11p_layoutsC.js:1782 (plan)；runtime/native/11p_layoutsC.js:1790 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"bookSpine","params":{"font":"dela","variant":"shelf","books":[[0.9040205469354987,0.6943441450642422,4,0],[0.6971251788781956,0.8060199803952128,4,1],[0.5371832436649129,0.7063919159164652,2,1],[0.7635331416968256,0.7011871841084212,2,1],[0.5068470366531983,0.8467265031579883,3,1],[0.5659478247398511,0.8591910636564717,3,3],[0.6888618302764371,0.8825136325368659,5,0],[0.5974898396525532,0.847609758079052,4,3],[0.6862327480921522,0.7239485549554229,4,3],[0.6328025690745562,0.8172324047703297,5,2],[0.7067187717184424,0.6255837359745056,4,2]],"hero":"accent","vol":2}}}
```

## layout.polaroid · ポラロイド

布局、排版与文字组合：拍立得 / Polaroid (polaroid)。标签：emotional, calm, pop；参数位置：params。

参数：chunks, font, img, pen, tape, tilts。

源码：runtime/native/06_layouts.js:412 (fits)；runtime/native/11p_layoutsC.js:1888 (plan)；runtime/native/11p_layoutsC.js:1896 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"polaroid","params":{"font":"mincho_light","pen":"gothic_med","chunks":["夜明けの","色を","覚えてる"],"tilts":[4.312575314193964,-3.530606563668698,2.6183176464401186],"img":"dark","tape":true}}}
```

## layout.stampSheet · 切手シート

布局、排版与文字组合：邮票版张 / Stamp sheet (stampSheet)。标签：pop, graphic, calm；参数位置：params。

参数：cols, font, hc, hr, motif, rows, tear, val。

源码：runtime/native/11p_horror1.js:740 (fits)；runtime/native/11p_layoutsC.js:1963 (plan)；runtime/native/11p_layoutsC.js:1968 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"stampSheet","params":{"font":"mincho_light","cols":5,"rows":3,"hc":1,"hr":1,"val":94,"motif":"char","tear":true}}}
```

## layout.postcard · はがき

布局、排版与文字组合：明信片 / Postcard (postcard)。标签：emotional, calm, editorial；参数位置：params。

参数：font, mark, stamp, tilt, val, zip。

源码：runtime/native/11p_horror1.js:91 (fits)；runtime/native/11p_layoutsC.js:2039 (plan)；runtime/native/11p_layoutsC.js:2043 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"postcard","params":{"font":"dela","tilt":-1.2291671498678625,"val":110,"zip":"2603683","mark":-15.322806456126273,"stamp":"circle"}}}
```

## layout.letterPaper · 便箋

布局、排版与文字组合：信纸 / Letter paper (letterPaper)。标签：emotional, calm；参数位置：params。

参数：font, rule, sign, variant。

源码：runtime/native/11p_layoutsC.js:2131 (fits)；runtime/native/11p_layoutsC.js:2133 (plan)；runtime/native/11p_layoutsC.js:2137 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"letterPaper","params":{"font":"mincho","variant":"tate","rule":"sub","sign":true}}}
```

## layout.calendar · カレンダー

布局、排版与文字组合：月历 / Calendar (calendar)。标签：pop, editorial, calm；参数位置：params。

参数：day, days, font, month, off, variant。

源码：runtime/native/06_layouts.js:412 (fits)；runtime/native/11p_layoutsC.js:2225 (plan)；runtime/native/11p_layoutsC.js:2228 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"calendar","params":{"font":"mincho_light","variant":"himekuri","month":4,"off":5,"day":9,"days":31}}}
```

## layout.chochin · 提灯

布局、排版与文字组合：灯笼 / Paper lantern (chochin)。标签：emotional, calm, pop；参数位置：params。

参数：body, font, ph, units, variant。

源码：runtime/native/11p_horror1.js:740 (fits)；runtime/native/11p_layoutsC.js:2352 (plan)；runtime/native/11p_layoutsC.js:2358 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"chochin","params":{"font":"mincho_light","variant":"row","units":["夜","明け","の","色を","覚え","てる"],"body":"paper","ph":2.2624997100792825}}}
```

## layout.routeMap · 路線図

布局、排版与文字组合：路线图 / Route map (routeMap)。标签：graphic, pop, editorial；参数位置：params。

参数：chunks, font, letter, num0, shape。

源码：runtime/native/11p_kinetic1.js:149 (fits)；runtime/native/11p_layoutsC.js:2430 (plan)；runtime/native/11p_layoutsC.js:2438 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"routeMap","params":{"font":"zenkaku","chunks":["夜明けの","色を","覚え","てる"],"shape":"straight","letter":"J","num0":12}}}
```

## layout.stationSign · 駅名標

布局、排版与文字组合：站名牌 / Station sign (stationSign)。标签：graphic, pop, editorial；参数位置：params。

参数：band, font, letter, num, posts。

源码：runtime/native/11p_horror1.js:740 (fits)；runtime/native/11p_layoutsC.js:2531 (plan)；runtime/native/11p_layoutsC.js:2532 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"stationSign","params":{"font":"zenkaku","letter":"KT","num":14,"band":"ink","posts":true}}}
```

## layout.noren · 暖簾

布局、排版与文字组合：暖帘 / Noren curtain (noren)。标签：calm, emotional, graphic；参数位置：params。

参数：cloth, font, mon, ph, units, wind。

源码：runtime/native/11p_horror1.js:740 (fits)；runtime/native/11p_layoutsC.js:2598 (plan)；runtime/native/11p_layoutsC.js:2603 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"noren","params":{"font":"mincho_light","units":["夜明け","の","色を","覚えてる"],"cloth":"ink","mon":false,"ph":4.848246563225985,"wind":1}}}
```

## layout.tanzaku · 短冊

布局、排版与文字组合：短签 / Wish strip (tanzaku)。标签：emotional, calm, pop；参数位置：params。

参数：chunks, cols, dir, extra, font, ph。

源码：runtime/native/06_layouts.js:412 (fits)；runtime/native/11p_layoutsC.js:2666 (plan)；runtime/native/11p_layoutsC.js:2671 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"tanzaku","params":{"font":"dela","chunks":["夜明けの","色を覚えてる"],"extra":2,"cols":[4,1,3,0,1,3],"ph":4.800092535093427,"dir":1}}}
```

## layout.omikuji · おみくじ

布局、排版与文字组合：御神签 / Fortune slip (omikuji)。标签：emotional, calm, editorial；参数位置：params。

参数：cats, font, rank。

源码：runtime/native/06_layouts.js:412 (fits)；runtime/native/11p_layoutsC.js:2744 (plan)；runtime/native/11p_layoutsC.js:2745 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"omikuji","params":{"font":"mincho","rank":"中吉","cats":["健康","学問","恋愛","旅行"]}}}
```

## layout.kakejiku · 掛け軸

布局、排版与文字组合：挂轴 / Hanging scroll (kakejiku)。标签：calm, emotional, editorial；参数位置：params。

参数：font, mount, seal, variant。

源码：runtime/native/11p_horror1.js:195 (fits)；runtime/native/11p_layoutsC.js:2830 (plan)；runtime/native/11p_layoutsC.js:2831 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"kakejiku","params":{"font":"mincho","variant":"kake","mount":"sub","seal":true}}}
```

## layout.shoji · 障子

布局、排版与文字组合：障子 / Shoji screen (shoji)。标签：calm, emotional, graphic；参数位置：params。

参数：cols, font, rows, variant。

源码：runtime/native/06_layouts.js:412 (fits)；runtime/native/11p_layoutsC.js:2923 (plan)；runtime/native/11p_layoutsC.js:2924 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"shoji","params":{"font":"dela","variant":"shadow","rows":5,"cols":3}}}
```

## layout.clapper · カチンコ

布局、排版与文字组合：场记板 / Clapperboard (clapper)。标签：pop, graphic, editorial；参数位置：params。

参数：font, roll, take, tilt。

源码：runtime/native/06_layouts.js:412 (fits)；runtime/native/11p_layoutsC.js:2975 (plan)；runtime/native/11p_layoutsC.js:2976 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"clapper","params":{"font":"zenkaku","tilt":-1.475000579841435,"roll":"A8","take":3}}}
```

## layout.warningLabel · 警告ラベル

布局、排版与文字组合：警告标签 / Warning label (warningLabel)。标签：graphic, glitch, pop；参数位置：params。

参数：font, tilt, variant, word。

源码：runtime/native/06_layouts.js:412 (fits)；runtime/native/11p_layoutsC.js:3043 (plan)；runtime/native/11p_layoutsC.js:3044 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"warningLabel","params":{"font":"zenkaku","variant":"side","word":1,"tilt":1.8482465632259846}}}
```

## layout.priceTag · 値札

布局、排版与文字组合：价格标签 / Price tag (priceTag)。标签：pop, graphic；参数位置：params。

参数：col, font, price, swing, variant, was。

源码：runtime/native/11p_horror1.js:195 (fits)；runtime/native/11p_layoutsC.js:3103 (plan)；runtime/native/11p_layoutsC.js:3107 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"priceTag","params":{"font":"zenkaku","variant":"hang","price":4980,"was":7630,"col":"card","swing":15.496181512251496}}}
```

## layout.nameTag · 名札

布局、排版与文字组合：名牌 / Name tag (nameTag)。标签：pop, emotional；参数位置：params。

参数：cls, font, grade, tilt, variant。

源码：runtime/native/11p_horror1.js:195 (fits)；runtime/native/11p_layoutsC.js:3183 (plan)；runtime/native/11p_layoutsC.js:3184 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"nameTag","params":{"font":"zenkaku","variant":"hello","tilt":3.696493126451969,"grade":2,"cls":3}}}
```

## layout.stickyNotes · 付箋

布局、排版与文字组合：便利贴 / Sticky notes (stickyNotes)。标签：pop, emotional, calm；参数位置：params。

参数：chunks, cols, font, layout, offs, pin, rots。

源码：runtime/native/11p_horror1.js:91 (fits)；runtime/native/11p_layoutsC.js:3237 (plan)；runtime/native/11p_layoutsC.js:3242 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"stickyNotes","params":{"font":"zenkaku","chunks":["夜明けの","色を","覚えてる"],"layout":"scatter","rots":[4.312575314193964,-3.530606563668698,2.6183176464401186,-6.185453082900494],"offs":[-0.21149928448721766,0.2401332026347518,0.6000308450311422,-0.34674965869635344],"cols":[0,1,1,1],"pin":"tape"}}}
```

## layout.karuta · かるた札

布局、排版与文字组合：歌牌 / Karuta card (karuta)。标签：pop, emotional, editorial；参数位置：params。

参数：art, font, from, tilt, variant。

源码：runtime/native/06_layouts.js:412 (fits)；runtime/native/11p_layoutsC.js:3299 (plan)；runtime/native/11p_layoutsC.js:3300 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"karuta","params":{"font":"dela","variant":"single","from":1,"tilt":2.4643287509679794,"art":"sun"}}}
```

## layout.cube · 立方体

布局、排版与文字组合：立方体 / Cube (cube)。标签：graphic, pop；参数位置：params。

参数：chunks, dir, face, font, mode, pitch, sway, top。

源码：runtime/native/06_layouts.js:412 (fits)；runtime/native/11p_layoutsD.js:177 (plan)；runtime/native/11p_layoutsD.js:187 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"cube","params":{"mode":"single","chunks":["夜明けの色を覚えてる"],"font":"zenkaku","pitch":23.770832850132138,"dir":-1,"face":"ink","top":"shade","sway":3.2327276905998588}}}
```

## layout.cylinder · 円筒

布局、排版与文字组合：圆柱 / Cylinder (cylinder)。标签：graphic, calm, emotional；参数位置：params。

参数：band, dir, font, fs, glass, rings, sep, speed, tilt。

源码：runtime/native/06_layouts.js:169 (fits)；runtime/native/11p_layoutsD.js:269 (plan)；runtime/native/11p_layoutsD.js:275 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"cylinder","params":{"font":"mincho_light","fs":"dela","rings":4,"band":false,"dir":1,"speed":0.3874045378062874,"tilt":0.13407273458549754,"sep":" / ","glass":true}}}
```

## layout.flipCards · カードめくり

布局、排版与文字组合：翻卡 / Flipping cards (flipCards)。标签：pop, graphic；参数位置：params。

参数：back, font, idx, order, peek, table。

源码：runtime/native/11p_horror1.js:195 (fits)；runtime/native/11p_layoutsD.js:371 (plan)；runtime/native/11p_layoutsD.js:377 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"flipCards","params":{"font":"mincho_light","order":"random","table":true,"back":"ink","peek":true,"idx":true}}}
```

## layout.accordion · 蛇腹

布局、排版与文字组合：风琴折 / Accordion (accordion)。标签：pop, graphic, editorial；参数位置：params。

参数：breathe, covers, fold, font, orient, plate, start。

源码：runtime/native/06_layouts.js:169 (fits)；runtime/native/11p_layoutsD.js:469 (plan)；runtime/native/11p_layoutsD.js:476 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"accordion","params":{"font":"mincho_light","fold":34.89972763881087,"orient":"h","covers":true,"plate":"accent","breathe":3.991255267523229,"start":-1}}}
```

## layout.flag · はためく旗

布局、排版与文字组合：飘扬的旗 / Flag (flag)。标签：emotional, pop, graphic；参数位置：params。

参数：cloth, font, mode, side, tail, trim, wind。

源码：runtime/native/06_layouts.js:412 (fits)；runtime/native/11p_layoutsD.js:548 (plan)；runtime/native/11p_layoutsD.js:554 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"flag","params":{"font":"mincho_light","mode":"raise","cloth":"ink","trim":"edge","tail":"rect","wind":1.0091602100641466,"side":1}}}
```

## layout.ribbon · リボン

布局、排版与文字组合：缎带 / Ribbon (ribbon)。标签：pop, emotional, graphic；参数位置：params。

参数：amp, col, font, freq, ph, reveal, tilt。

源码：runtime/native/06_layouts.js:169 (fits)；runtime/native/11p_layoutsD.js:646 (plan)；runtime/native/11p_layoutsD.js:652 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"ribbon","params":{"font":"mincho_light","amp":0.08708219849504531,"freq":0.6819791497546248,"ph":4.848246563225985,"col":"accent","reveal":"left","tilt":-5.301816928200424}}}
```

## layout.pendulum · 振り子

布局、排版与文字组合：钟摆 / Pendulum (pendulum)。标签：calm, pop, emotional；参数位置：params。

参数：L, amp, chunks, font, grow, mode, period, phase, side, th。

源码：runtime/native/06_layouts.js:412 (fits)；runtime/native/11p_layoutsD.js:746 (plan)；runtime/native/11p_layoutsD.js:755 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"pendulum","params":{"mode":"chunks","chunks":["夜明けの","色を","覚えてる"],"font":"mincho_light","period":1.1819791497546248,"amp":28.46432875096798,"phase":1.4868829012848437,"side":-1}}}
```

## layout.pile · 文字の山

布局、排版与文字组合：文字堆 / Letter pile (pile)。标签：pop, emotional, graphic；参数位置：params。

参数：dust, font, hf, hgt, order, peak。

源码：runtime/native/11p_horror1.js:195 (fits)；runtime/native/11p_layoutsD.js:864 (plan)；runtime/native/11p_layoutsD.js:867 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"pile","params":{"font":"zenkaku","hf":"mincho_light","peak":-0.029500011596828704,"hgt":0.3246432875096798,"order":"ltr","dust":true}}}
```

## layout.blocks · 積み木

布局、排版与文字组合：积木 / Blocks (blocks)。标签：pop, graphic；参数位置：params。

参数：colOff, deco, font, hop, side, tilt。

源码：runtime/native/11p_horror1.js:195 (fits)；runtime/native/11p_layoutsD.js:959 (plan)；runtime/native/11p_layoutsD.js:962 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"blocks","params":{"font":"zenkaku","deco":true,"tilt":true,"hop":false,"side":1,"colOff":4}}}
```

## layout.balloons · 文字風船

布局、排版与文字组合：文字气球 / Letter balloons (balloons)。标签：pop, emotional, calm；参数位置：params。

参数：arc, colOff, font, mono, tie。

源码：runtime/native/11p_horror1.js:195 (fits)；runtime/native/11p_layoutsD.js:1051 (plan)；runtime/native/11p_layoutsD.js:1054 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"balloons","params":{"font":"zenkaku","tie":"free","arc":0.03508333140052855,"colOff":4,"mono":true}}}
```

## layout.magnets · マグネット

布局、排版与文字组合：磁铁 / Magnets (magnets)。标签：pop, graphic；参数位置：params。

参数：colOff, decoys, df, font, handle, tilt。

源码：runtime/native/11p_horror1.js:195 (fits)；runtime/native/11p_layoutsD.js:1120 (plan)；runtime/native/11p_layoutsD.js:1123 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"magnets","params":{"font":"zenkaku","df":"zenkaku","decoys":8,"handle":-1,"colOff":1,"tilt":10.122136134188622}}}
```

## layout.tiles · 文字タイル

布局、排版与文字组合：文字磁砖 / Letter tiles (tiles)。标签：pop, editorial, graphic；参数位置：params。

参数：font, from, rack, score。

源码：runtime/native/11p_horror1.js:195 (fits)；runtime/native/11p_layoutsD.js:1200 (plan)；runtime/native/11p_layoutsD.js:1203 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"tiles","params":{"font":"mincho_light","from":"drop","rack":"ink","score":false}}}
```

## layout.bulbs · 電球サイン

布局、排版与文字组合：灯泡招牌 / Marquee bulbs (bulbs)。标签：pop, emotional, graphic；参数位置：params。

参数：chase, dir, font, shape, sub。

源码：runtime/native/11p_horror1.js:195 (fits)；runtime/native/11p_layoutsD.js:1295 (plan)；runtime/native/11p_layoutsD.js:1298 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"bulbs","params":{"font":"zenkaku","shape":"arrow","chase":"chase","dir":-1,"sub":true}}}
```

## layout.ledScroll · 電光掲示板

布局、排版与文字组合：电子跑马灯 / LED ticker (ledScroll)。标签：pop, graphic, glitch；参数位置：params。

参数：col, font, info, mods, y。

源码：runtime/native/11p_layoutsD.js:1386 (fits)；runtime/native/11p_layoutsD.js:1388 (plan)；runtime/native/11p_layoutsD.js:1391 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"ledScroll","params":{"font":"zenkaku","col":"fg","info":"bottom","mods":6,"y":0.5}}}
```

## layout.billboard · 看板

布局、排版与文字组合：广告牌 / Billboard (billboard)。标签：pop, emotional, graphic；参数位置：params。

参数：face, font, lamps, sweep, tag。

源码：runtime/native/06_layouts.js:412 (fits)；runtime/native/11p_layoutsD.js:1467 (plan)；runtime/native/11p_layoutsD.js:1470 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"billboard","params":{"font":"mincho_light","face":"accent","lamps":3,"sweep":14.46432875096798,"tag":true}}}
```

## layout.crowdBubbles · 吹き出しの群れ

布局、排版与文字组合：对话框群 / Speech bubble crowd (crowdBubbles)。标签：pop, emotional, editorial；参数位置：params。

参数：big, count, font, sf, side, style。

源码：runtime/native/06_layouts.js:412 (fits)；runtime/native/11p_layoutsD.js:1546 (plan)；runtime/native/11p_layoutsD.js:1549 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"crowdBubbles","params":{"font":"zenkaku","sf":"dela","big":"round","style":"filled","count":11,"side":-1}}}
```

## layout.crossword · クロスワード

布局、排版与文字组合：填字游戏 / Crossword (crossword)。标签：editorial, graphic, pop；参数位置：params。

参数：clue, dens, fill, font。

源码：runtime/native/06_layouts.js:169 (fits)；runtime/native/11p_layoutsD.js:1616 (plan)；runtime/native/11p_layoutsD.js:1619 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"crossword","params":{"font":"mincho_light","dens":0.1993315175920725,"fill":2,"clue":false}}}
```

## layout.wordSearch · 文字探し

布局、排版与文字组合：找字游戏 / Word search (wordSearch)。标签：pop, graphic, editorial；参数位置：params。

参数：decoys, dir, font, gf, pad。

源码：runtime/native/06_layouts.js:300 (fits)；runtime/native/11p_layoutsD.js:1725 (plan)；runtime/native/11p_layoutsD.js:1732 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"wordSearch","params":{"font":"zenkaku","gf":"dela","dir":"h","decoys":3,"pad":1}}}
```

## layout.puzzle · パズル

布局、排版与文字组合：拼图 / Puzzle (puzzle)。标签：pop, graphic, emotional；参数位置：params。

参数：font, last, plate, rows, spread。

源码：runtime/native/06_layouts.js:412 (fits)；runtime/native/11p_layoutsD.js:1830 (plan)；runtime/native/11p_layoutsD.js:1833 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"puzzle","params":{"font":"mincho_light","plate":"ink","rows":2,"last":false,"spread":0.6991255267523229}}}
```

## layout.shadowPlay · 影絵

布局、排版与文字组合：皮影戏 / Shadow puppets (shadowPlay)。标签：emotional, calm, graphic；参数位置：params。

参数：dir, font, mode, sun, sweep。

源码：runtime/native/11p_horror1.js:195 (fits)；runtime/native/11p_layoutsD.js:1921 (plan)；runtime/native/11p_layoutsD.js:1924 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"shadowPlay","params":{"font":"zenkaku","mode":"wall","dir":1,"sweep":0.9424123281612993,"sun":true}}}
```

## layout.kaleido · 万華鏡

布局、排版与文字组合：万花筒 / Kaleidoscope (kaleido)。标签：glitch, emotional, graphic；参数位置：params。

参数：N, center, flow, font, speed, tint。

源码：runtime/native/11p_horror1.js:195 (fits)；runtime/native/11p_layoutsD.js:1996 (plan)；runtime/native/11p_layoutsD.js:1999 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"kaleido","params":{"font":"mincho_light","N":10,"speed":-6.2624997100792825,"flow":0.1871720725321211,"center":"band","tint":"sub"}}}
```

## layout.dominoes · ドミノ

布局、排版与文字组合：骨牌 / Dominoes (dominoes)。标签：pop, graphic；参数位置：params。

参数：face, font, pips。

源码：runtime/native/06_layouts.js:300 (fits)；runtime/native/11p_layoutsD.js:2057 (plan)；runtime/native/11p_layoutsD.js:2060 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"dominoes","params":{"font":"mincho_light","face":"ink","pips":true}}}
```

## layout.burst · ドカン

布局、排版与文字组合：爆炸 / Burst (burst)。标签：pop, graphic, emotional；参数位置：params。

参数：debris, font, lines, order, sharp, spikes, tilt。

源码：runtime/native/11p_horror1.js:740 (fits)；runtime/native/11p_layoutsD.js:2122 (plan)；runtime/native/11p_layoutsD.js:2125 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"burst","params":{"font":"zenkaku","spikes":18,"sharp":0.7052499942015856,"tilt":5.544739689677954,"lines":true,"debris":true,"order":"accent"}}}
```

## layout.fisheye · 魚眼レンズ

布局、排版与文字组合：鱼眼镜头 / Fisheye lens (fisheye)。标签：pop, graphic, glitch；参数位置：params。

参数：amp, font, glass, mode。

源码：runtime/native/11p_kinetic1.js:390 (fits)；runtime/native/11p_layoutsD.js:2183 (plan)；runtime/native/11p_layoutsD.js:2186 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"fisheye","params":{"font":"mincho_light","mode":"pingpong","glass":"lens","amp":1.023216437548399}}}
```

## layout.wall · 壁面パース

布局、排版与文字组合：墙面透视 / Perspective wall (wall)。标签：graphic, editorial, emotional；参数位置：params。

参数：eye, font, orbit, side, stripe, tone, yaw。

源码：runtime/native/06_layouts.js:412 (fits)；runtime/native/11p_layoutsD.js:2251 (plan)；runtime/native/11p_layoutsD.js:2254 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"wall","params":{"font":"zenkaku","side":-1,"yaw":39.77083285013214,"orbit":12.848246563225985,"stripe":true,"eye":0.02244272268377244,"tone":"plate"}}}
```

## layout.origami · 折り紙

布局、排版与文字组合：折纸 / Origami (origami)。标签：calm, pop, emotional；参数位置：params。

参数：col, font, mode, order。

源码：runtime/native/11p_horror1.js:195 (fits)；runtime/native/11p_layoutsD.js:2335 (plan)；runtime/native/11p_layoutsD.js:2339 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"origami","params":{"font":"dela","mode":"blintz","col":"ink","order":0}}}
```

## layout.zipper · ジッパー

布局、排版与文字组合：拉链 / Zipper (zipper)。标签：pop, graphic, emotional；参数位置：params。

参数：cloth, dir, font, stitch。

源码：runtime/native/11p_horror1.js:195 (fits)；runtime/native/11p_layoutsD.js:2429 (plan)；runtime/native/11p_layoutsD.js:2432 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"zipper","params":{"font":"mincho_light","cloth":"ink","dir":1,"stitch":false}}}
```

## layout.sliceStack · スライス積層

布局、排版与文字组合：切片堆叠 / Sliced layers (sliceStack)。标签：glitch, graphic, pop；参数位置：params。

参数：amp, dir, font, gap, mode, plate, side, slices。

源码：runtime/native/11p_horror1.js:195 (fits)；runtime/native/11p_layoutsD.js:2507 (plan)；runtime/native/11p_layoutsD.js:2511 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"sliceStack","params":{"font":"zenkaku","mode":"stack","slices":7,"gap":0.5020102734677494,"side":"accent","amp":0.13496181512251498,"dir":1,"plate":"ink"}}}
```

## layout.glitchGrid · グリッチ格子

布局、排版与文字组合：故障网格 / Glitch grid (glitchGrid)。标签：glitch, graphic；参数位置：params。

参数：font, gut, inv, labels, rate。

源码：runtime/native/11p_horror1.js:195 (fits)；runtime/native/11p_layoutsD.js:2594 (plan)；runtime/native/11p_layoutsD.js:2597 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"glitchGrid","params":{"font":"zenkaku","rate":5,"inv":0.14524999420158566,"labels":false,"gut":0.009982510535046459}}}
```

## layout.mosaicTiles · タイル画

布局、排版与文字组合：磁砖拼画 / Mosaic tiles (mosaicTiles)。标签：pop, graphic, glitch；参数位置：params。

参数：D, col, floor, font, rot, wave。

源码：runtime/native/11p_horror1.js:740 (fits)；runtime/native/11p_layoutsD.js:2671 (plan)；runtime/native/11p_layoutsD.js:2674 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"mosaicTiles","params":{"font":"zenkaku","D":11,"wave":"random","rot":false,"col":"fg","floor":true}}}
```

## layout.maskReveal · 文字窓

布局、排版与文字组合：文字窗 / Text window (maskReveal)。标签：graphic, pop, emotional；参数位置：params。

参数：ang, font, label, rim, scene, speed。

源码：runtime/native/11p_horror1.js:740 (fits)；runtime/native/11p_layoutsD.js:2755 (plan)；runtime/native/11p_layoutsD.js:2758 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"maskReveal","params":{"font":"zenkaku","scene":"shine","ang":-25.656249275198206,"speed":0.7486882901284844,"rim":false,"label":true}}}
```

## layout.contour · 等高線

布局、排版与文字组合：等高线 / Contour (contour)。标签：calm, graphic, emotional；参数位置：params。

参数：col, fb, font, place, rings, side, speed。

源码：runtime/native/06_layouts.js:412 (fits)；runtime/native/11p_layoutsD.js:2819 (plan)；runtime/native/11p_layoutsD.js:2822 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"contour","params":{"font":"mincho_light","fb":"zenkaku","side":1,"rings":6,"speed":0.3119534542202018,"col":"sub","place":"low"}}}
```

## layout.halftoneBig · 網点巨大文字

布局、排版与文字组合：网点巨字 / Oversized halftone text (halftoneBig)。标签：pop, graphic, editorial；参数位置：params。

参数：ang, crop, font, mode, shape, speed。

源码：runtime/native/11p_layoutsA.js:1271 (fits)；runtime/native/11p_layoutsD.js:2887 (plan)；runtime/native/11p_layoutsD.js:2890 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"halftoneBig","params":{"font":"zenkaku","mode":"tone","ang":-24.427082125330344,"shape":"dot","speed":0.6748090756125749,"crop":true}}}
```

## layout.stencil · ステンシル

布局、排版与文字组合：镂空模板 / Stencil (stencil)。标签：graphic, pop, editorial；参数位置：params。

参数：col, dir, drips, font, marks, tilt。

源码：runtime/native/11p_horror1.js:195 (fits)；runtime/native/11p_layoutsD.js:2941 (plan)；runtime/native/11p_layoutsD.js:2944 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"stencil","params":{"font":"zenkaku","col":"accent","drips":2,"marks":false,"dir":1,"tilt":1.1221361341886222}}}
```

## layout.tyKeySplit · 大字挟み

布局、排版与文字组合：大字夹排 / Key Glyph Split (tyKeySplit)。标签：editorial, graphic, emotional；参数位置：params。

参数：big, font, fs, mode, rule。

源码：runtime/native/06_layouts.js:169 (fits)；runtime/native/11p_typo1.js:78 (plan)；runtime/native/11p_typo1.js:81 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"tyKeySplit","params":{"font":"mincho_light","fs":"dela","mode":"kanji","big":"outline","rule":true}}}
```

## layout.tyCropGiant · 見切れ大文字

布局、排版与文字组合：出框大字 / Cropped Giant (tyCropGiant)。标签：graphic, editorial, pop；参数位置：params。

参数：dir, edge, fm, font, style。

源码：runtime/native/11p_horror1.js:195 (fits)；runtime/native/11p_typo1.js:156 (plan)；runtime/native/11p_typo1.js:159 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"tyCropGiant","params":{"font":"zenkaku","fm":"mincho_light","edge":"a","style":"outline","dir":1}}}
```

## layout.tyCross · 十字組

布局、排版与文字组合：十字排 / Cross Setting (tyCross)。标签：graphic, editorial；参数位置：params。

参数：font, key, mode, rules。

源码：runtime/native/11p_typo1.js:203 (fits)；runtime/native/11p_typo1.js:204 (plan)；runtime/native/11p_typo1.js:207 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"tyCross","params":{"font":"mincho_light","mode":"mid","rules":true,"key":"fg"}}}
```

## layout.tyBandHide · 帯隠れ

布局、排版与文字组合：带状遮字 / Band Cover (tyBandHide)。标签：graphic, pop, editorial；参数位置：params。

参数：band, dir, font, k, pos, speed。

源码：runtime/native/11p_horror1.js:195 (fits)；runtime/native/11p_typo1.js:248 (plan)；runtime/native/11p_typo1.js:251 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"tyBandHide","params":{"font":"zenkaku","band":"fg","pos":"low","speed":80.40205469354987,"dir":1,"k":0.35496181512251496}}}
```

## layout.tyRuby · ルビ振り

布局、排版与文字组合：标音注记 / Ruby Notes (tyRuby)。标签：editorial, calm, emotional；参数位置：params。

参数：font, idx, up。

源码：runtime/native/11p_horror1.js:195 (fits)；runtime/native/11p_typo1.js:288 (plan)；runtime/native/11p_typo1.js:291 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"tyRuby","params":{"font":"dela","idx":false,"up":true}}}
```

## layout.tyBaseline · 罫線組

布局、排版与文字组合：格线排版 / Ruled Lines (tyBaseline)。标签：editorial, calm, graphic；参数位置：params。

参数：font, key, nl, right。

源码：runtime/native/11p_kinetic1.js:149 (fits)；runtime/native/11p_typo1.js:328 (plan)；runtime/native/11p_typo1.js:331 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"tyBaseline","params":{"font":"zenkaku","nl":3,"key":true,"right":false}}}
```

## layout.tyScaleSteps · 級数上げ

布局、排版与文字组合：字级递增 / Size Crescendo (tyScaleSteps)。标签：graphic, editorial, pop；参数位置：params。

参数：dir, font, labels, ratio。

源码：runtime/native/06_layouts.js:169 (fits)；runtime/native/11p_typo1.js:376 (plan)；runtime/native/11p_typo1.js:379 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"tyScaleSteps","params":{"font":"mincho_light","dir":"down","labels":true,"ratio":2.6464328750967976}}}
```

## layout.tyJustify · 幅揃え

布局、排版与文字组合：等宽堆叠 / Justified Stack (tyJustify)。标签：graphic, pop, editorial；参数位置：params。

参数：acc, align, font, rules。

源码：runtime/native/11p_kinetic1.js:390 (fits)；runtime/native/11p_typo1.js:453 (plan)；runtime/native/11p_typo1.js:456 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"tyJustify","params":{"font":"zenkaku","rules":false,"acc":1,"align":"left"}}}
```

## layout.tyIndexTable · 一覧表

布局、排版与文字组合：字表 / Glyph Table (tyIndexTable)。标签：editorial, graphic, calm；参数位置：params。

参数：font, head, info。

源码：runtime/native/11p_typo1.js:497 (fits)；runtime/native/11p_typo1.js:498 (plan)；runtime/native/11p_typo1.js:501 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"tyIndexTable","params":{"font":"mincho_light","info":"code","head":true}}}
```

## layout.tySplitType · 断ち割り

布局、排版与文字组合：断字错位 / Split Type (tySplitType)。标签：graphic, glitch, pop；参数位置：params。

参数：cap, cutY, font, off。

源码：runtime/native/11p_horror1.js:195 (fits)；runtime/native/11p_typo1.js:548 (plan)；runtime/native/11p_typo1.js:551 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"tySplitType","params":{"font":"zenkaku","off":0.13191507789306342,"cutY":0.08,"cap":true}}}
```

## layout.tyErode · 削り反復

布局、排版与文字组合：渐削重复 / Eroding Repeat (tyErode)。标签：emotional, editorial, calm；参数位置：params。

参数：font, idx, mode。

源码：runtime/native/11p_typo1.js:589 (fits)；runtime/native/11p_typo1.js:590 (plan)；runtime/native/11p_typo1.js:593 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"tyErode","params":{"font":"dela","mode":"erode","idx":true}}}
```

## layout.tyVRuler · 縦目盛り

布局、排版与文字组合：竖排刻度 / Vertical Scale (tyVRuler)。标签：editorial, calm, graphic；参数位置：params。

参数：font, lab, side。

源码：runtime/native/11p_horror1.js:740 (fits)；runtime/native/11p_typo1.js:628 (plan)；runtime/native/11p_typo1.js:631 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"tyVRuler","params":{"font":"dela","side":-1,"lab":"time"}}}
```

## layout.tyFullTrack · 全幅字送り

布局、排版与文字组合：满版字距 / Full-Width Tracking (tyFullTrack)。标签：editorial, calm, graphic；参数位置：params。

参数：caps, font, rule。

源码：runtime/native/11p_layoutsB.js:1618 (fits)；runtime/native/11p_typo1.js:670 (plan)；runtime/native/11p_typo1.js:673 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"tyFullTrack","params":{"font":"mincho","caps":true,"rule":true}}}
```

## layout.tyStatCount · 字数表示

布局、排版与文字组合：字数显示 / Glyph Count (tyStatCount)。标签：editorial, graphic；参数位置：params。

参数：acc, font, nf。

源码：runtime/native/06_layouts.js:412 (fits)；runtime/native/11p_typo1.js:714 (plan)；runtime/native/11p_typo1.js:717 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"tyStatCount","params":{"font":"mincho_light","nf":"zenkaku","acc":true}}}
```

## layout.tyMargin · 余白

布局、排版与文字组合：留白 / White Space (tyMargin)。标签：calm, editorial, emotional；参数位置：params。

参数：font, mark, pos。

源码：runtime/native/11p_horror1.js:91 (fits)；runtime/native/11p_typo1.js:754 (plan)；runtime/native/11p_typo1.js:757 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"tyMargin","params":{"font":"dela","pos":"br","mark":true}}}
```

## layout.tyRotBlock · 回転ブロック

布局、排版与文字组合：旋转字块 / Rotated Block (tyRotBlock)。标签：graphic, pop, editorial；参数位置：params。

参数：accent, fb, font, rot, rule。

源码：runtime/native/11p_typo1.js:788 (fits)；runtime/native/11p_typo1.js:789 (plan)；runtime/native/11p_typo1.js:792 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"tyRotBlock","params":{"font":"zenkaku","fb":"mincho_light","rot":-90,"accent":false,"rule":true}}}
```

## layout.tySquare · 方形組

布局、排版与文字组合：方块排 / Square Setting (tySquare)。标签：graphic, editorial, pop；参数位置：params。

参数：acc, font, frame, order。

源码：runtime/native/11p_kinetic1.js:390 (fits)；runtime/native/11p_typo1.js:842 (plan)；runtime/native/11p_typo1.js:845 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"tySquare","params":{"font":"mincho_light","order":"tate","frame":true,"acc":false}}}
```

## layout.tyLineFocus · 行中強調

布局、排版与文字组合：行中强调 / Line Highlight (tyLineFocus)。标签：editorial, emotional, calm；参数位置：params。

参数：font, mark。

源码：runtime/native/06_layouts.js:412 (fits)；runtime/native/11p_typo1.js:883 (plan)；runtime/native/11p_typo1.js:886 (render)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"layout":"tyLineFocus","params":{"font":"zenkaku","mark":"dot"}}}
```

## enter.cut · カット

文字登场运动：直切 / Cut (cut)。标签：；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/05b_registry.js:24 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"cut"}}
```

## enter.assemble · 分解→集合

文字登场运动：分解→聚合 / Break apart and assemble (assemble)。标签：glitch, calm, editorial, emotional；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/05_anim.js:46 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"assemble"}}
```

## enter.slice · スライス

文字登场运动：切片 / Slice (slice)。标签：glitch, graphic, emotional；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/05_anim.js:66 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"slice"}}
```

## enter.type · タイプ

文字登场运动：打字 / Type (type)。标签：calm, editorial, horror；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/05_anim.js:74 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"type"}}
```

## enter.pop · ポップ

文字登场运动：弹出 / Pop (pop)。标签：pop；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/05_anim.js:84 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"pop"}}
```

## enter.drop · 落下

文字登场运动：落下 / Drop (drop)。标签：pop；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/05_anim.js:97 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"drop"}}
```

## enter.stretch · 伸縮

文字登场运动：伸缩 / Stretch (stretch)。标签：glitch, pop, graphic；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/05_anim.js:111 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"stretch"}}
```

## enter.wipe · ワイプ

文字登场运动：擦除 / Wipe (wipe)。标签：calm, graphic, editorial, emotional；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/05_anim.js:120 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"wipe"}}
```

## enter.blur · ブラー

文字登场运动：模糊 / Blur (blur)。标签：calm, editorial, emotional, horror；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/05_anim.js:133 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"blur"}}
```

## enter.spin · 回転

文字登场运动：旋转 / Spin (spin)。标签：pop；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/05_anim.js:145 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"spin"}}
```

## enter.flicker · 点滅

文字登场运动：闪烁 / Flicker (flicker)。标签：glitch, horror；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/05_anim.js:159 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"flicker"}}
```

## enter.scramble · スクランブル

文字登场运动：乱码 / Scramble (scramble)。标签：glitch, horror；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/05_anim.js:167 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"scramble"}}
```

## enter.zoom · ズーム

文字登场运动：缩放 / Zoom (zoom)。标签：glitch, pop, graphic, emotional；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/05_anim.js:181 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"zoom"}}
```

## enter.riseMask · 下から出現

文字登场运动：由下浮现 / Reveal from below (riseMask)。标签：editorial, graphic, calm, emotional；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enter.js:152 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"riseMask"}}
```

## enter.dropMask · 上から出現

文字登场运动：由上浮现 / Reveal from above (dropMask)。标签：editorial, graphic, pop；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enter.js:164 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"dropMask"}}
```

## enter.slideL · 左からスライド

文字登场运动：从左滑入 / Slide from left (slideL)。标签：editorial, calm, pop；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enter.js:177 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"slideL"}}
```

## enter.slideR · 右からスライド

文字登场运动：从右滑入 / Slide from right (slideR)。标签：editorial, graphic, pop；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enter.js:191 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"slideR"}}
```

## enter.slideWhole · 全体スライド

文字登场运动：整体滑入 / Slide in together (slideWhole)。标签：pop, graphic；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enter.js:203 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"slideWhole"}}
```

## enter.flipX · 縦軸フリップ

文字登场运动：纵轴翻转 / Flip on vertical axis (flipX)。标签：pop, graphic, editorial；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enter.js:215 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"flipX"}}
```

## enter.flipY · 横軸フリップ

文字登场运动：横轴翻转 / Flip on horizontal axis (flipY)。标签：pop, graphic；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enter.js:230 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"flipY"}}
```

## enter.domino · ドミノ

文字登场运动：骨牌 / Domino (domino)。标签：pop；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enter.js:244 (inDur)；runtime/native/11p_enter.js:245 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"domino"}}
```

## enter.fold · 折り開き

文字登场运动：折叠展开 / Fold (fold)。标签：graphic, editorial；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enter.js:261 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"fold"}}
```

## enter.unroll · 巻き開き

文字登场运动：卷轴展开 / Unroll (unroll)。标签：calm, editorial, emotional；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enter.js:275 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"unroll"}}
```

## enter.strokeDraw · 線画から塗り

文字登场运动：线稿到上色 / Draw outlines, then fill (strokeDraw)。标签：calm, emotional, editorial；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enter.js:302 (inDur)；runtime/native/11p_enter.js:303 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"strokeDraw"}}
```

## enter.outlineFill · 輪郭→塗り

文字登场运动：轮廓→填色 / Outline to fill (outlineFill)。标签：graphic, pop, editorial；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enter.js:312 (inDur)；runtime/native/11p_enter.js:313 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"outlineFill"}}
```

## enter.splitJoin · 上下合体

文字登场运动：上下合体 / Join from top and bottom (splitJoin)。标签：graphic, editorial；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enter.js:347 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"splitJoin"}}
```

## enter.vSlice · 縦スライス

文字登场运动：纵向切片 / Vertical slices (vSlice)。标签：graphic, glitch；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enter.js:365 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"vSlice"}}
```

## enter.shutter · シャッター

文字登场运动：快门 / Shutter (shutter)。标签：graphic, editorial；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enter.js:381 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"shutter"}}
```

## enter.iris · アイリス

文字登场运动：光圈 / Iris (iris)。标签：pop, emotional, graphic；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enter.js:408 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"iris"}}
```

## enter.diagWipe · 斜めワイプ

文字登场运动：斜向擦除 / Diagonal wipe (diagWipe)。标签：graphic, editorial, pop；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enter.js:423 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"diagWipe"}}
```

## enter.blinds · ブラインド

文字登场运动：百叶窗 / Blinds (blinds)。标签：graphic, editorial；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enter.js:447 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"blinds"}}
```

## enter.checker · 市松

文字登场运动：棋盘格 / Checker (checker)。标签：graphic, glitch, pop；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enter.js:467 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"checker"}}
```

## enter.randomOrder · ランダム順

文字登场运动：随机顺序 / Random letter order (randomOrder)。标签：pop, glitch；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enter.js:497 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"randomOrder"}}
```

## enter.bounceBig · 大ジャンプ

文字登场运动：大跳跃 / Big bounce (bounceBig)。标签：pop；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enter.js:302 (inDur)；runtime/native/11p_enter.js:514 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"bounceBig"}}
```

## enter.squashDrop · 潰れて着地

文字登场运动：压扁着地 / Squash landing (squashDrop)。标签：pop；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enter.js:244 (inDur)；runtime/native/11p_enter.js:534 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"squashDrop"}}
```

## enter.rubber · ゴム伸び

文字登场运动：橡皮拉伸 / Rubber (rubber)。标签：pop；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enter.js:244 (inDur)；runtime/native/11p_enter.js:552 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"rubber"}}
```

## enter.glitchIn · グリッチ出現

文字登场运动：故障浮现 / Glitch in (glitchIn)。标签：glitch；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enter.js:566 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"glitchIn"}}
```

## enter.echoIn · 残像集束

文字登场运动：残影聚合 / Echoes converge (echoIn)。标签：graphic, emotional, pop；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enter.js:588 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"echoIn"}}
```

## enter.whip · ホイップ

文字登场运动：急甩 / Whip (whip)。标签：pop, graphic；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enter.js:613 (inDur)；runtime/native/11p_enter.js:614 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"whip"}}
```

## enter.skewIn · スキュー

文字登场运动：倾斜 / Skew in (skewIn)。标签：editorial, graphic；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enter.js:628 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"skewIn"}}
```

## enter.trackIn · 字間収束

文字登场运动：字距收拢 / Tighten letter spacing (trackIn)。标签：calm, editorial, emotional；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enter.js:641 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"trackIn"}}
```

## enter.trackOut · 字間拡張

文字登场运动：字距扩张 / Expand letter spacing (trackOut)。标签：calm, editorial, pop；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enter.js:651 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"trackOut"}}
```

## enter.blurStagger · ブラー段差

文字登场运动：模糊错落 / Staggered blur (blurStagger)。标签：calm, emotional；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enter.js:663 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"blurStagger"}}
```

## enter.fadeStagger · 字ごとフェード

文字登场运动：逐字淡入 / Letter by letter fade (fadeStagger)。标签：calm, emotional；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enter.js:676 (inDur)；runtime/native/11p_enter.js:677 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"fadeStagger"}}
```

## enter.waveIn · 波立ち

文字登场运动：波浪起伏 / Wave in (waveIn)。标签：pop, emotional；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enter.js:676 (inDur)；runtime/native/11p_enter.js:690 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"waveIn"}}
```

## enter.spiralIn · 螺旋集合

文字登场运动：螺旋聚合 / Spiral assembly (spiralIn)。标签：pop, emotional；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enter.js:244 (inDur)；runtime/native/11p_enter.js:704 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"spiralIn"}}
```

## enter.zoomOut · 巨大→等倍

文字登场运动：巨大→原尺寸 / Oversized to normal (zoomOut)。标签：pop, graphic, glitch；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enter.js:721 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"zoomOut"}}
```

## enter.resolve · 解読

文字登场运动：解码 / Resolve (resolve)。标签：glitch, editorial；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enter.js:732 (inDur)；runtime/native/11p_enter.js:733 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"resolve"}}
```

## enter.magnet · 磁石

文字登场运动：磁吸 / Magnet (magnet)。标签：pop, graphic；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enter.js:757 (inDur)；runtime/native/11p_enter.js:758 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"magnet"}}
```

## enter.inkBleed · にじみ

文字登场运动：晕染 / Ink bleed (inkBleed)。标签：calm, emotional；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enter.js:777 (inDur)；runtime/native/11p_enter.js:778 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"inkBleed"}}
```

## enter.neonOn · ネオン点灯

文字登场运动：霓虹点亮 / Neon on (neonOn)。标签：glitch, emotional, pop；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enter.js:312 (inDur)；runtime/native/11p_enter.js:795 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"neonOn"}}
```

## enter.cursorSweep · カーソル掃引

文字登场运动：光标扫过 / Cursor sweep (cursorSweep)。标签：editorial, graphic；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enter.js:812 (inDur)；runtime/native/11p_enter.js:813 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"cursorSweep"}}
```

## enter.stamp · スタンプ

文字登场运动：盖章 / Stamp (stamp)。标签：pop, graphic；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enter.js:812 (inDur)；runtime/native/11p_enter.js:839 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"stamp"}}
```

## enter.springIn · バネ

文字登场运动：弹簧 / Spring in (springIn)。标签：pop；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enterB.js:122 (inDur)；runtime/native/11p_enterB.js:123 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"springIn"}}
```

## enter.pendulum · 振り子

文字登场运动：钟摆 / Pendulum (pendulum)。标签：pop, emotional, calm；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enterB.js:138 (inDur)；runtime/native/11p_enterB.js:139 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"pendulum"}}
```

## enter.rollIn · 転がり

文字登场运动：滚入 / Roll in (rollIn)。标签：pop, graphic；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enterB.js:169 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"rollIn"}}
```

## enter.slingshot · パチンコ

文字登场运动：弹弓 / Slingshot (slingshot)。标签：pop, graphic；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enterB.js:186 (inDur)；runtime/native/11p_enterB.js:187 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"slingshot"}}
```

## enter.rockSettle · ぐらぐら着地

文字登场运动：摇晃着地 / Wobble to rest (rockSettle)。标签：pop；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enterB.js:138 (inDur)；runtime/native/11p_enterB.js:222 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"rockSettle"}}
```

## enter.bounceBall · バウンドボール

文字登场运动：弹跳球 / Bounce ball (bounceBall)。标签：pop, emotional；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enterB.js:240 (inDur)；runtime/native/11p_enterB.js:241 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"bounceBall"}}
```

## enter.snapRail · スナップ整列

文字登场运动：吸附对齐 / Snap into alignment (snapRail)。标签：graphic, pop, editorial；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enterB.js:186 (inDur)；runtime/native/11p_enterB.js:279 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"snapRail"}}
```

## enter.fanOpen · 扇開き

文字登场运动：扇子展开 / Folding fan opens (fanOpen)。标签：emotional, graphic, calm；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enterB.js:122 (inDur)；runtime/native/11p_enterB.js:316 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"fanOpen"}}
```

## enter.cylinder · 円筒回転

文字登场运动：圆柱旋转 / Cylinder (cylinder)。标签：graphic, pop, editorial；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enterB.js:336 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"cylinder"}}
```

## enter.shuffle · シャッフル

文字登场运动：洗牌 / Shuffle (shuffle)。标签：pop, glitch, graphic；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enterB.js:186 (inDur)；runtime/native/11p_enterB.js:358 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"shuffle"}}
```

## enter.stopMotion · コマ撮り

文字登场运动：定格动画 / Stop motion (stopMotion)。标签：pop, emotional；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enterB.js:387 (inDur)；runtime/native/11p_enterB.js:388 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"stopMotion"}}
```

## enter.ripple · 波紋

文字登场运动：涟漪 / Ripple (ripple)。标签：emotional, calm, graphic；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enterB.js:405 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"ripple"}}
```

## enter.zipper · ジッパー

文字登场运动：拉链 / Zipper (zipper)。标签：graphic, pop；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enterB.js:432 (inDur)；runtime/native/11p_enterB.js:433 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"zipper"}}
```

## enter.zoomAlt · 交互ズーム

文字登场运动：交错缩放 / Zoom alt (zoomAlt)。标签：pop, graphic, glitch；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enterB.js:462 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"zoomAlt"}}
```

## enter.tiltUp · 起立

文字登场运动：站起 / Tilt up (tiltUp)。标签：graphic, editorial, pop；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enterB.js:476 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"tiltUp"}}
```

## enter.stickerPeel · シール貼り

文字登场运动：贴上贴纸 / Apply sticker (stickerPeel)。标签：pop, graphic, editorial；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enterB.js:496 (inDur)；runtime/native/11p_enterB.js:497 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"stickerPeel"}}
```

## enter.crumple · くしゃ戻り

文字登场运动：揉皱还原 / Uncrumple (crumple)。标签：pop, graphic, emotional；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enterB.js:547 (inDur)；runtime/native/11p_enterB.js:548 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"crumple"}}
```

## enter.noteUnfold · 手紙開き

文字登场运动：展开信纸 / Unfold letter (noteUnfold)。标签：emotional, calm, graphic；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enterB.js:186 (inDur)；runtime/native/11p_enterB.js:577 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"noteUnfold"}}
```

## enter.tornJoin · 破れ合わせ

文字登场运动：撕纸拼合 / Join torn pieces (tornJoin)。标签：graphic, emotional, pop；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enterB.js:432 (inDur)；runtime/native/11p_enterB.js:620 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"tornJoin"}}
```

## enter.splitFlap · パタパタ

文字登场运动：翻牌 / Split flap display (splitFlap)。标签：glitch, editorial, graphic；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enterB.js:666 (inDur)；runtime/native/11p_enterB.js:667 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"splitFlap"}}
```

## enter.overexpose · 露出オーバー

文字登场运动：过曝 / Overexpose (overexpose)。标签：emotional, pop, glitch；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enterB.js:432 (inDur)；runtime/native/11p_enterB.js:722 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"overexpose"}}
```

## enter.glint · グリント

文字登场运动：反光一闪 / Glint (glint)。标签：editorial, emotional, graphic；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enterB.js:122 (inDur)；runtime/native/11p_enterB.js:740 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"glint"}}
```

## enter.loupe · ルーペ

文字登场运动：放大镜 / Loupe (loupe)。标签：editorial, pop, calm；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enterB.js:186 (inDur)；runtime/native/11p_enterB.js:776 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"loupe"}}
```

## enter.filmFeed · フィルム送り

文字登场运动：胶片滚动 / Film feed (filmFeed)。标签：emotional, glitch, editorial；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enterB.js:806 (inDur)；runtime/native/11p_enterB.js:807 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"filmFeed"}}
```

## enter.backlight · 逆光

文字登场运动：逆光 / Backlight (backlight)。标签：emotional, calm；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enterB.js:806 (inDur)；runtime/native/11p_enterB.js:832 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"backlight"}}
```

## enter.lightLeak · 光漏れ

文字登场运动：漏光 / Light leak (lightLeak)。标签：emotional, calm, pop；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enterB.js:186 (inDur)；runtime/native/11p_enterB.js:855 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"lightLeak"}}
```

## enter.heatHaze · 陽炎

文字登场运动：热浪扭曲 / Heat haze (heatHaze)。标签：emotional, calm, glitch；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enterB.js:122 (inDur)；runtime/native/11p_enterB.js:885 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"heatHaze"}}
```

## enter.crtOn · CRT電源

文字登场运动：CRT 开机 / CRT powers on (crtOn)。标签：glitch, pop, graphic；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enterB.js:908 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"crtOn"}}
```

## enter.interlace · インターレース

文字登场运动：交错扫描 / Interlace (interlace)。标签：glitch, graphic, editorial；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enterB.js:931 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"interlace"}}
```

## enter.loadingBar · ローディング

文字登场运动：加载条 / Loading bar (loadingBar)。标签：graphic, editorial, glitch；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enterB.js:955 (inDur)；runtime/native/11p_enterB.js:956 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"loadingBar"}}
```

## enter.dither · ディザ

文字登场运动：抖动 / Dither (dither)。标签：glitch, graphic；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enterB.js:994 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"dither"}}
```

## enter.odometer · ドラム回転

文字登场运动：数字滚轮 / Rolling number drum (odometer)。标签：glitch, editorial, pop；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enterB.js:186 (inDur)；runtime/native/11p_enterB.js:1023 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"odometer"}}
```

## enter.matrixRain · データ降下

文字登场运动：数据雨 / Data rain (matrixRain)。标签：glitch, graphic；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enterB.js:186 (inDur)；runtime/native/11p_enterB.js:1056 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"matrixRain"}}
```

## enter.hatchFill · ハッチ→ベタ

文字登场运动：斜线→实心 / Hatch fill (hatchFill)。标签：graphic, editorial；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enterB.js:122 (inDur)；runtime/native/11p_enterB.js:1089 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"hatchFill"}}
```

## enter.brushReveal · 筆払い

文字登场运动：笔触扫出 / Brush reveal (brushReveal)。标签：emotional, editorial, calm；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enterB.js:496 (inDur)；runtime/native/11p_enterB.js:1112 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"brushReveal"}}
```

## enter.inkDrop · インク滴

文字登场运动：墨滴 / Ink drop (inkDrop)。标签：calm, emotional, graphic；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enterB.js:496 (inDur)；runtime/native/11p_enterB.js:1144 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"inkDrop"}}
```

## enter.quarters · 四方集結

文字登场运动：四方聚合 / Converge from four sides (quarters)。标签：graphic, pop；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enterB.js:1182 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"quarters"}}
```

## enter.invertBox · 反転抜け

文字登场运动：反转挖空 / Invert box (invertBox)。标签：graphic, editorial, pop；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enterB.js:122 (inDur)；runtime/native/11p_enterB.js:1209 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"invertBox"}}
```

## enter.printRegister · 版ズレ

文字登场运动：套印错位 / Color plates align (printRegister)。标签：graphic, pop, editorial；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enterB.js:122 (inDur)；runtime/native/11p_enterB.js:1230 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"printRegister"}}
```

## enter.echoCount · カウントイン

文字登场运动：数拍进场 / Count in (echoCount)。标签：pop, graphic, glitch；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enterB.js:186 (inDur)；runtime/native/11p_enterB.js:1256 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"echoCount"}}
```

## enter.liquidFill · 水位上昇

文字登场运动：水位上升 / Liquid rises (liquidFill)。标签：emotional, calm, pop；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enterB.js:186 (inDur)；runtime/native/11p_enterB.js:1269 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"liquidFill"}}
```

## enter.windBlown · 風に乗って

文字登场运动：乘风而来 / Wind blown (windBlown)。标签：emotional, calm；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enterB.js:186 (inDur)；runtime/native/11p_enterB.js:1302 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"windBlown"}}
```

## enter.strokeOrder · 一画ずつ

文字登场运动：逐笔书写 / Stroke by stroke (strokeOrder)。标签：calm, emotional, editorial；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enterB.js:1326 (inDur)；runtime/native/11p_enterB.js:1327 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"strokeOrder"}}
```

## enter.clockWipe · 時計回り

文字登场运动：顺时针 / Clock wipe (clockWipe)。标签：graphic, pop, editorial；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enterB.js:1347 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"clockWipe"}}
```

## enter.shadowFirst · 影落とし

文字登场运动：影子先落 / Shadow first (shadowFirst)。标签：pop, graphic, emotional；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enterB.js:806 (inDur)；runtime/native/11p_enterB.js:1382 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"shadowFirst"}}
```

## enter.bubbles · 泡

文字登场运动：泡泡 / Bubbles (bubbles)。标签：pop, emotional, calm；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enterB.js:186 (inDur)；runtime/native/11p_enterB.js:1406 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"bubbles"}}
```

## enter.tokoroten · ところてん

文字登场运动：挤压成条 / Extruded noodles (tokoroten)。标签：pop, graphic；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_enterB.js:806 (inDur)；runtime/native/11p_enterB.js:1442 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"tokoroten"}}
```

## enter.hrBlinkCreep · 瞬きの間に

文字登场运动：眨眼之间 / Between Blinks (hrBlinkCreep)。标签：horror, emotional；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_horror2.js:74 (inDur)；runtime/native/11p_horror2.js:75 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"hrBlinkCreep"}}
```

## enter.hrJumpScare · 飛び出し

文字登场运动：突然跳出 / Jump Scare (hrJumpScare)。标签：horror, glitch, pop；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_horror2.js:94 (inDur)；runtime/native/11p_horror2.js:95 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"hrJumpScare"}}
```

## enter.hrUneasy · 間の悪い出現

文字登场运动：不安的出现 / Uneasy Timing (hrUneasy)。标签：horror, editorial；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_horror2.js:114 (inDur)；runtime/native/11p_horror2.js:115 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"hrUneasy"}}
```

## enter.hrVhold · 垂直同期

文字登场运动：垂直同步 / Vertical Hold (hrVhold)。标签：horror, glitch；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_horror2.js:130 (inDur)；runtime/native/11p_horror2.js:131 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"hrVhold"}}
```

## enter.hrMirrorSnap · 鏡文字

文字登场运动：镜像字 / Mirror Writing (hrMirrorSnap)。标签：horror, glitch；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_horror2.js:153 (inDur)；runtime/native/11p_horror2.js:154 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"hrMirrorSnap"}}
```

## enter.hrManifest · 浮かび上がる

文字登场运动：缓缓浮现 / Manifest (hrManifest)。标签：horror, emotional, calm；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_horror2.js:169 (inDur)；runtime/native/11p_horror2.js:170 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"hrManifest"}}
```

## enter.hrClawReveal · 爪痕から

文字登场运动：爪痕浮现 / Claw Marks (hrClawReveal)。标签：horror, graphic；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exitB.js:198 (inDur)；runtime/native/11p_horror2.js:187 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"hrClawReveal"}}
```

## enter.knWordSlam · 語ごとスラム

文字登场运动：逐词重击 / Word Slam (knWordSlam)。标签：pop, graphic, glitch；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_kinetic2.js:88 (inDur)；runtime/native/11p_kinetic2.js:93 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"knWordSlam"}}
```

## enter.knTypeToSlam · 打鍵→拡大

文字登场运动：打字→放大 / Type and Grow (knTypeToSlam)。标签：pop, editorial, graphic；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_kinetic2.js:88 (inDur)；runtime/native/11p_kinetic2.js:112 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"knTypeToSlam"}}
```

## enter.knReplaceIn · 入れ替わり登場

文字登场运动：替换登场 / Swap In (knReplaceIn)。标签：pop, graphic, glitch；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_kinetic2.js:129 (inDur)；runtime/native/11p_kinetic2.js:130 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"knReplaceIn"}}
```

## enter.knHingeDrop · 蝶番おろし

文字登场运动：铰链落下 / Hinge Drop (knHingeDrop)。标签：pop, graphic；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_kinetic2.js:88 (inDur)；runtime/native/11p_kinetic2.js:156 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"knHingeDrop"}}
```

## enter.knLoopIn · ループ入り

文字登场运动：绕圈进场 / Loop In (knLoopIn)。标签：pop, graphic；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_kinetic2.js:172 (inDur)；runtime/native/11p_kinetic2.js:173 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"knLoopIn"}}
```

## enter.knPushIn · 押し込み

文字登场运动：推入 / Push In (knPushIn)。标签：pop, editorial, graphic；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_kinetic2.js:88 (inDur)；runtime/native/11p_kinetic2.js:190 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"knPushIn"}}
```

## enter.knInertia · 急ブレーキ

文字登场运动：急刹车 / Hard Brake (knInertia)。标签：pop, graphic；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_kinetic2.js:215 (inDur)；runtime/native/11p_kinetic2.js:216 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"knInertia"}}
```

## enter.knWordSpin · 語ごと回転

文字登场运动：逐词旋转 / Word Spin (knWordSpin)。标签：pop, graphic；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_kinetic2.js:88 (inDur)；runtime/native/11p_kinetic2.js:233 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"knWordSpin"}}
```

## enter.knDiveIn · 手前から語

文字登场运动：从镜头飞入 / Words From Camera (knDiveIn)。标签：pop, emotional, graphic；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_kinetic2.js:88 (inDur)；runtime/native/11p_kinetic2.js:249 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"knDiveIn"}}
```

## enter.knStretchOut · 伸び出し

文字登场运动：伸展弹出 / Tape Stretch (knStretchOut)。标签：pop, graphic；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_kinetic2.js:88 (inDur)；runtime/native/11p_kinetic2.js:264 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"knStretchOut"}}
```

## enter.tyKeyFirst · キー字先行

文字登场运动：主字先行 / Key Glyph First (tyKeyFirst)。标签：pop, graphic, editorial, emotional；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_typo2.js:76 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"tyKeyFirst"}}
```

## enter.tyLineWipe · 行送りワイプ

文字登场运动：逐行擦入 / Line-by-Line Wipe (tyLineWipe)。标签：editorial, graphic, calm；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_typo2.js:100 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"tyLineWipe"}}
```

## enter.tyZoomOne · 一字ずつ拡大

文字登场运动：逐字放大 / One by One Zoom (tyZoomOne)。标签：pop, graphic, emotional；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_typo2.js:132 (inDur)；runtime/native/11p_typo2.js:133 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"tyZoomOne"}}
```

## enter.tyUnderLift · 下線から立つ

文字登场运动：从底线升起 / Rise from Underline (tyUnderLift)。标签：editorial, graphic, pop；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_typo2.js:161 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"tyUnderLift"}}
```

## enter.tyDotGrow · 点から字

文字登场运动：点化为字 / Dot to Glyph (tyDotGrow)。标签：pop, calm, graphic；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_typo2.js:187 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"tyDotGrow"}}
```

## enter.tyBracketOpen · 括弧が開く

文字登场运动：括号展开 / Brackets Open (tyBracketOpen)。标签：editorial, graphic, pop；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_typo2.js:215 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"tyBracketOpen"}}
```

## enter.tyRetype · 打ち直し

文字登场运动：打错重打 / Retype (tyRetype)。标签：editorial, glitch, emotional；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_typo2.js:229 (inDur)；runtime/native/11p_typo2.js:230 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"tyRetype"}}
```

## enter.tyRubyDrop · ルビから

文字登场运动：从注音落下 / From Ruby (tyRubyDrop)。标签：calm, editorial, emotional；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_typo2.js:259 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"enter":"tyRubyDrop"}}
```

## hold.still · 静止

停留期间的连续运动：静止 / Still (still)。标签：calm, editorial, emotional, graphic；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/05b_registry.js:24 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"hold":"still"}}
```

## hold.jitter · ジッター

停留期间的连续运动：抖动 / Jitter (jitter)。标签：glitch, pop；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/05_anim.js:202 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"hold":"jitter"}}
```

## hold.drift · ドリフト

停留期间的连续运动：漂移 / Drift (drift)。标签：calm, emotional, editorial；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/05_anim.js:210 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"hold":"drift"}}
```

## hold.breathe · 呼吸

停留期间的连续运动：呼吸 / Breathe (breathe)。标签：calm, emotional；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/05_anim.js:219 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"hold":"breathe"}}
```

## hold.wave · ウェーブ

停留期间的连续运动：波浪 / Wave (wave)。标签：pop；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/05_anim.js:226 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"hold":"wave"}}
```

## hold.glitchtick · グリッチ

停留期间的连续运动：故障 / Glitch tick (glitchtick)。标签：glitch；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/05_anim.js:233 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"hold":"glitchtick"}}
```

## hold.float · ふわふわ

停留期间的连续运动：轻飘飘 / Float (float)。标签：calm, emotional；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exit.js:882 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"hold":"float"}}
```

## hold.sway · ゆらぎ

停留期间的连续运动：摇曳 / Sway (sway)。标签：calm, emotional；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exit.js:891 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"hold":"sway"}}
```

## hold.pulse · 脈動

停留期间的连续运动：脉动 / Pulse (pulse)。标签：pop, graphic；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exit.js:900 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"hold":"pulse"}}
```

## hold.shimmer · きらめき

停留期间的连续运动：闪耀 / Shimmer (shimmer)。标签：emotional, calm；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exit.js:909 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"hold":"shimmer"}}
```

## hold.colorRun · 色が走る

停留期间的连续运动：流动色彩 / Traveling color (colorRun)。标签：pop, graphic；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exit.js:922 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"hold":"colorRun"}}
```

## hold.rotateSlow · ゆっくり回転

停留期间的连续运动：缓慢旋转 / Rotate slow (rotateSlow)。标签：calm, editorial；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exit.js:937 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"hold":"rotateSlow"}}
```

## hold.trackBreathe · 字間の呼吸

停留期间的连续运动：字距呼吸 / Breathing letter spacing (trackBreathe)。标签：calm, editorial；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exit.js:946 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"hold":"trackBreathe"}}
```

## hold.skewWobble · 斜め揺れ

停留期间的连续运动：斜向摇晃 / Skew wobble (skewWobble)。标签：pop, glitch；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exit.js:956 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"hold":"skewWobble"}}
```

## hold.beatHop · 拍で跳ねる

停留期间的连续运动：随拍跳动 / Hop to the beat (beatHop)。标签：pop；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exit.js:966 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"hold":"beatHop"}}
```

## hold.hWave · 横波

停留期间的连续运动：横向波浪 / Horizontal wave (hWave)。标签：pop, emotional；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exit.js:980 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"hold":"hWave"}}
```

## hold.heartbeat · 鼓動

停留期间的连续运动：心跳 / Heartbeat (heartbeat)。标签：emotional, pop；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exit.js:989 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"hold":"heartbeat"}}
```

## hold.orbitSmall · 小さな円運動

停留期间的连续运动：小圆周运动 / Small orbit (orbitSmall)。标签：calm, pop；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exit.js:1001 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"hold":"orbitSmall"}}
```

## hold.jelly · ゼリー

停留期间的连续运动：果冻 / Jelly (jelly)。标签：pop；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exit.js:1010 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"hold":"jelly"}}
```

## hold.scanBand · 走査帯

停留期间的连续运动：扫描带 / Scanning band (scanBand)。标签：glitch, graphic；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exit.js:1023 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"hold":"scanBand"}}
```

## hold.noiseDrift · ノイズ漂流

停留期间的连续运动：噪点漂移 / Drifting noise (noiseDrift)。标签：calm, emotional；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exit.js:1038 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"hold":"noiseDrift"}}
```

## hold.tilt · シーソー

停留期间的连续运动：翘翘板 / Tilt (tilt)。标签：calm, editorial；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exit.js:1047 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"hold":"tilt"}}
```

## hold.zoomSlow · じわ寄り

停留期间的连续运动：缓慢推近 / Slow push (zoomSlow)。标签：calm, emotional, editorial；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exit.js:1057 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"hold":"zoomSlow"}}
```

## hold.stretchPulse · 横伸び拍

停留期间的连续运动：随拍横向拉伸 / Stretch to the beat (stretchPulse)。标签：pop, graphic；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exit.js:1067 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"hold":"stretchPulse"}}
```

## hold.glitchJump · 時々ずれる

停留期间的连续运动：偶尔错位 / Occasional glitch jump (glitchJump)。标签：glitch；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exit.js:1076 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"hold":"glitchJump"}}
```

## hold.echoTrail · 残像を引く

停留期间的连续运动：残影拖尾 / Echo trail (echoTrail)。标签：emotional, glitch；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exit.js:1092 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"hold":"echoTrail"}}
```

## hold.glowFlicker · 灯火のゆらぎ

停留期间的连续运动：烛火摇曳 / Flickering glow (glowFlicker)。标签：calm, emotional；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exitB.js:1705 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"hold":"glowFlicker"}}
```

## hold.windGust · 突風

停留期间的连续运动：阵风 / Wind gust (windGust)。标签：pop, emotional；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exitB.js:1724 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"hold":"windGust"}}
```

## hold.dangle · ぶら下がり

停留期间的连续运动：悬吊 / Dangle (dangle)。标签：calm, emotional；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exitB.js:1743 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"hold":"dangle"}}
```

## hold.eqBounce · 音圧で伸びる

停留期间的连续运动：随音量伸缩 / Audio level bounce (eqBounce)。标签：pop, graphic；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exitB.js:1758 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"hold":"eqBounce"}}
```

## hold.flashBox · 拍で反転

停留期间的连续运动：随拍反转 / Invert to the beat (flashBox)。标签：pop, graphic, glitch；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exitB.js:1775 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"hold":"flashBox"}}
```

## hold.glintSweep · 光沢

停留期间的连续运动：光泽扫过 / Passing highlight (glintSweep)。标签：graphic, calm；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exitB.js:1801 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"hold":"glintSweep"}}
```

## hold.flipSwap · 時々裏返る

停留期间的连续运动：偶尔翻面 / Occasional flip (flipSwap)。标签：glitch, pop；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exitB.js:1823 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"hold":"flipSwap"}}
```

## hold.shadowSway · 影が揺れる

停留期间的连续运动：影子摇晃 / Swaying shadow (shadowSway)。标签：calm, emotional；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exitB.js:1848 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"hold":"shadowSway"}}
```

## hold.magnetJiggle · 磁力

停留期间的连续运动：磁力 / Magnet jiggle (magnetJiggle)。标签：pop, glitch；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exitB.js:1860 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"hold":"magnetJiggle"}}
```

## hold.typeRattle · タイプの震え

停留期间的连续运动：打字震动 / Typewriter rattle (typeRattle)。标签：editorial, glitch；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exitB.js:1884 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"hold":"typeRattle"}}
```

## hold.focusRack · ピント送り

停留期间的连续运动：移焦 / Rack focus (focusRack)。标签：calm, emotional；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exitB.js:1899 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"hold":"focusRack"}}
```

## hold.pluckString · 弦の振動

停留期间的连续运动：拨弦 / Plucked string (pluckString)。标签：pop, emotional；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exitB.js:1915 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"hold":"pluckString"}}
```

## hold.hrTwitch · 痙攣

停留期间的连续运动：抽搐 / Twitch (hrTwitch)。标签：horror, glitch；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_horror2.js:357 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"hold":"hrTwitch"}}
```

## hold.hrStare · 見つめる字

停留期间的连续运动：凝视的字 / Staring Glyph (hrStare)。标签：horror, emotional；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_horror2.js:372 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"hold":"hrStare"}}
```

## hold.hrLagOne · 遅れる一字

停留期间的连续运动：慢一拍的字 / The Late One (hrLagOne)。标签：horror, calm；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_horror2.js:386 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"hold":"hrLagOne"}}
```

## hold.hrFlickerLight · 切れかけの灯

停留期间的连续运动：将熄的灯 / Failing Light (hrFlickerLight)。标签：horror, glitch, emotional；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_horror2.js:398 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"hold":"hrFlickerLight"}}
```

## hold.knWordPulse · 語ごとの拍

停留期间的连续运动：逐词节拍 / Word Pulse (knWordPulse)。标签：pop, graphic；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_kinetic2.js:454 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"hold":"knWordPulse"}}
```

## hold.knCounterRock · 逆回転ゆれ

停留期间的连续运动：反向摇摆 / Counter Rock (knCounterRock)。标签：pop, calm, graphic；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_kinetic2.js:471 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"hold":"knCounterRock"}}
```

## hold.knWordRide · 語の波乗り

停留期间的连续运动：词语冲浪 / Word Surf (knWordRide)。标签：calm, emotional, pop；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_kinetic2.js:488 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"hold":"knWordRide"}}
```

## hold.knTickShift · 刻みシフト

停留期间的连续运动：滴答位移 / Tick Shift (knTickShift)。标签：graphic, pop, editorial；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_kinetic2.js:504 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"hold":"knTickShift"}}
```

## hold.knBeatLean · 拍で傾く

停留期间的连续运动：随拍倾斜 / Beat Lean (knBeatLean)。标签：pop, glitch, graphic；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_kinetic2.js:517 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"hold":"knBeatLean"}}
```

## hold.knGapBreath · 語間の呼吸

停留期间的连续运动：词间呼吸 / Breathing Gaps (knGapBreath)。标签：calm, editorial, emotional；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_kinetic2.js:531 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"hold":"knGapBreath"}}
```

## hold.tyKeyPulse · 一字の鼓動

停留期间的连续运动：主字脉动 / Key Glyph Pulse (tyKeyPulse)。标签：emotional, pop, calm；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_typo2.js:452 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"hold":"tyKeyPulse"}}
```

## hold.tyReadCursor · 読み送り

停留期间的连续运动：阅读光标 / Reading Cursor (tyReadCursor)。标签：calm, editorial, pop；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_typo2.js:472 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"hold":"tyReadCursor"}}
```

## hold.tyOutlineBlink · 白抜き明滅

停留期间的连续运动：空心闪烁 / Outline Blink (tyOutlineBlink)。标签：glitch, graphic, pop；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_typo2.js:494 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"hold":"tyOutlineBlink"}}
```

## hold.tyTrackStep · 字間ステップ

停留期间的连续运动：字距跳段 / Tracking Steps (tyTrackStep)。标签：graphic, editorial, pop；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_typo2.js:508 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"hold":"tyTrackStep"}}
```

## exit.cut · カット

文字退场运动：直切 / Cut (cut)。标签：；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/05b_registry.js:24 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"cut"}}
```

## exit.explode · 爆散

文字退场运动：爆散 / Explode (explode)。标签：glitch, emotional；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/05_anim.js:248 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"explode"}}
```

## exit.fall · 崩落

文字退场运动：崩落 / Crumble and fall (fall)。标签：glitch, emotional, horror；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/05_anim.js:269 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"fall"}}
```

## exit.drift · 霧散

文字退场运动：雾散 / Drift away (drift)。标签：calm, editorial, emotional, horror；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/05_anim.js:287 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"drift"}}
```

## exit.slice · スライス退場

文字退场运动：切片退场 / Slice (slice)。标签：glitch, graphic；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/05_anim.js:302 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"slice"}}
```

## exit.wipe · ワイプ退場

文字退场运动：擦除退场 / Wipe (wipe)。标签：calm, graphic, editorial；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/05_anim.js:310 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"wipe"}}
```

## exit.shrink · 収縮

文字退场运动：收缩 / Shrink (shrink)。标签：calm, pop；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/05_anim.js:322 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"shrink"}}
```

## exit.blur · ブラー退場

文字退场运动：模糊退场 / Blur (blur)。标签：calm, pop, editorial, emotional, horror；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/05_anim.js:332 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"blur"}}
```

## exit.stretch · 伸縮退場

文字退场运动：伸缩退场 / Stretch (stretch)。标签：pop, graphic；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/05_anim.js:342 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"stretch"}}
```

## exit.scatter · 飛散

文字退场运动：飞散 / Scatter (scatter)。标签：pop；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/05_anim.js:353 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"scatter"}}
```

## exit.glitch · グリッチ退場

文字退场运动：故障退场 / Glitch (glitch)。标签：glitch, horror；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/05_anim.js:366 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"glitch"}}
```

## exit.sinkMask · 沈む

文字退场运动：下沉 / Sink out (sinkMask)。标签：calm, editorial, graphic；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exit.js:873 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"sinkMask"}}
```

## exit.riseOut · 上へ抜ける

文字退场运动：向上消失 / Rise out (riseOut)。标签：calm, emotional, editorial；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exit.js:873 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"riseOut"}}
```

## exit.slideOutL · 左へ流れる

文字退场运动：向左滑出 / Slide left (slideOutL)。标签：pop, graphic；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exit.js:873 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"slideOutL"}}
```

## exit.slideOutR · 右へ流れる

文字退场运动：向右滑出 / Slide right (slideOutR)。标签：pop, graphic；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exit.js:873 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"slideOutR"}}
```

## exit.flipOutX · 扉が閉まる

文字退场运动：关门 / Doors close (flipOutX)。标签：graphic, pop, editorial；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exit.js:873 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"flipOutX"}}
```

## exit.flipOutY · パタン倒れ

文字退场运动：啪地倒下 / Flip down (flipOutY)。标签：pop, graphic；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exit.js:873 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"flipOutY"}}
```

## exit.foldOut · 折り畳み

文字退场运动：折叠收起 / Fold out (foldOut)。标签：graphic, editorial；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exit.js:233 (outDur)；runtime/native/11p_exit.js:873 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"foldOut"}}
```

## exit.squash · 潰れる

文字退场运动：压扁 / Squash (squash)。标签：glitch, pop, graphic；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exit.js:873 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"squash"}}
```

## exit.trackOutWide · 字間が開く

文字退场运动：字距散开 / Spread letter spacing (trackOutWide)。标签：calm, emotional, editorial；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exit.js:873 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"trackOutWide"}}
```

## exit.collapse · 吸い込み

文字退场运动：吸入 / Collapse inward (collapse)。标签：pop, graphic；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exit.js:873 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"collapse"}}
```

## exit.zoomThrough · 手前へ抜ける

文字退场运动：冲向镜头 / Zoom through (zoomThrough)。标签：emotional, pop；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exit.js:873 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"zoomThrough"}}
```

## exit.zoomFar · 奥へ遠ざかる

文字退场运动：退向远方 / Recede into distance (zoomFar)。标签：emotional, calm；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exit.js:873 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"zoomFar"}}
```

## exit.spinOut · 回って消える

文字退场运动：旋转消失 / Spin away (spinOut)。标签：pop；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exit.js:873 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"spinOut"}}
```

## exit.twist · ねじれ

文字退场运动：扭转 / Twist (twist)。标签：pop, graphic；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exit.js:873 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"twist"}}
```

## exit.waveOut · 波で崩れる

文字退场运动：波浪崩解 / Wave out (waveOut)。标签：pop, emotional；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exit.js:873 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"waveOut"}}
```

## exit.blurOutStagger · 字ごとボケ

文字退场运动：逐字模糊 / Blur letters in sequence (blurOutStagger)。标签：calm, emotional；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exit.js:873 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"blurOutStagger"}}
```

## exit.undraw · 線に戻る

文字退场运动：回到线稿 / Return to outlines (undraw)。标签：editorial, calm, graphic；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exit.js:404 (outDur)；runtime/native/11p_exit.js:873 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"undraw"}}
```

## exit.outlineOut · 塗りが抜ける

文字退场运动：填色褪去 / Fill fades to outline (outlineOut)。标签：graphic, emotional；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exit.js:873 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"outlineOut"}}
```

## exit.irisClose · アイリス

文字退场运动：光圈 / Iris closes (irisClose)。标签：graphic, pop, editorial；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exit.js:873 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"irisClose"}}
```

## exit.diagWipeOut · 斜めワイプ

文字退场运动：斜向擦除 / Diag wipe out (diagWipeOut)。标签：graphic, editorial；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exit.js:873 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"diagWipeOut"}}
```

## exit.blindsClose · ブラインド

文字退场运动：百叶窗 / Blinds close (blindsClose)。标签：graphic, editorial；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exit.js:873 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"blindsClose"}}
```

## exit.checkerOut · 市松

文字退场运动：棋盘格 / Checker out (checkerOut)。标签：graphic, glitch；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exit.js:873 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"checkerOut"}}
```

## exit.splitApart · 上下に割れる

文字退场运动：上下裂开 / Split top and bottom (splitApart)。标签：graphic, pop；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exit.js:873 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"splitApart"}}
```

## exit.vSliceDrop · 縦スライス落下

文字退场运动：纵向切片掉落 / Vertical slices fall (vSliceDrop)。标签：graphic, glitch；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exit.js:539 (outDur)；runtime/native/11p_exit.js:873 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"vSliceDrop"}}
```

## exit.melt · 溶ける

文字退场运动：融化 / Melt (melt)。标签：emotional, glitch；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exit.js:557 (outDur)；runtime/native/11p_exit.js:873 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"melt"}}
```

## exit.dissolve · ほろほろ

文字退场运动：碎散 / Crumble away (dissolve)。标签：calm, emotional；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exit.js:873 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"dissolve"}}
```

## exit.backspace · バックスペース

文字退场运动：退格删除 / Backspace (backspace)。标签：editorial, glitch；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exit.js:596 (outDur)；runtime/native/11p_exit.js:873 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"backspace"}}
```

## exit.scrambleOut · 記号化

文字退场运动：变成符号 / Become symbols (scrambleOut)。标签：glitch；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exit.js:873 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"scrambleOut"}}
```

## exit.glitchDissolve · ブロック化

文字退场运动：化为方块 / Glitch into blocks (glitchDissolve)。标签：glitch；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exit.js:873 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"glitchDissolve"}}
```

## exit.echoOut · 残響

文字退场运动：残响 / Echo out (echoOut)。标签：emotional, calm；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exit.js:873 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"echoOut"}}
```

## exit.whipOut · ホイップ

文字退场运动：急甩 / Whip out (whipOut)。标签：pop, graphic；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exit.js:873 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"whipOut"}}
```

## exit.gravity · 重力落下

文字退场运动：重力坠落 / Fall with gravity (gravity)。标签：pop, emotional；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exit.js:746 (outDur)；runtime/native/11p_exit.js:873 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"gravity"}}
```

## exit.popOut · 弾ける

文字退场运动：迸裂 / Pop out (popOut)。标签：pop；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exit.js:873 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"popOut"}}
```

## exit.burn · 焼失

文字退场运动：烧毁 / Burn away (burn)。标签：emotional, glitch；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exit.js:794 (outDur)；runtime/native/11p_exit.js:873 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"burn"}}
```

## exit.sweepCover · バーで隠す

文字退场运动：横条遮盖 / Covered by a bar (sweepCover)。标签：graphic, editorial, pop；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exit.js:827 (outDur)；runtime/native/11p_exit.js:873 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"sweepCover"}}
```

## exit.shatterLite · 四分割飛散

文字退场运动：四分飞散 / Shatter into quarters (shatterLite)。标签：pop, glitch；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exit.js:873 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"shatterLite"}}
```

## exit.peelOff · ステッカー剥がし

文字退场运动：撕下贴纸 / Peel off sticker (peelOff)。标签：pop, graphic；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exitB.js:198 (outDur)；runtime/native/11p_exit.js:873 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"peelOff"}}
```

## exit.crumpleOut · 丸めて捨てる

文字退场运动：揉成纸团丢掉 / Crumple and toss (crumpleOut)。标签：pop, emotional；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exitB.js:235 (outDur)；runtime/native/11p_exit.js:873 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"crumpleOut"}}
```

## exit.tearOut · 破り捨て

文字退场运动：撕掉 / Tear away (tearOut)。标签：emotional, graphic；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exit.js:746 (outDur)；runtime/native/11p_exit.js:873 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"tearOut"}}
```

## exit.scorchOut · 焦げて消える

文字退场运动：烧焦消失 / Scorch away (scorchOut)。标签：emotional, glitch；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exitB.js:325 (outDur)；runtime/native/11p_exit.js:873 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"scorchOut"}}
```

## exit.overexposeOut · 白飛び

文字退场运动：过曝泛白 / Blow out to white (overexposeOut)。标签：emotional, calm, pop；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exit.js:873 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"overexposeOut"}}
```

## exit.scanOut · 走査線消去

文字退场运动：扫描线消除 / Scanline erase (scanOut)。标签：glitch, graphic；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exit.js:873 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"scanOut"}}
```

## exit.stripesOut · ストライプ消去

文字退场运动：条纹消除 / Stripes out (stripesOut)。标签：graphic, pop；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exit.js:873 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"stripesOut"}}
```

## exit.halftoneOut · 網点に消える

文字退场运动：化为网点 / Dissolve to halftone (halftoneOut)。标签：graphic, calm；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exit.js:873 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"halftoneOut"}}
```

## exit.eraserOut · 黒板消し

文字退场运动：黑板擦擦掉 / Chalkboard erase (eraserOut)。标签：editorial, calm；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exitB.js:235 (outDur)；runtime/native/11p_exit.js:873 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"eraserOut"}}
```

## exit.vacuumOut · 一点に吸われる

文字退场运动：吸入一点 / Vacuum to a point (vacuumOut)。标签：pop, graphic；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exit.js:873 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"vacuumOut"}}
```

## exit.sandOut · 砂になって飛ぶ

文字退场运动：化沙飞散 / Scatter as sand (sandOut)。标签：emotional, calm；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exitB.js:634 (outDur)；runtime/native/11p_exit.js:873 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"sandOut"}}
```

## exit.shredOut · シュレッダー

文字退场运动：碎纸机 / Shred out (shredOut)。标签：graphic, pop；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exitB.js:676 (outDur)；runtime/native/11p_exit.js:873 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"shredOut"}}
```

## exit.dominoOut · ドミノ倒し

文字退场运动：骨牌倒下 / Domino out (dominoOut)。标签：pop, graphic；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exitB.js:719 (outDur)；runtime/native/11p_exit.js:873 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"dominoOut"}}
```

## exit.hingeOut · 片留めが外れる

文字退场运动：单边脱落 / Loose hinge (hingeOut)。标签：pop, editorial；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exitB.js:742 (outDur)；runtime/native/11p_exit.js:873 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"hingeOut"}}
```

## exit.rocketOff · 打ち上げ

文字退场运动：发射升空 / Rocket away (rocketOff)。标签：pop；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exitB.js:634 (outDur)；runtime/native/11p_exit.js:873 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"rocketOff"}}
```

## exit.bounceOff · 弾んで去る

文字退场运动：弹跳离开 / Bounce off (bounceOff)。标签：pop；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exitB.js:827 (outDur)；runtime/native/11p_exit.js:873 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"bounceOff"}}
```

## exit.balloonOff · 風船で飛ぶ

文字退场运动：气球飞走 / Float off like a balloon (balloonOff)。标签：emotional, calm, pop；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exitB.js:850 (outDur)；runtime/native/11p_exit.js:873 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"balloonOff"}}
```

## exit.deflateOut · しぼんで飛ぶ

文字退场运动：泄气飞走 / Deflate and fly (deflateOut)。标签：pop；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exitB.js:235 (outDur)；runtime/native/11p_exit.js:873 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"deflateOut"}}
```

## exit.hazeOut · 陽炎に消える

文字退场运动：消失于热浪 / Haze out (hazeOut)。标签：emotional, calm；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exit.js:873 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"hazeOut"}}
```

## exit.glassBreak · ガラス割れ

文字退场运动：玻璃碎裂 / Break like glass (glassBreak)。标签：graphic, pop, glitch；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exitB.js:235 (outDur)；runtime/native/11p_exit.js:873 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"glassBreak"}}
```

## exit.zipOut · ジッパー

文字退场运动：拉链 / Zip out (zipOut)。标签：graphic, pop；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exit.js:873 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"zipOut"}}
```

## exit.clapShut · 中央で閉じる

文字退场运动：中央闭合 / Close at center (clapShut)。标签：graphic, pop；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exit.js:873 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"clapShut"}}
```

## exit.lampOff · 消灯

文字退场运动：熄灯 / Lights out (lampOff)。标签：glitch, emotional；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exit.js:873 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"lampOff"}}
```

## exit.slotOut · スロット回転

文字退场运动：老虎机转动 / Slot out (slotOut)。标签：glitch, pop；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exitB.js:1139 (outDur)；runtime/native/11p_exit.js:873 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"slotOut"}}
```

## exit.clockOut · 時計ワイプ

文字退场运动：时钟擦除 / Clock out (clockOut)。标签：graphic, editorial；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exit.js:873 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"clockOut"}}
```

## exit.matrixOut · デジタル雨

文字退场运动：数字雨 / Digital rain (matrixOut)。标签：glitch；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exitB.js:1213 (outDur)；runtime/native/11p_exit.js:873 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"matrixOut"}}
```

## exit.tornadoOut · 竜巻

文字退场运动：龙卷风 / Tornado (tornadoOut)。标签：pop；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exitB.js:827 (outDur)；runtime/native/11p_exit.js:873 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"tornadoOut"}}
```

## exit.rollUpOut · 巻き取る

文字退场运动：卷起 / Roll up out (rollUpOut)。标签：graphic, editorial；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exitB.js:325 (outDur)；runtime/native/11p_exit.js:873 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"rollUpOut"}}
```

## exit.snakeOut · 列になって去る

文字退场运动：排队离开 / Leave in a line (snakeOut)。标签：calm, pop；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exitB.js:827 (outDur)；runtime/native/11p_exit.js:873 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"snakeOut"}}
```

## exit.flutterOut · ひらひら落ちる

文字退场运动：飘落 / Flutter down (flutterOut)。标签：emotional, calm；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exitB.js:850 (outDur)；runtime/native/11p_exit.js:873 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"flutterOut"}}
```

## exit.rollOff · 転がって去る

文字退场运动：滚走 / Roll off (rollOff)。标签：pop；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exitB.js:827 (outDur)；runtime/native/11p_exit.js:873 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"rollOff"}}
```

## exit.fanClose · 扇を閉じる

文字退场运动：收起扇子 / Folding fan closes (fanClose)。标签：graphic, editorial, emotional；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exitB.js:1410 (outDur)；runtime/native/11p_exit.js:873 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"fanClose"}}
```

## exit.rgbSplitOut · 色分解

文字退场运动：分色 / Split into RGB (rgbSplitOut)。标签：glitch, pop；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exit.js:873 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"rgbSplitOut"}}
```

## exit.shockOut · 衝撃波

文字退场运动：冲击波 / Shockwave (shockOut)。标签：pop, graphic；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exit.js:873 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"shockOut"}}
```

## exit.floodOut · 水没

文字退场运动：淹没 / Submerge (floodOut)。标签：emotional, calm；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exitB.js:325 (outDur)；runtime/native/11p_exit.js:873 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"floodOut"}}
```

## exit.slashOut · 一刀両断

文字退场运动：一刀两断 / Sliced in two (slashOut)。标签：graphic, emotional, pop；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exitB.js:325 (outDur)；runtime/native/11p_exit.js:873 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"slashOut"}}
```

## exit.mosaicOut · モザイク

文字退场运动：马赛克 / Mosaic out (mosaicOut)。标签：glitch, graphic；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exit.js:873 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"mosaicOut"}}
```

## exit.scribbleOut · ぐしゃぐしゃ消し

文字退场运动：乱涂抹消 / Scribble away (scribbleOut)。标签：editorial, emotional, pop；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exitB.js:325 (outDur)；runtime/native/11p_exit.js:873 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"scribbleOut"}}
```

## exit.candleOut · 吹き消す

文字退场运动：吹熄 / Blow out (candleOut)。标签：emotional, calm；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_exitB.js:827 (outDur)；runtime/native/11p_exit.js:873 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"candleOut"}}
```

## exit.hrPulledDown · 引きずり込み

文字退场运动：被拖下去 / Pulled Under (hrPulledDown)。标签：horror, glitch, emotional；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_horror2.js:214 (outDur)；runtime/native/11p_horror2.js:215 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"hrPulledDown"}}
```

## exit.hrLookBack · 一字残る

文字退场运动：留下一字 / One Remains (hrLookBack)。标签：horror, emotional；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_horror2.js:236 (outDur)；runtime/native/11p_horror2.js:237 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"hrLookBack"}}
```

## exit.hrTurnAway · 背を向ける

文字退场运动：转身背对 / Turn Away (hrTurnAway)。标签：horror, calm, emotional；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_horror2.js:214 (outDur)；runtime/native/11p_horror2.js:257 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"hrTurnAway"}}
```

## exit.hrShiver · 震えて消える

文字退场运动：颤抖消失 / Shiver Out (hrShiver)。标签：horror, glitch；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_horror2.js:272 (outDur)；runtime/native/11p_horror2.js:273 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"hrShiver"}}
```

## exit.hrSwallow · 闇に呑まれる

文字退场运动：被黑暗吞没 / Swallowed (hrSwallow)。标签：horror, emotional, graphic；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_horror2.js:214 (outDur)；runtime/native/11p_horror2.js:288 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"hrSwallow"}}
```

## exit.hrFlickerDie · 明滅して消える

文字退场运动：闪烁熄灭 / Dying Flicker (hrFlickerDie)。标签：horror, glitch；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_horror2.js:308 (outDur)；runtime/native/11p_horror2.js:309 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"hrFlickerDie"}}
```

## exit.hrDrain · 滴り落ちる

文字退场运动：滴落 / Drain (hrDrain)。标签：horror, emotional；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_horror2.js:153 (outDur)；runtime/native/11p_horror2.js:324 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"hrDrain"}}
```

## exit.knWordKick · 語ごと蹴り出し

文字退场运动：逐词踢飞 / Word Kick (knWordKick)。标签：pop, graphic；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_kinetic2.js:277 (outDur)；runtime/native/11p_kinetic2.js:282 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"knWordKick"}}
```

## exit.knPushOut · 押し出し退場

文字退场运动：推出退场 / Push Out (knPushOut)。标签：editorial, graphic, pop；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_kinetic2.js:277 (outDur)；runtime/native/11p_kinetic2.js:299 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"knPushOut"}}
```

## exit.knDiveGlyph · 一字へ突入

文字退场运动：冲入一字 / Dive Into Letter (knDiveGlyph)。标签：pop, emotional, graphic；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_kinetic2.js:323 (outDur)；runtime/native/11p_kinetic2.js:324 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"knDiveGlyph"}}
```

## exit.knLaunch · 急発進

文字退场运动：急起步 / Launch (knLaunch)。标签：pop, graphic；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_kinetic2.js:348 (outDur)；runtime/native/11p_kinetic2.js:349 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"knLaunch"}}
```

## exit.knWordBlink · 一語ずつ消灯

文字退场运动：逐词熄灭 / Words Blink Out (knWordBlink)。标签：pop, glitch, graphic；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_kinetic2.js:365 (outDur)；runtime/native/11p_kinetic2.js:366 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"knWordBlink"}}
```

## exit.knCloseGap · 詰めて消える

文字退场运动：收拢消失 / Close the Gaps (knCloseGap)。标签：editorial, graphic, pop；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_kinetic2.js:383 (outDur)；runtime/native/11p_kinetic2.js:384 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"knCloseGap"}}
```

## exit.knJumpCutOut · ジャンプカット

文字退场运动：跳切 / Jump Cut (knJumpCutOut)。标签：pop, glitch, graphic；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_kinetic2.js:415 (outDur)；runtime/native/11p_kinetic2.js:416 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"knJumpCutOut"}}
```

## exit.knStackAway · 積んで落とす

文字退场运动：叠起落下 / Stack and Drop (knStackAway)。标签：pop, graphic；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_kinetic2.js:428 (outDur)；runtime/native/11p_kinetic2.js:429 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"knStackAway"}}
```

## exit.tyStrike · 線で消す

文字退场运动：划线删除 / Strike Out (tyStrike)。标签：editorial, graphic, emotional；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_typo2.js:280 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"tyStrike"}}
```

## exit.tyToDot · 点に戻る

文字退场运动：缩回圆点 / Back to Dots (tyToDot)。标签：calm, pop, graphic；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_typo2.js:306 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"tyToDot"}}
```

## exit.tyLineFeed · 改行送り

文字退场运动：换行送出 / Line Feed (tyLineFeed)。标签：editorial, calm, graphic；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_typo2.js:322 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"tyLineFeed"}}
```

## exit.tyBracketClose · 括弧閉じ

文字退场运动：括号合上 / Brackets Close (tyBracketClose)。标签：editorial, graphic, pop；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_typo2.js:336 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"tyBracketClose"}}
```

## exit.tyToIndex · 番号に変わる

文字退场运动：化为编号 / Turn to Numbers (tyToIndex)。标签：editorial, glitch, graphic；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_typo2.js:351 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"tyToIndex"}}
```

## exit.tyKeyLast · 一字残し

文字退场运动：留下一字 / Key Glyph Last (tyKeyLast)。标签：emotional, pop, graphic；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_typo2.js:373 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"tyKeyLast"}}
```

## exit.tyUnderSink · 下線へ沈む

文字退场运动：沉入底线 / Sink into Underline (tyUnderSink)。标签：editorial, calm, graphic；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_typo2.js:402 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"tyUnderSink"}}
```

## exit.tyFoldVert · 縦組に折れる

文字退场运动：折成竖排 / Fold to Vertical (tyFoldVert)。标签：graphic, editorial, pop；参数位置：inDur/outDur/stagger + controls；原生 apply(env,item,progress)。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_typo2.js:427 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"exit":"tyFoldVert"}}
```

## decor.grid · グリッド

前景或后景图形装饰：网格 / Grid (grid)。标签：graphic, editorial；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/07_decor.js:15 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"grid","seed":24010161,"n":2,"right":false,"low":false,"accent":false,"corner":false,"big":false,"mode":"count","from":8,"to":949,"v":4,"r":0.916887913364917}]}}
```

## decor.stripes · ストライプ

前景或后景图形装饰：条纹 / Stripes (stripes)。标签：graphic, pop；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/07_decor.js:25 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"stripes","seed":441507368,"n":2,"right":false,"low":true,"accent":false,"corner":false,"big":false,"mode":"count","from":12,"to":759,"v":4,"r":0.32350944890640676}]}}
```

## decor.blobs · インクの染み

前景或后景图形装饰：墨渍 / Ink stains (blobs)。标签：pop, emotional；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/07_decor.js:36 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"blobs","seed":984781433,"n":3,"right":true,"low":false,"accent":false,"corner":false,"big":true,"mode":"count","from":9,"to":92,"v":2,"r":0.46928844787180424}]}}
```

## decor.bars · 荒い帯

前景或后景图形装饰：粗糙色带 / Rough bands (bars)。标签：graphic, glitch；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/07_decor.js:53 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"bars","seed":359882694,"n":1,"right":false,"low":false,"accent":false,"corner":false,"big":false,"mode":"index","from":6,"to":892,"v":4,"r":0.4800818325020373}]}}
```

## decor.shapes · 図形

前景或后景图形装饰：几何图形 / Shapes (shapes)。标签：pop, graphic；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/07_decor.js:72 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"shapes","seed":991896865,"n":4,"right":false,"low":true,"accent":true,"corner":true,"big":false,"mode":"count","from":16,"to":312,"v":0,"r":0.9970159758813679}]}}
```

## decor.counter · 大きな数字

前景或后景图形装饰：大数字 / Large numbers (counter)。标签：graphic, editorial；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/07_decor.js:95 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"counter","seed":721632645,"n":2,"right":true,"low":false,"accent":true,"corner":true,"big":true,"mode":"index","from":12,"to":184,"v":0,"r":0.7097609147895128}]}}
```

## decor.brackets · 枠マーク

前景或后景图形装饰：框角标记 / Corner marks (brackets)。标签：graphic, editorial；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/07_decor.js:106 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"brackets","seed":226681383,"n":2,"right":false,"low":false,"accent":false,"corner":true,"big":false,"mode":"index","from":12,"to":771,"v":4,"r":0.2276884107850492}]}}
```

## decor.rings · 座標の円

前景或后景图形装饰：座标圆 / Coordinate rings (rings)。标签：graphic, emotional；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/07_decor.js:122 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"rings","seed":306092286,"n":1,"right":false,"low":true,"accent":false,"corner":true,"big":true,"mode":"count","from":13,"to":731,"v":5,"r":0.9561874691862613}]}}
```

## decor.dots · ドットの輪

前景或后景图形装饰：点状圆环 / Dotted ring (dots)。标签：pop, graphic；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/07_decor.js:138 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"dots","seed":99902013,"n":1,"right":true,"low":true,"accent":false,"corner":true,"big":false,"mode":"index","from":20,"to":66,"v":1,"r":0.8047995073720813}]}}
```

## decor.arrows · 矢印

前景或后景图形装饰：箭头 / Arrows (arrows)。标签：pop, graphic；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/07_decor.js:148 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"arrows","seed":92832428,"n":2,"right":false,"low":true,"accent":true,"corner":true,"big":false,"mode":"index","from":1,"to":375,"v":1,"r":0.3289978401735425}]}}
```

## decor.slash · スラッシュ

前景或后景图形装饰：斜线 / Slash (slash)。标签：glitch, graphic；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/07_decor.js:171 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"slash","seed":839752316,"n":3,"right":false,"low":false,"accent":false,"corner":true,"big":false,"mode":"index","from":9,"to":114,"v":0,"r":0.7509219485800713}]}}
```

## decor.sparks · スパーク

前景或后景图形装饰：火花 / Sparks (sparks)。标签：pop；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/07_decor.js:184 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"sparks","seed":434386688,"n":5,"right":false,"low":true,"accent":false,"corner":false,"big":false,"mode":"index","from":14,"to":573,"v":0,"r":0.21277833823114634}]}}
```

## decor.leaders · 引き出し線

前景或后景图形装饰：引线 / Leader lines (leaders)。标签：editorial, calm；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/07_decor.js:196 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"leaders","seed":287172005,"n":3,"right":false,"low":false,"accent":false,"corner":false,"big":false,"mode":"index","from":9,"to":157,"v":5,"r":0.8549607477616519}]}}
```

## decor.waveform · 波形

前景或后景图形装饰：波形 / Waveform (waveform)。标签：emotional, calm；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/07_decor.js:213 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"waveform","seed":645249995,"n":1,"right":true,"low":false,"accent":true,"corner":true,"big":true,"mode":"count","from":19,"to":949,"v":2,"r":0.7189129900652915}]}}
```

## decor.barcode · バーコード

前景或后景图形装饰：条码 / Barcode (barcode)。标签：glitch, graphic；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/07_decor.js:228 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"barcode","seed":867905581,"n":2,"right":false,"low":false,"accent":true,"corner":false,"big":true,"mode":"index","from":11,"to":819,"v":5,"r":0.6411431473679841}]}}
```

## decor.crosshair · 照準線

前景或后景图形装饰：十字准线 / Crosshair (crosshair)。标签：graphic, editorial, glitch；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decor.js:179 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"crosshair","seed":704230042,"n":2,"right":false,"low":false,"accent":true,"corner":false,"big":false,"mode":"index","from":0,"to":519,"v":2,"r":0.43513782462105155}]}}
```

## decor.cropMarks · トンボ

前景或后景图形装饰：裁切标记 / Crop marks (cropMarks)。标签：editorial, graphic, calm；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decor.js:220 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"cropMarks","seed":80704746,"n":3,"right":false,"low":true,"accent":false,"corner":false,"big":false,"mode":"index","from":16,"to":302,"v":5,"r":0.2220474318601191}]}}
```

## decor.reticle · ロックオン

前景或后景图形装饰：锁定框 / Reticle (reticle)。标签：glitch, graphic；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decor.js:254 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"reticle","seed":839709266,"n":1,"right":true,"low":false,"accent":false,"corner":true,"big":false,"mode":"count","from":6,"to":536,"v":5,"r":0.9061914242338389}]}}
```

## decor.radar · レーダー

前景或后景图形装饰：雷达 / Radar (radar)。标签：glitch, graphic；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decor.js:286 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"radar","seed":358790905,"n":1,"right":true,"low":false,"accent":true,"corner":false,"big":false,"mode":"count","from":12,"to":260,"v":0,"r":0.8624912544619292}]}}
```

## decor.progressRing · 進行リング

前景或后景图形装饰：进度环 / Progress ring (progressRing)。标签：graphic, editorial, calm；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decor.js:321 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"progressRing","seed":636204473,"n":2,"right":false,"low":true,"accent":true,"corner":false,"big":false,"mode":"count","from":19,"to":159,"v":5,"r":0.301433990476653}]}}
```

## decor.timecodeBar · タイムコード

前景或后景图形装饰：时间码 / Timecode bar (timecodeBar)。标签：editorial, glitch, graphic；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decor.js:355 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"timecodeBar","seed":252288796,"n":2,"right":false,"low":false,"accent":false,"corner":false,"big":true,"mode":"index","from":15,"to":704,"v":5,"r":0.9332525301724672}]}}
```

## decor.rulerEdge · 端の定規

前景或后景图形装饰：边缘尺规 / Ruler edge (rulerEdge)。标签：editorial, graphic, calm；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decor.js:392 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"rulerEdge","seed":47213576,"n":1,"right":true,"low":true,"accent":true,"corner":false,"big":false,"mode":"index","from":8,"to":491,"v":2,"r":0.9680831702426076}]}}
```

## decor.dimension · 寸法線

前景或后景图形装饰：尺寸线 / Dimension (dimension)。标签：editorial, graphic；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decor.js:440 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"dimension","seed":690460745,"n":3,"right":true,"low":true,"accent":true,"corner":true,"big":false,"mode":"index","from":15,"to":769,"v":1,"r":0.6637392663396895}]}}
```

## decor.indexNum · 通し番号

前景或后景图形装饰：流水号 / Sequence number (indexNum)。标签：editorial, graphic, calm；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decor.js:486 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"indexNum","seed":343897961,"n":3,"right":false,"low":true,"accent":false,"corner":true,"big":false,"mode":"index","from":20,"to":922,"v":2,"r":0.9540213458240032}]}}
```

## decor.dateStamp · 日付写真

前景或后景图形装饰：相片日期 / Photo date stamp (dateStamp)。标签：emotional, pop, calm；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decor.js:539 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"dateStamp","seed":620515327,"n":1,"right":false,"low":true,"accent":false,"corner":false,"big":false,"mode":"count","from":12,"to":610,"v":3,"r":0.06838258262723684}]}}
```

## decor.qrBlock · QR風ブロック

前景或后景图形装饰：QR 风格方块 / QR inspired blocks (qrBlock)。标签：graphic, glitch, pop；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decor.js:573 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"qrBlock","seed":149402249,"n":1,"right":false,"low":true,"accent":true,"corner":false,"big":false,"mode":"count","from":8,"to":542,"v":1,"r":0.7526337641756982}]}}
```

## decor.glitchRects · グリッチ片

前景或后景图形装饰：故障碎片 / Glitch rects (glitchRects)。标签：glitch；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decor.js:607 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"glitchRects","seed":538058485,"n":2,"right":false,"low":false,"accent":true,"corner":false,"big":false,"mode":"index","from":16,"to":817,"v":2,"r":0.8609087995719165}]}}
```

## decor.concentricSquares · 同心四角

前景或后景图形装饰：同心方框 / Concentric squares (concentricSquares)。标签：graphic, calm, editorial；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decor.js:649 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"concentricSquares","seed":133749822,"n":1,"right":false,"low":true,"accent":false,"corner":true,"big":false,"mode":"index","from":4,"to":416,"v":5,"r":0.5323346420191228}]}}
```

## decor.triangleSpin · 回転三角

前景或后景图形装饰：旋转三角 / Triangle spin (triangleSpin)。标签：graphic, pop, glitch；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, push, r, right, seed, to, v。

源码：runtime/native/11p_decor.js:674 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"triangleSpin","seed":376323147,"n":1,"right":false,"low":false,"accent":true,"corner":true,"big":true,"mode":"index","from":20,"to":45,"v":2,"r":0.7092939259018749}]}}
```

## decor.lineBurst · 放射線

前景或后景图形装饰：放射线 / Line burst (lineBurst)。标签：pop, graphic, emotional；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decor.js:709 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"lineBurst","seed":690382432,"n":3,"right":true,"low":false,"accent":true,"corner":true,"big":false,"mode":"index","from":14,"to":39,"v":1,"r":0.5387712654192001}]}}
```

## decor.plusGrid · プラス格子

前景或后景图形装饰：十字网格 / Plus grid (plusGrid)。标签：graphic, editorial, calm；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decor.js:741 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"plusGrid","seed":328913033,"n":3,"right":false,"low":true,"accent":false,"corner":false,"big":false,"mode":"count","from":4,"to":377,"v":5,"r":0.8986310162581503}]}}
```

## decor.guides · ガイド線

前景或后景图形装饰：辅助线 / Guide lines (guides)。标签：editorial, graphic, calm；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decor.js:766 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"guides","seed":425037327,"n":2,"right":false,"low":false,"accent":false,"corner":true,"big":false,"mode":"count","from":5,"to":661,"v":4,"r":0.893461661413312}]}}
```

## decor.waveLine · 波線

前景或后景图形装饰：波浪线 / Wave line (waveLine)。标签：calm, emotional, graphic；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, push, r, right, seed, to, v。

源码：runtime/native/11p_decor.js:800 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"waveLine","seed":715284365,"n":2,"right":false,"low":false,"accent":false,"corner":true,"big":true,"mode":"index","from":20,"to":799,"v":2,"r":0.4978051669895649}]}}
```

## decor.spiralLine · 渦巻き

前景或后景图形装饰：漩涡 / Spiral line (spiralLine)。标签：graphic, pop, calm；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decor.js:823 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"spiralLine","seed":640289828,"n":1,"right":true,"low":true,"accent":false,"corner":true,"big":false,"mode":"index","from":20,"to":230,"v":3,"r":0.5304778276477009}]}}
```

## decor.halftonePatch · 網点

前景或后景图形装饰：网点 / Halftone patch (halftonePatch)。标签：graphic, pop, editorial；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decor.js:850 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"halftonePatch","seed":903763187,"n":1,"right":true,"low":false,"accent":true,"corner":false,"big":false,"mode":"count","from":14,"to":301,"v":5,"r":0.49034552928060293}]}}
```

## decor.checkerStrip · 市松の帯

前景或后景图形装饰：棋盘格带 / Checker strip (checkerStrip)。标签：pop, graphic；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decor.js:882 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"checkerStrip","seed":696960681,"n":1,"right":false,"low":false,"accent":true,"corner":true,"big":true,"mode":"index","from":10,"to":382,"v":1,"r":0.8056093554478139}]}}
```

## decor.beatRing · 拍の輪

前景或后景图形装饰：节拍圆环 / Beat ring (beatRing)。标签：pop, emotional, calm；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decor.js:909 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"beatRing","seed":983855986,"n":2,"right":false,"low":true,"accent":false,"corner":false,"big":false,"mode":"count","from":15,"to":988,"v":0,"r":0.5036988502833992}]}}
```

## decor.orbitDots · 周回する点

前景或后景图形装饰：环绕圆点 / Orbit dots (orbitDots)。标签：calm, emotional, graphic；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decor.js:931 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"orbitDots","seed":582759705,"n":2,"right":false,"low":true,"accent":false,"corner":true,"big":false,"mode":"index","from":14,"to":56,"v":2,"r":0.3647670007776469}]}}
```

## decor.constellation · 星座

前景或后景图形装饰：星座 / Constellation (constellation)。标签：calm, emotional, editorial；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decor.js:964 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"constellation","seed":470458912,"n":3,"right":true,"low":true,"accent":false,"corner":true,"big":true,"mode":"index","from":20,"to":134,"v":4,"r":0.21467114053666592}]}}
```

## decor.confetti · 紙吹雪

前景或后景图形装饰：彩纸 / Confetti (confetti)。标签：pop, emotional；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decor.js:1007 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"confetti","seed":519939268,"n":2,"right":false,"low":false,"accent":true,"corner":false,"big":true,"mode":"index","from":4,"to":251,"v":2,"r":0.043899203883484006}]}}
```

## decor.petals · 花びら

前景或后景图形装饰：花瓣 / Petals (petals)。标签：emotional, calm, pop；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decor.js:1036 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"petals","seed":183853013,"n":1,"right":false,"low":false,"accent":false,"corner":true,"big":false,"mode":"index","from":18,"to":44,"v":4,"r":0.9520789158996195}]}}
```

## decor.rainStreaks · 雨の筋

前景或后景图形装饰：雨丝 / Rain streaks (rainStreaks)。标签：emotional, calm, glitch；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decor.js:1064 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"rainStreaks","seed":460616079,"n":1,"right":true,"low":true,"accent":true,"corner":true,"big":false,"mode":"index","from":2,"to":267,"v":4,"r":0.45556991966441274}]}}
```

## decor.snow · 雪

前景或后景图形装饰：雪 / Snow (snow)。标签：calm, emotional；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decor.js:1087 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"snow","seed":515186533,"n":1,"right":false,"low":true,"accent":false,"corner":true,"big":false,"mode":"count","from":10,"to":668,"v":4,"r":0.5749953968916088}]}}
```

## decor.lightLeak · 光漏れ

前景或后景图形装饰：漏光 / Light leak (lightLeak)。标签：emotional, calm, pop；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decor.js:1110 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"lightLeak","seed":919751008,"n":1,"right":false,"low":false,"accent":false,"corner":true,"big":false,"mode":"count","from":5,"to":995,"v":5,"r":0.4723010959569365}]}}
```

## decor.bokeh · ボケ玉

前景或后景图形装饰：散景光点 / Bokeh (bokeh)。标签：emotional, calm, pop；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decor.js:1142 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"bokeh","seed":385311296,"n":3,"right":true,"low":true,"accent":true,"corner":false,"big":true,"mode":"count","from":12,"to":696,"v":2,"r":0.6971865545492619}]}}
```

## decor.speedCorner · 集中線

前景或后景图形装饰：集中线 / Speed lines (speedCorner)。标签：pop, emotional, glitch；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decor.js:1170 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"speedCorner","seed":384416412,"n":3,"right":true,"low":false,"accent":false,"corner":false,"big":true,"mode":"index","from":2,"to":881,"v":5,"r":0.22517351782880723}]}}
```

## decor.risingParticles · 立ち上る粒

前景或后景图形装饰：上升粒子 / Rising particles (risingParticles)。标签：emotional, calm, glitch；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decor.js:1200 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"risingParticles","seed":62078754,"n":3,"right":true,"low":true,"accent":false,"corner":true,"big":false,"mode":"index","from":1,"to":660,"v":5,"r":0.5631701680831611}]}}
```

## decor.twinkle · きらめき

前景或后景图形装饰：闪烁星光 / Twinkle (twinkle)。标签：pop, emotional, calm；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decor.js:1232 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"twinkle","seed":469075208,"n":2,"right":false,"low":false,"accent":false,"corner":false,"big":false,"mode":"count","from":4,"to":275,"v":4,"r":0.7135627923998982}]}}
```

## decor.brushStroke · 筆の払い

前景或后景图形装饰：笔刷痕 / Brush stroke (brushStroke)。标签：emotional, editorial, pop；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decor.js:1267 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"brushStroke","seed":731246911,"n":2,"right":false,"low":true,"accent":false,"corner":true,"big":true,"mode":"count","from":2,"to":843,"v":3,"r":0.4450371768325567}]}}
```

## decor.tapePieces · マスキングテープ

前景或后景图形装饰：纸胶带 / Masking tape (tapePieces)。标签：pop, emotional, editorial；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decor.js:1323 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"tapePieces","seed":616578946,"n":3,"right":false,"low":true,"accent":false,"corner":false,"big":false,"mode":"count","from":3,"to":268,"v":0,"r":0.42376745166257024}]}}
```

## decor.scribbleCircle · 手描きの囲み

前景或后景图形装饰：手绘圈 / Scribble circle (scribbleCircle)。标签：pop, emotional, editorial；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decor.js:1373 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"scribbleCircle","seed":848003923,"n":3,"right":false,"low":true,"accent":false,"corner":true,"big":false,"mode":"index","from":10,"to":964,"v":2,"r":0.44948786636814475}]}}
```

## decor.scribbleUnder · 手描き下線

前景或后景图形装饰：手绘底线 / Hand drawn underline (scribbleUnder)。标签：pop, emotional, editorial；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decor.js:1386 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"scribbleUnder","seed":925551966,"n":1,"right":true,"low":true,"accent":true,"corner":false,"big":false,"mode":"count","from":3,"to":563,"v":0,"r":0.9763444892596453}]}}
```

## decor.crossOut · 推敲の走り書き

前景或后景图形装饰：推敲笔记 / Editorial marks (crossOut)。标签：editorial, emotional；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decor.js:1421 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"crossOut","seed":638607986,"n":2,"right":true,"low":true,"accent":false,"corner":true,"big":true,"mode":"index","from":12,"to":787,"v":3,"r":0.822508149780333}]}}
```

## decor.highlightMark · 蛍光マーカー

前景或后景图形装饰：荧光笔 / Highlight mark (highlightMark)。标签：pop, editorial, emotional；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decor.js:1459 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"highlightMark","seed":595119780,"n":1,"right":false,"low":true,"accent":false,"corner":false,"big":false,"mode":"index","from":4,"to":440,"v":1,"r":0.8591769356280565}]}}
```

## decor.heartsStars · ハートと星

前景或后景图形装饰：爱心与星星 / Hearts stars (heartsStars)。标签：pop, emotional；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decor.js:1505 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"heartsStars","seed":966662384,"n":3,"right":true,"low":false,"accent":true,"corner":false,"big":false,"mode":"index","from":14,"to":792,"v":0,"r":0.247498998651281}]}}
```

## decor.watermarkKanji · 透かし大漢字

前景或后景图形装饰：浮水印大字 / Large watermark character (watermarkKanji)。标签：editorial, emotional, calm；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decor.js:1539 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"watermarkKanji","seed":73726504,"n":1,"right":false,"low":false,"accent":false,"corner":true,"big":true,"mode":"count","from":19,"to":457,"v":3,"r":0.6945059797726572}]}}
```

## decor.verticalStrip · 縦書き帯

前景或后景图形装饰：竖排条 / Vertical text strip (verticalStrip)。标签：editorial, calm, emotional；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decor.js:1557 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"verticalStrip","seed":165803942,"n":1,"right":false,"low":false,"accent":false,"corner":false,"big":true,"mode":"count","from":18,"to":554,"v":3,"r":0.2792557808570564}]}}
```

## decor.romajiLine · ローマ字

前景或后景图形装饰：罗马字 / Romanized line (romajiLine)。标签：editorial, calm, graphic；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decor.js:1590 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"romajiLine","seed":851126883,"n":1,"right":false,"low":true,"accent":false,"corner":true,"big":true,"mode":"count","from":5,"to":213,"v":2,"r":0.791321978205815}]}}
```

## decor.bracketsJP · 隅付き括弧

前景或后景图形装饰：方头括号 / Japanese corner brackets (bracketsJP)。标签：pop, graphic, editorial；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, push, r, right, seed, to, v。

源码：runtime/native/11p_decor.js:1631 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"bracketsJP","seed":259525270,"n":2,"right":false,"low":false,"accent":true,"corner":false,"big":false,"mode":"index","from":17,"to":969,"v":0,"r":0.1317141952458769}]}}
```

## decor.seal · 落款

前景或后景图形装饰：落款 / Red seal (seal)。标签：editorial, emotional, calm；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decor.js:1654 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"seal","seed":61735917,"n":3,"right":false,"low":true,"accent":true,"corner":false,"big":false,"mode":"count","from":10,"to":629,"v":0,"r":0.6571141567546874}]}}
```

## decor.kamon · 家紋

前景或后景图形装饰：家纹 / Family crest (kamon)。标签：editorial, calm, emotional；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decorB.js:250 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"kamon","seed":937417525,"n":2,"right":true,"low":true,"accent":false,"corner":true,"big":false,"mode":"index","from":15,"to":659,"v":4,"r":0.7280125219840556}]}}
```

## decor.seigaiha · 青海波

前景或后景图形装饰：青海波 / Seigaiha wave pattern (seigaiha)。标签：calm, emotional, editorial；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decorB.js:321 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"seigaiha","seed":800831691,"n":2,"right":false,"low":true,"accent":false,"corner":false,"big":false,"mode":"count","from":9,"to":54,"v":1,"r":0.5043637659400702}]}}
```

## decor.asanoha · 麻の葉

前景或后景图形装饰：麻叶纹 / Asanoha hemp leaf pattern (asanoha)。标签：calm, editorial, emotional；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decorB.js:355 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"asanoha","seed":795080437,"n":3,"right":false,"low":true,"accent":false,"corner":false,"big":true,"mode":"count","from":16,"to":245,"v":5,"r":0.14375889906659722}]}}
```

## decor.hanabi · 花火

前景或后景图形装饰：烟火 / Fireworks (hanabi)。标签：emotional, pop, calm；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decorB.js:250 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"hanabi","seed":16149085,"n":3,"right":true,"low":true,"accent":false,"corner":true,"big":false,"mode":"index","from":2,"to":661,"v":3,"r":0.418203393695876}]}}
```

## decor.chochin · 提灯

前景或后景图形装饰：灯笼 / Paper lantern (chochin)。标签：emotional, pop, calm；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decorB.js:250 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"chochin","seed":473190433,"n":3,"right":false,"low":true,"accent":true,"corner":false,"big":true,"mode":"index","from":20,"to":612,"v":5,"r":0.7747048751916736}]}}
```

## decor.shimenawa · 注連縄

前景或后景图形装饰：注连绳 / Sacred rope (shimenawa)。标签：editorial, emotional, calm；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decorB.js:250 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"shimenawa","seed":876725496,"n":1,"right":true,"low":false,"accent":false,"corner":true,"big":true,"mode":"index","from":18,"to":146,"v":2,"r":0.2847154608462006}]}}
```

## decor.sensu · 扇

前景或后景图形装饰：扇子 / Folding fan (sensu)。标签：emotional, editorial, calm；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decorB.js:250 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"sensu","seed":164082168,"n":3,"right":false,"low":false,"accent":true,"corner":false,"big":false,"mode":"count","from":7,"to":386,"v":1,"r":0.5590062034316361}]}}
```

## decor.tsukiKumo · 月に雲

前景或后景图形装饰：云中月 / Moon and clouds (tsukiKumo)。标签：emotional, calm, editorial；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decorB.js:250 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"tsukiKumo","seed":176893685,"n":2,"right":false,"low":false,"accent":false,"corner":true,"big":false,"mode":"index","from":15,"to":539,"v":0,"r":0.6338088843040168}]}}
```

## decor.momiji · 紅葉

前景或后景图形装饰：枫叶 / Maple leaves (momiji)。标签：emotional, calm；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decorB.js:660 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"momiji","seed":497627109,"n":3,"right":false,"low":true,"accent":true,"corner":true,"big":true,"mode":"count","from":19,"to":197,"v":2,"r":0.5928867582697421}]}}
```

## decor.namiGashira · 波頭

前景或后景图形装饰：浪头 / Wave crest (namiGashira)。标签：emotional, editorial, graphic；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decorB.js:250 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"namiGashira","seed":660564804,"n":3,"right":true,"low":false,"accent":false,"corner":false,"big":false,"mode":"index","from":17,"to":834,"v":1,"r":0.49714311584830284}]}}
```

## decor.kasumi · 霞

前景或后景图形装饰：霞 / Mist (kasumi)。标签：calm, emotional, editorial；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decorB.js:727 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"kasumi","seed":719901497,"n":1,"right":false,"low":true,"accent":true,"corner":true,"big":false,"mode":"count","from":12,"to":431,"v":0,"r":0.04082726058550179}]}}
```

## decor.hexGrid · 六角格子

前景或后景图形装饰：六角网格 / Hex grid (hexGrid)。标签：glitch, graphic；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decorB.js:250 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"hexGrid","seed":190786976,"n":1,"right":false,"low":false,"accent":false,"corner":false,"big":true,"mode":"index","from":15,"to":929,"v":1,"r":0.7051395596936345}]}}
```

## decor.spectrumRing · 円形スペクトラム

前景或后景图形装饰：环形频谱 / Spectrum ring (spectrumRing)。标签：glitch, pop, graphic；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decorB.js:250 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"spectrumRing","seed":645582428,"n":1,"right":true,"low":true,"accent":false,"corner":true,"big":true,"mode":"index","from":15,"to":783,"v":0,"r":0.02273213374428451}]}}
```

## decor.dataColumns · データ列

前景或后景图形装饰：数据列 / Data columns (dataColumns)。标签：glitch, editorial, graphic；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decorB.js:250 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"dataColumns","seed":305489969,"n":3,"right":true,"low":false,"accent":true,"corner":true,"big":true,"mode":"count","from":12,"to":387,"v":3,"r":0.4244008625391871}]}}
```

## decor.spinner · 読み込み

前景或后景图形装饰：加载中 / Spinner (spinner)。标签：glitch, pop, graphic；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decorB.js:250 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"spinner","seed":57656963,"n":3,"right":false,"low":true,"accent":false,"corner":false,"big":true,"mode":"count","from":5,"to":94,"v":1,"r":0.7358459737151861}]}}
```

## decor.headingTape · 方位テープ

前景或后景图形装饰：方位刻度 / Heading tape (headingTape)。标签：glitch, graphic, editorial；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decorB.js:250 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"headingTape","seed":552683820,"n":2,"right":false,"low":true,"accent":true,"corner":false,"big":false,"mode":"count","from":11,"to":120,"v":2,"r":0.9531247692648321}]}}
```

## decor.glyphLock · 文字ロック

前景或后景图形装饰：文字锁定 / Glyph lock (glyphLock)。标签：glitch, graphic, editorial；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decorB.js:250 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"glyphLock","seed":106588973,"n":3,"right":false,"low":true,"accent":true,"corner":true,"big":true,"mode":"index","from":6,"to":246,"v":3,"r":0.7774793268181384}]}}
```

## decor.atomOrbit · 原子軌道

前景或后景图形装饰：原子轨道 / Atom orbit (atomOrbit)。标签：graphic, glitch, calm；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decorB.js:250 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"atomOrbit","seed":733869728,"n":2,"right":false,"low":true,"accent":false,"corner":false,"big":false,"mode":"index","from":7,"to":403,"v":1,"r":0.8392101882491261}]}}
```

## decor.sonarArcs · 音波

前景或后景图形装饰：声波 / Sonar arcs (sonarArcs)。标签：pop, emotional, graphic；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decorB.js:250 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"sonarArcs","seed":784740182,"n":2,"right":false,"low":true,"accent":true,"corner":true,"big":false,"mode":"count","from":3,"to":919,"v":3,"r":0.4849146055057645}]}}
```

## decor.circuit · 回路

前景或后景图形装饰：电路 / Circuit (circuit)。标签：glitch, graphic；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decorB.js:250 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"circuit","seed":655672016,"n":3,"right":true,"low":true,"accent":true,"corner":false,"big":false,"mode":"index","from":6,"to":336,"v":1,"r":0.7579083014279604}]}}
```

## decor.swatches · 色見本

前景或后景图形装饰：色票 / Swatches (swatches)。标签：editorial, graphic；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decorB.js:250 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"swatches","seed":296689020,"n":3,"right":true,"low":false,"accent":false,"corner":false,"big":false,"mode":"count","from":18,"to":951,"v":5,"r":0.2771443552337587}]}}
```

## decor.ruledLines · 罫線ノート

前景或后景图形装饰：横线笔记 / Ruled notebook (ruledLines)。标签：editorial, calm, emotional；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decorB.js:1180 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"ruledLines","seed":368371380,"n":3,"right":true,"low":false,"accent":false,"corner":true,"big":true,"mode":"index","from":8,"to":54,"v":4,"r":0.43935139174573123}]}}
```

## decor.registration · 見当合わせ

前景或后景图形装饰：套准标记 / Registration marks (registration)。标签：editorial, graphic, glitch；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decorB.js:250 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"registration","seed":714745382,"n":2,"right":true,"low":false,"accent":false,"corner":true,"big":false,"mode":"index","from":1,"to":176,"v":2,"r":0.3707839164417237}]}}
```

## decor.punchHoles · パンチ穴

前景或后景图形装饰：打孔 / Punch holes (punchHoles)。标签：editorial, calm, graphic；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decorB.js:1241 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"punchHoles","seed":327690810,"n":3,"right":true,"low":true,"accent":true,"corner":true,"big":false,"mode":"count","from":2,"to":340,"v":1,"r":0.0980498711578548}]}}
```

## decor.staple · ホチキス

前景或后景图形装饰：钉书针 / Staple (staple)。标签：editorial, pop, emotional；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decorB.js:250 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"staple","seed":868856272,"n":3,"right":false,"low":false,"accent":false,"corner":false,"big":false,"mode":"index","from":7,"to":311,"v":3,"r":0.3494699171278626}]}}
```

## decor.paperClip · クリップ

前景或后景图形装饰：回纹针 / Paper clip (paperClip)。标签：editorial, pop, emotional；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decorB.js:250 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"paperClip","seed":27890843,"n":1,"right":true,"low":false,"accent":true,"corner":true,"big":true,"mode":"count","from":1,"to":673,"v":1,"r":0.5335655866656452}]}}
```

## decor.indexTabs · 見出しタブ

前景或后景图形装饰：索引标签 / Index tabs (indexTabs)。标签：editorial, pop, graphic；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decorB.js:1368 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"indexTabs","seed":522970120,"n":2,"right":false,"low":true,"accent":true,"corner":false,"big":false,"mode":"count","from":6,"to":282,"v":5,"r":0.9822679103817791}]}}
```

## decor.vines · 蔓

前景或后景图形装饰：藤蔓 / Vines (vines)。标签：emotional, calm, pop；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decorB.js:250 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"vines","seed":684179383,"n":1,"right":false,"low":true,"accent":false,"corner":false,"big":false,"mode":"index","from":7,"to":36,"v":1,"r":0.3571768496185541}]}}
```

## decor.cloudPuffs · 雲

前景或后景图形装饰：云朵 / Cloud puffs (cloudPuffs)。标签：calm, pop, emotional；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decorB.js:250 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"cloudPuffs","seed":909984453,"n":1,"right":false,"low":true,"accent":true,"corner":false,"big":true,"mode":"count","from":3,"to":324,"v":3,"r":0.7271584966219962}]}}
```

## decor.starField · 星空

前景或后景图形装饰：星空 / Star field (starField)。标签：calm, emotional；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decorB.js:1520 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"starField","seed":542684274,"n":1,"right":true,"low":false,"accent":false,"corner":true,"big":true,"mode":"index","from":16,"to":968,"v":5,"r":0.634221579413861}]}}
```

## decor.moonPhases · 月齢

前景或后景图形装饰：月相 / Moon phases (moonPhases)。标签：calm, emotional, editorial；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decorB.js:250 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"moonPhases","seed":616587715,"n":2,"right":true,"low":true,"accent":false,"corner":false,"big":true,"mode":"count","from":9,"to":335,"v":2,"r":0.4838556309696287}]}}
```

## decor.sunRays · 陽射し

前景或后景图形装饰：阳光 / Sun rays (sunRays)。标签：emotional, pop, calm；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decorB.js:1590 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"sunRays","seed":169284175,"n":1,"right":true,"low":true,"accent":false,"corner":true,"big":false,"mode":"index","from":6,"to":400,"v":5,"r":0.9975207750685513}]}}
```

## decor.rainRipples · 雨の波紋

前景或后景图形装饰：雨滴涟漪 / Rain ripples (rainRipples)。标签：calm, emotional；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decorB.js:1614 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"rainRipples","seed":237634591,"n":2,"right":false,"low":false,"accent":false,"corner":false,"big":false,"mode":"index","from":2,"to":85,"v":5,"r":0.1508071927819401}]}}
```

## decor.bubbles · シャボン玉

前景或后景图形装饰：肥皂泡 / Bubbles (bubbles)。标签：pop, emotional, calm；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, slice, to, v。

源码：runtime/native/11p_decorB.js:1641 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"bubbles","seed":498251947,"n":3,"right":false,"low":true,"accent":false,"corner":false,"big":true,"mode":"count","from":14,"to":921,"v":4,"r":0.4278363171033561}]}}
```

## decor.smoke · 煙

前景或后景图形装饰：烟 / Smoke (smoke)。标签：calm, emotional, editorial；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decorB.js:1686 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"smoke","seed":155431895,"n":1,"right":false,"low":false,"accent":true,"corner":false,"big":true,"mode":"index","from":17,"to":820,"v":4,"r":0.6593792841304094}]}}
```

## decor.dandelion · 綿毛

前景或后景图形装饰：蒲公英 / Dandelion seeds (dandelion)。标签：calm, emotional；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decorB.js:1719 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"dandelion","seed":730873484,"n":2,"right":true,"low":false,"accent":false,"corner":true,"big":false,"mode":"index","from":12,"to":649,"v":1,"r":0.36386500438675284}]}}
```

## decor.fireflies · 蛍

前景或后景图形装饰：萤火虫 / Fireflies (fireflies)。标签：emotional, calm；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decorB.js:1764 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"fireflies","seed":625274672,"n":2,"right":true,"low":false,"accent":true,"corner":true,"big":true,"mode":"count","from":0,"to":123,"v":4,"r":0.934120568446815}]}}
```

## decor.memphis · メンフィス

前景或后景图形装饰：孟菲斯 / Memphis (memphis)。标签：pop, graphic；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decorB.js:250 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"memphis","seed":419045629,"n":3,"right":false,"low":false,"accent":false,"corner":false,"big":true,"mode":"index","from":15,"to":348,"v":4,"r":0.9310311141889542}]}}
```

## decor.zigzagRibbon · ジグザグリボン

前景或后景图形装饰：锯齿缎带 / Zigzag ribbon (zigzagRibbon)。标签：pop, graphic；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decorB.js:250 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"zigzagRibbon","seed":404360041,"n":3,"right":false,"low":false,"accent":true,"corner":true,"big":false,"mode":"index","from":16,"to":774,"v":0,"r":0.21269223862327635}]}}
```

## decor.polkaPatch · 水玉

前景或后景图形装饰：圆点 / Polka patch (polkaPatch)。标签：pop, graphic, calm；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decorB.js:250 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"polkaPatch","seed":852349567,"n":1,"right":false,"low":true,"accent":true,"corner":false,"big":false,"mode":"index","from":11,"to":858,"v":1,"r":0.5711932543199509}]}}
```

## decor.stripeCircle · 縞の円

前景或后景图形装饰：条纹圆 / Stripe circle (stripeCircle)。标签：graphic, pop；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decorB.js:250 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"stripeCircle","seed":1309054,"n":3,"right":true,"low":true,"accent":false,"corner":true,"big":true,"mode":"index","from":19,"to":984,"v":4,"r":0.3729553504381329}]}}
```

## decor.decoCorners · 装飾コーナー

前景或后景图形装饰：装饰角 / Deco corners (decoCorners)。标签：editorial, graphic, calm；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decorB.js:1921 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"decoCorners","seed":535734431,"n":3,"right":false,"low":false,"accent":true,"corner":true,"big":false,"mode":"count","from":4,"to":148,"v":2,"r":0.8157490391749889}]}}
```

## decor.halfCircles · 半円の積層

前景或后景图形装饰：半圆堆叠 / Half circles (halfCircles)。标签：graphic, pop, calm；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decorB.js:250 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"halfCircles","seed":603395055,"n":1,"right":true,"low":false,"accent":false,"corner":false,"big":false,"mode":"count","from":17,"to":263,"v":5,"r":0.7127063574735075}]}}
```

## decor.loopArrows · 循環矢印

前景或后景图形装饰：循环箭头 / Loop arrows (loopArrows)。标签：graphic, pop, editorial；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decorB.js:250 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"loopArrows","seed":497236350,"n":2,"right":true,"low":true,"accent":false,"corner":false,"big":false,"mode":"count","from":15,"to":931,"v":4,"r":0.2682717894203961}]}}
```

## decor.starburst · スターバースト

前景或后景图形装饰：星芒 / Starburst (starburst)。标签：pop, graphic；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decorB.js:250 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"starburst","seed":372543115,"n":1,"right":true,"low":false,"accent":true,"corner":true,"big":false,"mode":"count","from":8,"to":52,"v":2,"r":0.6969701144844294}]}}
```

## decor.tally · 正の字

前景或后景图形装饰：画正字 / Tally marks (tally)。标签：editorial, pop, emotional；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decorB.js:250 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"tally","seed":811254692,"n":2,"right":true,"low":false,"accent":false,"corner":false,"big":false,"mode":"index","from":15,"to":906,"v":4,"r":0.8417272360529751}]}}
```

## decor.cursorClick · カーソル

前景或后景图形装饰：光标 / Cursor click (cursorClick)。标签：pop, graphic, glitch；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decorB.js:2081 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"cursorClick","seed":757083732,"n":2,"right":false,"low":true,"accent":false,"corner":true,"big":false,"mode":"index","from":1,"to":57,"v":2,"r":0.9670190990436822}]}}
```

## decor.windowChrome · ウィンドウ

前景或后景图形装饰：窗口 / Window frame (windowChrome)。标签：pop, graphic, glitch；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decorB.js:250 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"windowChrome","seed":488821874,"n":3,"right":true,"low":true,"accent":true,"corner":true,"big":false,"mode":"index","from":3,"to":155,"v":0,"r":0.31834511109627783}]}}
```

## decor.progressBar · 読み込みバー

前景或后景图形装饰：进度条 / Progress bar (progressBar)。标签：pop, graphic, glitch；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decorB.js:250 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"progressBar","seed":761004411,"n":2,"right":true,"low":false,"accent":false,"corner":false,"big":false,"mode":"index","from":5,"to":365,"v":4,"r":0.9111203560605645}]}}
```

## decor.toggleSwitch · トグル

前景或后景图形装饰：切换开关 / Toggle switch (toggleSwitch)。标签：pop, graphic；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decorB.js:250 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"toggleSwitch","seed":210107227,"n":1,"right":true,"low":true,"accent":false,"corner":false,"big":false,"mode":"count","from":7,"to":935,"v":0,"r":0.25715644541196525}]}}
```

## decor.notifBell · 通知

前景或后景图形装饰：通知 / Notification bell (notifBell)。标签：pop, emotional；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decorB.js:250 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"notifBell","seed":753990609,"n":2,"right":false,"low":false,"accent":false,"corner":false,"big":false,"mode":"index","from":18,"to":266,"v":1,"r":0.678536020917818}]}}
```

## decor.likeCounter · いいね

前景或后景图形装饰：按赞数 / Like counter (likeCounter)。标签：pop, emotional；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decorB.js:250 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"likeCounter","seed":420625161,"n":1,"right":true,"low":false,"accent":true,"corner":true,"big":false,"mode":"index","from":3,"to":101,"v":3,"r":0.22076330054551363}]}}
```

## decor.mediaControls · 再生ボタン

前景或后景图形装饰：播放按钮 / Playback controls (mediaControls)。标签：pop, graphic, emotional；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decorB.js:250 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"mediaControls","seed":989280651,"n":1,"right":false,"low":false,"accent":false,"corner":false,"big":false,"mode":"count","from":5,"to":722,"v":1,"r":0.1647660166490823}]}}
```

## decor.volumeBars · 音量

前景或后景图形装饰：音量 / Volume bars (volumeBars)。标签：pop, glitch, graphic；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decorB.js:250 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"volumeBars","seed":242116555,"n":1,"right":false,"low":true,"accent":false,"corner":true,"big":true,"mode":"index","from":8,"to":41,"v":3,"r":0.6576744245830923}]}}
```

## decor.musicNotes · 音符

前景或后景图形装饰：音符 / Music notes (musicNotes)。标签：pop, emotional, calm；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_decorB.js:250 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"musicNotes","seed":123097116,"n":2,"right":false,"low":true,"accent":true,"corner":true,"big":false,"mode":"index","from":12,"to":81,"v":3,"r":0.3790422105230391}]}}
```

## decor.hrScratches · 引っ掻き傷

前景或后景图形装饰：抓痕 / Claw Scratches (hrScratches)。标签：horror, glitch；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_horror3.js:60 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"hrScratches","seed":601381962,"n":1,"right":true,"low":false,"accent":false,"corner":true,"big":true,"mode":"index","from":4,"to":586,"v":5,"r":0.259128074394539}]}}
```

## decor.hrSigil · 魔法陣

前景或后景图形装饰：魔法阵 / Sigil (hrSigil)。标签：horror, graphic；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_horror3.js:89 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"hrSigil","seed":951193959,"n":3,"right":true,"low":true,"accent":false,"corner":false,"big":true,"mode":"count","from":11,"to":427,"v":1,"r":0.3987454224843532}]}}
```

## decor.hrWatchEye · 見ている目

前景或后景图形装饰：注视之眼 / Watching Eye (hrWatchEye)。标签：horror, graphic；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_horror3.js:117 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"hrWatchEye","seed":294962123,"n":1,"right":false,"low":false,"accent":false,"corner":true,"big":false,"mode":"index","from":5,"to":740,"v":1,"r":0.08673995221033692}]}}
```

## decor.hrStaticPatch · 砂嵐の欠片

前景或后景图形装饰：杂讯碎片 / Static Patches (hrStaticPatch)。标签：horror, glitch；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_horror3.js:145 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"hrStaticPatch","seed":279238638,"n":2,"right":true,"low":false,"accent":true,"corner":false,"big":false,"mode":"index","from":18,"to":494,"v":0,"r":0.6559708719141781}]}}
```

## decor.hrDustBeam · 光の筋と埃

前景或后景图形装饰：光束与尘埃 / Dusty Light Beam (hrDustBeam)。标签：horror, calm, emotional；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_horror3.js:171 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"hrDustBeam","seed":335420923,"n":1,"right":true,"low":false,"accent":false,"corner":true,"big":false,"mode":"index","from":12,"to":588,"v":5,"r":0.03461771737784147}]}}
```

## decor.hrDrips · 垂れる墨

前景或后景图形装饰：垂落的墨 / Ink Drips (hrDrips)。标签：horror, emotional；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_horror3.js:201 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"hrDrips","seed":102280985,"n":2,"right":false,"low":true,"accent":false,"corner":false,"big":true,"mode":"count","from":9,"to":284,"v":0,"r":0.12447896390222013}]}}
```

## decor.hrCracks · ひび割れ

前景或后景图形装饰：裂痕 / Cracks (hrCracks)。标签：horror, graphic, glitch；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_horror3.js:226 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"hrCracks","seed":851927124,"n":1,"right":false,"low":false,"accent":true,"corner":true,"big":false,"mode":"count","from":7,"to":405,"v":3,"r":0.21375353215262294}]}}
```

## decor.knSpeedTrail · 追従スピード線

前景或后景图形装饰：跟随速度线 / Trailing Speed Lines (knSpeedTrail)。标签：pop, graphic, glitch；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_kinetic3.js:318 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"knSpeedTrail","seed":337900076,"n":2,"right":true,"low":false,"accent":true,"corner":false,"big":false,"mode":"index","from":5,"to":563,"v":5,"r":0.3773423917591572}]}}
```

## decor.knWordTicks · 語カウンター

前景或后景图形装饰：词数计数器 / Word Counter (knWordTicks)。标签：graphic, editorial, pop；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_kinetic3.js:351 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"knWordTicks","seed":342447269,"n":1,"right":false,"low":false,"accent":false,"corner":false,"big":false,"mode":"index","from":8,"to":92,"v":2,"r":0.019671659683808684}]}}
```

## decor.tyColophon · 奥付

前景或后景图形装饰：版权页 / Colophon (tyColophon)。标签：editorial, calm, graphic；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_typo3.js:72 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"tyColophon","seed":692323882,"n":1,"right":true,"low":true,"accent":false,"corner":false,"big":false,"mode":"index","from":16,"to":773,"v":0,"r":0.7777151148766279}]}}
```

## decor.tyRunningHead · 柱とノンブル

前景或后景图形装饰：书眉页码 / Running Head & Folio (tyRunningHead)。标签：editorial, calm；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_typo3.js:101 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"tyRunningHead","seed":668019749,"n":1,"right":false,"low":true,"accent":true,"corner":false,"big":false,"mode":"index","from":12,"to":358,"v":4,"r":0.4762107231654227}]}}
```

## decor.tyGlyphBody · 字割り線

前景或后景图形装饰：字身分割线 / Glyph Body Lines (tyGlyphBody)。标签：editorial, graphic, calm；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_typo3.js:132 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"tyGlyphBody","seed":595589523,"n":1,"right":true,"low":true,"accent":false,"corner":true,"big":false,"mode":"count","from":19,"to":966,"v":5,"r":0.7819661973044276}]}}
```

## decor.tyTextRule · 文字罫

前景或后景图形装饰：文字线条 / Text Rule (tyTextRule)。标签：editorial, graphic, calm；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_typo3.js:160 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"tyTextRule","seed":405399583,"n":1,"right":true,"low":false,"accent":false,"corner":false,"big":false,"mode":"count","from":9,"to":573,"v":4,"r":0.8145676981657743}]}}
```

## decor.tyTypeScale · 級数見本

前景或后景图形装饰：字级样本 / Type Scale (tyTypeScale)。标签：editorial, graphic；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_typo3.js:187 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"tyTypeScale","seed":91283740,"n":1,"right":true,"low":false,"accent":true,"corner":false,"big":true,"mode":"index","from":14,"to":308,"v":5,"r":0.10560354893095791}]}}
```

## decor.tyBigPunct · 大きな約物

前景或后景图形装饰：巨大引号 / Big Quote Marks (tyBigPunct)。标签：editorial, emotional, graphic；参数位置：decor[index]。

参数：accent, big, corner, from, id, low, mode, n, r, right, seed, to, v。

源码：runtime/native/11p_typo3.js:217 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"decor":[{"id":"tyBigPunct","seed":641584716,"n":1,"right":true,"low":false,"accent":true,"corner":true,"big":true,"mode":"count","from":2,"to":281,"v":1,"r":0.10736114415340126}]}}
```

## treat.none · なし

文字材质、轮廓与加工：无 / None (none)。标签：；参数位置：treatP。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/05b_registry.js:24 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"treat":"none","treatP":{}}}
```

## treat.hrInkBleed · 滲み垂れ

文字材质、轮廓与加工：晕染滴落 / Bleeding Ink (hrInkBleed)。标签：horror, emotional；参数位置：treatP。

参数：drips, red。

源码：runtime/native/11p_horror2.js:415 (plan)；runtime/native/11p_horror2.js:416 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"treat":"hrInkBleed","treatP":{"drips":0.38801989969797435,"red":false}}}
```

## treat.hrEroded · 風化

文字材质、轮廓与加工：风化 / Eroded (hrEroded)。标签：horror, editorial, graphic；参数位置：treatP。

参数：dens, scr。

源码：runtime/native/11p_horror2.js:447 (plan)；runtime/native/11p_horror2.js:448 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"treat":"hrEroded","treatP":{"dens":1.0450497492449358,"scr":false}}}
```

## treat.hrRedact · 黒塗り

文字材质、轮廓与加工：涂黑 / Redacted (hrRedact)。标签：horror, editorial, graphic；参数位置：treatP。

参数：at, frac, from。

源码：runtime/native/11p_horror2.js:475 (plan)；runtime/native/11p_horror2.js:476 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"treat":"hrRedact","treatP":{"at":0.4225248746224679,"frac":0.5224931909702718,"from":0.37708328501321375}}}
```

## treat.hrDoubleExp · 二重露光

文字材质、轮廓与加工：双重曝光 / Double Exposure (hrDoubleExp)。标签：horror, emotional, glitch；参数位置：treatP。

参数：amp, k。

源码：runtime/native/11p_horror2.js:507 (plan)；runtime/native/11p_horror2.js:508 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"treat":"hrDoubleExp","treatP":{"amp":0.24900994984898717,"k":1.0670821984950454}}}
```

## treat.knWordScale · 大小語

文字材质、轮廓与加工：大小词 / Big and Small Words (knWordScale)。标签：pop, graphic, editorial；参数位置：treatP。

参数：big, pick, small。

源码：runtime/native/11p_kinetic3.js:228 (plan)；runtime/native/11p_kinetic3.js:229 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"treat":"knWordScale","treatP":{"big":1.376613929788582,"small":0.8393315175920725,"pick":"long"}}}
```

## treat.knWordPlate · 語ごと反転

文字材质、轮廓与加工：逐词反白 / Word Knockout (knWordPlate)。标签：pop, graphic, glitch；参数位置：treatP。

参数：first, pad, tilt。

源码：runtime/native/11p_kinetic3.js:273 (plan)；runtime/native/11p_kinetic3.js:274 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"treat":"knWordPlate","treatP":{"first":false,"pad":0.12449863819405438,"tilt":2.712061640806496}}}
```

## treat.outline · 袋文字

文字材质、轮廓与加工：空心字 / Hollow letters (outline)。标签：graphic, pop, glitch, emotional；参数位置：treatP。

参数：k。

源码：runtime/native/11p_looks.js:100 (plan)；runtime/native/11p_looks.js:101 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"treat":"outline","treatP":{"k":0.03304159197583795}}}
```

## treat.outlineFill · 縁取り

文字材质、轮廓与加工：描边 / Outlined text (outlineFill)。标签：pop, graphic；参数位置：treatP。

参数：c, k。

源码：runtime/native/11p_looks.js:108 (plan)；runtime/native/11p_looks.js:109 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"treat":"outlineFill","treatP":{"k":0.10605447743204421,"c":2}}}
```

## treat.doubleOutline · 二重縁

文字材质、轮廓与加工：双层描边 / Double outline (doubleOutline)。标签：pop, graphic；参数位置：treatP。

参数：a, b。

源码：runtime/native/11p_looks.js:118 (plan)；runtime/native/11p_looks.js:119 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"treat":"doubleOutline","treatP":{"a":0.08380198996979743,"b":0.10224931909702718}}}
```

## treat.extrude · 立体

文字材质、轮廓与加工：立体字 / Extruded text (extrude)。标签：pop, graphic；参数位置：treatP。

参数：c, d, dir。

源码：runtime/native/11p_looks.js:134 (plan)；runtime/native/11p_looks.js:135 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"treat":"extrude","treatP":{"d":0.11760397993959487,"dir":[-1,1],"c":0}}}
```

## treat.longShadow · 長い影

文字材质、轮廓与加工：长阴影 / Long shadow (longShadow)。标签：pop, graphic；参数位置：treatP。

参数：L, ang。

源码：runtime/native/11p_looks.js:144 (plan)；runtime/native/11p_looks.js:145 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"treat":"longShadow","treatP":{"L":0.5570298495469614,"ang":60}}}
```

## treat.hardShadow · ずらし影

文字材质、轮廓与加工：错位阴影 / Hard shadow (hardShadow)。标签：pop, graphic, glitch；参数位置：treatP。

参数：d, dir。

源码：runtime/native/11p_looks.js:154 (plan)；runtime/native/11p_looks.js:155 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"treat":"hardShadow","treatP":{"d":0.07415348244714551,"dir":[1,-1]}}}
```

## treat.softShadow · ぼかし影

文字材质、轮廓与加工：柔和阴影 / Soft shadow (softShadow)。标签：calm, emotional, editorial；参数位置：treatP。

参数：b, dy。

源码：runtime/native/11p_looks.js:162 (plan)；runtime/native/11p_looks.js:163 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"treat":"softShadow","treatP":{"b":0.12140596990939231,"dy":0.05966575879603625}}}
```

## treat.glow · 発光

文字材质、轮廓与加工：发光 / Glow (glow)。标签：emotional, calm, glitch；参数位置：treatP。

参数：b, self。

源码：runtime/native/11p_looks.js:201 (plan)；runtime/native/11p_looks.js:202 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"treat":"glow","treatP":{"b":0.22900994984898715,"self":false}}}
```

## treat.marker · マーカー

文字材质、轮廓与加工：荧光笔 / Marker highlight (marker)。标签：pop, graphic, editorial；参数位置：treatP。

参数：c, v。

源码：runtime/native/11p_looks.js:213 (plan)；runtime/native/11p_looks.js:214 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"treat":"marker","treatP":{"v":"skew","c":1}}}
```

## treat.underline · 下線

文字材质、轮廓与加工：底线 / Underline (underline)。标签：editorial, calm, graphic；参数位置：treatP。

参数：k, v。

源码：runtime/native/11p_looks.js:246 (plan)；runtime/native/11p_looks.js:247 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"treat":"underline","treatP":{"v":"double","k":0.06854109924752265}}}
```

## treat.strike · 取り消し線

文字材质、轮廓与加工：删除线 / Strikethrough (strike)。标签：glitch, editorial, emotional；参数位置：treatP。

参数：ang, k, v。

源码：runtime/native/11p_looks.js:272 (plan)；runtime/native/11p_looks.js:273 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"treat":"strike","treatP":{"v":"two","ang":1.9331517592072487,"k":0.06942708212533034}}}
```

## treat.boxed · 箱組

文字材质、轮廓与加工：方框字 / Boxed text (boxed)。标签：graphic, editorial, pop；参数位置：treatP。

参数：v。

源码：runtime/native/11p_looks.js:295 (plan)；runtime/native/11p_looks.js:296 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"treat":"boxed","treatP":{"v":"alt"}}}
```

## treat.gradientV · 縦グラデ

文字材质、轮廓与加工：垂直渐变 / Vertical gradient (gradientV)。标签：emotional, pop；参数位置：treatP。

参数：g, up。

源码：runtime/native/11p_looks.js:322 (plan)；runtime/native/11p_looks.js:323 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"treat":"gradientV","treatP":{"up":false,"g":false}}}
```

## treat.splitColor · 上下二色

文字材质、轮廓与加工：上下双色 / Two tone split (splitColor)。标签：pop, graphic；参数位置：treatP。

参数：sp, top。

源码：runtime/native/11p_looks.js:332 (plan)；runtime/native/11p_looks.js:333 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"treat":"splitColor","treatP":{"sp":0.548306964894291,"top":false}}}
```

## treat.halftone · 網点

文字材质、轮廓与加工：网点 / Halftone (halftone)。标签：pop, graphic；参数位置：treatP。

参数：v。

源码：runtime/native/11p_looks.js:347 (plan)；runtime/native/11p_looks.js:340 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"treat":"halftone","treatP":{"v":"duo"}}}
```

## treat.stripes · ストライプ

文字材质、轮廓与加工：条纹 / Stripes (stripes)。标签：pop, graphic；参数位置：treatP。

参数：v。

源码：runtime/native/11p_looks.js:348 (plan)；runtime/native/11p_looks.js:340 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"treat":"stripes","treatP":{"v":"lines"}}}
```

## treat.hatch · 斜線

文字材质、轮廓与加工：斜线 / Hatch (hatch)。标签：graphic, editorial, glitch；参数位置：treatP。

参数：v。

源码：runtime/native/11p_looks.js:347 (plan)；runtime/native/11p_looks.js:340 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"treat":"hatch","treatP":{"v":"duo"}}}
```

## treat.dotted · 点線輪郭

文字材质、轮廓与加工：点线轮廓 / Dotted outline (dotted)。标签：calm, editorial, graphic；参数位置：treatP。

参数：k, spd。

源码：runtime/native/11p_looks.js:352 (plan)；runtime/native/11p_looks.js:353 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"treat":"dotted","treatP":{"k":0.03690099498489872,"spd":1}}}
```

## treat.alternate · 交互色

文字材质、轮廓与加工：交错配色 / Alternating colors (alternate)。标签：pop, graphic；参数位置：treatP。

参数：v。

源码：runtime/native/11p_looks.js:365 (plan)；runtime/native/11p_looks.js:366 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"treat":"alternate","treatP":{"v":"kanji"}}}
```

## treat.italic · 斜体

文字材质、轮廓与加工：斜体 / Italic (italic)。标签：editorial, pop, emotional；参数位置：treatP。

参数：a。

源码：runtime/native/11p_looks.js:377 (plan)；runtime/native/11p_looks.js:378 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"treat":"italic","treatP":{"a":13.450497492449358}}}
```

## treat.wide · 平体

文字材质、轮廓与加工：扁平字 / Wide letters (wide)。标签：graphic, pop；参数位置：treatP。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_looks.js:385 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"treat":"wide","treatP":{}}}
```

## treat.tall · 長体

文字材质、轮廓与加工：瘦长字 / Tall letters (tall)。标签：editorial, calm, graphic, emotional；参数位置：treatP。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_looks.js:396 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"treat":"tall","treatP":{}}}
```

## treat.echoOutline · 輪郭の残響

文字材质、轮廓与加工：轮廓残响 / Echoed outline (echoOutline)。标签：glitch, emotional, graphic；参数位置：treatP。

参数：d, n, v。

源码：runtime/native/11p_looks.js:404 (plan)；runtime/native/11p_looks.js:405 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"treat":"echoOutline","treatP":{"v":"rise","n":4,"d":0.054427082125330345}}}
```

## treat.emphasisDots · 傍点

文字材质、轮廓与加工：着重号 / Emphasis dots (emphasisDots)。标签：editorial, emotional, calm；参数位置：treatP。

参数：v。

源码：runtime/native/11p_looks.js:421 (plan)；runtime/native/11p_looks.js:422 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"treat":"emphasisDots","treatP":{"v":"sesame"}}}
```

## treat.neonOutline · ネオン管

文字材质、轮廓与加工：霓虹灯管 / Neon tubing (neonOutline)。标签：glitch, emotional, pop；参数位置：treatP。

参数：fl, k。

源码：runtime/native/11p_treattrans.js:101 (plan)；runtime/native/11p_treattrans.js:102 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"treat":"neonOutline","treatP":{"k":0.029520795987918975,"fl":true}}}
```

## treat.chrome · クローム

文字材质、轮廓与加工：镀铬 / Chrome (chrome)。标签：pop, graphic；参数位置：treatP。

参数：h, v。

源码：runtime/native/11p_treattrans.js:127 (plan)；runtime/native/11p_treattrans.js:128 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"treat":"chrome","treatP":{"v":"sunset","h":0.5444986381940544}}}
```

## treat.rainbow · 虹色

文字材质、轮廓与加工：彩虹色 / Rainbow (rainbow)。标签：pop, emotional；参数位置：treatP。

参数：dir, sp, v。

源码：runtime/native/11p_treattrans.js:144 (plan)；runtime/native/11p_treattrans.js:145 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"treat":"rainbow","treatP":{"v":"steps","sp":0.40607947488315405,"dir":1}}}
```

## treat.glitchSplit · 色版ズレ

文字材质、轮廓与加工：色版错位 / Misregistered colors (glitchSplit)。标签：glitch, pop；参数位置：treatP。

参数：d, up。

源码：runtime/native/11p_treattrans.js:162 (plan)；runtime/native/11p_treattrans.js:163 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"treat":"glitchSplit","treatP":{"d":0.07380198996979744,"up":false}}}
```

## treat.shadowStack · 多重影

文字材质、轮廓与加工：多重阴影 / Shadow stack (shadowStack)。标签：pop, graphic；参数位置：treatP。

参数：d, dir, n。

源码：runtime/native/11p_treattrans.js:184 (plan)；runtime/native/11p_treattrans.js:185 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"treat":"shadowStack","treatP":{"d":0.050351492477348075,"dir":[1,0.5],"n":3}}}
```

## treat.stencilGap · ステンシル字

文字材质、轮廓与加工：镂空字 / Stencil gaps (stencilGap)。标签：graphic, editorial, glitch；参数位置：treatP。

参数：at, g, v。

源码：runtime/native/11p_treattrans.js:206 (plan)；runtime/native/11p_treattrans.js:207 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"treat":"stencilGap","treatP":{"v":"two","at":0.03158083668909967,"g":0.039279165990184994}}}
```

## treat.waterline · 水位

文字材质、轮廓与加工：水位 / Waterline (waterline)。标签：emotional, pop, calm；参数位置：treatP。

参数：c, k, lvl。

源码：runtime/native/11p_treattrans.js:227 (plan)；runtime/native/11p_treattrans.js:228 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"treat":"waterline","treatP":{"lvl":0.5428119398187846,"c":1,"k":0.02226249971007928}}}
```

## treat.karaoke · カラオケ

文字材质、轮廓与加工：卡拉 OK / Karaoke (karaoke)。标签：emotional, pop, editorial；参数位置：treatP。

参数：ol, sp。

源码：runtime/native/11p_treattrans.js:241 (plan)；runtime/native/11p_treattrans.js:242 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"treat":"karaoke","treatP":{"sp":0.8035149247734807,"ol":false}}}
```

## treat.sizeWave · 大小リズム

文字材质、轮廓与加工：大小节奏 / Rhythmic letter sizes (sizeWave)。标签：pop, graphic, editorial；参数位置：treatP。

参数：k, rev, v。

源码：runtime/native/11p_treattrans.js:279 (plan)；runtime/native/11p_treattrans.js:280 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"treat":"sizeWave","treatP":{"v":"ramp","k":0.7141643969900906,"rev":true}}}
```

## treat.rotateAlt · 揺れ字

文字材质、轮廓与加工：摇摆字 / Alternating angles (rotateAlt)。标签：pop, emotional；参数位置：treatP。

参数：a, v。

源码：runtime/native/11p_treattrans.js:320 (plan)；runtime/native/11p_treattrans.js:321 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"treat":"rotateAlt","treatP":{"a":12.450497492449358,"v":"rand"}}}
```

## treat.baselineShift · 段違い

文字材质、轮廓与加工：高低错落 / Staggered baseline (baselineShift)。标签：pop, graphic；参数位置：treatP。

参数：dir, k, v。

源码：runtime/native/11p_treattrans.js:333 (plan)；runtime/native/11p_treattrans.js:334 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"treat":"baselineShift","treatP":{"v":"stairs","k":0.10224931909702718,"dir":1}}}
```

## treat.fauxBold · 極太

文字材质、轮廓与加工：超粗 / Extra bold (fauxBold)。标签：graphic, pop, editorial；参数位置：treatP。

参数：k。

源码：runtime/native/11p_treattrans.js:349 (plan)；runtime/native/11p_treattrans.js:350 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"treat":"fauxBold","treatP":{"k":0.04535149247734808}}}
```

## treat.circled · 丸囲み

文字材质、轮廓与加工：圆圈字 / Circled letters (circled)。标签：pop, graphic, editorial；参数位置：treatP。

参数：k, v。

源码：runtime/native/11p_treattrans.js:358 (plan)；runtime/native/11p_treattrans.js:359 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"treat":"circled","treatP":{"v":"disc","k":0.7244986381940544}}}
```

## treat.bracketsQuote · かぎ括弧

文字材质、轮廓与加工：引号 / Quotation marks (bracketsQuote)。标签：editorial, emotional, calm；参数位置：treatP。

参数：k, v。

源码：runtime/native/11p_treattrans.js:382 (plan)；runtime/native/11p_treattrans.js:383 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"treat":"bracketsQuote","treatP":{"v":"double","k":0.061124659548513594}}}
```

## treat.reflection · 映り込み

文字材质、轮廓与加工：倒影 / Reflection (reflection)。标签：emotional, calm, editorial；参数位置：treatP。

参数：a, gap, k。

源码：runtime/native/11p_treattrans.js:426 (plan)；runtime/native/11p_treattrans.js:427 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"treat":"reflection","treatP":{"k":0.7242179097281769,"a":0.42899727638810875,"gap":0.05885416425066069}}}
```

## treat.inline · インライン

文字材质、轮廓与加工：内框线 / Inline (inline)。标签：editorial, pop, graphic；参数位置：treatP。

参数：a, b, c。

源码：runtime/native/11p_treattrans.js:449 (plan)；runtime/native/11p_treattrans.js:450 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"treat":"inline","treatP":{"a":0.020450497492449357,"b":0.01970821984950453,"c":false}}}
```

## treat.sticker · シール縁

文字材质、轮廓与加工：贴纸描边 / Sticker outline (sticker)。标签：pop, graphic；参数位置：treatP。

参数：k, rot, sh。

源码：runtime/native/11p_treattrans.js:465 (plan)；runtime/native/11p_treattrans.js:466 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"treat":"sticker","treatP":{"k":0.15760397993959488,"rot":3.483287939801812,"sh":0.04712061640806496}}}
```

## treat.gradientSweep · 光沢スイープ

文字材质、轮廓与加工：光泽扫过 / Gradient sweep (gradientSweep)。标签：pop, emotional；参数位置：treatP。

参数：per, ph, v。

源码：runtime/native/11p_treattrans.js:487 (plan)；runtime/native/11p_treattrans.js:488 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"treat":"gradientSweep","treatP":{"v":"tide","per":2.0933151759207247,"ph":0.37708328501321375}}}
```

## treat.kerningWide · 字間広め

文字材质、轮廓与加工：宽字距 / Wide letter spacing (kerningWide)。标签：editorial, calm, emotional；参数位置：treatP。

参数：grow, t。

源码：runtime/native/11p_treattrans.js:504 (plan)；runtime/native/11p_treattrans.js:505 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"treat":"kerningWide","treatP":{"t":0.47872288465267054,"grow":1.1141643969900905}}}
```

## treat.monoGrid · 原稿用紙風

文字材质、轮廓与加工：稿纸风 / Manuscript grid (monoGrid)。标签：editorial, calm, emotional；参数位置：treatP。

参数：c, pitch。

源码：runtime/native/11p_treattrans.js:517 (plan)；runtime/native/11p_treattrans.js:518 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"treat":"monoGrid","treatP":{"pitch":1.2352079598791896,"c":0}}}
```

## treat.outlineOffset · 版ズレ袋文字

文字材质、轮廓与加工：错位空心字 / Offset outline (outlineOffset)。标签：pop, graphic, editorial；参数位置：treatP。

参数：d, dir, k。

源码：runtime/native/11p_treattrans.js:561 (plan)；runtime/native/11p_treattrans.js:562 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"treat":"outlineOffset","treatP":{"d":0.07225248746224679,"dir":[1,0.35],"k":0.02501666628010571}}}
```

## treat.toneShadow · トーン影

文字材质、轮廓与加工：网点阴影 / Halftone shadow (toneShadow)。标签：pop, graphic, editorial；参数位置：treatP。

参数：d, dir, v。

源码：runtime/native/11p_treattrans.js:576 (plan)；runtime/native/11p_treattrans.js:577 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"treat":"toneShadow","treatP":{"v":"hatch","d":0.11224931909702718,"dir":[1,1]}}}
```

## treat.fadeChars · 余韻

文字材质、轮廓与加工：余韵 / Fading letters (fadeChars)。标签：emotional, calm；参数位置：treatP。

参数：lo, v。

源码：runtime/native/11p_treattrans.js:590 (plan)；runtime/native/11p_treattrans.js:591 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"treat":"fadeChars","treatP":{"v":"both","lo":0.37416439699009063}}}
```

## treat.cutShift · 断ち切り

文字材质、轮廓与加工：切割错位 / Offset cut (cutShift)。标签：graphic, glitch, pop；参数位置：treatP。

参数：at, d, line。

源码：runtime/native/11p_treattrans.js:603 (plan)；runtime/native/11p_treattrans.js:604 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"treat":"cutShift","treatP":{"at":0.016613929788582033,"d":0.1470821984950453,"line":false}}}
```

## treat.focusPull · ぼかし送り

文字材质、轮廓与加工：模糊移焦 / Focus shift (focusPull)。标签：emotional, calm, editorial；参数位置：treatP。

参数：b, rev。

源码：runtime/native/11p_treattrans.js:631 (plan)；runtime/native/11p_treattrans.js:632 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"treat":"focusPull","treatP":{"b":0.04535149247734808,"rev":false}}}
```

## treat.spotChar · 一字マーク

文字材质、轮廓与加工：单字标记 / Highlighted character (spotChar)。标签：pop, graphic, editorial, emotional；参数位置：treatP。

参数：k, r, v。

源码：runtime/native/11p_treattrans.js:652 (plan)；runtime/native/11p_treattrans.js:653 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"treat":"spotChar","treatP":{"v":"square","k":1.1193315175920724,"r":0.37708328501321375}}}
```

## treat.ransom · 切り貼り文字

文字材质、轮廓与加工：剪贴字 / Cutout letters (ransom)。标签：pop, glitch, graphic；参数位置：treatP。

参数：s。

源码：runtime/native/11p_treattrans.js:689 (plan)；runtime/native/11p_treattrans.js:690 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"treat":"ransom","treatP":{"s":690100}}}
```

## treat.tyHollowKey · 一字抜き

文字材质、轮廓与加工：单字镂空 / Hollow Key Glyph (tyHollowKey)。标签：graphic, editorial, pop；参数位置：treatP。

参数：rev。

源码：runtime/native/11p_typo3.js:265 (plan)；runtime/native/11p_typo3.js:266 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"treat":"tyHollowKey","treatP":{"rev":false}}}
```

## treat.tyHeadRules · 天地罫

文字材质、轮廓与加工：天地线 / Head & Foot Rules (tyHeadRules)。标签：editorial, graphic, calm；参数位置：treatP。

参数：acc, k。

源码：runtime/native/11p_typo3.js:285 (plan)；runtime/native/11p_typo3.js:286 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"treat":"tyHeadRules","treatP":{"k":0.08070298495469615,"acc":false}}}
```

## treat.tyHeadBig · 頭字強調

文字材质、轮廓与加工：首字放大 / Large Initial (tyHeadBig)。标签：editorial, pop, emotional；参数位置：treatP。

参数：acc, k。

源码：runtime/native/11p_typo3.js:310 (plan)；runtime/native/11p_typo3.js:311 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"treat":"tyHeadBig","treatP":{"k":1.522524874622468,"acc":false}}}
```

## treat.tyIndexSup · 字番号

文字材质、轮廓与加工：字序号 / Glyph Numbers (tyIndexSup)。标签：editorial, graphic；参数位置：treatP。

参数：acc。

源码：runtime/native/11p_typo3.js:337 (plan)；runtime/native/11p_typo3.js:338 (apply)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"treat":"tyIndexSup","treatP":{"acc":false}}}
```

## bg.none · 無地

全画面背景图案：素色 / Solid color (none)。标签：；参数位置：bgP。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/05b_registry.js:26 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"bg":"none","bgP":{}}}
```

## bg.auroraRibbons · オーロラ

全画面背景图案：极光 / Aurora ribbons (auroraRibbons)。标签：emotional, calm；参数位置：bgP。

参数：c0, k, n, seed, y。

源码：runtime/native/11p_bgcamB.js:136 (plan)；runtime/native/11p_bgcamB.js:49 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"bg":"auroraRibbons","bgP":{"seed":690099499,"n":3,"y":0.40524999420158564,"k":0.2646432875096798,"c0":0}}}
```

## bg.meshBlobs · メッシュグラデ

全画面背景图案：网格渐变 / Mesh blobs (meshBlobs)。标签：calm, emotional, pop；参数位置：bgP。

参数：k, n, seed。

源码：runtime/native/11p_bgcamB.js:164 (plan)；runtime/native/11p_bgcamB.js:49 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"bg":"meshBlobs","bgP":{"seed":690099499,"n":4,"k":0.23770832850132137}}}
```

## bg.duotoneSweep · 二色スイープ

全画面背景图案：双色扫动 / Duotone sweep (duotoneSweep)。标签：calm, pop, graphic, emotional；参数位置：bgP。

参数：a0, k, pos, seed, spd。

源码：runtime/native/11p_bgcamB.js:184 (plan)；runtime/native/11p_bgcamB.js:49 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"bg":"duotoneSweep","bgP":{"seed":690099499,"pos":[0.5,-0.2],"spd":-0.10262499710079283,"k":0.15486882901284846,"a0":4.314502487117425}}}
```

## bg.horizonGlow · 惑星の縁

全画面背景图案：行星边缘 / Horizon glow (horizonGlow)。标签：emotional, calm, editorial；参数位置：bgP。

参数：R, cx, k, seed, top。

源码：runtime/native/11p_bgcamB.js:205 (plan)；runtime/native/11p_bgcamB.js:49 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"bg":"horizonGlow","bgP":{"seed":690099499,"cx":0.5966575879603624,"R":1.6016666280105711,"top":0.7808041093870998,"k":0.3097376580256969}}}
```

## bg.seigaiha · 青海波

全画面背景图案：青海波 / Seigaiha waves (seigaiha)。标签：calm, editorial, graphic；参数位置：bgP。

参数：R, acc, dir, k, rings, seed。

源码：runtime/native/11p_bgcamB.js:231 (plan)；runtime/native/11p_bgcamB.js:49 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"bg":"seigaiha","bgP":{"seed":690099499,"R":0.09224931909702719,"rings":3,"k":0.09520102734677494,"dir":1,"acc":false}}}
```

## bg.asanoha · 麻の葉

全画面背景图案：麻叶纹 / Asanoha pattern (asanoha)。标签：calm, editorial, graphic, emotional；参数位置：bgP。

参数：a, dx, k, seed, sweep。

源码：runtime/native/11p_bgcamB.js:255 (plan)；runtime/native/11p_bgcamB.js:49 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"bg":"asanoha","bgP":{"seed":690099499,"a":0.12966575879603626,"k":0.10131249855039641,"dx":-1,"sweep":0.08239069084404037}}}
```

## bg.houndstooth · 千鳥格子

全画面背景图案：千鸟格 / Houndstooth (houndstooth)。标签：graphic, editorial, pop；参数位置：bgP。

参数：acc, c, dx, k, seed。

源码：runtime/native/11p_bgcamB.js:288 (plan)；runtime/native/11p_bgcamB.js:49 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"bg":"houndstooth","bgP":{"seed":690099499,"c":0.05112465954851359,"k":0.06254166570026427,"dx":-1,"acc":true}}}
```

## bg.herringbone · ヘリンボーン

全画面背景图案：人字纹 / Herringbone (herringbone)。标签：editorial, calm, graphic；参数位置：bgP。

参数：dir, k, rot, seed, u。

源码：runtime/native/11p_bgcamB.js:311 (plan)；runtime/native/11p_bgcamB.js:49 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"bg":"herringbone","bgP":{"seed":690099499,"u":0.04164137160871178,"k":0.08131249855039642,"dir":-1,"rot":45}}}
```

## bg.argyle · アーガイル

全画面背景图案：菱格纹 / Argyle (argyle)。标签：pop, graphic, editorial；参数位置：bgP。

参数：asp, dw, k, seed, up。

源码：runtime/native/11p_bgcamB.js:338 (plan)；runtime/native/11p_bgcamB.js:49 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"bg":"argyle","bgP":{"seed":690099499,"dw":0.20449863819405437,"asp":1.3754166570026427,"k":0.08020102734677494,"up":1}}}
```

## bg.tartan · タータン

全画面背景图案：苏格兰格纹 / Tartan (tartan)。标签：pop, calm, editorial；参数位置：bgP。

参数：S, acc, k, seed, w1, w2。

源码：runtime/native/11p_bgcamB.js:362 (plan)；runtime/native/11p_bgcamB.js:49 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"bg":"tartan","bgP":{"seed":690099499,"S":0.458663035184145,"w1":0.21770832850132138,"w2":0.12040205469354988,"k":0.09243441450642423,"acc":false}}}
```

## bg.chevron · 山形

全画面背景图案：V 形纹 / Chevron (chevron)。标签：pop, graphic；参数位置：bgP。

参数：acc, amp, dir, k, p, seed。

源码：runtime/native/11p_bgcamB.js:377 (plan)；runtime/native/11p_bgcamB.js:49 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"bg":"chevron","bgP":{"seed":690099499,"p":0.17449863819405437,"amp":0.33279165990184995,"k":0.07116082187741994,"dir":1,"acc":false}}}
```

## bg.isoCubes · 立方体

全画面背景图案：立方体 / Iso cubes (isoCubes)。标签：graphic, pop, calm；参数位置：bgP。

参数：k, l0, s, seed, spd。

源码：runtime/native/11p_bgcamB.js:394 (plan)；runtime/native/11p_bgcamB.js:49 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"bg":"isoCubes","bgP":{"seed":690099499,"s":0.06983287939801812,"k":0.09131249855039641,"spd":0.3212061640806496,"l0":4.314502487117425}}}
```

## bg.hexGrid · 六角格子

全画面背景图案：六角网格 / Hex grid (hexGrid)。标签：graphic, glitch, calm；参数位置：bgP。

参数：k, mode, s, seed。

源码：runtime/native/11p_bgcamB.js:414 (plan)；runtime/native/11p_bgcamB.js:49 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"bg":"hexGrid","bgP":{"seed":690099499,"s":0.06483287939801813,"k":0.10131249855039641,"mode":"sparkle"}}}
```

## bg.triTess · 三角モザイク

全画面背景图案：三角马赛克 / Tri tess (triTess)。标签：graphic, calm, emotional；参数位置：bgP。

参数：a, acc, k, seed。

源码：runtime/native/11p_bgcamB.js:436 (plan)；runtime/native/11p_bgcamB.js:49 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"bg":"triTess","bgP":{"seed":690099499,"a":0.1370821984950453,"k":0.08131249855039642,"acc":false}}}
```

## bg.moire · モアレ

全画面背景图案：摩尔纹 / Moire (moire)。标签：glitch, graphic, calm；参数位置：bgP。

参数：amp, gap, k, seed。

源码：runtime/native/11p_bgcamB.js:460 (plan)；runtime/native/11p_bgcamB.js:49 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"bg":"moire","bgP":{"seed":690099499,"gap":0.020449863819405435,"k":0.09131249855039641,"amp":0.08232164375483988}}}
```

## bg.squareTunnel · 四角トンネル

全画面背景图案：方形隧道 / Square tunnel (squareTunnel)。标签：glitch, graphic, pop；参数位置：bgP。

参数：k, r, seed, spd, twist。

源码：runtime/native/11p_bgcamB.js:477 (plan)；runtime/native/11p_bgcamB.js:49 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"bg":"squareTunnel","bgP":{"seed":690099499,"r":1.2941643969900907,"twist":-4.508333140052855,"spd":0.4119534542202018,"k":0.06374045378062874}}}
```

## bg.spiralArms · 渦巻き

全画面背景图案：漩涡 / Spiral arms (spiralArms)。标签：glitch, pop, graphic；参数位置：bgP。

参数：b, cy, k, n, seed, spd。

源码：runtime/native/11p_bgcamB.js:493 (plan)；runtime/native/11p_bgcamB.js:49 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"bg":"spiralArms","bgP":{"seed":690099499,"n":5,"b":0.30524999420158566,"spd":0.22080410938709974,"k":0.06874045378062874,"cy":0.5}}}
```

## bg.topoLines · 等高線

全画面背景图案：等高线 / Contour lines (topoLines)。标签：calm, editorial, graphic；参数位置：bgP。

参数：acc, fs, k, n, seed。

源码：runtime/native/11p_bgcamB.js:514 (plan)；runtime/native/11p_bgcamB.js:49 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"bg":"topoLines","bgP":{"seed":690099499,"n":13,"fs":1.3885416425066068,"k":0.14232164375483988,"acc":true}}}
```

## bg.ridgePlot · 稜線グラフ

全画面背景图案：山脊线图 / Mountain ridges (ridgePlot)。标签：editorial, emotional, calm；参数位置：bgP。

参数：amp, k, mode, n, seed, spd。

源码：runtime/native/11p_bgcamB.js:542 (plan)；runtime/native/11p_bgcamB.js:49 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"bg":"ridgePlot","bgP":{"seed":690099499,"n":24,"k":0.1688541642506607,"amp":0.09424123281612992,"mode":"center","spd":0.26244272268377244}}}
```

## bg.starfield · 星空

全画面背景图案：星空 / Starfield (starfield)。标签：emotional, calm；参数位置：bgP。

参数：ang, seed, shoot, spd。

源码：runtime/native/11p_bgcamB.js:565 (plan)；runtime/native/11p_bgcamB.js:49 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"bg":"starfield","bgP":{"seed":690099499,"ang":3.2865790355303366,"spd":1.2040205469354988,"shoot":true}}}
```

## bg.nightMoon · 月夜

全画面背景图案：月夜 / Moonlit night (nightMoon)。标签：emotional, calm, editorial；参数位置：bgP。

参数：R, k, phase, seed, side。

源码：runtime/native/11p_bgcamB.js:601 (plan)；runtime/native/11p_bgcamB.js:49 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"bg":"nightMoon","bgP":{"seed":690099499,"side":-1,"R":0.12508333140052855,"phase":"crescent","k":0.19982510535046458}}}
```

## bg.skyline · 街並み

全画面背景图案：街景 / Skyline (skyline)。标签：emotional, editorial, pop；参数位置：bgP。

参数：dir, k, seed, win。

源码：runtime/native/11p_bgcamB.js:642 (plan)；runtime/native/11p_bgcamB.js:49 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"bg":"skyline","bgP":{"seed":690099499,"k":0.10224931909702718,"dir":1,"win":0.31696493126451974}}}
```

## bg.sunsetSun · 夕日

全画面背景图案：夕阳 / Sunset sun (sunsetSun)。标签：emotional, calm, pop；参数位置：bgP。

参数：R, cx, hz, k, seed。

源码：runtime/native/11p_bgcamB.js:678 (plan)；runtime/native/11p_bgcamB.js:49 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"bg":"sunsetSun","bgP":{"seed":690099499,"hz":0.7444986381940544,"R":0.13508333140052856,"cx":0.6897376580256969,"k":0.2846545538119972}}}
```

## bg.oceanWaves · 海の波

全画面背景图案：海浪 / Ocean waves (oceanWaves)。标签：calm, emotional, editorial；参数位置：bgP。

参数：dir, hz, k, n, seed。

源码：runtime/native/11p_bgcamB.js:712 (plan)；runtime/native/11p_bgcamB.js:49 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"bg":"oceanWaves","bgP":{"seed":690099499,"n":12,"hz":0.5177083285013213,"k":0.16040205469354987,"dir":1}}}
```

## bg.rainWindow · 雨の窓

全画面背景图案：雨窗 / Rain window (rainWindow)。标签：emotional, calm, editorial；参数位置：bgP。

参数：ang, drops, k, n, seed。

源码：runtime/native/11p_bgcamB.js:731 (plan)；runtime/native/11p_bgcamB.js:49 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"bg":"rainWindow","bgP":{"seed":690099499,"ang":10.674795729108155,"n":133,"k":0.16239069084404037,"drops":22}}}
```

## bg.snowLayers · 雪

全画面背景图案：雪 / Snow layers (snowLayers)。标签：calm, emotional；参数位置：bgP。

参数：dens, seed, wind。

源码：runtime/native/11p_bgcamB.js:770 (plan)；runtime/native/11p_bgcamB.js:49 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"bg":"snowLayers","bgP":{"seed":690099499,"wind":0.2174795729108155,"dens":0.9819791497546247}}}
```

## bg.fireworks · 花火

全画面背景图案：烟火 / Fireworks (fireworks)。标签：pop, emotional；参数位置：bgP。

参数：k, per, seed。

源码：runtime/native/11p_bgcamB.js:788 (plan)；runtime/native/11p_bgcamB.js:49 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"bg":"fireworks","bgP":{"seed":690099499,"per":0.7354109924752266,"k":0.46902082705171777}}}
```

## bg.cloudLayers · 雲

全画面背景图案：云 / Cloud layers (cloudLayers)。标签：calm, emotional, pop；参数位置：bgP。

参数：dir, k, seed。

源码：runtime/native/11p_bgcamB.js:828 (plan)；runtime/native/11p_bgcamB.js:49 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"bg":"cloudLayers","bgP":{"seed":690099499,"dir":-1,"k":0.07131249855039641}}}
```

## bg.mountains · 山並み

全画面背景图案：山峦 / Mountains (mountains)。标签：calm, emotional, editorial；参数位置：bgP。

参数：dir, k, mist, n, seed。

源码：runtime/native/11p_bgcamB.js:850 (plan)；runtime/native/11p_bgcamB.js:49 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"bg":"mountains","bgP":{"seed":690099499,"n":4,"k":0.08131249855039642,"dir":-1,"mist":true}}}
```

## bg.filmStrip · フィルム

全画面背景图案：胶片 / Filmstrip (filmStrip)。标签：editorial, emotional, glitch；参数位置：bgP。

参数：dir, scratch, seed, spd。

源码：runtime/native/11p_bgcamB.js:878 (plan)；runtime/native/11p_bgcamB.js:49 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"bg":"filmStrip","bgP":{"seed":690099499,"dir":-1,"spd":0.8262499710079282,"scratch":false}}}
```

## bg.vhsBand · VHSノイズ

全画面背景图案：VHS 噪点 / VHS noise band (vhsBand)。标签：glitch, emotional；参数位置：bgP。

参数：h, k, seed, spd。

源码：runtime/native/11p_bgcamB.js:931 (plan)；runtime/native/11p_bgcamB.js:49 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"bg":"vhsBand","bgP":{"seed":690099499,"h":0.1070821984950453,"spd":-0.11016666280105711,"k":0.24478138168808072}}}
```

## bg.tornPaper · 破れ紙

全画面背景图案：撕纸 / Torn paper (tornPaper)。标签：editorial, emotional, pop；参数位置：bgP。

参数：k, seed, v。

源码：runtime/native/11p_bgcamB.js:958 (plan)；runtime/native/11p_bgcamB.js:49 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"bg":"tornPaper","bgP":{"seed":690099499,"v":"diag","k":0.061312498550396416}}}
```

## bg.godRays · 光芒

全画面背景图案：光芒 / Light rays (godRays)。标签：emotional, calm, editorial；参数位置：bgP。

参数：dust, k, n, seed, spread, x。

源码：runtime/native/11p_bgcamB.js:988 (plan)；runtime/native/11p_bgcamB.js:49 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"bg":"godRays","bgP":{"seed":690099499,"x":0.5,"n":8,"spread":65.61068067094311,"k":0.11290909613249824,"dust":true}}}
```

## bg.vignettePulse · 色の周辺光

全画面背景图案：彩色暗角 / Pulsing vignette (vignettePulse)。标签：emotional, calm, pop；参数位置：bgP。

参数：k, rate, seed, two。

源码：runtime/native/11p_bgcamB.js:1021 (plan)；runtime/native/11p_bgcamB.js:49 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"bg":"vignettePulse","bgP":{"seed":690099499,"k":0.3889972763881087,"two":true,"rate":0.5116082187741995}}}
```

## bg.kaleidoscope · 万華鏡

全画面背景图案：万花筒 / Kaleidoscope (kaleidoscope)。标签：pop, glitch, emotional；参数位置：bgP。

参数：k, m, n, seed, spd。

源码：runtime/native/11p_bgcamB.js:1042 (plan)；runtime/native/11p_bgcamB.js:49 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"bg":"kaleidoscope","bgP":{"seed":690099499,"n":8,"m":7,"k":0.09520102734677494,"spd":-0.062390690844040364}}}
```

## bg.marble · 大理石

全画面背景图案：大理石 / Marble (marble)。标签：calm, editorial, emotional；参数位置：bgP。

参数：acc, ang, dir, freq, k, seed, turb。

源码：runtime/native/11p_bgcamB.js:1092 (plan)；runtime/native/11p_bgcamB.js:49 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"bg":"marble","bgP":{"seed":690099499,"ang":2.3287620654888452,"freq":1.701666628010571,"turb":9.424123281612992,"k":0.18239069084404036,"acc":false,"dir":1}}}
```

## bg.paperCut · 切り絵

全画面背景图案：剪纸 / Paper cutout (paperCut)。标签：pop, emotional, calm；参数位置：bgP。

参数：L, acc, k, lobes, p, seed。

源码：runtime/native/11p_bgcamB.js:1108 (plan)；runtime/native/11p_bgcamB.js:49 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"bg":"paperCut","bgP":{"seed":690099499,"L":4,"lobes":6,"k":0.08424123281612991,"acc":true,"p":2.94961815122515}}}
```

## bg.hrFailingLamp · 切れかけの灯

全画面背景图案：将熄的灯 / Failing Lamp (hrFailingLamp)。标签：horror, emotional；参数位置：bgP。

参数：rate, seed, x。

源码：runtime/native/11p_horror3.js:249 (plan)；runtime/native/11p_horror3.js:47 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"bg":"hrFailingLamp","bgP":{"seed":690099499,"x":0.5724931909702718,"rate":0.9262499710079283}}}
```

## bg.hrCorridor · 暗い廊下

全画面背景图案：昏暗走廊 / Dark Corridor (hrCorridor)。标签：horror, graphic；参数位置：bgP。

参数：doors, seed, spd, vx, vy。

源码：runtime/native/11p_horror3.js:267 (plan)；runtime/native/11p_horror3.js:47 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"bg":"hrCorridor","bgP":{"seed":690099499,"vx":0.5289972763881088,"vy":0.4777083285013214,"spd":0.4116082187741995,"doors":true}}}
```

## bg.hrMold · 広がる染み

全画面背景图案：蔓延的污渍 / Spreading Stains (hrMold)。标签：horror, emotional；参数位置：bgP。

参数：k, n, seed。

源码：runtime/native/11p_horror3.js:309 (plan)；runtime/native/11p_horror3.js:47 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"bg":"hrMold","bgP":{"seed":690099499,"n":5,"k":0.10262499710079283}}}
```

## bg.hrDeadTrees · 枯れ木の森

全画面背景图案：枯树林 / Dead Forest (hrDeadTrees)。标签：horror, calm, emotional；参数位置：bgP。

参数：fog, n, seed。

源码：runtime/native/11p_horror3.js:331 (plan)；runtime/native/11p_horror3.js:47 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"bg":"hrDeadTrees","bgP":{"seed":690099499,"n":7,"fog":0.1377083285013214}}}
```

## bg.sunburst · 放射

全画面背景图案：放射 / Sunburst (sunburst)。标签：pop, graphic；参数位置：bgP。

参数：cx, cy, k, n, seed, spd。

源码：runtime/native/11p_looks.js:466 (plan)；runtime/native/11p_bgcamB.js:49 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"bg":"sunburst","bgP":{"seed":690099499,"n":20,"cx":0.5,"cy":1.05,"spd":-3.991255267523229,"k":0.07174545767949894}}}
```

## bg.concentric · 同心円

全画面背景图案：同心圆 / Concentric (concentric)。标签：calm, graphic, emotional；参数位置：bgP。

参数：cy, gap, k, seed, spd。

源码：runtime/native/11p_looks.js:480 (plan)；runtime/native/11p_bgcamB.js:49 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"bg":"concentric","bgP":{"seed":690099499,"gap":0.09966575879603624,"spd":-0.22541665700264274,"k":0.0899125526752323,"cy":0.58}}}
```

## bg.halftoneFade · 網点グラデ

全画面背景图案：网点渐变 / Halftone fade (halftoneFade)。标签：pop, graphic, editorial；参数位置：bgP。

参数：cell, dir, k, seed。

源码：runtime/native/11p_looks.js:494 (plan)；runtime/native/11p_bgcamB.js:49 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"bg":"halftoneFade","bgP":{"seed":690099499,"dir":225,"cell":0.03690208270517178,"k":0.16040205469354987}}}
```

## bg.bigStripes · 大きな斜線

全画面背景图案：大斜纹 / Big stripes (bigStripes)。标签：graphic, pop；参数位置：bgP。

参数：ang, fill, k, seed, spd, w。

源码：runtime/native/11p_looks.js:522 (plan)；runtime/native/11p_bgcamB.js:49 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"bg":"bigStripes","bgP":{"seed":690099499,"ang":-45,"w":0.07885416425066069,"spd":0.07040205469354988,"fill":0.3,"k":0.051745457679498945}}}
```

## bg.splitV · 左右二色

全画面背景图案：左右双色 / Vertical color split (splitV)。标签：graphic, editorial, pop；参数位置：bgP。

参数：c, k, pos, seed, side。

源码：runtime/native/11p_looks.js:534 (plan)；runtime/native/11p_bgcamB.js:49 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"bg":"splitV","bgP":{"seed":690099499,"side":-1,"pos":0.47541665700264274,"c":"tint","k":0.0899125526752323}}}
```

## bg.splitH · 上下二色

全画面背景图案：上下双色 / Horizontal color split (splitH)。标签：graphic, editorial, calm；参数位置：bgP。

参数：c, k, pos, seed, side。

源码：runtime/native/11p_looks.js:544 (plan)；runtime/native/11p_bgcamB.js:49 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"bg":"splitH","bgP":{"seed":690099499,"side":-1,"pos":0.48787499130237844,"c":"tint","k":0.0899125526752323}}}
```

## bg.splitDiag · 斜め二色

全画面背景图案：斜向双色 / Diagonal color split (splitDiag)。标签：graphic, pop；参数位置：bgP。

参数：ang, c, k, pos, seed, side。

源码：runtime/native/11p_looks.js:554 (plan)；runtime/native/11p_bgcamB.js:49 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"bg":"splitDiag","bgP":{"seed":690099499,"side":-1,"pos":0.48033332560211417,"ang":26.92865750193596,"c":"tint","k":0.08232727690599859}}}
```

## bg.gradientSweep · グラデ

全画面背景图案：渐变 / Gradient sweep (gradientSweep)。标签：calm, emotional, pop；参数位置：bgP。

参数：a0, c, k, seed, spd。

源码：runtime/native/11p_looks.js:564 (plan)；runtime/native/11p_bgcamB.js:49 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"bg":"gradientSweep","bgP":{"seed":690099499,"spd":0.4354109924752265,"k":0.1977083285013214,"c":"fg","a0":1.5562707700114697}}}
```

## bg.spotlight · スポットライト

全画面背景图案：聚光灯 / Spotlight (spotlight)。标签：emotional, calm, editorial；参数位置：bgP。

参数：beam, k, seed。

源码：runtime/native/11p_looks.js:574 (plan)；runtime/native/11p_bgcamB.js:49 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"bg":"spotlight","bgP":{"seed":690099499,"beam":false,"k":0.12262499710079283}}}
```

## bg.tvBars · テレビの帯

全画面背景图案：电视彩条 / TV color bars (tvBars)。标签：glitch, graphic, emotional；参数位置：bgP。

参数：k, n, seed, spd。

源码：runtime/native/11p_looks.js:593 (plan)；runtime/native/11p_bgcamB.js:49 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"bg":"tvBars","bgP":{"seed":690099499,"n":6,"spd":0.08393749565118924,"k":0.08424123281612991}}}
```

## bg.checker · 市松

全画面背景图案：棋盘格 / Checker (checker)。标签：graphic, pop；参数位置：bgP。

参数：k, n, rot, seed, spd。

源码：runtime/native/11p_looks.js:606 (plan)；runtime/native/11p_bgcamB.js:49 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"bg":"checker","bgP":{"seed":690099499,"n":7,"k":0.04942708212533035,"spd":0.2212061640806496,"rot":0}}}
```

## bg.bigChar · 巨大文字

全画面背景图案：巨大文字 / Oversized letters (bigChar)。标签：editorial, emotional, graphic, calm；参数位置：bgP。

参数：font, k, outline, seed, side。

源码：runtime/native/11p_looks.js:617 (plan)；runtime/native/11p_bgcamB.js:49 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"bg":"bigChar","bgP":{"seed":690099499,"side":1,"font":"display","outline":false,"k":0.07743441450642423}}}
```

## bg.speedLines · 集中線

全画面背景图案：集中线 / Speed lines (speedLines)。标签：pop, emotional, graphic；参数位置：bgP。

参数：clear, k, n, seed。

源码：runtime/native/11p_looks.js:630 (plan)；runtime/native/11p_bgcamB.js:49 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"bg":"speedLines","bgP":{"seed":690099499,"n":127,"k":0.23016666280105713,"clear":0.3484824656322598}}}
```

## bg.scanBars · 走査線の帯

全画面背景图案：扫描线带 / Scan bars (scanBars)。标签：calm, glitch, editorial；参数位置：bgP。

参数：k, n, seed, spd。

源码：runtime/native/11p_looks.js:644 (plan)；runtime/native/11p_bgcamB.js:49 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"bg":"scanBars","bgP":{"seed":690099499,"n":3,"spd":0.08262499710079282,"k":0.07424123281612993}}}
```

## bg.dotGrid · ドット格子

全画面背景图案：点状网格 / Dot grid (dotGrid)。标签：calm, editorial, graphic；参数位置：bgP。

参数：k, plus, seed, sp。

源码：runtime/native/11p_looks.js:657 (plan)；runtime/native/11p_bgcamB.js:49 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"bg":"dotGrid","bgP":{"seed":690099499,"sp":0.059832879398018124,"k":0.2501666628010571,"plus":false}}}
```

## bg.retroGrid · レトロ格子

全画面背景图案：复古网格 / Retro grid (retroGrid)。标签：pop, glitch, graphic；参数位置：bgP。

参数：hz, k, seed, spd, sun。

源码：runtime/native/11p_looks.js:675 (plan)；runtime/native/11p_bgcamB.js:49 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"bg":"retroGrid","bgP":{"seed":690099499,"hz":0.6193315175920725,"spd":0.5508333140052856,"sun":false,"k":0.4097376580256969}}}
```

## bg.bokehBg · ボケ玉

全画面背景图案：散景光点 / Bokeh (bokehBg)。标签：emotional, calm, pop；参数位置：bgP。

参数：k, n, seed。

源码：runtime/native/11p_looks.js:705 (plan)；runtime/native/11p_bgcamB.js:49 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"bg":"bokehBg","bgP":{"seed":690099499,"n":18,"k":0.21770832850132138}}}
```

## bg.particlesBg · 舞い上がる粒

全画面背景图案：飞舞粒子 / Floating particles (particlesBg)。标签：emotional, calm, pop；参数位置：bgP。

参数：k, n, seed, sq。

源码：runtime/native/11p_looks.js:722 (plan)；runtime/native/11p_bgcamB.js:49 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"bg":"particlesBg","bgP":{"seed":690099499,"n":90,"k":0.5254166570026427,"sq":false}}}
```

## bg.ripples · 波紋

全画面背景图案：涟漪 / Ripples (ripples)。标签：calm, emotional, graphic；参数位置：bgP。

参数：centre, k, life, seed。

源码：runtime/native/11p_looks.js:737 (plan)；runtime/native/11p_bgcamB.js:49 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"bg":"ripples","bgP":{"seed":690099499,"centre":false,"life":1.901666628010571,"k":0.32080410938709975}}}
```

## bg.polka · 水玉

全画面背景图案：圆点 / Polka (polka)。标签：pop, graphic；参数位置：bgP。

参数：acc, k, r, seed, sp。

源码：runtime/native/11p_looks.js:759 (plan)；runtime/native/11p_bgcamB.js:49 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"bg":"polka","bgP":{"seed":690099499,"sp":0.1470821984950453,"r":0.23770832850132137,"k":0.08424123281612991,"acc":true}}}
```

## bg.eqBars · 背景イコライザー

全画面背景图案：背景等化器 / Equalizer bars (eqBars)。标签：pop, glitch, graphic；参数位置：bgP。

参数：k, mode, n, seed, seg。

源码：runtime/native/11p_looks.js:770 (plan)；runtime/native/11p_bgcamB.js:49 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"bg":"eqBars","bgP":{"seed":690099499,"n":40,"mode":"bottom","seg":false,"k":0.10239069084404037}}}
```

## bg.borderFrame · 太枠

全画面背景图案：粗框 / Border frame (borderFrame)。标签：graphic, pop, editorial；参数位置：bgP。

参数：acc, dbl, m, seed, th。

源码：runtime/native/11p_looks.js:795 (plan)；runtime/native/11p_bgcamB.js:49 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"bg":"borderFrame","bgP":{"seed":690099499,"th":0.01941643969900906,"m":0.03754166570026428,"acc":false,"dbl":true}}}
```

## bg.letterbox · シネスコ帯

全画面背景图案：电影黑边 / Cinema letterbox (letterbox)。标签：emotional, editorial, calm；参数位置：bgP。

参数：k, line, seed。

源码：runtime/native/11p_looks.js:810 (plan)；runtime/native/11p_bgcamB.js:49 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"bg":"letterbox","bgP":{"seed":690099499,"k":0.10354109924752265,"line":true}}}
```

## bg.noiseField · ノイズの揺らぎ

全画面背景图案：噪点扰动 / Moving noise (noiseField)。标签：glitch, emotional；参数位置：bgP。

参数：k, n, seed, th。

源码：runtime/native/11p_looks.js:822 (plan)；runtime/native/11p_bgcamB.js:49 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"bg":"noiseField","bgP":{"seed":690099499,"n":20,"k":0.06319791497546248,"th":0.6408041093870998}}}
```

## cam.push · ゆっくり寄る

镜头移动与变形：缓慢推近 / Slow push in (push)。标签：calm, editorial, emotional, graphic, pop, glitch；参数位置：camP。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/05b_registry.js:30 (get)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"cam":"push","camP":{}}}
```

## cam.orbitDrift · 周回

镜头移动与变形：环绕 / Orbit drift (orbitDrift)。标签：calm, emotional, graphic；参数位置：camP。

参数：a0, dir, sp。

源码：runtime/native/11p_bgcamB.js:1145 (plan)；runtime/native/11p_bgcamB.js:1146 (get)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"cam":"orbitDrift","camP":{"dir":-1,"a0":4.6575241309776905,"sp":1.288541642506607}}}
```

## cam.barrelRoll · バレルロール

镜头移动与变形：桶滚 / Barrel roll (barrelRoll)。标签：pop, glitch, graphic；参数位置：camP。

参数：a, d, dir。

源码：runtime/native/11p_bgcamB.js:1152 (plan)；runtime/native/11p_bgcamB.js:1153 (get)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"cam":"barrelRoll","camP":{"dir":-1,"a":99.66575879603624,"d":0.46902082705171777}}}
```

## cam.pendulumSway · 振り子

镜头移动与变形：钟摆 / Pendulum sway (pendulumSway)。标签：emotional, pop, calm；参数位置：camP。

参数：a, per, side。

源码：runtime/native/11p_bgcamB.js:1161 (plan)；runtime/native/11p_bgcamB.js:1162 (get)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"cam":"pendulumSway","camP":{"a":2.352079598791897,"per":2.741643969900906,"side":1}}}
```

## cam.focusIn · ピント合わせ

镜头移动与变形：对焦 / Focus in (focusIn)。标签：emotional, calm, editorial；参数位置：camP。

参数：b, d。

源码：runtime/native/11p_bgcamB.js:1170 (plan)；runtime/native/11p_bgcamB.js:1171 (get)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"cam":"focusIn","camP":{"d":0.7070298495469616,"b":13.70821984950453}}}
```

## cam.rackFocus · ピンぼけ

镜头移动与变形：失焦 / Rack focus (rackFocus)。标签：emotional, calm, editorial；参数位置：camP。

参数：at, b。

源码：runtime/native/11p_bgcamB.js:1177 (plan)；runtime/native/11p_bgcamB.js:1178 (get)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"cam":"rackFocus","camP":{"b":7.070298495469615,"at":0.6741643969900906}}}
```

## cam.earthquake · 地震

镜头移动与变形：地震 / Earthquake (earthquake)。标签：glitch, pop, emotional；参数位置：camP。

参数：a, per。

源码：runtime/native/11p_bgcamB.js:1184 (plan)；runtime/native/11p_bgcamB.js:1185 (get)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"cam":"earthquake","camP":{"per":0.722524874622468,"a":1.0354109924752266}}}
```

## cam.floatNoise · 浮遊

镜头移动与变形：漂浮 / Floating camera (floatNoise)。标签：calm, emotional；参数位置：camP。

参数：f。

源码：runtime/native/11p_bgcamB.js:1192 (plan)；runtime/native/11p_bgcamB.js:1193 (get)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"cam":"floatNoise","camP":{"f":1.0760397993959487}}}
```

## cam.vertigo · めまい

镜头移动与变形：晕眩变焦 / Dolly zoom (vertigo)。标签：emotional, glitch；参数位置：camP。

参数：a, dir。

源码：runtime/native/11p_bgcamB.js:1200 (plan)；runtime/native/11p_bgcamB.js:1201 (get)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"cam":"vertigo","camP":{"dir":-1,"a":0.06483287939801813}}}
```

## cam.tiltDown · ティルトダウン

镜头移动与变形：镜头下摇 / Tilt down (tiltDown)。标签：calm, editorial, emotional；参数位置：camP。

参数：a。

源码：runtime/native/11p_bgcamB.js:1208 (plan)；runtime/native/11p_bgcamB.js:1209 (get)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"cam":"tiltDown","camP":{"a":0.029520795987918975}}}
```

## cam.spiralIn · 渦ズーム

镜头移动与变形：漩涡变焦 / Spiral zoom (spiralIn)。标签：pop, graphic, emotional；参数位置：camP。

参数：a0, d, dir。

源码：runtime/native/11p_bgcamB.js:1216 (plan)；runtime/native/11p_bgcamB.js:1217 (get)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"cam":"spiralIn","camP":{"dir":-1,"a0":4.6575241309776905,"d":1.0508333140052855}}}
```

## cam.snapPan · スナップパン

镜头移动与变形：快速横摇 / Snap pan (snapPan)。标签：pop, glitch, graphic；参数位置：camP。

参数：a, at, dir。

源码：runtime/native/11p_bgcamB.js:1231 (plan)；runtime/native/11p_bgcamB.js:1232 (get)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"cam":"snapPan","camP":{"dir":-1,"a":0.02993315175920725,"at":0.5065624927519821}}}
```

## cam.jelly · ぷるん

镜头移动与变形：果冻晃动 / Elastic wobble (jelly)。标签：pop, graphic；参数位置：camP。

参数：a, f。

源码：runtime/native/11p_bgcamB.js:1241 (plan)；runtime/native/11p_bgcamB.js:1242 (get)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"cam":"jelly","camP":{"a":0.058801989969797436,"f":22.449863819405437}}}
```

## cam.hrNervous · 怯えた手持ち

镜头移动与变形：惊恐手持 / Frightened Handheld (hrNervous)。标签：horror, glitch, emotional；参数位置：camP。

参数：f, jerk。

源码：runtime/native/11p_horror3.js:362 (plan)；runtime/native/11p_horror3.js:363 (get)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"cam":"hrNervous","camP":{"f":1.1760397993959486,"jerk":0.8966575879603624}}}
```

## cam.hrDutchSnap · 不意の傾き

镜头移动与变形：突然倾斜 / Sudden Tilt (hrDutchSnap)。标签：horror, emotional, graphic；参数位置：camP。

参数：a, at。

源码：runtime/native/11p_horror3.js:380 (plan)；runtime/native/11p_horror3.js:381 (get)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"cam":"hrDutchSnap","camP":{"at":0.5880198996979743,"a":4.334959145821631}}}
```

## cam.knReadPan · 読み追い

镜头移动与变形：随读平移 / Reading Pan (knReadPan)。标签：pop, graphic, editorial；参数位置：camP。

参数：a。

源码：runtime/native/11p_kinetic3.js:48 (plan)；runtime/native/11p_kinetic3.js:49 (get)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"cam":"knReadPan","camP":{"a":0.032900994984898714}}}
```

## cam.knTiltKick · 語で傾く

镜头移动与变形：逐词倾斜 / Tilt Kick (knTiltKick)。标签：pop, graphic, emotional；参数位置：camP。

参数：a, dir。

源码：runtime/native/11p_kinetic3.js:64 (plan)；runtime/native/11p_kinetic3.js:65 (get)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"cam":"knTiltKick","camP":{"dir":-1,"a":3.141643969900906}}}
```

## cam.knCardFlip · カード返し

镜头移动与变形：翻牌 / Card Flip (knCardFlip)。标签：pop, graphic；参数位置：camP。

参数：dir, vert。

源码：runtime/native/11p_kinetic3.js:78 (plan)；runtime/native/11p_kinetic3.js:79 (get)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"cam":"knCardFlip","camP":{"vert":false,"dir":-1}}}
```

## cam.knShearKick · シアーキック

镜头移动与变形：斜切弹动 / Shear Kick (knShearKick)。标签：pop, glitch, graphic；参数位置：camP。

参数：a。

源码：runtime/native/11p_kinetic3.js:91 (plan)；runtime/native/11p_kinetic3.js:92 (get)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"cam":"knShearKick","camP":{"a":7.070298495469615}}}
```

## cam.knJumpCut · ジャンプカット

镜头移动与变形：跳切 / Jump Cut (knJumpCut)。标签：pop, glitch, editorial；参数位置：camP。

参数：s0。

源码：runtime/native/11p_kinetic3.js:104 (plan)；runtime/native/11p_kinetic3.js:105 (get)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"cam":"knJumpCut","camP":{"s0":69}}}
```

## cam.knRushIn · 奥から突進

镜头移动与变形：从远处冲来 / Rush In (knRushIn)。标签：pop, graphic, emotional；参数位置：camP。

参数：r, z。

源码：runtime/native/11p_kinetic3.js:117 (plan)；runtime/native/11p_kinetic3.js:118 (get)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"cam":"knRushIn","camP":{"z":0.7290099498489871,"r":1.9331517592072487}}}
```

## cam.pullOut · 引き

镜头移动与变形：拉远 / Pull out (pullOut)。标签：calm, emotional, editorial；参数位置：camP。

参数：a。

源码：runtime/native/11p_looks.js:849 (plan)；runtime/native/11p_looks.js:850 (get)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"cam":"pullOut","camP":{"a":0.08070298495469615}}}
```

## cam.panL · 左パン

镜头移动与变形：向左横摇 / Pan left (panL)。标签：calm, editorial, emotional, graphic；参数位置：camP。

参数：a。

源码：runtime/native/11p_looks.js:853 (plan)；runtime/native/11p_looks.js:854 (get)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"cam":"panL","camP":{"a":0.024900994984898717}}}
```

## cam.panR · 右パン

镜头移动与变形：向右横摇 / Pan right (panR)。标签：calm, editorial, emotional, graphic；参数位置：camP。

参数：a。

源码：runtime/native/11p_looks.js:853 (plan)；runtime/native/11p_looks.js:858 (get)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"cam":"panR","camP":{"a":0.024900994984898717}}}
```

## cam.tiltUp · ティルト

镜头移动与变形：镜头上摇 / Tilt up (tiltUp)。标签：calm, emotional, editorial；参数位置：camP。

参数：a。

源码：runtime/native/11p_looks.js:861 (plan)；runtime/native/11p_looks.js:862 (get)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"cam":"tiltUp","camP":{"a":0.026900994984898716}}}
```

## cam.dutch · ダッチ

镜头移动与变形：斜角镜头 / Dutch angle (dutch)。标签：emotional, glitch, graphic；参数位置：camP。

参数：a, dir。

源码：runtime/native/11p_looks.js:865 (plan)；runtime/native/11p_looks.js:866 (get)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"cam":"dutch","camP":{"dir":-1,"a":3.983287939801812}}}
```

## cam.handheld · 手持ち

镜头移动与变形：手持 / Handheld (handheld)。标签：emotional, calm, editorial；参数位置：camP。

参数：f。

源码：runtime/native/11p_looks.js:869 (plan)；runtime/native/11p_looks.js:870 (get)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"cam":"handheld","camP":{"f":1.1450497492449359}}}
```

## cam.beatPunch · 拍でズーム

镜头移动与变形：随拍放大 / Zoom on beat (beatPunch)。标签：pop, glitch, graphic；参数位置：camP。

参数：a。

源码：runtime/native/11p_looks.js:878 (plan)；runtime/native/11p_looks.js:879 (get)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"cam":"beatPunch","camP":{"a":0.040351492477348073}}}
```

## cam.whipIn · ホイップイン

镜头移动与变形：急甩推入 / Whip in (whipIn)。标签：pop, glitch, graphic；参数位置：camP。

参数：d, dir。

源码：runtime/native/11p_looks.js:888 (plan)；runtime/native/11p_looks.js:889 (get)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"cam":"whipIn","camP":{"dir":"U","d":0.21933151759207248}}}
```

## cam.crashZoom · クラッシュズーム

镜头移动与变形：急速变焦 / Crash zoom (crashZoom)。标签：pop, glitch, emotional；参数位置：camP。

参数：a, at。

源码：runtime/native/11p_looks.js:897 (plan)；runtime/native/11p_looks.js:898 (get)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"cam":"crashZoom","camP":{"at":0.7035149247734808,"a":0.10224931909702718}}}
```

## cam.bounce · バウンス

镜头移动与变形：弹跳 / Bounce (bounce)。标签：pop, graphic；参数位置：camP。

参数：a。

源码：runtime/native/11p_looks.js:907 (plan)；runtime/native/11p_looks.js:908 (get)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"cam":"bounce","camP":{"a":0.058801989969797436}}}
```

## cam.roll · ロール

镜头移动与变形：滚转 / Roll (roll)。标签：emotional, calm, glitch；参数位置：camP。

参数：a, dir。

源码：runtime/native/11p_looks.js:911 (plan)；runtime/native/11p_looks.js:912 (get)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"cam":"roll","camP":{"dir":-1,"a":3.612465954851359}}}
```

## cam.driftDiag · 斜めドリフト

镜头移动与变形：斜向漂移 / Diagonal drift (driftDiag)。标签：calm, emotional, editorial, graphic；参数位置：camP。

参数：dx, dy。

源码：runtime/native/11p_looks.js:915 (plan)；runtime/native/11p_looks.js:916 (get)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"cam":"driftDiag","camP":{"dx":-1,"dy":-1}}}
```

## cam.shakeHard · 強い揺れ

镜头移动与变形：剧烈摇晃 / Strong shake (shakeHard)。标签：glitch, pop, emotional；参数位置：camP。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_looks.js:919 (get)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"cam":"shakeHard","camP":{}}}
```

## cam.dollyIn · ドリー

镜头移动与变形：推轨 / Dolly in (dollyIn)。标签：emotional, calm, editorial；参数位置：camP。

参数：a。

源码：runtime/native/11p_looks.js:927 (plan)；runtime/native/11p_looks.js:928 (get)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"cam":"dollyIn","camP":{"a":0.10070298495469615}}}
```

## cam.stepZoom · 段階ズーム

镜头移动与变形：分段变焦 / Stepped zoom (stepZoom)。标签：pop, graphic, glitch；参数位置：camP。

参数：a, n。

源码：runtime/native/11p_looks.js:948 (plan)；runtime/native/11p_looks.js:949 (get)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"cam":"stepZoom","camP":{"n":3,"a":0.04241643969900906}}}
```

## fx.slice · スライスグリッチ

画面效果事件：切片故障 / Slice glitch (slice)。标签：glitch；参数位置：agent.events: t/type/amp/dur。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：

调用示例：

```json
{"agent":{"events":[{"t":0.5,"type":"slice","amp":1,"dur":0.25}]}}
```

## fx.block · ブロックグリッチ

画面效果事件：区块故障 / Block glitch (block)。标签：glitch；参数位置：agent.events: t/type/amp/dur。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：

调用示例：

```json
{"agent":{"events":[{"t":0.5,"type":"block","amp":1,"dur":0.25}]}}
```

## fx.invert · 反転

画面效果事件：反转 / Invert (invert)。标签：glitch, graphic；参数位置：agent.events: t/type/amp/dur。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：

调用示例：

```json
{"agent":{"events":[{"t":0.5,"type":"invert","amp":1,"dur":0.25}]}}
```

## fx.flash · フラッシュ

画面效果事件：闪光 / Flash (flash)。标签：pop, emotional, glitch；参数位置：agent.events: t/type/amp/dur。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：

调用示例：

```json
{"agent":{"events":[{"t":0.5,"type":"flash","amp":1,"dur":0.25}]}}
```

## fx.zoom · ズームブラー

画面效果事件：缩放模糊 / Zoom blur (zoom)。标签：pop, emotional；参数位置：agent.events: t/type/amp/dur。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：

调用示例：

```json
{"agent":{"events":[{"t":0.5,"type":"zoom","amp":1,"dur":0.25}]}}
```

## fx.mosaic · モザイク

画面效果事件：马赛克 / Mosaic (mosaic)。标签：glitch；参数位置：agent.events: t/type/amp/dur。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：

调用示例：

```json
{"agent":{"events":[{"t":0.5,"type":"mosaic","amp":1,"dur":0.25}]}}
```

## fx.shake · 揺れ

画面效果事件：摇晃 / Shake (shake)。标签：pop, glitch, emotional；参数位置：agent.events: t/type/amp/dur。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：

调用示例：

```json
{"agent":{"events":[{"t":0.5,"type":"shake","amp":1,"dur":0.25}]}}
```

## fx.chroma · 色ズレの跳ね

画面效果事件：色彩错位跳动 / Chromatic jump (chroma)。标签：glitch, emotional, pop, graphic；参数位置：agent.events: t/type/amp/dur。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：

调用示例：

```json
{"agent":{"events":[{"t":0.5,"type":"chroma","amp":1,"dur":0.25}]}}
```

## fx.radialChroma · 放射色収差

画面效果事件：放射色差 / Radial color fringing (radialChroma)。标签：glitch, emotional, pop；参数位置：agent.events: t/type/amp/dur。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_fxB.js:66 (draw)

调用示例：

```json
{"agent":{"events":[{"t":0.5,"type":"radialChroma","amp":1,"dur":0.16666666666666666}]}}
```

## fx.bloomFlash · ブルーム

画面效果事件：光晕 / Bloom flash (bloomFlash)。标签：pop, emotional, calm；参数位置：agent.events: t/type/amp/dur。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_fxB.js:66 (draw)

调用示例：

```json
{"agent":{"events":[{"t":0.5,"type":"bloomFlash","amp":1,"dur":0.25}]}}
```

## fx.bulge · 魚眼

画面效果事件：鱼眼 / Fisheye distortion (bulge)。标签：pop, graphic, glitch；参数位置：agent.events: t/type/amp/dur。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_fxB.js:66 (draw)

调用示例：

```json
{"agent":{"events":[{"t":0.5,"type":"bulge","amp":1,"dur":0.20833333333333334}]}}
```

## fx.pixelSort · ピクセルソート

画面效果事件：像素排序 / Pixel sort (pixelSort)。标签：glitch；参数位置：agent.events: t/type/amp/dur。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_fxB.js:66 (draw)

调用示例：

```json
{"agent":{"events":[{"t":0.5,"type":"pixelSort","amp":1,"dur":0.125}]}}
```

## fx.interlace · インターレース

画面效果事件：交错扫描 / Interlace (interlace)。标签：glitch, emotional；参数位置：agent.events: t/type/amp/dur。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_fxB.js:66 (draw)

调用示例：

```json
{"agent":{"events":[{"t":0.5,"type":"interlace","amp":1,"dur":0.125}]}}
```

## fx.macroBlock · ブロックノイズ

画面效果事件：区块噪点 / Compression blocks (macroBlock)。标签：glitch；参数位置：agent.events: t/type/amp/dur。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_fxB.js:66 (draw)

调用示例：

```json
{"agent":{"events":[{"t":0.5,"type":"macroBlock","amp":1,"dur":0.125}]}}
```

## fx.halftone · 網点

画面效果事件：网点 / Halftone (halftone)。标签：pop, graphic, editorial；参数位置：agent.events: t/type/amp/dur。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_fxB.js:66 (draw)

调用示例：

```json
{"agent":{"events":[{"t":0.5,"type":"halftone","amp":1,"dur":0.20833333333333334}]}}
```

## fx.duotone · ダブルトーン

画面效果事件：双色调 / Duotone (duotone)。标签：pop, emotional, graphic；参数位置：agent.events: t/type/amp/dur。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_fxB.js:66 (draw)

调用示例：

```json
{"agent":{"events":[{"t":0.5,"type":"duotone","amp":1,"dur":0.16666666666666666}]}}
```

## fx.ditherBit · 1bitディザ

画面效果事件：1 位抖动 / 1 bit dither (ditherBit)。标签：glitch, graphic, pop；参数位置：agent.events: t/type/amp/dur。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_fxB.js:66 (draw)

调用示例：

```json
{"agent":{"events":[{"t":0.5,"type":"ditherBit","amp":1,"dur":0.125}]}}
```

## fx.rotateSnap · 傾きスナップ

画面效果事件：角度急转 / Angle snap (rotateSnap)。标签：pop, graphic, glitch；参数位置：agent.events: t/type/amp/dur。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_fxB.js:66 (draw)

调用示例：

```json
{"agent":{"events":[{"t":0.5,"type":"rotateSnap","amp":1,"dur":0.20833333333333334}]}}
```

## fx.echoFrames · 残像エコー

画面效果事件：残影回声 / Frame echoes (echoFrames)。标签：emotional, pop, glitch；参数位置：agent.events: t/type/amp/dur。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_fxB.js:66 (draw)

调用示例：

```json
{"agent":{"events":[{"t":0.5,"type":"echoFrames","amp":1,"dur":0.25}]}}
```

## fx.kaleido · 万華鏡

画面效果事件：万花筒 / Kaleidoscope (kaleido)。标签：pop, graphic, emotional；参数位置：agent.events: t/type/amp/dur。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_fxB.js:66 (draw)

调用示例：

```json
{"agent":{"events":[{"t":0.5,"type":"kaleido","amp":1,"dur":0.16666666666666666}]}}
```

## fx.bandInvert · 帯反転

画面效果事件：带状反转 / Inverted band (bandInvert)。标签：glitch, graphic；参数位置：agent.events: t/type/amp/dur。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_fxB.js:66 (draw)

调用示例：

```json
{"agent":{"events":[{"t":0.5,"type":"bandInvert","amp":1,"dur":0.125}]}}
```

## fx.lightRays · 光芒

画面效果事件：光芒 / Light rays (lightRays)。标签：emotional, pop, calm；参数位置：agent.events: t/type/amp/dur。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_fxB.js:66 (draw)

调用示例：

```json
{"agent":{"events":[{"t":0.5,"type":"lightRays","amp":1,"dur":0.3333333333333333}]}}
```

## fx.anamorphic · アナモフレア

画面效果事件：横向光斑 / Anamorphic flare (anamorphic)。标签：emotional, pop, calm；参数位置：agent.events: t/type/amp/dur。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_fxB.js:66 (draw)

调用示例：

```json
{"agent":{"events":[{"t":0.5,"type":"anamorphic","amp":1,"dur":0.2916666666666667}]}}
```

## fx.heartbeat · 鼓動

画面效果事件：心跳 / Heartbeat (heartbeat)。标签：emotional, calm；参数位置：agent.events: t/type/amp/dur。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_fxB.js:66 (draw)

调用示例：

```json
{"agent":{"events":[{"t":0.5,"type":"heartbeat","amp":1,"dur":0.4166666666666667}]}}
```

## fx.tvStatic · 砂嵐

画面效果事件：雪花噪点 / TV static (tvStatic)。标签：glitch, emotional；参数位置：agent.events: t/type/amp/dur。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_fxB.js:66 (draw)

调用示例：

```json
{"agent":{"events":[{"t":0.5,"type":"tvStatic","amp":1,"dur":0.20833333333333334}]}}
```

## fx.dustScratches · フィルム傷

画面效果事件：胶片划痕 / Film scratches (dustScratches)。标签：emotional, calm, editorial；参数位置：agent.events: t/type/amp/dur。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_fxB.js:66 (draw)

调用示例：

```json
{"agent":{"events":[{"t":0.5,"type":"dustScratches","amp":1,"dur":0.3333333333333333}]}}
```

## fx.filmAdvance · フィルム送り

画面效果事件：胶片滚动 / Film advance (filmAdvance)。标签：emotional, editorial, calm；参数位置：agent.events: t/type/amp/dur。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_fxB.js:66 (draw)

调用示例：

```json
{"agent":{"events":[{"t":0.5,"type":"filmAdvance","amp":1,"dur":0.375}]}}
```

## fx.perspectiveTilt · パース揺れ

画面效果事件：透视摇晃 / Perspective tilt (perspectiveTilt)。标签：pop, graphic, emotional；参数位置：agent.events: t/type/amp/dur。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_fxB.js:66 (draw)

调用示例：

```json
{"agent":{"events":[{"t":0.5,"type":"perspectiveTilt","amp":1,"dur":0.3333333333333333}]}}
```

## fx.ripple · 波紋

画面效果事件：涟漪 / Ripple (ripple)。标签：emotional, calm, pop；参数位置：agent.events: t/type/amp/dur。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_fxB.js:66 (draw)

调用示例：

```json
{"agent":{"events":[{"t":0.5,"type":"ripple","amp":1,"dur":0.4166666666666667}]}}
```

## fx.focusLines · 集中線

画面效果事件：集中线 / Focus lines (focusLines)。标签：pop, graphic, emotional；参数位置：agent.events: t/type/amp/dur。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_fxB.js:66 (draw)

调用示例：

```json
{"agent":{"events":[{"t":0.5,"type":"focusLines","amp":1,"dur":0.25}]}}
```

## fx.speedLines · 流線

画面效果事件：速度线 / Speed lines (speedLines)。标签：pop, graphic；参数位置：agent.events: t/type/amp/dur。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_fxB.js:66 (draw)

调用示例：

```json
{"agent":{"events":[{"t":0.5,"type":"speedLines","amp":1,"dur":0.25}]}}
```

## fx.starGlint · キラッ

画面效果事件：星芒闪光 / Star glint (starGlint)。标签：pop, emotional；参数位置：agent.events: t/type/amp/dur。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_fxB.js:66 (draw)

调用示例：

```json
{"agent":{"events":[{"t":0.5,"type":"starGlint","amp":1,"dur":0.375}]}}
```

## fx.colorBars · カラーバー

画面效果事件：彩条 / Color bars (colorBars)。标签：pop, graphic, glitch；参数位置：agent.events: t/type/amp/dur。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_fxB.js:66 (draw)

调用示例：

```json
{"agent":{"events":[{"t":0.5,"type":"colorBars","amp":1,"dur":0.25}]}}
```

## fx.zoomStutter · ズーム連打

画面效果事件：连续缩放 / Zoom stutter (zoomStutter)。标签：pop, graphic, glitch；参数位置：agent.events: t/type/amp/dur。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_fxB.js:66 (draw)

调用示例：

```json
{"agent":{"events":[{"t":0.5,"type":"zoomStutter","amp":1,"dur":0.25}]}}
```

## fx.negativeRing · 反転リング

画面效果事件：反转圆环 / Inverted ring (negativeRing)。标签：graphic, pop, glitch；参数位置：agent.events: t/type/amp/dur。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_fxB.js:66 (draw)

调用示例：

```json
{"agent":{"events":[{"t":0.5,"type":"negativeRing","amp":1,"dur":0.25}]}}
```

## fx.edgeDetect · 輪郭抽出

画面效果事件：边缘侦测 / Edge detect (edgeDetect)。标签：graphic, glitch, editorial；参数位置：agent.events: t/type/amp/dur。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_fxB.js:66 (draw)

调用示例：

```json
{"agent":{"events":[{"t":0.5,"type":"edgeDetect","amp":1,"dur":0.16666666666666666}]}}
```

## fx.shatter · ガラス割れ

画面效果事件：玻璃碎裂 / Glass shatter (shatter)。标签：glitch, pop, emotional；参数位置：agent.events: t/type/amp/dur。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_fxB.js:66 (draw)

调用示例：

```json
{"agent":{"events":[{"t":0.5,"type":"shatter","amp":1,"dur":0.3333333333333333}]}}
```

## fx.defocus · ピンぼけ

画面效果事件：失焦 / Out of focus (defocus)。标签：emotional, calm, editorial；参数位置：agent.events: t/type/amp/dur。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_fxB.js:66 (draw)

调用示例：

```json
{"agent":{"events":[{"t":0.5,"type":"defocus","amp":1,"dur":0.3333333333333333}]}}
```

## fx.snapshot · シャッター

画面效果事件：快门 / Snapshot (snapshot)。标签：pop, emotional, editorial；参数位置：agent.events: t/type/amp/dur。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_fxB.js:66 (draw)

调用示例：

```json
{"agent":{"events":[{"t":0.5,"type":"snapshot","amp":1,"dur":0.4166666666666667}]}}
```

## fx.squash · 伸縮

画面效果事件：伸缩 / Squash (squash)。标签：pop, graphic；参数位置：agent.events: t/type/amp/dur。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_fxB.js:66 (draw)

调用示例：

```json
{"agent":{"events":[{"t":0.5,"type":"squash","amp":1,"dur":0.25}]}}
```

## fx.scanBar · スキャン

画面效果事件：扫描 / Scan bar (scanBar)。标签：graphic, editorial, glitch；参数位置：agent.events: t/type/amp/dur。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_fxB.js:66 (draw)

调用示例：

```json
{"agent":{"events":[{"t":0.5,"type":"scanBar","amp":1,"dur":0.3333333333333333}]}}
```

## fx.loopScroll · 横ループ

画面效果事件：横向循环 / Loop scroll (loopScroll)。标签：pop, graphic, glitch；参数位置：agent.events: t/type/amp/dur。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_fxB.js:66 (draw)

调用示例：

```json
{"agent":{"events":[{"t":0.5,"type":"loopScroll","amp":1,"dur":0.25}]}}
```

## fx.hrSubliminal · サブリミナル

画面效果事件：潜意识闪现 / Subliminal (hrSubliminal)。标签：horror, glitch；参数位置：agent.events: t/type/amp/dur。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_fxB.js:66 (draw)

调用示例：

```json
{"agent":{"events":[{"t":0.5,"type":"hrSubliminal","amp":1,"dur":0.08333333333333333}]}}
```

## fx.hrSignalLoss · 映像の途切れ

画面效果事件：信号中断 / Signal Loss (hrSignalLoss)。标签：horror, glitch, editorial；参数位置：agent.events: t/type/amp/dur。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_fxB.js:66 (draw)

调用示例：

```json
{"agent":{"events":[{"t":0.5,"type":"hrSignalLoss","amp":1,"dur":0.375}]}}
```

## fx.hrPassingShadow · 横切る影

画面效果事件：掠过的影子 / Passing Shadow (hrPassingShadow)。标签：horror, emotional；参数位置：agent.events: t/type/amp/dur。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_fxB.js:66 (draw)

调用示例：

```json
{"agent":{"events":[{"t":0.5,"type":"hrPassingShadow","amp":1,"dur":0.20833333333333334}]}}
```

## fx.panelWipe · パネルワイプ

画面效果事件：面板擦除 / Panel wipe (panelWipe)。标签：pop, graphic；参数位置：agent.events: t/type/amp/dur。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_looks.js:966 (draw)

调用示例：

```json
{"agent":{"events":[{"t":0.5,"type":"panelWipe","amp":1,"dur":0.20833333333333334}]}}
```

## fx.irisTrans · アイリス

画面效果事件：光圈 / Iris trans (irisTrans)。标签：pop, editorial；参数位置：agent.events: t/type/amp/dur。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_looks.js:966 (draw)

调用示例：

```json
{"agent":{"events":[{"t":0.5,"type":"irisTrans","amp":1,"dur":0.3333333333333333}]}}
```

## fx.doors · 扉

画面效果事件：门 / Doors (doors)。标签：graphic, pop；参数位置：agent.events: t/type/amp/dur。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_looks.js:966 (draw)

调用示例：

```json
{"agent":{"events":[{"t":0.5,"type":"doors","amp":1,"dur":0.3333333333333333}]}}
```

## fx.blindsTrans · ブラインド

画面效果事件：百叶窗 / Blinds trans (blindsTrans)。标签：graphic, editorial；参数位置：agent.events: t/type/amp/dur。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_looks.js:966 (draw)

调用示例：

```json
{"agent":{"events":[{"t":0.5,"type":"blindsTrans","amp":1,"dur":0.25}]}}
```

## fx.rgbSplit · RGB分離

画面效果事件：RGB 分离 / RGB separation (rgbSplit)。标签：glitch, emotional；参数位置：agent.events: t/type/amp/dur。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_looks.js:966 (draw)

调用示例：

```json
{"agent":{"events":[{"t":0.5,"type":"rgbSplit","amp":1,"dur":0.16666666666666666}]}}
```

## fx.smear · 横スミア

画面效果事件：横向拖影 / Smear (smear)。标签：glitch；参数位置：agent.events: t/type/amp/dur。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_looks.js:966 (draw)

调用示例：

```json
{"agent":{"events":[{"t":0.5,"type":"smear","amp":1,"dur":0.125}]}}
```

## fx.vhsRoll · VHSロール

画面效果事件：VHS 滚动 / VHS roll (vhsRoll)。标签：glitch, emotional；参数位置：agent.events: t/type/amp/dur。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_looks.js:966 (draw)

调用示例：

```json
{"agent":{"events":[{"t":0.5,"type":"vhsRoll","amp":1,"dur":0.25}]}}
```

## fx.trackingNoise · トラッキングノイズ

画面效果事件：磁道噪点 / Tracking noise (trackingNoise)。标签：glitch, emotional；参数位置：agent.events: t/type/amp/dur。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_looks.js:966 (draw)

调用示例：

```json
{"agent":{"events":[{"t":0.5,"type":"trackingNoise","amp":1,"dur":0.16666666666666666}]}}
```

## fx.mirrorFlash · ミラー

画面效果事件：镜像 / Mirror flash (mirrorFlash)。标签：glitch, graphic；参数位置：agent.events: t/type/amp/dur。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_looks.js:966 (draw)

调用示例：

```json
{"agent":{"events":[{"t":0.5,"type":"mirrorFlash","amp":1,"dur":0.08333333333333333}]}}
```

## fx.strobe · ストロボ

画面效果事件：频闪 / Strobe (strobe)。标签：glitch, pop；参数位置：agent.events: t/type/amp/dur。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_looks.js:966 (draw)

调用示例：

```json
{"agent":{"events":[{"t":0.5,"type":"strobe","amp":1,"dur":0.16666666666666666}]}}
```

## fx.posterize · ポスタリゼ

画面效果事件：色调分离 / Posterization (posterize)。标签：glitch, pop, graphic；参数位置：agent.events: t/type/amp/dur。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_looks.js:966 (draw)

调用示例：

```json
{"agent":{"events":[{"t":0.5,"type":"posterize","amp":1,"dur":0.125}]}}
```

## fx.hueShift · 色相シフト

画面效果事件：色相偏移 / Hue shift (hueShift)。标签：glitch, pop, emotional；参数位置：agent.events: t/type/amp/dur。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_looks.js:966 (draw)

调用示例：

```json
{"agent":{"events":[{"t":0.5,"type":"hueShift","amp":1,"dur":0.125}]}}
```

## fx.tileShift · タイルずらし

画面效果事件：磁砖错位 / Tile shift (tileShift)。标签：glitch, graphic；参数位置：agent.events: t/type/amp/dur。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_looks.js:966 (draw)

调用示例：

```json
{"agent":{"events":[{"t":0.5,"type":"tileShift","amp":1,"dur":0.125}]}}
```

## fx.filmBurn · フィルム焼け

画面效果事件：胶片烧灼 / Film burn (filmBurn)。标签：emotional, calm, editorial；参数位置：agent.events: t/type/amp/dur。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_looks.js:966 (draw)

调用示例：

```json
{"agent":{"events":[{"t":0.5,"type":"filmBurn","amp":1,"dur":0.2916666666666667}]}}
```

## fx.whipBlur · ホイップブラー

画面效果事件：急甩模糊 / Whip blur (whipBlur)。标签：pop, graphic, emotional；参数位置：agent.events: t/type/amp/dur。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_looks.js:966 (draw)

调用示例：

```json
{"agent":{"events":[{"t":0.5,"type":"whipBlur","amp":1,"dur":0.20833333333333334}]}}
```

## fx.blackFrame · 黒コマ

画面效果事件：黑画格 / Black frame (blackFrame)。标签：editorial, emotional, glitch；参数位置：agent.events: t/type/amp/dur。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_looks.js:966 (draw)

调用示例：

```json
{"agent":{"events":[{"t":0.5,"type":"blackFrame","amp":1,"dur":0.08333333333333333}]}}
```

## fx.whiteFrame · 白コマ

画面效果事件：白画格 / White frame (whiteFrame)。标签：emotional, pop；参数位置：agent.events: t/type/amp/dur。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_looks.js:966 (draw)

调用示例：

```json
{"agent":{"events":[{"t":0.5,"type":"whiteFrame","amp":1,"dur":0.08333333333333333}]}}
```

## fx.gridRepeat · 画面分割

画面效果事件：分割画面 / Grid repeat (gridRepeat)。标签：pop, graphic, glitch；参数位置：agent.events: t/type/amp/dur。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_looks.js:966 (draw)

调用示例：

```json
{"agent":{"events":[{"t":0.5,"type":"gridRepeat","amp":1,"dur":0.125}]}}
```

## fx.waveWarp · 波ゆがみ

画面效果事件：波浪扭曲 / Wave warp (waveWarp)。标签：emotional, glitch；参数位置：agent.events: t/type/amp/dur。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_looks.js:966 (draw)

调用示例：

```json
{"agent":{"events":[{"t":0.5,"type":"waveWarp","amp":1,"dur":0.20833333333333334}]}}
```

## fx.pixelDrift · ピクセルずれ

画面效果事件：像素偏移 / Pixel drift (pixelDrift)。标签：glitch；参数位置：agent.events: t/type/amp/dur。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_looks.js:966 (draw)

调用示例：

```json
{"agent":{"events":[{"t":0.5,"type":"pixelDrift","amp":1,"dur":0.125}]}}
```

## fx.zoomPunch · ズームパンチ

画面效果事件：缩放重击 / Zoom punch (zoomPunch)。标签：pop, graphic, glitch；参数位置：agent.events: t/type/amp/dur。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_looks.js:966 (draw)

调用示例：

```json
{"agent":{"events":[{"t":0.5,"type":"zoomPunch","amp":1,"dur":0.16666666666666666}]}}
```

## fx.lightSweep · 光の筋

画面效果事件：光束扫过 / Light sweep (lightSweep)。标签：pop, emotional, calm；参数位置：agent.events: t/type/amp/dur。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_looks.js:966 (draw)

调用示例：

```json
{"agent":{"events":[{"t":0.5,"type":"lightSweep","amp":1,"dur":0.2916666666666667}]}}
```

## fx.crtOff · ブラウン管オフ

画面效果事件：映像管关机 / CRT powers off (crtOff)。标签：glitch, emotional；参数位置：agent.events: t/type/amp/dur。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_looks.js:966 (draw)

调用示例：

```json
{"agent":{"events":[{"t":0.5,"type":"crtOff","amp":1,"dur":0.3333333333333333}]}}
```

## fx.splitSlide · 上下スライド

画面效果事件：上下滑移 / Split slide (splitSlide)。标签：graphic, pop, glitch；参数位置：agent.events: t/type/amp/dur。

参数：无组件专属可序列化参数；使用公共时间、运动和视觉控制。

源码：runtime/native/11p_looks.js:966 (draw)

调用示例：

```json
{"agent":{"events":[{"t":0.5,"type":"splitSlide","amp":1,"dur":0.25}]}}
```

## trans.hrStaticCut · 砂嵐カット

前后两个镜头之间的转场：杂讯转场 / Static Cut (hrStaticCut)。标签：horror, glitch；参数位置：transP。

参数：roll。

源码：runtime/native/11p_horror3.js:464 (plan)；runtime/native/11p_horror3.js:455 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"trans":"hrStaticCut","transP":{"roll":false}}}
```

## trans.hrBlink · まばたき

前后两个镜头之间的转场：眨眼 / Blink (hrBlink)。标签：horror, emotional；参数位置：transP。

参数：half。

源码：runtime/native/11p_horror3.js:480 (plan)；runtime/native/11p_horror3.js:455 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"trans":"hrBlink","transP":{"half":false}}}
```

## trans.knCornerSwing · コーナースイング

前后两个镜头之间的转场：转角回旋 / Corner Swing (knCornerSwing)。标签：pop, graphic；参数位置：transP。

参数：c。

源码：runtime/native/11p_kinetic3.js:141 (plan)；runtime/native/11p_kinetic3.js:129 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"trans":"knCornerSwing","transP":{"c":2}}}
```

## trans.knStutterCut · 刻みカット

前后两个镜头之间的转场：节奏跳切 / Stutter Cut (knStutterCut)。标签：pop, glitch, graphic；参数位置：transP。

参数：o, z。

源码：runtime/native/11p_kinetic3.js:165 (plan)；runtime/native/11p_kinetic3.js:129 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"trans":"knStutterCut","transP":{"z":1.0845049749244937,"o":0.031124659548513595}}}
```

## trans.knStripSlam · 短冊スラム

前后两个镜头之间的转场：条幅落下 / Strip Slam (knStripSlam)。标签：pop, graphic；参数位置：transP。

参数：n, rev, up。

源码：runtime/native/11p_kinetic3.js:182 (plan)；runtime/native/11p_kinetic3.js:129 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"trans":"knStripSlam","transP":{"n":5,"rev":false,"up":false}}}
```

## trans.wipe · エッジワイプ

前后两个镜头之间的转场：边缘擦除 / Edge wipe (wipe)。标签：graphic, editorial, pop；参数位置：transP。

参数：dir。

源码：runtime/native/11p_treattrans.js:755 (plan)；runtime/native/11p_kinetic3.js:129 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"trans":"wipe","transP":{"dir":"R"}}}
```

## trans.diagonalWipe · 斜め帯ワイプ

前后两个镜头之间的转场：斜带擦除 / Diagonal band wipe (diagonalWipe)。标签：pop, graphic；参数位置：transP。

参数：k, rev。

源码：runtime/native/11p_treattrans.js:774 (plan)；runtime/native/11p_kinetic3.js:129 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"trans":"diagonalWipe","transP":{"k":-0.47252487462246795,"rev":true}}}
```

## trans.clockWipe · クロックワイプ

前后两个镜头之间的转场：时钟擦除 / Clock wipe (clockWipe)。标签：graphic, pop, editorial；参数位置：transP。

参数：a0, dir。

源码：runtime/native/11p_treattrans.js:793 (plan)；runtime/native/11p_kinetic3.js:129 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"trans":"clockWipe","transP":{"dir":1,"a0":0}}}
```

## trans.irisOpen · アイリスイン

前后两个镜头之间的转场：光圈开启 / Iris opens (irisOpen)。标签：emotional, pop, editorial；参数位置：transP。

参数：x, y。

源码：runtime/native/11p_treattrans.js:807 (plan)；runtime/native/11p_kinetic3.js:129 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"trans":"irisOpen","transP":{"x":0.5456238796375692,"y":0.5483287939801812}}}
```

## trans.pushSlide · プッシュ

前后两个镜头之间的转场：推移 / Push (pushSlide)。标签：graphic, pop, editorial；参数位置：transP。

参数：dir。

源码：runtime/native/11p_treattrans.js:822 (plan)；runtime/native/11p_kinetic3.js:129 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"trans":"pushSlide","transP":{"dir":"R"}}}
```

## trans.cover · カバー

前后两个镜头之间的转场：覆盖 / Cover (cover)。标签：editorial, graphic, calm；参数位置：transP。

参数：dir。

源码：runtime/native/11p_treattrans.js:834 (plan)；runtime/native/11p_kinetic3.js:129 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"trans":"cover","transP":{"dir":"U"}}}
```

## trans.uncover · アンカバー

前后两个镜头之间的转场：揭开 / Uncover (uncover)。标签：editorial, calm, emotional；参数位置：transP。

参数：dir。

源码：runtime/native/11p_treattrans.js:852 (plan)；runtime/native/11p_kinetic3.js:129 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"trans":"uncover","transP":{"dir":"U"}}}
```

## trans.zoomThrough · ズームスルー

前后两个镜头之间的转场：穿越缩放 / Zoom through (zoomThrough)。标签：pop, emotional, glitch；参数位置：transP。

参数：z。

源码：runtime/native/11p_treattrans.js:870 (plan)；runtime/native/11p_kinetic3.js:129 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"trans":"zoomThrough","transP":{"z":1.9830696489429103}}}
```

## trans.doorsOpen · 観音開き

前后两个镜头之间的转场：对开门 / Double doors (doorsOpen)。标签：graphic, pop, emotional；参数位置：transP。

参数：vert。

源码：runtime/native/11p_treattrans.js:883 (plan)；runtime/native/11p_kinetic3.js:129 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"trans":"doorsOpen","transP":{"vert":false}}}
```

## trans.blinds · ブラインド転換

前后两个镜头之间的转场：百叶窗转场 / Blinds (blinds)。标签：graphic, editorial, calm；参数位置：transP。

参数：n, rev, vert。

源码：runtime/native/11p_treattrans.js:904 (plan)；runtime/native/11p_kinetic3.js:129 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"trans":"blinds","transP":{"n":11,"vert":false,"rev":true}}}
```

## trans.checker · 市松転換

前后两个镜头之间的转场：棋盘格转场 / Checkerboard (checker)。标签：pop, graphic；参数位置：transP。

参数：n, rev。

源码：runtime/native/11p_treattrans.js:921 (plan)；runtime/native/11p_kinetic3.js:129 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"trans":"checker","transP":{"n":6,"rev":false}}}
```

## trans.blockDissolve · ブロック崩し

前后两个镜头之间的转场：方块崩解 / Block dissolve (blockDissolve)。标签：glitch, graphic；参数位置：transP。

参数：n, side。

源码：runtime/native/11p_treattrans.js:940 (plan)；runtime/native/11p_kinetic3.js:129 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"trans":"blockDissolve","transP":{"n":10,"side":1}}}
```

## trans.whipPan · ホイップパン

前后两个镜头之间的转场：急甩横摇 / Whip pan (whipPan)。标签：pop, emotional, glitch；参数位置：transP。

参数：dir, vert。

源码：runtime/native/11p_treattrans.js:958 (plan)；runtime/native/11p_kinetic3.js:129 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"trans":"whipPan","transP":{"dir":1,"vert":false}}}
```

## trans.spinOut · 回転アウト

前后两个镜头之间的转场：旋转转出 / Spin out (spinOut)。标签：pop, glitch；参数位置：transP。

参数：rot。

源码：runtime/native/11p_treattrans.js:975 (plan)；runtime/native/11p_kinetic3.js:129 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"trans":"spinOut","transP":{"rot":-169.00994984898716}}}
```

## trans.inkBlob · インク

前后两个镜头之间的转场：墨渍 / Ink blot (inkBlob)。标签：emotional, calm, pop；参数位置：transP。

参数：x, y。

源码：runtime/native/11p_treattrans.js:1004 (plan)；runtime/native/11p_kinetic3.js:129 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"trans":"inkBlob","transP":{"x":0.18866303518414496,"y":0.2869649312645197}}}
```

## trans.shatterTiles · タイル崩落

前后两个镜头之间的转场：磁砖崩落 / Shattering tiles (shatterTiles)。标签：glitch, pop, emotional；参数位置：transP。

参数：n, x, y。

源码：runtime/native/11p_treattrans.js:1024 (plan)；runtime/native/11p_kinetic3.js:129 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"trans":"shatterTiles","transP":{"n":8,"x":0.5966575879603624,"y":0.4131249855039641}}}
```

## trans.sliceShift · 短冊ずらし

前后两个镜头之间的转场：长条错位 / Sliding strips (sliceShift)。标签：glitch, graphic, pop；参数位置：transP。

参数：n, vert。

源码：runtime/native/11p_treattrans.js:1054 (plan)；runtime/native/11p_kinetic3.js:129 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"trans":"sliceShift","transP":{"n":8,"vert":false}}}
```

## trans.cubeTurn · キューブ

前后两个镜头之间的转场：立方体 / Cube turn (cubeTurn)。标签：graphic, pop；参数位置：transP。

参数：dir。

源码：runtime/native/11p_treattrans.js:1069 (plan)；runtime/native/11p_kinetic3.js:129 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"trans":"cubeTurn","transP":{"dir":-1}}}
```

## trans.flashCross · フラッシュ転換

前后两个镜头之间的转场：闪光转场 / Flash cut (flashCross)。标签：emotional, pop, calm；参数位置：transP。

参数：c。

源码：runtime/native/11p_treattrans.js:1100 (plan)；runtime/native/11p_kinetic3.js:129 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"trans":"flashCross","transP":{"c":"white"}}}
```

## trans.pixelate · モザイク転換

前后两个镜头之间的转场：马赛克转场 / Pixel transition (pixelate)。标签：glitch, pop；参数位置：transP。

参数：k。

源码：runtime/native/11p_treattrans.js:1113 (plan)；runtime/native/11p_kinetic3.js:129 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"trans":"pixelate","transP":{"k":15.14059699093923}}}
```

## trans.tyRuleWipe · 罫線ワイプ

前后两个镜头之间的转场：格线擦换 / Ruled Line Wipe (tyRuleWipe)。标签：editorial, graphic, calm；参数位置：transP。

参数：n, rtl。

源码：runtime/native/11p_typo3.js:391 (plan)；runtime/native/11p_kinetic3.js:129 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"trans":"tyRuleWipe","transP":{"n":11,"rtl":false}}}
```

## trans.tyGridCells · 升目送り

前后两个镜头之间的转场：稿纸格填入 / Grid Cell Fill (tyGridCells)。标签：editorial, graphic；参数位置：transP。

参数：rows, tate。

源码：runtime/native/11p_typo3.js:415 (plan)；runtime/native/11p_kinetic3.js:129 (draw)

调用示例：

```json
{"op":"cut","line":0,"cut":0,"patch":{"trans":"tyGridCells","transP":{"rows":6,"tate":false}}}
```

# 视觉风格

- style.noir: ノワール・クロマ — 黒地・白文字・シアン/琥珀の色ズレ；调用：`{"style":"noir"}`
- style.crimson: クリムゾン・シグナル — 深紅地・白と黒の二段組み・データ破損；调用：`{"style":"crimson"}`
- style.caution: コーション — 黄色地・赤と青のアクセント・計器UI；调用：`{"style":"caution"}`
- style.magenta: ポップ・マゼンタ — ショッキングピンク×白・太丸ゴシック・引き出し線；调用：`{"style":"magenta"}`
- style.paper: ペーパー・インク — 紙の質感・藍とマゼンタ・明朝の残像；调用：`{"style":"paper"}`
- style.hud: ダークHUD — 炭色地・細線フレーム・橙の差し色・日食；调用：`{"style":"hud"}`
- style.mint: ミント・ターミナル — 黒×青緑×ライム・ラベル貼り・スリットスキャン；调用：`{"style":"mint"}`
- style.specimen: スペシメン — 墨色地・明朝・辞書の注釈と引き出し線；调用：`{"style":"specimen"}`
- style.transit: トランジット — オリーブ×黄色・矢印と標識・網点；调用：`{"style":"transit"}`
- style.blueprint: ブループリント — 鮮青×白×黒・図形コラージュ・斜め帯；调用：`{"style":"blueprint"}`
- style.rouge: ルージュ・グラデ — 明るいグレー地・赤のグラデーション・カプセル；调用：`{"style":"rouge"}`
- style.mono: モノ・RGB — 灰色の空間・白い明朝・強いRGB分離・座標の円；调用：`{"style":"mono"}`
- style.hrRuin: 廃墟 — 褪せた緑灰色・錆の赤・明朝の残響；调用：`{"style":"hrRuin"}`
- style.hrNightRec: 深夜の録画 — 真っ黒な画面・監視映像の白と赤・砂嵐；调用：`{"style":"hrNightRec"}`
- style.hrCurse: 呪いの手紙 — 黄ばんだ便箋・褪せた墨・暗い赤の書き込み；调用：`{"style":"hrCurse"}`
- style.sakura: サクラ — 淡い桜色・深い梅紫・夜桜・丸文字と明朝；调用：`{"style":"sakura"}`
- style.ocean: 深海 — 濃紺の深海・シアンの発光・泡と細いゴシック；调用：`{"style":"ocean"}`
- style.sunset: 夕焼けグラデ — 橙から菫へのグラデーション・太い明朝・逆光；调用：`{"style":"sunset"}`
- style.forest: 森の手帖 — 苔と生成り・樹皮の茶・鉛筆の手書き文字；调用：`{"style":"forest"}`
- style.vapor: ヴェイパー — 薄紫とパステルのピンク/水色・明朝・VHSのにじみ；调用：`{"style":"vapor"}`
- style.newsprint: 新聞 — 灰色の更紙・墨と赤・見出し明朝・CMYの版ズレと網点；调用：`{"style":"newsprint"}`
- style.synth80: シンセ80s — 黒地にネオンのマゼンタ/シアン・立体文字・走査線；调用：`{"style":"synth80"}`
- style.kraft: クラフト紙 — クラフト紙と生成り・スタンプの朱と藍・マステ；调用：`{"style":"kraft"}`
- style.candy: キャンディ — ミント/いちご/レモン/ぶどうのパステル・丸く弾む文字；调用：`{"style":"candy"}`
- style.acid: アシッド — 黒×酸性グリーン×マゼンタ・荒い書体と壊れた画面；调用：`{"style":"acid"}`
- style.sumi: 墨と朱 — 和紙の生成り・墨の筆文字・朱の落款；调用：`{"style":"sumi"}`
- style.gold: 金夜 — 漆黒と金箔・象牙の明朝・きらめく光；调用：`{"style":"gold"}`
