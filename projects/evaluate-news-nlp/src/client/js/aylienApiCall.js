aylienApi.extract({
    url: 'http://techcrunch.com/2015/04/06/john-oliver-just-changed-the-surveillance-reform-debate',
    best_image: true
  }, function(error, response) {
    if (error === null) {
      console.log(response);
    }
  });

aylienApi.summarize({
  url: 'http://techcrunch.com/2015/04/06/john-oliver-just-changed-the-surveillance-reform-debate',
  sentences_number: 3
  }, function(error, response) {
    if (error === null) {
      response.sentences.forEach(function(s) {
      console.log(s);
      });
    }
  });
  
aylienApi.sentiment({
  //  Can I use the url property instead of text?  
  text: '',
  mode: 'document'
}, function(error, response) {
  if (error === null) {
    console.log(response);
  }
});  


//  Combine all the above calls into this one
textapi.combined({
    "url": "http://www.bbc.com/news/technology-33764155",
    "endpoint": ["entities", "concepts", "classify"]
  }, function(err, result) {
    if (err === null) {
      result.results.forEach(function(r) {
        console.log(r.endpoint + ':');
        console.log(r.result);
      });
    } else {
      console.log(err)
    }
  });

