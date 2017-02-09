import AppConstants from '../constants/AppConstants';

export default {
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
