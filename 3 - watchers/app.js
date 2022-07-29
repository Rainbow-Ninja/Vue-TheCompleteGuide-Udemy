const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  //watcher fires every time the value it's watching changes
  watch: {
    name(newVal, oldVal) {
      console.log('new', newVal, 'old', oldVal);
    },
    counter(value) {
      if (value > 50) {
        this.counter = 0;
      }
    }
  },
  computed: {
    fullname() {
      return this.name === '' ? '' : this.name + ' Dunham';
    }
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetName() {
      this.name = '';
    }
  }
});

app.mount('#events');
