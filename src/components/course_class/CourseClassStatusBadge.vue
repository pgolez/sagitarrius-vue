<template>
  <d-badge :theme="getTheme()">{{ status }}</d-badge>
</template>

<script>
export default {
  name: "CourseClastatusBadge",
  props: {
    status: String,
    id: Number
  },

  methods: {
    getTheme() {
      switch (this.status) {
        case "OPEN":
          return "success";
        case "CLOSED":
          return "danger";
        case "ON HOLD":
          return "secondary";
        case "DRAFT":
        default:
          return "light";
      }
    }
  }
};
</script>