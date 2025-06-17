import React from "react";
import "../styles/Curriculum.css";
// import { API_BASE } from "../../server/utils/api.js"; // adjust path as needed
const API_BASE = import.meta.env.VITE_API_BASE;

const Curriculum = () => (
  <div className="curriculum-container-">
    {/* <h1>Curriculum Vitae</h1> */}

    <h2>Career</h2>

    <div className="entry">
      <h3>
        HCLTech <span className="date">(July, 2022 – November, 2023)</span>
      </h3>
      <p>
        I worked as a Graduate Engineer Trainee at HCLTech in Sector 126, Noida.
        My work primarily involved developing and maintaining scalable backend
        applications using Spring Boot, Hibernate, and Spring Security. These
        applications were deployed in secure cloud-based environments and
        handled complex data management requirements with a focus on performance
        and reliability.
      </p>
      <p>
        During my time at HCLTech, I collaborated with cross-functional teams to
        configure and integrate secure authentication systems tailored for
        Robotic Process Automation (RPA) applications. This work ensured backend
        availability, robustness, and compliance with enterprise-grade security
        standards. My role required regular interaction with DevOps practices
        and version control systems, enhancing both the reliability of our
        deliverables and my engineering discipline.
      </p>
    </div>

    {/* <div className="entry">
      <h3>
        Technicolor <span className="date">(June 2018 – September 2018)</span>
      </h3>
      <p>
        I worked as a Machine Learning Research Intern at Technicolor AI Lab,
        Palo Alto. I developed deep learning methods for time‑series resource
        allocation prediction in visual effects production pipelines.
      </p>
    </div> */}

    {/* <div className="entry">
      <h3>
        Driving‑Force Therapeutics{" "}
        <span className="date">(August 2016 – August 2017)</span>
      </h3>
      <p>
        As Chief Computing Officer and Research Data Scientist at this biotech
        startup in Dalian, China, I conducted data analysis and algorithm
        development for novel drug research, including RNA sequencing analysis.
      </p>
    </div> */}

    <div className="entry">
      <h3>
        Suri JYCSM, "Sparsh" Education Project{" "}
        <span className="date">(August, 2018 – June, 2022)</span>
      </h3>
      <p>
        I worked as a Core Member of the Sparsh Education Project under Suri
        JYCSM in Suri, West Bengal. This initiative was part of a Central
        Government-run mission aimed at promoting skill development and digital
        literacy among underprivileged communities.
      </p>
      <p>
        During this time, I conducted computer literacy sessions and led
        workshops focused on foundational technical skills. I also collaborated
        with students and alumni to organize educational programs, distribute
        learning resources, and develop sustainable models for community
        enrichment through grassroots participation and long-term mentorship.
      </p>
    </div>

    <div className="entry">
      <h3>
        Ethical Edufabrica Pvt. Ltd.{" "}
        <span className="date">(May, 2021 – July, 2021)</span>
      </h3>
      <p>
        I participated in the Training and Internship Program 2021 conducted by
        Ethical Edufabrica Pvt. Ltd. in association with elan & nvision, IIT
        Hyderabad, during my undergraduate studies at Birbhum Institute of
        Engineering and Technology.
      </p>
      <p>
        Over the course of two months, I completed a project titled “Automate
        Ethical Hacking with Python,” which was an integral part of the
        internship focused on “Ethical Hacking.” The project demonstrated my
        ability to translate theoretical cybersecurity concepts into practical
        automation scripts using Python.
      </p>
      <p>
        I adhered to the internship guidelines, worked diligently on assigned
        tasks, and successfully showcased core elements of the training in the
        final project. My work was acknowledged as satisfactory and aligned with
        the objectives outlined at the start of the internship.
      </p>
    </div>

    <h2>Education</h2>

    <div className="entry">
      {/* <h2>Education</h2> */}

      <div className="entry">
        <h3>
          National Institute of Technology, Durgapur{" "}
          <span className="date">(2024 – 2026)</span>
        </h3>
        <p>
          I am currently pursuing my M.Tech in Computer Science and Engineering
          at the National Institute of Technology, Durgapur. The academic
          program emphasizes both theoretical and applied computer science, and
          I have been particularly focused on advanced algorithms, distributed
          computing, and system design. This education is shaping my analytical
          thinking and research skills, and is laying a strong foundation for my
          aspiration to work on scalable, impactful technologies.
        </p>
        <p>
          My core coursework includes Advanced Algorithms, Distributed Systems,
          Machine Learning, and Compiler Design. These subjects, along with
          foundational studies in Operating Systems, Database Systems, and
          Computer Networks, are refining both my depth and breadth in the
          field.
        </p>
      </div>

      <div className="entry">
        <h3>
          Birbhum Institute of Engineering and Technology{" "}
          <span className="date">(2018 – 2022)</span>
        </h3>
        <p>
          I received my B.Tech degree in Computer Science and Engineering from
          Birbhum Institute of Engineering and Technology, where I graduated
          with a CGPA of 9.32. During my undergraduate years, I developed a deep
          interest in software engineering, full-stack development, and
          algorithmic problem solving. I spent much of my time working on
          real-world coding projects, participating in technical clubs, and
          building a strong foundation for my career.
        </p>
        <p>
          My studies covered a wide range of subjects including Data Structures
          and Algorithms, Operating Systems, Computer Networks, and Web
          Technologies. Courses like Digital Logic and Object-Oriented
          Programming helped form a robust base that continues to support my
          current learning and development.
        </p>
      </div>
    </div>

    <h2>Awards</h2>

    <div className="entry">
      <h3>
        Webskitters Technology Solutions Pvt. Ltd.{" "}
        <span className="date">(April – May 2021)</span>
      </h3>
      <p>
        Completed a certified industrial training on{" "}
        <strong>Android development</strong>, building a Library Management
        System application. Gained practical experience in mobile app
        development workflows under industry mentorship.
      </p>
    </div>

    <div className="entry">
      <h3>
        Edufabrica – IIT Delhi Rendezvous’21{" "}
        <span className="date">(September 2021)</span>
      </h3>
      <p>
        Earned dual certifications in <strong>Data Science using Python</strong>{" "}
        and <strong>Ethical Hacking</strong>. Developed practical skills in data
        analysis and cybersecurity through hands-on virtual training sessions.
      </p>
    </div>

    <h2>Skills</h2>
    <div className="entry">
      <h3>Programming Languages</h3>
      <p>
        I frequently develop using <strong>C/C++</strong>,{" "}
        <strong>Python</strong>, <strong>CUDA</strong>. I also have hands-on
        experience with <strong>Java, </strong>
        <strong>JavaScript</strong> having completed at least two substantial
        project in each.
      </p>
    </div>

    <div className="entry">
      <h3>Machine Learning & Deep Learning</h3>
      <p>
        Well-versed in <strong>Natural Language Processing</strong>,{" "}
        <strong>Computer Vision</strong>, and
        <strong>Image Processing</strong>. I apply core concepts from{" "}
        <strong>Deep learning</strong> and
        <strong> optimization</strong> to solve complex AI problems.
      </p>
    </div>

    <div className="entry">
      <h3>Documentation & Office Suites</h3>
      <p>
        Highly proficient in technical writing using <strong>LaTeX</strong> and{" "}
        <strong>Markdown</strong>. I use these tools to create clean,
        publication-quality documents, reports, and presentations.
      </p>
    </div>
  </div>
);

export default Curriculum;
