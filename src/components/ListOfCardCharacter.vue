<template>
  <el-row :gutter="24">
    <el-col
      v-for="character in characters"
      :key="character.id"
      class="list-character"
      :lg="12"
      :sm="12"
      :md="24"
    >
      <CardCharacter :character="character" />
    </el-col>
  </el-row>
</template>

<script setup>
const props = defineProps({
  characters: {
    type: Array,
    default: () => [],
  },
});
</script>
