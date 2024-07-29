import internIt from '@/public/internIt-cover.jpeg'
import timeTrack from '@/public/time-track-cover.jpeg'
import tipCal from '@/public/tip-cal-cover.jpeg'
import sunsideLanding from '@/public/sunside-landing.jpeg'
import expenseTracker from '@/public/expense-track-cover.jpeg'
import sharkTask from '@/public/shark-task-cover.jpeg'
import buyBooks from '@/public/buy-books-cover.png'

export const links = [
    {
        name: 'Home',
        hash: '#home',
    },
    {
        name: 'About',
        hash: '#about',
    },
    {
        name: 'Projects',
        hash: '#projects',
    },
    {
        name: 'Skills',
        hash: '#skills',
    },
    {
        name: 'Contact',
        hash: '#contact',
    },
] as const

export const projectsData = [
    {
        title: 'InternIT',
        description:
            'InternIT is a user-friendly internship posting platform I am developing to cover all aspects of full stackdevelopment. It is an ongoing project, with plans to expand and add more functionalities untildeployment.',
        tags: ['React', 'Springboot', 'MySQL', 'Tailwind', 'JSON server'],
        imageUrl: internIt,
        gitLink: 'https://github.com/Sachintha-Prasad/InternIT',
        linkedinLink: '',
        liveLink: '',
    },
    {
        title: 'NexPay E-wallet application',
        description:
            'NexPay Is a cutting-edge digital payment application designed to revolutionize how users manage theirnancial transactions with a focus on convenience, security, and versatility.',
        tags: ['React Native', 'Node JS', 'Mongo DB'],
        imageUrl: expenseTracker,
        gitLink: 'https://github.com/Shehan-lakshitha/NexPay',
        linkedinLink:
            'https://www.linkedin.com/posts/shehan-lakshitha-8ab6a9218_nexpay-digitalpayments-fintech-ugcPost-7185841894319382529-oYuH?utm_source=share&utm_medium=member_desktop',
        liveLink:
            'https://www.figma.com/proto/5RyJToeVRXMqLljkrLIFbH/Nexpay?node-id=13-36&starting-point-node-id=5%3A8&t=XVQlCTv8mNU4lU94-1',
    },
    {
        title: 'Expense Tracker V1',
        description:
            'Expense Tracker v1 is a modern expense tracking application built with React.js, Tailwind CSS, and Firebase. It allows users to securely log in with their Google account and track income and expenses across devices. The application leverages custom hooks and React Context API for real-time data management.',
        tags: ['React', 'Tailwind', 'Firebase'],
        imageUrl: expenseTracker,
        gitLink: 'https://github.com/Sachintha-Prasad/Expense-tracker-v1',
        linkedinLink:
            'https://www.linkedin.com/posts/activity-7207999254915649536-3Zy2/?utm_source=share&utm_medium=member_desktop',
        liveLink: 'https://expense-tracker-v1-76285.web.app/',
    },
    {
        title: 'Buy Books website',
        description:
            'InternIT is a user-friendly internship posting platform I am developing to cover all aspects of full stackdevelopment. It is an ongoing project, with plans to expand and add more functionalities untildeployment.',
        tags: ['React', 'Tailwind', 'Express JS', 'Mongo DB'],
        imageUrl: buyBooks,
        gitLink: 'https://github.com/Buy-Books/buybook-webproject',
        linkedinLink: '',
        liveLink: '',
    },
    {
        title: 'Time tracking dashboard',
        description:
            'Time tracking dashboard is a Frontend mentor challenge, a perfect opportunity to practice your CSS Grid skills. For anyone wanting to take it up a notch,they provided a JSON data file to practice working with data.',
        tags: ['React', 'Tailwind'],
        imageUrl: timeTrack,
        gitLink:
            'https://github.com/Sachintha-Prasad/Frontend-Mentor-time-tracking-dashboard-main',
        linkedinLink: '',
        liveLink: 'https://time-tracking-dashboard-sachintha-pra.netlify.app/',
    },
    {
        title: 'Tip Calculator',
        description:
            'Tip calculator app challenge in Frontend mentor. This small app is perfect for anyone starting to get to grips with JavaScript. The calculator functionality will be a nice test!',
        tags: ['React', 'Tailwind'],
        imageUrl: tipCal,
        gitLink:
            'https://github.com/Sachintha-Prasad/Frontend-Mentor-tip-calculator-app-main',
        linkedinLink: '',
        liveLink: 'https://sachintha-prasad-tip-cal.netlify.app/',
    },
    {
        title: 'Sunnyside agency landing page',
        description:
            'Agency landing page This challenge will be a perfect test of layout and responsive skills. There is a tiny bit of JS for the mobile menu,.',
        tags: ['React', 'Tailwind'],
        imageUrl: sunsideLanding,
        gitLink:
            'https://github.com/Sachintha-Prasad/Frontend-Mentor-sunnyside-agency-landing-page-main',
        linkedinLink: '',
        liveLink: 'https://sunnyside-sachintha-prasad.netlify.app/',
    },
    {
        title: 'Shark Task TODO',
        description:
            'Shark Task TODO is a sleek and efficient todo application built with HTML, JavaScript, and Tailwind CSS. Designed to streamline your task management, Shark Task offers a user-friendly interface that allows you to effortlessly add, edit, and delete tasks. Its minimalistic design, powered by Tailwind CSS, ensures a visually appealing and intuitive user experience, making it the perfect tool to keep your daily tasks organized and on track.',
        tags: ['HTML', 'Tailwind', 'Javascript'],

        imageUrl: sharkTask,
        gitLink:
            'https://github.com/Sachintha-Prasad/Shark-Tasks-TO-DO-application?tab=readme-ov-file',
        linkedinLink: '',
        liveLink: 'https://shark-tasks.netlify.app/',
    },
] as const

export const skillsData = [
    { skill: 'HTML', icon: 'https://skillicons.dev/icons?i=html' },
    { skill: 'CSS', icon: 'https://skillicons.dev/icons?i=css' },
    { skill: 'JavaScript', icon: 'https://skillicons.dev/icons?i=javascript' },
    { skill: 'TypeScript', icon: 'https://skillicons.dev/icons?i=typescript' },
    { skill: 'React', icon: 'https://skillicons.dev/icons?i=react' },
    { skill: 'Next.js', icon: 'https://skillicons.dev/icons?i=nextjs' },
    { skill: 'Node.js', icon: 'https://skillicons.dev/icons?i=nodejs' },
    { skill: 'Git', icon: 'https://skillicons.dev/icons?i=git' },
    { skill: 'Tailwind', icon: 'https://skillicons.dev/icons?i=tailwind' },
    { skill: 'Scss', icon: 'https://skillicons.dev/icons?i=scss' },
    { skill: 'Mysql', icon: 'https://skillicons.dev/icons?i=mysql' },
    { skill: 'MongoDB', icon: 'https://skillicons.dev/icons?i=mongodb' },
    { skill: 'Redux', icon: 'https://skillicons.dev/icons?i=redux' },
    { skill: 'Express', icon: 'https://skillicons.dev/icons?i=express' },
    { skill: 'Java', icon: 'https://skillicons.dev/icons?i=java' },
    { skill: 'Spring', icon: 'https://skillicons.dev/icons?i=spring' },
    { skill: 'Framer Motion', icon: 'https://skillicons.dev/icons?i=framer' },
] as const
