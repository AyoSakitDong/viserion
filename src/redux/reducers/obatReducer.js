import { SET_OBAT } from "../types";

const initialState = {
  listObat: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_OBAT:
      return {
        listObat: action.payload
      };
    default:
      return state;
  }
}
