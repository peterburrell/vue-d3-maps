import { geoMercator, geoOrthographic, geoStereographic, geoConicEqualArea, geoAzimuthalEqualArea } from "d3-geo";

export default {
  'mercator': geoMercator,
  'orthographic': geoOrthographic,
  'stereographic': geoStereographic,
  'conic': geoConicEqualArea,
  'azimuthal-equal-area': geoAzimuthalEqualArea
};