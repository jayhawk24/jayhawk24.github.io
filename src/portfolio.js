/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true, // set to false to use static SVG
};

const greeting = {
  username: "Anubhav Gupta",
  title: "Hi all, I'm Anubhav",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/13GuLt0aXVxbTFOLFx-j9fJOXLlqdPnDf/view",
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/jayhawk24",
  linkedin: "https://www.linkedin.com/in/jayhawk24/",
  gmail: "anubhavthrilling24@gmail.com",
  // Instagram and Twitter are also supported in the links!
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji(
      "⚡ Highly scalable and stable backend services using Node and Django"
    ),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "django",
      fontAwesomeClassname: "fab fa-python",
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws",
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux",
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python",
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Gurukul Kangri Vishwavidyalaya",
      logo: require("./assets/images/gkv_logo.jpg"),
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "August 2017 - June 2021",
      desc:
        "Took courses about Software Engineering, Web Security, Operating Systems, Data Structures and algorithms, ..",
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%",
    },
    {
      Stack: "Programming",
      progressPercentage: "60%",
    },
    {
      Stack: "Security",
      progressPercentage: "65%",
    },
  ],
  displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Intern",
      company: "Virtualy Testing",
      companylogo: require("./assets/images/vtLogo.png"),
      date: "Jan 2021 – Present",
      desc:
        "Working hands on and learning and with different virtualization technologies , Docker, Kubernetes, kubectl",
      descBullets: [
        "Learning key concepts of virtualization using Kube academy and VMware HOL",
      ],
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "jayhawk24", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/",
        },
        //  you can add extra buttons here.
      ],
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/",
        },
      ],
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Software Security",
      subtitle:
        "Learning about buffer overflows, SQL injection, and session hijacking and defence against these attacks, including advanced testing and program analysis. Completed Projects : Exploiting buffer overflows in C , Vulnerable Web App",
      image: require("./assets/images/coursera-vector-logo.svg"),
      footerLink: [
        {
          name: "Certification",
          url: "https://coursera.org/share/ed7ae94e3d9eeeedfeeb338c5897df09",
        },
      ],
    },
    {
      title: "OMNI",
      subtitle:
        "Till now owned 50 machines on Try Hack Me, which included linux and windows machines with Active Directory and compromising web servers either with custom exploitation or known vulnerabilities. And performing privilege escalation by exploiting various services manually.",
      image: require("./assets/images/thmLogo.png"),
      footerLink: [
        {
          name: "View THM Profile",
          url: "https://tryhackme.com/p/jayhawk",
        },
      ],
    },
    {
      title: "Git and Github",
      subtitle:
        "Working with version control system, features of git and working with repositories and contributing to open source community using github.",
      image: require("./assets/images/githubLogo.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://coursera.org/share/fdab0aea9ee5cd9b6616197f908c6724",
        },
        {
          name: "Profile",
          url: "https://github.com/jayhawk24",
        },
      ],
    },
    {
      title: "Python Crash Course",
      subtitle:
        "Wrote short Python scripts to perform automated actions. Learned all of python data structures and also worked with big data sets to filter and clean data.",
      image: require("./assets/images/googleLogo.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://coursera.org/share/8e8490e32ac8c4b1518f1",
        },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?",
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.",
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Making your awesome portfolio website",
      subtitle: "WebDev at Google DSC Haridwar 2019",
      slides_url:
        "https://docs.google.com/presentation/d/1f63hIOq_73V2HO_ccGAmkmYay44i5RupXMtiCIeS3Kg/edit?usp=sharing",
      event_url: "https://www.facebook.com/events/2339906106275053/",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo",
  ],
  display: false, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "anubhavthrilling24@gmail.com",
  emailAddress: "anubhavthrilling24@gmail.com",
};

// Twitter Section

const twitterDetails = {
  userName: "JAYH4WK", //Replace "twitter" with your twitter username without @
  display: false, // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
