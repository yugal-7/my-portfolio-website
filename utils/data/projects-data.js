import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Trade Wave',
        description: "Developed an exchange platform using MERN stack, Kafka, WebSockets, improving data synchronization and handling over 10,000 transactions per second.",
        tools: ['Next.js', 'Redis', 'Kafka', 'Express', 'Websockets', 'TimescaleDB'],
        type: 'Realtime Application',
        code: 'github.com/yugal-7/Exchange',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Musing Mind',
        description: "Created a blog platform similar to Medium using the MERN stack, implementing role-based access control and SEO optimization, increasing load time by 20% Implemented features such as user profiles, article creation and editing, commenting, and liking, ensuring acomprehensive set of functionalities.",
        tools: ['React', 'DynamoDB', 'Tailwind CSS', 'Prisma', 'Hono', 'Cloudflare', 'Node'],
        type: 'Full Stack Application',
        code: 'github.com/yugal-7/Musing-mind',
        demo: 'https://musing-mind-frontend.vercel.app/',
        image: crefin,
    },
    {
        id: 3,
        name: 'Y',
        description: "Build a PWA social media platform inspired by X fully build(frontend and backend) using NUXT. I have developed API and UI using Nuxt, Typescript, TailwindCSS, Prisma, and DynamoDB.",
        tools: ['NUXT', 'DynamoDB', 'Tailwind CSS', 'Prisma', 'PWA'],
        type: 'Full Stack Application',
        code: 'github.com/yugal-7/Y',
        demo: 'https://vercel.com/yugal-vashishths-projects',
        image: crefin,
    }
    // {
    //     id: 4,
    //     name: 'Newsroom Management',
    //     description: "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
    //     tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', "Calendar"],
    //     code: '',
    //     demo: '',
    //     image: ayla,
    //     role: 'Full Stack Developer',
    // },
    // {
    //     id: 1,
    //     name: 'AI Powered Financial App',
    //     description: "Me and my team built an AI-powered financial mobile application. I have developed API using Express, Typescript, OpenAI, AWS, and MongoDB. Used OTP via AWS SES, Google, and Facebook for the authentication system. Built AI assistants using OpenAI's latest model and trained using our dataset. Voice messages are converted to text using AWS Transcribe. The app fetches data from Google Sheets and generates a PDF term sheet, sent via AWS SES.",
    //     tools: ['Express', 'MongoDB', 'OpenAI API', 'AWS SES', 'AWS S3', 'Node Mailer', 'Joi', 'Puppeteer', 'EC2', 'PM2', 'Nginx'],
    //     role: 'Backend Developer',
    //     code: '',
    //     demo: '',
    //     image: crefin,
    // },
    // {
    //     id: 2,
    //     name: 'Travel Agency App',
    //     description: 'I have designed and developed a full-stack web app for 2Expedition, a travel agency in Armenia. I created the UI using NextJS, Typescript, MUI, TailwindCSS, Google Maps, Sun-Editor, and React Slick. The app supports multiple languages and currencies. I developed the API using NestJS, Typescript, MySQL, TypeORM, AWS, and Nodemailer. I deployed the front-end app to AWS Amplify and the back-end app to AWS EC2.',
    //     tools: ['NextJS', 'Tailwind CSS', "Google Maps", "NestJS", "TypeScript", "MySQL", "AWS S3", "Sun-Editor", "Gmail Passkey"],
    //     role: 'Full Stack Developer',
    //     code: '',
    //     demo: '',
    //     image: travel,
    // },
    // {
    //     id: 3,
    //     name: 'AI Powered Real Estate',
    //     description: 'My team built an AI-based real estate app using Replicate API and OpenAI. We used Express, Typescript, OpenAI, Replicate, Stripe, and Mongoose to develop the API. We utilized NextJS, Formik, TailwindCSS, and other npm libraries for the UI. We have trained multiple AI assistants using the latest GPT model and integrated Replicate API for image processing. We added role-based auth, subscription plans, Cron job scheduling, and payment integration with Stripe.',
    //     tools: ['React', 'Bootstrap', 'SCSS', 'Stripe', 'Express', 'TypeScript', 'MongoDB', 'Azure Blob', 'OpenAI API', 'Replicate AI', 'Cronjob', 'JWT'],
    //     code: '',
    //     role: 'Full Stack Developer',
    //     demo: '',
    //     image: realEstate,
    // },
    // {
    //     id: 4,
    //     name: 'Newsroom Management',
    //     description: "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
    //     tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', "Calendar"],
    //     code: '',
    //     demo: '',
    //     image: ayla,
    //     role: 'Full Stack Developer',
    // }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },