import axios from "axios";
const baseNewUrl = "http://newsapi.org/v2/everything";
const abcSource = "abc-news";
const apiKey = "6faa27bb32b04c59bb7fdccd23b36c3c";

export const getNewsList = () => {
  return axios
    .get(`${baseNewUrl}?sources=${abcSource}&apiKey=${apiKey}`)
    .then(res => res.data);
};
