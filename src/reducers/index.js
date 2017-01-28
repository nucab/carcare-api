import { combineReducers } from 'redux';

import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import flashMessages from './flashMessages';

const rootReducer = combineReducers({
  courses,
  authors,
  ajaxCallsInProgress,
  flashMessages
});

export default rootReducer;
