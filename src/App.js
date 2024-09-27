import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ProductAdd from "./Components/ProductAdd/ProductAdd";
import Home from "./Page/Home";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Home />} /> {/* Tüm rotaları Home bileşenine yönlendirin */}
      </Routes>
    </Router>
  );
}
export default App;
