import Button from 'react-bootstrap/Button';
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Button onClick={() => {
      this.props.onLogout();
      return logout({ returnTo: window.location.origin })
    }}>
      Log Out
    </Button>
  );
};

export default LogoutButton;