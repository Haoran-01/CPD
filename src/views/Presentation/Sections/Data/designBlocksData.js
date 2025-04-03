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



import CvPicture from "@/assets/img/pictures/CV.png"
import TabibitoPicture from "@/assets/img/pictures/Tabibito.jpg"
import FaceWithPicture from "@/assets/img/pictures/FaceWith.png"
import BDICForum from "@/assets/img/pictures/BDIC-Forum.png"
import DESPicture from "@/assets/img/pictures/DES.jpg"
import LDCPPicture from "@/assets/img/pictures/LDCP.png"
import SDCPPicture from "@/assets/img/pictures/SDCP.png"
import DataStructuresPicture from "@/assets/img/pictures/DataStructures.png"
import SpaceInvadersPicture from "@/assets/img/pictures/Space-Invaders.png"
import CGPicture from "@/assets/img/pictures/CG.png"
import P2PPicture from "@/assets/img/pictures/p2p.png"
import AndoridPicture from "@/assets/img/pictures/android.png"
import FindpathPicture from "@/assets/img/pictures/PathFinding.png"
import RoboticsProjectPicture from "@/assets/img/pictures/RoboticsProject.png"

const imagesPrefix = "src/assets/img/pictures"
export default [
  {
    heading: "Group Project",
    description:
      "Show all the group projects I've participated in so far",
    items: [
      {
        image: CvPicture,
        title: "MIT Computer Virtual Project",
        subtitle: "In this project, we will explore how to implement a neural network to perform depth reconstruction from a single image, inspired by the pioneering works of Eigen et al. (2014, 2015).",
        route: "Depth-Reconstruction",
        pro: false
      },
      {
        image: TabibitoPicture,
        title: "Tabbitto tourism website [V]",
        subtitle: "A travel management website with modules for user accounts, project management, bookings, a portal, and chat. Built with Vue 3, Flask, NGINX, NLTK, and Google APIs.",
        route: "Tabibito-tourism-website",
        pro: false
      },
      {
        image: FaceWithPicture,
        title: "FaceWith Website",
        subtitle: "FaceWith is an online interview platform designed for the IT industry, featuring tools like an online whiteboard and integrated IDE to help interviewers evaluate candidates' coding skills. It also includes functionality for scheduling interviews via meeting codes.",
        route: "FaceWith",
        pro: false
      },
      {
        image: BDICForum,
        title: "BDIC Study Forum",
        subtitle: "BDIC Study Forum is a forum website developed using Flask, Vue, and Python, offering features such as personal profiles, forum discussions, a draggable schedule module, and cookie management. The platform is designed with rich functionality and a sleek user interface.",
        route: "BDIC-Study-Forum",
        pro: false
      },
      {
        image: RoboticsProjectPicture,
        title: "Autonomous Object Sorting Robot",
        subtitle: "A four-wheeled autonomous robot designed to identify, grasp, and sort colored blocks into bins using perception, navigation, and manipulation systems.",
        route: "Autonomous-Object-Sorting-Robot",
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
    ]
  },
  {
    heading: "Personal Project",
    description: "Show all the projects I've done on my own",
    items: [
      {
        image: P2PPicture,
        title: "Distributed System p2p",
        subtitle: "A peer-to-peer (P2P) chat application with separate server and client components, using TCP connections to enable communication between users.",
        route: "Distributed-System-p2p",
        pro: false
      },
      {
        image: CGPicture,
        title: "Graphics project",
        subtitle: "A simple animation project developed in Java, utilizing basic geometric shapes composed of triangles. The animation features interactive elements controlled by keyboard input, allowing users to manipulate objects within the animation in real-time.",
        route: "graphics-project",
        pro: false
      },
      {
        image: AndoridPicture,
        title: "Andorid application SimpleNote",
        subtitle: "SimpleNote is an Android note-taking app built with Java in Android Studio. It features login/registration, note creation with customizable priorities, photo attachments, and a calendar to view notes by date. The app also includes a to-do list",
        route: "Andorid-application-SimpleNote",
        pro: false
      },
      {
        image: DESPicture,
        title: "DES Algorithm Implementation",
        subtitle: "This project implements the DES (Data Encryption Standard) algorithm written in Python, including encryption and decryption functions. The user can interact with the programme using a GUI. Encryption and decryption are two separate parts and both require a key to use these functions.",
        route: "DES-Python",
        pro: false
      },
      {
        image: LDCPPicture,
        title: "Large Document Corpus for Programming",
        subtitle: "This project implements an advanced information retrieval system using the BM25 model to search a large corpus of documents. It ranks the retrieved documents based on their relevance to the given query and outputs a ranked list, displaying the most relevant documents at the top.",
        route: "Large-Document-Corpus-for-Programming",
        pro: false
      },
      {
        image: SDCPPicture,
        title: "Small Document Corpus for Programming",
        subtitle: "This project implements an advanced information retrieval system using the BM25 model to search a small corpus of documents. It ranks the retrieved documents based on their relevance to the given query and outputs a ranked list, displaying the most relevant documents at the top.",
        route: "Small-Document-Corpus-for-Programming",
        pro: false
      },
      {
        image: DataStructuresPicture,
        title: "Implementation of a range of data structures",
        subtitle: "This project involves the implementation of key data structures, including a stack using both arrays and linked lists, a queue using a linked list, methods for manipulating a double linked list (DLL), and functions for a double-ended queue (DEQ). These implementations demonstrate foundational knowledge of data structures and their practical applications in managing and manipulating collections of data.",
        route: "Data-Structure",
        pro: false
      },
      {
        image: SpaceInvadersPicture,
        title: "Space Invaders Game",
        subtitle: "SpaceInvaders is a Java-based OOP game where players control a spaceship to shoot down asteroids of random shapes and sizes. Power-ups enhance gameplay, giving players different abilities and boosts as they navigate through the game.",
        route: "Space-Invaders",
        pro: false
      },
      {
        image: FindpathPicture,
        title: "A* Path Planning",
        subtitle: "Implemented the A* algorithm using Python to allow a robot to plan paths while avoiding obstacles in a grid-based environment.",
        route: "Path-Fingding",
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
