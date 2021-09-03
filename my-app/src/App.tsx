import "./App.css";
import Button from "./components/button/button.component";

function App() {
  return (
    <div className="App">
      <Button type="primary">My Button</Button>
      <Button type="ghost">My Button</Button>
      <Button type="link">My Button</Button>
    </div>
  );
}

export default App;
