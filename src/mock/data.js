import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'pfb.png',
    title: 'People For Bikes',
    info:
      'The ITG team has been very happy to work with the THOR design studio on this project. It has been our honor to help in producing the cutting edge People for Bikes suite of websites. Each year the wildly varied iterations of the site capture the key milestones of this non-profit organization’s efforts in advocating for cycling in cities across the United States. The development of this site has provided us with the  opportunity to push boundaries with the latest development tools including extensive work using React web development techniques. Rapid loading times, unique navigation patterns, and dynamic animation have all been hallmarks of the People for Bikes. ',
    info2: '',
    url: 'https://covid19.peopleforbikes.org/',
    repo: 'https://github.com/PeopleForBikes/pfb-nextjs', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'UniPro.png',
    title: 'UniPro Health',
    info:
      'Unipro Health has been a pioneer in their field. Sourceing and providing medical safety wear during these difficult times, and supporting our nation and its heros. It was our pleasure to work with them in quickly setting up their online prescence using shopify and providing custom design and code work. Not only do we make sure that their site looked amazing, but that they could reach the largest possible audiance by integrating analytics software to push their SEO to the next level',
    info2: '',
    url: 'https://uniprohealth.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'inspolytics.png',
    title: 'The Inspolytics Group',
    info:
      'The Inspolytics Group has been a long time partner of ITG. So when they came to us and asked us to update their site we pulled out all the stops. Using the latest CMS and SEO optimizing technology to make sure that they could easily edit and analyze their site. Our amazing designers were also able to put a beautiful and modern aesthetic together for them that gave the Inspolytics Group a unique and modern feel.',
    info2: '',
    url: 'https://inspolytics.com/staging/',
    repo: 'https://github.com/willmca/NASA-frontend', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'elysian.png',
    title: 'Elysian Bioscience',
    info:
      'Elysian came to us looking to update their currect wordpress site. We were happy to help update their infrastructure and bring them up to date with SSL security protocols and software updates. Now we maintain their site on a monthly basis.',
    info2: '',
    url: 'https://elysianbioscience.com/',
    repo: '', // if no repo, the button will not show up
  },
];
// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/CodesBreek',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codesandbox.io/u/yousefmahmad',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/yousef-m-ahmad/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/yousefmahmad',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
