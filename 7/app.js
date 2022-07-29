const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      const blip = this.$refs.userText.value;
      this.message = blip[0].toUpperCase() + blip.slice(1);
    },
  },
  beforeCreate() {
    console.log('before create');
  },
  created() {
    console.log('created');
  },
  beforeMount() {
    console.log('before mount');
  },
  mounted() {
    console.log('mounted');
  },
  beforeUpdate() {
    console.log('before update');
  },
  updated() {
    console.log('update');
  }
});

app.mount('#app');
