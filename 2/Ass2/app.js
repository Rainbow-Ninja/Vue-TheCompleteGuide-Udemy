const app = Vue.createApp({
    data() {
      return {
        output: '',
        finalOutput: '',
      };
    },
    methods: {
        showAlert() {
            alert('Ah, you got me!');
        },
        updateOutput(e) {
            this.output = e.target.value;
        },
        confirmedOutput(e) {
            this.finalOutput = e.target.value;
        }
    }
  });
  
  app.mount('#assignment');