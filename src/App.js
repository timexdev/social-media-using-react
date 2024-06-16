import "./App.css"
import Auth from "./pages/Authentication/Auth";
import Profile from "./pages/Profile/Profile";
import Home from "./pages/home/Home";
function App() {
  return (
    <div className="App">
        <div className="blur" style={{top:"-18%", right:"0"}}></div>
        <div className="blur" style={{top:"36%", rigth:"-8rem"}}></div>
        <Home/> 
        <Auth/> 
        <Profile/>
    </div>
  );
}

export default App;
