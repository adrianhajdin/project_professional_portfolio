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

export { skills, experiences, abouts };
