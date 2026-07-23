import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CustomCursor from "./components/CustomCursor";

function App() {
  return (
    <>
      <Loader />
      <CustomCursor />

      <div className="bg-black text-white overflow-x-hidden">
        <Navbar />
        <Hero />
      </div>
    </>
  );
}

export default App;
