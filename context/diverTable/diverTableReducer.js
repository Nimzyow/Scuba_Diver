import * as Types from "../../components/Types";
export default (state, action) => {
  switch (action.type) {
    case Types.SET_DEPTH:
      return {
        ...state,
        depth: action.payload
      };
    case Types.SET_BOTTOM_TIME:
      return {
        ...state,
        bottomTime: action.payload
      };
    case Types.SET_SURFACE_INTERVAL:
      return {
        ...state,
        surfaceInterval: action.payload
      };
    default:
      return state;
  }
};
