<template>
  <d-container>
    <d-row>Course Class</d-row>
    <d-row>
      <d-col>Code</d-col>
      <d-col>{{ code }}</d-col>
    </d-row>
  </d-container>
</template>

<script>
export default {
  name: "CourseClassShowPage",
  props: {
    code: String
  },
  created() {
    this.code = "3446058";
  }
};
</script>