<template>
  <div class="form-group">
    <label class="sr-only" for="course-class_course">Course</label>
    <d-form-select
      id="course-class_course"
      v-bind="courseId"
      :options="options"
      @change="selectCourse($event)"
    />
  </div>
</template>

<script>
import CourseRepository from "@/repositories/course/course.repository";

export default {
  name: "CourseClassCreatePageCourseSelect",
  props: { courseId: Number },
  data() {
    return {
      options: [{ value: undefined, text: "🍕 Select a course" }]
    };
  },
  created() {
    this.fetchCourses();
  },
  methods: {
    selectCourse(courseId) {
      this.$emit("input", courseId);
    },
    async fetchCourses() {
      const courses = await CourseRepository.list();
      const additionalOptions = courses.map(course => {
        const text = `(${course.code}) ${course.descriptive_title}`;
        return { value: course.id, text: text };
      });
      console.table(courses);
      this.options.push(...additionalOptions);
    }
  }
};
</script>