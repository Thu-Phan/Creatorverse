import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

// pages
import Home from "./pages/Home"
import Create from "./pages/Create"
import Update from "./pages/Update"
import SingleRecord from "./pages/SingleRecord"


function App() {
  return (
    <BrowserRouter>
      <nav>
        <h1>CREATORVERSE</h1>
        <Link to="/">VIEW ALL CREATORS</Link>
        <Link to="/create">ADD CREATORS</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:id" element={<Update />} />
        <Route path="/:id" element={<SingleRecord />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
