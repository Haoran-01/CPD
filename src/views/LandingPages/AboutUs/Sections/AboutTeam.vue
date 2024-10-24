<script setup>
// example component
import HorizontalTeamCard from "@/examples/cards/teamCards/HorizontalTeamCard.vue";

// images
import emma from "@/assets/img/team-5.jpg";
import william from "@/assets/img/bruce-mars.jpg";
import ivana from "@/assets/img/ivana-squares.jpg";
import marquez from "@/assets/img/ivana-square.jpg";

// import website from "@/assets/img/pictures/";
// import android from "@/assets/img/pictures/";
// import machineLearning from "@/assets/img/pictures/";
// import algorithm from "@/assets/img/pictures/";

// import

</script>

<template>
  <section class="pb-5 position-relative bg-gradient-dark mx-n3">
    <div class="container">
      <div class="row">
        <div class="col-md-8 text-start mb-5 mt-5">
          <h3 class="text-white z-index-1 position-relative">
            Development Experience
          </h3>
          <p class="text-white opacity-8 mb-0">
            There’s nothing I really wanted to do in life that I wasn’t able to
            get good at. That’s my skill.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6 col-12">
          <HorizontalTeamCard
            class="mt-4"
            :image="emma"
            :profile="{ name: 'Website development'}"
            :position="{ label: 'Back-end Development Engineer', color: 'success' }"
            description="Solid experience in website back-end development, proficient in using Python for website development, able to efficiently build and maintain back-end services. Good at using MySQL for database operation, familiar with JSON data format for front-end and back-end data transfer and communication to ensure system reliability and scalability. 
            In addition, master database design and optimization techniques, able to design efficient database structure to improve system performance."
          />
        </div>
        <div class="col-lg-6 col-12">
          <HorizontalTeamCard
            class="mt-lg-4 mt-5"
            :image="william"
            :profile="{ name: 'Android Application Development'}"
            :position="{ label: 'Android engineer', color: 'success' }"
            description="Able to develop Android applications using Android Studio, with comprehensive ability from interface layout design to functional logic implementation. 
            Familiar with Android application life cycle management and user interaction optimization, having developed Android platform based applications alone."
          />
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-lg-6 col-12">
          <HorizontalTeamCard
            class="mt-4 z-index-2"
            :image="ivana"
            :profile="{ name: 'Machine Learning Algorithm Optimization'}"
            :position="{ label: 'Machine learning engineers', color: 'success' }"
            description="With experience in machine learning projects, able to improve AI answering ability by adjusting Prompt,
            modifying related logic and optimizing algorithm parameters. In-depth understanding of machine learning model performance tuning,
            able to improve model performance according to specific application scenarios to ensure the accuracy and efficiency of the AI system."
          />
        </div>
        <div class="col-lg-6 col-12">
          <HorizontalTeamCard
            class="mt-lg-4 mt-5 z-index-2"
            :image="marquez"
            :profile="{ name: 'Algorithm design and implementation'}"
            :position="{ label: 'Algorithm engineer', color: 'success' }"
            description="In-depth understanding of commonly used algorithms, including K-Nearest Neighbour (KNN),
            Random Forest and other classic machine learning algorithms. Proficient in writing corresponding code
            implementations and optimising these algorithms in multiple projects to improve model accuracy and computational efficiency.
            Also has the ability of data analysis and feature engineering, and is able to customise algorithmic strategies according to different dataset requirements."
          />
        </div>
      </div>
    </div>
  </section>
</template>
