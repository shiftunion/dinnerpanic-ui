import React, {PropTypes} from 'react';
import TopBar from './TopBar';
import LeftSidebar from './menu/LeftSidebar';
import MainContent from './MainContent';
import TabPanel from './TabPanel';
import {RouteHandler} from 'react-router';


class App extends React.Component {
  static propTypes = {
    content: PropTypes.object.isRequired,
    sidebar: PropTypes.object.isRequired
  };

  render() {

    const {content, sidebar} = this.props;

    return (

      <div>
        <TopBar/>
        <LeftSidebar />
        {content || <MainContent />}
        <TabPanel/>
      </div>
    );

  }
}


App.propTypes = {
  children: PropTypes.element
};

export default App;
