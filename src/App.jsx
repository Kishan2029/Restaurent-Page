import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  // return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
  return (
    <div className="overflow-y-auto">
      <div className="mx-16">
        <Navbar />
        <Section />
        <Menu />
      </div>
      <Footer />
    </div>
  );
}

export default App;
