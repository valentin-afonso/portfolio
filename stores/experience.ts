import { defineStore } from'pinia'

export const useExperienceStore = defineStore({
    id: 'experienceStore',
    state: () => ({
      experiences: []
    }),
    actions: {
      setExperiences(experiences) {
        this.experiences = experiences;
      }
    },
    getters: {
      getExperiences: state => state.experiences
    }
});