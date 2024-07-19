import van from "./van-1.2.8.min.js"

const  {a, ul, li, div, p, button, h1, h2, h3, img, i, nav, span} = van.tags;

const projectsData = {
  "photo-ronin": {
    "title": "Photo Ronin",
    "id": "photo-ronin",
    "color": "rgb(0 154 134)",
    "tag": "Discover new places to take your photos",
    "img": "og_photo.webp",
    "screenshot": "ronin-screenshots.webp",
    "icon": "fas fa-camera-retro",
    "description": [
      "Finding the perfect location to take pictures is extremely time consuming and most photographers usually struggle to find it.",
      "Our app allow users to discover new spots by browsing through photos or searching by address and/or tags.",
      "By selecting one location, the app will display photos and reviews with useful information shared by other photographers.",
      "When a photo is uploaded by a user, the metadata(EXIF) of the photo can be extracted and information such as location will be displayed on a map showing exactly where the picture was taken.",
      "These places can also be saved in lists created by the user and a link to google maps is provided with the route between user location and the coordinates of the place.",
      "Final project created in the last 2 weeks of the bootcamp."
    ],
    "links": [{
      "href": "https://github.com/ctyamashita/photo-ronin",
      "icon": "fab fa-github-square",
      "title": "Github"
    },
    {
      "href": "https://photo-ronin.herokuapp.com/",
      "icon": "fas fa-desktop",
      "title": "Web App"
    }
    ],
    "front": ["Stimulus","CSS","HTML","Bootstrap"],
    "back": ["Ruby","Ruby on Rails", "PostgreSQL"],
    "others": ["Visual Studio Code", "git"],
    "team": [
      "Celso Takeshi Yamashita",
      "Hakuyo Harimoto",
      "Nana Kadode",
      "Shinji Momoi"
    ]
  },
  "no-camp-no-life": {
    "title": "No Camp No Life",
    "id": "no-camp-no-life",
    "color": "rgb(232 46 92)",
    "tag": "Get the wheels for the adventure of your life!",
    "img": "camper1.webp",
    "screenshot": "no-camp-no-life-screenshot.webp",
    "icon": "fas fa-shuttle-van",
    "description":[
      "Camping with a camping car can be really fun, but most of us don't have enough money to buy one.",
      "In the end people give up on the idea after seen the necessary investment and work to go camping.",
      "No Camp No Life is a market place that allows users to rent camping cars fully equipped.",
      "Owner's of camping cars can also rent cars from other users."
    ],
    "links":[{
      "href": "https://github.com/ctyamashita/no-camp-no-life",
      "icon": "fab fa-github-square",
      "title": "Github"
    },
    {
      "href": "https://no-camp-no-life.herokuapp.com/",
      "icon": "fas fa-desktop",
      "title": "Web App"
    }
    ],
    "front": ["stimulus","css3","html5","bootstrap"],
    "back": ["Ruby","Ruby on Rails", "PostgreSQL"],
    "others": ["Visual Studio Code", "git"],
    "team": [
      "Celso Takeshi Yamashita",
      "Hakuyo Harimoto",
      "Nana Kadode",
      "Shinji Momoi"
    ]
  },
  "movie-watchlist": {
    "title": "Movie Watchlist",
    "id": "movie-watchlist",
    "color": "coral",
    "tag": "Create lists for your favorite movies!",
    "img": "watchlist-portrait.webp",
    "screenshot": "watch-list-screenshot.webp",
    "icon": "fas fa-clipboard-list",
    "description":[
      "Watch list organizer. Save your favorite movies in lists!"
    ],
    "links":[{
      "href": "https://github.com/ctyamashita/no-camp-no-life",
      "icon": "fab fa-github-square",
      "title": "Github"
    },
    // {
    //   "href": "https://watch-list.herokuapp.com/",
    //   "icon": "fas fa-desktop",
    //   "title": "Web App"
    // }
    ],
    "front": ["stimulus","css3","html5","bootstrap"],
    "back": ["Ruby","Ruby on Rails", "PostgreSQL"],
    "others": ["Visual Studio Code", "git"],
    "team": ["Celso Takeshi Yamashita"]
  },
  "binge-watcher": {
    "title": "Binge Watcher",
    "id": "binge-watcher",
    "color": "darkslateblue",
    "tag": "Search for your next series/movie to watch!",
    "img": "binge-watcher-cover.webp",
    "screenshot": "binge-watcher-screenshot.webp",
    "icon": "fas fa-couch",
    "description":[
      "Search for series and movies and get its detailed information.",
      "This project uses omdbAPI to fetch data from movies and series."
    ],
    "links":[{
      "href": "https://github.com/ctyamashita/react-binge-watcher",
      "icon": "fab fa-github-square",
      "title": "Github"
    },
    {
      "href": "https://ctyamashita.github.io/react-binge-watcher/",
      "icon": "fas fa-desktop",
      "title": "Web App"
    }],
    "front": ["React","CSS","HTML","Bootstrap"],
    "others": ["Visual Studio Code", "git"],
    "team":["Celso Takeshi Yamashita"]
  },
  "ee-web-vr-demo": {
    "title": "EE Web VR Demo",
    "id": "ee-web-vr-demo",
    "color": "#293C8F",
    "tag": "Exploring low-vision accessibility on VR!",
    "img": "EE-Demo-cover-2.webp",
    "screenshot": "EE-Demo-cover.webp",
    "icon": "fas fa-vr-cardboard",
    "description":[
      "VR experience developed with <a href=\"https://aframe.io/\">A-frame</a> for <a href=\"https://equalentry.com\">Equal Entry</a>.",
      "This demo was created for studying ways to turn the VR experience more accessible to people with low-vision.",
      "The building and some of the 3D models were created on SketchUp and the code was developed on glitch for quick prototyping.",
      "You can explore this 3D environment using your browser or a Meta Quest 2 VR headset.",
      "If you are interested check out the <a href=\"https://equalentry.com/virtual-reality-accessibility-things-learned-from-blind-users/\">article</a> of our results."
    ],
    "links":[{
      "href": "https://glitch.com/~equal-entry-vr-study-reviewed",
      "icon": "fas fa-fish",
      "title": "Glitch"
    },
    {
      "href": "https://github.com/ctyamashita/ee-web-vr-demo",
      "icon": "fab fa-github-square",
      "title": "Github"
    },
    {
      "href": "https://ctyamashita.github.io/ee-web-vr-demo/",
      "icon": "fas fa-desktop",
      "title": "Demo"
    }],
    "front": ["HTML","JavaScript"],
    "others": ["Visual Studio Code", "git", "Glitch", "Sketchup"],
    "team":["Celso Takeshi Yamashita"]
  },
  "chat-room" :{
    "title": "Chat Room",
    "id": "chat-room",
    "color": "purple",
    "tag": "Join a channel and message Le Wagon students!",
    "img": "simple-chat-cover.webp",
    "screenshot": "simple-chat-screenshot-4.webp",
    "icon": "fas fa-comment-alt",
    "description":[
      "Revisit to one of Le Wagon challenges during bootcamp. It's a simple chat using Le Wagon chatroom API.",
      "On this version of the chatroom you will be able to respond to messages, check who is in the chat and when was their last message sent."
    ],
    "links":[{
      "href": "https://github.com/ctyamashita/vue-chatroom",
      "icon": "fab fa-github-square",
      "title": "Github"
    },
    {
      "href": "https://ctyamashita.github.io/vue-chatroom",
      "icon": "fas fa-desktop",
      "title": "Web App"
    }],
    "front":["HTML", "CSS", "JavaScript", "Vue"],
    "others":["Visual Studio Code", "git"],
    "team":["Celso Takeshi Yamashita"]
  },
  "speech-to-text": {
    "title": "Speech to Text",
    "id": "speech-to-text",
    "color": "teal",
    "tag": "Transcript your words into text",
    "img": "speech-to-text.webp",
    "screenshot": "speech-to-text-screenshot.webp",
    "icon": "fas fa-microphone",
    "description":[
      "Playing around with WebSpeech API. This is a simple project that is converting the audio capture through the microphone into lines of text."
    ],
    "links":[{
      "href": "https://github.com/ctyamashita/speech-to-text",
      "icon": "fab fa-github-square",
      "title": "Github"
    },
    {
      "href": "https://ctyamashita.github.io/speech-to-text",
      "icon": "fas fa-desktop",
      "title": "Web App"
    }],
    "front":["HTML", "CSS", "JavaScript"],
    "others":["Visual Studio Code", "git"],
    "team":["Celso Takeshi Yamashita"]
  },
  "csv-editor": {
    "title": "CSV Editor",
    "id": "csv-editor",
    "color": "lightseagreen",
    "tag": "Vizualize tables from CSV files",
    "img": "csv-editor.webp",
    "screenshot": "csv-editor-screenshot.webp",
    "icon": "fa-solid fa-table",
    "description":[
      "Working with serialization and deserialization. You are able to import, vizualize, edit and export CSV files."
    ],
    "links":[{
      "href": "https://github.com/ctyamashita/csv-editor",
      "icon": "fab fa-github-square",
      "title": "Github"
    },
    {
      "href": "https://ctyamashita.github.io/csv-editor",
      "icon": "fas fa-desktop",
      "title": "Web App"
    }],
    "front":["HTML", "CSS", "JavaScript"],
    "others":["Visual Studio Code", "git"],
    "team":["Celso Takeshi Yamashita"]
  },
  "tower-arena": {
    "title": "Tower Arena",
    "id": "tower-arena",
    "color": "deepskyblue",
    "tag": "Explore a 2d/3d floor and fight your way to the top!",
    "img": "tower-arena.webp",
    "screenshot": "tower-arena-screenshot.webp",
    "icon": "fa-solid fa-kaaba",
    "description":[
      "This is a mini game where you can battle random enemies and level up your character."
    ],
    "links":[{
      "href": "https://github.com/ctyamashita/tower-game-vue",
      "icon": "fab fa-github-square",
      "title": "Github"
    },
    {
      "href": "https://ctyamashita.github.io/tower-game-vue/",
      "icon": "fas fa-desktop",
      "title": "Web App"
    }],
    "front":["HTML", "CSS", "JavaScript", "Vue"],
    "others":["Visual Studio Code", "git"],
    "team":["Celso Takeshi Yamashita"]
  },
  "pokedex": {
    "title": "Pokédex",
    "id": "pokedex",
    "color": "crimson",
    "tag": "Test your memory and rediscovery pokémons",
    "img": "pokedex.webp",
    "screenshot": "pokedex-screenshot.webp",
    "icon": "fa-solid fa-magnifying-glass",
    "description":[
      "A pokedex that works by giving the pokémon's name. Turn on the sound, and you will hear the pokemon's description.",
      "This project utilizes <a href=\"https://pokeapi.co/docs/v2\">PokéAPI<a> and <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API\">WebSpeech API<a>."
    ],
    "links":[{
      "href": "https://github.com/ctyamashita/pokedex",
      "icon": "fab fa-github-square",
      "title": "Github"
    },
    {
      "href": "https://ctyamashita.github.io/pokedex/",
      "icon": "fas fa-desktop",
      "title": "Web App"
    }],
    "front":["HTML", "CSS", "JavaScript", "VanJS"],
    "others":["Visual Studio Code", "git"],
    "team":["Celso Takeshi Yamashita"]
  },
  "task-manager": {
    "title": "Task Manager",
    "id": "task-manager",
    "color": "darkolivegreen",
    "tag": "Create todo lists",
    "img": "task.webp",
    "screenshot": "task-screenshot.webp",
    "icon": "fa-solid fa-list-check",
    "description":[
      "Create multiple to-do lists and organize your tasks/items between lists by dragging and dropping.",
      "This project utilizes Vue and SortableJS."
    ],
    "links":[{
      "href": "https://github.com/ctyamashita/vue-task-manager/",
      "icon": "fab fa-github-square",
      "title": "Github"
    },
    {
      "href": "https://ctyamashita.github.io/vue-task-manager/",
      "icon": "fas fa-desktop",
      "title": "Web App"
    }],
    "front":["HTML", "CSS", "JavaScript", "Vue"],
    "others":["Visual Studio Code", "git"],
    "team":["Celso Takeshi Yamashita"]
  },
  "kyuuko": {
    "title": "Kyuuko Cat Adventures",
    "id": "kyuuko",
    "color": "darkorange",
    "tag": "Explore Japan by Kyuuko's eyes",
    "img": "kyuuko.webp",
    "screenshot": "kyuuko-screenshot.webp",
    "icon": "fa-solid fa-torii-gate",
    "description":[
      "Kyuuko is a fictional cat that travels around Japan. This is my personal project of illustration and photographic documentation of ordinary, curious and interesting places around Japan."
    ],
    "links":[{
      "href": "https://github.com/ctyamashita/tower-game-vue",
      "icon": "fab fa-instagram",
      "title": "Instagram"
    }],
    "others":["Adobe Photoshop", "Adobe Illustrator"],
    "team":["Celso Takeshi Yamashita"]
  },
  "battle-arena":{
    "title": "Battle Arena [WIP]",
    "color": "rosybrown",
    "tag": "Create a hero and fight!",
    "img": "Arena-screenshot-4.webp",
    "screenshot": "Arena-screenshot-3.webp",
    "id": "battle-arena",
    "icon": "",
    "description": ["Create your hero and battle other players!"],
    "links": [{
      "href": "https://github.com/ctyamashita/heroes-arena",
      "icon": "fab fa-github-square",
      "title": "Github"
    }],
    "front": ["stimulus","css3","html5","bootstrap"],
    "back": ["Ruby","Ruby on Rails", "PostgreSQL"],
    "others": ["Visual Studio Code", "git"],
    "team": ["Celso Takeshi Yamashita"]
  }
}

const illustrations = [
  "Untitled-2-06-1.webp",
  "kyuuko-rpg.webp",
  "Bck-1.webp",
  "Cats.webp",
  "Untitled-1-2-02.webp",
  "Lisa&Potato+Kyuuko&Gang-03.webp",
  "vespa-design-01.webp",
  "pixel-kyuuko.webp",
  "JapanSeries_Jidouhanbaiki-2.webp",
  "BlackHole-01.webp",
  "Great Wave-01.webp",
  "TAQX-01.webp",
]

const bioInfo = {
  name: 'Celso Takeshi Yamashita',
  bio: [`I'm a Brazilian full-stack web developer living in Yokohama. Before moving to Japan, I used to work as a graphic designer, even though I graduated in architecture.`,
        `My wife and I have always dreamed about living abroad. In 2018 she got a once-in-a-lifetime chance to study in Japan. I left my job, and we started our long journey to the other side of the world in search of new horizons.`,
        `During bootcamp I've developed some projects in Le Wagon Tokyo, and now I intend to start some personal projects to hone my coding skills.`,
        `Currently I'm working as a full stack web developer for Equal Entry, coding in A-frame, HTML, CSS, and JavaScript for our accessibility development projects. He is also a Teaching Assistant at Le Wagon, a coding school in Tokyo.`
      ],
  front: ['HTML', 'CSS', 'JavaScript', 'Stimulus', 'Bootstrap'],
  back: ['Ruby', 'Ruby on Rails', 'Postgresql'],
  others: ['Visual Studio Code', 'git', 'Photoshop', 'Illustrator', 'Indesign']
}

const navBarItems = ['About', 'Projects', 'Illustrations']

const buildLinks = (string) => {
  const stringArr = string.split(/<\/?a>?/)
  const formattedString = stringArr.map((subString, index)=>{
    const [href, textLink] = subString.split('>')
    if (textLink && href) {
      return a({href: href.replaceAll(/(href="|")/g,''), target: '_blank'}, textLink)
    } else {
      return subString
    }
  })
  return formattedString
}

// Components

const Navbar = () => nav({id: 'navbar'},
  button({id:'logo', onclick: () => closeAllWindows()},
    h1('Celso Takeshi Yamashita Portfolio'), img({src: '../images/logo-05.svg', alt: 'logo'}),
  ),
  div({class: 'nav-item-container'},
    button({class: 'nav-expand', onclick: (e) => expandMenu(e), ariaExpanded: false, onblur: () => collapseMenu()}, i({class: 'fas fa-bars'})),
    ul(
      navBarItems.map(item=>li(button({onclick: () => openWindow(item.toLowerCase()), onblur: () => collapseMenu(), class: 'nav-item', id: item.toLowerCase()}, item)))
    )
  )
)

const Projects = ({items}) => div({class: 'window-content cards'},
    items.map(item=>a({onclick: () => openWindow(item.id), id: item.id, class:'card', style: `background: linear-gradient(160deg, rgba(0,0,0,.5) 20%, transparent 75%), url(images/${item.img}); background-position: center; background-size: cover`, href: `#window-${item.id}`},
      h3(item.title))
    )
)

const About = ({info}) => div({class: 'window-content about'},
  div({class: 'about-container'},
    img({src: 'images/LWT_Profile-low.webp', class: 'about-picture'}),
    div({class: 'about-bio'},
      h3(info.name),
      info.bio.map(line=>p(line))
    ),
    div({class: 'socials'},
      a({href: '#', class: 'icon-btn'}, i({class: "fab fa-linkedin"})),
      a({href: '#', class: 'icon-btn'}, i({class: "fab fa-github-square"})),
      a({href: '#', class: 'icon-btn'}, i({class: "fab fa-instagram-square"}))
    ),
    div({class: 'about-tools'},
      div(
        h3('front end'),
        ul( info.front.map( item => li(item) ) )
      ),
      div(
        h3('back end'),
        ul( info.back.map( item => li(item) ) )
      ),
      div(
        h3('others'),
        ul( info.others.map( item => li(item) ) )
      )
    )
  )
)

const ProjectInfo = ({data}) => div({class: 'window-content project'},
  div({class: 'project-info'},
    img({src: `images/${data.screenshot}`}),
    div({class: 'description-container'},
      div(
        data.description.map(line => p(
          buildLinks(line)
        )),
      ),
      div({class: 'project-links'},
      data.links.map(link=>a({href: link.href, target:'_blank', style: `background: ${data.color}`}, i({class: link.icon}), link.title))
    )
    ),
    div({class: 'tools-container'},
      div(
        h3('front end'),
        ul(data.front?.map(tool => li(tool))),
      ),
      div(
        h3('back end'),
        ul(data.back?.map(tool => li(tool))),
      ),
      div(
        h3('others'),
        ul(data.others?.map(tool => li(tool))),
      )
    ),
    div({class: 'members'},
      h3(data.team.length == 1 ? 'created by' : 'members'),
      ul(data.team.map(member=>li(member)))
    ),
  ),
)

const Illustrations = (({imgs}) => div({class: "window-content illustration cards"},
  imgs.map(item => img({src: `images/${item}`, class: "card"}))
  )
)

const buildContent = (id) => {
  if (projectsData[id]) {
    return ProjectInfo({data: projectsData[id]})
  } else if (id == "projects") {
    return Projects({items: Object.values(projectsData)})
  } else if (id == "about") {
    return About({info: bioInfo})
  } else if (id == "illustrations") {
    return Illustrations({imgs: illustrations})
  }
}

const Window = ({id}) => div({class: "window-container", id: `window-${id}`, style: `background: ${projectsData[id]?.color}`},
    div({class: 'window-topbar', onclick: () => expandWindow(id)},
    h2(Object.keys(projectsData).includes(id) ? i({class: projectsData[id].icon}) : i({class: id == 'projects' ? 'fas fa-folder' : "fa-solid fa-circle-user"}),
      ` ${projectsData[id] ? projectsData[id].title : id.replaceAll('-',' ')}`
    ),
    button({class: 'icon-btn', onclick: () => closeWindow(id)}, i({class: 'fas fa-times'}))),
    buildContent(id)
)

van.add(document.body, div({class: 'bg'}))
van.add(document.body, Navbar());
van.add(document.body, div({id: 'windows-container'}))


// functions

const openWindow = (id) => {
  const clickedBtn = document.getElementById(id);
  if (clickedBtn.tagName == 'BUTTON') clickedBtn.setAttribute('disabled', true)
  const windowsContainer = document.body.lastElementChild
  if (windowsContainer.children.length >= 2) {
    const oldWindow = windowsContainer.firstElementChild;
    const btnId = oldWindow.id.replace('window-', '');
    const btn = document.getElementById(btnId);
    btn?.removeAttribute('disabled');
    oldWindow.remove();
  }
  van.add(windowsContainer, Window({id: id}));
  if (windowsContainer.lastElementChild.id == 'window-') windowsContainer.lastElementChild.remove();
  location.hash = `window-${id}`;
}

const expandWindow = (id) => {
  const clickedWindowId = `window-${id}`;
  const windowsContainer = document.body.lastElementChild;
  const oldWindow = windowsContainer.firstElementChild;

  if (windowsContainer.children.length >= 2 && oldWindow.id == clickedWindowId) {
    windowsContainer.append(...Array.from(windowsContainer.childNodes).reverse());
    location.hash = `window-${id}`;
  }
}

const closeWindow = (id) => {
  const currentWindow = document.getElementById(`window-${id}`);
  const btn = document.getElementById(id);
  btn?.removeAttribute('disabled');
  currentWindow.remove();
  const previousWindow = document.querySelector('.window-container');
  if (previousWindow?.id == 'window-projects' && id !== 'about') {
    location.hash = btn.id
  } else {
    location.hash = previousWindow ? previousWindow.id : '';
  }
}

const closeAllWindows = () => {
  document.getElementById('windows-container').innerHTML = '';
  document.querySelectorAll('button:disabled').forEach(btn => btn.removeAttribute('disabled'));
  location.hash = ''
}

const expandMenu = (e) => {
  const expandBtn = e.target.tagName == 'BUTTON' ? e.target : e.target.parentElement;
  const expanded = expandBtn.getAttribute('aria-expanded') === 'true'
  expandBtn.setAttribute('aria-expanded', !expanded)
}

const collapseMenu = () => {
  const expandBtn = document.querySelector('.nav-expand');
  const menuItems = Array.from(document.querySelectorAll('.nav-item-container button'));
  setTimeout(() => {
    const elFocused = document.querySelector(":focus");
    if (!menuItems.includes(elFocused)) {
      expandBtn.setAttribute('aria-expanded', false)
    }
  }, 300);
}

document.addEventListener('keyup', (e) => {
  if (e.key == "Escape") {
    const closeBtns = document.querySelectorAll('.window-topbar .icon-btn');
    if (closeBtns.length > 0) closeBtns[closeBtns.length - 1].click()
  }
})

window.onload = () => {
  const window = location.hash
  if (typeof window == 'string' && window !== '') {
    const id = window.replace('#window-','');
    if (!navBarItems.map(item=>item.toLowerCase()).includes(id)) openWindow('projects')
    if (window.includes('window-')) openWindow(id);
  } 
}