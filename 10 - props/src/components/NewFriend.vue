<template>
    <form @submit.prevent="submitForm">
        <section>
            <div>
                <label>Name:</label>
                <input type="text" v-model="inputName">
            </div>
            <div>
                <label>Phone:</label>
                <input type="tel" v-model="inputPhone">
            </div>
             <div>
                <label>Email:</label>
                <input type="email" v-model="inputEmail">
            </div>
            <div>
                <button>Add Contact</button>
            </div>
        </section>
    </form>
</template>
<script>
export default {
  emits: ['form-submit'],
    data() {
        return {
            inputName: '',
            inputPhone: '',
            inputEmail: ''
        }
    },
    methods: {
        toggleShowForm() {
            this.showForm = !this.showForm; 
        },
        submitForm() {
            this.$emit('form-submit', this.inputName, this.inputPhone, this.inputEmail);
            this.inputName = '';
            this.inputPhone = '';
            this.inputEmail = '';
        }
    }
}
</script>