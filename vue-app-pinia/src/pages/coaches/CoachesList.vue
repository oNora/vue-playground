<template>
    <section>
        <coach-filter @change-filter="setFilter"></coach-filter>
    </section>
    <section>
        <base-card>
        <div class="controls">
            <base-button mode="outline"> Refresh</base-button>
            <base-button v-if="!isCoach()" link to="/register">Register as Coach</base-button>
        </div>
        <ul v-if="hasCoaches">
            <coach-item v-for="coach in filteredCoaches()" 
            :key="coach.id"
            :id="coach.id" 
            :first-name="coach.firstName"
            :last-name="coach.lastName"
            :rate="coach.hourlyRate"
            :areas="coach.areas">
            </coach-item>
        </ul>
        <h3 v-else>No coaches found</h3>
    </base-card>
    </section>
</template>

<!-- <script>
import CoachItem from '../../components/coaches/CoachItem.vue';
import CoachFilter from '../../components/coaches/CoachFilter.vue';
import { useCoachesStore } from '../../store/coaches';

export default {
    components: {
        CoachItem,
        CoachFilter,
    },
    data() {
        return {
            activeFilters: {
                frontend: true,
                backend: true,
                career: true,
            }
        };
    },
    computed: {
        filteredCoaches() {
            console.log('------');
            const coachStore = useCoachesStore();
            const coaches = coachStore.getCoaches;
            return coaches.filter(coach => {
                if(this.activeFilters.frontend && coach.areas.includes('frontend')) {
                    return true;
                }
                if(this.activeFilters.backend && coach.areas.includes('backend')) {
                    return true;
                }
                if(this.activeFilters.career && coach.areas.includes('career')) {
                    return true;
                }
                return false;
            })
        },

        isCoach() {
            const coachStore = useCoachesStore();
            const coaches = coachStore.getCoaches;
            return coaches.isCoach;
        },

        
        hasCoaches() {
            const coachStore = useCoachesStore();
            const coaches = coachStore.getCoaches;
            return coaches.hasCoaches;
        }
    },
    methods: {
        setFilter(updateFilters) {
            this.activeFilters = updateFilters;
        }
    }
}

</script> -->

<script setup>
    import CoachItem from '../../components/coaches/CoachItem.vue';
    import CoachFilter from '../../components/coaches/CoachFilter.vue';
    import { reactive } from 'vue';
    import { useCoachesStore } from '../../store/coaches';

    const coachStore = useCoachesStore();
    const coaches = coachStore.getCoaches;

    const activeFilters = reactive( {
        frontend: true,
        backend: true,
        career: true,
    });

    const filteredCoaches = () => {

        return coaches.filter(coach => {
            if(activeFilters.frontend && coach.areas.includes('frontend')) {
                return true;
            }
            if(activeFilters.backend && coach.areas.includes('backend')) {
                return true;
            }
            if(activeFilters.career && coach.areas.includes('career')) {
                return true;
            }
            return false;
        })
    };

        const isCoach = () => {
            console.log('isCoach');
            return coaches.isCoach;
        };

        
        const hasCoaches = () => {
            console.log('hasCoaches');
            return coaches.hasCoaches;
        };

        const setFilter = (updateFilters) => {
            Object.assign(activeFilters , updateFilters);
        }

</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>