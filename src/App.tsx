import "./App.css";
import { Container } from "@mui/material";
import { TimelineComponent } from "./components/Timeline";
import { TitlePage } from "./components/TitlePage";

function App() {
  return (
    <Container
      sx={{
        width: "100vw",
        height: "100%",
      }}
    >
      <TitlePage />
      <TimelineComponent />
    </Container>
  );
}

export default App;
