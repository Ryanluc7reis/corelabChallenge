import Container from "./components/container/Container";
import NavBar from "./components/layout/navbar/Navbar";
import CreateNote from "./components/cards/CreateNote";

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <CreateNote>oi</CreateNote>
      </Container>
    </>
  
      
  );
}

export default App;
