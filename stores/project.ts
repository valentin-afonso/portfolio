import { defineStore } from'pinia'

export const useProjectStore = defineStore({
    id: 'projectStore',
    state: () => ({
      projects: []
    }),
    actions: {
      setProjects(projects) {
        this.projects = projects;
      }
    },
    getters: {
      getProjects: state => state.projects
    }
});