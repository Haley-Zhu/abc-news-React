import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import {
  CHART_BASE_URL,
  NEWS_BASE_URL,
  NEWSMETA_BASE_URL,
  FILELOAD_BASE_URL,
  ABOUT_BASE_URL
} from "../routes/URLMap";

import "./styles/topNav.scss";

const generateLinkClass = (to, currentPath) => {
  const navItemClass = "nav-item";
  const isActive = to === currentPath;

  if (isActive) return `${navItemClass} nav-item--active`;

  return navItemClass;
};

const TopNav = ({ location }) => {
  const currentPath = location.pathname;

  return (
    <nav className="nav-bar">
      <Link
        className={generateLinkClass(NEWS_BASE_URL, currentPath)}
        to={NEWS_BASE_URL}
      >
        News
      </Link>
      <Link
        className={generateLinkClass(NEWSMETA_BASE_URL, currentPath)}
        to={NEWSMETA_BASE_URL}
      >
        NewsMeta
      </Link>
      <Link
        className={generateLinkClass(CHART_BASE_URL, currentPath)}
        to={CHART_BASE_URL}
      >
        Charts
      </Link>
      <Link
        className={generateLinkClass(FILELOAD_BASE_URL, currentPath)}
        to={FILELOAD_BASE_URL}
      >
        FileLoad
      </Link>
      <Link
        className={generateLinkClass(ABOUT_BASE_URL, currentPath)}
        to={ABOUT_BASE_URL}
      >
        About
      </Link>
    </nav>
  );
};

export default withRouter(TopNav);
