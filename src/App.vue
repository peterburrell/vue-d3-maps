<template>
  <div id="app">
    <world-map :width="900" :height="600" :projection="projection"></world-map>
    <br/>
    <select v-model="projection">
      <option v-for="p in projections" :value="p">
        {{ p }}
      </option>
    </select>
  </div>
</template>

<script>
import WorldMap from './components/WorldMap.vue';

export default {
  name: 'app',
  components: { WorldMap },
  data () {
    return {
      projection: 'mercator',
      projections: ['mercator', 'orthographic', 'stereographic', 'conic']
    }
  }
}
</script>

<style lang="scss">
  body {
    font-size: 14px;
  }

  select {
    font-size: inherit;
    padding: 5px;
    border-color: #ddd;
  }
</style>
