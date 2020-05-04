const aylienApi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
    });

function SubmitHandler(event) {
    event.preventDefault()

    // check what text was put into the form field
    //  This could be where you validate the url prior to aylienApilCall
    let formText = document.getElementById('name').value;
    let url = Client.UrlValidator(formText);

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8080/test')
    .then(res => res.json())
    .then(function(res) {
        console.log(res.message);
    })

    let results = aylienApi.combined({
        "url": url,
        "endpoint": ["extract", "summarize", "sentiment"]
      }, function(err, result) {
        if (err === null) {
          let array = [];

          //  Debug log test:
          console.log(typeof result);

          result.results.forEach(function(r) {
            
            //  Debug log test:
            console.log(r.endpoint + ':');
            console.log(r.result);

            array.push(r.endpoint);
            array.push(r.result);
            return array;  
          })
        } else {
          console.log(err)
        }  
      });
    results.forEach(resultsUpdate(results));          
}

export { SubmitHandler };
