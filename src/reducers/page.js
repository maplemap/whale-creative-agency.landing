import AppConstants from '../constants/AppConstants';

const initialState = {
  currentSection: []
};

export default function errors(state = initialState, action) {
  switch (action.type) {
    case AppConstants.SET_CURRENT_SECTION:
      return { ...state, ...action.payload };

    default:
      return state;
  }
}
