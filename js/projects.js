import van from "./van-1.2.8.min.js"

const  {a, ul, li, div, p, button, h1, h2, h3, img, i} = van.tags;

const projectsData = {
  "photo-ronin": {
    "title": "Photo Ronin",
    "id": "photo-ronin",
    "color": "#00e0c2",
    "tag": "Discover new places to take your photos",
    "img": "og_photo.jpg",
    "screenshot": "ronin-screenshots.png",
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
    "color": "#ff3366",
    "tag": "Get the wheels for the adventure of your life!",
    "img": "camper1.jpg",
    "screenshot": "no-camp-no-life-screenshot.png",
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
    "color": "#eaab44",
    "tag": "Create lists for your favorite movies!",
    "img": "watchlist-portrait.png",
    "screenshot": "watch-list-screenshot.png",
    "icon": "fas fa-clipboard-list",
    "description":[
      "Watch list organizer. Save your favorite movies in lists!"
    ],
    "links":[{
      "href": "https://github.com/ctyamashita/no-camp-no-life",
      "icon": "fab fa-github-square",
      "title": "Github"
    },
    {
      "href": "https://watch-list.herokuapp.com/",
      "icon": "fas fa-desktop",
      "title": "Web App"
    }
    ],
    "front": ["stimulus","css3","html5","bootstrap"],
    "back": ["Ruby","Ruby on Rails", "PostgreSQL"],
    "others": ["Visual Studio Code", "git"],
    "team": ["Celso Takeshi Yamashita"]
  },
  "binge-watcher": {
    "title": "Binge Watcher",
    "id": "binge-watcher",
    "color": "black",
    "tag": "Search for your next series/movie to watch!",
    "img": "binge-watcher-cover.png",
    "screenshot": "binge-watcher-screenshot.png",
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
    "img": "EE-Demo-cover-2.png",
    "screenshot": "EE-Demo-cover.png",
    "icon": "fas fa-vr-cardboard",
    "description":[
      "VR experience developed with the A-frame framework for <a href=\"https://equalentry.com\">Equal Entry</a>.",
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
    "color": "#9b589e",
    "tag": "Join a channel and message Le Wagon students!",
    "img": "simple-chat-cover.png",
    "screenshot": "simple-chat-screenshot-2.png",
    "icon": "fas fa-comment-alt",
    "description":[
      "Revisit to one of Le Wagon challenges during bootcamp. It's a simple chat using Le Wagon chatroom API."
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
    "img": "",
    "screenshot": "speech-to-text-screenshot.png",
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
    "color": "gold",
    "tag": "Vizualize tables from CSV files",
    "img": "",
    "screenshot": "csv-editor-screenshot.png",
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
  "iso-board": {
    "title": "Isometric board",
    "id": "iso-board",
    "color": "",
    "tag": "Explorer a 2d/3d squared table",
    "img": "",
    "screenshot": "csv-editor-screenshot.png",
    "icon": "fa-solid fa-kaaba",
    "description":[
      "Experiment with 2D and Isometric view board."
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
  }
}

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

// Components

const Navbar = () => div({id: 'navbar'},
  button({id:'logo', onclick: () => closeAllWindows()},
    h1('Celso Takeshi Yamashita Portfolio'), img({src: '../images/logo-05.svg', alt: 'logo'}),
  ),
  div({class: 'nav-item-container'},
    button({class: 'nav-expand'}, i({class: 'fas fa-bars'})),
    ul(
      li(button({onclick: (e) => openWindow(e), class: 'nav-item', id: 'about'}, "About")),
      li(button({onclick: (e) => openWindow(e), class: 'nav-item', id: 'projects'}, "Projects")),
    )
  )
)

const Projects = ({items}) => div({class: 'window-content cards'},
    items.map(item=>div({onclick: (e) => openWindow(e), id: item.id, class:'card', style: `background: linear-gradient(160deg, rgba(0,0,0,.5) 20%, transparent 75%), url(images/${item.img}); background-position: center; background-size: cover`},
      h3(item.title))
    )
)

const About = ({info}) => div({class: 'window-content about'},
  div({class: 'about-container'},
    img({src: 'images/LWT_Profile-low.png', class: 'about-picture'}),
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
        data.description.map(line => p(line)),
      ),
      div({class: 'project-links'},
      data.links.map(link=>a({href: link.href, target:'_blank'}, i({class: link.icon}), link.title))
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
      h3('members'),
      ul(data.team.map(member=>li(member)))
    ),
  ),
)

const buildContent = (id) => {
  if (projectsData[id]) {
    return ProjectInfo({data: projectsData[id]})
  } else if (id == "projects") {
    return Projects({items: Object.values(projectsData)})
  } else if (id == "about") {
    return About({info: bioInfo})
  }
}

const Window = ({id}) => div({class: "window-container", id: `window-${id}`},
    div({class: 'window-topbar'},
    h2(Object.keys(projectsData).includes(id) ? i({class: projectsData[id].icon}) : i({class: id == 'projects' ? 'fas fa-folder' : "fa-solid fa-circle-user"}),
      ` ${id.replaceAll('-',' ')}`
    ),
    button({class: 'icon-btn', onclick: (e) => closeWindow(e)}, i({class: 'fas fa-times'}))),
    buildContent(id)
)

van.add(document.body, div({class: 'bg'}))
van.add(document.body, Navbar());
van.add(document.body, div({id: 'windows-container'}))


// functions

const openWindow = (e) => {
  if (e.target.tagName == "BUTTON") e.target.setAttribute('disabled', true)
  const id = e.target.tagName == "H3" ? e.target.parentElement.id : e.target.id;
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
}

const closeWindow = (e) => {
  const id = e.target.tagName == "BUTTON" ? e.target.parentElement.parentElement.id : e.target.parentElement.parentElement.parentElement.id
  const currentWindow = document.getElementById(id);
  const btnId = currentWindow.id.replace('window-', '');
  const btn = document.getElementById(btnId);
  btn?.removeAttribute('disabled');
  currentWindow.remove();
}

const closeAllWindows = () => {
  document.getElementById('windows-container').innerHTML = '';
  document.querySelectorAll('button:disabled').forEach(btn => btn.removeAttribute('disabled'));
}