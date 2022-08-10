<template>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  data() {
    return {
      savedChanges: false,
    };
  },
  inject: ['users'],
  beforeRouteLeave(to, from, next) {
    console.log('To: ', to, 'From: ', from, 'Next: ', next);
    if (this.savedChanges) {
      next();
    } else {
      const userWantsToLeave = confirm('Are you sure? You have unsaved changes!'); // this will be a boolean
      next(userWantsToLeave); // next(false) will block them from leaving
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>