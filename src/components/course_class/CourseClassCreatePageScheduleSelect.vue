<template>
  <div class="form-group">
    <label class="sr-only" for="course-class_schedule">Schedule</label>
    <d-form-select
      id="course-class_schedule"
      v-bind="scheduleId"
      :options="options"
      @change="selectSchedule($event)"
    />
  </div>
</template>

<script>
import ScheduleRepository from "@/repositories/schedule/schedule.repository";

export default {
  name: "CourseclassCreatePageScheduleSelect",
  props: { scheduleId: Number },
  created() {
    this.fetchAllSchedules();
  },
  data() {
    return {
      options: [{ value: undefined, text: "🍕 Select a class schedule" }]
    };
  },
  methods: {
    async fetchAllSchedules() {
      const schedules = await ScheduleRepository.list();
      const additionalOptions = schedules.map(schedule => {
        const days = schedule.days
          .map(day => {
            return day.charAt(0).toUpperCase() + day.toLowerCase().slice(1);
          })
          .join(",");

        const time_sched = `${schedule.time_start}-${schedule.time_end}`;
        return {
          value: schedule.id,
          text: `(${days}) ${time_sched}`
        };
      }, schedules);

      this.options.push(...additionalOptions);
    },

    selectSchedule(id) {
      this.$emit("input", id);
    }
  }
};
</script>