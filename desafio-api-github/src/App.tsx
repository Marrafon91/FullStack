import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import HomeBody from "./routes/Home/HomeBody";
import SearchUser from "./routes/Home/SearchUser";


export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} >
      <Route index element={<HomeBody />} />
      <Route path="/search" element={<SearchUser />} />
      </Route>
    </Routes>

    </BrowserRouter>
  )
}


