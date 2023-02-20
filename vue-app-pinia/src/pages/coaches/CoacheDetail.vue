<template>
    <section>
        <base-card>
            <h2>{{fullName}}</h2>
            <h3>${{ rate }}/hour</h3>
        </base-card>
    </section>
    <section>
        <base-card>
            <header>
                <h2>Interested? REach out now</h2>
                <base-button link :to="contactLink">Contact</base-button>
            </header>
            <router-view></router-view>
        </base-card>
    </section>
    <section>
        <base-card>
            <base-badge v-for="area in areas" :key="area" :type="area" :title="area"></base-badge>
            <p>{{ description }}</p>
        </base-card>
    </section>
</template>

<!-- optional API -->
<!-- <script>
export default {
    props: ['id'],
    data() {
        return {
            selectedCoach: null
        }
    },
    computed:{
        fullName() {
            return `${this.selectedCoach.firstName} ${this.selectedCoach.lastName}`;
        },
        areas() { return this.selectedCoach.areas },
        rate() { return this.selectedCoach.hourlyRate},
        description() { return this.selectedCoach.description},
        contactLink() {
            return `${this.$route.path}/${this.id}/contact`;
        }
    },
    created() {
        this.selectedCoach = this.$store.getters['coaches/getCoaches'].find(
            (coach) => coach.id === this.id
        );
    },

}

</script> -->


<!-- composition API -->
<script setup>
    import { reactive, ref, defineProps } from 'vue';
    // import { useStore } from 'vuex';
    import { useRoute } from 'vue-router';
    import { useCoachesStore } from '../../store/coaches';

    const route = useRoute();
    // const store = useStore();
    const coachStore = useCoachesStore();
    
    const props = defineProps(['id']);
    const selectedCoach =  reactive({coach: null});

    // this was before in created()
    selectedCoach.coach = coachStore.getCoaches.find(
        (coach) => coach.id === props.id
    );

    // this was in computed()
    const fullName = ref(`${selectedCoach.coach.firstName} ${selectedCoach.coach.lastName}`);
    const areas = ref(selectedCoach.coach.areas );
    const rate = ref(selectedCoach.coach.hourlyRate);
    const description = ref(selectedCoach.coach.description);
    const contactLink = ref(`${route.path}/${props.id}/contact`);

</script>