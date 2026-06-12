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
   https://jxq.qzz.io/
   ```

### 自定义域名（从零到上线）

#### 第一步：在 Cloudflare 添加站点

1. 打开 https://dash.cloudflare.com → **Add a site**
2. 输入你的根域名（例如 `qzz.io`），点击 **Add**
3. 选择 **Free** 计划
4. Cloudflare 会自动扫描现有 DNS 记录（如果有的话）

#### 第二步：在域名注册商处修改 Nameserver ⚠️ 关键步骤

Cloudflare 会分配 2 个专用的 nameserver（如 `xxx.ns.cloudflare.com`）。

去你**购买域名的注册商**（阿里云、腾讯云、GoDaddy 等），找到 **域名管理 → DNS 修改**，将当前的 nameserver 替换为 Cloudflare 的。

> 生效通常需要 1-2 小时，最长 24 小时。Cloudflare 会提示 "Waiting for your registrar to propagate your new nameservers"。

#### 第三步：添加 CNAME 记录

登录 Cloudflare → `你的域名` → **DNS** → **Add Record**：

| 字段 | 值 |
|------|----|
| **Type** | `CNAME` |
| **Name** | `jxq` |
| **Target** | `Lanjunyee.github.io` |
| **Proxy status** | ⚫ **DNS only**（灰色云），**不要开橙色云** |

> ❌ **橙色云（Proxied）** — GitHub Pages 无法识别域名，导致证书签发失败
> ✅ **灰色云（DNS only）** — GitHub Pages 正常工作

#### 第四步：验证 DNS

```bash
dig jxq.qzz.io +noall +answer
```

返回类似以下结果即生效：

```
jxq.qzz.io.  300  IN  CNAME  Lanjunyee.github.io.
```

#### 第五步：在 GitHub 绑定域名

1. 打开 GitHub 仓库 → **Settings** → **Pages**
2. **Custom domain** 输入 `jxq.qzz.io` → **Save**
3. 勾选 **Enforce HTTPS**（可能需要等几分钟才可用）

## 如何修改网站

修改网站内容后，只需以下几步就能更新到线上：

### 修改内容

| 想改什么 | 改哪个文件 |
|---------|----------|
| 姓名、简介、社交链接 | `index.html` |
| 头像 | 替换 `index.html` 中的头像占位为 `<img>` 标签 |
| 项目信息 | `projects.html` |
| 博客文章 | `blog.html` |
| 颜色、字体、样式 | `css/style.css` |
| 导航交互 | `js/main.js` |

### 更新到线上

```bash
# 1. 修改完文件后，提交代码
git add .
git commit -m "改了哪些内容"

# 2. 推送到 GitHub
git push
```

推送后等待 1-2 分钟，GitHub Pages 会自动部署更新，访问 `https://jxq.qzz.io` 就能看到。

> 💡 如果改了样式或内容但线上没变，清一下浏览器缓存（按 `Cmd+Shift+R` 强制刷新）。

## 许可证

MIT
