<template>
    <li>
        <h2>{{ name }} {{ isFavourite ? '(Favourite)' : ''}}</h2>
        <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show '}} Details</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{ phoneNumber }}</li>
            <li><strong>Email:</strong> {{ emailAddress }}</li>
        </ul>
        <button @click="toggleFav">Toggle Favourite</button>
        <button @click="$emit('remove-friend', id)">Remove Friend</button>
    </li>
</template>

<script>
export default {
    // BASIC EMITS ----
    emits: ['toggle-fav', 'remove-friend'],

    // MORE COMPLEX EMIT ----
    // Has name, function with arg being sent, if present all g,
    // if not present have a console warning (helps with debugging)

    // emits: {
    //     'toggle-fav': function(id) {
    //         if(id) {
    //             return true;
    //         } else {
    //             console.warn('ID is missing!');
    //             return false;
    //         }
    //     }
    // }

    // BASIC PROPS -----
    // props: [
    //     'name', 
    //     'phoneNumber',
    //     'emailAddress',
    //     'isFavourite'
    // ],

    // WAY BETTER PROPS ----
    props: {
        id: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        phoneNumber: {
            type: String,
            required: true,
        },
        emailAddress: {
            type: String,
            required: true,
        },
        isFavourite: {
            type: Boolean,
            required: false,
            default: false,
            // validator: function(value) {
            //     return value === '1' || value === '0'
            // }
        },
    },
    data() {
        return {
            detailsAreVisible: false,
            friendIsFav: this.isFavourite,
        }
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        },
        toggleFav() {
            this.$emit('toggle-fav', this.id);
        }
    }
}
</script>
