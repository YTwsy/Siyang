# Siyang · 项目与文集

一个轻量的个人网站

## 技术栈

- Next.js 16 App Router
- React 19 + TypeScript
- `output: "export"` 静态导出
- 纯 CSS 视觉与响应式布局
- pnpm 11、Node.js 22

项目沿用 OpenSurge Website 的核心部署思路：构建后生成纯静态 `out/` 目录，不依赖服务器函数、数据库或运行时接口。

## 本地开发

```bash
pnpm install
pnpm dev
```

完整检查：

```bash
pnpm verify
```

## Cloudflare Pages

将独立 Git 仓库连接到 Cloudflare Pages，并使用以下设置：

- Framework preset：`Next.js (Static HTML Export)` 或 `None`
- Build command：`pnpm build`
- Build output directory：`out`
- Node version：`22`

`public/_headers` 已包含基础安全响应头与 Next.js 静态资源缓存规则。

## 内容入口

- 首页与项目介绍：`src/app/page.tsx`
- 文集空状态：`src/app/writing/page.tsx`
- 全局文字、导航与 metadata：`src/app/layout.tsx`
- 配色与布局：`src/app/globals.css`
- OpenSurge 项目图标：`public/images/opensurge-icon.png`

以后发布文章时，可以在 `src/app/writing/` 下加入静态文章路由，或再接入 Markdown / MDX 内容层；当前版本刻意不预装文章系统。
