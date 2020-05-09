import 'regenerator-runtime/runtime';
import { SubmitHandler } from './js/formHandler';
import { ResultsUpdate} from './js/uiUpdate';
import { getSentiment } from './js/sentimentAnalyzer';

import './styles/resets.scss';
import './styles/header.scss';
import './styles/form.scss';
import './styles/footer.scss';
import './styles/base.scss';

export {
    SubmitHandler,
    ResultsUpdate,
    getSentiment
};
