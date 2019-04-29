# Plan Ahead API
This is the api server for [Plan Ahead](https://github.com/zooshme/planahead-api). 

It is hosted at [api.planahead.app](https://api.planahead.app)

To run it locally:
* clone the repo 
* `cd` into the cloned folder
* `npm install` the dependencies
* `export OPEN_WEATHER_MAP_TOKEN=<your-open-weather-map-api-token>`
* `npm start`

At the moment the api only searches weather by city. Provide `city` and `country` as params. Example: [https://api.planahead.app?city=Glasgow&country=uk](https://api.planahead.app?city=Glasgow&country=uk)