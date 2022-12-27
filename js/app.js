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
  "Apocalypse: Follow Us": {
    albumType: "7th mini-album",
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
    img: "/media/album-covers/apocalypse-follow-us.png",
  },
  "Apocalypse: Save Us": {
    albumType: "2nd studio album",
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
    img: "/media/album-covers/apocalypse-save-us.png",
  },
  "Summer Holiday": {
    albumType: "special mini-album",
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
    img: "/media/album-covers/summer-holiday.png",
  },
  Eclipse: {
    albumType: "4th japanese single",
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
    img: "/media/album-covers/eclipse.png",
  },
  "Dystopia: Road to Utopia": {
    albumType: "6th mini-album",
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
    img: "/media/album-covers/dystopia-road-to-utopia.png",
  },
  "No More": {
    albumType: "japanese digital single",
    language: "Japanese",
    date: "20.11.20",
    tracklist: ["No More"],
    img: "/media/album-covers/no-more.png",
  },
  "Dystopia: Lose Myself": {
    albumType: "5th mini-album",
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
    img: "/media/album-covers/dystopia-lose-myself.png",
  },
  "R.o.S.E BLUE": {
    albumType: "3rd special single",
    language: "Korean",
    date: "15.07.20",
    tracklist: ["R.o.S.E BLUE (Prod ESTi)", "R.o.S.E BLUE (Prod ESTi)"],
    img: "/media/album-covers/rose-blue.png",
  },
  "Endless Night": {
    albumType: "3rd japanese single",
    language: "Japanese",
    date: "11.03.20",
    tracklist: [
      "Endless Night",
      "Over The Sky – Japanese Ver.",
      "Silent Night – Japanese Ver.",
    ],
    img: "/media/album-covers/endless-night.png",
  },
  "Dystopia: The Tree of Language": {
    albumType: "1st studio album",
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
    img: "/media/album-covers/dystopia-the-tree-of-language.png",
  },
  "Raid of Dream": {
    albumType: "special mini-album",
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
    img: "/media/album-covers/raid-of-dream.png",
  },
  "The Beginning of the End": {
    albumType: "1st japanese album",
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
    img: "/media/album-covers/the-beginning-of-the-end.png",
  },
  "PIRI ～ 笛を吹け ～ -Japanese ver.-": {
    albumType: "2nd japanese single album",
    language: "Japanese",
    date: "13.03.19",
    tracklist: [
      "PIRI ~ Fue wo Fuke ~ – Japanese Ver.",
      "Good Night – Japanese Ver.",
      "Wonderland – Japanese Ver.",
    ],
    img: "/media/album-covers/piri-japanese-ver.png",
  },
  "The End of Nightmare": {
    albumType: "4th mini-album",
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
    img: "/media/album-covers/the-end-of-nightmare.png",
  },
  "Over the Sky": {
    albumType: "2nd special single",
    language: "Korean",
    date: "16.01.19",
    tracklist: ["Over the Sky", "Over the Sky (Inst.)"],
    img: "/media/album-covers/over-the-sky.png",
  },
  "What -Japanese ver.-": {
    albumType: "1st japanese single album",
    language: "Japanese",
    date: "21.11.18",
    tracklist: [
      "What – Japanese Ver.",
      "Chase Me – Japanese Ver.",
      "I Miss You",
    ],
    img: "/media/album-covers/what-japanese-ver.png",
  },
  "Alone In The City": {
    albumType: "3rd mini-album",
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
    img: "/media/album-covers/alone-in-the-city.png",
  },
  "Escape the ERA": {
    albumType: "2nd mini-album",
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
    img: "/media/album-covers/escape-the-era.png",
  },
  "Full Moon": {
    albumType: "1st special single",
    language: "Korean",
    date: "12.01.18",
    tracklist: ["Full Moon", "Full Moon (Inst.)"],
    img: "/media/album-covers/full-moon.png",
  },
  Prequel: {
    albumType: "1st mini-album",
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
    img: "/media/album-covers/prequel.png",
  },
  "Fall asleep in the mirror": {
    albumType: "2nd single album",
    language: "Korean",
    date: "05.04.17",
    tracklist: ["My Toys", "GOOD NIGHT", "Lulluby", "GOOD NIGHT (Inst.)"],
    img: "/media/album-covers/fall-asleep-in-the-mirror.png",
  },
  Nightmare: {
    albumType: "1st single album",
    language: "Korean",
    date: "13.01.17",
    tracklist: ["Welcome to Dream", "Chace Me", "Emotion", "Chace Me (Inst.)"],
    img: "/media/album-covers/nightmare.png",
  },
};

const albumInfo = document.querySelector("section.music .album-info");

function showAlbumInfo(e) {
  let name = e.target.querySelector(".album-title").innerText;

  let tracks = ``;

  albums[name].tracklist.forEach((track, i) => {
    tracks += `<li><span>${i + 1}.</span> ${track}</li>`;
  });
  albumInfo.classList.add("hidden");

  setTimeout(() => {
    albumInfo.innerHTML = `
  <img src="${albums[name].img}" alt="" />
          <ul>
            <li>
              <span class="desc">Release date:</span> <span> ${albums[name].date} </span>
            </li>
            <li><span class="desc">Language:</span> <span> ${albums[name].language} </span></li>
          </ul>
          <button id="tracklist-btn">Show tracklist</button>
          <ol class="hidden">${tracks}</ol>
  `;
    let tracklistBtn = document.getElementById("tracklist-btn");
    tracklistBtn.addEventListener("click", () => {
      const list = albumInfo.querySelector("ol");
      list.classList.toggle("hidden");
      if (!list.classList.contains("hidden")) {
        tracklistBtn.innerText = `Hide tracklist`;
      } else {
        tracklistBtn.innerText = `Show tracklist`;
      }
    });
    albumInfo.classList.remove("hidden");
  }, 150);
}

let albumsArr = ``;

for (const property in albums) {
  albumsArr += `<li data-albums>
  <span class="album-title">${property}</span>
  <span class="album-type">${albums[property].albumType}</span>
  </li>`;
}

const albumsList = document.getElementById("albums");

albumsList.innerHTML = albumsArr;

const dataAlbums = albumsList.querySelectorAll(`[data-albums]`);

dataAlbums.forEach((li) => {
  li.addEventListener("click", showAlbumInfo);
});

let list = document.querySelector("ul.albums");
let listStart = list.firstElementChild;
let listEnd = list.lastElementChild;

let shadow = document.querySelector(".shadow");

let startObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
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
