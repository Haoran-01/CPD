<script setup>
import RotatingCard from "../../../examples/cards/rotatingCards/RotatingCard.vue";
import RotatingCardFront from "../../../examples/cards/rotatingCards/RotatingCardFront.vue";
import RotatingCardBack from "../../../examples/cards/rotatingCards/RotatingCardBack.vue";
import DefaultInfoCard from "../../../examples/cards/infoCards/DefaultInfoCard.vue";
</script>
<template>
  <section class="my-5 py-5">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-4 ms-auto me-auto p-lg-4 mt-lg-0 mt-4">
          <RotatingCard>
            <RotatingCardFront
              image="https://images.unsplash.com/photo-1569683795645-b62e50fbf103?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
              icon="touch_app"
              title="About Me"
              description="Haoran Yan "
            />

            <RotatingCardBack
              image="https://images.unsplash.com/photo-1498889444388-e67ea62c464b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1365&q=80"
              title="Discover More"
              description="You will save a lot of time going from prototyping to full-functional
                code because all elements are implemented."
              :action="[
                {
                  route: './/sections/page-sections/hero-sections.html',
                  label: 'Start with Headers',
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
              description="Hi, I’m [Your Name], a passionate software developer with a focus on robotics and automation.
              Currently pursuing my MSc in Robotics, I specialize in designing intelligent systems and AI-powered solutions."
            />
            <DefaultInfoCard
              icon="flip_to_front"
              title="SKill & Expertise"
              description="I have expertise in full-stack development, machine learning, and ROS2 (Robot Operating System).
              I’m proficient in Python, JavaScript (Vue.js, Node.js), and C++. I enjoy creating solutions that bridge hardware and software seamlessly."
            />
          </div>
          <div class="row justify-content-start mt-5">
            <DefaultInfoCard
              class="mt-3"
              icon="price_change"
              title="Projects & Achievements"
              description="Some of my notable projects include developing a LiDAR-based navigation system for an autonomous rover and implementing machine learning algorithms for object detection in robotics.
              I’m also proud of leading a group project to design and program an AI-driven robot arm for industrial automation."
            />
            <DefaultInfoCard
              class="mt-3"
              icon="devices"
              title="Future Goals & Interests"
              description="I’m currently interested in deepening my knowledge of AI in robotics, particularly in the areas of autonomous vehicles and human-robot interaction.
              My goal is to work on innovative projects that integrate AI with robotics to create smart, adaptive systems."
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
