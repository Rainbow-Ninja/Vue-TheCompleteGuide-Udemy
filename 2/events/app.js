const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      favColour: '',
      fullName: '',
      confirmedName: '',
    };
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    favouriteColour(event) {
      this.favColour = event.target.value;
    },
    setFullName(event, lastName) {
      this.fullName = event.target.value + ' ' + lastName;
    },
    submitForm(event) {
      // event.preventDefault();
      alert('Submitted!');
    },
    confirmName() {
      this.confirmedName = this.fullName;
    }
  }
});

app.mount('#events');
