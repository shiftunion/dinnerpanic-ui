import React, {PropTypes} from "react";

// Since this component is simple and static, there's no parent container for it.
const TopBar = () => {
  return (
    <div id="top" className="clearfix">

      {/* <!-- Start App Logo --> */}
      <div className="applogo">
        <a href="index.html" className="logo">dpanic</a>
      </div>
      {/* <!-- End App Logo -->*/}

      {/*<!-- Start Sidebar Show Hide Button -->*/}
      <a href="#" className="sidebar-open-button"><i className="fa fa-bars"></i></a>
      <a href="#" className="sidebar-open-button-mobile"><i className="fa fa-bars"></i></a>
      {/* <!-- End Sidebar Show Hide Button -->*/}

      {/* <!-- Start Searchbox -->*/}
      <form className="searchform">
        <input type="text" className="searchbox" id="searchbox" placeholder="Search"/>
        <span className="searchbutton"><i className="fa fa-search"/></span>
      </form>
      {/* <!-- End Searchbox -->*/}

      {/* <!-- Start Top Menu -->*/}
      <ul className="topmenu">
        <li><a href="#">Files</a></li>
        <li><a href="#">Authors</a></li>
        <li className="dropdown">
          <a href="#" data-toggle="dropdown" className="dropdown-toggle">My Files <span className="caret"></span></a>
          <ul className="dropdown-menu">
            <li><a href="#">Videos</a></li>
            <li><a href="#">Pictures</a></li>
            <li><a href="#">Blog Posts</a></li>
          </ul>
        </li>
      </ul>
      {/* <!-- End Top Menu -->*/}

      {/* <!-- Start Sidepanel Show-Hide Button -->*/}
      <a href="#sidepanel" className="sidepanel-open-button"><i className="fa fa-outdent"></i></a>
      {/* <!-- End Sidepanel Show-Hide Button -->*/}

      {/* <!-- Start Top Right -->*/}
      <ul className="top-right">

        <li className="dropdown link">
          <a href="#" data-toggle="dropdown" className="dropdown-toggle hdbutton">Create New <span
            className="caret"></span></a>
          <ul className="dropdown-menu dropdown-menu-list">
            <li><a href="#"><i className="fa falist fa-paper-plane-o"></i>Product or Item</a></li>
            <li><a href="#"><i className="fa falist fa-font"></i>Blog Post</a></li>
            <li><a href="#"><i className="fa falist fa-file-image-o"></i>Image Gallery</a></li>
            <li><a href="#"><i className="fa falist fa-file-video-o"></i>Video Gallery</a></li>
          </ul>
        </li>

        <li className="link">
          <a href="#" className="notifications">6</a>
        </li>

        <li className="dropdown link">
          <a href="#" data-toggle="dropdown" className="dropdown-toggle profilebox"><img src="img/profileimg.png"
                                                                                         alt="img"/><b>Jonathan Doe</b>
            <span className="caret">&nbsp;</span>
          </a>
          <ul className="dropdown-menu dropdown-menu-list dropdown-menu-right">
            <li role="presentation" className="dropdown-header">Profile</li>
            <li><a href="#"><i className="fa falist fa-inbox"></i>Inbox<span className="badge label-danger">4</span></a>
            </li>
            <li><a href="#"><i className="fa falist fa-file-o"></i>Files</a></li>
            <li><a href="#"><i className="fa falist fa-wrench"></i>Settings</a></li>
            <li className="divider"></li>
            <li><a href="#"><i className="fa falist fa-lock"></i> Lockscreen</a></li>
            <li><a href="#"><i className="fa falist fa-power-off"></i> Logout</a></li>
          </ul>
        </li>

      </ul>
      {/* <!-- End Top Right -->*/}

    </div>
  );
};

export default TopBar;
