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
        title: "Tabbitto website",
        subtitle: "一个面向全球消费者的制定旅游计划的网站",
        route: "page-features",
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
        title: "Object Oriented Programming: Asteroids",
        subtitle: "4 Examples",
        route: "navigation-navbars",
        pro: false
      },
      {
        image: `${imagesPrefix}/nav-tabs.jpg`,
        title: "Nav Tabs",
        subtitle: "2 Nav Tabs",
        route: "navigation-navtabs",
        pro: false
      },
      {
        image: imgPagination,
        title: "FaceWith Website",
        subtitle: "3 Examples",
        route: "navigation-pagination",
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
