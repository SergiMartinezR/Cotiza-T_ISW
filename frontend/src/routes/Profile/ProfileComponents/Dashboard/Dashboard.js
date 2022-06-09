import React, { Component } from "react";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";
import axios from "../../../../API/baseURL/baseURL";
import "./Dashboard.css";

// const dashBoardData = {
//   views: 80,
//   views2: 237,
//   views3: 24,
// };

class Dashboard extends Component {
  state = {
    isLoading: true,
    profViews: null,
    numPosts: null,
    numBookmark: null,
    redirect: null,
  };

  componentDidMount() {
    let token = localStorage.getItem("accessToken");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    let profId = localStorage.getItem("profileID");
    axios
      .get(`/user/profile/dashboard/${profId}/`, config)
      .then((res) => {
        console.log(res);
        this.setState({
          isLoading: false,
          profViews: res.data.profile_views,
          numPosts: res.data.no_of_articles,
          numBookmark: res.data.bookmarked_posts,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <>
          <Skeleton width={170} height={18} />
          <br />
          <Skeleton style={{ marginTop: "14px" }} width={100} height={13} />

          <div className="dashboardBox">
            <div style={{ borderRight: "#ccc 1px solid" }}>
              <Skeleton height={35} width={40} />
              <Skeleton style={{ marginTop: "18px" }} height={13} width={80} />
            </div>
            <div style={{ borderRight: "#ccc 1px solid" }}>
              <Skeleton height={35} width={40} />
              <Skeleton style={{ marginTop: "18px" }} height={13} width={80} />
            </div>
            <div>
              <Skeleton height={35} width={40} />
              <Skeleton style={{ marginTop: "18px" }} height={13} width={80} />
            </div>
          </div>
        </>
      );
    }

    return (
      <>
        <h5 className="profStrength">Tu Perfil</h5>
        <h6>
          <i>Solo t&uacute; lo puedes ver</i>
        </h6>
        <div className="dashboardBox">
          <div style={{ borderRight: "#ccc 1px solid" }}>
            <h5>{this.state.profViews}</h5>
            <h6>Gente que vi&oacute; tu perfil</h6>
          </div>
          <div style={{ borderRight: "#ccc 1px solid" }}>
            <NavLink to="/MyPosts">
              <h5>{this.state.numPosts}</h5>
            </NavLink>
            <h6>Empleos publicados</h6>
          </div>
          <div>
            <NavLink to="/savedPosts">
              <h5>{this.state.numBookmark}</h5>
            </NavLink>
            <h6>Publicaciones guardadas</h6>
          </div>
        </div>
      </>
    );
  }
}

export default Dashboard;
