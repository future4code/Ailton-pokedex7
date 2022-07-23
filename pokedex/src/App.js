import { Router } from "./routes/Routes";
import GlobalState from "./components/Global/GlobalState";
import styled from "styled-components";
import Bg from './assets/img/bg.jpg'

/* const Container = styled.div`
background-image: url(${Bg});
background-size: cover;
background-position: center;
background-repeat: no-repeat;
`; */

function App() {
  return (

    <GlobalState>
    <Router />  
    </GlobalState>

  );
}

export default App;
