import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import HomeBody from "./routes/Home/HomeBody";
import Promotion from "./routes/Home/Promotion";
import Subscription from "./routes/Home/Subscription";


export default function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} >
        <Route index element={<HomeBody />} />
        <Route path="promotion" element={<Promotion />} />
        <Route path="subscription" element={<Subscription />} />
       </Route>
    </Routes>
   </BrowserRouter>
  );
}
