/* Import helper functions */
import "regenerator-runtime/runtime";
import { ResultsUpdate } from "./uiUpdate";
import { getSentiment } from "./sentimentAnalyzer";

/* Chain functions as promises */
function SubmitHandler(event) {
  event.preventDefault();

  let formText = document.getElementById("text").value;

  getSentiment("http://localhost:3000/sentiment", formText)
    .then((sentiment) => ResultsUpdate(sentiment))
    .catch((error) => {
      console.log(error);
    });
}

export { SubmitHandler };
