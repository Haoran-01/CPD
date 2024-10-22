<script setup>
import { onMounted, ref } from "vue";

// nav-pills
import setNavPills from "@/assets/js/nav-pills.js";

// 数据导入
import projects from "../sections/Data/projectPagesData";

// props 通过 defineProps 方式定义
const props = defineProps({
    projectKey: {
        type: String,
        required: true
    }
});

// 用 ref 创建项目状态
const project = ref(null);

// 在 created/mounted 阶段加载项目数据
onMounted(() => {
    setNavPills();

    // 通过 projectKey 获取项目数据
    project.value = projects[props.projectKey] || null;
});

import BaseLayout from "../../../layouts/sections/components/BaseLayout.vue";
import View from "../../../layouts/sections/components/View.vue";
import { header1Code } from "../../../layouts/sections/page-sections/page-headers/components/codes";
import DefaultInfoCard from "../../../examples/cards/infoCards/DefaultInfoCard.vue"



</script>

<template>
    <BaseLayout v-if="project" :title = project.title :breadcrumb="[
        { label: 'Projects', route:  props.projectKey},
        { label: props.projectKey },
    ]">

        <View title="Project Details" :code="header1Code" id="header-1">
            <div v-if="project">
                <img :src="project.image" :alt="project.title" />
                <p>{{ project.description }}</p>
                <a v-if="project.videoUrl" :href="project.videoUrl" target="_blank">Watch Video</a>
                <a v-if="project.markdownLink" :href="project.markdownLink" target="_blank">Project Details</a>
            </div>
            <div v-else>
                <p>Project not found.</p>
            </div>

            <DefaultInfoCard color="success" icon="public" title="Fully integrated"
                description="We get insulted by others, lose trust for those We get back freezes" />
        </View>
    </BaseLayout>
</template>
