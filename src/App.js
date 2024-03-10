import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import Main from "./components/main/main";
import NavigateLanguage from "./components/navigate/navigateLanguage";
import Header from "./components/header/header";
import { useEffect, useState } from "react";

function App() {
  const [language, setLanguage] = useState("uz");
  useEffect(() => {
    const languageLocal = localStorage.getItem("language");
    if (languageLocal) {
      setLanguage(languageLocal);
    }
  }, []);
  return (
    <Router>
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<NavigateLanguage />} />
          <Route
            path="/uz"
            element={
              <>
                <Header language={language} setLanguage={setLanguage} />
                <Main language={language} />
              </>
            }
          />
          <Route
            path="/ru"
            element={
              <>
                <Header language={language} setLanguage={setLanguage} />
                <Main language={language} />
              </>
            }
          />
          <Route
            path="/en"
            element={
              <>
                <Header language={language} setLanguage={setLanguage} />
                <Main language={language} />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

