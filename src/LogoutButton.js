import { Component } from "react";
import Button from 'react-bootstrap/Button';

class LogoutButton extends Component {

  render() {
    return (
      <Button variant="outline-primary" onClick={this.props.onLogout}>
        Log Out
      </Button>
    );
  }
};

export default LogoutButton;
