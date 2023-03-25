<template>
  <form>
    <label for="name">Name</label>
    <input type="text" v-model="name" name="name" class="form-control" />
    <label for="age">Age</label>
    <input type="text" v-model="age" name="age" class="form-control" />
    <button class="btn btn-primary my-2" @click="submit">Add Staff</button>
  </form>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "addPage",
  methods: {
    ...mapActions("staff", ["addStaff"]),
    submit(e) {
      e.preventDefault();
      let { name, age } = this;
      let data = { name, age };
      this.addStaff(data);
      this.$router.push("/");
    },
  },
};
</script>
<style></style>
