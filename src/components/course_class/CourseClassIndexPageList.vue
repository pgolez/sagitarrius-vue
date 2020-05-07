<template>
  <d-container>
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
            <td>{{ courseClass.code }}</td>
            <td>{{ courseClass.course.code }}</td>
            <td>{{ courseClass.course.title }}</td>
            <td>{{ courseClass.room.name }}</td>
            <td>{{ courseClass.status }}</td>
          </tr>
        </tbody>
      </table>
    </d-row>
  </d-container>
</template>
<script>
export default {
  name: "CourseClassIndexPageList",
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
    fetchData() {
      setTimeout(() => {
        this.classes = [
          {
            id: 1,
            code: "69923",
            course: {
              id: 1,
              code: "IT-110",
              title: "IT Fundamentals",
              units: 3
            },
            room: {
              id: 1,
              name: "Computer Laboratory 702"
            },
            semester: {
              id: 1,
              name: "First Semester 2020-2021"
            },
            max_enrollment: 25,
            status: "OPEN",
            created_at: "2020-05-05T02:35:05.732Z",
            updated_at: "2020-05-05T02:35:05.732Z",
            url: "http://localhost:3000/course-classes/1"
          },
          {
            id: 2,
            code: "68078",
            course: {
              id: 1,
              code: "IT-110",
              title: "IT Fundamentals",
              units: 3
            },
            room: {
              id: 2,
              name: "Computer Laboratory 703"
            },
            semester: {
              id: 1,
              name: "First Semester 2020-2021"
            },
            max_enrollment: 25,
            status: "OPEN",
            created_at: "2020-05-05T02:35:05.751Z",
            updated_at: "2020-05-05T02:35:05.751Z",
            url: "http://localhost:3000/course-classes/2"
          },
          {
            id: 3,
            code: "518332",
            course: {
              id: 2,
              code: "IT-111",
              title: "Program Logic Design",
              units: 4
            },
            room: {
              id: 2,
              name: "Computer Laboratory 703"
            },
            semester: {
              id: 1,
              name: "First Semester 2020-2021"
            },
            max_enrollment: 30,
            status: "DRAFT",
            created_at: "2020-05-05T02:35:23.745Z",
            updated_at: "2020-05-05T08:06:04.300Z",
            url: "http://localhost:3000/course-classes/3"
          },
          {
            id: 4,
            code: "518334",
            course: {
              id: 1,
              code: "IT-110",
              title: "IT Fundamentals",
              units: 3
            },
            room: {
              id: 1,
              name: "Computer Laboratory 702"
            },
            semester: {
              id: 1,
              name: "First Semester 2020-2021"
            },
            max_enrollment: 25,
            status: "DRAFT",
            created_at: "2020-05-05T10:56:59.151Z",
            updated_at: "2020-05-05T10:56:59.151Z",
            url: "http://localhost:3000/course-classes/4"
          },
          {
            id: 5,
            code: "51837",
            course: {
              id: 1,
              code: "IT-110",
              title: "IT Fundamentals",
              units: 3
            },
            room: {
              id: 1,
              name: "Computer Laboratory 702"
            },
            semester: {
              id: 1,
              name: "First Semester 2020-2021"
            },
            max_enrollment: 25,
            status: "DRAFT",
            created_at: "2020-05-05T12:13:22.970Z",
            updated_at: "2020-05-05T12:13:22.970Z",
            url: "http://localhost:3000/course-classes/5"
          }
        ];
        this.loading = false;
      }, 100);
    }
  }
};
</script>