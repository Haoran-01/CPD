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
    "Tabibito-tourism-website1": {
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

