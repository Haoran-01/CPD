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

// 项目数据以字典形式存储
export default {
    "Distributed-System-p2p": {
        image: "https://images.unsplash.com/photo-1520769945061-0a448c463865?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
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
        image: "https://images.unsplash.com/photo-1520769945061-0a448c463865?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        title: "Graphics project",
        role: "Developer",
        description: "A simple animation project developed in Java, utilizing basic geometric shapes composed of triangles. The animation features interactive elements controlled by keyboard input, allowing users to manipulate objects within the animation in real-time.",
        details: "This project demonstrates the use of Java's graphics capabilities to create an interactive animation system. Basic shapes, primarily constructed from triangles, form the core of the visual elements. The program listens for keyboard inputs to control various objects within the animation, enabling movement, transformations, or other dynamic effects. This interactive design showcases how user input can influence and manipulate the visual elements in real time, offering a hands-on experience of object control in a graphical environment.",
        videoUrl: "",
        markdownLink: "",
        githubLink: "https://github.com/Haoran-01/graphics-project",
        isPersonalProject: true
    },
    "Tabibito-tourism-website": {
        image: "https://images.unsplash.com/photo-1520769945061-0a448c463865?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        title: "Tabibito tourism website",
        role: "Back-end developer",
        description: "A travel management website with modules for user accounts, project management, bookings, a portal, and chat. Built with Vue 3, Flask, NGINX, NLTK, and Google APIs",
        details: " This website offers a robust solution for managing travel-related projects, with distinct modules designed for user accounts, managing travel plans, displaying travel information, booking features, and real-time communication via a chat module. The project architecture is built with Vue 3 for the frontend user interface, Flask as the web framework for the backend, NGINX for server deployment, and Google APIs to provide additional services such as map integration or user authentication. Additionally, NLTK is employed for natural language processing to enhance features such as smart search or user interactions. As the backend developer, my main responsibilities included writing the core Python logic, integrating databases to handle user and travel project data, and managing API endpoints for seamless frontend-backend communication. I also contributed to writing JavaScript for frontend functionality, and I was heavily involved in debugging the entire system to ensure smooth interaction between the various modules.",
        videoUrl: "",
        markdownLink: "",
        githubLink: "https://github.com/Haoran-01/Tabibito-tourism-website",
        isPersonalProject: false
    },
    "Andorid-application-SimpleNote": {
        image: "https://images.unsplash.com/photo-1520769945061-0a448c463865?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        title: "Andorid application SimpleNote",
        role: "Andorid developer",
        description: "SimpleNote is an Android note-taking app built with Java in Android Studio. It features login/registration, note creation with customizable priorities, photo attachments, and a calendar to view notes by date. The app also includes a to-do list.",
        details: "SimpleNote allows users to create and manage notes with a variety of features, including setting priority levels for notes, attaching photos, and customizing text block colors for better organization. The app connects to a database to store user credentials for secure login and registration. A calendar view enables users to easily navigate and access notes created on specific dates. Additionally, the to-do list function provides task management alongside note-taking. I personally implemented both the frontend layouts and backend logic, ensuring a smooth user experience and robust functionality.",
        videoUrl: "",
        markdownLink: "",
        githubLink: "https://github.com/Haoran-01/Andorid-application-Simple-Note-",
        isPersonalProject: true
    },
    "FaceWith": {
        image: "https://images.unsplash.com/photo-1520769945061-0a448c463865?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
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
        image: "https://images.unsplash.com/photo-1520769945061-0a448c463865?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        title: "BDIC Study Forum",
        role: "Back-end developer",
        description: "BDIC Study Forum is a forum website developed using Flask, Vue, and Python, offering features such as personal profiles, forum discussions, a draggable schedule module, and cookie management. The platform is designed with rich functionality and a sleek user interface. ",
        details: "BDIC Study Forum provides a robust platform for users to engage in academic discussions and manage their personal schedules. Key features include a personal homepage where users can showcase their profiles, a forum module for posting and responding to academic queries, and a draggable schedule module that allows users to organize and plan their tasks. As the backend developer, I was responsible for implementing the majority of the backend logic. My role included managing the data flow between the front and backend, ensuring that the APIs functioned seamlessly for smooth communication. I also handled the maintenance and optimization of the database, ensuring efficient data storage and retrieval. Additionally, I was tasked with debugging and maintaining the API endpoints, ensuring the reliability of the system's functionality and handling of user interactions.",
        videoUrl: "",
        markdownLink: "",
        githubLink: "https://github.com/Haoran-01/BDIC-Study-Forum",
        isPersonalProject: false
    },
    "1": {
        image: "https://images.unsplash.com/photo-1520769945061-0a448c463865?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        title: "",
        role: "",
        description: "",
        details: "",
        videoUrl: "",
        markdownLink: "",
        githubLink: "",
        isPersonalProject: false
    },
    "1": {
        image: "https://images.unsplash.com/photo-1520769945061-0a448c463865?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        title: "",
        role: "",
        description: "",
        details: "",
        videoUrl: "",
        markdownLink: "",
        githubLink: "",
        isPersonalProject: false
    },
};

