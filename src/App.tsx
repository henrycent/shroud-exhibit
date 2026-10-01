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
  STATIONS_OPENING,
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

/* ---------- Sticky section nav ---------- */

const NAV = [
  ["details", "Close-ups"],
  ["watch", "Watch"],
  ["listen", "Listen"],
  ["read", "Read"],
  ["stations", "Stations"],
] as const;

function Nav() {
  return (
    <nav className="nav" aria-label="Sections">
      {NAV.map(([id, label]) => (
        <a key={id} href={`#${id}`}>
          {label}
        </a>
      ))}
    </nav>
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

function Stations() {
  const [i, setI] = useState(0);
  const touchX = useRef<number | null>(null);
  const station = STATIONS[i];
  const pad = String(station.n).padStart(2, "0");
  const go = (next: number) => setI(Math.min(STATIONS.length - 1, Math.max(0, next)));

  return (
    <section
      id="stations"
      className="section stations"
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") go(i + 1);
        if (e.key === "ArrowLeft") go(i - 1);
      }}
    >
      <h2>Stations of the Cross</h2>
      <p className="section-intro">
        A prayer walk through Christ's Passion. At each station, take a moment with the image and the
        short meditation.
      </p>

      <div className="opening">
        <p>
          <span className="say">V.</span> {STATIONS_OPENING.versicle}
        </p>
        <p>
          <span className="say">R.</span> {STATIONS_OPENING.response}
        </p>
      </div>

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
          <h3>{station.title}</h3>
          {station.scripture && <p className="scripture">{station.scripture}</p>}
          <p>{station.meditation}</p>
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
        <p className="closing">
          We adore you, O Christ, and we bless you. Because by your holy Cross you have redeemed the world.
        </p>
      )}
    </section>
  );
}

/* ---------- Page ---------- */

export default function App() {
  return (
    <>
      <Hero />
      <Nav />
      <main>
        <Details />
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
        <Read />
        <Stations />
      </main>
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
