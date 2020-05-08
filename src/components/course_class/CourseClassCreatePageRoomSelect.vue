<template>
  <div class="form-group">
    <label class="sr-only" for="course-class_room">Room</label>
    <d-form-select
      id="course-class_room"
      v-bind="roomId"
      :options="options"
      v-on:change="selectRoom($event)"
    />
  </div>
</template>

<script>
import RoomRepository from "@/repositories/room/room.repository";

export default {
  name: "CourseClassCreatePageRoomSelect",
  data() {
    return {
      selected: null,
      options: [{ value: null, text: "🍕 Select a room" }]
    };
  },
  props: { roomId: Number },
  created() {
    this.fetchRooms();
  },
  methods: {
    selectRoom(id) {
      this.$emit("input", id);
    },
    async fetchRooms() {
      const rooms = await RoomRepository.list();
      const additionalOptions = rooms.map(room => {
        return { value: room.id, text: room.name };
      }, rooms);

      this.options.push(...additionalOptions);
    }
  }
};
</script>