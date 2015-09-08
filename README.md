Small utility library that helps one to build memory hash with desired data from GeoNames.

data used: http://download.geonames.org/export/zip/US.zip

how to use:
```javascript
var index = require('geonames-us-util')('postal', ['county', 'county_code']);
console.log(index[33445]);
// { county: 'Palm Beach', county_code: '099' }
```

OR
```javascript
var index = require('geonames-us-util')('postal');
console.log(index[33445]);
/*
{ country: 'US',
  postal: '33445',
  place: 'Delray Beach',
  state: 'Florida',
  state_code: 'FL',
  county: 'Palm Beach',
  county_code: '099',
  community: '',
  community_code: '',
  latitude: '26.4564',
  longitude: '-80.1054',
  accuracy: '' }
*/
```
