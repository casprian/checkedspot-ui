// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    // count: 0,
  }),
  actions: {
    // define methods in this block
    // increment() {
    //   this.count++;
    // },
    // decrement() {
    //   this.count--;
    // }
  },
  getters: {
    // this block is used to define computed properties
    // oddOrEven: (state) => {
    //   if(state.count % 2 === 0) return 'even';
    //   return 'odd';
    // }
  }
})
