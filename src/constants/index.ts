import {
  mobile,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  next,
  redux,
  tailwind,
  nodejs,
  java,
  git,
  figma,
  python,
  docker,
  waddle_insurance,
  vella,
  digifigs,
  zummit,
  tsb,
  digifigs_work,
  tripguide,
  vella_work,
  finAnalysis,
  mancala,
  backend,
} from "../assets";
import { Experience, NavLink, Technology, Testimonial } from "../types/global";

export const navLinks: NavLink[] = [
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

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },

  {
    title: "UI/UX",
    icon: creator,
  },
  {
    title: "AI Entusiast",
    icon: backend,
  },
];

const technologies: Technology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS",
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
    name: "Next JS",
    icon: next,
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
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },

  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Docker",
    icon: docker,
  },
];

const experiences: Experience[] = [
  {
    title: "Frontend Developer",
    company_name: "Waddle Insurance",
    icon: waddle_insurance,
    iconBg: "#383E56",
    date: "October 2023 - Present",
    points: [
      "Revolutionised customer interactions and boosted team efficiency by 30% through the creation of a cutting-edge Customer Relation Management (CRM) software.",
      "Conducted comprehensive user training sessions, empowering teams to fully utilise the CRM tool and ensuring a seamless transition.",
      "Led the end-to-end design and development of user interfaces for the CRM software, incorporating team feedback and industry best practices.",
      "Established design guidelines, ensuring a consistent and cohesive user interface across the CRM software.",
      "Implemented data visualisation in CRM, enhancing team efficiency and boosting data-driven decision-making by 18%.",
      "Contributed to the development of scalable and maintainable codebase for future enhancements.",
      "Collaborated with stakeholders to gather requirements and provided technical expertise in project planning meetings.",
    ],
  },
  {
    title: "Customer Service Consultant (Part-Time)",
    company_name: "Trustee Savings Bank (TSB)",
    icon: tsb,
    iconBg: "#E6DEDD",
    date: "December 2022 - September 2023",
    points: [
      "Analysed customer needs and proposed innovative service opportunities, driving advancements in customer service.",
      "Boosted customer trust by resolving 95% of technical inquiries within the first contact.",
      "Reduced dispute resolution times by 25% through efficient communication strategies.",
      "Conducted regular customer feedback sessions, implementing improvements based on user suggestions.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Vella Finance",
    icon: vella,
    iconBg: "#E6DEDD",
    date: "March 2022 - September 2022",
    points: [
      "Led the technical development of a next-gen mobile application using Ionic and React, facilitating over 5,000 cross-border payments.",
      "Instituted a peer review process, reducing code conflicts and deployment rollbacks by 40%.",
      "Managed the development of 5+ feature sets, resulting in a 35% increase in app performance.",
      "Contributed to the implementation of high-level product design strategy and software development.",
      "Guided 3 junior developers, accelerating their onboarding process by 50%.",
      "Implemented A/B testing for user interface elements, refining designs based on user interaction data.",
      "Contributed to the high-level product design strategy and software development.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Zummit Infolabs",
    icon: zummit,
    iconBg: "#383E56",
    date: "December 2021 - March 2022",
    points: [
      "Contributed to the successful migration of a user interface to a single-page application, resulting in an 8% uplift in user retention.",
      "Acquired advanced proficiency in ReactJS, completing 100 hours of dedicated training and implementing gained knowledge in live projects.",
      "Reduced load times by 20% by optimising code and assets for web interfaces.",
      "Collaborated on a team initiative that improved the Agile development process, increasing sprint completion rates by 15%.",
      "Introduced code documentation standards, enhancing code readability and facilitating knowledge transfer.",
      "Participated in weekly knowledge-sharing sessions, fostering a culture of continuous learning.",
    ],
  },

  {
    title: "Junior Web Developer",
    company_name: "Digital Figures",
    icon: digifigs,
    iconBg: "#E6DEDD",
    date: "February 2021 - December 2021",
    points: [
      "Revamped a client website for mobile users, improving responsiveness and increasing user activity by 8%.",
      "Piloted SEO strategies that propelled a client's site to the top 5 in local search rankings, achieving a 40% increase in organic traffic.",
      "Attained advanced proficiency in ReactJS, completing 100 hours of dedicated training and applying acquired knowledge in live projects.",

      "Modularised code components, enabling smoother scalability and reducing future development time by an estimated 20%.",
      "Completed a mobile-responsive redesign of a client website using HTML, CSS, and JavaScript, leading to an 8% surge in mobile user engagement.",
      "Collaborated with cross-functional teams to ensure seamless integration of web components.",
      "Provided technical documentation for codebase and conducted knowledge-sharing sessions for team members.",
    ],
  },
  {
    title: "Product Design Intern",
    company_name: "Digital Figures",
    icon: digifigs,
    iconBg: "#E6DEDD",
    date: "February 2021 - May 2021",
    points: [
      "Conducted in-depth user research, translating findings into actionable design improvements and enhancing client web presence.",
      "Successfully proposed and designed a feature implemented across three products, leading to a 10% uplift in user interaction.",
      "Collaborated with the team to integrate the development of user personas, leading to tailored product features and a 12% rise in user satisfaction.",
      "Ensured the technical feasibility of UI/UX design and provided design support during product development.",
      "Contributed to the creation of design prototypes and participated in user testing sessions.",
    ],
  },
];

const testimonials: Testimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "FinAnalysis",
    description:
      "An award winning web-based application, developed from my MSc. dissertation in Computer Science, that utilises machine learning to simplify stock trading analysis.",
    tags: [
      {
        name: "TypeScript",
        color: "pink-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "yellow-text-gradient",
      },
      {
        name: "Django",
        color: "orange-text-gradient",
      },
      {
        name: "tailwind",
        color: "violet-text-gradient",
      },
    ],
    image: finAnalysis,
    source_code_link: "https://github.com/Olabayoji/FinAnalysis",
    link: false,
  },
  {
    name: "Mancala",
    description:
      "A software engineering coursework project, this Java-based desktop application is designed for users to enjoy the classic board game, Mancala.",
    tags: [
      {
        name: "Java",
        color: "pink-text-gradient",
      },
      {
        name: "JavaFX",
        color: "green-text-gradient",
      },
      {
        name: "SoftwareEngineering",
        color: "blue-text-gradient",
      },
      {
        name: "UI/UX",
        color: "violet-text-gradient",
      },
      {
        name: "SceneBuilder",
        color: "orange-text-gradient",
      },
    ],
    image: mancala,
    source_code_link: "https://github.com/Olabayoji/Mancala",
    link: false,
  },
  {
    name: "Vella Finance",
    description:
      "A web-based and mobile-based platform that offers end-to-end banking and global payments infrastructure built for enterprises across Africa.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "orange-text-gradient",
      },
      {
        name: "Ionic",
        color: "green-text-gradient",
      },
      {
        name: "WebSockets",
        color: "yellow-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Figma",
        color: "orange-text-gradient",
      },
    ],
    image: vella_work,
    source_code_link: "https://vella.finance/",
    link: true,
  },
  {
    name: "Digital Figures",
    description:
      "A leading Digital and Growth marketing agency that leverages growth and marketing solutions to enhance brand visibility and drive ROI for clients",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "NextJS",
        color: "pink-text-gradient",
      },
      {
        name: "Figma",
        color: "orange-text-gradient",
      },
    ],
    image: digifigs_work,
    source_code_link: "https://digifigs.com/",
    link: true,
  },
];

export { services, technologies, experiences, testimonials, projects };
