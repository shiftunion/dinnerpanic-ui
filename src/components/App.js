import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import TopBar from './TopBar';
import LeftSidebar from './menu/LeftSidebar';
import MainContent from './MainContent';
import TabPanel from './TabPanel';
import {RouteHandler} from 'react-router';


class App extends React.Component {
  render() {
    const { content } = this.props;

    return (
      <body>
    
      <TopBar/>
      <LeftSidebar/>
      {content || <MainContent />}
      <TabPanel/>
      </body>
    );

  }
}


/*App.propTypes = {
  children: PropTypes.element
};*/

export default App;
