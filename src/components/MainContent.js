import React, { PropTypes } from 'react';
import { Link } from 'react-router';

// Since this component is simple and static, there's no parent container for it.
const MainContent = () => {
  return (
    <div className="content">

      {/*<!-- Start Page Header -->*/}
      <div className="page-header">
        <h1 className="title">Blank Page</h1>
        <ol className="breadcrumb">
          <li><a href="index.html">Dashboard</a></li>
          <li><a href="#">Extra Pages</a></li>
          <li className="active">Blank Page</li>
        </ol>

        {/*<!-- Start Page Header Right Div -->*/}
        <div className="right">
          <div className="btn-group" role="group" aria-label="...">
            <a href="index.html" className="btn btn-light">Dashboard</a>
            <a href="#" className="btn btn-light"><i className="fa fa-refresh"></i></a>
            <a href="#" className="btn btn-light"><i className="fa fa-search"></i></a>
            <a href="#" className="btn btn-light" id="topstats"><i className="fa fa-line-chart"></i></a>
          </div>
        </div>
        {/*<!-- End Page Header Right Div -->*/}

      </div>
      {/*<!-- End Page Header -->*/}

      {/*<!-- //////////////////////////////////////////////////////////////////////////// -->*/}
      {/*<!-- START CONTAINER -->*/}
      <div className="container-default">


        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
        <br />


      </div>
      {/* <!-- END CONTAINER --> */}
      {/*<!-- //////////////////////////////////////////////////////////////////////////// -->*/}


      {/* <!-- Start Footer --> */}
      <div className="row footer">
        <div className="col-md-6 text-left">
          Copyright © 2015 <a href="http://themeforest.net/user/egemem/portfolio" target="_blank">Egemem</a> All rights
          reserved.
        </div>
        <div className="col-md-6 text-right">
          Design and Developed by <a href="http://themeforest.net/user/egemem/portfolio" target="_blank">Egemem</a>
        </div>
      </div>
      {/* <!-- End Footer --> */
      }


    </div>
  );
};

export default MainContent;
