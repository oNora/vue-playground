<template>
    <section>
        <base-card>
            <h2>Register as a coach</h2>
            <coach-form @save-data="saveData"></coach-form>
        </base-card>
    </section>
</template>

<script>

import CoachForm from '../../components/coaches/CoachForm.vue';
import {useCoachesStore} from '../../store/coaches';

export default {
    components: {
        CoachForm
    },
    methods: {
        saveData(data) {
            const coachStore = useCoachesStore();
            coachStore.addRegisterCoach(data);
            this.$router.replace('/coaches');
        }
    }
}

</script>