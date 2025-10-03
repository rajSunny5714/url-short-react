import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import AboutPage from "./components/AboutPage";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";
import DashboardLayout from "./dashboard/DashboardLayout";
import ShortenUrlPage from "./dashboard/ShortenUrlPage";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "./components/ErrorPage";
import { Toaster } from "react-hot-toast";

const AppRouter = () => {
  const location = useLocation();
  const hideHeaderFooter = location.pathname.startsWith("/s");

  return (
    <>
      {!hideHeaderFooter && <Navbar />}
      <Toaster position="bottom-center" />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/s/:url" element={<ShortenUrlPage />} />

        <Route
          path="/register"
          element={
            <PrivateRoute publicPage={true}>
              <RegisterPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PrivateRoute publicPage={true}>
              <LoginPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute publicPage={false}>
              <DashboardLayout />
            </PrivateRoute>
          }
        />

        {/* Catch-all route for unknown URLs */}
        <Route
          path="*"
          element={
            <ErrorPage message="We can't seem to find the page you're looking for" />
          }
        />
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </>
  );
};

export default AppRouter;

// Optional: Separate subdomain router if needed
export const SubDomainRouter = () => {
  return (
    <Routes>
      <Route path="/s/:url" element={<ShortenUrlPage />} />
    </Routes>
  );
};
