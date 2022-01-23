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

export { skills, experiences, abouts, testimonials };
