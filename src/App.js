import "./App.css";
import Header from "./components/Header";
import Container from "./components/Container";

function App() {
  return (
    <div className="App">
      <div style={{ width: "60%" }}>
        <Header />
        <Container />
      </div>
    </div>
  );
}

export default App;
