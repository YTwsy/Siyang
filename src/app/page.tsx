import Image from "next/image";
import Link from "next/link";

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <span className={diagonal ? "arrow arrow--diagonal" : "arrow"} aria-hidden="true">
      →
    </span>
  );
}

const additionalProjects = [
  {
    index: "02",
    mark: "TC",
    tone: "team",
    category: "Coding-agent collaboration",
    title: "Team Cross",
    description:
      "从一次具体的 coding-agent Session 出发，通过临时局域网邀请，让同事共同理解、审阅、批注或接力这次工作。会话、模型调用与代码执行仍留在发起者的 Mac 上。",
    tags: ["Go", "macOS", "AI Agents"],
    href: "https://github.com/YTwsy/Team-Cross",
  },
  {
    index: "03",
    mark: "PG",
    tone: "pixel",
    category: "Android network gateway",
    title: "Pixel Proxy Gateway",
    description:
      "把运行 VPN 的 Android 手机变成受监控、可自恢复的局域网 HTTP / SOCKS 代理出口。应用基于随 APK 固定打包的 GOST 工作，但不实现或替代手机侧 VPN。",
    tags: ["Kotlin", "Android", "GOST"],
    href: "https://github.com/YTwsy/pixel-proxy-gateway",
  },
  {
    index: "04",
    mark: "SS",
    tone: "sound",
    category: "Spatial audio prototype",
    title: "SoundStage",
    description:
      "面向真实应用音频的 macOS 空间声场原型：通过 Core Audio 进程 tap 捕获声音，提供独立音量、静音与独奏、二维摆位和多种聆听模式。当前仍是开发者预览。",
    tags: ["Swift", "Core Audio", "Spatial"],
    href: "https://github.com/YTwsy/SoundStage",
  },
  {
    index: "05",
    mark: "CP",
    tone: "pac",
    category: "macOS proxy utility",
    title: "CN PAC Menubar",
    description:
      "从菜单栏托管 PAC、应用 macOS 自动代理并生成面向单个应用的启动器，也可以把 LAN PAC 地址分享给同网设备，并通过 PAC 路径执行 keepalive 探测。",
    tags: ["Swift", "PAC", "Menu Bar"],
    href: "https://github.com/YTwsy/cn-pac-menubar",
  },
] as const;

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="hero">
        <div className="page-shell hero__grid">
          <div className="hero__copy">
            <p className="eyebrow">
              <span aria-hidden="true" /> Independent builder
            </p>
            <h1>
              把复杂的事，
              <br />
              做得清楚一点。
            </h1>
            <p className="hero__lede">
              我在这里记录正在构建的项目，以及那些值得慢慢想清楚的事情。
            </p>
            <div className="hero__actions">
              <a className="button button--primary" href="#projects">
                看看项目 <Arrow />
              </a>
              <Link className="text-link" href="/writing/">
                前往文集 <Arrow />
              </Link>
            </div>
          </div>

          <div className="hero-art" aria-hidden="true">
            <div className="hero-art__grid" />
            <div className="hero-art__orbit hero-art__orbit--one" />
            <div className="hero-art__orbit hero-art__orbit--two" />
            <div className="hero-art__glow" />
            <div className="monogram-card">
              <span className="monogram-card__index">01</span>
              <span className="monogram-card__letter">W</span>
              <div className="monogram-card__footer">
                <span>Make</span>
                <span>Refine</span>
                <span>Share</span>
              </div>
            </div>
            <span className="hero-art__dot hero-art__dot--one" />
            <span className="hero-art__dot hero-art__dot--two" />
          </div>
        </div>
      </section>

      <section className="projects section-space" id="projects">
        <div className="page-shell">
          <div className="section-heading">
            <p className="eyebrow eyebrow--dark">
              <span aria-hidden="true" /> Selected work
            </p>
            <h2>正在做的项目</h2>
            <p>把想法做成可以真正运行、被使用，也经得起反复推敲的东西。</p>
          </div>

          <a
            className="project-card"
            href="https://opensurge.pages.dev/zh-cn/"
            target="_blank"
            rel="noreferrer"
            aria-label="访问 OpenSurge for Mac 网站（在新窗口打开）"
          >
            <div className="project-card__visual">
              <div className="project-card__halo" aria-hidden="true" />
              <Image
                className="project-card__icon"
                src="/images/opensurge-icon.png"
                alt="OpenSurge for Mac 淡青色图标"
                width={1024}
                height={1024}
                priority
              />
            </div>
            <div className="project-card__body">
              <div className="project-card__topline">
                <span className="status-pill">
                  <span aria-hidden="true" /> 持续开发
                </span>
                <span className="project-card__year">2025 — Now</span>
              </div>
              <h3>OpenSurge for Mac</h3>
              <p>
                让一台 Mac 成为家庭或小型网络的网关与控制平面。围绕 mihomo、DHCP / DNS、TUN
                和按设备策略，把原本分散的网络能力收拢到一处。
              </p>
              <ul className="tag-list" aria-label="项目领域">
                <li>macOS</li>
                <li>Gateway</li>
                <li>Networking</li>
              </ul>
            </div>
            <span className="project-card__link" aria-hidden="true">
              <Arrow diagonal />
            </span>
          </a>

          <div className="project-grid" aria-label="更多项目">
            {additionalProjects.map((project) => (
              <a
                className={`project-tile project-tile--${project.tone}`}
                href={project.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`访问 ${project.title} GitHub 仓库（在新窗口打开）`}
                key={project.title}
              >
                <div className="project-tile__topline">
                  <span>{project.index}</span>
                  <span className="project-tile__link" aria-hidden="true">
                    <Arrow diagonal />
                  </span>
                </div>
                <div className="project-tile__mark" aria-hidden="true">
                  {project.mark}
                </div>
                <div className="project-tile__body">
                  <p className="project-tile__category">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p className="project-tile__description">{project.description}</p>
                  <ul className="project-tile__tags" aria-label={`${project.title} 技术方向`}>
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="writing-preview section-space">
        <div className="page-shell writing-preview__panel">
          <div>
            <p className="eyebrow eyebrow--dark">
              <span aria-hidden="true" /> Writing
            </p>
            <h2>文集先留一页空白。</h2>
          </div>
          <div className="writing-preview__copy">
            <p>第一版不会发布文章。等有内容真正值得留下，再从这里开始。</p>
            <Link className="button button--quiet" href="/writing/">
              看看这页 <Arrow />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
