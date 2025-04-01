// latte / frappe / macchiato / mocha
const palette = mmocha;

const default_config = {
  overrideStorage: true,
  temperature: {
    location: "London",
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: palette.maroon,
  },
  disabled: [],
  fastlink: "https://app.raindrop.io",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "essentials",
      background_url: "src/img/banners/cbg-09.gif",
      categories: [
        {
          name: "bookmarks",
          links: [
            {
              name: "youtube",
              url: "https://www.youtube.com/",
              icon: "brand-youtube",
              icon_color: palette.green,
            },
            {
              name: "Gmail",
              url: "https://mail.google.com",
              icon: "brand-gmail",
              icon_color: palette.green,
            },
          ],
        },
        {
          name: "socials",
          links: [
            {
              name: "reddit",
              url: "https://www.reddit.com",
              icon: "brand-reddit",
              icon_color: palette.peach,
            },
            {
              name: "instagram",
              url: "https://www.instagram.com",
              icon: "brand-instagram",
              icon_color: palette.lavender,
            },
            {
              name: "twitter/X",
              url: "https://x.com/home",
              icon: "brand-x",
              icon_color: palette.gray,
            },
          ],
        },
        {
          name: "media",
          links: [
            {
              name: "anilist",
              url: "https://anilist.co/home",
              icon: "brand-funimation",
              icon_color: palette.sky,
            },
            {
              name: "mal",
              url: "https://myanimelist.net",
              icon: "brand-funimation",
              icon_color: palette.blue,
            },
            {
              name: "simkl",
              url: "https://simkl.com/6495165/dashboard",
              icon: "movie",
              icon_color: palette.rosemary,
            },
          ],
        },
      ],
    },
    {
      name: "space",
      background_url: "src/img/banners/cbg-07.gif",
      categories: [
        {
          name: "development",
          links: [
            {
              name: "github",
              url: "https://github.com",
              icon: "brand-github",
              icon_color: palette.gray,
            },
            {
              name: "w3schools",
              url: "https://www.w3schools.com/",
              icon: "code",
              icon_color: palette.green,
            },
            {
              name: "stackoverflow",
              url: "https://stackoverflow.com",
              icon: "brand-stackoverflow",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "high seas",
          links: [
            {
              name: "fitgirl-repacks",
              url: "https://fitgirl-repacks.site",
            },
            {
              name: "steamrip",
              url: "https://steamrip.com",
            },
            {
              name: "fmhy",
              url: "https://fmhy.net",
              icon: "star",
              icon_color: palette.blue,
            },
            {
              name: "megathread",
              url: "https://rentry.org/pgames",
            }
          ],
        },
        {
          name: "resources",
          links: [
            {
              name: "chatgpt",
              url: "https://chatgpt.com",
              icon: "ai",
              icon_color: palette.green,
            },
            {
              name: "pcgamesbenchmark",
              url: "https://www.pcgamebenchmark.com",
              icon: "devices-pc",
              icon_color: palette.teal,
            },
            {
              name: "netflix tech blog",
              url: "https://netflixtechblog.com",
              icon: "brand-netflix",
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },
    /*{
      name: "",
      background_url: "src/img/banners/cbg-08.gif",
      categories: [
        {
          name: "social media",
          links: [
            {
              name: "telegram",
              url: "https://web.telegram.org",
              icon: "brand-telegram",
              icon_color: palette.green,
            },
            {
              name: "facebook",
              url: "https://www.facebook.com",
              icon: "brand-facebook",
              icon_color: palette.peach,
            },
            {
              name: "reddit",
              url: "https://www.reddit.com/r/unixporn",
              icon: "brand-reddit",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "gaming",
          links: [
            {
              name: "IGN",
              url: "https://www.ign.com/account/playlist/library",
              icon: "device-gamepad",
              icon_color: palette.green,
            },
            {
              name: "steam",
              url: "https://store.steampowered.com",
              icon: "brand-steam",
              icon_color: palette.peach,
            },
            {
              name: "epicgames",
              url: "https://store.epicgames.com",
              icon: "brand-fortnite",
              icon_color: palette.red,
            },
            {
              name: "nintendo",
              url: "https://store.nintendo.co.uk",
              icon: "device-nintendo",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "video",
          links: [
            {
              name: "anilist",
              url: "https://anilist.co/home",
              icon: "brand-funimation",
              icon_color: palette.green,
            },
            {
              name: "youtube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: palette.peach,
            },
            {
              name: "patreon",
              url: "https://www.patreon.com",
              icon: "brand-patreon",
              icon_color: palette.red,
            },
            {
              name: "kyivstar",
              url: "https://tv.kyivstar.ua",
              icon: "star-filled",
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },*/
  ],
};

const CONFIG = new Config(default_config, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.green);
