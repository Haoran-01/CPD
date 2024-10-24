/*
=========================================================
* Project Page Configuration - v1.0.0
=========================================================

* Description: This file defines the structure of projects for display on the project page.

Coded by [Your Name]

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

const imageBaseUrl = "https://your-project-image-url.com/images"; // 替换为实际图片的路径
const imagesPrefix = "src/assets/img/pictures"

import CvPicture from "@/assets/img/pictures/CV.png"
// import SpaceInvadersPicture from "@/assets/img/pictures/SpaceInvaders.jpg"
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


// 项目数据以字典形式存储
export default {
    "Distributed-System-p2p": {
        image: P2PPicture,
        title: "P2P Chat Application",
        role: "Developer",
        description: "A peer-to-peer (P2P) chat application with separate server and client components, using TCP connections to enable communication between users.",
        details: "The server maintains connections and broadcasts messages to all clients. It tracks online users and updates the list when a client connects or disconnects. Clients use the server's broadcasted user list to establish direct connections with other clients for messaging, leveraging `ServerSocket` and `socket` for TCP communication.",
        videoUrl: "",
        markdownLink: "",
        githubLink: "https://github.com/Haoran-01/distributed-system-p2p",
        isPersonalProject: true
    },
    "graphics-project": {
        image: CGPicture,
        title: "Graphics project",
        role: "Developer",
        description: "A simple animation project developed in Java, utilizing basic geometric shapes composed of triangles. The animation features interactive elements controlled by keyboard input, allowing users to manipulate objects within the animation in real-time.",
        details: "This project demonstrates the use of Java's graphics capabilities to create an interactive animation system. Basic shapes, primarily constructed from triangles, form the core of the visual elements. The program listens for keyboard inputs to control various objects within the animation, enabling movement, transformations, or other dynamic effects. This interactive design showcases how user input can influence and manipulate the visual elements in real time, offering a hands-on experience of object control in a graphical environment.",
        videoUrl: "https://youtu.be/QEKRX3y_Oxk",
        markdownLink: "",
        githubLink: "https://github.com/Haoran-01/graphics-project",
        isPersonalProject: true
    },
    "Tabibito-tourism-website": {
        image: TabibitoPicture,
        title: "Tabibito tourism website",
        role: "Back-end developer",
        description: "A travel management website with modules for user accounts, project management, bookings, a portal, and chat. Built with Vue 3, Flask, NGINX, NLTK, and Google APIs",
        details: " This website offers a robust solution for managing travel-related projects, with distinct modules designed for user accounts, managing travel plans, displaying travel information, booking features, and real-time communication via a chat module. The project architecture is built with Vue 3 for the frontend user interface, Flask as the web framework for the backend, NGINX for server deployment, and Google APIs to provide additional services such as map integration or user authentication. Additionally, NLTK is employed for natural language processing to enhance features such as smart search or user interactions. As the backend developer, my main responsibilities included writing the core Python logic, integrating databases to handle user and travel project data, and managing API endpoints for seamless frontend-backend communication. I also contributed to writing JavaScript for frontend functionality, and I was heavily involved in debugging the entire system to ensure smooth interaction between the various modules.",
        videoUrl: "https://youtu.be/HHpKojx7l9Y",
        markdownLink: "",
        githubLink: "https://github.com/Haoran-01/Tabibito-tourism-website",
        isPersonalProject: false
    },
    "Andorid-application-SimpleNote": {
        image: AndoridPicture,
        title: "Andorid application SimpleNote",
        role: "Andorid developer",
        description: "SimpleNote is an Android note-taking app built with Java in Android Studio. It features login/registration, note creation with customizable priorities, photo attachments, and a calendar to view notes by date. The app also includes a to-do list.",
        details: "SimpleNote allows users to create and manage notes with a variety of features, including setting priority levels for notes, attaching photos, and customizing text block colors for better organization. The app connects to a database to store user credentials for secure login and registration. A calendar view enables users to easily navigate and access notes created on specific dates. Additionally, the to-do list function provides task management alongside note-taking. I personally implemented both the frontend layouts and backend logic, ensuring a smooth user experience and robust functionality.",
        videoUrl: "https://youtu.be/UDJAoFwQyls",
        markdownLink: "",
        githubLink: "https://github.com/Haoran-01/Andorid-application-Simple-Note-",
        isPersonalProject: true
    },
    "FaceWith": {
        image: FaceWithPicture,
        title: "FaceWith Website",
        role: "Back-end developer",
        description: "FaceWith is an online interview platform designed for the IT industry, featuring tools like an online whiteboard and integrated IDE to help interviewers evaluate candidates' coding skills. It also includes functionality for scheduling interviews via meeting codes.",
        details: "FaceWith provides a comprehensive solution for conducting technical interviews online. The platform includes an interactive whiteboard for collaborative problem-solving and a fully integrated IDE, allowing interviewers to test candidates' coding abilities in real time. Users can schedule interviews by generating a unique meeting code, which can be shared with participants. As the backend developer, I was responsible for writing and optimizing the backend logic, ensuring smooth communication between the front and backend through API development and debugging. I also managed the database, ensuring the secure handling of user data, interview schedules, and real-time interactions. My work focused on creating a stable, reliable infrastructure to support the platform’s real-time capabilities.",
        videoUrl: "",
        markdownLink: "",
        githubLink: "https://github.com/Haoran-01/FaceWith",
        isPersonalProject: false
    },
    "BDIC-Study-Forum": {
        image: BDICForum,
        title: "BDIC Study Forum",
        role: "Back-end developer",
        description: "BDIC Study Forum is a forum website developed using Flask, Vue, and Python, offering features such as personal profiles, forum discussions, a draggable schedule module, and cookie management. The platform is designed with rich functionality and a sleek user interface. ",
        details: "BDIC Study Forum provides a robust platform for users to engage in academic discussions and manage their personal schedules. Key features include a personal homepage where users can showcase their profiles, a forum module for posting and responding to academic queries, and a draggable schedule module that allows users to organize and plan their tasks. As the backend developer, I was responsible for implementing the majority of the backend logic. My role included managing the data flow between the front and backend, ensuring that the APIs functioned seamlessly for smooth communication. I also handled the maintenance and optimization of the database, ensuring efficient data storage and retrieval. Additionally, I was tasked with debugging and maintaining the API endpoints, ensuring the reliability of the system's functionality and handling of user interactions.",
        videoUrl: "",
        markdownLink: "",
        githubLink: "https://github.com/Haoran-01/BDIC-Study-Forum",
        isPersonalProject: false
    },
    "Depth-Reconstruction": {
        image: CvPicture,
        title: "Depth reconstruction",
        role: "Developer",
        description: "In this project, we will explore how to implement a neural network to perform depth reconstruction from a single image, inspired by the pioneering works of Eigen et al. (2014, 2015).",
        details: "In this project, we implement a deep learning-based approach for depth reconstruction from a single image, drawing on the influential works of Eigen et al. (2014, 2015). Using the KITTI dataset, we will develop a neural network capable of predicting depth maps, which has applications in areas such as autonomous driving and robotic navigation. The network architecture will be implemented in TensorFlow, where we will train, validate, and test the model's performance.",
        videoUrl: "",
        markdownLink: "",
        githubLink: "https://github.com/Haoran-01/Depth-reconstruction",
        isPersonalProject: false
    },
    "DES-Python": {
        image: DESPicture,
        title: "DES Algorithm Implementation",
        role: "Developer",
        description: "This project implements the DES (Data Encryption Standard) algorithm written in Python, including encryption and decryption functions. The user can interact with the programme using a GUI. Encryption and decryption are two separate parts and both require a key to use these functions.",
        details: "This process outlines how the DES algorithm encrypts and decrypts data by dividing plaintext into 64-bit chunks, padding if necessary, and using a 64-bit key to generate 16 subkeys. Encryption involves 16 rounds of transformations (expansion, substitution, permutation) on each chunk, while decryption is identical except the subkeys are applied in reverse order. Key processing and plaintext transformation steps ensure secure encryption and decryption of the data.",
        videoUrl: "https://youtu.be/sIrrQCw-pwY",
        markdownLink: "",
        githubLink: "https://github.com/Haoran-01/DES-Python",
        isPersonalProject: false
    },
    "Large-Document-Corpus-for-Programming": {
        image: LDCPPicture,
        title: "Large Document Corpus for Programming",
        role: "Developer",
        description: "This project implements an advanced information retrieval system using the BM25 model to search a large corpus of documents. It ranks the retrieved documents based on their relevance to the given query and outputs a ranked list, displaying the most relevant documents at the top.",
        details: "This project implements an information retrieval system based on the BM25 model (Best Matching 25), which is widely regarded as one of the most effective and popular ranking functions for information retrieval. The system is designed to handle large document corpora, efficiently retrieving relevant documents in response to user queries. By utilizing the BM25 algorithm, the project ranks the documents based on their relevance to the input query and outputs a ranked list of results.",
        videoUrl: "",
        markdownLink: "",
        githubLink: "https://github.com/Haoran-01/Large-Document-Corpus-for-Programming",
        isPersonalProject: true
    },
    "Small-Document-Corpus-for-Programming": {
        image: SDCPPicture,
        title: "Small Document Corpus for Programming",
        role: "Developer",
        description: "This project implements an advanced information retrieval system using the BM25 model to search a small corpus of documents. It ranks the retrieved documents based on their relevance to the given query and outputs a ranked list, displaying the most relevant documents at the top.",
        details: "This project implements an information retrieval system based on the BM25 model (Best Matching 25), which is widely regarded as one of the most effective and popular ranking functions for information retrieval. The system is designed to handle small document corpora, efficiently retrieving relevant documents in response to user queries. By utilizing the BM25 algorithm, the project ranks the documents based on their relevance to the input query and outputs a ranked list of results.",
        videoUrl: "",
        markdownLink: "",
        githubLink: "https://github.com/Haoran-01/Small-Document-Corpus-for-Programming",
        isPersonalProject: true
    },
    "Data-Structure": {
        image: DataStructuresPicture,
        title: "Implementation of a range of data structures",
        role: "Developer",
        description: "This project involves the implementation of key data structures, including a stack using both arrays and linked lists, a queue using a linked list, methods for manipulating a double linked list (DLL), and functions for a double-ended queue (DEQ). These implementations demonstrate foundational knowledge of data structures and their practical applications in managing and manipulating collections of data.",
        details: "This project includes the implementation of key data structures such as a stack (using both arrays and linked lists) following the LIFO principle, and a queue (using a linked list) based on the FIFO principle. It provides essential operations like push, pop, enqueue, and dequeue. The project also implements methods for a double linked list (DLL), enabling efficient insertion and removal of elements from both ends of the list. Additionally, it covers the double-ended queue (DEQ) data structure, which combines the functionalities of a stack and queue, supporting both LIFO and FIFO operations for adding and removing elements from either end. These implementations offer a comprehensive understanding of fundamental data structure manipulation and optimization techniques.",
        videoUrl: "",
        markdownLink: "",
        githubLink: "https://github.com/Haoran-01/Data-Structure",
        isPersonalProject: false
    },
    "Space-Invaders": {
        image: SpaceInvadersPicture,
        title: "Space Invaders",
        role: "Developer",
        description: "SpaceInvaders is a Java-based OOP game where players control a spaceship to shoot down asteroids of random shapes and sizes. Power-ups enhance gameplay, giving players different abilities and boosts as they navigate through the game.",
        details: "SpaceInvaders is a simple yet engaging object-oriented (OOP) game programmed in Java. The game allows players to control a spaceship, represented by a triangle, which can move across the screen and fire bullets to destroy asteroids of varying shapes and sizes. The asteroids appear randomly, making each playthrough different. Additionally, players can pick up various power-ups that enhance the spaceship's abilities. These power-ups can provide different effects, such as increased firepower, faster movement, or protective shields, adding an extra layer of strategy to the gameplay. This project demonstrates key OOP principles, including inheritance, encapsulation, and polymorphism, in a fun and interactive context.",
        videoUrl: "",
        markdownLink: "",
        githubLink: "",
        isPersonalProject: false
    },
    // "1": {
    //     image: "https://images.unsplash.com/photo-1520769945061-0a448c463865?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    //     title: "",
    //     role: "",
    //     description: "",
    //     details: "",
    //     videoUrl: "",
    //     markdownLink: "",
    //     githubLink: "",
    //     isPersonalProject: false
    // },
    // "1": {
    //     image: "https://images.unsplash.com/photo-1520769945061-0a448c463865?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    //     title: "",
    //     role: "",
    //     description: "",
    //     details: "",
    //     videoUrl: "",
    //     markdownLink: "",
    //     githubLink: "",
    //     isPersonalProject: false
    // },
};

