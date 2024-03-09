import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import MainUz from "./components/main/mainUz";
import NavigateLanguage from "./components/navigate/navigateLanguage";
import MainRu from "./components/main/mainRu";

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<NavigateLanguage />} />
          <Route path="/uz" element={<MainUz />} />
          <Route path="/ru" element={<MainRu />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
