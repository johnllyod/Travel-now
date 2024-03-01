import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <div id="app" data-theme="light">
        <Header />
        <Footer />
      </div>
    </>
  );
}

export default App;
