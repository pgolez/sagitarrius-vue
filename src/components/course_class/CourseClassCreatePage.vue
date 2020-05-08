<template>
  <d-container>
    <d-row>
      <d-col cols="8" offset="2">
        <h1>Create new class</h1>
      </d-col>
    </d-row>
    <d-row>
      <d-col cols="8" offset="2">
        <d-form @submit="createNewCourseClass()">
          <div class="form-group">
            <label class="sr-only" for="course-class_id">Class code</label>
            <d-input
              id="course-class_id"
              v-model="courseClass.code"
              type="text"
              required
              placeholder="Class code"
            />
          </div>
          <div class="form-group">
            <label class="sr-only" for="course-class_max-enrollment">Enrollment cap</label>
            <d-input
              id="course-class_max-enrollment"
              v-model="courseClass.maxEnrollment"
              type="number"
              placeholder="Max enrollment"
            />
          </div>

          <d-button type="submit">Create Account</d-button>
        </d-form>
      </d-col>
    </d-row>
  </d-container>
</template>

<script>
import CourseClassRepository from "@/repositories/course_class/course-class.repository";

export default {
  name: "CourseClassCreatePage",
  data() {
    return {
      courseClass: {
        code: "",
        courseId: "1",
        roomId: "1",
        semesterId: "1",
        maxEnrollment: 20
      }
    };
  },
  methods: {
    async createNewCourseClass() {
      console.log("sernding course", this.courseClass);
      const response = await CourseClassRepository.create({
        code: this.courseClass.code,
        course_id: this.courseClass.courseId,
        room_id: this.courseClass.roomId,
        semester_id: this.courseClass.semesterId,
        max_enrollment: this.courseClass.maxEnrollment
      });

      console.log(response);
    }
  }
};
</script>
