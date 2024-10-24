<script setup>
import RotatingCard from "../../../examples/cards/rotatingCards/RotatingCard.vue";
import RotatingCardFront from "../../../examples/cards/rotatingCards/RotatingCardFront.vue";
import RotatingCardBack from "../../../examples/cards/rotatingCards/RotatingCardBack.vue";
import DefaultInfoCard from "../../../examples/cards/infoCards/DefaultInfoCard.vue";
import photo from "@/assets/img/pictures/photo.png"
</script>
<template>
  <section class="my-5 py-5">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-4 ms-auto me-auto p-lg-4 mt-lg-0 mt-4">
          <RotatingCard>
            <RotatingCardFront
              :image=photo
              icon="touch_app"
              title="About Me"
              description="Haoran Yan "
            />

            <RotatingCardBack
              image="https://images.unsplash.com/photo-1498889444388-e67ea62c464b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1365&q=80"
              title="Discover More"
              description="View more detailed information about me"
              :action="[
                {
                  route: '/pages/landing-pages/about-me',
                  label: 'About Me Page',
                },
              ]"
            />
          </RotatingCard>
        </div>
        <div class="col-lg-6 ms-auto">
          <div class="row justify-content-start">
            <DefaultInfoCard
              icon="content_copy"
              title="Introduction"
              description="Hi, I’m Haoran Yan, an enthusiastic developer with a focus on robotics and software engineering.
              I’m currently pursuing my MSc in Robotics."
            />
            <DefaultInfoCard
              icon="flip_to_front"
              title="SKill & Expertise"
              description=" I specialize in back-end development, AI-powered solutions, and exploring cutting-edge algorithms."
            />
          </div>
          <div class="row justify-content-start mt-5">
            <DefaultInfoCard
              class="mt-3"
              icon="price_change"
              title="Projects & Achievements"
              description=" My work spans web development, mobile app design, advanced data structures and machine learning. Whether it's building
              robust systems in Java and Python or developing interactive websites with Vue.js, I’m passionate about leveraging technology to solve real-world problems."
            />
            <DefaultInfoCard
              class="mt-3"
              icon="devices"
              title="Future Goals & Interests"
              description="Currently, I am interested in deepening my understanding of artificial intelligence in robotics, especially in computer vision. 
              My goal is to combine AI with machines by building efficient algorithms to improve the efficiency of robots as well as their service capabilities."
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
