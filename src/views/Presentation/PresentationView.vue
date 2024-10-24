<script setup>
import { onMounted, onUnmounted } from "vue";

//example components
import NavbarDefault from "../..//examples/navbars/NavbarDefault.vue";
import DefaultFooter from "../../examples/footers/FooterDefault.vue";
import Header from "../../examples/Header.vue";
import FilledInfoCard from "../../examples/cards/infoCards/FilledInfoCard.vue";
import MaterialAvatar from "@/components/MaterialAvatar.vue";

//Vue Material Kit 2 components
import MaterialSocialButton from "@/components/MaterialSocialButton.vue";

// sections
import PresentationCounter from "./Sections/PresentationCounter.vue";
import PresentationPages from "./Sections/PresentationPages.vue";
import PresentationExample from "./Sections/PresentationExample.vue";
import data from "./Sections/Data/designBlocksData";
import BuiltByDevelopers from "./Components/BuiltByDevelopers.vue";
import PresentationTestimonials from "./Sections/PresentationTestimonials.vue";
import PresentationInformation from "./Sections/PresentationInformation.vue";

//images
import vueMkHeader from "@/assets/img/vue-mk-header.jpg";
import pycharmLogo from "@/assets/img/logos/Pycharm.svg"
import javaLogo from "@/assets/img/logos/java.svg"
import DataGripLogo from "@/assets/img/logos/DataGrip.svg"
import htmlLogo from "@/assets/img/logos/html.svg"
import AndroidLogo from "@/assets/img/logos/Android_Studio_Trademark.svg"
import JSLogo from "@/assets/img/logos/java-script.svg"
import jupyterLogo from "@/assets/img/logos/jupyter_group.svg"

import markdownLogo from "@/assets/img/logos/markdown.svg"
import mysqlLogo from "@/assets/img/logos/mysql.svg"
import pythonLogo from "@/assets/img/logos/python.svg"
import vscodeLogo from "@/assets/img/logos/vscode.svg"
import vueLogo from "@/assets/img/logos/Vue.svg"
import webstormLogo from "@/assets/img/logos/webstorm.svg"
import Avatar from "@/assets/img/pictures/Avatar.png"
import photo from "@/assets/img/pictures/photo.png"


import wavesWhite from "@/assets/img/waves-white.svg";
import logoBootstrap from "@/assets/img/logos/bootstrap5.jpg";
import logoTailwind from "@/assets/img/logos/icon-tailwind.jpg";
import logoVue from "@/assets/img/logos/vue.jpg";
import logoAngular from "@/assets/img/logos/angular.jpg";
import logoReact from "@/assets/img/logos/react.jpg";
import logoSketch from "@/assets/img/logos/sketch.jpg";

//hooks
const body = document.getElementsByTagName("body")[0];
onMounted(() => {
  body.classList.add("presentation-page");
  body.classList.add("bg-gray-200");
});
onUnmounted(() => {
  body.classList.remove("presentation-page");
  body.classList.remove("bg-gray-200");
});
</script>

<template>
  <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <NavbarDefault
        :sticky="true"
        :action="{
          label: 'OPEN CV',
          color: 'btn-white',
    }"
    />
      </div>
    </div>
  </div>
  <Header>
    <div
      class="page-header min-vh-75"
      :style="`background-image: url(${vueMkHeader})`"
      loading="lazy"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-7 text-center mx-auto position-relative">
            <MaterialAvatar :image=Avatar alt="Avatar" size="xxl" borderRadius="xl"/> <br>
            <h1
              class="text-white pt-3 mt-n5 me-2"
              :style="{ display: 'inline-block ' }"
            >
              Haoran Yan
            </h1>
            <p class="lead text-white px-5 mt-3" :style="{ fontWeight: '500' }">
              Software Engineer <br>
              MSc Robotics <br>
              Interested in Machine Learning & Android applications development
            </p>
          </div>
        </div>
      </div>
    </div>
  </Header>

  <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6">
    <!-- <PresentationCounter /> -->
    <PresentationInformation />
    <PresentationExample :data="data" />

    <!-- <PresentationPages /> -->

    <!-- <BuiltByDevelopers /> -->


    <!-- <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <FilledInfoCard
            class="p-4"
            :color="{ text: 'white', background: 'bg-gradient-success' }"
            :icon="{ component: 'flag', color: 'white' }"
            title="Getting Started"
            description="Check the possible ways of working with our product and the necessary files for building your own project."
            :action="{
              route:
                'https://www.creative-tim.com/learning-lab/vue/overview/material-kit/',
              label: { text: 'Let\'s start', color: 'white' }
            }"
          />
        </div>
        <div class="col-lg-4">
          <FilledInfoCard
            class="px-lg-1 mt-lg-0 mt-4 p-4"
            height="h-100"
            :icon="{ component: 'precision_manufacturing', color: 'success' }"
            title="Plugins"
            description="Get inspiration and have an overview about the plugins that we
                used to create the Material Kit."
            :action="{
              route:
                'https://www.creative-tim.com/learning-lab/vue/input/material-kit/',
              label: { text: 'Read more' }
            }"
          />
        </div>
        <div class="col-lg-4">
          <FilledInfoCard
            class="px-lg-1 mt-lg-0 mt-4 p-4"
            :icon="{ component: 'receipt_long', color: 'success' }"
            title="Utility Classes"
            description="Material Kit is giving you a lot of pre-made elements. For those
                who want flexibility, we included many utility classes."
            :action="{
              route:
                'https://www.creative-tim.com/learning-lab/vue/utilities/material-kit/',
              label: { text: 'Read more' }
            }"
          />
        </div>
      </div>
    </div> -->


    <div class="container">
      <div class="row">
        <div class="d-flex flex-column w-100 text-center p-5 mb-8">
          <h3>Programming languages I have mastered</h3>
          <div class="d-flex justify-content-center mt-3 flex-wrap">
            <a
              href="https://www.python.org/"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="Python is a widely-used, high-level programming language suited for various applications, especially data analysis and machine learning."
            >
              <img
                :src="pythonLogo"
                alt="title"
                loading="lazy"
                :style="{ height: '90px' }"
              />
            </a>
            <a
              class="mx-3"
              href="https://www.java.com/zh-CN/"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="Java is a general-purpose, object-oriented programming language commonly used for enterprise-level development, mobile apps, and server-side applications."
            >
              <img
                :src="javaLogo"
                alt="title"
                loading="lazy"
                :style="{ height: '90px' }"
              />
            </a>
            <a
              href="https://nodejs.org"
              class="mx-3"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="Node.js is a JavaScript runtime built on Chrome's V8 engine, designed for building scalable and efficient network applications."
            >
              <img
                :src="JSLogo"
                alt="title"
                loading="lazy"
                :style="{ height: '90px' }"
              />
            </a>
            <a
              class="mx-3"
              href="https://www.mysql.com"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title=" MySQL is a widely-used open-source relational database management system, ideal for handling large-scale websites and applications."
            >
              <img
                :src="mysqlLogo"
                alt="title"
                loading="lazy"
                :style="{ height: '90px' }"
              />
            </a>
            <a
              href="https://daringfireball.net/projects/markdown/"
              class="mx-3"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="Markdown is a lightweight markup language used to format plain text and write structured documents."
            >
              <img
                :src="markdownLogo"
                alt="title"
                loading="lazy"
                :style="{ height: '90px' }"
              />
            </a>

            <a
              href="https://developer.mozilla.org/en-US/docs/Web/HTML"
              class="mx-3"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="HTML is the standard markup language for creating web pages, responsible for defining the structure and content of web documents."
            >
              <img
                :src="htmlLogo"
                alt="title"
                loading="lazy"
                :style="{ height: '90px' }"
              />
            </a>

          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="d-flex flex-column w-100 text-center p-5 mb-8">
          <h3>Programming tools at my disposal</h3>
          <div class="d-flex justify-content-center mt-3 flex-wrap">
            <a
              href="https://www.jetbrains.com/pycharm/"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="PyCharm is an integrated development environment (IDE) from JetBrains designed to boost productivity in Python development."
            >
              <img
                :src="pycharmLogo"
                alt="title"
                loading="lazy"
                :style="{ height: '90px' }"
              />
            </a>
            <a
              class="mx-3"
              href="https://developer.android.com/studio"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="Android Studio is the official integrated development environment (IDE) from Google for developing Android applications."
            >
              <img
                :src="AndroidLogo"
                alt="title"
                loading="lazy"
                :style="{ height: '90px' }"
              />
            </a>
            <a
              href="https://www.jetbrains.com/webstorm/"
              class="mx-3"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="WebStorm is a professional IDE from JetBrains specifically designed for JavaScript development, supporting both frontend and Node.js."
            >
              <img
                :src="webstormLogo"
                alt="title"
                loading="lazy"
                :style="{ height: '90px' }"
              />
            </a>
            <a
              class="mx-3"
              href="https://www.jetbrains.com/datagrip/"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="DataGrip is a database management tool from JetBrains, providing powerful SQL development capabilities and supporting multiple databases."
            >
              <img
                :src="DataGripLogo"
                alt="title"
                loading="lazy"
                :style="{ height: '90px' }"
              />
            </a>
            <a
              href="https://jupyter.org"
              class="mx-3"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="Jupyter Notebook is an open-source interactive computing environment that supports Python and other programming languages, widely used for data analysis and machine learning."
            >
              <img
                :src="jupyterLogo"
                alt="title"
                loading="lazy"
                :style="{ height: '90px' }"
              />
            </a>
            <a
              href="https://code.visualstudio.com"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="VSCode is a lightweight, powerful open-source code editor that supports a variety of programming languages and extensions."
            >
              <img
                :src="vscodeLogo"
                alt="title"
                loading="lazy"
                :style="{ height: '90px' }"
              />
            </a>
          </div>
        </div>
      </div>
    </div>


<!-- 
    <div
      class="container-fluid mt-sm-5 border-radius-xl"
      :style="{
        background: 'linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))'
      }"
    >
      <div
        class="page-header py-6 py-md-5 my-sm-3 mb-3 border-radius-xl"
        :style="{
          backgroundImage: `url(${wavesWhite})`
        }"
        loading="lazy"
      >
        <span class="mask bg-gradient-dark"></span>
        <div class="container">
          <div class="row">
            <div class="d-flex justify-content-center p-5">
              <div class="col-lg-8 ms-lg-5 text-center">
                <h3 class="text-white">
                  Do you love this awesome UI Kit from Vuejs & Bootstrap?
                </h3>
                <p class="text-white text-md">
                  Cause if you do, it can be yours for FREE. Hit the button
                  below to navigate to Creative Tim where you can <br />
                  find the Design System in HTML. Start a new project or give an
                  old Bootstrap project a new look!
                </p>

                <a
                  href="https://www.creative-tim.com/product/vue-material-kit"
                  class="btn btn-sm mb-0 bg-gradient-success px-5 py-3 mt-4"
                  >Download Now</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->


  </div>
  <DefaultFooter />
</template>
