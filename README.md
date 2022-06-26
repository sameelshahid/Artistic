# Artistic using Bandsintown API
By Sameel Shahid

Example application written in [next.js](https://github.com/zeit/next.js/) that makes use of [bandsintown API](https://app.swaggerhub.com/apis/Bandsintown/PublicAPI/3.0.0).

*Each search request is sent directly to bandsintown url to first fetch the Artist, Then by clicking on the artist card, Another request is sent to get the events of the Artist.*

## Getting Started

### ___With Docker___
- This is a containerized application that will run on Docker.

- To start the project, run the following commands:


```sh
docker build -t frontend . 
# then
docker run -p 3000:3000 frontend 
```
### ___Without Docker___

#### Before calling any npm script, install all dependencies

```
npm install
```

#### To run all tests
```
npm run test
```

#### To run application in development mode
```
npm run dev
```

#### To run application in production mode
```
npm run build
npm run start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
