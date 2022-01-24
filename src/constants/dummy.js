import images from './images';

const skills = [
  {
    name: 'HTML5',
    icon: images.html,
  },
  {
    name: 'CSS3',
    icon: images.css,
  },
  {
    name: 'Javascript',
    icon: images.javascript,
  },
  {
    name: 'React JS',
    icon: images.react,
  },
  {
    name: 'Redux',
    icon: images.redux,
  },
  {
    name: 'Node JS',
    icon: images.node,
  },
  {
    name: 'Sass',
    icon: images.sass,
  },
  {
    name: 'Figma',
    icon: images.figma,
  },
  {
    name: 'Git',
    icon: images.git,
  },
  {
    name: 'React Native',
    icon: images.react,
  },
];

const experiences = [
  {
    year: 2022,
    works: [
      {
        name: 'Senior Product Designer',
        company: 'Amazon Inc.',
      },
    ],
  },
  {
    year: 2021,
    works: [
      {
        name: 'UI/UX Web Designer',
        company: 'Google',
      },
      {
        name: 'Internship Graphic Designer',
        company: 'Invision',
      },
    ],
  },
  {
    year: 2020,
    works: [
      {
        name: 'Senior WP Frontend Developer',
        company: 'ENVATO',
      },
      {
        name: 'IOS Developer',
        company: 'Zara',
      },
      {
        name: 'Internship Frontend Developer',
        company: 'Apple',
      },
    ],
  },
];

const abouts = [
  {
    title: 'Frontend Developer',
    description: 'I am a frontend developer with a passion for building beautiful and functional web applications.',
    imgUrl: images.about01,
  },
  {
    title: 'Web Designer',
    description: 'I am a web designer with a passion for creating beautiful and functional web applications.',
    imgUrl: images.about02,
  },
  {
    title: 'React Native Developer',
    description: 'I am a React Native developer with a passion for building beautiful and functional mobile applications.',
    imgUrl: images.about03,
  },
  {
    title: 'Backend Developer',
    description: 'I am a backend developer with a passion for building beautiful and functional web applications.',
    imgUrl: images.about04,
  },
];

const testimonials = [
  {
    name: 'John Doe',
    company: 'Senior Web Developer at KFC',
    imgurl: 'https://i.ibb.co/tJkbmqh/photo-1556157382-97eda2d62296-ixlib-rb-1-2.jpg',
    feedback: 'Orion is a great place to work. The people are friendly, helpful and very knowledgeable. I recommend Orion to anyone looking for a job.',
  },
  {
    name: 'Jane Doe',
    company: 'UI/UX Designer at Amazon Inc.',
    imgurl: 'https://i.ibb.co/tJkbmqh/photo-1556157382-97eda2d62296-ixlib-rb-1-2.jpg',
    feedback: 'Originally I was looking for a job as a frontend developer but I found Orion. Orion is a great place to work. The people are friendly, helpful and very knowledgeable. I recommend Orion to anyone looking for a job.',
  },
  {
    name: 'Kenny Doe',
    company: 'Frontend Developer at Google',
    imgurl: 'https://i.ibb.co/tJkbmqh/photo-1556157382-97eda2d62296-ixlib-rb-1-2.jpg',
    feedback: 'Super friendly and helpful people. Orion is a great place to work. The people are friendly, helpful and very knowledgeable. I recommend Orion to anyone looking for a job.',
  },
  {
    name: 'Sara Doe',
    company: 'CEO & Founder at Apple',
    imgurl: 'https://i.ibb.co/tJkbmqh/photo-1556157382-97eda2d62296-ixlib-rb-1-2.jpg',
    feedback: 'Love working with Orion. Orion is a great place to work. The people are friendly, helpful and very knowledgeable. I recommend Orion to anyone looking for a job.',
  },
];

const works = [
  {
    id: 'work-1',
    title: 'Modern UI/UX Website',
    description: 'A modern UI/UX website for a startup company.',
    imgUrl: images.about01,
    tags: ['UI/UX', 'Web Design', 'React JS'],
  },
  {
    id: 'work-2',
    title: 'Ewalle wallet app',
    description: 'Ewalle wallet app built with React Native.',
    imgUrl: images.about02,
    tags: ['Mobile App', 'React Native', 'UI/UX', 'Javascript'],
  },
  {
    id: 'work-3',
    title: 'Shareme Website',
    description: 'Beautiful pinterest-like website using React JS.',
    imgUrl: images.about03,
    tags: ['Web App', 'React JS', 'UI/UX', 'Javascript'],
  },
  {
    id: 'work-4',
    title: 'SpaceX',
    description: 'SpaceX CRUD API built with Node JS.',
    imgUrl: images.about04,
    tags: ['Backend App', 'Node JS'],
  },
  {
    id: 'work-5',
    title: 'Sweet Shop',
    description: 'An E-commerce app with beautiful UI/UX.',
    imgUrl: images.about04,
    tags: ['UI/UX', 'Mobile App', 'React Native', 'Javascript'],
  },
  {
    id: 'work-6',
    title: 'Community App',
    description: 'A community app built with React Native CLI.',
    imgUrl: images.about03,
    tags: ['Mobile App', 'React Native', 'UI/UX', 'Javascript'],
  },
  {
    id: 'work-7',
    title: 'Web3.0 Project',
    description: 'A web 3.0 app built with React JS & Solidity.',
    imgUrl: images.about02,
    tags: ['Web App', 'React JS', 'Solidity', 'Javascript'],
  },
  {
    id: 'work-8',
    title: 'MERN Memories',
    description: 'A MERN app built with React JS & MongoDB.',
    imgUrl: images.about01,
    tags: ['Web App', 'React JS', 'MongoDB', 'Javascript'],
  },
  {
    id: 'work-9',
    title: 'Starbucks Clone',
    description: 'A Starbucks clone built with React JS.',
    imgUrl: images.about04,
    tags: ['Web App', 'React JS', 'UI/UX', 'Javascript'],
  },
  {
    id: 'work-10',
    title: 'Blog Website',
    description: 'A blog website built with React JS.',
    imgUrl: images.about03,
    tags: ['Web App', 'React JS', 'UI/UX', 'Javascript'],
  },
];

export { skills, experiences, abouts, testimonials, works };
