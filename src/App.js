import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import logo from "./logo.svg";
import { fetchGetHome } from "./store/actions/homePage.action";
import { allHomePageData } from "./store/selectors/homePage.selector";
function App() {
  const dispatch = useDispatch();
  const homeData = useSelector(allHomePageData);
  useEffect(() => {
    dispatch(fetchGetHome());
  }, []);

  const loadData = () => {
    console.log("---s-dd-sdd", homeData);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={loadData}>test </button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
