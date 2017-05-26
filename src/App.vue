<template>
  <div id="app">
    <div class="map-options">
      <input type="number" v-model="width"/>
      <input type="number" v-model="height"/>
      <select v-model="projection">
        <option v-for="p in projections" :value="p">
          {{ p }}
        </option>
      </select>
    </div>
    <world-map :width="width" :height="height" :projection="projection"></world-map>
  </div>
</template>

<script>
import WorldMap from './components/WorldMap.vue';
import projections from './components/projections';

export default {
  name: 'app',
  components: { WorldMap },
  data () {
    return {
      width: 1200,
      height: 800,
      projection: 'mercator',
      projections: Object.keys(projections)
    }
  }
}
</script>

<style lang="scss">
  body {
    font-size: 14px;
  }

  input, select {
    font-size: inherit;
    padding: 5px;
    border: 1px solid #ddd;
  }

  .map-options {
    margin-bottom: 10px;
  }
</style>
