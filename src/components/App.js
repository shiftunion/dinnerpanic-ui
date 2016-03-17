import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import TopBar from './TopBar';
import LeftSidebar from './LeftSidebar';
import Content from './MainContent';
import TabPanel from './TabPanel';



const App = (props) => {
  return (
<body>
      <div className="loading"><img src="img/loading.gif" alt="loading-img"/></div>
      <TopBar/>
      <LeftSidebar/>
      <Content/>
      <TabPanel/>
</body>


  );
};


App.propTypes = {
  children: PropTypes.element
};

export default App;
