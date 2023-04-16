import Announcement from "./Components/Announcement";
import Categories from "./Components/Categories";
import Footer from "./Components/Footer";
import Newsletter from "./Components/Newsletter";
import Products from "./Components/Products";
import Slider from "./Components/Slider";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Announcement/>
      <Home/>
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
