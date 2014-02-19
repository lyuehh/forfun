var qn = require('qn');
var http = require('http');
var _ = require('underscore');
var json = require('./json1.json');
var fs = require('fs');

var client = qn.create({
accessKey: '6Bk_hSs_NShtncpEdzkw14n6bMN1LhFelm_QiBZA',
secretKey: 'dmI_71rNEWTbFI-gTrBExrxN-qaJn0QbEeyOA-qF',
bucket: 'lyuehh-img',
domain: 'http://lyuehh-img.qiniudn.com',
    // timeout: 3600000, // default rpc timeout: one hour, optional
});
var length = json.length;

_.each(json, function(v, k) {
    var url = v.MiddlePicUrl.replace("160X160", "900");
    console.log(url);
/*
    http.get(url, function(res) {
        client.upload(res, {contentType: 'image/jpeg'}, function (err, result) {
          console.log(url);
            if (err) throw err;
            v.quniuPic = result.url;
            console.log(result);
          // {
          //   hash: 'FvnDEnGu6pjzxxxc5d6IlNMrbDnH',
          //   key: 'FvnDEnGu6pjzxxxc5d6IlNMrbDnH',
          //   url: 'http://qtestbucket.qiniudn.com/FvnDEnGu6pjzxxxc5d6IlNMrbDnH',
          //   "x:filename": "foo.txt",
          // }
          length--;
          if (length === 0) {
              fs.writeFileSync('./json2.json', JSON.stringify(json), {encoding: 'utf8'});
          }
      });


    }).on('error', function(e) {
      console.log("Got error: " + e.message);
    });
    */

});






