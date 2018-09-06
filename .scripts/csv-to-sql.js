var fs = require('fs');
var data = require('../city-council/data/city-council-data.json');
var values = require('object.values');

if (!Object.values) {
  values.shim();
}

fs.truncate('city-council/data/city-council-data.sql', 0, function() {
  for (var i = 0; i < data.length; i++) {
    var query = 'INSERT INTO `city-council` (`' + Object.keys(data[i]).join('`, `') + '`) VALUES ("' + Object.values(data[i]).join('", "') + '");\n';
    fs.appendFileSync('city-council/data/city-council-data.sql', query.replace(/""/g, 'null'));
  }
});