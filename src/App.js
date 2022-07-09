import Introducton from "./components/Intro";
import Navigationtab from "./components/Navigationtab";
import Softwares from "./components/Softwares";
import TechnicalSkils from "./components/Technical";
import Reviews from "./components/TechStacks";
function App() {
  return (
    <div className="App">
      <Navigationtab />
      <Introducton />
      <TechnicalSkils />
      <Softwares />
      <Reviews />
    </div>
  );
}

export default App;
