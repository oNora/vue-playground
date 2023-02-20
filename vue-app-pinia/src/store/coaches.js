import { defineStore } from 'pinia';
import { useStore } from './index.js';

export const useCoachesStore = defineStore({
    id: 'coaches',
    state: () => ({
        coaches: [
            {
                id: 'c1',
                firstName: 'Maximilian',
                lastName: 'Schwarzmüller',
                areas: ['frontend', 'backend', 'career'],
                description:
                    "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
                hourlyRate: 30
            },
            {
                id: 'c2',
                firstName: 'Julie',
                lastName: 'Jones',
                areas: ['frontend', 'career'],
                description:
                    'I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
                hourlyRate: 30
            }
        ]
    }),
    actions: {
        addRegisterCoach(data){
            const rootStore = useStore();

            const coachData = {
                id: rootStore.userId,
                firstName: data.first,
                lastName: data.last,
                description: data.desc,
                hourlyRate: data.rate,
                areas: data.areas,
    
            };

            this.coaches.push(coachData);

        }
    },
    getters: {
        getCoaches(state) {
            return state.coaches;
        },
        hasCoaches () {
            return this.coaches && this.coaches.length > 0;
        },
        isCoach() {
            const rootStore = useStore();

            const coaches = this.getCoaches;
            const userId = rootStore.userId;
            return coaches.some(coach => coach.id === userId);
        }
    }
});