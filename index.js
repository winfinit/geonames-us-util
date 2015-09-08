exports = module.exports = buildIndex;

fs = require('fs')

function buildIndex(key, value) {
	if ( ! key ) {
		console.error('Key must be specified');
		return;
	}

	var index = {};
	var data = fs.readFileSync(__dirname + '/US.txt').toString();
		data.split("\n").forEach(function(line) {
			var res = line.split("\t");
			if ( res[0] ) {
				var obj = {
					country: res[0],
					postal: res[1],
					place: res[2],
					state: res[3],
					state_code: res[4],
					county: res[5],
					county_code: res[6],
					community: res[7],
					community_code: res[8],
					latitude: res[9],
					longitude: res[10],
					accuracy: res[11]
				}; 
				if ( value ) {
					if ( Array.isArray(value) ) {
						var temp_obj = {};
						value.forEach(function(keep) {
							temp_obj[keep] = obj[keep];
						});
						index[obj[key]] = temp_obj;
					} else {
						index[obj[key]] = obj[value];
					}
				} else {
					index[obj[key]] = obj;
				}
	
			}
		});
	return index;

}



/*
country code      : iso country code, 2 characters
postal code       : varchar(20)
place name        : varchar(180)
admin name1       : 1. order subdivision (state) varchar(100)
admin code1       : 1. order subdivision (state) varchar(20)
admin name2       : 2. order subdivision (county/province) varchar(100)
admin code2       : 2. order subdivision (county/province) varchar(20)
admin name3       : 3. order subdivision (community) varchar(100)
admin code3       : 3. order subdivision (community) varchar(20)
latitude          : estimated latitude (wgs84)
longitude         : estimated longitude (wgs84)
accuracy          : accuracy of lat/lng from 1=estimated to 6=centroid
*/
