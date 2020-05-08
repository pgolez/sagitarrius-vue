<template>
  <div class="form-group">
    <label class="sr-only" for="course-class_schedule">Schedule</label>
    <d-form-select id="course-class_schedule" v-bind="scheduleId" :options="options" />
  </div>
</template>

<script>
export default {
  name: "CourseclassCreatePageScheduleSelect",
  props: { scheduleId: Number },
  data() {
    return {
      options: [{ value: undefined, text: "🍕 Select a class schedule" }]
    };
  }
};
</script>