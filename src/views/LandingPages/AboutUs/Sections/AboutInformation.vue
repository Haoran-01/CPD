<script setup>
// example components
import DefaultInfoCard from "../../../../examples/cards/infoCards/DefaultInfoCard copy.vue";
import CenteredBlogCard from "../../../../examples/cards/blogCards/CenteredBlogCard.vue";
import photo from "@/assets/img/pictures/photo.png"


</script>
<template>
  <section class="py-7">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <div class="row justify-content-start">
            <DefaultInfoCard
              color="info"
              icon="public"
              title="About Me"
              description="
My Bachelor's degree is in Software Engineering and I am currently studying for a Master's degree in Robotics at the University of Manchester. As a software engineer pursuing rigour and excellence, I am not only good at project management and teamwork, but also have extensive experience in code development. I am currently exploring how software and algorithms can improve the efficiency of robots, or develop robots with novel features. The field of robotics is full of unknowns and challenges, but it is these that inspire me to keep moving forward. I hope to contribute to the improvement of people's quality of life through my endeavours. I agree with the saying that ‘the development of science and technology is to leave no one behind’, and it is one of the motivations and goals of my continuous learning."
            />
          </div>
          <!-- <div class="row justify-content-start mt-4">
            <DefaultInfoCard
              color="info"
              icon="apps"
              title="Prebuilt components"
              description="We get insulted by others, lose trust for those We get back
                  freezes"
            />
            <DefaultInfoCard
              color="info"
              icon="3p"
              title="Improved platform"
              description="We get insulted by others, lose trust for those We get back
                  freezes"
            />
          </div> -->
        </div>
        <div class="col-lg-4 ms-auto mt-lg-0 mt-6">
          <CenteredBlogCard
            :image=photo
            title="Haoran Yan"
            description="MSc Robotics"
          />
        </div>
      </div>
    </div>
  </section>
</template>
