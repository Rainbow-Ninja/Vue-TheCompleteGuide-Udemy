const app = Vue.createApp({
    data() {
        return {
            name: 'Jo Dunham',
            myName: 'Jo',
            age: 40,
            birthYear: 1982,
            picUrl: "https://images.pexels.com/photos/39317/chihuahua-dog-puppy-cute-39317.jpeg?cs=srgb&dl=pexels-pixabay-39317.jpg&fm=jpg"
        };
    },
    methods: {
        ageMethod() {
            const currentYear = new Date().getFullYear();
            const age = currentYear - this.birthYear;
            return age;
        },
        randomNumber() {
            return Math.random();
        }
    }
});

app.mount('#assignment');