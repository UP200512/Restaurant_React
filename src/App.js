import "./App.css";
import AuthoRoutes from "../src/routes/index.routes";
import Footer from "./components/footer/footer.jsx";
import Header from "./components/header/header.jsx"; 

function App() {
  return (
    <div className="wrapper">
      <div className="content">
        <Header/>
        <AuthoRoutes />;
      
      </div>
      <Footer/>
    </div>
  )
}


export default App;