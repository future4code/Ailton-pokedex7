import { Router } from "./routes/Routes";
import GlobalState from "./components/Global/GlobalState";

function App() {
  return (
    <GlobalState>
    <Router />  
    </GlobalState>
  );
}

export default App;
