import Navbar from "./components/Navbar";
import Quotecard from "./components/Quotecard";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Quotecard 
        quote="I believe the children are the future... Unless we stop them now!" 
        characterFirstName="Homer"
        characterLastName="Simpson"
        image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939" 
        />
      <Quotecard 
        quote="Me fail English? That's unpossible"
        characterFirstName="Ralph"
        characterLastName="Wiggum"
        image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523"
        />
      <Quotecard quote="Shoplifting is a victimless crime, like punching someone in the dark." 
        characterFirstName="Nelson"
        characterLastName="Muntz"
      />
    </div>
  );
}

export default App;
