import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Speakers from "./pages/Speakers";
import Members from "./pages/Members";
import Event from "./pages/Event";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/members" element={<Members />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/events/:id" element={<Event />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
