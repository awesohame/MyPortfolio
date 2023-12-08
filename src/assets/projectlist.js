import DiscordBotimg from "./DiscordBot.png";
import StudySprintimg from "./StudySprint.png";
import Portfolioimg from "./Portfolio.png";

const projectlist = [
    {
        title: "Discord JS Music bot",
        desc:
            "A Discord bot with music and basic moderation commands.",
        image: DiscordBotimg,
        site: "",
        code: "https://github.com/awesohame/SancBotDJS",
        used: ["DiscordJS", "ExpressJS", "ytdl-core"],
        id: 1,
    },
    {
        title: "StudySprint",
        desc:
            "An examination portal website.",
        image: StudySprintimg,
        site: "",
        code: "https://github.com/awesohame/ExamPortal-Website",
        used: ["HTML", "CSS", "Javascript", "ExpressJS", "MySQL", "EJS"],
        id: 2,
    },
    {
        title: "Portfolio Site",
        desc:
            "A portfolio website to showcase my projects.",
        image: Portfolioimg,
        site: "",
        code: "https://github.com/awesohame/PortfolioSite",
        used: ["ReactJS", "HTML", "CSS"],
        id: 3,
    },
];

export default projectlist;