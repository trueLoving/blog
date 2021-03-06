---
title: git commit emoji
categories:
 - 工具
tags:
 - 工具
date: 2020-04-21
---


:::tip

在提交git commit信息时,发现可以加一些表情符号,于是就记录了哪些表情是可以加的

:::


<!-- more -->

1. 提交格式
```shell
git commit -m ":tada: Initial commit"
```
2. 图标代码及含义

<table><thead><tr><th style="text-align:left;">emoji</th>
<th style="text-align:left;">emoji 代码</th>
<th style="text-align:left;">commit 说明</th>
</tr></thead><tbody><tr><td style="text-align:left;">:art: (调色板)</td>
<td style="text-align:left;"><code>:art:</code></td>
<td style="text-align:left;">改进代码结构/代码格式</td>
</tr><tr><td style="text-align:left;">:zap: (闪电)<br>:racehorse: (赛马)</td>
<td style="text-align:left;"><code>:zap:</code><br><code>:racehorse:</code></td>
<td style="text-align:left;">提升性能</td>
</tr><tr><td style="text-align:left;">:fire: (火焰)</td>
<td style="text-align:left;"><code>:fire:</code></td>
<td style="text-align:left;">移除代码或文件</td>
</tr><tr><td style="text-align:left;">:bug: (bug)</td>
<td style="text-align:left;"><code>:bug:</code></td>
<td style="text-align:left;">修复 bug</td>
</tr><tr><td style="text-align:left;">:ambulance: (急救车)</td>
<td style="text-align:left;"><code>:ambulance:</code></td>
<td style="text-align:left;">重要补丁</td>
</tr><tr><td style="text-align:left;">:sparkles: (火花)</td>
<td style="text-align:left;"><code>:sparkles:</code></td>
<td style="text-align:left;">引入新功能</td>
</tr><tr><td style="text-align:left;">:memo: (备忘录)</td>
<td style="text-align:left;"><code>:memo:</code></td>
<td style="text-align:left;">撰写文档</td>
</tr><tr><td style="text-align:left;">:rocket: (火箭)</td>
<td style="text-align:left;"><code>:rocket:</code></td>
<td style="text-align:left;">部署功能</td>
</tr><tr><td style="text-align:left;">:lipstick: (口红)</td>
<td style="text-align:left;"><code>:lipstick:</code></td>
<td style="text-align:left;">更新 UI 和样式文件</td>
</tr><tr><td style="text-align:left;">:tada: (庆祝)</td>
<td style="text-align:left;"><code>:tada:</code></td>
<td style="text-align:left;">初次提交</td>
</tr><tr><td style="text-align:left;">:white_check_mark: (白色复选框)</td>
<td style="text-align:left;"><code>:white_check_mark:</code></td>
<td style="text-align:left;">更新测试</td>
</tr><tr><td style="text-align:left;">:lock: (锁)</td>
<td style="text-align:left;"><code>:lock:</code></td>
<td style="text-align:left;">修复安全问题</td>
</tr><tr><td style="text-align:left;">:apple: (苹果)</td>
<td style="text-align:left;"><code>:apple:</code></td>
<td style="text-align:left;">修复 macOS 下的问题</td>
</tr><tr><td style="text-align:left;">:penguin: (企鹅)</td>
<td style="text-align:left;"><code>:penguin:</code></td>
<td style="text-align:left;">修复 Linux 下的问题</td>
</tr><tr><td style="text-align:left;">:checkered_flag: (旗帜)</td>
<td style="text-align:left;"><code>:checked_flag:</code></td>
<td style="text-align:left;">修复 Windows 下的问题</td>
</tr><tr><td style="text-align:left;">:robot:（机器人）</td>
<td style="text-align:left;"><code>:robot:</code></td>
<td style="text-align:left;">修复 Android 下的问题</td>
</tr><tr><td style="text-align:left;">:green_apple: (绿苹果)</td>
<td style="text-align:left;"><code>:green_apple:</code></td>
<td style="text-align:left;">修复 iOS 下的问题</td>
</tr><tr><td style="text-align:left;">:bookmark: (书签)</td>
<td style="text-align:left;"><code>:bookmark:</code></td>
<td style="text-align:left;">发行/版本标签</td>
</tr><tr><td style="text-align:left;">:rotating_light: (警车灯)</td>
<td style="text-align:left;"><code>:rotating_light:</code></td>
<td style="text-align:left;">移除 linter 警告</td>
</tr><tr><td style="text-align:left;">:construction: (施工)</td>
<td style="text-align:left;"><code>:construction:</code></td>
<td style="text-align:left;">工作进行中</td>
</tr><tr><td style="text-align:left;">:construction_worker: (工人)</td>
<td style="text-align:left;"><code>:construction_worker:</code></td>
<td style="text-align:left;">添加 CI 构建系统</td>
</tr><tr><td style="text-align:left;">:green_heart: (绿心)</td>
<td style="text-align:left;"><code>:green_heart:</code></td>
<td style="text-align:left;">修复 CI 构建问题</td>
</tr><tr><td style="text-align:left;">:arrow_up: (上升箭头)</td>
<td style="text-align:left;"><code>:arrow_up:</code></td>
<td style="text-align:left;">升级依赖</td>
</tr><tr><td style="text-align:left;">:arrow_down: (下降箭头)</td>
<td style="text-align:left;"><code>:arrow_down:</code></td>
<td style="text-align:left;">降级依赖</td>
</tr><tr><td style="text-align:left;">:pushpin: (图钉)</td>
<td style="text-align:left;"><code>:pushpin:</code></td>
<td style="text-align:left;">将依赖项固定到特定版本</td>
</tr><tr><td style="text-align:left;">:chart_with_upwards_trend: (上升趋势图)</td>
<td style="text-align:left;"><code>:chart_with_upwards_trend:</code></td>
<td style="text-align:left;">添加分析或跟踪代码</td>
</tr><tr><td style="text-align:left;">:recycle: （回收）</td>
<td style="text-align:left;"><code>:recycle:</code></td>
<td style="text-align:left;">重构代码</td>
</tr><tr><td style="text-align:left;">:whale: (鲸鱼)</td>
<td style="text-align:left;"><code>:whale:</code></td>
<td style="text-align:left;">Docker 相关工作</td>
</tr><tr><td style="text-align:left;">:globe_with_meridians: (带子午线的地球仪)</td>
<td style="text-align:left;"><code>:globe_with_meridians:</code></td>
<td style="text-align:left;">国际化与本地化</td>
</tr><tr><td style="text-align:left;">:heavy_plus_sign: (加号)</td>
<td style="text-align:left;"><code>:heavy_plus_sign:</code></td>
<td style="text-align:left;">增加一个依赖</td>
</tr><tr><td style="text-align:left;">:heavy_minus_sign: (减号)</td>
<td style="text-align:left;"><code>:heavy_minus_sign:</code></td>
<td style="text-align:left;">减少一个依赖</td>
</tr><tr><td style="text-align:left;">:wrench: (扳手)</td>
<td style="text-align:left;"><code>:wrench:</code></td>
<td style="text-align:left;">修改配置文件</td>
</tr><tr><td style="text-align:left;">:hammer: (锤子)</td>
<td style="text-align:left;"><code>:hammer:</code></td>
<td style="text-align:left;">重大重构</td>
</tr><tr><td style="text-align:left;">:pencil2: (铅笔)</td>
<td style="text-align:left;"><code>:pencil2:</code></td>
<td style="text-align:left;">修复 typo</td>
</tr><tr><td style="text-align:left;">:hankey: (粑粑...)</td>
<td style="text-align:left;"><code>:hankey:</code></td>
<td style="text-align:left;">写了辣鸡代码需要优化</td>
</tr><tr><td style="text-align:left;">:rewind: (倒带)</td>
<td style="text-align:left;"><code>:rewind:</code></td>
<td style="text-align:left;">恢复更改</td>
</tr><tr><td style="text-align:left;">:twisted_rightwards_arrows: (交叉向右的箭头)</td>
<td style="text-align:left;"><code>:twisted_rightwards_arrows:</code></td>
<td style="text-align:left;">合并分支</td>
</tr><tr><td style="text-align:left;">:package: (包裹)</td>
<td style="text-align:left;"><code>:package:</code></td>
<td style="text-align:left;">更新编译的文件或包</td>
</tr><tr><td style="text-align:left;">:alien: (外星人)</td>
<td style="text-align:left;"><code>:alien:</code></td>
<td style="text-align:left;">由于外部API更改而更新代码</td>
</tr><tr><td style="text-align:left;">:truck: (货车)</td>
<td style="text-align:left;"><code>:truck:</code></td>
<td style="text-align:left;">移动或者重命名文件</td>
</tr><tr><td style="text-align:left;">:page_facing_up: (正面朝上的页面)</td>
<td style="text-align:left;"><code>:page_facing_up:</code></td>
<td style="text-align:left;">增加或更新许可证书</td>
</tr><tr><td style="text-align:left;">:boom: (爆炸)</td>
<td style="text-align:left;"><code>:boom:</code></td>
<td style="text-align:left;">引入突破性的变化</td>
</tr><tr><td style="text-align:left;">:bento: (铅笔)</td>
<td style="text-align:left;"><code>:bento:</code></td>
<td style="text-align:left;">增加或更新资源</td>
</tr><tr><td style="text-align:left;">:ok_hand: (OK手势)</td>
<td style="text-align:left;"><code>:ok_hand:</code></td>
<td style="text-align:left;">由于代码审查更改而更新代码</td>
</tr><tr><td style="text-align:left;">:wheelchair: (轮椅)</td>
<td style="text-align:left;"><code>:wheelchair:</code></td>
<td style="text-align:left;">改善无障碍交互</td>
</tr><tr><td style="text-align:left;">:bulb: (灯泡)</td>
<td style="text-align:left;"><code>:bulb:</code></td>
<td style="text-align:left;">给代码添加注释</td>
</tr><tr><td style="text-align:left;">:beers: (啤酒)</td>
<td style="text-align:left;"><code>:beers:</code></td>
<td style="text-align:left;">醉醺醺地写代码...</td>
</tr><tr><td style="text-align:left;">:speech_balloon: (消息气泡)</td>
<td style="text-align:left;"><code>:speech_balloon:</code></td>
<td style="text-align:left;">更新文本文档</td>
</tr><tr><td style="text-align:left;">:card_file_box: (卡片文件盒)</td>
<td style="text-align:left;"><code>:card_file_box:</code></td>
<td style="text-align:left;">执行与数据库相关的更改</td>
</tr><tr><td style="text-align:left;">:loud_sound: (音量大)</td>
<td style="text-align:left;"><code>:loud_sound:</code></td>
<td style="text-align:left;">增加日志</td>
</tr><tr><td style="text-align:left;">:mute: (静音)</td>
<td style="text-align:left;"><code>:mute:</code></td>
<td style="text-align:left;">移除日志</td>
</tr><tr><td style="text-align:left;">:busts_in_silhouette: (轮廓中的半身像)</td>
<td style="text-align:left;"><code>:busts_in_silhouette:</code></td>
<td style="text-align:left;">增加贡献者</td>
</tr><tr><td style="text-align:left;">:children_crossing: (孩童通行)</td>
<td style="text-align:left;"><code>:children_crossing:</code></td>
<td style="text-align:left;">优化用户体验、可用性</td>
</tr><tr><td style="text-align:left;">:building_construction: (建筑建造)</td>
<td style="text-align:left;"><code>:building_construction:</code></td>
<td style="text-align:left;">结构变动</td>
</tr><tr><td style="text-align:left;">:iphone: (iPhone)</td>
<td style="text-align:left;"><code>:iphone:</code></td>
<td style="text-align:left;">做响应式设计</td>
</tr><tr><td style="text-align:left;">:clown_face: (小丑脸)</td>
<td style="text-align:left;"><code>:clown_face:</code></td>
<td style="text-align:left;">嘲弄事物（直译，这个没明白）</td>
</tr><tr><td style="text-align:left;">:egg: (鸡蛋)</td>
<td style="text-align:left;"><code>:egg:</code></td>
<td style="text-align:left;">增加彩蛋</td>
</tr><tr><td style="text-align:left;">:see_no_evil: (看不见邪恶)</td>
<td style="text-align:left;"><code>:see_no_evil:</code></td>
<td style="text-align:left;">增加或更改gitignore</td>
</tr><tr><td style="text-align:left;">:camera_flash: (照相机闪光灯)</td>
<td style="text-align:left;"><code>:camera_flash:</code></td>
<td style="text-align:left;">增加或更新截图</td>
</tr><tr><td style="text-align:left;">:alembic: (蒸馏器)</td>
<td style="text-align:left;"><code>:alembic:</code></td>
<td style="text-align:left;">尝试新东西</td>
</tr><tr><td style="text-align:left;">:mag: (放大镜)</td>
<td style="text-align:left;"><code>:mag:</code></td>
<td style="text-align:left;">SEO优化</td>
</tr><tr><td style="text-align:left;">:wheel_of_dharma: (船的方向盘)</td>
<td style="text-align:left;"><code>:wheel_of_dharma:</code></td>
<td style="text-align:left;">关于Kubernetes的工作</td>
</tr><tr><td style="text-align:left;">:label: (标签)</td>
<td style="text-align:left;"><code>:label:</code></td>
<td style="text-align:left;">增加类型（FLow、Typescript）</td>
</tr></tbody></table>