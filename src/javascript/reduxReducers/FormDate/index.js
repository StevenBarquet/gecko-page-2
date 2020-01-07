import { UPDATE_FORM } from 'Types/FormDate';

const INITIAL_STATE = {
  form: {}
};

export default (state = INITIAL_STATE, action) => {
  const { form } = state;
  switch (action.type) {
    case UPDATE_FORM:
      return {
        form: { ...form, ...action.payload }
      };

    default:
      return state;
  }
};
