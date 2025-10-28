import {defineStore} from 'pinia';

export const useIndexStore = defineStore('index', {
    state: () => ({
        value: 0,
    }),
    actions: {
        increment() {
            this.value++;
        },
        decrement(){
            this.value--;
        }
    }
})