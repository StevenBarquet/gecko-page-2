import { UPDATE_FORM } from 'Types/FormDate';

export const addInput = object => dispatch => {
  console.log('entro change flag con: ', object);

  dispatch({
    type: UPDATE_FORM,
    payload: object
  });
};
