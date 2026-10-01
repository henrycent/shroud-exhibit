// =====================================================================
// EDIT THIS FILE to change anything on the site. No other file needs
// to be touched for normal updates.
// =====================================================================

export const SITE = {
  title: "The Shroud of Turin",
  subtitle: "Go deeper after you see the exhibit: watch, listen, read, and pray.",
  // Confirm this wording with your supervisor.
  museumName: "Diocesan Museum of the Diocese of Fort Wayne–South Bend",
};

// ---------- Media ----------
// For YouTube items, `id` is the part after v= in the link.
// `title` and `source` are optional but nice; fill them in when you can.

export type YouTubeItem = {
  kind: "youtube";
  id: string;
  title?: string;
  source?: string;
};
export type LinkItem = {
  kind: "link";
  url: string;
  title?: string;
  source?: string;
  cta?: string;
};
export type MediaItem = YouTubeItem | LinkItem;

export const VIDEOS: MediaItem[] = [
  { kind: "youtube", id: "2jP2O-uQj5U" },
  { kind: "youtube", id: "DA9unW5A0pk" },
  {
    kind: "link",
    url: "https://ondemand.ewtn.com/Home/Play/en/381-388309",
    source: "EWTN",
    cta: "Watch on EWTN",
  },
];

export const PODCAST: MediaItem[] = [{ kind: "youtube", id: "HAbuG-oVq1Q" }];

export type Article = { title: string; source: string; url: string; note: string };

// I have not opened these yet. Click each once before you print the QR code,
// and swap in better ones if your supervisor prefers.
export const ARTICLES: Article[] = [
  {
    title: "Shroud of Turin",
    source: "Wikipedia",
    url: "https://en.wikipedia.org/wiki/Shroud_of_Turin",
    note: "A balanced overview of the history, the science, and the debate.",
  },
  {
    title: "Shroud of Turin Website",
    source: "shroud.com",
    url: "https://www.shroud.com",
    note: "Run by Barrie Schwortz, the documenting photographer of the 1978 scientific study.",
  },
  {
    title: "Radiocarbon dating of the Shroud of Turin",
    source: "Nature, 1989",
    url: "https://www.nature.com/articles/337611a0",
    note: "The original scientific paper reporting the 1988 dating results.",
  },
];

// ---------- Close-up details ----------
// Put the matching image in public/images/shroud/ using the file name below.
// If an image is missing, a plain placeholder shows instead.

export type Detail = {
  id: string;
  title: string;
  image: string;
  body: string;
  debated?: string;
};

export const HERO_IMAGE = "/images/shroud/face.jpg";

export const DETAILS: Detail[] = [
  {
    id: "face",
    title: "The face",
    image: "/images/shroud/face.jpg",
    body: "A bearded man with long hair, seen faintly on the cloth. The image is a pale, straw-yellow discoloration that sits only on the very top fibers of the linen and does not soak through to the other side.",
    debated:
      "Scientists in 1978 reported that it was not made with paint or dye, but could not explain how it formed. Others argue it could have been made by an artist using a method not yet identified.",
  },
  {
    id: "negative",
    title: "A photographic negative",
    image: "/images/shroud/negative.jpg",
    body: "In 1898, Secondo Pia took the first photograph of the Shroud. On his glass plate, the image looked like a natural, lifelike portrait. The cloth itself behaves like a photographic negative, which no one expected.",
  },
  {
    id: "wrists",
    title: "Wrists and hands",
    image: "/images/shroud/hands.jpg",
    body: "The hands are crossed over the body. Blood stains appear at the wrists rather than the palms, which matches what historians now know about Roman crucifixion, where the wrist could bear the weight better than the palm.",
  },
  {
    id: "side",
    title: "The side wound",
    image: "/images/shroud/side.jpg",
    body: "On the right side of the chest is a large stain with a smaller trail below it. The Gospel of John (19:34) says a soldier pierced Jesus' side with a lance and that blood and water flowed out.",
  },
  {
    id: "scourge",
    title: "Scourge marks",
    image: "/images/shroud/back.jpg",
    body: "The back image is covered with many small, paired marks, often described as dumbbell-shaped, scattered across the shoulders, back, and legs. Researchers have compared them to wounds from a Roman flagrum.",
  },
  {
    id: "weave",
    title: "The cloth and its weave",
    image: "/images/shroud/weave.jpg",
    body: "The Shroud is a single piece of linen about 4.4 meters (14 feet 5 inches) long and 1.1 meters (3 feet 7 inches) wide, woven in a three-to-one herringbone twill. It is large enough to cover a body lengthwise with the cloth folded over the head.",
  },
  {
    id: "fire",
    title: "Fire damage of 1532",
    image: "/images/shroud/fire.jpg",
    body: "In 1532, a fire broke out in the chapel in Chambéry, France, where the Shroud was kept. Molten silver from its reliquary burned through the folded cloth. Two years later, Poor Clare nuns stitched patches over the burn holes. The repeating burn marks appear because the cloth was folded.",
  },
];

export const KNOWN = [
  "The first firm historical record is from the 1350s in Lirey, France.",
  "In 1389, a French bishop wrote to the Pope claiming the image had been painted.",
  "The House of Savoy acquired it in 1453 and brought it to Turin in 1578.",
  "A 1988 radiocarbon test by three laboratories dated the cloth to about 1260–1390.",
  "In 1978, a team of American scientists examined it and found no pigment that explains the image.",
  "The Church does not officially declare it authentic. It honors the Shroud as an icon of the Lord's Passion.",
];

export const DEBATED = [
  "Whether the radiocarbon sample, taken from a corner, was representative of the whole cloth.",
  "Whether later studies, including a 2022 X-ray aging study, point to a much older date. These claims are disputed.",
  "How the image was formed.",
  "What happened to the cloth between the first century and the 1350s.",
];

// ---------- Stations of the Cross ----------
// Put images in public/images/stations/ named 01.jpg ... 14.jpg.

export type Station = {
  n: number;
  title: string;
  scripture?: string;
  meditation: string;
  shroud?: string;
};

export const STATIONS_OPENING = {
  versicle: "We adore you, O Christ, and we bless you.",
  response: "Because by your holy Cross you have redeemed the world.",
};

export const STATIONS: Station[] = [
  {
    n: 1,
    title: "Jesus is condemned to death",
    scripture: "Mark 15:15",
    meditation:
      "Pilate wants to keep the crowd calm, so he gives in. The innocent one stands silent while others decide his fate. When have I gone along with the crowd to avoid trouble?",
  },
  {
    n: 2,
    title: "Jesus takes up his cross",
    scripture: "John 19:17",
    meditation:
      "Jesus does not run from the cross. He embraces it. Ask him for the strength to carry the burdens that are yours today, trusting that you do not carry them alone.",
    shroud:
      "Some researchers read the abrasions on the shoulders of the Shroud's image as consistent with carrying a heavy beam.",
  },
  {
    n: 3,
    title: "Jesus falls the first time",
    meditation:
      "The weight is too much, and he falls. God did not simply look down on our weakness. He entered it. When I fall, I can rise again, because he did too.",
  },
  {
    n: 4,
    title: "Jesus meets his mother",
    meditation:
      "Mary says nothing, but her presence says everything. A mother who stays beside her suffering son. Think of those who have stayed beside you in hard times, and of those who need you now.",
  },
  {
    n: 5,
    title: "Simon of Cyrene helps Jesus carry the cross",
    scripture: "Mark 15:21",
    meditation:
      "Simon was only passing by, and he was forced into service. Yet he walks alongside Jesus. Sometimes helping a stranger is exactly how we meet Christ.",
  },
  {
    n: 6,
    title: "Veronica wipes the face of Jesus",
    meditation:
      "According to a pious tradition, a woman steps out of the crowd to wipe the face of Jesus. A small act of tenderness, in a place where it was not safe. What small kindness can I do today?",
    shroud:
      "The image of the Holy Face has long inspired Christian art. The face on the Shroud has shaped how many people picture Jesus.",
  },
  {
    n: 7,
    title: "Jesus falls the second time",
    meditation:
      "Again he falls, and again he gets up. This is perseverance. Where am I tempted to give up? Ask him for the courage to begin again.",
  },
  {
    n: 8,
    title: "Jesus meets the women of Jerusalem",
    scripture: "Luke 23:27–28",
    meditation:
      "The women weep, and Jesus turns to them with compassion. He sees them, even in his own pain. Pray for those who suffer in our world and are often overlooked.",
  },
  {
    n: 9,
    title: "Jesus falls the third time",
    meditation:
      "He is nearly at the top, and exhausted. Our own weariness is not a sign that God has left us. Offer him the tiredness you carry, and let him meet you in it.",
  },
  {
    n: 10,
    title: "Jesus is stripped of his garments",
    scripture: "John 19:23–24",
    meditation:
      "Everything is taken from him, even his dignity. Yet he remains who he is. Our worth does not come from what we own or how we are treated.",
  },
  {
    n: 11,
    title: "Jesus is nailed to the cross",
    scripture: "Luke 23:33",
    meditation:
      "His hands, which healed and blessed, are fastened to the wood. He gives himself completely. Ask for the grace to offer your hands, your time, and your gifts for others.",
    shroud:
      "On the Shroud, blood stains appear at the wrists and feet.",
  },
  {
    n: 12,
    title: "Jesus dies on the cross",
    scripture: "Luke 23:46",
    meditation:
      "“Father, into your hands I commend my spirit.” He dies as he lived, trusting the Father. Stay a moment in silence before the cross.",
    shroud:
      "The large stain on the right side of the image recalls the lance wound described in John 19:34.",
  },
  {
    n: 13,
    title: "Jesus is taken down from the cross",
    scripture: "John 19:38",
    meditation:
      "His body is placed in the arms of his mother. She holds her son once more. We too are invited to receive Jesus with reverence.",
  },
  {
    n: 14,
    title: "Jesus is laid in the tomb",
    scripture: "John 19:41–42",
    meditation:
      "They wrap his body in linen cloths and lay him in a new tomb. It seems like the end, but the Church waits in hope for the third day.",
    shroud:
      "The Gospels mention linen burial cloths. The Shroud of Turin is a linen cloth that many Christians honor as a reminder of this moment.",
  },
];
