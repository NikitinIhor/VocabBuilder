import { lazy, Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Loader from "./components/Loader";
import { PrivateRoute } from "./components/Routs/PrivateRoute";
import { RestrictedRoute } from "./components/Routs/RestrictedRoute";

const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const DictionaryPage = lazy(() => import("./pages/DictionaryPage"));
const RecommendedPage = lazy(() => import("./pages/RecommendedPage"));
const TrainingPage = lazy(() => import("./pages/TrainingPage"));

const App: React.FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Toaster />
      <Routes>
        <Route
          path="/"
          element={
            <RestrictedRoute
              component={<RegisterPage />}
              redirectTo="/dictionary"
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute
              component={<LoginPage />}
              redirectTo="/dictionary"
            />
          }
        />
        <Route
          path="/dictionary"
          element={
            <PrivateRoute component={<DictionaryPage />} redirectTo="/" />
          }
        />
        <Route
          path="/recommended"
          element={
            <PrivateRoute component={<RecommendedPage />} redirectTo="/" />
          }
        />
        <Route
          path="/training"
          element={<PrivateRoute component={<TrainingPage />} redirectTo="/" />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default App;
