import { ResultsUpdate } from './uiUpdate';
import { UrlValidator } from './validateUrl';

function SubmitHandler(event) {
    event.preventDefault();

    let formText = document.getElementById('webAddress').value;
    let url = UrlValidator(formText);

    fetch('http://localhost:3000/api', {
        method: 'POST',       
        body: JSON.stringify({url}),
        headers: {'Content-Type': 'application/json'}
    })
    .then((reply)=> reply.json())
    .then((reply) => {
        console.log(typeof reply);
        let objectReply = JSON.parse(reply);
        ResultsUpdate(objectReply);
    })    
    .catch((error) => {
        console.log(error);
    });
}

export { SubmitHandler };
