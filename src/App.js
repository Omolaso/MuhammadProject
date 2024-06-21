import "./App.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";

import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ScrollToTop from "./components/ScrollToTop";
import AppThemeProvider from "./components/ThemeProvider";
import ProjectRoutes from "./ProjectRoutes";

function App() {
  return (
    <>
      <ToastContainer position="top-center" />

      <Router>
        <AppThemeProvider>
          <ScrollToTop />
          <ProjectRoutes />
        </AppThemeProvider>
      </Router>
    </>
  );
}

export default App;
