import React, { Component } from "react";
import ProfileSidebox from "../../../components/ProfileSidebox/ProfileSidebox";
import Posts from "../Posts/Posts";
import PopularDomains from "../../../components/PopularDomains/PopularDomains";
import CreatePost from "../../../components/CreatePost/CreatePost";
import "../Home.css";
import JobsPosted from "../../HomeJobsPosted/JobsPosted";

class LoggedIn extends Component {
  render() {
    return (
      <div className="body feedBody row">
        <div className="left col">
          <ProfileSidebox />
        </div>

        <div className="middle col">
          <JobsPosted/>
        </div>

        <div className="right col">
          <PopularDomains />
        </div>
      </div>
    );
  }
}

export default LoggedIn;
