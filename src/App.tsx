import { lazy, Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Loader from "./components/Loader/Loader";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const DictionaryPage = lazy(
  () => import("./pages/DictionaryPage/DictionaryPage")
);
const RecommendPage = lazy(() => import("./pages/RecommendPage/RecommendPage"));
const TrainingPage = lazy(() => import("./pages/TrainingPage/TrainingPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

const App: React.FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Toaster />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dictionary" element={<DictionaryPage />} />
          <Route path="/recommended" element={<RecommendPage />} />
          <Route path="/training" element={<TrainingPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </Suspense>
  );
};

export default App;
