# node-zipfile

Wrapper around https://github.com/cthackers/adm-zip

I also considered wrapping https://github.com/kriskowal/zip/ and https://github.com/nearinfinity/node-unzip but adm-zip seemed most actively developed.

This module was previously at C++ binding to [libzip](http://nih.at/libzip/libzip.html) for handling zipfile archives in [node](http://nodejs.org).


## Example

    var zipfile = require('zipfile');
    var zf = new zipfile.ZipFile('./test/data/world_merc.zip');
    zf
    { names: [ 'world_merc.dbf', 'world_merc.prj', 'world_merc.shp', 'world_merc.shx' ],
      count: 4 }
    var buffer = zf.readFileSync('world_merc.prj');
    buffer.toString()
    'PROJCS["Google Maps Global Mercator",GEOGCS .... '


## Installation

You can install the latest tag via npm:

    npm install 

## License

  BSD, see LICENSE.txt