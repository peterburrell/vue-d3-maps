<template>
    <svg class="map" :width="width" :height="height">
      <path class="land" :d="land" />
      <path class="boundary" :d="countries" />
      <path class="graticule" :d="graticule" />
    </svg>
</template>

<script>
import * as topojson from "topojson-client";
import { geoGraticule, geoPath } from "d3-geo";
import world from 'world-atlas/world/110m.json';

import projections from './projections';

const land = topojson.feature(world, world.objects.land);
const countries = topojson.mesh(world, world.objects.countries, function(a, b) { return a !== b; });
const graticule = geoGraticule();

export default {
  props: {
    width: {
      type: Number,
      default: 1200
    },
    height: {
      type: Number,
      default: 800
    },
    projection: {
      type: String,
      default: 'mercator'
    }
  },
  computed: {
    _projection() {
      return projections[this.projection]()
        .scale((this.width - 3) / (2 * Math.PI))
        .translate([this.width / 2, this.height / 2]);
    },
    graticule() {
      const path = geoPath(this._projection);
      return path(graticule());
    },
    land() {
      const path = geoPath(this._projection);
      return path(land);
    },
    countries() {
      const path = geoPath(this._projection);
      return path(countries);
    }
  },
  created() {
    //console.log(graticule());
  }
}
</script>

<style lang="scss">
.map {
  /*background-color: #a3daff;*/
}

.stroke {
  fill: none;
  stroke: #000;
  stroke-width: 3px;
}

.fill {
  fill: #fff;
}

.graticule {
  fill: none;
  stroke: #777;
  stroke-width: 0.5px;
  stroke-opacity: 0.5;
}

.land {
  /*fill: #1862ab;*/
  fill: #444;
}

.boundary {
  fill: none;
  stroke: #fff;
  stroke-width: 0.5px;
}

</style>