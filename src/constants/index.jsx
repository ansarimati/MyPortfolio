import { meta, shopify, starbucks, tesla } from "../asset/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../asset/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "JavaScript Developer",
        company_name: "United Software pvt ltd",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "August 2017 - January 2018",
        points: [
            "Developing and maintaining web applications features using HTML5, CSS3 and JavaScript.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality features.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full Stack MERN Developer",
        company_name: "United Software pvt ltd",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "January 2018 - November 2023",
        points: [
            "Working on UI components with React & Redux as front-end stack and Node as back-end.",
            "Creating widgets and dashboards for sports and news domains",
            "Build reusable, modular, and maintainable UI components that can be easily integrated across multiple projects.",
            "Creating, optimizing and maintaining REST APIs.",
            "Creating schemas, Manage data on MongoDB an MySQL databases."
        ],
    },
    {
        title: "Node JS Developer",
        company_name: "Astron Micro Technologies, LLC",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Jan 2024 - May 2025",
        points: [
            "Designed and developed RESTful APIs using Node.js and Express, Integrated third party APIs.",
            "Collaborated with frontend developers to integrate user-facing elements with server-side logic.",
            "Optimized server performance by re ning API endpoints and reducing response times.",
            "Designed database schemas and integrated databases with Node.js applications.",
            "Conducted security audits and code reviews to ensure compliance with security standards."
        ],
    },
    // {
    //     title: "Full stack Developer",
    //     company_name: "Meta",
    //     icon: meta,
    //     iconBg: "#a2d2ff",
    //     date: "Jan 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
];

export const socialLinks = [
    // {
    //     name: 'Contact',
    //     iconUrl: contact,
    //     link: '/contact',
    // },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/ansarimati',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/ansarimati',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'CompBldr(TraineryOne)',
        description: 'CompBldr is a comprehensive compensation\n' +
            ' management solution that help organizations manage\n' +
            ' their compensation processes with features focused on\n' +
            ' job descriptions, pay equity, and salary structure\n' +
            ' modeling.',
        // link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Online Food Delivery Application',
        description: 'A web-based platform that allows users to browse restaurants, order food online, and track delivery status in real-time. It features user authentication, menu browsing, cart management, and secure checkout. Restaurants can manage orders, update menus, and monitor delivery progress through a dedicated dashboard.',
        // link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Advanced Inventory System',
        description: 'A comprehensive web application designed to manage stock levels, track product movement, and automate restocking processes. It includes features like real-time inventory updates, low-stock alerts, and role-based access for admins and staff. The system supports detailed reporting and integrates with sales and purchase modules for end-to-end inventory control..',
        // link: 'https://github.com/adrianhajdin/pricewise',
    },

    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        // link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        // link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        // link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        // link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        // link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        // link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];