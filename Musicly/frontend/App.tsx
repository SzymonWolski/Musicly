import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='./'/>
        </Route>
      </Routes>
    </>
  );
}

export default App;