const astronauts = [
  {
    id: "aster",
    name: "Aster",
    gender: "boy",
    skinTone: "medium",
    nationality: "Kenyan",
    bio: "Aster is a curious explorer who loves teaching others about planets and the science of space travel.",
    missions: ["ISS research missions", "Earth observation studies"],
    facts: ["Studies how Earth systems connect with climate science.", "Enjoys learning how satellites help protect life on Earth."],
    photo: {
      url: "https://images-assets.nasa.gov/image/iss056e193341/iss056e193341~orig.jpg",
      caption: "Earth from orbit, seen by astronauts aboard the International Space Station.",
      source: "NASA/JPL",
      sourceUrl: "https://images.nasa.gov/details-iss056e193341"
    }
  },
  {
    id: "luna",
    name: "Luna",
    gender: "girl",
    skinTone: "light",
    nationality: "Brazilian",
    bio: "Luna studies planetary atmospheres and loves communicating science in friendly, simple ways.",
    missions: ["Mars atmosphere modeling", "Exoplanet research"],
    facts: ["Enjoys comparing Earth with other worlds.", "Believes space science should be understandable to everyone."],
    photo: null
  },
  {
    id: "omar",
    name: "Omar",
    gender: "boy",
    skinTone: "deep",
    nationality: "Jordanian",
    bio: "Omar is fascinated by satellites, telescopes, and how machines help scientists answer cosmic questions.",
    missions: ["Remote sensing campaigns", "Space telescope support"],
    facts: ["Loves learning how tools measure distant stars.", "Studies how data from space helps people on Earth."],
    photo: null
  },
  {
    id: "sofia",
    name: "Sofia",
    gender: "girl",
    skinTone: "warm",
    nationality: "Mexican",
    bio: "Sofia focuses on the Moon, Mars, and how humans plan long-term exploration of other worlds.",
    missions: ["Lunar surface planning", "Mars simulation projects"],
    facts: ["Interested in habitats for future explorers.", "Learns how astronauts solve problems in extreme environments."],
    photo: null
  },
  {
    id: "kai",
    name: "Kai",
    gender: "boy",
    skinTone: "medium-dark",
    nationality: "Japanese",
    bio: "Kai loves black holes, galaxies, and time itself, always asking what the universe is made of.",
    missions: ["Deep field observations", "Galactic structure studies"],
    facts: ["Finds the idea of gravity warping space-time extraordinary.", "Believes every question in astronomy can start with curiosity."],
    photo: null
  },
  {
    id: "nia",
    name: "Nia",
    gender: "girl",
    skinTone: "deep",
    nationality: "Nigerian",
    bio: "Nia studies how humans can live sustainably beyond Earth and how space technology helps all life on Earth.",
    missions: ["Life support research", "Earth sciences"],
    facts: ["Interested in closed-loop habitats.", "Uses data science to compare Earth and other planetary environments."],
    photo: null
  }
];

const spaceEntries = [
  {
    id: "earth",
    category: "planets",
    name: "Earth",
    summary: "Our home planet, a water-rich world with a protective atmosphere and active life.",
    description: "Earth is the third planet from the Sun and the only known world with abundant liquid water on the surface. It has a dynamic atmosphere, liquid oceans, continents, seasons, and a biosphere that supports countless life forms.",
    science: [
      "Earth is about 4.54 billion years old.",
      "Its atmosphere is mostly nitrogen and oxygen.",
      "Earth’s magnetic field helps protect the planet from harmful solar particles."
    ],
    funFact: "From space, Earth often appears as a blue marble because oceans cover most of the surface.",
    openQuestion: "Scientists are still studying how life began, how ecosystems remain resilient, and how climate patterns may change in the future.",
    image: {
      url: "https://images-assets.nasa.gov/image/iss056e193341/iss056e193341~orig.jpg",
      caption: "Earth from orbit, photographed by astronauts aboard the International Space Station.",
      source: "NASA / JPL",
      sourceUrl: "https://images.nasa.gov/details-iss056e193341"
    }
  },
  {
    id: "mars",
    category: "planets",
    name: "Mars",
    summary: "A cold desert world with giant volcanoes, canyons, and evidence of ancient water.",
    description: "Mars is a rocky planet with a thin atmosphere and dramatic landscapes. Scientists study it because it may once have had rivers, lakes, and conditions that could support microbial life.",
    science: [
      "Mars is called the Red Planet because iron oxide dust covers much of its surface.",
      "Olympus Mons is the tallest volcano in the solar system.",
      "Mars has seasons, polar ice caps, and dust storms."
    ],
    funFact: "A day on Mars is only slightly longer than a day on Earth.",
    openQuestion: "Researchers are still trying to understand whether Mars ever supported life and how best to send humans there.",
    image: {
      url: "https://images-assets.nasa.gov/image/PIA00507/PIA00507~orig.jpg",
      caption: "Mars as seen by Viking 1 in a global mosaic image.",
      source: "NASA / JPL",
      sourceUrl: "https://images.nasa.gov/details-PIA00507"
    }
  },
  {
    id: "jupiter",
    category: "planets",
    name: "Jupiter",
    summary: "The biggest planet in our solar system, famous for its storms and colorful bands.",
    description: "Jupiter is a gas giant with intense storms and a massive magnetic field. It is surrounded by many moons, including Europa and Ganymede, which are scientifically important.",
    science: [
      "Jupiter is more than 11 times wider than Earth.",
      "The Great Red Spot is a giant storm that has lasted for centuries.",
      "Jupiter’s gravity helps shape the asteroid and comet environment in the outer solar system."
    ],
    funFact: "Jupiter is so big that more than 1,300 Earths could fit inside it.",
    openQuestion: "Scientists are still studying Jupiter’s deep interior, magnetic field, and the chemistry of its atmosphere.",
    image: {
      url: "https://images-assets.nasa.gov/image/PIA02873/PIA02873~orig.jpg",
      caption: "Jupiter, captured by the Voyager 1 spacecraft.",
      source: "NASA / JPL",
      sourceUrl: "https://images.nasa.gov/details-PIA02873"
    }
  },
  {
    id: "saturn",
    category: "planets",
    name: "Saturn",
    summary: "A ringed giant with beautiful icy rings and many moons.",
    description: "Saturn is a gas giant known for its wide rings, which are made mostly of ice and rock. It has many moons, some with strange surface features and underground oceans.",
    science: [
      "Saturn’s rings are incredibly wide but surprisingly thin.",
      "It is less dense than water.",
      "Titan, one of its moons, has an atmosphere thicker than Earth’s."
    ],
    funFact: "Saturn would float in a giant enough ocean because its average density is low.",
    openQuestion: "Scientists are still studying the chemistry of Titan and the origin of Saturn’s ring system.",
    image: {
      url: "https://images-assets.nasa.gov/image/PIA17171/PIA17171~orig.jpg",
      caption: "Saturn and its rings, imaged by the Cassini spacecraft.",
      source: "NASA / JPL",
      sourceUrl: "https://images.nasa.gov/details-PIA17171"
    }
  },
  {
    id: "moon",
    category: "moons",
    name: "Moon",
    orbiting: "Earth",
    summary: "Earth’s companion, shaping tides and the rhythm of our night sky.",
    description: "The Moon is Earth’s natural satellite. It affects ocean tides and has been central to human culture, exploration, and science. It is also a place where future missions may return or build lunar bases.",
    science: [
      "The Moon is about 1/4 the size of Earth.",
      "It has no atmosphere, so there is no weather to smooth its surface.",
      "The far side is different from the near side in appearance and geology."
    ],
    funFact: "The Moon is slowly drifting away from Earth by a few centimeters each year.",
    openQuestion: "Scientists are still studying the Moon’s early history and whether ice exists in permanently shaded craters.",
    image: {
      url: "https://images-assets.nasa.gov/image/PIA00405/PIA00405~orig.jpg",
      caption: "The Moon as seen from lunar orbit during the Apollo era.",
      source: "NASA / JPL",
      sourceUrl: "https://images.nasa.gov/details-PIA00405"
    }
  },
  {
    id: "europa",
    category: "moons",
    name: "Europa",
    orbiting: "Jupiter",
    summary: "An icy moon that may hide a deep ocean beneath its frozen shell.",
    description: "Europa is one of Jupiter’s largest moons. Scientists believe it may have a salty ocean underneath an icy crust, making it a prime place to look for signs of habitability beyond Earth.",
    science: [
      "Europa’s surface is mostly ice.",
      "Tidal forces from Jupiter may heat the ocean below the crust.",
      "Its ocean may be in contact with rock, which matters for chemistry."
    ],
    funFact: "Europa’s icy shell is broken and cracked, like a moving puzzle of ice.",
    openQuestion: "Scientists still need to confirm whether Europa’s ocean is deep, active, and chemically suitable for life.",
    image: null
  },
  {
    id: "titan",
    category: "moons",
    name: "Titan",
    orbiting: "Saturn",
    summary: "A hazy moon with lakes, rain, and a thick atmosphere.",
    description: "Titan is Saturn’s largest moon and the only moon in the solar system with a dense atmosphere. It has liquid methane lakes and a surface that is unlike any other world in our neighborhood.",
    science: [
      "Titan has an atmosphere rich in nitrogen, similar to early Earth.",
      "Methane cycles between the atmosphere and surface like water on Earth.",
      "It may have a subsurface ocean of water and other materials."
    ],
    funFact: "Titan is one of the few places in the solar system where lakes and rivers of liquids exist on the surface.",
    openQuestion: "Researchers are still studying Titan’s chemistry and whether it could host exotic forms of life.",
    image: null
  },
  {
    id: "ceres",
    category: "small-bodies",
    name: "Ceres",
    summary: "The largest object in the asteroid belt, also thought to contain water-rich minerals.",
    description: "Ceres is a dwarf planet in the asteroid belt between Mars and Jupiter. Its bright salt deposits and possible subsurface brines make it a fascinating place for planetary scientists.",
    science: [
      "Ceres is about 940 km across.",
      "It may have cryovolcanic activity or brines beneath the surface.",
      "It contains water in various forms."
    ],
    funFact: "Ceres has a bright white spot in some regions that scientists still analyze.",
    openQuestion: "Scientists are still investigating how much water-rich material Ceres contains and how it formed.",
    image: null
  },
  {
    id: "vesta",
    category: "small-bodies",
    name: "Vesta",
    summary: "A large rocky asteroid with a layered interior, like a small protoplanet.",
    description: "Vesta is one of the largest bodies in the asteroid belt and has a differentiated interior much like a small planet. It helps scientists understand how rocky planets formed.",
    science: [
      "Vesta is large enough to be classified as a protoplanet.",
      "It has a giant impact basin and a layered crust.",
      "It shows signs of heating and melting early in solar system history."
    ],
    funFact: "Vesta is thought to be the source of many meteorites that fall to Earth.",
    openQuestion: "Researchers are still figuring out how much material from Vesta reached Earth and early planetary systems.",
    image: null
  },
  {
    id: "iss",
    category: "satellites-and-space-stations",
    name: "International Space Station (ISS)",
    summary: "A human-made laboratory orbiting Earth, where international crews study life, physics, and Earth systems.",
    description: "The ISS is a multinational research laboratory in low Earth orbit. It supports experiments in biology, medicine, materials, engineering, and Earth observation, helping us learn how humans can live and work in space.",
    science: [
      "The ISS orbits Earth about every 90 minutes.",
      "It has been continuously occupied for years.",
      "It supports many scientific experiments that would not be possible on Earth."
    ],
    funFact: "The ISS travels at more than 28,000 kilometers per hour.",
    openQuestion: "Scientists are still investigating how long-duration spaceflight affects the human body and how to support sustainable life in orbit.",
    image: {
      url: "https://images-assets.nasa.gov/image/iss052e184650/iss052e184650~orig.jpg",
      caption: "The International Space Station in orbit, photographed from a visiting spacecraft.",
      source: "NASA",
      sourceUrl: "https://images.nasa.gov/details-iss052e184650"
    }
  },
  {
    id: "hubble",
    category: "telescopes",
    name: "Hubble Space Telescope",
    summary: "A space observatory that transformed our understanding of the universe.",
    description: "Hubble orbits Earth above the atmosphere, allowing it to take extremely sharp images of stars, galaxies, and nebulae. It has contributed to major discoveries about the universe’s age, expansion rate, and composition.",
    science: [
      "Hubble has helped measure the rate at which the universe is expanding.",
      "It has captured deep-field images showing galaxies from the early universe.",
      "It studies both nearby and distant cosmic objects."
    ],
    funFact: "Hubble has helped refine our understanding of dark energy and cosmic expansion.",
    openQuestion: "Scientists are still measuring how fast the universe expands and what dark energy actually is.",
    image: null
  },
  {
    id: "jwst",
    category: "telescopes",
    name: "James Webb Space Telescope",
    summary: "A powerful infrared telescope designed to look deeper into the universe and earlier in time.",
    description: "The James Webb Space Telescope is a highly sensitive observatory that studies the earliest galaxies, exoplanets, and the chemistry of star-forming regions. It observes wavelengths that are blocked by Earth’s atmosphere.",
    science: [
      "Webb is optimized for infrared light.",
      "It can study distant galaxies from a time when the universe was young.",
      "It also helps identify molecules in exoplanet atmospheres."
    ],
    funFact: "Webb is positioned far from Earth to stay cold and stable while observing faint infrared light.",
    openQuestion: "Scientists are still learning how the first galaxies formed and how water and chemistry developed in protoplanetary systems.",
    image: null
  },
  {
    id: "falcon-9",
    category: "rockets",
    name: "Falcon 9",
    summary: "A reusable rocket system used for cargo, crew, and satellite missions.",
    description: "Falcon 9 is a launch vehicle developed by SpaceX. It is famous for its reusable first stage, which can land and be flown again, lowering launch costs and enabling more frequent missions.",
    science: [
      "Reusable rocketry changes the economics of spaceflight.",
      "Launch systems are designed to survive extreme heat and pressure.",
      "Scientific payloads from Earth can reach orbit with greater frequency."
    ],
    funFact: "Some Falcon 9 first stages have flown multiple missions successfully.",
    openQuestion: "Scientists and engineers are still improving reusability, safety, and the efficiency of launch systems.",
    image: null
  },
  {
    id: "voyager-1",
    category: "spacecraft-and-missions",
    name: "Voyager 1",
    summary: "A deep-space spacecraft that continues to send data from interstellar space.",
    description: "Voyager 1 is one of humanity’s most distant robotic explorers. It has crossed into interstellar space and continues to send information about the sun’s influence and the space beyond our solar system.",
    science: [
      "Voyager 1 is still transmitting data from beyond the heliosphere.",
      "It carries golden records containing messages from Earth.",
      "It helped scientists learn more about the outer planets."
    ],
    funFact: "Voyager 1 is moving faster than any human-made object ever launched.",
    openQuestion: "Scientists are still studying the boundary between the solar system and interstellar space.",
    image: null
  },
  {
    id: "perseverance",
    category: "spacecraft-and-missions",
    name: "Perseverance Rover",
    summary: "A Mars rover collecting samples for future return to Earth.",
    description: "Perseverance is a robotic explorer on Mars designed to seek signs of ancient life, study geology, and prepare for future human exploration. It carries instruments for studying rocks, soil, and atmosphere.",
    science: [
      "Perseverance is exploring Jezero Crater, an ancient lake region.",
      "It can generate oxygen from Mars’ carbon dioxide atmosphere.",
      "It is collecting rock and soil samples for possible future return missions."
    ],
    funFact: "Perseverance is also testing technologies that could help future astronauts survive on Mars.",
    openQuestion: "Scientists are still studying whether ancient Mars environments were habitable and how to preserve samples for later study.",
    image: null
  },
  {
    id: "milky-way",
    category: "galaxies",
    name: "Milky Way",
    summary: "Our home galaxy, a vast spiral system containing billions of stars, gas, dust, and planets.",
    description: "The Milky Way is the galaxy we live in. It contains the Sun and its planetary system, along with an enormous collection of stars, star clusters, nebulae, and dark matter.",
    science: [
      "The Milky Way is a barred spiral galaxy.",
      "It contains hundreds of billions of stars.",
      "The center contains a supermassive black hole called Sagittarius A*."
    ],
    funFact: "From Earth, the Milky Way appears as a pale band across the night sky.",
    openQuestion: "Scientists are still studying the galaxy’s exact shape, dark matter, and evolution over time.",
    image: null
  },
  {
    id: "andromeda",
    category: "galaxies",
    name: "Andromeda Galaxy",
    summary: "A nearby giant galaxy that will eventually collide with the Milky Way.",
    description: "Andromeda is the nearest large galaxy to the Milky Way. It is visible to the naked eye from dark skies and is expected to merge with our galaxy in the distant future.",
    science: [
      "Andromeda is about 2.5 million light-years away.",
      "It is larger than the Milky Way in size.",
      "It contains trillions of stars."
    ],
    funFact: "In the far future, the Milky Way and Andromeda may merge into one larger galaxy.",
    openQuestion: "Scientists are still modeling how galaxies interact and merge across billions of years.",
    image: null
  },
  {
    id: "sagittarius-a",
    category: "black-holes",
    name: "Sagittarius A*",
    summary: "The supermassive black hole at the center of the Milky Way.",
    description: "Sagittarius A* is the compact source at the center of our galaxy. It is a supermassive black hole believed to contain millions of solar masses and to influence the motion of nearby stars.",
    science: [
      "It is located near the center of the Milky Way.",
      "Its mass is millions of times greater than the Sun’s.",
      "It warps space-time and traps light beyond its event horizon."
    ],
    funFact: "Even though it is huge, it is still far away by astronomical standards and appears tiny from Earth.",
    openQuestion: "Scientists are still trying to understand black hole accretion, jets, and the exact physics of gravity near the event horizon.",
    image: null
  }
];

const factAndQuestionList = [
  "Space is mostly empty, but it is full of structure, motion, and energy.",
  "The Sun is a star, and it provides the light and heat that make life possible on Earth.",
  "The universe is expanding, meaning distant galaxies are moving away from us.",
  "Gravity can bend space and time, not just pull objects downward.",
  "Black holes are not giant cosmic vacuum cleaners; they are regions where gravity is extremely intense.",
  "Mars once had rivers, lakes, and a wetter climate in its ancient past."
];

const openQuestions = [
  "What exactly is dark matter, and how does it shape galaxies?",
  "What is dark energy, and why is the universe’s expansion accelerating?",
  "Could life exist under the ice of Europa or in the methane lakes of Titan?",
  "How did the first stars and galaxies form after the Big Bang?",
  "Are there other biospheres or intelligent civilizations elsewhere in the universe?",
  "How can humans safely live on the Moon and Mars for long periods?"
];

const filters = [
  { key: "all", label: "All" },
  { key: "planets", label: "Planets" },
  { key: "moons", label: "Moons" },
  { key: "small-bodies", label: "Small Bodies" },
  { key: "satellites-and-space-stations", label: "Satellites & Space Stations" },
  { key: "telescopes", label: "Telescopes" },
  { key: "rockets", label: "Rockets" },
  { key: "spacecraft-and-missions", label: "Spacecraft & Missions" },
  { key: "galaxies", label: "Galaxies" },
  { key: "black-holes", label: "Black Holes" }
];

let selectedFilter = "all";
let selectedObjectId = "earth";
let selectedAstronautId = "aster";
let currentName = "Aster";

const startScreen = document.getElementById("startScreen");
const startBtn = document.getElementById("startBtn");
const astronautGrid = document.getElementById("astronautGrid");
const directoryList = document.getElementById("directoryList");
const objectProfile = document.getElementById("objectProfile");
const searchInput = document.getElementById("searchInput");
const filterRow = document.getElementById("filterRow");
const astronautNameInput = document.getElementById("astronautNameInput");
const statsCount = document.getElementById("statsCount");
const saveNameBtn = document.getElementById("saveNameBtn");
const factList = document.getElementById("factList");
const questionList = document.getElementById("questionList");

function renderFilters() {
  filterRow.innerHTML = "";
  filters.forEach((filter) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "filter-btn" + (selectedFilter === filter.key ? " active" : "");
    button.textContent = filter.label;
    button.addEventListener("click", () => {
      selectedFilter = filter.key;
      renderFilters();
      renderDirectory();
    });
    filterRow.appendChild(button);
  });
}

function getFilteredEntries() {
  const query = searchInput.value.trim().toLowerCase();
  return spaceEntries.filter((entry) => {
    const matchesFilter =
      selectedFilter === "all" || entry.category === selectedFilter;

    const text = `${entry.name} ${entry.summary || ""} ${entry.description || ""} ${entry.orbiting || ""}`.toLowerCase();
    const matchesSearch = text.includes(query);

    return matchesFilter && matchesSearch;
  });
}

function renderAstronauts() {
  astronautGrid.innerHTML = "";
  astronauts.forEach((astronaut) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "astronaut-card" + (selectedAstronautId === astronaut.id ? " active" : "");
    card.setAttribute("aria-label", `Select astronaut ${astronaut.name}`);

    const avatar = document.createElement("div");
    avatar.className = "avatar";
    avatar.textContent = astronaut.gender === "girl" ? "👩" : "👨";

    const name = document.createElement("h4");
    name.textContent = astronaut.name;

    const meta = document.createElement("p");
    meta.textContent = astronaut.nationality;

    card.appendChild(avatar);
    card.appendChild(name);
    card.appendChild(meta);

    card.addEventListener("click", () => {
      selectedAstronautId = astronaut.id;
      updateSelectedAstronaut();
      renderAstronauts();
    });

    astronautGrid.appendChild(card);
  });
}

function updateSelectedAstronaut() {
  const astronaut = astronauts.find((a) => a.id === selectedAstronautId);
  if (!astronaut) return;

  currentName = astronaut.name;

  if (astronautNameInput.value.trim() === "") {
    astronautNameInput.value = astronaut.name;
    currentName = astronaut.name;
  } else {
    currentName = astronautNameInput.value.trim() || astronaut.name;
  }

  renderAstronautProfile(astronaut);
}

function renderAstronautProfile(astronaut) {
  const profileHTML = `
    <div class="profile-header">
      <div>
        <p class="eyebrow">Featured astronaut</p>
        <h3>${currentName}</h3>
      </div>
      <span class="category-pill">${astronaut.nationality}</span>
    </div>

    <div class="profile-image">
      ${
        astronaut.photo
          ? `<img src="${astronaut.photo.url}" alt="${currentName} astronaut portrait" />`
          : `<div style="height: 220px; background: linear-gradient(135deg, rgba(125,211,252,0.18), rgba(167,139,250,0.22)); display:grid; place-items:center; font-size: 5rem;">🚀</div>`
      }
    </div>

    ${
      astronaut.photo
        ? `
          <div class="image-caption">
            ${astronaut.photo.caption}
            <br />
            <a href="${astronaut.photo.sourceUrl}" target="_blank" rel="noreferrer">
              Source: ${astronaut.photo.source}
            </a>
          </div>
        `
        : `
          <div class="image-caption">
            No direct NASA/JPL/ESA archive image was identified for this featured astronaut in this curated collection.
          </div>
        `
    }

    <p class="profile-copy">
      <strong>Biography:</strong> ${astronaut.bio}
    </p>

    <div class="profile-facts">
      <div class="fact-card">
        <h5>Nationality</h5>
        <p>${astronaut.nationality}</p>
      </div>
      <div class="fact-card">
        <h5>Missions</h5>
        <p>${astronaut.missions.join(", ")}</p>
      </div>
      <div class="fact-card">
        <h5>Facts</h5>
        <p>${astronaut.facts.join(" • ")}</p>
      </div>
    </div>
  `;

  objectProfile.innerHTML = profileHTML;
}

function renderDirectory() {
  const entries = getFilteredEntries();
  directoryList.innerHTML = "";

  if (entries.length === 0) {
    directoryList.innerHTML = `<div class="profile-empty">No matching objects found. Try another search or category.</div>`;
    objectProfile.innerHTML = `<div class="profile-empty">Select an object to view its profile.</div>`;
    return;
  }

  entries.forEach((entry) => {
    const item = document.createElement("button");
    item.type = "button";
    item.className = "directory-item" + (selectedObjectId === entry.id ? " active" : "");
    item.innerHTML = `
      <span class="label">${entry.name}</span>
      <span class="tag">${entry.category.replace(/-/g, " ")}</span>
    `;
    item.addEventListener("click", () => {
      selectedObjectId = entry.id;
      renderDirectory();
      renderSelectedObject(entry);
    });
    directoryList.appendChild(item);
  });

  const selectedEntry = entries.find((entry) => entry.id === selectedObjectId) || entries[0];
  selectedObjectId = selectedEntry.id;
  renderSelectedObject(selectedEntry);
}

function renderSelectedObject(entry) {
  const imageBlock = entry.image
    ? `
      <div class="profile-image">
        <img src="${entry.image.url}" alt="${entry.name}" />
      </div>
      <div class="image-caption">
        ${entry.image.caption}
        <br />
        <a href="${entry.image.sourceUrl}" target="_blank" rel="noreferrer">
          Source: ${entry.image.source}
        </a>
      </div>
    `
    : `
      <div class="profile-image">
        <div style="height: 220px; display:grid; place-items:center; background: linear-gradient(135deg, rgba(125,211,252,0.1), rgba(167,139,250,0.15)); font-size: 4rem;">🌌</div>
      </div>
      <div class="image-caption">
        No suitable NASA/JPL/ESA archive image was identified for this object in this curated collection.
      </div>
    `;

  const scienceText = entry.science.map((fact) => `<li>${fact}</li>`).join("");
  const orbitText = entry.orbiting ? `<p class="profile-copy"><strong>Orbit:</strong> ${entry.orbiting}</p>` : "";

  objectProfile.innerHTML = `
    <div class="profile-header">
      <div>
        <p class="eyebrow">Directory entry</p>
        <h3>${entry.name}</h3>
      </div>
      <span class="category-pill">${entry.category.replace(/-/g, " ")}</span>
    </div>

    ${imageBlock}

    <p class="profile-copy">
      <strong>Summary:</strong> ${entry.summary}
    </p>

    ${orbitText}

    <p class="profile-copy">
      ${entry.description}
    </p>

    <div class="profile-facts">
      <div class="fact-card">
        <h5>Science facts</h5>
        <p>${entry.science[0]}</p>
      </div>
      <div class="fact-card">
        <h5>Fun fact</h5>
        <p>${entry.funFact}</p>
      </div>
      <div class="fact-card">
        <h5>Still being studied</h5>
        <p>${entry.openQuestion}</p>
      </div>
    </div>

    <div class="fact-box" style="margin-top: 1rem;">
      <h4>Science facts</h4>
      <ul>${scienceText}</ul>
    </div>
  `;
}

function renderCuriosity() {
  factList.innerHTML = "";
  questionList.innerHTML = "";

  factAndQuestionList.forEach((fact) => {
    const li = document.createElement("li");
    li.textContent = fact;
    factList.appendChild(li);
  });

  openQuestions.forEach((question) => {
    const li = document.createElement("li");
    li.textContent = question;
    questionList.appendChild(li);
  });
}

function setupEvents() {
  startBtn.addEventListener("click", () => {
    startScreen.classList.add("hidden");
  });

  saveNameBtn.addEventListener("click", () => {
    const customName = astronautNameInput.value.trim();
    if (customName) {
      currentName = customName;
      const chosenAstronaut = astronauts.find((a) => a.id === selectedAstronautId);
      if (chosenAstronaut) {
        renderAstronautProfile({ ...chosenAstronaut, name: customName });
      }
    }
  });

  astronautNameInput.addEventListener("input", () => {
    const customName = astronautNameInput.value.trim();
    const chosenAstronaut = astronauts.find((a) => a.id === selectedAstronautId);
    if (chosenAstronaut) {
      renderAstronautProfile({ ...chosenAstronaut, name: customName || chosenAstronaut.name });
    }
  });

  searchInput.addEventListener("input", () => {
    renderDirectory();
  });
}

function init() {
  statsCount.textContent = spaceEntries.length;
  renderFilters();
  renderAstronauts();
  updateSelectedAstronaut();
  renderDirectory();
  renderCuriosity();
  setupEvents();
  astronautNameInput.value = "Aster";
}

init();
