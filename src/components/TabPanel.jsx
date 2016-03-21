import React, { PropTypes } from 'react';
import { Link } from 'react-router';

// Since this component is simple and static, there's no parent container for it.
const TabPanel = () => {
  return (
    <div role="tabpanel" className="sidepanel">

      {/*<!-- Nav tabs -->*/}
      <ul className="nav nav-tabs" role="tablist">
        <li role="presentation" className="active"><a href="#today" aria-controls="today" role="tab" data-toggle="tab">TODAY</a></li>
        <li role="presentation"><a href="#tasks" aria-controls="tasks" role="tab" data-toggle="tab">TASKS</a></li>
        <li role="presentation"><a href="#chat" aria-controls="chat" role="tab" data-toggle="tab">CHAT</a></li>
      </ul>

      {/*<!-- Tab panes -->*/}
      <div className="tab-content">

        {/*<!-- Start Today -->*/}
        <div role="tabpanel" className="tab-pane active" id="today">

          <div className="sidepanel-m-title">
            Today
            <span className="left-icon"><a href="#"><i className="fa fa-refresh"></i></a></span>
            <span className="right-icon"><a href="#"><i className="fa fa-file-o"></i></a></span>
          </div>

          <div className="gn-title">NEW</div>

          <ul className="list-w-title">
            <li>
              <a href="#">
                <span className="label label-danger">ORDER</span>
                <span className="date">9 hours ago</span>
                <h4>New Jacket 2.0</h4>
                Etiam auctor porta augue sit amet facilisis. Sed libero nisi, scelerisque.
              </a>
            </li>
            <li>
              <a href="#">
                <span className="label label-success">COMMENT</span>
                <span className="date">14 hours ago</span>
                <h4>Bill Jackson</h4>
                Etiam auctor porta augue sit amet facilisis. Sed libero nisi, scelerisque.
              </a>
            </li>
            <li>
              <a href="#">
                <span className="label label-info">MEETING</span>
                <span className="date">at 2:30 PM</span>
                <h4>Developer Team</h4>
                Etiam auctor porta augue sit amet facilisis. Sed libero nisi, scelerisque.
              </a>
            </li>
            <li>
              <a href="#">
                <span className="label label-warning">EVENT</span>
                <span className="date">3 days left</span>
                <h4>Birthday Party</h4>
                Etiam auctor porta augue sit amet facilisis. Sed libero nisi, scelerisque.
              </a>
            </li>
          </ul>

        </div>
        {/*<!-- End Today -->*/}

        {/*<!-- Start Tasks -->*/}
        <div role="tabpanel" className="tab-pane" id="tasks">

          <div className="sidepanel-m-title">
            To-do List
            <span className="left-icon"><a href="#"><i className="fa fa-pencil"></i></a></span>
            <span className="right-icon"><a href="#"><i className="fa fa-trash"></i></a></span>
          </div>

          <div className="gn-title">TODAY</div>

          <ul className="todo-list">
            <li className="checkbox checkbox-primary">
              <input id="checkboxside1" type="checkbox"/><label htmlFor="checkboxside1">Add new products</label>
            </li>

            <li className="checkbox checkbox-primary">
              <input id="checkboxside2" type="checkbox"/><label htmlFor="checkboxside2"><b>May 12, 6:30 pm</b> Meeting with Team</label>
            </li>

            <li className="checkbox checkbox-warning">
              <input id="checkboxside3" type="checkbox"/><label htmlFor="checkboxside3">Design Facebook page</label>
            </li>

            <li className="checkbox checkbox-info">
              <input id="checkboxside4" type="checkbox"/><label htmlFor="checkboxside4">Send Invoice to customers</label>
            </li>

            <li className="checkbox checkbox-danger">
              <input id="checkboxside5" type="checkbox"/><label htmlFor="checkboxside5">Meeting with developer team</label>
            </li>
          </ul>

          <div className="gn-title">TOMORROW</div>
          <ul className="todo-list">
            <li className="checkbox checkbox-warning">
              <input id="checkboxside6" type="checkbox"/><label htmlFor="checkboxside6">Redesign our company blog</label>
            </li>

            <li className="checkbox checkbox-success">
              <input id="checkboxside7" type="checkbox"/><label htmlFor="checkboxside7">Finish client work</label>
            </li>

            <li className="checkbox checkbox-info">
              <input id="checkboxside8" type="checkbox"/><label htmlFor="checkboxside8">Call Johnny from Developer Team</label>
            </li>

          </ul>
        </div>
        {/* <!-- End Tasks -->*/}

        {/*<!-- Start Chat -->*/}
        <div role="tabpanel" className="tab-pane" id="chat">

          <div className="sidepanel-m-title">
            Friend List
            <span className="left-icon"><a href="#"><i className="fa fa-pencil"></i></a></span>
            <span className="right-icon"><a href="#"><i className="fa fa-trash"></i></a></span>
          </div>

          <div className="gn-title">ONLINE MEMBERS (3)</div>
          <ul className="group">
            <li className="member"><a href="#"><img src="img/profileimg.png" alt="img"/><b>Allice Mingham</b>Los Angeles</a><span className="status online"></span></li>
            <li className="member"><a href="#"><img src="img/profileimg2.png" alt="img"/><b>James Throwing</b>Las Vegas</a><span className="status busy"></span></li>
            <li className="member"><a href="#"><img src="img/profileimg3.png" alt="img"/><b>Fred Stonefield</b>New York</a><span className="status away"></span></li>
            <li className="member"><a href="#"><img src="img/profileimg4.png" alt="img"/><b>Chris M. Johnson</b>California</a><span className="status online"></span></li>
          </ul>

          <div className="gn-title">OFFLINE MEMBERS (8)</div>
          <ul className="group">
            <li className="member"><a href="#"><img src="img/profileimg5.png" alt="img"/><b>Allice Mingham</b>Los Angeles</a><span className="status offline"></span></li>
            <li className="member"><a href="#"><img src="img/profileimg6.png" alt="img"/><b>James Throwing</b>Las Vegas</a><span className="status offline"></span></li>
          </ul>

          <form className="search">
            <input type="text" className="form-control" placeholder="Search a Friend..."/>
          </form>
        </div>
        {/*<!-- End Chat -->*/}

      </div>

    </div>
  );
};

export default TabPanel;
