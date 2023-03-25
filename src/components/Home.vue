<template>
  <div>
    <router-link to="/add">Add Staff</router-link>
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody v-for="value in data" :key="value.id">
        <tr>
          <td>
            {{ value.name }}
          </td>
          <td>
            {{ value.age }}
          </td>
          <td>
            <router-link class="btn btn-primary" :to="'/edit/' + value.id"
              >Edit</router-link
            >
            <button class="btn btn-danger" @click="deleteStaff(value.id)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "homePage",
  computed: {
    ...mapGetters({
      data: "staff/data",
    }),
  },
  mounted() {
    this.getStaff();
  },
  methods: {
    ...mapActions("staff", ["getStaff"]),
    ...mapActions("staff", ["deleteStaff"]),
  },
};
</script>
<style></style>
