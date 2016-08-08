var request = require('request');
var cheerio = require('cheerio');
var corpus = {
  indigo: [],
  audible: [],
  overdrive: []
};
corpus.indigo[84] = [true];

// request('https://www.chapters.indigo.ca/en-ca/books/audiobooks/', function (err,res,body) {
//   if (!err) {
//     var count = 0;
//     cheerio.load(body)('.product-title').each(function(i,j) {
//       var title = cheerio.load(body)(j).text();
//       var link = 'https://www.chapters.indigo.ca' + cheerio.load(body)('a',this).attr("href");
//         request(link, function (err, res, body) {
//           if (!err) {
//             cheerio.load(body)('html').each(function (index,j) {
//               var author = cheerio.load(body)('a.item-page__contributor-link',this).text();
//               var summary = cheerio.load(body)('div.item-page__item-description',this).text();

//               corpus.indigo[i] = [i+1, title, author, summary];
//               if (corpus.indigo.every(x => x != undefined) ) console.log(corpus.indigo)  //WHY?? !!x[0] is false

//               // count++;
//               // if (count >= 84) console.log(corpus.indigo);
              
//             })
//           } else {
//             console.log(err);
//           };
//         });
//       //console.log(corpus.indigo)
//     })
//   } else {
//     console.log(err);
//   };
// });

//OVERDRIVE GENERATES A SEARCH PATH AND THEN DELETES IT AFTER USE 
// request("http://toronto.lib.overdrive.com/5E1EC2C3-C4D6-4B16-9335-DE475C726563/10/50/en/SearchResults.htm?SearchID=53831579s&SortBy=CollDate", function (err, res, body) {
//   if (!err) {
//     cheerio.load(body)('html').each(function (i, j) {
//       var title = cheerio.load(body)('a.tc-title').text();
//       console.log(title)
//     })
//   } else {
//     console.log("We’ve encountered an error: " + error);
//   }
// });

//RARES: there must be something wrong
request('http://www.audible.com/newreleases/ref=a_mn_mt_ano_c26_carouselHeader?ie=UTF8&pf_rd_r=0AZSVE7W9NQS3DXSA8Y5&pf_rd_m=A2ZO8JX97D5MN9&pf_rd_t=101&pf_rd_i=anon-hp-redirect-mt&pf_rd_p=2564306222&pf_rd_s=center-26', function (err, res, body) {
  if (!err) {
    cheerio.load(body)('li.adbl-result-item').each(function (i, j) {
      var title = cheerio.load(body)('.adbl-prod-title a.adbl-link', this).text().replace(/^\s+|\s+$/g, "");
      var author = cheerio.load(body)('span.adbl-prod-author a.adbl-link', this).text().replace(/^\s+|\s+$/g, '');
      var img = cheerio.load(body)('div.adbl-prod-image-sample-cont img.adbl-prod-image').attr('src')
      console.log(i + " " +author)
    })
  } else {
    console.log(err);
  };
});