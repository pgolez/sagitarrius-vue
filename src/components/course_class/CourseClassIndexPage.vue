<template>
  <!-- <div>
    <h1>Course Classes List</h1>

  </div>-->
  <d-container>
    <d-row>
      <h1>Course Class List</h1>
    </d-row>
    <d-row>
      <course-class-index-page-list />
      <!-- <CourseClassIndexPageList /> -->
    </d-row>
  </d-container>
</template>

<script>
import CourseClassIndexPageList from "./CourseClassIndexPageList";
export default {
  name: "CourseClassIndexPage",
  components: { CourseClassIndexPageList }
};
</script>