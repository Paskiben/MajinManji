import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@chakra-ui/react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return <Button variant='ghost' colorScheme='teal' onClick={() => logout({ logoutParams: { returnTo:  "http://localhost:3000/map" } })}>Log Out</Button>
};

export default LogoutButton;