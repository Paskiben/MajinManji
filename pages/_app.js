// CSS para toda la aplicación
import "../styles/style.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Auth0Provider } from "@auth0/auth0-react";


// Codigo aqui estará presente en todas las páginas
const App = ({ Component, pageProps }) => {
return (
	<ChakraProvider>
		<Auth0Provider 
			domain="dev-bvttqp1hp3q37nxo.us.auth0.com"
			clientId="lLKXbLYsqdFJRLTPYxAAJTzBajtjOq90"
			authorizationParams={{redirect_uri: "http://localhost:3000/map"}}>      
			<Component {...pageProps} />
		</Auth0Provider>
	</ChakraProvider>
);
};

export default App;
