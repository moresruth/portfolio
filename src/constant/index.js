import { bulletpin, css, figma, html, js, project01, project02, project03, react, tailwind } from "../assets";


export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "experience",
      title: "Experience",
    },
    {
      id: "contacts",
      title: "Contacts",
    },
   
  ];


  export const projects = [
    {
      id: "project-1",
      content:
        "DigitalVivid is a modern NFT landing page I designed and developed to level up my front-end skills. This one-page website works fully responsive on all devices.",
      name: "DigitalVivid Website",
      tech1: figma ,
      tech2: tailwind,
      tech3: react,
      img: project01,
      gLink:"https://github.com/moresruth/digital-vivid",
      live:"https://moresruth.github.io/digital-vivid/",
    },
    {
      id: "project-2",
      content:
        "SushiMaster is a landing page I designed and developed to level up my front-end skills. This one-page website works fully responsive on all devices.",
      name: "SushiMaster Website",
      tech1: figma ,
      tech2: tailwind,
      tech3: react,
      img: project02,
      gLink:"https://github.com/moresruth/sushi-master",
      live:"https://moresruth.github.io/sushi-master/",
    },
    {
      id: "project-3",
      content:
        "The DIPLAB website is a dynamic website we develop during our internship in CPAF. My main task is to implement the UI design of  about, service and footer section.",
      name: "DIPLAB Website",
      tech1: html ,
      tech2: css,
      tech3: js,
      img: project03,
      gLink:"https://github.com/",
      live:"https://diplab.uplb.edu.ph/",
    },
   
    
    
    
  ];


  export const works = [
    {
      id:"work-01",
      title: "Cybersecurity Threat Engineer",
      company: "Trend Micro Incorporated",
      duration: "Oct 2022 - Jan 2023",
      details:[
        {
            id:"item-1",
            image:bulletpin,
            sentence: "Worked on Proper malware handling.",
        },

        {
            id:"item-2",  
            image:bulletpin,
            sentence: "Performed Reverse Engineering (Olly Dbg) with Assembly Language.",
        },

        {
          id:"item-3",
            image:bulletpin,
            sentence: "Analyzed malware threats ( Viruses, Worms, Backdoors, TrojanSpy, Exploits, and Ransomware) and their typical behavior indicators.",
        },

        {
            id:"item-4",
            image:bulletpin,
            sentence: "Worked on Parsing Binary Files (C++, Delphi, Visual Basic, and C#) via Decompiling and Unpacking.",
        },

        {
          id:"item-5",
            image:bulletpin,
            sentence: "Conducted a file verification and malware analysis report.",
        },


    ],
        
    },
    {
      id:"work-02",
      title: "Web Developer Intern",
      company: "UPLB College of Public Affairs and Development",
      duration: "Apr 2022 - Jul 2022",
      details:[
        {
            id:"item-1",
            image:bulletpin,
            sentence: "Designed a user interface for the DIP Lab website using Figma..",
        },

        {
            id:"item-2",  
            image:bulletpin,
            sentence: "Designed an infographic about the impact of the closed fishing season policy in Zamboanga.",
        },

        {
          id:"item-3",
            image:bulletpin,
            sentence: "Implemented the designed UI of DIPLAB using HMTL, CSS, and JavaScript.",
        },

        

    ],
        
    },
    
    
   
  ];
