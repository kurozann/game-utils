const Func = require("@itsukichan/functions");

module.exports = {
  asahotak: async () => {
    const item = await Func.fetchJson("https://raw.githubusercontent.com/Itsukichann/database/refs/heads/main/asahotak.json");
    return Func.pickRandom(item);
  },

  caklontong: async () => {
    const item = await Func.fetchJson("https://raw.githubusercontent.com/Itsukichann/database/refs/heads/main/caklontong.json");
    return Func.pickRandom(item);
  },

  family100: async () => {
    const item = await Func.fetchJson("https://raw.githubusercontent.com/Itsukichann/database/refs/heads/main/family100.json");
    return Func.pickRandom(item);
  },

  siapakahaku: async () => {
    const item = await Func.fetchJson("https://raw.githubusercontent.com/Itsukichann/database/refs/heads/main/siapakahaku.json");
    return Func.pickRandom(item);
  },

  susunkata: async () => {
    const item = await Func.fetchJson("https://raw.githubusercontent.com/Itsukichann/database/refs/heads/main/susunkata.json");
    return Func.pickRandom(item);
  },

  tekateki: async () => {
    const item = await Func.fetchJson("https://raw.githubusercontent.com/Itsukichann/database/refs/heads/main/tekateki.json");
    return Func.pickRandom(item);
  },

  tebakanime: async () => {
    const item = await Func.fetchJson("https://raw.githubusercontent.com/Itsukichann/database/refs/heads/main/tebakanime.json");
    return Func.pickRandom(item);
  },

  tebakbendera: async () => {
    const item = await Func.fetchJson("https://raw.githubusercontent.com/Itsukichann/database/refs/heads/main/tebakbendera.json");
    return Func.pickRandom(item);
  },

  tebakchara: async () => {
    const item = await Func.fetchJson("https://raw.githubusercontent.com/Itsukichann/database/refs/heads/main/tebakchara.json");
    return Func.pickRandom(item);
  },

  tebakhewan: async () => {
    const item = await Func.fetchJson("https://raw.githubusercontent.com/Itsukichann/database/refs/heads/main/tebakhewan.json");
    return Func.pickRandom(item);
  },

  tebakgambar: async () => {
    const item = await Func.fetchJson("https://raw.githubusercontent.com/Itsukichann/database/refs/heads/main/tebakgambar.json");
    return Func.pickRandom(item);
  },

  tebakgame: async () => {
    const item = await Func.fetchJson("https://raw.githubusercontent.com/Itsukichann/database/refs/heads/main/tebakgame.json");
    return Func.pickRandom(item);
  },

  tebakjkt48: async () => {
    const item = await Func.fetchJson("https://raw.githubusercontent.com/Itsukichann/database/refs/heads/main/tebakjkt48.json");
    return Func.pickRandom(item);
  },

  tebakkata: async () => {
    const item = await Func.fetchJson("https://raw.githubusercontent.com/Itsukichann/database/refs/heads/main/tebakkata.json");
    return Func.pickRandom(item);
  },

  tebakkimia: async () => {
    const item = await Func.fetchJson("https://raw.githubusercontent.com/Itsukichann/database/refs/heads/main/tebakkimia.json");
    return Func.pickRandom(item);
  },

  tebaklagu: async () => {
    const item = await Func.fetchJson("https://raw.githubusercontent.com/Itsukichann/database/refs/heads/main/tebaklagu.json");
    return Func.pickRandom(item);
  },

  tebaklirik: async () => {
    const item = await Func.fetchJson("https://raw.githubusercontent.com/Itsukichann/database/refs/heads/main/tebaklirik.json");
    return Func.pickRandom(item);
  },

  tebaklogo: async () => {
    const item = await Func.fetchJson("https://raw.githubusercontent.com/Itsukichann/database/refs/heads/main/tebaklogo.json");
    return Func.pickRandom(item);
  },

  tebaktebakan: async () => {
    const item = await Func.fetchJson("https://raw.githubusercontent.com/Itsukichann/database/refs/heads/main/tebaktebakan.json");
    return Func.pickRandom(item);
  }
};