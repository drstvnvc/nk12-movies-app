<template>
  <div class="table">
    <div class="row header">
      <slot name="table-header">
        <div v-for="column in columns" :key="column" class="cell">{{ column }}</div>
      </slot>
    </div>
    <div v-for="(item, index) in items" :key="index">
      <slot :item="item" :index="index">
        <div class="row">
          <div v-for="column in columns" v-bind:key="`${index}${column}`" class="cell">
            {{ item[column] }}
          </div>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'my-table',
  props: ['items', 'columns'],
};
</script>
<style scoped>
.table {
  display: flex;
  flex-direction: column;
}
.row {
  display: flex;
  min-height: 40px;
  border-bottom: 1px solid gray;
}
.header {
  background-color: #dddddd;
  border-bottom: 1px solid darkblue;
}
.cell {
  flex: 4;
  justify-content: center;
  align-items: center;
  padding: 5px;
  box-sizing: border-box;
}
</style>
