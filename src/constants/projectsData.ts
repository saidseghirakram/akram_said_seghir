export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  type: string;
}

export const filterCategories = [
  { value: 'all', label: 'All' },
  { value: 'web', label: 'Web' },
  { value: 'app', label: 'App' },
  { value: 'AI', label: 'AI' }
];

export const projectsData: Project[] = [
  {
    id: '1',
    title: 'ElQuran',
    description:' ElQuran Reader is a modern web application offering a complete Quran reading experience. It includes all 114 Surahs with elegant Arabic typography, multiple audio recitations from renowned Qaris (selectable by the user), verse-by-verse translations in multiple languages, advanced search and navigation, and a clean, responsive interface with a fixed emerald-themed design. The app ensures accurate, real-time access to Quranic content through efficient data synchronization.'
    ,tags: ['React', 'Tailwind Css', 'Framer Motion'],
    githubUrl: 'https://github.com/saidseghirakram/elQuran',
    liveUrl: 'https://el-quran.vercel.app/',
    type: 'web'
  },
  {
    id: '2',
    title: 'Driver App',
    description: 'This mobile application is designed to assist drivers by providing a comprehensive platform to access essential services while on the road. Built using React Native with Expo for the frontend and Node.js with MongoDB for the backend, the app offers a smooth and responsive user experience. It allows drivers to sign up, log in, and navigate through various service categories such as parking, repairs, hotels, restaurants, and mechanical assistance. With a built-in navigation map and real-time service listings, the app aims to simplify daily challenges faced by drivers, offering convenience, efficiency, and reliability all in one place.',
    tags: ['React Native', 'MongoDB', 'expo', 'Node.js', 'Google Maps API'],
    githubUrl: 'https://github.com/saidseghirakram/DRIVER-apk',
    liveUrl: 'https://github.com/saidseghirakram/DRIVER-apk',
    type: 'app'
  },
  {
    id: '3',
    title: 'Psychology AI Platform',
    description: 'This web-based psychology platform is a modern digital solution tailored specifically for doctors and mental health professionals. It offers a comprehensive dashboard that consolidates patient diagnostics, gender distributions, regional statistics, and appointment trends into one clean, interactive interface. The system is enhanced with integrated Large Language Models (LLMs), enabling an advanced AI-powered chat assistant that supports doctors in analyzing patient data and offering intelligent recommendations. The intuitive UI ensures ease of use, while features like real-time appointment tracking, pathology search, and visual insights empower doctors to make data-driven decisions with confidence. This platform not only streamlines clinical workflows but also elevates the quality of psychological care through smart analytics and AI integration.',
    tags: ['Figma', 'Next js', 'LLMs', 'MongoDB', 'Node.js', 'Design Systems'],
    githubUrl: 'https://github.com/',
    liveUrl: 'https://example.com',
    type: 'AI'
  },
  {
    id: '4',
    title: 'TRIPS FI BLADI',
    description: 'TRIPS FI BLADI is a web-based travel agency platform dedicated to promoting sustainable, responsible, and immersive tourism experiences across Algeria. It offers custom-made trips that emphasize eco-responsibility, cultural preservation, and community support. With a focus on unique adventures—from historical and cultural tours to solidarity-based travel and nature exploration—the platform connects travelers with authentic local experiences while supporting artisans, preserving heritage, and minimizing environmental impact. Through its marketplace, library, and user-friendly contact system, TRIPS FI BLADI invites users to explore Algeria differently and make a positive, lasting difference.',
    tags: ['Next Js', 'Typescript', 'Tailwind Css', 'Figma'],
    githubUrl: 'https://trips-fi-bladi.vercel.app/',
    liveUrl: 'https://trips-fi-bladi.vercel.app/',
    type: 'web'
  } ,{
    id: '5',
    title: 'DEVFEST MEDEA 23',
    description: "DevFest Medea 23 is the official website for GDG Medea's largest annual tech event, showcasing everything attendees need to know in a sleek, modern design. The site features a dynamic countdown, engaging highlights from past events, speaker profiles, and a clear time map of all sessions over the three-day festival. With content from tech leaders, inspiring talks, and a strong community vibe, the website invites developers, students, and professionals to join a collaborative environment focused on learning, innovation, and networking. Built with visual storytelling and easy navigation, it's the ultimate hub for anyone excited about technology and community-driven growth.",
    tags: ['React', 'Tailwind Css', 'Framer Motion'],
    githubUrl: 'https://github.com/saidseghirakram/finale_devfest_website',
    liveUrl: 'https://devfest23medea.vercel.app/',
    type: 'web'
  }
]; 