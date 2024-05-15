// import NewsItem from './components/NewsItem'
import "./App.css";
import Header from "./components/Header";
import ShareSocial from "./components/ShareSocial";

function App() {
  const isLogin = true;

  const links = [
    { href: "https://www.fb.com", 
      text: "Facebook", 
      color: "red", 
      size: "2x" 
    },
    {
      href: "https://www.google.com",
      text: "Google",
      color: "blue",
      size: "2x",
    },
    {
      href: "https://www.github.com",
      text: "GitHub",
      color: "black",
      size: "2x",
    },
  ];

  return (
    <div className="container">
      <Header />
      <ShareSocial />
    </div>
  );
}

export default App;
