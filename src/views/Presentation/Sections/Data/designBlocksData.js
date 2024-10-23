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

const imagesPrefix =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections";

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
      "展示目前为止我参加的所有小组项目",
    items: [
      {
        image: `${imagesPrefix}/headers.jpg`,
        title: "MIT Computer Virtual Project",
        subtitle: "计算机视觉神经网络",
        route: "page-headers",
        pro: false
      },
      {
        image: imgFeatures,
        title: "Tabbitto tourism website",
        subtitle: "A travel management website with modules for user accounts, project management, bookings, a portal, and chat. Built with Vue 3, Flask, NGINX, NLTK, and Google APIs.",
        route: "Tabibito-tourism-website",
        pro: false
      },
      {
        image: imgFeatures,
        title: "FaceWith Website",
        subtitle: "FaceWith is an online interview platform designed for the IT industry, featuring tools like an online whiteboard and integrated IDE to help interviewers evaluate candidates' coding skills. It also includes functionality for scheduling interviews via meeting codes.",
        route: "FaceWith",
        pro: false
      },
      {
        image: imgFeatures,
        title: "BDIC Study Forum",
        subtitle: "BDIC Study Forum is a forum website developed using Flask, Vue, and Python, offering features such as personal profiles, forum discussions, a draggable schedule module, and cookie management. The platform is designed with rich functionality and a sleek user interface.",
        route: "BDIC-Study-Forum",
        pro: false
      }
    ]
  },
  {
    heading: "Personal Project",
    description: "展示所有我自己参加的项目",
    items: [
      {
        image: `${imagesPrefix}/navbars.jpg`,
        title: "Distributed System p2p",
        subtitle: "A peer-to-peer (P2P) chat application with separate server and client components, using TCP connections to enable communication between users.",
        route: "Distributed-System-p2p",
        pro: false
      },
      {
        image: `${imagesPrefix}/nav-tabs.jpg`,
        title: "Distributed-System-p2p",
        subtitle: "A simple animation project developed in Java, utilizing basic geometric shapes composed of triangles. The animation features interactive elements controlled by keyboard input, allowing users to manipulate objects within the animation in real-time.",
        route: "graphics-project",
        pro: false
      },
      {
        image: imgFeatures,
        title: "Andorid application SimpleNote",
        subtitle: "SimpleNote is an Android note-taking app built with Java in Android Studio. It features login/registration, note creation with customizable priorities, photo attachments, and a calendar to view notes by date. The app also includes a to-do list",
        route: "Andorid-application-SimpleNote",
        pro: false
      },
      {
        image: imgPagination,
        title: "Calendar website",
        subtitle: "3 Examples",
        route: "navigation-pagination",
        pro: false
      },
      {
        image: imgPagination,
        title: "FaceWith Website",
        subtitle: "3 Examples",
        route: "navigation-pagination",
        pro: false
      }
    ]
  }
];
