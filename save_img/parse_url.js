
var http = require('http');
var _ = require('underscore');
var json = require('./json1.json');
var fs = require('fs');

var f = fs.readFileSync('b.txt', 'utf8');
var f_arr = f.split('\n');
var arr = f_arr.map(function(i) {
    return i.split(' ');
});
// console.log(arr);

_.each(json, function(j) {
    // "MiddlePicUrl": "http://img31.mtime.cn/CMS/Gallery/2014/02/13/093832.86714722_160X160.jpg"
    var u = j.MiddlePicUrl.replace('160X160', '900');
    var name = u.split('/')[8];
    var u = _.filter(arr, function(a) {
        return a[0] === name;
    });
    var aa;
    if (u[0] && u[0][1]) {
        aa = u[0][1]
    } else {
        console.log(j);
    }
    // console.log(aa);
    j.quniuPic = aa;

    //fs.writeFileSync('./json2.json', JSON.stringify(json, null, 2), {encoding: 'utf8'});
});

