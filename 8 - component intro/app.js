const app = Vue.createApp({
    data() {
        return {
            friends: [
                {
                    id: 'renee',
                    name: 'Renee Haron',
                    phone: '0402 000 000',
                    email: 'renee@gmail.com'
                },
                {
                    id: 'genevieve',
                    name: 'Genevieve Anderson',
                    phone: '0412 000 000',
                    email: 'genevieve@gmail.com'
                }
            ]
        }
    },
});

app.component('friend-contact', {
    template: `
    <li :key="friend.id">
        <h2>{{ friend.name }}</h2>
        <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show'}} Details</button>
        <ul v-if="detailsAreVisible">
        <li><strong>Phone:</strong> {{ friend.phone }}</li>
        <li><strong>Email:</strong> {{ friend.email }}</li>
        </ul>
    </li>
  `,
    data() {
        return { 
            detailsAreVisible: false,
            friend: {
                id: 'renee',
                name: 'Renee Haron',
                phone: '0402 000 000',
                email: 'renee@gmail.com'
            }, 
        }
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
});
app.mount('#app');