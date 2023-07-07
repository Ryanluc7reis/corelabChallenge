import Container from "./components/container/Container";
import NavBar from "./components/layout/navbar/Navbar";
import Notes from "./components/cards/Notes"

function App() {
  return (
    <>
      <NavBar />
      <Container>    
        <Notes />
      </Container>
    </>
  
      
  );
}

export default App;
