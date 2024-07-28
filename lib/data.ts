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
        title: 'Expense Tracker V1',
        description:
            'InternIT is a user-friendly internship posting platform I am developing to cover all aspects of full stackdevelopment. It is an ongoing project, with plans to expand and add more functionalities untildeployment.',
        tags: ['React', 'Tailwind'],
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
            'InternIT is a user-friendly internship posting platform I am developing to cover all aspects of full stackdevelopment. It is an ongoing project, with plans to expand and add more functionalities untildeployment.',
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
            'InternIT is a user-friendly internship posting platform I am developing to cover all aspects of full stackdevelopment. It is an ongoing project, with plans to expand and add more functionalities untildeployment.',
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
            'InternIT is a user-friendly internship posting platform I am developing to cover all aspects of full stackdevelopment. It is an ongoing project, with plans to expand and add more functionalities untildeployment.',
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
            'InternIT is a user-friendly internship posting platform I am developing to cover all aspects of full stackdevelopment. It is an ongoing project, with plans to expand and add more functionalities untildeployment.',
        tags: ['HTML', 'Tailwind'],

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
