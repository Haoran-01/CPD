/*
=========================================================
* Vue Material Kit 2 - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vue-material-kit-pro
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

const imagesPrefix = "src/assets/img/pictures"
import imgPricing from "@/assets/img/pricing.png";
import imgFeatures from "@/assets/img/features.png";
import imgBlogPosts from "@/assets/img/blog-posts.png";
import imgTestimonials from "@/assets/img/testimonials.png";
import imgTeam from "@/assets/img/team.png";
import imgStat from "@/assets/img/stat.png";
import imgContent from "@/assets/img/content.png";
import imgPagination from "@/assets/img/pagination.png";
import imgAlert from "@/assets/img/alerts.jpg";
import imgPopover from "@/assets/img/popovers.jpg";
import imgModal from "@/assets/img/modals.jpg";
import imgDropdowns from "@/assets/img/dropdowns.jpg";



export default [
  {
    heading: "Group Project",
    description:
      "Show all the group projects I've participated in so far",
    items: [
      {
        image: `${imagesPrefix}/CV.png`,
        title: "MIT Computer Virtual Project",
        subtitle: "In this project, we will explore how to implement a neural network to perform depth reconstruction from a single image, inspired by the pioneering works of Eigen et al. (2014, 2015).",
        route: "Depth-Reconstruction",
        pro: false
      },
      {
        image: `${imagesPrefix}/Tabibito.jpg`,
        title: "Tabbitto tourism website [V]",
        subtitle: "A travel management website with modules for user accounts, project management, bookings, a portal, and chat. Built with Vue 3, Flask, NGINX, NLTK, and Google APIs.",
        route: "Tabibito-tourism-website",
        pro: false
      },
      {
        image: `${imagesPrefix}/FaceWith.png`,
        title: "FaceWith Website",
        subtitle: "FaceWith is an online interview platform designed for the IT industry, featuring tools like an online whiteboard and integrated IDE to help interviewers evaluate candidates' coding skills. It also includes functionality for scheduling interviews via meeting codes.",
        route: "FaceWith",
        pro: false
      },
      {
        image: `${imagesPrefix}/BDIC-Forum.png`,
        title: "BDIC Study Forum",
        subtitle: "BDIC Study Forum is a forum website developed using Flask, Vue, and Python, offering features such as personal profiles, forum discussions, a draggable schedule module, and cookie management. The platform is designed with rich functionality and a sleek user interface.",
        route: "BDIC-Study-Forum",
        pro: false
      },
      // {
      //   image: imgFeatures,
      //   title: "",
      //   subtitle: "",
      //   route: "",
      //   pro: false
      // },
      // {
      //   image: imgFeatures,
      //   title: "",
      //   subtitle: "",
      //   route: "",
      //   pro: false
      // },
      // {
      //   image: imgFeatures,
      //   title: "",
      //   subtitle: "",
      //   route: "",
      //   pro: false
      // },
      // {
      //   image: imgFeatures,
      //   title: "",
      //   subtitle: "",
      //   route: "",
      //   pro: false
      // },
    ]
  },
  {
    heading: "Personal Project",
    description: "Show all the projects I've done on my own",
    items: [
      {
        image: `${imagesPrefix}/p2p.png`,
        title: "Distributed System p2p",
        subtitle: "A peer-to-peer (P2P) chat application with separate server and client components, using TCP connections to enable communication between users.",
        route: "Distributed-System-p2p",
        pro: false
      },
      {
        image: `${imagesPrefix}/CG.png [V]`,
        title: "Graphics project",
        subtitle: "A simple animation project developed in Java, utilizing basic geometric shapes composed of triangles. The animation features interactive elements controlled by keyboard input, allowing users to manipulate objects within the animation in real-time.",
        route: "graphics-project",
        pro: false
      },
      {
        image: `${imagesPrefix}/android.png [V]`,
        title: "Andorid application SimpleNote",
        subtitle: "SimpleNote is an Android note-taking app built with Java in Android Studio. It features login/registration, note creation with customizable priorities, photo attachments, and a calendar to view notes by date. The app also includes a to-do list",
        route: "Andorid-application-SimpleNote",
        pro: false
      },
      {
        image: `${imagesPrefix}/DES.jpg [V]`,
        title: "DES Algorithm Implementation",
        subtitle: "This project implements the DES (Data Encryption Standard) algorithm written in Python, including encryption and decryption functions. The user can interact with the programme using a GUI. Encryption and decryption are two separate parts and both require a key to use these functions.",
        route: "DES-Python",
        pro: false
      },
      {
        image: `${imagesPrefix}/LDCP.png`,
        title: "Large Document Corpus for Programming",
        subtitle: "This project implements an advanced information retrieval system using the BM25 model to search a large corpus of documents. It ranks the retrieved documents based on their relevance to the given query and outputs a ranked list, displaying the most relevant documents at the top.",
        route: "Large-Document-Corpus-for-Programming",
        pro: false
      },
      {
        image: `${imagesPrefix}/SDCP.png`,
        title: "Small Document Corpus for Programming",
        subtitle: "This project implements an advanced information retrieval system using the BM25 model to search a small corpus of documents. It ranks the retrieved documents based on their relevance to the given query and outputs a ranked list, displaying the most relevant documents at the top.",
        route: "Small-Document-Corpus-for-Programming",
        pro: false
      },
      {
        image: `${imagesPrefix}/DataStructures.png`,
        title: "Implementation of a range of data structures",
        subtitle: "This project involves the implementation of key data structures, including a stack using both arrays and linked lists, a queue using a linked list, methods for manipulating a double linked list (DLL), and functions for a double-ended queue (DEQ). These implementations demonstrate foundational knowledge of data structures and their practical applications in managing and manipulating collections of data.",
        route: "Data-Structure",
        pro: false
      },
      {
        image: `${imagesPrefix}/Space-Invaders.png`,
        title: "Space Invaders Game",
        subtitle: "SpaceInvaders is a Java-based OOP game where players control a spaceship to shoot down asteroids of random shapes and sizes. Power-ups enhance gameplay, giving players different abilities and boosts as they navigate through the game.",
        route: "Space-Invaders",
        pro: false
      },
      // {
      //   image: imgFeatures,
      //   title: "",
      //   subtitle: "",
      //   route: "",
      //   pro: false
      // },
      // {
      //   image: imgFeatures,
      //   title: "",
      //   subtitle: "",
      //   route: "",
      //   pro: false
      // },
    ]
  }
];
