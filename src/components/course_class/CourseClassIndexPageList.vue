<template>
  <div class="m-auto w-100">
    <d-row v-show="loading">Fetching shits...</d-row>
    <d-row v-show="!loading">
      <table class="table">
        <thead>
          <tr>
            <th>Class Code</th>
            <th>Course Code</th>
            <th>Descriptive Title</th>
            <th>Room</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="courseClass in classes" v-bind:key="courseClass.id">
            <td>
              <router-link
                :to="{name: 'course_class.show', params: {id: courseClass.id}}"
              >{{ courseClass.code }}</router-link>
            </td>
            <td>{{ courseClass.course.code }}</td>
            <td>{{ courseClass.course.title }}</td>
            <td>{{ courseClass.room.name }}</td>
            <td>
              <CourseClassStatusBadge :status="courseClass.status" />
            </td>
          </tr>
        </tbody>
      </table>
    </d-row>
  </div>
</template>

<script>
import CourseClassStatusBadge from "./CourseClassStatusBadge";
import CourseClassRepository from "@/repositories/course_class/course-class.repository";

export default {
  name: "CourseClassIndexPageList",
  components: { CourseClassStatusBadge },
  data() {
    return {
      loading: true,
      classes: []
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      this.classes = await CourseClassRepository.fetchAllCourseClasses();
      this.loading = false;
    }
  }
};
</script>