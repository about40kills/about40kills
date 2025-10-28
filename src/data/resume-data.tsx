import { GitHubLogoIcon, LinkedInLogoIcon, EnvelopeClosedIcon } from '@radix-ui/react-icons';

export const RESUME_DATA = {
    name: "Davis Opoku",
    initials: "DO",
    location: "Remote",
    locationLink: "https://www.google.com/maps",
    about: "Software Developer passionate about building innovative solutions",
    summary: "Software developer with expertise in Python, JavaScript, and modern web technologies. Specialized in computer vision, real-time object detection, and full-stack development. Passionate about creating efficient, user-friendly applications.",
    avatarUrl: "https://github.com/about40kills.png",
    personalWebsiteUrl: "https://davisopoku.dev",
    contact: {
        email: "contact@davisopoku.dev",
        tel: "",
        social: [
            {
                name: "GitHub",
                url: "https://github.com/about40kills",
                icon: GitHubLogoIcon,
            },
            {
                name: "LinkedIn",
                url: "https://linkedin.com/in/davis-opoku-b3605521a",
                icon: LinkedInLogoIcon,
            },
            {
                name: "Email",
                url: "mailto:contact@davisopoku.dev",
                icon: EnvelopeClosedIcon,
            },
        ],
    },
    education: [
        {
            school: "Your University",
            degree: "Computer Science",
            start: "2020",
            end: "2024",
        },
    ],
    work: [
        {
            company: "Freelance",
            link: "https://davisopoku.dev",
            badges: ["Remote"],
            title: "Software Developer",
            start: "2022",
            end: null,
            description: "Building web applications and computer vision solutions for various clients. Specializing in Python, JavaScript, and modern frameworks.",
        },
    ],
    skills: [
        "Python",
        "JavaScript",
        "Java",
        "React",
        "Node.js",
        "OpenCV",
        "Computer Vision",
        "HTML/CSS",
        "MSSQL",
        "Git",
        "REST APIs",
    ],
    projects: [
        {
            title: "Real Time Object Detection",
            techStack: ["Python", "OpenCV", "Computer Vision"],
            description: "Python project for detecting moving objects in real-time using computer vision techniques. Implements advanced algorithms for tracking and annotating objects in video streams.",
            link: {
                label: "github.com",
                href: "https://github.com/about40kills/RealTimeObjectDetectionAndAnnotation",
            },
        },
        {
            title: "Real Time Face Blurring",
            techStack: ["Python", "OpenCV", "Privacy"],
            description: "Privacy-focused application that blurs faces in real-time video streams. Uses facial recognition to protect identity in live video feeds.",
            link: {
                label: "github.com",
                href: "https://github.com/about40kills/RealTimeFaceBlurring",
            },
        },
        {
            title: "EventHive",
            techStack: ["React", "Node.js", "MongoDB"],
            description: "A comprehensive event management platform for creating, discovering, and managing events. Features user authentication, event creation, RSVP tracking, and real-time updates.",
            link: {
                label: "github.com",
                href: "https://github.com/about40kills/EventHive",
            },
        },
        {
            title: "Object Detection with YOLOX",
            techStack: ["Python", "YOLOX", "Deep Learning"],
            description: "Advanced object detection system implementing YOLOX architecture for fast and accurate real-time detection. Optimized for high-performance inference.",
            link: {
                label: "github.com",
                href: "https://github.com/about40kills/ObjectDetectYolox",
            },
        },
        {
            title: "SmartCV Analyzer/Generator",
            techStack: ["HTML", "CSS", "JavaScript"],
            description: "A modern web application for analyzing CVs and generating detailed reports with PDF export functionality.",
            link: {
                label: "github.com",
                href: "https://github.com/about40kills/cv-analyzer-generator",
            },
        },
    ],
} as const;
