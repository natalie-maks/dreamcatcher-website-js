const membersProfile = {
  JIU: {
    birthname: "Kim Min Ji",
    birthday: "May 17, 1994",
    zodiac: "Taurus",
    position: "Leader, Lead Vocalist, Lead Dancer, Visual",
    mbti: "ENFP",
    emoji: "🐰",
    img: "/media/profile-pic/jiu.png",
  },
  SUA: {
    birthname: "Kim Bo Ra",
    birthday: "Aug 10, 1994",
    zodiac: "Leo",
    position: "Main Dancer, Sub Vocalist, Lead Rapper",
    mbti: "ESFJ",
    emoji: "🐥",
    img: "/media/profile-pic/sua.png",
  },
  SIYEON: {
    birthname: "Lee Si Yeon",
    birthday: "Oct 1, 1995",
    zodiac: "Libra",
    position: "Main Vocalist",
    mbti: "ENTP",
    emoji: "🐺",
    img: "/media/profile-pic/siyeon.png",
  },
  HANDONG: {
    birthname: "Han Dong",
    birthday: "Mar 26, 1996",
    zodiac: "Aries",
    position: "Sub Vocalist",
    mbti: "ISFP",
    emoji: "🐱",
    img: "/media/profile-pic/handong.png",
  },
  YOOHYEON: {
    birthname: "Kim Yoo Hyeon",
    birthday: "Jan 7, 1997",
    zodiac: "Capricorn",
    position: "Lead Vocalist",
    mbti: "ENFJ",
    emoji: "🐶",
    img: "/media/profile-pic/yoohyeon.png",
  },
  DAMI: {
    birthname: "Lee Yu Bin",
    birthday: "Mar 7, 1997",
    zodiac: "Pisces",
    position: "Main Rapper, Lead Dancer, Sub Vocalist",
    mbti: "INFJ",
    emoji: "🐼",
    img: "/media/profile-pic/dami.png",
  },
  GAHYEON: {
    birthname: "Lee Ga Hyeon",
    birthday: "Feb 3, 1999",
    zodiac: "Aquarius",
    position: "Lead Rapper, Sub Vocalist, Maknae",
    mbti: "ENFP",
    emoji: "🦊",
    img: "/media/profile-pic/gahyeon.png",
  },
};

const albums = {
  Nightmare: {
    status: "1st single album",
    language: "Korean",
    date: "13.01.17",
    tracklist: ["Welcome to Dream", "Chace Me", "Emotion", "Chace Me (Inst.)"],
  },
  "Fall asleep in the mirror": {
    status: "2nd single album",
    language: "Korean",
    date: "05.04.17",
    tracklist: ["My Toys", "GOOD NIGHT", "Lulluby", "GOOD NIGHT (Inst.)"],
  },
  Prequel: {
    status: "1st mini-album",
    language: "Korean",
    date: "27.07.17",
    tracklist: [
      "Before & After (Intro)",
      "Fly High",
      "Wake Up",
      "Sleep-walking",
      "괜찮아!",
      "Fly High (Inst.)",
    ],
  },
  "Full Moon": {
    status: "1st special single",
    language: "Korean",
    date: "12.01.18",
    tracklist: ["Full Moon", "Full Moon (Inst.)"],
  },
  "Escape the ERA": {
    status: "2nd mini-album",
    language: "Korean",
    date: "10.05.18",
    tracklist: [
      "INSIDE – OUTSIDE (Intro)",
      "YOU AND I",
      "Mayday",
      "Which a star",
      "Scar",
      "YOU AND I (Inst.)",
    ],
  },
  "Alone In The City": {
    status: "3rd mini-album",
    language: "Korean",
    date: "20.09.18",
    tracklist: [
      "Intro",
      "What",
      "Wonderland",
      "Trap",
      "July 7th",
      "What (Inst.)",
    ],
  },
  "What -Japanese ver.-": {
    status: "1st japanese single album",
    language: "Japanese",
    date: "21.11.18",
    tracklist: [
      "What – Japanese Ver.",
      "Chase Me – Japanese Ver.",
      "I Miss You",
    ],
  },
  "Over the Sky": {
    status: "2nd special single",
    language: "Korean",
    date: "16.01.19",
    tracklist: ["Over the Sky", "Over the Sky (Inst.)"],
  },
  "The End of Nightmare": {
    status: "4th mini-album",
    language: "Korean",
    date: "13.02.19",
    tracklist: [
      "Intro",
      "PIRI",
      "Diamond",
      "And there was no one left",
      "Daydream",
      "PIRI (Inst.)",
    ],
  },
  "PIRI ～ 笛を吹け ～ -Japanese ver.-": {
    status: "2nd japanese single album",
    language: "Japanese",
    date: "13.03.19",
    tracklist: [
      "PIRI ~ Fue wo Fuke ~ – Japanese Ver.",
      "Good Night – Japanese Ver.",
      "Wonderland – Japanese Ver.",
    ],
  },
  "The Beginning of the End": {
    status: "1st japanese album",
    language: "Japanese",
    date: "11.09.19",
    tracklist: [
      "Intro",
      "Breaking Out",
      "My Way ~ Kono Michi no Sakie ~",
      "Chase Me – Japanese Ver.",
      "Good Night – Japanese Ver.",
      "Wonderland – Japanese Ver.",
      "Piri ~ Fue wo Fuke ~ – Japanese Ver.",
      "What – Japanese Ver.",
      "I Miss You",
      "Mata Hitori ni Natta – Japanese Ver.",
      "You and I – Japanese Ver.",
      "Outro",
    ],
  },
  "Raid of Dream": {
    status: "special mini-album",
    language: "Korean",
    date: "18.09.19",
    tracklist: [
      "Intro",
      "Deja Vu",
      "The curse of the Spider",
      "Silent Night",
      "Polaris",
      "Deja Vu (Japanese Version) (Only JP Sales)",
    ],
  },
  "Dystopia: The Tree of Language": {
    status: "1st studio album",
    language: "Korean",
    date: "18.02.20",
    tracklist: [
      "Intro",
      "Scream",
      "Tension",
      "Red Sun",
      "Black Or White",
      "Jazz Bar",
      "SAHARA",
      "In The Frozen",
      "Daybreak",
      "Full Moon",
      "Over The Sky (CD only)",
      "Outro",
      "Scream (Inst.)",
      "Paradise (Siyeon Solo)",
    ],
  },
  "Endless Night": {
    status: "3rd japanese single",
    language: "Japanese",
    date: "11.03.20",
    tracklist: [
      "Endless Night",
      "Over The Sky – Japanese Ver.",
      "Silent Night – Japanese Ver.",
    ],
  },
  "R.o.S.E BLUE": {
    status: "3rd special single",
    language: "Korean",
    date: "15.07.20",
    tracklist: ["R.o.S.E BLUE (Prod ESTi)", "R.o.S.E BLUE (Prod ESTi)"],
  },
  "Dystopia: Lose Myself": {
    status: "5th mini-album",
    language: "Korean",
    date: "17.08.20",
    tracklist: [
      "Intro",
      "BOCA",
      "Break The Wall",
      "Can't get you out of my mind",
      "Dear",
      "BOCA (Inst.)",
    ],
  },
  "No More": {
    status: "japanese digital single",
    language: "Japanese",
    date: "20.11.20",
    tracklist: ["No More"],
  },
  "Eclipse (TV Size)": {
    status: "japanese digital single",
    language: "Korean",
    date: "25.12.20",
    tracklist: ["Eclipse (TV Size)"],
  },
  "Dystopia: Road to Utopia": {
    status: "6th mini-album",
    language: "Korean",
    date: "26.01.21",
    tracklist: [
      "Intro",
      "Odd Eye",
      "Wind Blows",
      "Poison Love",
      "4 Memory",
      "New Days",
      "Odd Eye (Inst.)",
    ],
  },
  Eclipse: {
    status: "4th japanese single",
    language: "Japanese",
    date: "24.03.21",
    tracklist: [
      "Eclipse",
      "No More",
      "Don't Light My Fire",
      "Eclipse (Inst.)",
      "No More (Inst.)",
      "Don't Light My Fire (Inst.)",
    ],
  },
  "Summer Holiday": {
    status: "special mini-album",
    language: "Korean",
    date: "30.07.21",
    tracklist: [
      "Intro",
      "BEcause",
      "Airplane",
      "Whistle",
      "Alldaylong",
      "A Heart of Sunflower",
    ],
  },
  "Apocalypse: Save Us": {
    status: "2nd studio album",
    language: "Korean",
    date: "12.04.22",
    tracklist: [
      "Intro : Save Us",
      "Locked Inside A Door",
      "Maison",
      "Starlight",
      "Together",
      "Always (널 위해)",
      "Skit: The Seven Doors",
      "Cherry (Real Miracle) – (JiU solo)",
      "No Dot – (SuA solo)",
      "Entrancing (황흘경 (极夜) – (Siyeon solo)",
      "Winter (한겨울 (寒冬) – (Handong Solo)",
      "For – (Yoohyeon solo)",
      "Beauty Full – (Dami solo)",
      "Playground – (Gahyeon solo)",
    ],
  },
  "Apocalypse: Follow  Us": {
    status: "7th mini-album",
    language: "Korean",
    date: "11.10.22",
    tracklist: [
      "Intro : Chaotical X",
      "Vision",
      "Fairytale",
      "Some Love",
      "Rainy Day (이 비가 그칠 때면)",
      "Outro : Mother Nature",
    ],
  },
};

let list = document.querySelector("ul.albums");
let listStart = list.firstElementChild;
let listEnd = list.lastElementChild;

let shadow = document.querySelector(".shadow");

let startObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log("top");

        shadow.classList.add("top");
        shadow.classList.remove("end");
      } else {
        shadow.classList.remove("end");
        shadow.classList.remove("top");
      }
    });
  },
  {
    threshold: 1,
  }
);

let endObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log("end");
        shadow.classList.add("end");
        shadow.classList.remove("top");
      } else {
        shadow.classList.remove("end");
        shadow.classList.remove("top");
      }
    });
  },
  {
    threshold: 1,
  }
);

startObserver.observe(listStart);
endObserver.observe(listEnd);
