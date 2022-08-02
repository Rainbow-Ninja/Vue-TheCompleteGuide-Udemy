<template>
    <base-card>
        <base-button @click="setSelectedTab('stored-resources')" :mode="storedResButtonMode">Stored Resources</base-button>
        <base-button @click="setSelectedTab('add-resource')" :mode="addResButtonMode" @submitted="addResourceToStored">Add Resource</base-button>
    </base-card>
    <keep-alive>
        <component :is="selectedTab"></component> 
    </keep-alive>
    <base-error-alert v-if="inputIsInvalid" title="Invalid Input" @close="confirmError">
        <template #default>
            <p>Unfortunately something is missing!</p>
            <p>Please check your form and enter something in all fields</p>
        </template>
        <template #actions>
            <base-button @click="confirmError">Okay</base-button>
        </template>
    </base-error-alert>
</template>
<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';
import BaseErrorAlert from '../UI/BaseErrorAlert.vue';

export default {
    components: {
        StoredResources,
        AddResource,
        BaseErrorAlert,
    },
    data() {
        return {
            selectedTab: 'stored-resources',
            inputIsInvalid: false,
            storedResources: [
                { 
                    id: 'official-guide', 
                    title: 'Official Guide', 
                    description: 'The official Vue.js docs',
                    link: 'https://vuejs.org'
                },
                { 
                    id: 'google', 
                    title: 'Google', 
                    description: 'Google FTW',
                    link: 'https://www.google.com'
                },
            ]
        };
    },
    provide() {
        return {
            resources: this.storedResources,
            addResourceToStored: this.addResourceToStored,
            removeResource: this.removeResource,
        }
    },
    computed: {
        storedResButtonMode() {
            return this.selectedTab === 'stored-resources' ? null : 'flat';
        },
        addResButtonMode() {
            return this.selectedTab === 'add-resource' ? null : 'flat';
        },
    },
    methods: {
        setSelectedTab(tab) {
            this.selectedTab = tab;
        },
        addResourceToStored(title, description, link) {
            if (title.trim() === '' || description.trim() === '' || link.trim() === '') {
                this.inputIsInvalid = true;
            } else {
                this.storedResources.push({
                    id: new Date().toISOString(),
                    title: title,
                    description: description,
                    link: link,
                });
                this.selectedTab = 'stored-resources';
            }
        },
        removeResource(resId) {
            const resIndex = this.storedResources.findIndex(res => res.id === resId);
            this.storedResources.splice(resIndex, 1);
        },
        confirmError() {
            this.inputIsInvalid = false;
        }
    }
}

</script>