# openseadragon-client

## Development

```bash
npm install
npm start
```

```
http://localhost:4200?manifest=[IIIF Image Manifest]
```

## Docker

```bash
npm install
docker build -t openseadragon-client .
docker run -p 8080:80 openseadragon-client
```

```
http://localhost:8080?manifest=[IIIF Image Manifest]
```
