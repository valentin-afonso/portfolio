import { defineStore } from'pinia'

export const useFormationStore = defineStore({
    id: 'formationStore',
    state: () => ({
      formations: []
    }),
    actions: {
      setFormations(formations) {
        this.formations = formations;
      }
    },
    getters: {
      getFormations: state => state.formations
    }
});