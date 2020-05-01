import { UrlValidator } from "./validateUrl";

const aylienApi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
    });

function SubmitHandler(event) {
    event.preventDefault()

    // check what text was put into the form field
    //  This could be where you validate the url prior to aylienApilCall
    let formText = document.getElementById('name').value;
    let url = UrlValidator(formText);

    console.log("::: Form Submitted :::")
    // Template for data flow here:
    // fetch('http://localhost:8080/test')
    // .then(res => res.json())
    // .then(function(res) {
    //     document.getElementById('results').innerHTML = res.message
    // })
    aylienApi.combined({
        "url": url,
        "endpoint": ["extract", "summarize", "sentiment"]
      }, function(err, result) {
        if (err === null) {
          let array = [];

          result.results.forEach(function(r) {
            console.log(r.endpoint + ':');
            console.log(r.result);
            array.push(r.result);
          return array;  
          })
        } else {
          console.log(err)
        }
      });
}

export { SubmitHandler }
