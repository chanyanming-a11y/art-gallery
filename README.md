# 名画赏析画廊 · A Gallery For My Daughter

> 一座可滚动赏析的世界名画单页画廊，谨献给我的女儿，亦与所有爱艺术的人共享。
> A scrollable, single-page gallery of masterpieces — a gift for my daughter, shared with everyone who loves art.

<p align="center">
  <a href="https://art-gallery-pub.vercel.app/"><img src="https://raw.githubusercontent.com/chanyanming-a11y/art-gallery/main/covers/starry-night.webp" width="720" alt="名画赏析画廊封面 · 星夜"></a>
</p>

<p align="center">
  <a href="https://art-gallery-pub.vercel.app/"><img src="https://img.shields.io/badge/🌐%20Live%20Demo-art--gallery--pub.vercel.app-9b59b6" alt="Live Demo"></a>
  <a href="https://github.com/chanyanming-a11y/art-gallery"><img src="https://img.shields.io/badge/site-static%20HTML%2FJS-blue" alt="Static Site"></a>
  <a href="https://github.com/chanyanming-a11y/art-gallery"><img src="https://img.shields.io/badge/works-36%20masterpieces-e0a96d" alt="36 masterpieces"></a>
  <a href="https://www.w3.org/WAI/fundamentals/accessibility-intro/"><img src="https://img.shields.io/badge/a11y-keyboard%20%26%20screen--reader%20ready-2e8b57" alt="Accessibility"></a>
  <a href="./LICENSE"><img src="https://img.shields.io/badge/license-MIT%20%2F%20CC%20BY--NC--SA-9b59b6" alt="License"></a>
</p>

收录中外美术馆级**公有领域**馆藏名作，以「滚动叙事 + 画面热点交互 + 分镜 / 幕后 / 图鉴 / 语境」的方式呈现，
每幅画配以契合意境的公有领域或知识共享（CC）配乐。
全站纯静态、零第三方运行时依赖，并遵循无障碍（Accessibility）最佳实践。

---

## 🌐 在线预览 · Live Demo

**点开即看，无需安装任何东西：**
👉 **https://art-gallery-pub.vercel.app/**

- 首页：36 幅画按年代排成的可滚动画廊墙
- 单幅赏析页示例：[星夜](https://art-gallery-pub.vercel.app/starry-night/) · [神奈川冲浪里](https://art-gallery-pub.vercel.app/great-wave/) · [格尔尼卡](https://art-gallery-pub.vercel.app/guernica/)
- 下方「作品清单」中每一幅的**画名均可点击**，直接跳转到该画的线上赏析页。

> 这是一份私人礼物站（默认 `robots.txt` 禁止搜索引擎索引）。想让自己的版本被收录，fork 后改一行 `robots.txt` 即可，见文末「部署」。

---

## ✨ 特性 · Features

- **滚动叙事赏析**：逐幅名画以纵向时间线排布，年代越久远越靠左，跟随滚动逐帧展开。
- **画面热点交互**：每幅画内置可点击细节热点，串联「分镜 / 幕后 / 图鉴 / 语境」多层信息。
- **灵感配乐**：每幅画配一段契合意境的 PD / CC 古典乐，经用户首次交互后淡入，并提供独立静音开关。
- **♿ 无障碍优先（a11y）**：
  - 所有 `<img>` 均带语义化 `alt` 描述，并标注真实 `width`/`height` 以消除布局偏移（CLS）；
  - 全键盘可达：<kbd>Tab</kbd> 切换画作、<kbd>Enter</kbd> 打开详情、<kbd>Esc</kbd> 关闭弹窗，并维护可见焦点；
  - 遵循 WAI-ARIA 弹窗角色与焦点陷阱（focus trap）；
  - 尊重系统「减弱动态」偏好：开启后实时关闭花瓣飘落动画。
- **性能优化**：全站图片已转为 **WebP**（约 91.7 MB → 64 MB，降幅约 30%）；画作页静态图均启用 `loading="lazy"` 与 `decoding="async"`；仅加载可见画作资源。
- **社交分享就绪**：每页补全 Open Graph（og:title / og:image / og:description）与 Twitter Card，分享即带封面。
- **安全响应头**：`vercel.json` 已注入 `X-Frame-Options`、`X-Content-Type-Options`、`Referrer-Policy`、HSTS 与 `Permissions-Policy`。

---

## 🖼️ 作品清单 · Collection

共 **36** 幅，按创作年代升序排列（年代越久远越靠左）。**画名即链接**，点击直达线上赏析页。

| # | 作品（点击预览） | 作者 | 年代 |
|---|------|------|------|
| 1 | [洛神赋图](https://art-gallery-pub.vercel.app/luoshenfu/) | 顾恺之 · 东晋 | 约 4 世纪 |
| 2 | [五牛图](https://art-gallery-pub.vercel.app/wuniutu/) | 韩滉 · 唐 | 约 8 世纪 |
| 3 | [韩熙载夜宴图](https://art-gallery-pub.vercel.app/hanxizai/) | 顾闳中 · 五代 | 约 10 世纪 |
| 4 | [清明上河图](https://art-gallery-pub.vercel.app/qmsht/) | 张择端 · 北宋 | 1085 |
| 5 | [千里江山图](https://art-gallery-pub.vercel.app/qianli/) | 王希孟 · 北宋 | 1113 |
| 6 | [富春山居图](https://art-gallery-pub.vercel.app/fuchun/) | 黄公望 · 元 | 约 1350 |
| 7 | [阿尔诺芬尼夫妇像](https://art-gallery-pub.vercel.app/arnolfini/) | 扬·凡·艾克 | 1434 |
| 8 | [春](https://art-gallery-pub.vercel.app/primavera/) | 桑德罗·波提切利 | c.1480 |
| 9 | [维纳斯的诞生](https://art-gallery-pub.vercel.app/the-birth-of-venus/) | 桑德罗·波提切利 | c.1484 |
| 10 | [维纳斯与战神](https://art-gallery-pub.vercel.app/venus-and-mars/) | 桑德罗·波提切利 | c.1485 |
| 11 | [抱银鼠的女子](https://art-gallery-pub.vercel.app/ermine/) | 列奥纳多·达·芬奇 | c.1489 |
| 12 | [人间乐园](https://art-gallery-pub.vercel.app/the-garden-of-earthly-delights/) | 希罗尼穆斯·博斯 | c.1490–1510 |
| 13 | [雅典学院](https://art-gallery-pub.vercel.app/school-of-athens/) | 拉斐尔 | 1509–1511 |
| 14 | [伊苏斯之战](https://art-gallery-pub.vercel.app/battle-of-issus/) | 阿尔布雷希特·阿尔特多费尔 | 1529 |
| 15 | [巴别塔](https://art-gallery-pub.vercel.app/the-tower-of-babel/) | 老彼得·勃鲁盖尔 | c.1563 |
| 16 | [苏珊娜与长老](https://art-gallery-pub.vercel.app/susanna-and-the-elders/) | 阿尔泰米西娅·真蒂莱斯基 | 1610 |
| 17 | [戴珍珠耳环的少女](https://art-gallery-pub.vercel.app/girl/) | 约翰内斯·维米尔 | c.1665 |
| 18 | [秋千](https://art-gallery-pub.vercel.app/the-swing/) | 让-奥诺雷·弗拉戈纳尔 | 1767 |
| 19 | [拿破仑一世加冕大典](https://art-gallery-pub.vercel.app/coronation/) | 雅克-路易·大卫 | 1805–1807 |
| 20 | [自由引导人民](https://art-gallery-pub.vercel.app/liberty/) | 欧仁·德拉克洛瓦 | 1830 |
| 21 | [神奈川冲浪里](https://art-gallery-pub.vercel.app/great-wave/) | 葛饰北斋 | c.1831 |
| 22 | [奥菲利亚](https://art-gallery-pub.vercel.app/ophelia/) | 约翰·埃弗里特·米莱 | 1851–1852 |
| 23 | [拾穗者](https://art-gallery-pub.vercel.app/the-gleaners/) | 让-弗朗索瓦·米勒 | 1857 |
| 24 | [奥林匹亚](https://art-gallery-pub.vercel.app/olympia/) | 爱德华·马奈 | 1863 |
| 25 | [海浪](https://art-gallery-pub.vercel.app/wave/) | 古斯塔夫·库尔贝 | c.1869 |
| 26 | [惠斯勒的母亲](https://art-gallery-pub.vercel.app/whistlers-mother/) | 詹姆斯·惠斯勒 | 1871 |
| 27 | [日出·印象](https://art-gallery-pub.vercel.app/impression-sunrise/) | 克劳德·莫奈 | 1872 |
| 28 | [棉花事务所](https://art-gallery-pub.vercel.app/cotton-office/) | 埃德加·德加 | 1873 |
| 29 | [X夫人](https://art-gallery-pub.vercel.app/madame-x/) | 约翰·辛格·萨金特 | 1884 |
| 30 | [大碗岛的星期天下午](https://art-gallery-pub.vercel.app/la-grande-jatte/) | 乔治·修拉 | 1884–1886 |
| 31 | [星夜](https://art-gallery-pub.vercel.app/starry-night/) | 文森特·梵高 | 1889 |
| 32 | [呐喊](https://art-gallery-pub.vercel.app/the-scream/) | 爱德华·蒙克 | 1893 |
| 33 | [吻](https://art-gallery-pub.vercel.app/the-kiss/) | 古斯塔夫·克里姆特 | 1907–1908 |
| 34 | [狐狸](https://art-gallery-pub.vercel.app/foxes/) | 弗朗茨·马克 | 1913 |
| 35 | [构成第八号](https://art-gallery-pub.vercel.app/composition-viii/) | 瓦西里·康定斯基 | 1923 |
| 36 | [格尔尼卡](https://art-gallery-pub.vercel.app/guernica/) | 巴勃罗·毕加索 | 1937 |

> 站内画作均为公有领域馆藏复制品，仅供艺术欣赏与学习之用，非商用。
> 部分作品包含艺术人体内容，已在对应页面做出提示。

---

## 🛠️ 技术栈 · Tech Stack

- 纯 **HTML / CSS / 原生 JavaScript**（无框架、无构建步骤、无外部 CDN 运行时）
- 图片格式：**WebP**（q82）
- 动效：CSS 过渡 + 轻量 Canvas（花瓣飘落等），无重型依赖
- 配乐：本地 `assets/bgm.mp3` + 用户触发的 `<audio>` 播放，不自动播放

---

## 🚀 本地预览 / 一键部署 · Run & Deploy

### 方式一：本地直接看（最快）
```bash
# 在仓库根目录启动任意静态服务器
python3 -m http.server 8000
# 浏览器打开 http://127.0.0.1:8000/
```
无需安装依赖、无需编译。也可直接双击 `index.html` 用浏览器打开（部分浏览器对本地 `file://` 的音频/字体有限制，建议用上面的本地服务器）。

### 方式二：一键部署到 Vercel
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/chanyanming-a11y/art-gallery)
点击按钮 → 授权 GitHub → 自动克隆并部署，几秒后得到你自己的线上画廊地址。

### 方式三：GitHub Pages（零成本，推荐）
本站**全部使用相对路径**（无 `/` 绝对路径），因此可直接托管在 GitHub Pages 子路径，无需任何改动：
1. 仓库 **Settings → Pages → Build and deployment → Source** 选 `Deploy from a branch`；
2. Branch 选 `main`、目录选 `/ (root)`；
3. 保存后访问 **https://chanyanming-a11y.github.io/art-gallery/** 即可。
（首次发布需等 1–2 分钟；此后每次 push 自动更新。）

### 方式四：任意静态空间
拷贝根目录全部文件到空间根路径即可。

---

## ♿ 无障碍说明 · Accessibility

本项目将无障碍作为一等公民（账号 `chanyanming-a11y` 亦体现此取向）：

- 语义化结构：首页使用 `<main> / <section>`，画作详情使用 `<h1> / <h2>` 层级；
- 键盘与读屏：所有交互元素可聚焦、可操作，弹窗具备正确角色与焦点管理；
- 媒体替代文本：全部画作与细节图均提供 `alt`，并标注 `width`/`height`；
- 尊重偏好：音频仅在用户交互后播放、随时可静音；「减弱动态」系统设置下实时关闭花瓣动画；
- 动效友好：长时间后台运行不累积计时器，避免越用越卡。

如你发现任何无障碍问题，欢迎提 Issue。

---

## 📄 许可与署名 · License & Credits

| 内容 | 许可 |
|------|------|
| 本仓库**代码与设计** | [MIT License](./LICENSE) © 2026 chanyanming-a11y |
| 画作图像 | 公有领域（Public Domain）美术馆馆藏复制品 |
| 灵感配乐 | 知识共享（CC）授权录音，逐页署名于各画作页 `bgm-cr` 区块 |

转载与二次创作请保留原作者与许可信息；商业用途须另行授权。

> **关于索引**：当前 `robots.txt` 为 `Disallow: /`（私有礼物站，不希望被搜索引擎收录）。若你 fork 后想让**自己的**演示站被收录，把该行改为 `Allow: /`（或删除该文件）即可。

---

## 🤝 贡献 · Contributing

欢迎以 Issue 反馈问题或建议。若提交 PR，请保持：

1. 纯静态、无新增第三方运行时依赖；
2. 新增画作须为公有领域 / 已获授权的图像，并补全 `alt` 与 OG 标签；
3. 遵循现有无障碍约定（键盘可达、焦点管理、语义标签）。

---

## 🔗 相关 · Links

- 在线演示（Vercel）：<https://art-gallery-pub.vercel.app/>
- 仓库：<https://github.com/chanyanming-a11y/art-gallery>

---

如果这个画廊让你会心一笑，欢迎点个 ⭐ Star 让更多人看见。
*以美之名，仅供欣赏。A private gallery for my daughter — for art appreciation only.*
