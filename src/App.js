import "./styles/App.css";
import Footer from "./component/footer";
import Header from "./component/header";
import Maincontainer from "./component/Maincontainer";

function App() {
  return (
    <div className="myApp">
      {/** Header component */}
      {/** nice design */}
      <u className="nice">Nice</u>
       <u className="design">Design</u>
      <Header />
      {/** Maincontainer component */}
      <Maincontainer />
      {/** Footer component */}
      <Footer />
    </div>
  );
}

export default App;
