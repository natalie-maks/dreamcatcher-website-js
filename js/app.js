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
const albumInfoImg = albumInfo.querySelector("img");
const albumInfoDate = albumInfo.querySelector("#release-date");
const albumInfoLang = albumInfo.querySelector("#language");
const albumInfoTracklist = albumInfo.querySelector("#tracklist");
const albumInfoTracklistBtn = albumInfo.querySelector("#tracklist-btn");
const tracklistShadow = albumInfo.querySelector(".tracklist-shadow");

albumInfoTracklistBtn.addEventListener("click", () => {
  albumInfoTracklist.classList.toggle("hidden");
  if (!albumInfoTracklist.classList.contains("hidden")) {
    albumInfoTracklistBtn.innerText = `Hide tracklist`;
    observeTracklist();
  } else {
    albumInfoTracklistBtn.innerText = `Show tracklist`;
  }
});

function showAlbumInfo(e) {
  clearActive(dataAlbums);
  e.target.classList.add("active");
  let name = e.target.querySelector(".album-title").innerText;

  let tracks = ``;

  albums[name].tracklist.forEach((track, i) => {
    tracks += `<li><span>${i + 1}.</span> ${track}</li>`;
  });
  albumInfo.classList.add("hidden");
  albumInfoTracklist.classList.add("hidden");
  tracklistShadow.classList.remove("hidden");

  setTimeout(() => {
    albumInfoTracklistBtn.innerText = `Show tracklist`;
    albumInfoDate.innerText = albums[name].date;
    albumInfoLang.innerText = albums[name].language;
    albumInfoTracklist.innerHTML = tracks;
    albumInfoImg.setAttribute("src", albums[name].img);
    if (albumInfoTracklist.clientHeight < 200) {
      tracklistShadow.classList.add("hidden");
    }

    albumInfo.classList.remove("hidden");
  }, 200);
}

function observeTracklist() {
  let tracklistStart = albumInfoTracklist.firstElementChild;
  let tracklistEnd = albumInfoTracklist.lastElementChild;

  let startTrackObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          tracklistShadow.classList.remove("end");
          tracklistShadow.classList.remove("top");
        } else {
          tracklistShadow.classList.remove("end");
          tracklistShadow.classList.add("top");
        }
      });
    },
    {
      threshold: 0.9,
    }
  );

  let endTrackObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          tracklistShadow.classList.add("end");
          tracklistShadow.classList.remove("top");
        } else {
          tracklistShadow.classList.remove("end");
          tracklistShadow.classList.add("top");
        }
      });
    },
    {
      threshold: 0.95,
    }
  );

  startTrackObserver.observe(tracklistStart);
  endTrackObserver.observe(tracklistEnd);
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

let albumShadow = document.querySelector(".album-shadow");

let startObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        albumShadow.classList.remove("end");
        albumShadow.classList.remove("top");
      } else {
        albumShadow.classList.add("top");
        albumShadow.classList.remove("end");
      }
    });
  },
  {
    threshold: 0.9,
  }
);

let endObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        albumShadow.classList.add("end");
        albumShadow.classList.remove("top");
      } else {
        albumShadow.classList.remove("end");
        albumShadow.classList.add("top");
      }
    });
  },
  {
    threshold: 1,
  }
);

startObserver.observe(listStart);
endObserver.observe(listEnd);

const membersWrapper = document.querySelector(".members .wrapper");
const profileWrapper = document.querySelector(".members .profile-wrapper");
const profileWrapperName = profileWrapper.querySelector("#profile-name");
const profileWrapperImg = profileWrapper.querySelector("#profile-img");
const profileWrapperCloseBtn = profileWrapper.querySelector("#prof-close-btn");
const profileWrapperBirthName = profileWrapper.querySelector(
  "#profile-birth-name"
);
const profileWrapperBirthday =
  profileWrapper.querySelector("#profile-birthday");
const profileWrapperZodiac = profileWrapper.querySelector("#profile-zodiac");
const profileWrapperPosition =
  profileWrapper.querySelector("#profile-position");
const profileWrapperMbti = profileWrapper.querySelector("#profile-mbti");
const profileWrapperEmoji = profileWrapper.querySelector("#profile-emoji");
const profileWrapperNav = profileWrapper.querySelectorAll(".profile-nav li");

const membersWrapperNames = membersWrapper.querySelectorAll("h2");

profileWrapperCloseBtn.addEventListener("click", () => {
  profileWrapper.classList.add("hidden");

  setTimeout(() => {
    membersWrapper.classList.remove("d-hidden");
    profileWrapper.classList.add("d-hidden");

    setTimeout(() => {
      membersWrapper.classList.remove("hidden");
    }, 50);
  }, 150);
});

membersWrapperNames.forEach((name) => {
  name.addEventListener("click", (e) => {
    if (innerWidth > 1000) {
      fillProfile(e.target.innerText);

      membersWrapper.classList.add("hidden");

      setTimeout(() => {
        membersWrapper.classList.add("d-hidden");
        profileWrapper.classList.remove("d-hidden");

        setTimeout(() => {
          profileWrapper.classList.remove("hidden");
        }, 50);
      }, 150);
    } else {
      const footer = document.querySelector("footer");

      let memberPhoneCard = document.createElement("div");
      memberPhoneCard.classList.add("profile-phone");

      memberPhoneCard.innerHTML = `
   
          <div class="wrapper">
            <header>
              <h2 id="profile-name">${e.target.innerText}</h2>
              <p class="cross" id="prof-close-btn">×</p>
            </header>
            <img src="${
              membersProfile[e.target.innerText].img
            }" id="profile-img" alt="" />
            <ul>
              <li>
                <span class="desc">Birth Name:</span>
                <span id="profile-birth-name">${
                  membersProfile[e.target.innerText].birthname
                }</span>
              </li>
              <li>
                <span class="desc">Birthday:</span>
                <span id="profile-birthday">${
                  membersProfile[e.target.innerText].birthday
                }</span>
              </li>
              <li>
                <span class="desc">Zodiac Sign:</span>
                <span id="profile-zodiac">${
                  membersProfile[e.target.innerText].zodiac
                }</span>
              </li>
              <li>
                <span class="desc">Position:</span>
                <span id="profile-position">
                 ${membersProfile[e.target.innerText].position}
                </span>
              </li>
              <li>
                <span class="desc">MBTI Type:</span>
                <span id="profile-mbti">${
                  membersProfile[e.target.innerText].mbti
                }</span>
              </li>
              <li>
                <span class="desc">Animal Emoji:</span>
                <span id="profile-emoji">${
                  membersProfile[e.target.innerText].emoji
                }</span>
              </li>
            </ul>
          </div>
        
`;
      footer.append(memberPhoneCard);

      let closeBtn = memberPhoneCard.querySelector(".cross");
      closeBtn.addEventListener("click", () => {
        memberPhoneCard.remove();
      });
    }
  });
});

function fillProfile(membName) {
  profileWrapperName.innerText = membName;
  profileWrapperImg.setAttribute("src", membersProfile[membName].img);
  profileWrapperBirthName.innerText = membersProfile[membName].birthname;
  profileWrapperBirthday.innerText = membersProfile[membName].birthday;
  profileWrapperZodiac.innerText = membersProfile[membName].zodiac;
  profileWrapperPosition.innerText = membersProfile[membName].position;
  profileWrapperMbti.innerText = membersProfile[membName].mbti;
  profileWrapperEmoji.innerText = membersProfile[membName].emoji;
  clearActive(profileWrapperNav);

  profileWrapperNav.forEach((name) => {
    console.log(name);
    if (name.innerText == membName) {
      name.classList.add("active");
    }
  });
}

profileWrapperNav.forEach((name) => {
  name.addEventListener("click", (e) => {
    profileWrapper.classList.add("hidden");

    setTimeout(() => {
      fillProfile(e.target.innerText);
      profileWrapper.classList.remove("hidden");
    }, 300);
  });
});

function clearActive(clearArr) {
  clearArr.forEach((name) => {
    name.classList.remove("active");
  });
}

const header = document.querySelector("header");
const headerNav = header.querySelector("nav");

let headerObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        headerNav.classList.add("header");
      } else {
        headerNav.classList.remove("header");
      }
    });
  },
  { threshold: 0.2 }
);

headerObserver.observe(header);

const members = document.querySelector("#members");

let membersObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        profileWrapper.classList.add("hidden", "d-hidden");
        membersWrapper.classList.remove("hidden", "d-hidden");
      }
    });
  },
  { threshold: 0.1 }
);

membersObserver.observe(members);
const music = document.querySelector("#music");

let musicObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log("yes");
      } else {
        console.log("no");
        clearActive(dataAlbums);
        albumInfo.classList.add("hidden");
      }
    });
  },
  { threshold: 0.1 }
);

musicObserver.observe(music);
