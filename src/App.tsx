import { useEffect, useRef, useState } from "react";
import {
  ARTICLES,
  DEBATED,
  DETAILS,
  HERO_IMAGE,
  KNOWN,
  MediaItem,
  PODCAST,
  SITE,
  STATIONS,
  STATIONS_CLOSING,
  STATIONS_OPENING,
  STATIONS_PREPARATORY_PRAYER,
  STATIONS_SOURCE,
  STATIONS_VERSE,
  VIDEOS,
} from "./content";

/* ---------- Image with a graceful placeholder ---------- */

function Img({
  src,
  alt,
  label,
  className,
  style,
}: {
  src: string;
  alt: string;
  label: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const [failed, setFailed] = useState(false);
  useEffect(() => setFailed(false), [src]);
  if (failed) {
    return (
      <div className={`placeholder ${className ?? ""}`} role="img" aria-label={alt}>
        <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
          <path d="M12 3v18M6 9h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
        <span>{label}</span>
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

/* ---------- Hero with the negative toggle ---------- */

function Hero() {
  const [negative, setNegative] = useState(false);
  return (
    <header className="hero">
      <div className="hero-text">
        <p className="museum">{SITE.museumName}</p>
        <h1>{SITE.title}</h1>
        <p className="lede">{SITE.subtitle}</p>
      </div>
      <figure className="hero-figure">
        <button
          className="flip"
          onClick={() => setNegative((v) => !v)}
          aria-pressed={negative}
          aria-label="Flip between the photograph and its negative"
        >
          <Img
            src={HERO_IMAGE}
            alt="The face on the Shroud of Turin"
            label="Add face.jpg to public/images/shroud"
            className={`hero-img ${negative ? "is-negative" : ""}`}
          />
        </button>
        <figcaption>
          Tap the face to flip between the photograph and its negative. In 1898, the negative is what
          first revealed how lifelike the image is.
        </figcaption>
      </figure>
    </header>
  );
}

/* ---------- Tiny router (no extra packages) ---------- */

function usePath() {
  const [path, setPath] = useState(() => window.location.pathname);
  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);
  return path.replace(/\/+$/, "") || "/";
}

function navigate(to: string) {
  if (to === window.location.pathname) return;
  window.history.pushState(null, "", to);
  window.dispatchEvent(new PopStateEvent("popstate"));
  window.scrollTo(0, 0);
}

function Link({
  to,
  children,
  className,
  current,
}: {
  to: string;
  children: React.ReactNode;
  className?: string;
  current?: boolean;
}) {
  return (
    <a
      href={to}
      className={className}
      aria-current={current ? "page" : undefined}
      onClick={(e) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
        e.preventDefault();
        navigate(to);
      }}
    >
      {children}
    </a>
  );
}

function usePageTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} · ${SITE.title}` : SITE.title;
  }, [title]);
}

/* ---------- Site nav ---------- */

const PAGES = [
  { path: "/", label: "Home" },
  { path: "/close-ups", label: "Close-ups" },
  { path: "/watch", label: "Watch & Listen" },
  { path: "/read", label: "Read" },
  { path: "/stations", label: "Stations" },
] as const;

function Nav({ path }: { path: string }) {
  return (
    <nav className="nav" aria-label="Pages">
      {PAGES.map((p) => {
        const current = p.path === "/" ? path === "/" : path === p.path || path.startsWith(p.path + "/");
        return (
          <Link key={p.path} to={p.path} current={current}>
            {p.label}
          </Link>
        );
      })}
    </nav>
  );
}

function PageHeader({ title }: { title?: string }) {
  return (
    <header className="page-header">
      <Link to="/" className="page-site">
        {SITE.title}
      </Link>
      <p className="museum">{SITE.museumName}</p>
      {title && <h1>{title}</h1>}
    </header>
  );
}

/* ---------- Close-up details ---------- */

function Details() {
  return (
    <section id="details" className="section">
      <h2>Look closer</h2>
      <p className="section-intro">
        The image on the cloth is faint. These close-ups point out what people have studied most.
      </p>
      <div className="details">
        {DETAILS.map((d) => (
          <article key={d.id} className="detail">
            <Img src={d.image} alt={d.title} label={`Add ${d.image.split("/").pop()}`} className="detail-img" />
            <div className="detail-body">
              <h3>{d.title}</h3>
              <p>{d.body}</p>
              {d.debated && (
                <p className="debated">
                  <strong>Still debated:</strong> {d.debated}
                </p>
              )}
            </div>
          </article>
        ))}
      </div>

      <div className="twocol">
        <div>
          <h3>What we know</h3>
          <ul>
            {KNOWN.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>What is still debated</h3>
          <ul>
            {DEBATED.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- Media ---------- */

function MediaCard({ item, index, noun }: { item: MediaItem; index: number; noun: string }) {
  const [playing, setPlaying] = useState(false);

  if (item.kind === "link") {
    return (
      <a className="media link-card" href={item.url} target="_blank" rel="noopener noreferrer">
        <span className="link-source">{item.source ?? "External site"}</span>
        <span className="link-title">{item.title ?? `${noun} ${index + 1}`}</span>
        <span className="link-cta">{item.cta ?? "Open"}</span>
      </a>
    );
  }

  const watchUrl = `https://www.youtube.com/watch?v=${item.id}`;
  return (
    <div className="media">
      <div className="player">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${item.id}?autoplay=1&rel=0`}
            title={item.title ?? `${noun} ${index + 1}`}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
          />
        ) : (
          <button className="thumb" onClick={() => setPlaying(true)} aria-label={`Play ${item.title ?? `${noun} ${index + 1}`}`}>
            <img src={`https://i.ytimg.com/vi/${item.id}/hqdefault.jpg`} alt="" loading="lazy" />
            <span className="play" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="26" height="26">
                <path d="M8 5v14l11-7z" fill="currentColor" />
              </svg>
            </span>
          </button>
        )}
      </div>
      <div className="media-meta">
        <span className="media-title">{item.title ?? `${noun} ${index + 1}`}</span>
        {item.source && <span className="media-source">{item.source}</span>}
        <a href={watchUrl} target="_blank" rel="noopener noreferrer">
          Open on YouTube
        </a>
      </div>
    </div>
  );
}

function MediaSection({
  id,
  heading,
  intro,
  items,
  noun,
}: {
  id: string;
  heading: string;
  intro: string;
  items: MediaItem[];
  noun: string;
}) {
  return (
    <section id={id} className="section">
      <h2>{heading}</h2>
      <p className="section-intro">{intro}</p>
      <div className="media-grid">
        {items.map((m, i) => (
          <MediaCard key={m.kind === "youtube" ? m.id : m.url} item={m} index={i} noun={noun} />
        ))}
      </div>
    </section>
  );
}

function Read() {
  return (
    <section id="read" className="section">
      <h2>Read</h2>
      <p className="section-intro">Articles and sources for those who want the full story.</p>
      <ul className="articles">
        {ARTICLES.map((a) => (
          <li key={a.url}>
            <a href={a.url} target="_blank" rel="noopener noreferrer">
              <span className="article-title">{a.title}</span>
              <span className="article-source">{a.source}</span>
              <span className="article-note">{a.note}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ---------- Stations of the Cross ---------- */

function StationsIndex() {
  return (
    <section className="section stations">
      <p className="section-intro">
        A prayer walk through Christ's Passion with St. Alphonsus Liguori. Each Station has its own
        page with an image, a meditation, and a prayer.
      </p>

      <div className="opening">
        <h3>Preparatory prayer</h3>
        <p className="prayer">{STATIONS_PREPARATORY_PRAYER}</p>
        <p className="verse">
          {STATIONS_VERSE.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </p>
      </div>

      <p className="begin">
        <Link to="/stations/1" className="button">
          Begin at the First Station
        </Link>
      </p>

      <ol className="station-list">
        {STATIONS.map((s) => (
          <li key={s.n}>
            <Link to={`/stations/${s.n}`}>
              <span className="station-list-n">{s.n}</span>
              <span>{s.title}</span>
            </Link>
          </li>
        ))}
      </ol>

      <p className="source-note">{STATIONS_SOURCE}</p>
    </section>
  );
}

function StationPage({ n }: { n: number }) {
  const i = n - 1;
  const station = STATIONS[i];
  const touchX = useRef<number | null>(null);
  const pad = String(station.n).padStart(2, "0");
  const go = (next: number) => {
    const clamped = Math.min(STATIONS.length - 1, Math.max(0, next));
    navigate(`/stations/${clamped + 1}`);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement | null)?.tagName;
      if (tag === "SELECT" || tag === "INPUT" || tag === "TEXTAREA") return;
      if (e.key === "ArrowRight") go(i + 1);
      if (e.key === "ArrowLeft") go(i - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  return (
    <section className="section stations">
      <div
        className="station"
        onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(dx) > 60) go(i + (dx < 0 ? 1 : -1));
          touchX.current = null;
        }}
      >
        <Img
          src={`/images/stations/${pad}.jpg`}
          alt={`Station ${station.n}: ${station.title}`}
          label={`Add ${pad}.jpg to public/images/stations`}
          className="station-img"
        />
        <div className="station-body">
          <p className="station-count">
            Station {station.n} of {STATIONS.length}
          </p>
          <h2>{station.title}</h2>
          {station.scripture && <p className="scripture">{station.scripture}</p>}

          <div className="opening">
            <p>
              <span className="say">V.</span> {STATIONS_OPENING.versicle}
            </p>
            <p>
              <span className="say">R.</span> {STATIONS_OPENING.response}
            </p>
          </div>

          <p>{station.meditation}</p>
          <p className="prayer">{station.prayer}</p>
          <p className="after">Our Father, Hail Mary, Glory Be.</p>
          <p className="verse">
            {STATIONS_VERSE.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </p>

          {station.shroud && (
            <p className="shroud-note">
              <strong>On the Shroud:</strong> {station.shroud}
            </p>
          )}
        </div>
      </div>

      <div className="station-controls">
        <button onClick={() => go(i - 1)} disabled={i === 0}>
          Previous
        </button>
        <label className="jump">
          <span className="sr">Jump to station</span>
          <select value={i} onChange={(e) => go(Number(e.target.value))}>
            {STATIONS.map((s, idx) => (
              <option key={s.n} value={idx}>
                {s.n}. {s.title}
              </option>
            ))}
          </select>
        </label>
        <button onClick={() => go(i + 1)} disabled={i === STATIONS.length - 1}>
          Next
        </button>
      </div>

      <div className="progress" aria-hidden="true">
        <div style={{ width: `${((i + 1) / STATIONS.length) * 100}%` }} />
      </div>

      {i === STATIONS.length - 1 && (
        <div className="closing">
          {STATIONS_CLOSING.map((t) => (
            <p key={t}>{t}</p>
          ))}
        </div>
      )}

      <p className="source-note">
        <Link to="/stations">All Stations</Link> · {STATIONS_SOURCE}
      </p>
    </section>
  );
}

/* ---------- Home ---------- */

const HOME_CARDS = [
  { path: "/close-ups", title: "Look closer", text: "What people have studied most on the cloth, and what is still debated." },
  { path: "/watch", title: "Watch & listen", text: "Videos and a podcast about the Shroud's history, science, and faith." },
  { path: "/read", title: "Read", text: "Articles and sources for those who want the full story." },
  { path: "/stations", title: "Stations of the Cross", text: "Pray the Way of the Cross with St. Alphonsus Liguori, one Station per page." },
];

function Home() {
  return (
    <section className="section">
      <div className="home-cards">
        {HOME_CARDS.map((c) => (
          <Link key={c.path} to={c.path} className="home-card">
            <span className="home-card-title">{c.title}</span>
            <span className="home-card-text">{c.text}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

/* ---------- Page ---------- */

function route(path: string): { title?: string; heading?: string; body: React.ReactNode } {
  if (path === "/") return { body: <Home /> };
  if (path === "/close-ups") return { title: "Close-ups", body: <Details /> };
  if (path === "/watch")
    return {
      title: "Watch & Listen",
      body: (
        <>
          <MediaSection
            id="watch"
            heading="Watch"
            intro="Videos about the Shroud's history, the science, and the faith behind it."
            items={VIDEOS}
            noun="Video"
          />
          <MediaSection
            id="listen"
            heading="Listen"
            intro="A podcast episode for the drive home."
            items={PODCAST}
            noun="Podcast episode"
          />
        </>
      ),
    };
  if (path === "/read") return { title: "Read", body: <Read /> };
  if (path === "/stations")
    return { title: "Stations of the Cross", heading: "Stations of the Cross", body: <StationsIndex /> };
  const m = path.match(/^\/stations\/(\d{1,2})$/);
  if (m) {
    const n = Number(m[1]);
    if (n >= 1 && n <= STATIONS.length)
      return {
        title: `Station ${n}`,
        heading: "Stations of the Cross",
        body: <StationPage n={n} />,
      };
  }
  return {
    title: "Page not found",
    heading: "Page not found",
    body: (
      <section className="section">
        <p className="section-intro">
          That page doesn't exist. <Link to="/">Go to the home page</Link>.
        </p>
      </section>
    ),
  };
}

export default function App() {
  const path = usePath();
  const r = route(path);
  usePageTitle(r.title);

  return (
    <>
      {path === "/" ? <Hero /> : <PageHeader title={r.heading} />}
      <Nav path={path} />
      <main>{r.body}</main>
      <footer className="footer">
        <p>{SITE.museumName}</p>
        <p className="small">
          Links open third-party sites. The Church does not rule on the authenticity of the Shroud, and
          the science is still discussed.
        </p>
      </footer>
    </>
  );
}
