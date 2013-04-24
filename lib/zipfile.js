var AdmZip = require('adm-zip');

exports.version = require('../package').version;

var ZipFile = function(name) {
    this.names = [];
    this.zip = new AdmZip(name);

    var zipEntries = this.zip.getEntries();

    var that = this;
    zipEntries.forEach(function(zipEntry) {
        that.names.push(zipEntry.entryName);
    });
    this.count = this.names.length;
}

ZipFile.prototype.readFileSync = function(name) {
    console.log(this.zip.getEntry(name))
    return this.zip.readFile(this.zip.getEntry(name));
}

ZipFile.prototype.readFile = function(name,cb) {
    this.zip.readFileAsync(this.zip.getEntry(name),function(buffer) {
        return cb(null,buffer);
    });
}



exports.ZipFile = ZipFile;
