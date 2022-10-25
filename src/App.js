import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/hello" element={<h1>hello !</h1>}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movie" element={<Detail />}></Route>
      </Routes>
    </Router>
  );
}

// BrowserRouter : just like browser URL
// HashRouter : add # in between .. looks a little different
// Link is going to move user without refreshing the browser

export default App;
