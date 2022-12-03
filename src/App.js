import { Route, Routes, BrowserRouter, HashRouter } from "react-router-dom";
import Index from "./pages/index.jsx";
import Create from "./pages/create.jsx";
import View from "./pages/view.jsx";
import Store from "./store/store.jsx";
import './styles/styles.css'

function App() {
  return (
    <div>
      <Store >
        <BrowserRouter >
          <Routes >
            <Route path="/" element={<Index />} />
            <Route path="/create" element={<Create />} />
            <Route path="view/:bookId" element={<View />} />
          </Routes>
        </BrowserRouter>
      </Store>
    </div>
  );
}

export default App;
