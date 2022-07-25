const app = Vue.createApp({
    data() {
        return {
            courseGoal: 'Finish this course and get a better understanding of Vue',
            courseGoalA: 'Do a handstand',
            courseGoalB: 'PoleDancing',
            vueLink: 'https://vuejs.org/'
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            return randomNumber < 0.5 ? this.courseGoalA : this.courseGoalB;
        }
    }
});

app.mount('#user-goal');