import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { UseState } from "../pages/UseState";
import { UseEffect } from "../pages/UseEffect";
import { UseLayoutEffect } from "../pages/UseLayoutEffect";
import { UseContext } from "../pages/UseContext";
import { UseReducer } from "../pages/UseReducer";
import { UseCallback } from "../pages/UseCallback";
import { UseMemo } from "../pages/UseMemo";
import { UseRef } from "../pages/UseRef";
import { UseImperativeHandle } from "../pages/UseImperativeHandle";
import { UseDebugValue } from "../pages/UseDebugValue";
import { CustomHooks } from "../pages/CustomHooks";
import { UseFetch } from "../pages/CustomHooks/useFetch";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/use-state" element={<UseState />} />
      <Route path="/use-effect" element={<UseEffect />} />
      <Route path="/use-layout-effect" element={<UseLayoutEffect />} />
      <Route path="/use-context" element={<UseContext />} />
      <Route path="/use-reducer" element={<UseReducer />} />
      <Route path="/use-callback" element={<UseCallback />} />
      <Route path="/use-memo" element={<UseMemo />} />
      <Route path="/use-ref" element={<UseRef />} />
      <Route path="/use-imperative-handle" element={<UseImperativeHandle />} />
      <Route path="/use-debug-value" element={<UseDebugValue />} />
      {/* Custom Hooks */}
      <Route path="/custom-hooks" element={<CustomHooks />} />
      <Route path="/custom-hooks/use-fetch" element={<UseFetch />} />
    </Routes>
  );
};
