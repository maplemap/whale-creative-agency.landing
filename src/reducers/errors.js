import AppConstants from '../constants/AppConstants';

export default function errors(state = [], action) {
  switch (action.type) {

    case AppConstants.ADD_ERROR:
      return state.concat([action.error]);

    case AppConstants.REMOVE_ERROR:
      return state.filter((error, i) => i !== action.index);

    default:
      return state;
  }
}
