<template>
  <form>
    <label for="name">Name</label>
    <input type="text" v-model="name" name="name" class="form-control" />
    <label for="age">Age</label>
    <input type="text" v-model="age" name="age" class="form-control" />
    <button class="btn btn-primary my-2" @click="submit">Edit Staff</button>
  </form>
</template>
<script>
import { mapActions } from "vuex";

export default {
  name: "editPage",
  data() {
    return {
      name: "",
      age: "",
      id: "",
    };
  },
  mounted() {
    const id = this.$route.params.id;
    if (id) {
      this.axios
        .get(`https://641d4a37b556e431a87feee0.mockapi.io/staff/${id}`)
        .then((res) => {
          if (res.data) {
            this.name = res.data.name;
            this.age = res.data.age;
            this.id = res.data.id;
          }
        });
    }
  },
  methods: {
    ...mapActions("staff", ["editStaff"]),
    submit(e) {
      e.preventDefault();
      let data = {
        name: this.name,
        age: this.age,
        id: this.id,
      };
      if (data) {
        this.editStaff(data);
        this.$router.push("/");
      }
    },
  },
};
</script>
<style></style>
