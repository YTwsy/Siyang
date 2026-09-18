import type { Metadata, Viewport } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import "./globals.css";

const githubProfileUrl = "https://github.com/YTwsy";

function GitHubProfileLink() {
  return (
    <a
      href={githubProfileUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="访问 GitHub 主页（在新窗口打开）"
    >
      GitHub
    </a>
  );
}

export const metadata: Metadata = {
  title: {
    default: "Siyang — 项目与文集",
    template: "%s · Siyang",
  },
  description: "一个关于独立项目、工程实践与持续思考的个人网站。",
  icons: {
    icon: "/favicon.svg?v=4",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#f4fbfa",
};

function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="brand" href="/" aria-label="Siyang 首页">
          <span className="brand__mark" aria-hidden="true">
            <Image src="/images/avatar.jpg" alt="" fill sizes="34px" priority />
          </span>
          <span className="brand__name">Siyang</span>
        </Link>
        <nav className="site-nav" aria-label="主导航">
          <Link href="/#projects">项目</Link>
          <Link href="/writing/">文集</Link>
          <GitHubProfileLink />
        </nav>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div>
          <span className="footer-mark" aria-hidden="true">
            <Image src="/images/avatar.jpg" alt="" fill sizes="34px" />
          </span>
          <p>做一些有用的东西，把过程慢慢写下来。</p>
        </div>
        <div className="footer-meta">
          <GitHubProfileLink />
          <span>Projects &amp; notes</span>
          <span>© {new Date().getFullYear()} Siyang</span>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>
        <a className="skip-link" href="#main-content">
          跳至正文
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
