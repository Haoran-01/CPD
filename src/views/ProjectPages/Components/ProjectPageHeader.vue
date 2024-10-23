<script setup>
import MaterialButton from "@/components/MaterialButton.vue";

// 定义 props 接收传入的数据
const props = defineProps({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  videoUrl: {
    type: String,
    default: "",  // 视频链接可以是可选的
  },
  githubLink: {
    type: String,
    default: "",  // GitHub 链接也是可选的
  }
});
</script>

<template>
  <header>
    <div
      class="page-header min-vh-100"
      :style="{
        backgroundImage: `url(${image})`
      }"
      loading="lazy"
    >
      <span class="mask bg-gradient-dark opacity-5"></span>
      <div class="container">
        <div class="row">
          <div
            class="col-lg-6 col-md-7 d-flex justify-content-center flex-column"
          >
            <!-- 动态显示标题 -->
            <h1 class="text-white mb-4">{{ title }}</h1>

            <!-- 动态显示描述 -->
            <p class="text-white opacity-8 lead pe-5 me-5">
              {{ description }}
            </p>

            <div class="buttons">
              <!-- 如果 GitHub 链接存在，显示按钮 -->
              <a v-if="githubLink" :href="githubLink" target="_blank">
                <MaterialButton
                v-if="githubLink"
                :href="githubLink"
                color="white"
                class="mt-4"
              >
                Find it on Github
              </MaterialButton></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
