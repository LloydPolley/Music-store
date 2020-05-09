import React, { } from "react";
import { Link } from "react-router-dom";

import '../widgets.scss';

const LargeWidget = props => {
  return (
    <div className="widget__large">
      <Link to={`/${props.link}`}>
        <h1>{props.section}</h1>
      </Link>
    </div>
  );
};

export default LargeWidget;
