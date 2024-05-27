import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Main from "./layout/Main";
import Nav from "./layout/Nav"
import {BrowserRouter} from "react-router-dom"
import MyCustomProvider from "./context/myContext"

const App = () => {
  return (
    <>
      <MyCustomProvider>
        <BrowserRouter>
        <div className="layout">     
          <div className="headerContainer"><Header/></div>        
          <div className="navContainer"><Nav/></div>
          <div className="mainContainer"><Main greeting="Welcome to this landing page!"/></div>
          <div className="footerContainer"><Footer/></div>
        </div>
        </BrowserRouter>
      </MyCustomProvider>
    </>//esto es un fragmento

  )
}

export default App;