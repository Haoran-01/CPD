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
  <div :class="`${col ? col : 'col-md-6'}`">
    <div v-bind="$attrs" class="info">
      <i
        v-if="icon"
        class="material-icons text-gradient"
        :class="`${
          typeof icon == 'object'
            ? `text-${icon.color} text-${icon.size}`
            : 'text-success text-3xl'
        }`"
        >{{ typeof icon == "object" ? icon.component : icon }}</i
      >
      <img v-if="image" :src="image.component" :class="image.class" />
      <h5
        :class="
          typeof title == 'string' ? 'font-weight-bolder mt-3' : title.class
        "
      >
        {{ typeof title == "string" ? title : title.text }}
      </h5>
      <p :class="typeof description == 'string' ? 'pe-5' : description.class">
        {{ typeof description == "string" ? description : description.text }}
      </p>
    </div>
  </div>
</template>

<!-- 
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

 -->
