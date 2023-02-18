<template>
    <section>
        <base-card>
            <header>
                <h2>Request Received</h2>
            </header>
            <ul v-if="hasRequest">
                <request-item v-for="req in receivedRequest" :key="req.id" :email="req.userEmail" :message="req.message"> </request-item>
            </ul>
            <h3 v-else>
                You haven't received any request yet!
            </h3>
        </base-card>
    </section>
</template>

<!-- optional API -->
<!-- 
<script>
import RequestItem from '../../components/requests/RequestItem.vue';


export default {
    components:{
        RequestItem
    },
    computed:{
        receivedRequest () {
            return this.$store.getters['requests/requests'];
        },
        hasRequest() {
            return this.$store.getters['requests/hasRequests'];
        }
    }
}

</script> -->


<!-- composition API -->
<script setup>
    import RequestItem from '../../components/requests/RequestItem.vue';
    import { reactive } from 'vue';
    import { useStore } from 'vuex';

    const store = useStore();

    const receivedRequest = reactive( store.getters['requests/requests']);
    const hasRequest = reactive(store.getters['requests/hasRequests']);

</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>