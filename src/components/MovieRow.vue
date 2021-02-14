<template>
  <div class="row">
    <div class="cell">{{ movie.title }}</div>
    <div class="cell">{{ movie.director }}</div>
    <div class="cell">{{ movie.genre }}</div>
    <div class="cell">{{ movie.release_date }}</div>
    <div class="cell">{{ movie.duration }}</div>
    <div class="cell">
      <img @click="handleDelete" src="../assets/icons/delete-icon.svg" width="20" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'movie-row',
  props: ['movie'],
  methods: {
    handleDelete() {
      this.$emit('movie-delete', this.movie);
    },
  },
};
</script>
<style scoped>
.row {
  display: flex;
  min-height: 40px;
  border-bottom: 1px solid gray;
}
.cell {
  flex: 4;
  justify-content: center;
  align-items: center;
  padding: 5px;
  box-sizing: border-box;
}
</style>
