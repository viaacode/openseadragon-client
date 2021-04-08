const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

var manifest = "";

if (urlParams.has('manifest')) {
  manifest = urlParams.get('manifest');
}

const viewer = OpenSeadragon({
  id: "viewer",
  showNavigator:  true,
  // preserveViewport: true,
  // visibilityRatio: 1,
  // minZoomLevel: 1,
  // defaultZoomLevel: 1,
  // smoothTileEdgesMinZoom: 1,
  // animationTime: 1,
  // opacity: 1,
  prefixUrl: "/openseadragon/images/",
  tileSources: [
    manifest
  ]
});
