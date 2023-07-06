import Container from "./components/container/Container";
import NavBar from "./components/layout/navbar/Navbar";
import CreateNote from "./components/cards/CreateNote";

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <CreateNote/>
      </Container>
    </>
  
      
  );
}

export default App;
