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
    albumType: "Special mini-album",
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
    albumType: "Japanese digital single",
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
    albumType: "Special mini-album",
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

const body = document.querySelector("body");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const header = document.querySelector("header");
const headerNav = header.querySelector("nav");
const headerNavLinks = header.querySelector("ul");
const headerNavMenuBtn = header.querySelector(".menu-btn");
const headerNavMenuIcon = headerNavMenuBtn.querySelector("i");
const membersSection = document.querySelector("#members");
const musicSection = document.querySelector("#music");

const albumsList = musicSection.querySelector(".albums");
const albumShadow = document.querySelector(".album-shadow");
const albumInfo = musicSection.querySelector(".album-info");
const albumInfoImg = albumInfo.querySelector("img");
const albumInfoDate = albumInfo.querySelector("#release-date");
const albumInfoLang = albumInfo.querySelector("#language");
const albumInfoTracklist = albumInfo.querySelector("#tracklist");
const albumInfoTracklistBtn = albumInfo.querySelector("#tracklist-btn");
const tracklistShadow = albumInfo.querySelector(".tracklist-shadow");

const membersList = membersSection.querySelector(".wrapper");
const membersListNames = membersList.querySelectorAll("h2");
const memberProfile = membersSection.querySelector(".profile-wrapper");
const memberProfileName = memberProfile.querySelector("#profile-name");
const memberProfileImg = memberProfile.querySelector("#profile-img");
const memberProfileCloseBtn = memberProfile.querySelector("#prof-close-btn");
const memberProfileBirthName = memberProfile.querySelector(
  "#profile-birth-name"
);
const memberProfileBirthday = memberProfile.querySelector("#profile-birthday");
const memberProfileZodiac = memberProfile.querySelector("#profile-zodiac");
const memberProfilePosition = memberProfile.querySelector("#profile-position");
const memberProfileMbti = memberProfile.querySelector("#profile-mbti");
const memberProfileEmoji = memberProfile.querySelector("#profile-emoji");
const memberProfileNavNames = memberProfile.querySelectorAll(".profile-nav li");

let albumsArr = ``;
for (const property in albums) {
  albumsArr += `<li data-albums>
  <span class="album-title">${property}</span>
  <span class="album-type">${albums[property].albumType}</span>
  </li>`;
}
albumsList.innerHTML = albumsArr;
const dataAlbums = albumsList.querySelectorAll(`[data-albums]`);
dataAlbums.forEach((li) => {
  li.addEventListener("click", showAlbumInfo);
});

function showAlbumInfo(e) {
  if (innerWidth > 1200) {
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
  } else {
    let albumPhoneCard = document.createElement("div");
    albumPhoneCard.classList.add("album-phone", "hidden");
    let name = e.target.querySelector(".album-title").innerText;
    let tracks = ``;

    albums[name].tracklist.forEach((track, i) => {
      tracks += `<li><span>${i + 1}.</span> ${track}</li>`;
    });

    albumPhoneCard.innerHTML = `
      <div class="album-phone">
        <div class="wrapper">
          <header>
              <p class="album-type">${albums[name].albumType}</p>
            <p class="cross">×</p>
          </header>
          <h3>${name} </h3>
          <img src="${albums[name].img}" alt="" />
          <ul>
            <li>
              <span class="desc">Release date:</span>
              <span>${albums[name].date}</span>
            </li>
            <li><span class="desc">Language:</span> <span>${albums[name].language}</span></li>
          </ul>
          <p class="tracklist">Tracklist</p>
          <div class="tracklist-wrapper">
            <ol class="scroll">
              ${tracks}
            </ol>
          </div>
        </div>
      </div>
    `;

    footer.append(albumPhoneCard);

    setTimeout(() => {
      albumPhoneCard.classList.remove("hidden");
      body.style.overflow = `hidden`;
      main.style.overflow = `hidden`;
    }, 50);

    let closeBtn = albumPhoneCard.querySelector(".cross");

    closeBtn.addEventListener("click", () => {
      albumPhoneCard.classList.add("hidden");
      body.removeAttribute("style");
      main.removeAttribute("style");

      setTimeout(() => {
        albumPhoneCard.remove();
      }, 300);
    });
  }
}

function observeTracklist() {
  let albumsTracklistStart = albumInfoTracklist.firstElementChild;
  let albumsTracklistEnd = albumInfoTracklist.lastElementChild;

  let albumsTracklistStartObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          tracklistShadow.classList.add("top");
          tracklistShadow.classList.remove("end");
        } else {
          tracklistShadow.classList.remove("end");
          tracklistShadow.classList.remove("top");
        }
      });
    },
    {
      threshold: 0.9,
    }
  );

  let albumsTracklistEndObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          tracklistShadow.classList.add("end");
          tracklistShadow.classList.remove("top");
        } else {
          tracklistShadow.classList.remove("end");
          tracklistShadow.classList.remove("top");
        }
      });
    },
    {
      threshold: 0.9,
    }
  );

  albumsTracklistStartObserver.observe(albumsTracklistStart);
  albumsTracklistEndObserver.observe(albumsTracklistEnd);
}

function showProfile(e) {
  if (innerWidth > 1200) {
    fillProfile(e.target.innerText);

    membersList.classList.add("hidden");

    setTimeout(() => {
      membersList.classList.add("d-hidden");
      memberProfile.classList.remove("d-hidden");

      setTimeout(() => {
        memberProfile.classList.remove("hidden");
      }, 50);
    }, 150);
  } else {
    let memberPhoneCard = document.createElement("div");
    memberPhoneCard.classList.add("profile-phone", "hidden");

    memberPhoneCard.innerHTML = `
          <div class="wrapper">
            <header>
              <h2 id="profile-name">${e.target.innerText}</h2>
              <p class="cross">×</p>
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

    setTimeout(() => {
      memberPhoneCard.classList.remove("hidden");
      body.style.overflow = `hidden`;
      main.style.overflow = `hidden`;
    }, 50);

    let closeBtn = memberPhoneCard.querySelector(".cross");

    closeBtn.addEventListener("click", () => {
      memberPhoneCard.classList.add("hidden");
      body.removeAttribute("style");
      main.removeAttribute("style");
      setTimeout(() => {
        memberPhoneCard.remove();
      }, 300);
    });
  }
}

function fillProfile(membName) {
  memberProfileName.innerText = membName;
  memberProfileImg.setAttribute("src", membersProfile[membName].img);
  memberProfileBirthName.innerText = membersProfile[membName].birthname;
  memberProfileBirthday.innerText = membersProfile[membName].birthday;
  memberProfileZodiac.innerText = membersProfile[membName].zodiac;
  memberProfilePosition.innerText = membersProfile[membName].position;
  memberProfileMbti.innerText = membersProfile[membName].mbti;
  memberProfileEmoji.innerText = membersProfile[membName].emoji;
  clearActive(memberProfileNavNames);

  memberProfileNavNames.forEach((name) => {
    if (name.innerText == membName) {
      name.classList.add("active");
    }
  });
}

function clearActive(clearArr) {
  clearArr.forEach((name) => {
    name.classList.remove("active");
  });
}

membersListNames.forEach((name) => {
  name.addEventListener("click", (e) => {
    showProfile(e);
  });
});

memberProfileNavNames.forEach((name) => {
  name.addEventListener("click", (e) => {
    memberProfile.classList.add("hidden");

    setTimeout(() => {
      fillProfile(e.target.innerText);
      memberProfile.classList.remove("hidden");
    }, 300);
  });
});

memberProfileCloseBtn.addEventListener("click", () => {
  memberProfile.classList.add("hidden");

  setTimeout(() => {
    membersList.classList.remove("d-hidden");
    memberProfile.classList.add("d-hidden");

    setTimeout(() => {
      membersList.classList.remove("hidden");
    }, 50);
  }, 150);
});

albumInfoTracklistBtn.addEventListener("click", () => {
  albumInfoTracklist.classList.toggle("hidden");
  if (!albumInfoTracklist.classList.contains("hidden")) {
    albumInfoTracklistBtn.innerText = `Hide tracklist`;
    observeTracklist();
  } else {
    albumInfoTracklistBtn.innerText = `Show tracklist`;
  }
});

headerNavMenuBtn.addEventListener("click", () => {
  if (innerWidth > 700) {
    if (headerNav.classList.contains("header")) {
      return;
    }
  }

  headerNavMenuIcon.classList.toggle("fa-bars");
  headerNavMenuIcon.classList.toggle("fa-xmark");

  if (headerNav.classList.contains("active")) {
    headerNav.classList.remove("visible");
    setTimeout(() => {
      headerNav.classList.remove("active");
    }, 200);
  } else {
    headerNav.classList.add("active");
    setTimeout(() => {
      headerNav.classList.add("visible");
    }, 50);
  }
});

headerNavLinks.addEventListener("click", () => {
  headerNav.classList.remove("visible");
  headerNavMenuIcon.classList.add("fa-bars");
  headerNavMenuIcon.classList.remove("fa-xmark");

  setTimeout(() => {
    headerNav.classList.remove("active");
  }, 200);
});

let headerObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        headerNav.classList.add("header");
        if (window.innerWidth > 700) {
          headerNavMenuBtn.classList.add("hidden");
        }
      } else {
        headerNav.classList.remove("header");
        if (window.innerWidth > 700) {
          headerNavMenuBtn.classList.remove("hidden");
        }
      }
    });
  },
  { threshold: 0.2 }
);

headerObserver.observe(header);

let membersSectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        memberProfile.classList.add("hidden", "d-hidden");
        membersList.classList.remove("hidden", "d-hidden");
      }
    });
  },
  { threshold: 0.1 }
);

membersSectionObserver.observe(membersSection);

let musicSectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        clearActive(dataAlbums);
        albumInfo.classList.add("hidden");
      }
    });
  },
  { threshold: 0.1 }
);

musicSectionObserver.observe(musicSection);

let albumsListStart = albumsList.firstElementChild;
let albumsListEnd = albumsList.lastElementChild;

let albumsListStartObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        albumShadow.classList.add("top");
        albumShadow.classList.remove("end");
      } else {
        albumShadow.classList.remove("top");
        albumShadow.classList.remove("end");
      }
    });
  },
  {
    threshold: 0.9,
  }
);

let albumsListEndObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        albumShadow.classList.add("end");
        albumShadow.classList.remove("top");
      } else {
        albumShadow.classList.remove("end");
        albumShadow.classList.remove("top");
      }
    });
  },
  {
    threshold: 0.9,
  }
);

albumsListStartObserver.observe(albumsListStart);
albumsListEndObserver.observe(albumsListEnd);
