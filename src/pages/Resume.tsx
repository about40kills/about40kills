import { ArrowLeft } from 'lucide-react';
import { GitHubLogoIcon, LinkedInLogoIcon, EnvelopeClosedIcon, GlobeIcon } from '@radix-ui/react-icons';

const RESUME_DATA = {
    name: "Davis Opoku",
    initials: "DO",
    location: "Kumasi, Ghana",
    locationLink: "https://www.google.com/maps/place/Kumasi",
    about: "Self-motivated and passionate Computer Science student with hands-on experience in software development, backend technologies, computer vision, and machine learning",
    summary: "I am a self-motivated and passionate Computer Science student with hands-on experience in software development, backend technologies, computer vision, and machine learning. My academic coursework has equipped me with solid foundation in programming, data structures and algorithms, and software engineering principles. I am recognized for my excellent communication, teamwork and problem-solving abilities. I excel in collaborative and fast-paced environments. I am eager to apply my technical skills through internships or projects to contribute to impactful software solutions.",
    avatarUrl: "/assets/profile.jpg",
    contact: {
        email: "opokudavis141@gmail.com",
        phone: "0554486674",
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
        ],
    },
    education: [
        {
            school: "Kwame Nkrumah University of Science and Technology (KNUST)",
            location: "Kumasi, Ghana",
            degree: "BSc. Computer Science",
            start: "2022",
            end: "Expected September 2026",
        },
        {
            school: "Presbyterian Boys' Secondary School",
            location: "Legon, Ghana",
            degree: "W.A.S.S.C.E (General Science)",
            start: "September 2019",
            end: "September 2022",
        },
    ],
    work: [
        {
            company: "AmaliTech",
            location: "Remote",
            link: "https://amalitech.com",
            badges: ["Software Developer Intern"],
            title: "Software Developer Intern",
            start: "September 2025",
            end: "November 2025",
            description: [
                "Contributed to software development projects using modern web technologies and best practices.",
                "Collaborated with cross-functional teams to deliver high-quality software solutions."
            ],
        },
        {
            company: "Lighter Fixes Apple",
            location: "Kumasi",
            link: "#",
            badges: ["Technical Intern"],
            title: "Technical Intern",
            start: "October 2024",
            end: "Present / Part-time",
            description: [
                "Supervised and assisted in phone repairs, diagnosing hardware and software issues for Apple devices, improving repairs turnaround time by about 30%.",
                "Performed software installations and updates, ensuring optimal device performance and customer satisfaction."
            ],
        },
        {
            company: "Melon GSM",
            location: "Kumasi",
            link: "#",
            badges: ["Intern"],
            title: "Intern",
            start: "September 2023",
            end: "December 2023",
            description: [
                "Assisted in the troubleshooting and repairing mobile devices, focusing on software diagnostics and hardware component replacement.",
                "Supported customers with software setup and configuration, enhancing user experience and device functionality."
            ],
        },
        {
            company: "Melon GSM",
            location: "Kumasi",
            link: "#",
            badges: ["Intern"],
            title: "Intern",
            start: "September 2024",
            end: "October 2024",
            description: [
                "Assisted in the troubleshooting and repairing mobile devices, focusing on software diagnostics and hardware component replacement.",
                "Supported customers with software setup and configuration, enhancing user experience and device functionality."
            ],
        },
    ],
    skills: [
        "JavaScript",
        "Python",
        "Java",
        "OpenCV",
        "Numpy",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Firebase",
        "SQLite",
        "Git",
        "GitHub",
        "Postman",
        "Vercel",
        "Visual Studio Code",
        "Mobile device repairs",
        "Software installation",
        "Hardware troubleshooting",
        "Problem-solving",
        "Teamwork",
        "Leadership",
    ],
    projects: [
        {
            title: "Personal Portfolio Website",
            techStack: ["HTML", "CSS", "JavaScript"],
            description: "Built a responsive website using HTML, CSS, and JavaScript to showcase academic work and internship projects deployed on Vercel, Render, GitHub pages.",
            link: {
                href: "https://github.com/about40kills",
            },
        },
        {
            title: "Real Time Object Detection",
            techStack: ["Python", "OpenCV", "Computer Vision"],
            description: "Python project for detecting moving objects in real-time using computer vision techniques. Implements advanced algorithms for tracking and annotating objects in video streams.",
            link: {
                href: "https://github.com/about40kills/RealTimeObjectDetectionAndAnnotation",
            },
        },
        {
            title: "Real Time Face Blurring",
            techStack: ["Python", "OpenCV", "Privacy"],
            description: "Privacy-focused application that blurs faces in real-time video streams. Uses facial recognition to protect identity in live video feeds.",
            link: {
                href: "https://github.com/about40kills/RealTimeFaceBlurring",
            },
        },
        {
            title: "SmartCV Analyzer/Generator",
            techStack: ["HTML", "CSS", "CV"],
            description: "A modern web application for analyzing CVs and generating detailed reports with PDF export functionality.",
            link: {
                href: "https://github.com/about40kills/cv-analyzer-generator",
            },
        },
        {
            title: "IMG - PDF Generator",
            techStack: ["JavaScript", "PDF", "Automation"],
            description: "Built a simple and efficient tool to convert images to PDFs. JavaScript-based tool for generating PDF documents programmatically.",
            link: {
                href: "https://github.com/about40kills/pdf-generator",
            },
        },
        {
            title: "EventHive",
            techStack: ["React", "Node.js", "MongoDB", "Event Management"],
            description: "A comprehensive event management platform for creating, discovering, and managing events. Features user authentication, event creation, RSVP tracking, and real-time updates for seamless event coordination.",
            link: {
                href: "https://github.com/about40kills/EventHive",
            },
        },
        {
            title: "Object Detection with YOLOX",
            techStack: ["Python", "YOLOX", "Deep Learning", "Computer Vision"],
            description: "Advanced object detection system implementing YOLOX architecture for fast and accurate real-time detection. Optimized for high-performance inference with state-of-the-art deep learning techniques.",
            link: {
                href: "https://github.com/about40kills/ObjectDetectYolox",
            },
        },
        {
            title: "SHUTTLE APP",
            techStack: ["Mobile", "Web App", "Collaboration"],
            description: (
                <>
                    A mobile/web app to help students and shuttle drivers of KNUST for convenient shuttle services. Collaboration with <a href="https://github.com/alpha0316" target="_blank" rel="noopener noreferrer" className="hover:underline">Prince Essandoh</a> and <a href="https://github.com/thelocalgodd" target="_blank" rel="noopener noreferrer" className="hover:underline">Vincent Kpemlie</a>.
                </>
            ),
            link: {
                href: "#",
            },
        },
    ],
    voluntaryActivities: [
        {
            title: "Academic City University Tech Expo",
            description: "Assisted in coordinating senior high school mobility on the day of the fair."
        },
        {
            title: "Open Source Contribution",
            description: "Contributed bug fixes on a local restaurant's website."
        }
    ],
    references: [
        {
            name: "Dr. K.O Agyemang",
            organization: "KNUST",
            position: "Lecturer, Department of Computer Science, College Of Science",
            phone: "+233 244 72 7596",
            email: "kwabenaoa@knust.edu.gh"
        },
        {
            name: "Dr. David Nartey Obemah",
            organization: "KNUST",
            position: "Lecturer, Department of Environmental Science, College of Science",
            phone: "+233 554 40 2109",
            email: "donartey@knust.du.gh"
        }
    ]
};

export function Resume() {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');
                
                .squid-game-font {
                    font-family: 'Righteous', cursive;
                    letter-spacing: 0.1em;
                    text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.1);
                }
            `}</style>
            <div className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
                <a
                    href="/"
                    className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8 print:hidden"
                >
                    <ArrowLeft size={20} />
                    <span>Back to Portfolio</span>
                </a>

                <section className="mx-auto w-full max-w-2xl space-y-8 bg-white dark:bg-gray-950 print:space-y-6">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                        <div className="flex-1 space-y-1.5">
                            <h1 className="squid-game-font text-3xl font-bold tracking-wider">{RESUME_DATA.name}</h1>
                            <p className="max-w-md text-pretty font-mono text-sm text-gray-600 dark:text-gray-400">
                                {RESUME_DATA.about}
                            </p>
                            <p className="max-w-md items-center text-pretty font-mono text-xs text-gray-600 dark:text-gray-400">
                                <a
                                    className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                                    href={RESUME_DATA.locationLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <GlobeIcon className="h-3 w-3" />
                                    {RESUME_DATA.location}
                                </a>
                            </p>
                            <p className="max-w-md text-pretty font-mono text-xs text-gray-600 dark:text-gray-400">
                                {RESUME_DATA.contact.phone}
                            </p>
                            <div className="flex gap-x-1 pt-1 font-mono text-sm text-gray-600 dark:text-gray-400 print:hidden">
                                {RESUME_DATA.contact.email && (
                                    <a
                                        href={`mailto:${RESUME_DATA.contact.email}`}
                                        className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
                                    >
                                        <EnvelopeClosedIcon className="h-4 w-4" />
                                    </a>
                                )}
                                {RESUME_DATA.contact.social.map((social) => {
                                    const Icon = social.icon;
                                    return (
                                        <a
                                            key={social.name}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
                                        >
                                            <Icon className="h-4 w-4" />
                                        </a>
                                    );
                                })}
                            </div>
                            <div className="hidden print:flex flex-col gap-y-1 pt-1 font-mono text-xs">
                                <div>{RESUME_DATA.contact.email}</div>
                                <div>{RESUME_DATA.contact.phone}</div>
                                {RESUME_DATA.contact.social.map((social) => (
                                    <div key={social.name}>{social.url}</div>
                                ))}
                            </div>
                        </div>

                        <img
                            className="h-28 w-28 rounded-full object-cover"
                            src={RESUME_DATA.avatarUrl}
                            alt={RESUME_DATA.name}
                        />
                    </div>

                    {/* Profile */}
                    <section className="flex min-h-0 flex-col gap-y-3">
                        <h2 className="text-xl font-bold">Profile</h2>
                        <p className="text-pretty font-mono text-sm text-gray-600 dark:text-gray-400">
                            {RESUME_DATA.summary}
                        </p>
                    </section>

                    {/* Education */}
                    <section className="flex min-h-0 flex-col gap-y-3">
                        <h2 className="text-xl font-bold">Education</h2>
                        {RESUME_DATA.education.map((education) => (
                            <div key={education.school + education.start} className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
                                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 text-base mb-2">
                                    <div className="flex-1">
                                        <h3 className="font-semibold leading-none mb-1">{education.school}</h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{education.location}</p>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">{education.degree}</p>
                                    </div>
                                    <div className="text-sm tabular-nums text-gray-500 sm:whitespace-nowrap">
                                        {education.start} - {education.end}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </section>

                    {/* Work Experience */}
                    <section className="flex min-h-0 flex-col gap-y-3">
                        <h2 className="text-xl font-bold">Work Experience</h2>
                        {RESUME_DATA.work.map((work, index) => (
                            <div key={work.company + work.start + index} className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
                                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 text-base mb-2">
                                    <div className="flex-1 min-w-0">
                                        <h3 className="flex flex-wrap items-center gap-2 font-semibold leading-none mb-1">
                                            <span>{work.company}</span>
                                            {work.badges.map((badge) => (
                                                <span key={badge} className="inline-flex items-center rounded-full bg-gray-100 dark:bg-gray-800 px-2 py-1 text-xs">
                                                    {badge}
                                                </span>
                                            ))}
                                        </h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{work.location}</p>
                                        <h4 className="font-mono text-sm leading-none mb-2">{work.title}</h4>
                                    </div>
                                    <div className="text-sm tabular-nums text-gray-500 sm:whitespace-nowrap">
                                        {work.start} - {work.end ?? 'Present'}
                                    </div>
                                </div>
                                <ul className="list-disc list-inside space-y-1">
                                    {work.description.map((desc, i) => (
                                        <li key={i} className="text-xs text-gray-600 dark:text-gray-400">{desc}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </section>

                    {/* Projects/Research Experience */}
                    <section className="flex min-h-0 flex-col gap-y-3">
                        <h2 className="text-xl font-bold">Projects/Research Experience</h2>
                        <div className="grid gap-3">
                            {RESUME_DATA.projects.map((project) => (
                                <div key={project.title} className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
                                    <div className="space-y-2">
                                        <h3 className="text-base font-semibold">
                                            {project.link.href !== "#" ? (
                                                <a
                                                    href={project.link.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="hover:underline"
                                                >
                                                    {project.title}
                                                </a>
                                            ) : (
                                                project.title
                                            )}
                                        </h3>
                                        <p className="font-mono text-xs text-gray-600 dark:text-gray-400">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-1">
                                            {project.techStack.map((tech) => (
                                                <span key={tech} className="inline-flex items-center rounded-full bg-gray-100 dark:bg-gray-800 px-2 py-0.5 text-[10px]">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Voluntary/Extra-Curricular Activity */}
                    <section className="flex min-h-0 flex-col gap-y-3">
                        <h2 className="text-xl font-bold">Voluntary/Extra-Curricular Activity</h2>
                        <div className="space-y-2">
                            {RESUME_DATA.voluntaryActivities.map((activity) => (
                                <div key={activity.title} className="rounded-lg border border-gray-200 dark:border-gray-800 p-3">
                                    <h3 className="font-semibold text-sm mb-1">{activity.title}</h3>
                                    <p className="text-xs text-gray-600 dark:text-gray-400">{activity.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Skills and Abilities */}
                    <section className="flex min-h-0 flex-col gap-y-3">
                        <h2 className="text-xl font-bold">Skills and Abilities</h2>
                        <div className="flex flex-wrap gap-1">
                            {RESUME_DATA.skills.map((skill) => (
                                <span key={skill} className="inline-flex items-center rounded-full bg-gray-100 dark:bg-gray-800 px-3 py-1 text-xs">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </section>

                    {/* References */}
                    <section className="flex min-h-0 flex-col gap-y-3">
                        <h2 className="text-xl font-bold">References</h2>
                        <div className="grid gap-4 md:grid-cols-2">
                            {RESUME_DATA.references.map((reference) => (
                                <div key={reference.email} className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
                                    <h3 className="font-semibold text-sm mb-1">{reference.name}</h3>
                                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">{reference.organization}</p>
                                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">{reference.position}</p>
                                    <div className="space-y-0.5 text-xs">
                                        <p className="text-gray-600 dark:text-gray-400">Phone: {reference.phone}</p>
                                        <p className="text-gray-600 dark:text-gray-400">Email: {reference.email}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </section>
            </div>
        </div>
    );
}