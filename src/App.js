// import NewsItem from './components/NewsItem'
import "./App.css";
import Header from "./components/Header";
import ShareSocial from "./components/ShareSocial";

function App() {
  const isLogin = true;

  return (
    <div className="container">
      <Header />
      <ShareSocial />
    </div>
  );
}

export default App;
