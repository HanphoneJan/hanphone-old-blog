# hanphone-old-blog

> Hanphone's personal blog — articles, photos and magic.

一个纯静态个人博客项目，包含动态、图画集、Play 三个子页面，响应式设计，适配移动端。

## 预览

使用任意静态服务器打开 `index.html` 即可浏览，例如：

```bash
# 使用 VS Code Live Server
# 或 Python
python -m http.server 5500
# 或 Node.js
npx serve .
```

## 页面结构

```
hanphone-old-blog/
├── index.html              # 首页
├── post/                   # 动态页
│   ├── index.html
│   ├── css/post.css
│   └── js/
├── atlas/                  # 图画集
│   ├── index.html
│   ├── css/
│   │   ├── index.css
│   ├── js/
│   │   ├── atlaspic.js
│   │   ├── main.js
│   │   ├── slider.js
│   │   └── util.js
│   └── css/
│       ├── sliderpic.css
│       └── pic.css
├── play/                   # Play 页
│   ├── index.html
│   └── css/index.css
├── css/
│   └── mic_main.css        # 首页样式
├── js/
│   ├── main.js             # 首页交互
│   ├── util.js             # 工具函数
│   └── counter.js          # 访问计数器（CounterAPI + localStorage 降级）
└── static/                 # 统一资源目录
    ├── images/             # 图片资源
    └── lib/                # 第三方依赖
        ├── css/            # Bootstrap, FontAwesome, DropdownMenu
        ├── js/             # jQuery, Skel, Scrollex, Scrolly
        └── fonts/          # FontAwesome 字体
```

## 技术栈

| 类别 | 技术 |
|------|------|
| 结构 | 原生 HTML5 |
| 样式 | CSS3 + Bootstrap 3 + FontAwesome |
| 交互 | jQuery + Skel.js + Scrollex + Scrolly |
| 计数 | [CounterAPI](https://counterapi.dev/)（无需 token，localStorage 降级） |

## 功能特性

- 响应式布局，适配桌面端和移动端
- 首页全屏背景 + 滚动动画
- 图画集支持图片轮播和瀑布流展示
- 访问量统计（云端计数，离线降级为本地存储）
