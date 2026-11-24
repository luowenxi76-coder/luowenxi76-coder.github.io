# 罗文希｜个人 AI 作品集网页（一键免费部署指南）

这是一个零构建依赖的纯静态作品集网站（仅需 `index.html` + `assets/avatar.png`），直接双击 [index.html](file:///Users/lwx/Desktop/job%20hunting/portfolio/index.html) 即可本地预览。

## 1 分钟免费上线（推荐 GitHub Pages）

1. 在 GitHub 新建一个公开仓库，例如 `portfolio`（或 `luowenxi76-coder.github.io`）。
2. 在终端进入本目录并推送：
   ```bash
   cd "/Users/lwx/Desktop/job hunting/portfolio"
   git init
   git add .
   git commit -m "feat: initial AI portfolio site"
   git branch -M main
   git remote add origin https://github.com/luowenxi76-coder/portfolio.git
   git push -u origin main
   ```
3. 打开仓库 **Settings → Pages → Branch 选择 `main` / `/ (root)` → Save**。
4. 约 1 分钟后即可获得永久可点击网址：`https://luowenxi76-coder.github.io/portfolio/`（也可以直接拖进 Vercel / Cloudflare Pages 免费部署）。
5. 上线后告诉我，我立刻把这个短链接加到你两份简历的“联系方式”栏里！
