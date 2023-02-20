import { defineStore } from 'pinia';

export const useStore = defineStore({
    id: 'rootStore',
    state: () => ({
        userId: 'c3',
    }),
    getters: {
        userId(state) {
            return state.userId;
        }
    }
});