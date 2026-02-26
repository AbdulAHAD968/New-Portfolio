
// Website related settings
const settings = {
  isSplash: false,
};

// SEO Related settings
const seo = {
  title: "Abdul Ahad's Portfolio",
  description:
    "Cybersecurity Engineer and Full-Stack Developer with 2+ years of experience. I specialize in building secure, AI-driven applications and performing deep-dive security assessments across the MERN stack and specialized AI pipelines.",
  og: {
    title: "Abdul Ahad's Portfolio",
    type: "website",
    url: "https://github.com/AbdulAHAD968",
  },
};

//Home Page
const greeting = {
  title: "Abdul Ahad",
  logo_name: "AbdulAHAD",
  nickname: "Abdul",
  subTitle:
    "I'm a Cybersecurity Engineer with a passion for Full-Stack development. I focus on bridging the gap between high-performance code and airtight security, building everything from secure RAG pipelines to scalable real-estate platforms.",
  resumeLink:
    "https://drive.google.com/file/d/1dF7aYJ45oV9_GRvnsxrLmY0p2i3OH_R8/view?usp=drive_link",
  portfolio_repository: "https://github.com/AbdulAHAD968/Folio-Fillas",
  githubProfile: "https://github.com/AbdulAHAD968",
  linkedinProfile: "https://www.linkedin.com/in/abdulahad-zarinc/",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/AbdulAHAD968",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/abdulahad-zarinc/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/@FCTs-vc3st",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:ahad06074@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Medium",
    link: "https://medium.com/@ab.zarinc",
    fontAwesomeIcon: "fa-medium", // Reference https://fontawesome.com/icons/medium?style=brands
    backgroundColor: "#000000e3", // Reference https://simpleicons.org/?q
  },
];

const skills = {
  data: [
    {
      title: "Full Stack & DevSecOps",
      fileName: "FullStackImg",
      skills: [
        "⚡ Architecting secure production-grade AI applications and RAG pipelines for enterprise scale.",
        "⚡ Leading Full-Stack DevSecOps initiatives to bridge development with proactive security.",
        "⚡ Conducting deep-dive VAPT and security hardening for critical financial infrastructure.",
        "⚡ Scaling containerized MERN applications with a focus on cloud security architecture.",
        "⚡ Delivering high-impact web solutions for global clients with a 5-star success record.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#181717",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/Abdul_Ahad_968/",
    },
    {
      siteName: "HackTheBox",
      iconifyClassname: "simple-icons:hackthebox",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://app.hackthebox.com/profile/ABD111",
    },
    {
      siteName: "GeeksForGeeks",
      iconifyClassname: "simple-icons:geeksforgeeks",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "https://www.geeksforgeeks.org/user/ahad08cog/",
    },
    {
      siteName: "TryHackMe",
      iconifyClassname: "simple-icons:tryhackme",
      style: {
        color: "#323754",
      },
      profileLink: "https://tryhackme.com/p/AbdulAhaD",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "FAST NUCES Islamabad",
      subtitle: "BS in Cyber Security",
      logo_path: "fast.png",
      alt_name: "NUCES",
      duration: "2023 - 2027",
      descriptions: [
        "⚡ Major in Cyber Security with a CGPA of 3.64/4.0.",
        "⚡ 4x Dean's List honors (2026) and Gold/Silver Medals for Academic Excellence (2025).",
        "⚡ Focus on Cryptography, Network Security, and AI-driven security orchestration.",
        "⚡ Awarded 1st place in FPSC Problem Solving Challenge (200+ participants) and National PCC Finalist.",
      ],
      website_link: "http://isb.nu.edu.pk/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Google Project Management",
      subtitle: "- Google Career Certificate",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/N96IX7W3P7QN",
      alt_name: "Google",
      color_code: "#c8c9c97f",
    },
    {
      title: "MongoDB NodeJS Developer",
      subtitle: "- MongoDB University",
      logo_path: "mongodb.png",
      certificate_link: "https://learn.mongodb.com/c/5-U5naaIT-6QT9m8YKBwsw",
      alt_name: "MongoDB",
      color_code: "#47A248",
    },
    {
      title: "Github Foundations",
      subtitle: "- Github",
      logo_path: "github_logo.png",
      certificate_link:
        "https://www.credly.com/badges/6078ee7e-738b-4f05-aaac-a8987b039c71/linked_in_profile",
      alt_name: "Github",
      color_code: "#bebebe",
    },
    {
      title: "Pre Security",
      subtitle: "- TryHackMe",
      logo_path: "tryhackme.webp",
      certificate_link:
        "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-WGVD5MTVRD.png",
      alt_name: "TryHackMe",
      color_code: "#000000",
    },
    {
      title: "Intro to Cyber Security",
      subtitle: "- TryHackMe",
      logo_path: "tryhackme.webp",
      certificate_link:
        "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-GUCZPROMO3.png",
      alt_name: "TryHackMe",
      color_code: "#000000",
    },
    {
      title: "Google CyberSecurity",
      subtitle: "- Googlle Career Certificate",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/WAHJ59BMJXPE",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Windows Forensics",
      subtitle: "- Belkasoft",
      logo_path: "belkasoft.png",
      certificate_link:
        "https://belkasoft.thinkific.com/certificates/mjyiz5oksx",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Google AI Essentials",
      subtitle: "- Google Career Certificate",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/68ER7MPA9UBN",
      alt_name: "Google",
      color_code: "#D83B0129",
    },
    {
      title: "Google Prompting Essentials",
      subtitle: "- Google Career Certificate",
      logo_path: "google_logo.png",
      certificate_link:
        "https://coursera.org/share/8431f8ec6fe0c14d72f84643caba9f48",
      alt_name: "Google",
      color_code: "#D83B0179",
    },
    {
      title: "Databases and SQL",
      subtitle: "- Rav Ahuja",
      logo_path: "ibm_logo.png",
      certificate_link: "https://www.coursera.org/account/accomplishments/",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Volunteership",
  description:
    "Information security engineer with a strong foundation in cybersecurity, currently pursuing a bachelor’s degree in cybersecurity. Proficient in vulnerability assessment and penetration testing, with hands-on practice on TryHackMe and HackTheBox. Passionate about transitioning into DevSecOps, IAM, or VAPT roles to strengthen organizational security.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Full Stack Jr. AI Engineer",
          company: "Markhor Systems",
          company_url: "https://markhorsystems.com",
          logo_path: "markhor.jpg",
          duration: "Sep 2025 - Present",
          location: "Islamabad, Pakistan",
          description:
            "Architected and deployed 3+ production-grade RAG pipelines utilizing advanced vector search and semantic retrieval strategies, which improved data extraction accuracy to over 90%. I lead the end-to-end engineering of scalable MERN applications, integrating robust security controls and multi-step AI orchestration workflows. By combining LLM capabilities with computer vision, I've automated complex data processing tasks, significantly reducing manual overhead for enterprise clients.",
          color: "#9b59b6",
        },
        {
          title: "Information Security Intern",
          company: "Mobilink Bank (MMBL)",
          company_url: "https://www.mobilinkbank.com/",
          logo_path: "mmbl.png",
          duration: "July 2025 - Aug 2025",
          location: "Islamabad, Pakistan",
          description:
            "Strengthened the security posture of 400+ critical banking systems by optimizing asset inventory and implementing a streamlined risk-tracking register. I successfully onboarded high-value devices into the Privileged Access Management (PAM) system, ensuring granular control over sensitive infrastructure. Additionally, I developed and delivered security awareness modules for privileged users, which directly contributed to a measurable reduction in internal vulnerability incidents and improved organizational compliance.",
          color: "#ffffff",
        },
        {
          title: "Research and Development Intern",
          company: "CHRIO",
          company_url: "https://chrio.site/",
          logo_path: "chrio.jpeg",
          duration: "May 2025 - Sep 2025",
          location: "Islamabad, Pakistan",
          description:
            "Enhanced AI model training efficiency by 18% through the curation and annotation of massive datasets using Roboflow across various computer vision projects. I conducted strategic cost-benefit analyses for high-performance GPU infrastructure, enabling data-driven procurement decisions for the R&D team. By integrating security checkpoints into the early stages of the product lifecycle, I helped establish a DevSecOps culture within the research department, ensuring innovation remained resilient and secure.",
          color: "#3498db",
        },
        {
          title: "Level 1 Web Developer",
          company: "Fiverr",
          company_url: "https://fiverr.com/users/u_22a2d926963d/",
          logo_path: "fiver.png",
          duration: "June 2024 - Current",
          location: "Hybrid, Islamabad-Pakistan",
          description:
            "Achieved Level 1 Seller status by successfully delivering 15+ high-impact web solutions with a consistent 5-star rating from global clients. I specialize in crafting secure, responsive MERN stack applications, focusing on performance optimization and seamless API integrations. My commitment to delivering clean, well-documented code has resulted in multiple long-term client partnerships and a reputation for reliability in the freelance marketplace.",
          color: "#000000",
        },
        {
          title: "Freelance Security & Web Developer",
          company: "Upwork",
          company_url: "https://upwork.com/freelancers/~0175a94a59587db8ef",
          logo_path: "upwork.png",
          duration: "June 2024 - Current",
          location: "Remote, Islamabad-Pakistan",
          description:
            "Managed and executed complex full-stack projects for international businesses, consistently receiving top-tier feedback for technical excellence and communication. I implement DevSecOps best practices for every project, ensuring that data integrity and security are baked into the architecture from day one. By delivering high-performance Single Page Applications (SPAs) tailored to specific business needs, I've helped clients modernize their digital presence while maintaining strict security standards.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Web team Lead",
          company: "Cyber Space Legion - CSL",
          company_url: "https://www.linkedin.com/company/cyber-space-legion/",
          logo_path: "csl.jpeg",
          duration: "Sep 2025 - Current",
          location: "Islamabad, Pakistan",
          description:
            "CSL – The CyberSecurity Society at FAST NUCES Islamabad, dedicated to empowering students with hands-on security skills. My role? I assist in organizing cybersecurity events like Capture The Flag (CTF) competitions and Code Quest hackathons, fostering a culture of learning and innovation.",
          color: "#4285F4",
        },
        {
          title: "Operations Team Member",
          company: "FQSS - FAST Quran and Sunnah Society",
          company_url: "https://www.linkedin.com/company/fqss/",
          logo_path: "fqss.jpeg",
          duration: "Aug 2024 - Aug 2025",
          location: "Islamabad, Pakistan",
          description:
            "FQSS – The Quran and Sunnah Society at FAST NUCES Islamabad, dedicated to fostering spiritual growth and knowledge on campus. My role? I actively support the society’s operations, ensuring smooth execution of its initiatives and events.",
          color: "#D83B01",
        },
        {
          title: "Volunteer",
          company: "AL-KHIDMAT Foundation",
          company_url: "https://alkhidmat.org/",
          logo_path: "alkhidmat.webp",
          duration: "Oct 2023 - May 2024",
          location: "Islamabad, Pakistan",
          description:
            "Actively participated in humanitarian initiatives, including disaster relief operations, food distribution drives, and educational support programs. Assisted in organizing community welfare projects, fundraising campaigns, and awareness sessions to promote social responsibility and aid underprivileged communities.",
          color: "#000000",
        },
        {
          title: "Technical Team Member",
          company: "FAST Computing Society",
          company_url: "https://www.linkedin.com/company/fastcomputingsociety/",
          logo_path: "fcs.jpeg",
          duration: "Jan 2025 - Present",
          location: "Islamabad, Pakistan",
          description:
            "Working on innovative technical projects, assisting in organizing tech-focused events, and contributing to workshops that enhance students' computing skills. Supporting hands-on sessions on programming, problem-solving, and emerging technologies while collaborating with peers to foster a culture of learning and innovation.",
          color: "#0C9D58",
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2024 - PRESENT",
          location: "Remote",
          description:
            "Actively contributing to open-source projects, collaborating with developers worldwide to improve code quality, optimize performance, and enhance security. Participating in issue resolution, feature development, and code reviews for repositories maintained by organizations like Universe IO and others. Engaging with the developer community through discussions, pull requests, and technical contributions to foster innovation and knowledge sharing.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My work spans from secure financial tech to AI-powered recruitment tools. I build projects that aren't just technical experiments—they're designed to solve real-world problems with security at their core. Check out my latest work on SAIF, AI-ATS, and RE/MAX Hub.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "man.png",
    description:
      "You can reach out to me on almost every social media platform—I usually reply within 24 hours. Whether you need help with coding, Web Development, cybersecurity, or project ideas, feel free to Email me!",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
