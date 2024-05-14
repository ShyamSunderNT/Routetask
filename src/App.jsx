import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import All from './Pages/All';
import Career from './Pages/Career';
import CyberSecurity from './Pages/CyberSecurity';
import DataScience from './Pages/DataScience';
import FullStack from './Pages/FullStack';
import PageNotFound from './Pages/PageNotFound';
import Navbar from './Componants/Navbar';
import Banner from './Componants/Banner';
import Linkbar from './Componants/Linkbar';

const App = () => {
   // give json data
   let data = [
    {
      id: 1,
      title: "The Ultimate Cybersecurity Roadmap for Beginners",
      head: "Cyber security",
      description: "Navigate your way through the ultimate roadmap for aspiring cybersecurity professionals.",
      image: "https://www.guvi.in/blog/wp-content/uploads/2021/03/The-Ultimate-%E2%80%A8Cybersecurity-Roadmap-for-Beginners.webp",
      date: "1 March 2024",
    },
    {
      id: 2,
      title: "Non-Coding Jobs Guide in Cybersecurity",
      head: "Cyber security",
      description: "Explore non-coding career paths in cybersecurity with this comprehensive guide.",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
      date: "4 December 2024",
    },
    {
      id: 3,
      title: "What Is Hacking? Types of Hacking & Implication",
      head: "Cyber security",
      description: "Dive into the world of hacking and explore its various types and implications.",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
      date: "25 September 2024",
    },
    {
      id: 1,
      title: "Best Ways to Learn Full Stack Development in 2024",
      head: "Full Stack",
      description: "Explore effective strategies to learn full stack development and excel in your career.",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/07/best-way-to-learn-full-stack-development-1536x804.webp",
      date: "4 August 2024",
    },
    {
      id: 2,
      title: "Differences: FullStack Developer vs Software Engineer",
      head: "Full Stack",
      description: "Understand the key disparities between full stack developers and software engineers in 2024.",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Full-Stack-Developer-vs-Software-Engineer-.webp",
      date: "15 November 2024",
    },
    {
      id: 3,
      title: "7 Best Full-Stack Development Online Courses [2024]",
      head: "Full Stack",
      description: "Discover the top online courses to master full stack development skills in 2024.",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/08/Feature-image-Best-Full-Stack-Development-Online-Courses.webp",
      date: "31 August 2024",
    },
    {
      id: 4,
      title: "How Long Will It Take to Become a FullStack Developer?",
      head: "Full Stack",
      description: "Gain insights into the time required to become proficient as a full stack developer.",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_-1536x804.webp",
      date: "4 August 2024",
    },
    {
      id: 5,
      title: "Best Books to Learn Full-Stack Development",
      head: "Full Stack",
      description: "Discover essential books that will accelerate your journey to mastering full stack development.",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-Books-to-Learn-Full-Stack-Development.webp",
      date: "9 November 2024",
    },
    {
      id: 6,
      title: "Top Product-Based Companies for Full-Stack Developers",
      head: "Full Stack",
      description: "Explore the top product-based companies offering opportunities for full-stack developers in 2024.",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/10/Featured-Image-top-product-based-companies-for-full-stack-developers.webp",
      date: "8 November 2024",
    },
    {
      id: 1,
      title: "Useful Python Libraries & Tools for DataScience Beginners",
      head: "Data Science",
      description: "Explore essential Python libraries and tools for aspiring data scientists.",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Useful-Python-Libraries-and-Tools-For-Data-Science-Beginners.webp",
      date: "29 September 2024 ",
    },
    {
      id: 2,
      title: "10 Best DataScience Frameworks in 2024",
      head: "Data Science",
      description: "Discover the top data science frameworks shaping the industry in 2024.",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/07/best-data-science-frameworks-1536x804.webp",
      date: "5 August 2024",
    },
    {
      id: 3,
      title: "Future of Data Science and How To Excel At It",
      head: "Data Science",
      description: "Learn about the future prospects of data science and how to excel in the field.",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/08/Future-of-Data-Science.webp",
      date: "28 August 2024",
    },
    {
      id: 4,
      title: "Extraordinary Data Science Projects for Beginners ",
      head: "Data Science",
      description: "Embark on exciting data science projects suitable for beginners and experts alike.",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/08/Data-Science-project-showcase.webp",
      date: "28 August 2024",
    },
    {
      id: 5,
      title: "Best Data Science Books to Learn in 2024",
      head: "Data Science",
      description: "Discover the must-read books for mastering data science concepts in 2024.",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-books-to-learn-data-science.webp",
      date: "26 October 2024",
    },
    {
      id: 6,
      title: "Difference between Data Science and Data Engineering",
      head: "Data Science",
      description: "Understand the distinctions between data science and data engineering roles.",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Difference-between-Data-Science-and-Data-Engineering.webp",
      date: "8 November 2024 ",
    },
    {
      id: 1,
      title: "Top Technologies to Learn: Jumpstart a Successful Tech Career[2024]",
      head: "Career",
      description: "Discover the top technologies to learn in 2024 for kickstarting a successful tech career.",
      image: "https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Top-Technologies-to-Learn-Jumpstart-a-Successful-Tech-Career.webp",
      date: "19 January 2024",
    },
    {
      id: 2,
      title: "Automation Test Engineer Resume: 10 Important Things To Consider",
      head: "Career",
      description: "Learn about the crucial factors to consider when crafting an automation test engineer resume.",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Automation-Test-Engineer-Resume-Important-Things-To-Consider.webp",
      date: "1 December 2024",
    },
    {
      id: 3,
      title: "Best Product-Based Companies for Product Managers",
      head: "Career",
      description: "Explore the top product-based companies offering opportunities for product managers in India.",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Product-Based-Companies-for-Product-Managers-in-India.webp",
      date: "14 November 2024",
    },
    {
      id: 4,
      title: "Top IT Jobs for Commerce Students",
      head: "Career",
      description: "Discover lucrative career opportunities in the field of IT for commerce students.",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Commerce-Students.webp",
      date: "2 December 2024",
    },
    {
      id: 5,
      title: "Top 5 IT Jobs for Economics Students",
      head: "Career",
      description: "Explore exciting IT job prospects tailored for economics students.",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Economics-Students.webp",
      date: "4 December 2024 ",
    },
  ];
  return (
    <>
    <BrowserRouter>
    <div>
      <Navbar/>
      <Banner/>
      <Linkbar/>
    </div>
    <Routes>
      <Route path='/' element ={<All data={data}/>} />
      <Route path='/Career' element ={<Career data={data} />}/>
      <Route path='CyberSecurity' element ={<CyberSecurity data={data} />}/>
      <Route path='DataScience' element ={<DataScience data={data}/>}/>
      <Route path='FullStack' element ={<FullStack data={data}/>}/>
      <Route path='*' element ={<PageNotFound/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;