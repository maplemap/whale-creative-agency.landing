import AppConstants from '../constants/AppConstants';

export default {
  setCurrentSection(currentSection) {
    return (dispatch) => {
      dispatch({
        type: AppConstants.SET_CURRENT_SECTION,
        payload: {
          currentSection
        }
      });
    };
  },

  setLocale(lang) {
    return (dispatch) => {
      dispatch({
        type: AppConstants.SET_LOCALE,
        payload: {
          language: lang
        }
      });
    };
  }
};
