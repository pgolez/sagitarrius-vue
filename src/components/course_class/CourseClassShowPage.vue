<template>
  <d-container>
    <d-row>
      <d-breadcrumb :items="breadcrumbItems" />
    </d-row>
    <d-card id="course-class-card" class="m-auto">
      <d-card-header>{{ course_class.code }}</d-card-header>
      <d-card-body :title="course_class.course_code" :subtitle="course_class.course_title">
        <d-row>
          <d-col>{{ course_class.room }}</d-col>
        </d-row>
        <d-row>
          <d-col>{{ course_class.max_enrollment}} (max)</d-col>
        </d-row>
        <d-row>
          <d-col>
            <CourseClassStatusBadge :status="course_class.status" />
          </d-col>
        </d-row>
      </d-card-body>
      <d-card-footer></d-card-footer>
    </d-card>
  </d-container>
</template>

<script>
import CourseClassRepository from "@/repositories/course_class/course-class.repository";
import CourseClassStatusBadge from "./CourseClassStatusBadge";

export default {
  name: "CourseClassShowPage",
  components: { CourseClassStatusBadge },
  data() {
    return {
      course_class: {
        code: "",
        room: "",
        course_code: "",
        course_title: "",
        status: "",
        max_enrollment: 0
      },
      breadcrumbItems: [
        {
          text: "Courses",
          href: `${this.$router.resolve({ name: "course-class.index" }).href}`
        },
        { text: "", active: true }
      ]
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const course_class_json = await CourseClassRepository.fetch(
        this.$route.params.id
      );

      this.course_class.code = course_class_json.code;
      this.course_class.room = course_class_json.room.name;
      this.course_class.course_code = course_class_json.course.code;
      this.course_class.course_title = course_class_json.course.title;
      this.course_class.status = course_class_json.status;
      this.course_class.max_enrollment = course_class_json.max_enrollment;

      this.breadcrumbItems[
        this.breadcrumbItems.length - 1
      ].text = `Class ${this.course_class.code}`;
    }
  }
};
</script>

<style scoped>
#course-class-card {
  max-width: 500px;
}
</style>