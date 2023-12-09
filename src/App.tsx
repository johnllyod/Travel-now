import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/Header";
import RouteManager from "./RouteManager";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <div id="app" data-theme="light">
        <Header />
        <RouteManager />
        <Footer />
      </div>
    </>
  );
}

export default App;
