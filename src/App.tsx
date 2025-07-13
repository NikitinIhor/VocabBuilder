import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./components/Loader";

const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const DictionaryPage = lazy(() => import("./pages/DictionaryPage"));
const RecommendedPage = lazy(() => import("./pages/RecommendedPage"));
const TrainingPage = lazy(() => import("./pages/TrainingPage"));

const App: React.FC = () => {
  return (
    <>
      {/* <Loader /> */}
      <Suspense fallback={<Loader />}>
        <Suspense></Suspense>
        <Routes>
          <Route path="/" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dictionary" element={<DictionaryPage />} />
          <Route path="/recommended" element={<RecommendedPage />} />
          <Route path="/training" element={<TrainingPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
