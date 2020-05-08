<template>
  <d-container>
    <d-row>
      <d-col cols="8">
        <h1 class="text-left">Course Class List</h1>
      </d-col>
      <d-col cols="4" class="text-right">
        <d-button theme="success" @click="goToCreatePage()">Create</d-button>
      </d-col>
    </d-row>
    <d-row>
      <course-class-index-page-list />
    </d-row>
  </d-container>
</template>

<script>
import CourseClassIndexPageList from "./CourseClassIndexPageList";

export default {
  name: "CourseClassIndexPage",
  components: { CourseClassIndexPageList },
  methods: {
    goToCreatePage() {
      this.$router.push({ name: "course_class.create" });
    }
  }
};
</script>
