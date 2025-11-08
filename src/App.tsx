import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { ReactLenis } from "lenis/react";
import Home from "./pages/main/Home";
import AllSkills from "./pages/admin/AllSkills";
import AdminLayout from "./layouts/AdminLayouts";
import AddSkill from "./pages/admin/AddSkill";

function App() {
  return (
    <>
      <ReactLenis root options={{ wheelMultiplier: 0.4, duration: 1.1 }} />
      <Routes>
        <Route path="/*" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="admin/*" element={<AdminLayout />}>
          <Route index element={<AllSkills />} />
          <Route path="add-skill" element={<AddSkill />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
