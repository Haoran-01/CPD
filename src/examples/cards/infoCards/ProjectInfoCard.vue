<script setup>
defineProps({
  icon: {
    type: [String, Object],
    default: "",
    component: String,
    size: String,
    color: String,
  },
  image: {
    type: Object,
    component: String,
    class: String,
    default: () => {},
  },
  title: {
    type: [String, Object],
    required: true,
    text: String,
    class: String,
  },
  description: {
    type: [String, Object],
    required: true,
    text: String,
    class: String,
  },
  col: {
    type: String,
    default: "",
  },
  isGroupProject: {
    type: Boolean,
    default: false,
  },
  contribution: {
    type: String,
    default: "",
  },
});
</script>
<script>
export default {
  inheritAttrs: false,
};
</script>



<template>
  <div class="w-100">
    <div class="info d-flex flex-column flex-md-row gap-4">

      <div class="w-50 pe-4">
        
        <h5 class="font-weight-bolder mt-3">
          {{ typeof title === "string" ? title : title.text }}
        </h5>
        <p :class="typeof description === 'string' ? 'pe-2' : description.class">
          {{ typeof description === "string" ? description : description.text }}
        </p>
      </div>

      <div
        v-if="isGroupProject && contribution"
        class="w-50 border-start ps-4"
      >
        <h5 class="font-weight-bolder mt-3">My Contribution</h5>
        <p :class="typeof contribution === 'string' ? 'pe-2' : contribution.class">
          {{ typeof contribution === "string" ? contribution : contribution.text }}
        </p>
      </div>
    </div>
  </div>
</template>


