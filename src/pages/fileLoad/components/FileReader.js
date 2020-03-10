import React from "react";
import { useDispatch } from "redux-react-hook";
import CSVReader from "react-csv-reader";

import { addData as addDataAction, setFileLoad as setFileLoadAction } from "../../../redux/actions";

const papaparseOptions = {
  header: true,
  dynamicTyping: true,
  skipEmptyLines: true,
  transformHeader: header => header.toLowerCase().replace(/\W/g, "_"),
  transform: value => value.split(/,|,\s|\|/g).map(i => i.replace(/^\s+|\s+$/g,"")).filter(i => i !== ''),
  complete: () => {
    alert("Parsing complete");
  }
};

const FileReader = () => {
  const dispatch = useDispatch();

  const handleAddFile = ( data ) => {
    dispatch(addDataAction(data));
    dispatch(setFileLoadAction(true));
  };

  return (
    <div className="fileReader">
      <CSVReader
        cssClass="react-csv-input"
        label="Select downloaded abcnewsmetadata.csv in local"
        onFileLoaded={handleAddFile}
        parserOptions={papaparseOptions}
      />
    </div>
  );
};

export default FileReader;