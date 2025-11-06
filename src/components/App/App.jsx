import "./App.css";

import Header from "../Header/Header.jsx";
import Blog from "../Blog/Blog.jsx";
import Footer from "../Footer/Footer.jsx";

function App() {
  return (
    <>
      <div className="page">
        <Header />
        <Blog />
        <Footer />
      </div>
    </>
  );
}

export default App;
