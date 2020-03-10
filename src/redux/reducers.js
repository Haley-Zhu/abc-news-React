const initialState = {
  data: [],
  typeListDataForBar: [],
  isSetTypeListDataForBar: false,
  isFileLoad: false
};

const reducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case "ADD_DATA":
      newState = {
        ...state,
        data: action.data
      };
      break;
    case "ADD_TYPELISTDATAFORBAR":
      newState = {
        ...state,
        typeListDataForBar: action.typeListDataForBar
      };
      break;
    case "SET_TYPELISTDATAFORBAR":
      newState = {
        ...state,
        isSetTypeListDataForBar: action.isSetTypeListDataForBar
      };
      break;
      case "SET_FILELOAD":
      newState = {
        ...state,
        isFileLoad: action.isFileLoad
      };
      break;
    default:
      newState = state;
      break;
  }

  return newState;
};
export default reducer;
