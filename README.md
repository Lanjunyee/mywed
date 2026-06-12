# 我的个人网站

一个用纯 HTML/CSS/JS 构建的极简个人网站。  
设计风格受 [cameronmcefee.com](https://cameronmcefee.com/) 启发，注重内容优先和干净整洁的视觉体验。

## 功能

- **首页** — 头像、姓名、一句话简介、社交链接（GitHub、邮箱）
- **项目** — 项目展示卡片，包含标题、描述和技术栈标签
- **博客** — Coming Soon 占位页面

## 技术栈

- HTML5
- CSS3（Flexbox 弹性布局、响应式设计、系统字体）
- 原生 JavaScript
- 零框架，零依赖

## 项目结构

```
.
├── index.html        # 首页
├── projects.html     # 项目页
├── blog.html         # 博客页
├── css/
│   └── style.css     # 全局样式
├── js/
│   └── main.js       # 导航交互
└── README.md
```

## 部署到 GitHub Pages

### 分步操作

1. **创建 GitHub 仓库**

   打开 [github.com/new](https://github.com/new) 创建一个新仓库（例如 `my-site`）。

2. **推送代码**

   ```bash
   # 初始化本地仓库（如果尚未初始化）
   git init
   git add .
   git commit -m "Initial commit"

   # 添加远程仓库
   git remote add origin https://github.com/Lanjunyee/my-site.git

   # 推送到 main 分支
   git branch -M main
   git push -u origin main
   ```

3. **开启 GitHub Pages**

   - 进入你的 GitHub 仓库
   - 点击 **Settings** → **Pages**
   - 在 "Branch" 下选择 `main` 分支，文件夹选择 `/ (root)`
   - 点击 **Save**

4. **访问你的网站**

   等待 1-2 分钟后，你的网站将上线：

   ```
   https://Lanjunyee.github.io/my-site/
   ```

   （如果仓库名是 `Lanjunyee.github.io`，则访问 `https://Lanjunyee.github.io/`。）

### 自定义域名（可选）

1. 在仓库根目录添加一个 `CNAME` 文件，内容为你的域名（如 `example.com`）
2. 在 DNS 服务商处添加一条 `CNAME` 记录，指向 `Lanjunyee.github.io`
3. 在仓库 **Settings** → **Pages** 中设置自定义域名

## 自定义指南

- **头像** — 将 `index.html` 中的渐变圆形占位替换为 `<img>` 标签，指向你的照片
- **姓名和简介** — 编辑 `index.html` 中的 hero 区域
- **项目内容** — 编辑 `projects.html` 中的卡片内容
- **社交链接** — 修改 `index.html` hero 区社交按钮的 `href` 属性
- **颜色主题** — 在 `css/style.css` 中调整颜色值

## 许可证

MIT
