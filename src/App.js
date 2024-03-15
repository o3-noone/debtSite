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
  const [theme, setTheme] = useState(false);
  localStorage.setItem("theme", theme);
  const [navId, setNavId]=useState("1")
  const [language, setLanguage] = useState("uz");
  useEffect(() => {
    const languageLocal = localStorage.getItem("language");
    if (languageLocal) {
      setLanguage(languageLocal);
    }
  }, []);
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<NavigateLanguage />} />
          <Route
            path="/uz"
            element={
              <>
                <Header setTheme={setTheme} theme={theme} navId={navId} setNavId={setNavId} language={language} setLanguage={setLanguage} />
                <Main navId={navId} setNavId={setNavId} language={language} />
              </>
            }
          />
          <Route
            path="/ru"
            element={
              <>
                <Header setTheme={setTheme} theme={theme} navId={navId} setNavId={setNavId} language={language} setLanguage={setLanguage} />
                <Main navId={navId} setNavId={setNavId} language={language} />
              </>
            }
          />
          <Route
            path="/en"
            element={
              <>
                <Header setTheme={setTheme} theme={theme} navId={navId} setNavId={setNavId} language={language} setLanguage={setLanguage} />
                <Main navId={navId} setNavId={setNavId} language={language} />
              </>
            }
          />
        </Routes>
      </>
    </Router>
  );
}

export default App;

