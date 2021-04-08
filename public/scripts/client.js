const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

var manifest = "";

if (urlParams.has('manifest')) {
  manifest = urlParams.get('manifest');
}

const viewer = OpenSeadragon({
  id: "viewer",
  showNavigator:  true,
  prefixUrl: "/openseadragon/images/",
  tileSources: [
    manifest
  ]
});
