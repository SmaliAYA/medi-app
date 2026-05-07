import { useState, useEffect } from "react";
import SplashScreen from "./components/SplashScreen";
import HomeScreen from "./components/HomeScreen";
import AppointmentPage from "./components/AppointmentPage";
import Login from "./components/Login";
import CreateAccount from "./components/CreateAccount";
import MedicalRecord from "./components/MedicalRecord";
import ProfilePage from "./components/ProfilePage";
import DoctorProfile from "./components/DoctorProfile";
import ContactPage from "./components/ContactPage";

export default function App() {
  const [page, setPage] = useState("splash");

  // Splash timer (runs only on splash)
  useEffect(() => {
    if (page !== "splash") return;

    const timer = setTimeout(() => {
      setPage("login");
    }, 3000);

    return () => clearTimeout(timer);
  }, [page]);

  return (
    <>
      {/* SPLASH */}
      {page === "splash" && <SplashScreen />}

      {/* LOGIN */}
      {page === "login" && (
        <Login
          onLogin={() => setPage("home")}
          onGoToSignUp={() => setPage("create")}
        />
      )}

      {/* CREATE ACCOUNT */}
      {page === "create" && (
        <CreateAccount
          onSignUp={() => setPage("home")}
          onGoToLogin={() => setPage("login")}
        />
      )}

      {/* HOME */}
      {page === "home" && (
        <HomeScreen
  onBook={() => setPage("appointment")}
  onOpenMedical={() => setPage("medical")}
  onOpenProfile={() => setPage("profile")}
  onOpenDoctor={() => setPage("doctor")}
  onOpenContact={() => setPage("contact")}
    
/>
      )}

      {/* APPOINTMENT */}
      {page === "appointment" && (
        <AppointmentPage
          onBack={() => setPage("home")}
          onConfirm={() => setPage("home")}
        />
      )}
      {page === "contact" && (
        <ContactPage onBack={() => setPage("home")} />
      )}

      {/* MEDICAL RECORD */}
      {page === "medical" && (
        <MedicalRecord onBack={() => setPage("home")} />
      )}
      {/* PROFILE */}
{page === "profile" && (
  <ProfilePage onBack={() => setPage("home")} />
)}
{page === "doctor" && (
  <DoctorProfile onBack={() => setPage("home")}
   onOpenAppointment={() => setPage("appointment")} />
)}

    </>
  );
}