import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Charts from "../pages/chart/Charts";
import FileLoad from "../pages/fileLoad/FileLoad";
import News from "../pages/news/News";
import NewsMeta from "../pages/newsMeta/NewsMeta";
import About from "../pages/about/About";

import {
  CHART_BASE_URL,
  NEWS_BASE_URL,
  NEWSMETA_BASE_URL,
  FILELOAD_BASE_URL,
  ABOUT_BASE_URL
} from "./URLMap";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to={ABOUT_BASE_URL} />} />
      <Route exact path={CHART_BASE_URL} component={Charts} />
      <Route exact path={NEWS_BASE_URL} component={News} />
      <Route exact path={NEWSMETA_BASE_URL} component={NewsMeta} />
      <Route exact path={FILELOAD_BASE_URL} component={FileLoad} />
      <Route exact path={ABOUT_BASE_URL} component={About} />
    </Switch>
  );
};

export default Routes;
