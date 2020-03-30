import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navigator extends Component {
  render() {
    return (
      <nav>
        <Link to="/home">Home</Link><br />
        <Link to="/project">Project</Link><br />
        <Link to="/friend">Friend</Link><br />
        <Link to="/facehub">FaceHUB</Link><br />
      </nav>
    )
  }
}
