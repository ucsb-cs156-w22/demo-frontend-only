import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "main/pages/HomePage";

import "bootstrap/dist/css/bootstrap.css";

function App() {

  const { data: currentUser } = useCurrentUser();

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
