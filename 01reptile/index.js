var request = require("request");
var fs = require("fs");
var cheerio = require("cheerio");

request({
    url: "url",
    method: "GET"
}, function(e,r,b) {
    if(e) {return;}

    var $ = cheerio.load(b);
    var result = [];
    var title = $("div.recent-work-inner>h3");
    for(var i=0;i<title.length;i++) {
        result.push($(title[i]).text());
    }
    console.log(JSON.stringify(result));
    // fs.writeFileSync("result.json", JSON.stringify(result));
});