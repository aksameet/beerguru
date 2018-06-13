
# Project guiding principles

## General
- Project API: https://punkapi.com/documentation/v2
- Loader or spinner required at all time something is being fetched
- Responsive Web Design
- Should be run only by *npm install* & *npm start*

## Listing view
- 20 beers on first load
- Each beer on the list display: name, image, tagline
- Bigger devices: 3 columns grid, smaller: 1 column
- Apply infinite scroll
- Info about reaching the end of the list

## Details view
- Details view should be a modal accessible by clicking on any item
- Modal to contain: name, tagline, description, image, brewer_tips, ibu, abv
- Additionally modal should also list up to 3 similar beers (filter by API variables: IBU/ABV/EBC)
