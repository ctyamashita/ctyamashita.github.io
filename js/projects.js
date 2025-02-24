import van from "./van-1.2.8.min.js"

const  {a, ul, li, div, p, button, h1, h2, h3, img, i, nav, span} = van.tags;

window.onload = async () => {
  const response = await fetch("js/projects.json")
  const data = await response.json()
  const projectsData = data

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

  const window = location.hash
  if (typeof window == 'string' && window !== '') {
    const id = window.replace('#window-','');
    if (!navBarItems.map(item=>item.toLowerCase()).includes(id)) openWindow('projects')
    if (window.includes('window-')) openWindow(id);
  } 
}