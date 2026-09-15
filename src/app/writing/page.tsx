import type { Metadata, Viewport } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "文集",
  description: "暂时留白的个人文集页面。",
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#f2d5bd",
};

export default function WritingPage() {
  return (
    <main className="writing-page" id="main-content">
      <div className="page-shell writing-page__inner">
        <div className="writing-page__heading">
          <p className="eyebrow eyebrow--dark">
            <span aria-hidden="true" /> Writing / 文集
          </p>
          <h1>这里暂时没有文章。</h1>
          <p>我想先把页面留好，不急着为了填满它而写。等第一篇文章准备好，它会出现在这里。</p>
          <Link className="text-link" href="/">
            <span className="arrow arrow--back" aria-hidden="true">
              ←
            </span>{" "}
            返回首页
          </Link>
        </div>

        <div className="empty-shelf" aria-hidden="true">
          <div className="empty-shelf__light" />
          <div className="empty-shelf__paper">
            <span>01</span>
            <i />
            <i />
            <i />
          </div>
          <div className="empty-shelf__line" />
          <div className="empty-shelf__caption">
            <span>Nothing rushed.</span>
            <span>Something considered.</span>
          </div>
        </div>
      </div>
    </main>
  );
}
