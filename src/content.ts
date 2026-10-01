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
  {
    kind: "youtube",
    id: "2jP2O-uQj5U",
    title: "We Still Can't Explain This Image.",
    source: "Scribbled Saint",
  },
  {
    kind: "youtube",
    id: "DA9unW5A0pk",
    title: "Indisputable Evidence the Shroud of Turin is Real",
    source: "Truthly",
  },
  {
    kind: "link",
    url: "https://ondemand.ewtn.com/Home/Play/en/381-388309",
    title: "The Shroud of Turin",
    source: "EWTN",
    cta: "Watch on EWTN",
  },
];

export const PODCAST: MediaItem[] = [
  {
    kind: "youtube",
    id: "HAbuG-oVq1Q",
    title: "New Evidence for the Shroud of Turin (Fr. Andrew Dalton) | Ep. 383",
    source: "Matt Fradd",
  },
];

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
// Each Station has its own page at /stations/1 ... /stations/14.
// Meditations and prayers: St. Alphonsus Liguori, "The Way of the Cross"
// (public-domain English translation).

export type Station = {
  n: number;
  title: string;
  scripture?: string;
  meditation: string;
  prayer: string;
  shroud?: string;
};

export const STATIONS_SOURCE =
  "Meditations and prayers by St. Alphonsus Liguori, from his Way of the Cross (traditional public-domain English translation).";

export const STATIONS_OPENING = {
  versicle: "We adore Thee, O Christ, and we bless Thee.",
  response: "Because by Thy holy Cross, Thou hast redeemed the world.",
};

export const STATIONS_PREPARATORY_PRAYER =
  "My Lord Jesus Christ, Thou hast made this journey to die for me with love unutterable, and I have so many times unworthily abandoned Thee; but now I love Thee with my whole heart, and because I love Thee, I repent sincerely for ever having offended Thee. Pardon me, my God, and permit me to accompany Thee on this journey. Thou goest to die for love of me; I wish also, my beloved Redeemer, to die for love of Thee. My Jesus, I will live and die always united to Thee.";

// Said after each Station, following the Our Father, Hail Mary, and Glory Be.
export const STATIONS_VERSE = [
  "Dear Jesus, Thou dost go to die",
  "For very love of me:",
  "Ah! let me bear Thee company;",
  "I wish to die with Thee.",
];

export const STATIONS_CLOSING = [
  "After this, say the Our Father, the Hail Mary, and the Glory be to the Father five times, in honour of the Passion of Jesus Christ. Lastly, say one Our Father, Hail Mary, and Glory be to the Father for the intention of the Sovereign Pontiff.",
  "St. Alphonsus Liguori, pray for us! Amen.",
];

export const STATIONS: Station[] = [
  {
    n: 1,
    title: "Jesus is condemned to death",
    scripture: "Mark 15:15",
    meditation:
      "Consider how Jesus, after having been scourged and crowned with thorns, was unjustly condemned by Pilate to die on the Cross.",
    prayer:
      "My adorable Jesus, it was not Pilate, no, it was my sins that condemned Thee to die. I beseech Thee, by the merits of this sorrowful journey, to assist my soul in her journey towards eternity. I love Thee, my beloved Jesus; I repent with my whole heart for having offended Thee. Never permit me to separate myself from Thee again. Grant that I may love Thee always; and then do with me what Thou wilt.",
  },
  {
    n: 2,
    title: "Jesus takes up his cross",
    scripture: "John 19:17",
    meditation:
      "Consider how Jesus, in making this journey with the Cross on His shoulders thought of us, and for us offered to His Father the death He was about to undergo.",
    prayer:
      "My most beloved Jesus, I embrace all the tribulations Thou hast destined for me until death. I beseech Thee, by the merits of the pain Thou didst suffer in carrying Thy Cross, to give me the necessary help to carry mine with perfect patience and resignation. I love Thee, Jesus my love; I repent of having offended Thee. Never permit me to separate myself from Thee again. Grant that I may love Thee always; and then do with me what Thou wilt.",
    shroud:
      "Some researchers read the abrasions on the shoulders of the Shroud's image as consistent with carrying a heavy beam.",
  },
  {
    n: 3,
    title: "Jesus falls the first time",
    meditation:
      "Consider this first fall of Jesus under His Cross. His flesh was torn by the scourges, His head crowned with thorns, and He had lost a great quantity of blood. He was so weakened that he could scarcely walk, and yet he had to carry this great load upon His shoulders. The soldiers struck Him rudely, and thus He fell several times in His journey.",
    prayer:
      "My Jesus, it is not the weight of the Cross, but of my sins, which have made Thee suffer so much pain. Ah! by the merits of this first fall, deliver me from the misfortune of falling into mortal sin. I love Thee, O my Jesus, with my whole heart; I repent of having offended Thee. Never permit me to separate myself from Thee again. Grant that I may love Thee always; and then do with me what Thou wilt.",
  },
  {
    n: 4,
    title: "Jesus meets his mother",
    meditation:
      "Consider the meeting of the Son and the Mother, which took place on this journey. Jesus and Mary looked at each other, and their looks became as so many arrows to wound those hearts which loved each other so tenderly.",
    prayer:
      "My most loving Jesus, by the sorrow Thou didst experience in this meeting, grant me the grace of a truly devoted love for Thy most holy Mother. And thou, my Queen, who wast overwhelmed with sorrow, obtain for me by thy intercession a continual and tender remembrance of the Passion of thy Son. I love Thee, Jesus my love; I repent of ever having offended Thee. Never permit me to offend Thee again. Grant that I may love Thee always; and then do with me what Thou wilt.",
  },
  {
    n: 5,
    title: "Simon of Cyrene helps Jesus carry the cross",
    scripture: "Mark 15:21",
    meditation:
      "Consider how the Jews, seeing that at each step Jesus from weakness was on the point of expiring, and fearing that He would die on the way, when they wished Him to die the ignominious death of the Cross, constrained Simon the Cyrenian to carry the Cross behind our Lord.",
    prayer:
      "My most beloved Jesus, I will not refuse the Cross, as the Cyrenian did; I accept it; I embrace it. I accept in particular the death Thou hast destined for me; with all the pains that may accompany it; I unite it to Thy death, I offer it to Thee. Thou hast died for love of me; I will die for love of Thee, and to please Thee. Help me by Thy grace. I love Thee, Jesus my love; I repent of having offended Thee. Never permit me to offend Thee again. Grant that I may love Thee always; and then do with me what Thou wilt.",
  },
  {
    n: 6,
    title: "Veronica wipes the face of Jesus",
    meditation:
      "Consider how the holy woman named Veronica, seeing Jesus so afflicted, and His face bathed in sweat and blood, presented Him with a towel, with which He wiped His adorable face, leaving on it the impression of His holy countenance.",
    prayer:
      "My most beloved Jesus, Thy face was beautiful before, but in this journey it has lost all its beauty, and wounds and blood have disfigured it. Alas! my soul also was once beautiful, when it received Thy grace in Baptism; but I have disfigured it since by my sins; Thou alone, my Redeemer, canst restore it to its former beauty. Do this by Thy Passion, O Jesus. I repent of having offended Thee. Never permit me to offend Thee again. Grant that I may love Thee always; and then do with me what Thou wilt.",
    shroud:
      "The image of the Holy Face has long inspired Christian art. The face on the Shroud has shaped how many people picture Jesus.",
  },
  {
    n: 7,
    title: "Jesus falls the second time",
    meditation:
      "Consider the second fall of Jesus under the Cross — a fall which renews the pain of all the wounds of the head and members of our afflicted Lord.",
    prayer:
      "My most gentle Jesus, how many times Thou hast pardoned me, and how many times have I fallen again, and begun again to offend Thee! Oh, by the merits of this new fall, give me the necessary help to persevere in Thy grace until death. Grant that in all temptations which assail me I may always commend myself to Thee. I love Thee, Jesus my love; I repent of having offended Thee. Never permit me to offend Thee again. Grant that I may love Thee always; and then do with me what Thou wilt.",
  },
  {
    n: 8,
    title: "Jesus meets the women of Jerusalem",
    scripture: "Luke 23:27–28",
    meditation:
      "Consider how those women wept with compassion at seeing Jesus in such a pitiable state, streaming with blood, as He walked along. But Jesus said to them: Weep not for Me, but for your children.",
    prayer:
      "My Jesus, laden with sorrows, I weep for the offences I have committed against Thee, because of the pains they have deserved, and still more because of the displeasure they have caused Thee, who hast loved me so much. It is Thy love, more than the fear of hell, which causes me to weep for my sins. My Jesus, I love Thee more than myself; I repent of having offended Thee. Never permit me to offend Thee again. Grant that I may love Thee always; and then do with me what Thou wilt.",
  },
  {
    n: 9,
    title: "Jesus falls the third time",
    meditation:
      "Consider the third fall of Jesus Christ. His weakness was extreme, and the cruelty of His executioners was excessive, who tried to hasten His steps when He had scarcely strength to move.",
    prayer:
      "Ah, my outraged Jesus, by the merits of the weakness Thou didst suffer in going to Calvary, give me strength sufficient to conquer all human respect, and all my wicked passions, which have led me to despise Thy friendship. I love Thee, Jesus my love, with my whole heart; I repent of having offended Thee. Never permit me to offend Thee again. Grant that I may love Thee always; and then do with me what Thou wilt.",
  },
  {
    n: 10,
    title: "Jesus is stripped of his garments",
    scripture: "John 19:23–24",
    meditation:
      "Consider the violence with which the executioners stripped Jesus. His inner garments adhered to His torn flesh, and they dragged them off so roughly that the skin came with them. Compassionate your Savior thus cruelly treated, and say to Him:",
    prayer:
      "My innocent Jesus, by the merits of the torment Thou hast felt, help me to strip myself of all affection to things of earth, in order that I may place all my love in Thee, who art so worthy of my love. I love Thee, O Jesus, with my whole heart; I repent of having offended Thee. Never permit me to offend Thee again. Grant that I may love Thee always; and then do with me what Thou wilt.",
  },
  {
    n: 11,
    title: "Jesus is nailed to the cross",
    scripture: "Luke 23:33",
    meditation:
      "Consider how Jesus, after being thrown on the Cross extended His hands, and offered to His Eternal Father the sacrifice of His death for our salvation. These barbarians fastened Him with nails, and then, raising the Cross, allowed Him to die with anguish on this infamous gibbet.",
    prayer:
      "My Jesus! loaded with contempt, nail my heart to Thy feet, that it may ever remain there, to love Thee, and never quit Thee again. I love Thee more than myself; I repent of having offended Thee. Never permit me to offend Thee again. Grant that I may love Thee always; and then do with me what Thou wilt.",
    shroud:
      "On the Shroud, blood stains appear at the wrists and feet.",
  },
  {
    n: 12,
    title: "Jesus dies on the cross",
    scripture: "Luke 23:46",
    meditation:
      "Consider how thy Jesus, after three hours’ Agony on the Cross, consumed at length with anguish, abandons Himself to the weight of His body, bows His head, and dies.",
    prayer:
      "O my dying Jesus, I kiss devoutly the Cross on which Thou didst die for love of me. I have merited by my sins to die a miserable death; but Thy death is my hope. Ah, by the merits of Thy death, give me grace to die, embracing Thy feet, and burning with love for Thee. I commit my soul into Thy hands. I love Thee with my whole heart; I repent of ever having offended Thee. Never permit me to offend Thee again. Grant that I may love Thee always; and then do with me what Thou wilt.",
    shroud:
      "The large stain on the right side of the image recalls the lance wound described in John 19:34.",
  },
  {
    n: 13,
    title: "Jesus is taken down from the cross",
    scripture: "John 19:38",
    meditation:
      "Consider how, after the death of our Lord, two of His disciples, Joseph and Nicodemus, took Him down from the Cross, and placed Him in the arms of His afflicted Mother, who received Him with unutterable tenderness, and pressed Him to her bosom.",
    prayer:
      "O Mother of sorrow, for the love of this Son, accept me for thy servant, and pray to Him for me. And Thou, my Redeemer, since Thou hast died for me, permit me to love Thee; for I wish but Thee, and nothing more. I love Thee, my Jesus, and I repent of ever having offended Thee. Never permit me to offend Thee again. Grant that I may love Thee always; and then do with me what Thou wilt.",
  },
  {
    n: 14,
    title: "Jesus is laid in the tomb",
    scripture: "John 19:41–42",
    meditation:
      "Consider how the disciples carried the body of Jesus to bury it, accompanied by His holy Mother, who arranged it in the sepulchre with her own hands. They then closed the tomb, and all withdrew.",
    prayer:
      "Oh, my buried Jesus, I kiss the stone that encloses Thee. But Thou didst rise again the third day. I beseech Thee, by Thy resurrection, make me rise glorious with Thee at the last day, to be always united with Thee in heaven, to praise Thee and love Thee forever. I love Thee, and I repent of ever having offended Thee. Never permit me to offend Thee again. Grant that I may love Thee always; and then do with me what Thou wilt.",
    shroud:
      "The Gospels mention linen burial cloths. The Shroud of Turin is a linen cloth that many Christians honor as a reminder of this moment.",
  },
];
