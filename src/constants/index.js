import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  nextjs,
  threejs,
  orange,
  Food,
  EPAY,
  nike,
  admin,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

// const services = [
//   {
//     title: "Web Developer",
//     icon: web,
//   },
//   {
//     title: "React Native Developer",
//     icon: mobile,
//   },
//   {
//     title: "Backend Developer",
//     icon: backend,
//   },
//   {
//     title: "Content Creator",
//     icon: creator,
//   },
// ];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Next Js",
    icon: nextjs,
  }

];

// const experiences = [
//   {
//     title: "React.js Developer",
//     company_name: "Starbucks",
//     icon: starbucks,
//     iconBg: "#383E56",
//     date: "March 2020 - April 2021",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "React Native Developer",
//     company_name: "Tesla",
//     icon: tesla,
//     iconBg: "#E6DEDD",
//     date: "Jan 2021 - Feb 2022",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "Web Developer",
//     company_name: "Shopify",
//     icon: shopify,
//     iconBg: "#383E56",
//     date: "Jan 2022 - Jan 2023",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "Full stack Developer",
//     company_name: "Meta",
//     icon: meta,
//     iconBg: "#E6DEDD",
//     date: "Jan 2023 - Present",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
// ];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "Chemical website",
    description:
      "A web platform providing detailed chemical information, safety data sheets, and a marketplace for purchasing and managing chemicals across various industries.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript ",
        color: "pink-text-gradient",
      },
    ],
    image: orange,
    source_code_link: "https://github.com/harshilk77/ozone",
    Live_project:"https://www.1ozone.in/"
  },
  {
    name: "Food Website",
    description:
      "A web platform that allows users to browse, order, and explore various food options, providing an easy and convenient solution for food delivery or restaurant reservations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: Food ,
    source_code_link: "https://github.com/harshilk77/food-def",
    Live_project: "https://food-def-fontend.onrender.com/"
  },
  {
    name: "Restaurants Website",
    description:
      "A web platform that enables users to view menus, make reservations, order food online, and explore restaurant details, offering a seamless dining experience.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: Restaurants,
    source_code_link: "https://github.com/harshilk77/restaurantswebsite",
    Live_project: "https://harshilk77.github.io/restaurantswebsite/"
  },
  {
    name: "React admin panel",
    description:
      "A web-based admin panel built with React, providing an intuitive interface for managing and overseeing various aspects of a website or application, including user accounts, content, data analytics, and system settings.",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "Chart JS",
        color: "pink-text-gradient",
      },
    ],
    image: admin,
    source_code_link: "https://github.com/harshilk77/reactadminpanel",
    Live_project: "https://harshilk77.github.io/reactadminpanel/"
  },
  {
    name: "Nike Demo",
    description:
      "A web platform replicating the design and functionality of Nike's online store, allowing users to browse and purchase athletic footwear, apparel, and accessories, with features like product filtering, secure checkout, and user account management.",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "Next JS",
        color: "pink-text-gradient",
      },
    ],
    image:nike,
    source_code_link: "https://github.com/harshilk77/NikeDemo",
    Live_project: "https://nike-demo-seven.vercel.app/"
  },
  {
    name: "EPAY",
    description:
      "A web platform replicating the design and functionality of Nike's online store, allowing users to browse and purchase athletic footwear, apparel, and accessories, with features like product filtering, secure checkout, and user account management.",
    tags: [
      {
        name: "Next JS",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "AppWrite",
        color: "pink-text-gradient",
      },
    ],
    image: EPAY,
    source_code_link: "https://github.com/harshilk77/EPAY",
    Live_project: "https://banking-plum.vercel.app/sign-in"
  },
];

export {  technologies, projects };
