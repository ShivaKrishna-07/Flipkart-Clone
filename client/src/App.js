import { Box } from "@mui/material";
import Header from "./components/Header";
import Home from "./components/home/Home";

function App() {
  return (
    <div>
      <Header/>
      <Box style={{marginTop:64}}>
        <Home/>
      </Box>
    </div>
  );
}

export default App;
