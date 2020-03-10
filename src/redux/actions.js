export const addData = data => ({
  data,
  type: 'ADD_DATA',
})

export const addTypeListDataForBar = typeListDataForBar => ({
  typeListDataForBar,
  type: 'ADD_TYPELISTDATAFORBAR',
})

export const setTypeListDataForBar = isSetTypeListDataForBar => ({
  isSetTypeListDataForBar,
  type: 'SET_TYPELISTDATAFORBAR',
})

export const setFileLoad = isFileLoad => ({
  isFileLoad,
  type: 'SET_FILELOAD',
})