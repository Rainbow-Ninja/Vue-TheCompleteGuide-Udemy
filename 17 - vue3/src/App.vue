<template>
  <section class="container">
    <h2>{{ user.name }}</h2>
    <p>{{ user.age }}</p>
  </section>
</template>

<script>
import { reactive, ref, isReactive, isRef } from 'vue';

export default {
  // data() {
  //   return {
  //     userName: 'Maximilian',
  //   };
  // },
  setup() {
    const uAge = ref(31);
    const user = reactive({
      name: 'Jo',
      age: 40,
    });

    console.log(isRef(uAge)); //true
    console.log(isReactive(user), user.age); //true

    setTimeout(function() {
      user.name = "Joooo";
    }, 2000);

    return { user: user };
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>