import React from "react";
import { Link } from "react-router-dom";

class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <h2>About page</h2>
        <Link to='/home'>
          <button>Home Page</button>
        </Link>
      </div>
    );
  }
}

export default AboutPage;
