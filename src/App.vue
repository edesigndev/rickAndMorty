<template>
  <CardImage v-if="!characters.length > 0" />
  <SearchAndFilter
    :msgError="msjError"
    @text-search="onGetCharacter"
    @change-filter="onGetCharacter"
  />
  <ListOfCardCharacter :characters="characters" />
</template>

<script setup>
import { ref, computed } from 'vue';
import { useCharacter } from '@/store/character';

const characterStore = useCharacter();
const msjError = ref('');
const onGetCharacter = async (text, status) => {
  if (text.length > 3) {
    try {
      const res = await characterStore.getCharacter(text, status);
      const { data } = res;
      characterStore.characters = data.results;
      msjError.value = '';
    } catch (error) {
      msjError.value = 'No se encontraron resultados';
    }
  } else {
    characterStore.characters = [];
  }
};

const characters = computed(() => {
  return characterStore.listCharacters;
});
</script>
