import { defineStore } from 'pinia';
import ServiceApp from '@/services/services';

export const useCharacter = defineStore('character-store', {
  state: () => {
    return {
      characters: [],
      msgError: false,
    };
  },

  getters: {
    listCharacters: (state) => state.characters
  },

  actions: {
    async getCharacter(name, status) {
      return await ServiceApp.getCharacters(name, status);
    },
  },
});
