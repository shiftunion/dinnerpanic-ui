import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';
import {bindActionCreators} from 'redux';
import LeftMenuItem from './../components/menu/LeftMenuItem';
import LeftMenuItemWithSub from './../components/menu/LeftMenuItemWithSub';


class LeftSidebar extends React.Component {

  render() {

    let lhsMenu = this.props.menu;
    return (

      <div className="sidebar clearfix">

        <ul className="sidebar-panel nav">

          {[...lhsMenu["menu"]].map((x, i) =>
            x.submenu != null ?
              <LeftMenuItemWithSub toogleMenuVisibility={this.props.actions.toogleMenuVisibility}
                                   key={x.id}
                                   displayText={x.value}
                                   count={3}
                                   route={x.id}
                                   subMenuItems={x.submenu}/> :
              <LeftMenuItem key={x.id}
                            displayText={x.value}
                            count={3}
                            route={x.id}/>
          )}

        </ul>
      </div>
    );
  }

}

/* Magic function 1 */
const mapStateToProps = (state) => {
  return {menu: state.menuAppState};
};

/* Magic function 2 */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftSidebar);
