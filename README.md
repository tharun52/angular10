# Angular 10 Application

<img src="/screenshots/Angular10-Application-Homepage.JPG" />

--------------------------------------------------------------

<img src="/screenshots/Angular10-Application-Bootstrap.JPG" />

--------------------------------------------------------------

<img src="/screenshots/Angular10-Application-Services.JPG" />

--------------------------------------------------------------

### Front-end : What's included
> Dependencies
- [x] Angular : 10.0.9
- [x] Angular CLI : 10.0.6
- [x] Angular Universal : 10.0.2
- [x] Bootstrap : 4.5.2
- [x] Fontawesome : 5.14.0
- [x] jquery : 3.5.1

> Features
- [x] Routing
- [x] Lazy Loading
- [x] Server Side Rendering
- [x] Progressive Web App
- [x] Responsive Layout
- [x] Search Engine Optimization (SEO)
- [x] Components
- [x] Services
- [x] inheritance
- [x] Search / Grid / Pagination
- [x] Leaflet open-source JavaScript library

### Back-end : What's included
> Dependencies
- [x] Node.js : 12.18.1
- [x] Express.js : 4.17.1
- [x] pg-promise : 10.5.7

> Features
- [x] PostgreSQL 
- [x] Database Creation
- [x] Domains Creation
- [x] Tables Creation
- [x] Importing Data
- [x] Exporting Data
- [x] RESTful API 


## Quick start

```bash
# clone the repo
git clone https://github.com/ganatan/Angular10-Application.git

# change directory
cd Angular10-Application

# install the repo with npm
npm install

# start the server
npm start

```
In your browser go to http://localhost:4200


### Settings
* you can select one of these Datasources

* Change settings in src/app/modules/application/movies-images-list
* File config/config.service.ts
* default: LOCAL JSON
* LOCAL REST API CRUD : http://localhost:5200

### Tests
* `npm run lint`
* `npm run test`
* `npm run e2e` 

### Compilation
* `npm run build`       ( without SSR)
* `npm run build:ssr`   ( with SSR)

### Production
* `npm run serve:ssr`
* In your browser http://localhost:4000

### Prototype Bootstrap
* `change directory` cd ui
* launch html pages in your browser

### Database Creation
* `change login and password for postgreSQL in file config.json`
* `login":"postgres"`
* `password":"your_password"`

* `npm run app` (Database Creation)

### Developpement
* `npm run start`
* In your browser http://localhost:5200