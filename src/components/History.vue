<script setup lang="ts">
import { ref } from "vue";

const events = ref([
  {
    status: "123",
    position: "Engineer",
    icon: "i-mdi-numeric-1-circle-outline",
    color: "var(--violet)",
    image: "game-controller.jpg",
    description:
      "Develop and maintain responsive web applications using modern JavaScript frameworks like Vue.js. Collaborate with designers andback-end engineers to implement UI/UX designs and integrate APIs.Write clean, reusable code following best practices, andcontribute to code reviews and continuous improvement efforts.",
  },
  {
    status: "456",
    position: "Engineer",
    icon: "i-mdi-numeric-2-circle-outline",
    color: "#673AB7",
    description: "lorem ipsum",
  },
  {
    status: "789",
    position: "Engineer",
    icon: "i-mdi-numeric-3-circle-outline",
    color: "#FF9800",
    description: "sample text",
  },
  {
    status: "444",
    position: "Engineer",
    icon: "i-mdi-numeric-4-circle-outline",
    color: "#607D8B",
    description: "sample text",
  },
]);
</script>
<template>
  <div class="card">
    <Timeline
      :value="events"
      align="alternate"
      class="customized-timeline w-200"
    >
      <template #marker="slotProps">
        <span
          class="flex w-8 h-8 items-center justify-center text-white rounded-full z-10 shadow-sm"
          :style="{ backgroundColor: slotProps.item.color }"
        >
          <i :class="slotProps.item.icon"></i>
        </span>
      </template>
      <template #content="slotProps">
        <Card class="mt-4 text-sm">
          <template #title>
            {{ slotProps.item.status }}
          </template>
          <template #subtitle>
            {{ slotProps.item.position }}
          </template>
          <template #content>
            <img
              v-if="slotProps.item.image"
              :src="`https://primefaces.org/cdn/primevue/images/product/${slotProps.item.image}`"
              :alt="slotProps.item.name"
              width="200"
              class="shadow-sm"
            />
            <div class="flex gap-2">
              <div class="i-logos-vue"></div>
              <div class="i-logos-tailwindcss-icon"></div>
            </div>

            <p>
              {{ slotProps.item.description }}
            </p>
            <!-- <Button label="Read more" text></Button> -->
          </template>
        </Card>
      </template>
    </Timeline>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (max-width: 960px) {
  ::v-deep(.customized-timeline) {
    .p-timeline-event:nth-child(even) {
      flex-direction: row;

      .p-timeline-event-content {
        text-align: left;
      }
    }

    .p-timeline-event-opposite {
      flex: 0;
    }
  }
}
</style>
