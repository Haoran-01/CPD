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
        title: "Features",
        subtitle: "14 Examples",
        route: "page-features",
        pro: false
      },
      {
        image: imgFeatures,
        title: "Features",
        subtitle: "14 Examples",
        route: "page-features",
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
        details: "This project demonstrates the use of Java's graphics capabilities to create an interactive animation system. Basic shapes, primarily constructed from triangles, form the core of the visual elements. The program listens for keyboard inputs to control various objects within the animation, enabling movement, transformations, or other dynamic effects. This interactive design showcases how user input can influence and manipulate the visual elements in real time, offering a hands-on experience of object control in a graphical environment.",
        route: "graphics-project",
        pro: false
      },
      {
        image: imgPagination,
        title: "FaceWith Website",
        subtitle: "3 Examples",
        route: "Tabibito-tourism-website",
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
