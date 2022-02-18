const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

let manifest = process.env.MANIFEST_URL;

if (urlParams.has("manifest")) {
  manifest = urlParams.get("manifest");
}

if (urlParams.has("pid")) {
  manifest += urlParams.get("pid");
}

const viewer = OpenSeadragon({
  id: "viewer",
  showNavigator: true,
  prefixUrl: "/openseadragon/images/",
  tileSources: [manifest],
});
