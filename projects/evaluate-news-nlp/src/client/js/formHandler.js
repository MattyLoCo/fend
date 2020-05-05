import { ResultsUpdate } from './uiUpdate';
import { UrlValidator } from './validateUrl';

function SubmitHandler(event) {
    event.preventDefault();

    let formText = document.getElementById('name').value;
    let url = UrlValidator(formText);

    fetch('http://localhost:3000/api', {
        method: 'POST',       
        body: JSON.stringify({url}),
        headers: {'Content-Type': 'application/json'}
    })
    .then((res)=> res.json())
    .then((reply) => console.log(typeof reply))
    .then((reply) => ResultsUpdate(reply))
    .catch((error) => {
        console.log(error);
    });
}

export { SubmitHandler };
