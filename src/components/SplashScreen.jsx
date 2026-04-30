import { useEffect } from "react";
import  {useState} from "react";
import { Heart } from "lucide-react";

export default function SplashScreen() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 relative overflow-hidden">

      {/* background glow */}
      <div className="absolute w-72 h-72 bg-blue-400/20 blur-3xl rounded-full top-10 left-10" />
      <div className="absolute w-72 h-72 bg-blue-300/10 blur-3xl rounded-full bottom-10 right-10" />

      <div className="flex flex-col items-center gap-10 z-10">

        {/* HEART */}
        <div className={`heart ${show ? "animate-heart" : ""}`}>
          <Heart className="w-28 h-28 text-red-500 fill-red-500 drop-shadow-2xl" />
        </div>

        {/* TEXT */}
        <div className={`text-center ${show ? "fade-in" : ""}`}>
          <h1 className="text-5xl font-extrabold text-white tracking-wide">
            DOC-NNECT
          </h1>

          <p className="text-blue-100 text-base mt-3">
            Your Health,Our Priority
          </p>
        </div>

        {/* LOADING DOTS */}
        <div className="flex gap-2 mt-2">
          <span className="dot dot1"></span>
          <span className="dot dot2"></span>
          <span className="dot dot3"></span>
        </div>

      </div>

      {/* STYLE */}
      <style>{`
        .heart {
          transform: translateY(0px);
        }

        .animate-heart {
          animation: float 1.6s ease-in-out infinite;
        }

        @keyframes float {
          0% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-18px) scale(1.08); }
          100% { transform: translateY(0px) scale(1); }
        }

        .fade-in {
          animation: fadeIn 1s ease forwards;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .dot {
          width: 8px;
          height: 8px;
          background: rgba(255,255,255,0.7);
          border-radius: 50%;
          display: inline-block;
          animation: bounce 1s infinite;
        }

        .dot1 { animation-delay: 0s; }
        .dot2 { animation-delay: 0.2s; }
        .dot3 { animation-delay: 0.4s; }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
      `}</style>

    </div>
  );
}