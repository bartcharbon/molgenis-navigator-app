# molgenis-navigator-app

user interface to navigate packages and datasets, analogous to windows explorer and mac finder

## Information for developers

* Build using vue for layout and axios for ajax requests
* Uses molgenis 2.x as backend
* Uses plain bootstrap css (only, excluding jquery) where possible
* For development you need to have a molgenis on port 8081, see npm run dev below.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080; proxy to molgenis at http://molgenis:8081 for REST api
# assumes a running molgenis to work, easy method is using docker https://github.com/molgenis/docker
# don't forget to login first at http://molgenis:8081
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how loading works, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Log of development (sorry, in Dutch)

* 2h om de layout in bootstrap op te zetten en een test set (hardcoded) te renderen met vue. Genoeg voor een mockup evaluatie. gewoon alles in de index.html, lekker snel, lekker makkelijk. Beter dan freemarker
* 4 uur voor package data retrieval, leren axios, array.map, array.filter, en mappen REST service
* 1 uur voor toevoegen basic search; loop hier tegen beperkingen API op (denk ik?) want kan alleen op hele woorden zoeken

Opmerkingen:
* erg veel moeite om de REST api te leren. Dat moet makkelijker en/of beter gedocumenteerd.
* Een paar keer gedacht: waarom niet op server op lossen. Maar eigenlijk is dit net zo makkelijk denk ik?

## Ideas / todo

* add meta data edit capability, such as 'new' and 'delete'
* verify if this also works for a restricted user (i.e. does Package and EntityType have row level permission?)
* rechts voor selected item een details box
* search also match on partial matches (MOLGENIS rest, does it allow 'like' query on substrings???)
