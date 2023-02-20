import { defineStore } from 'pinia';

export const useRequestStore = defineStore({
    id: 'request',
    state: () => ({
        requestsData: [],
    }),
    actions: {
        msgCoach(payload) {
            const newRequest = {
                id: new Date().toISOString,
                coachId: payload.coachId,
                userEmail: payload.email,
                message: payload.message
            };

            this.requestsData.push(newRequest);

        }
    },
    getters: {
        // see all message to a coaches
        requests() {
            return this.requestsData;
        },
        hasRequests() {
            return this.requestsData && this.requestsData.length > 0;
        }
    },
});