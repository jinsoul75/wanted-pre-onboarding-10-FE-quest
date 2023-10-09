import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Page1 />} />
        <Route path='/page2' element={<Page2 />} />
      </Routes>
    </>
  );
}

export default App;
