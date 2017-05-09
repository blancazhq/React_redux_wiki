import React from 'react';
import {Link, IndexLink} from "react-router";

const AppLayout = (props) =>
<div>
  <ul>
    <li><IndexLink to="/">home</IndexLink></li>
    <li><Link to="/page/JavaLanguage">Java</Link></li>
    <li><Link to="/page/JavaScript">JavaScript</Link></li>
  </ul>
  {props.children}
</div>

export default AppLayout
