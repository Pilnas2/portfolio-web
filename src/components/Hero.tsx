import { Mouse } from "lucide-react";
import TextType from "./TextType";

import { useRef, useState } from "react";

interface Rotation {
  x: number;
  y: number;
}

const Hero = () => {
  const phoneRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState<Rotation>({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const lastPosition = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setDragging(true);
    lastPosition.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!dragging) return;
    const dx = e.clientY - lastPosition.current.y;
    const dy = e.clientX - lastPosition.current.x;
    setRotation((prev) => ({
      x: Math.max(Math.min(prev.x + dx * 0.5, 10), -10), // Omezení vertikální rotace
      y: prev.y + dy * 0.5, // Neomezená horizontální rotace (360°)
    }));
    lastPosition.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const handleMouseLeave = () => {
    setDragging(false);
  };

  // Touch events pro mobilní zařízení
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setDragging(true);
    const touch = e.touches[0];
    lastPosition.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!dragging) return;
    e.preventDefault(); // Zamezí scrollování stránky
    const touch = e.touches[0];
    const dx = touch.clientY - lastPosition.current.y;
    const dy = touch.clientX - lastPosition.current.x;
    setRotation((prev) => ({
      x: Math.max(Math.min(prev.x + dx * 0.5, 10), -10), // Omezení vertikální rotace
      y: prev.y + dy * 0.5, // Neomezená horizontální rotace (360°)
    }));
    lastPosition.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = () => {
    setDragging(false);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800"
    >
      <div className="container-custom text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 mt-24 sm:mt-20 md:mt-16">
            {/* Hero Text */}
            <TextType
              text={["Ahoj , jsem Martin", "Vytvářím mobilní aplikace"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
            />
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Vytvářím moderní mobilní aplikace jak pro IOS, tak pro Android
          </p>

          <div className="flex justify-center mb-8">
            <div
              ref={phoneRef}
              className="relative w-56 h-80 cursor-grab active:cursor-grabbing select-none touch-none"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              style={{ perspective: "1200px" }}
            >
              <div
                className="w-full h-full transition-transform duration-75 ease-out"
                style={{
                  transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Phone Body - Front */}
                <div
                  className="absolute w-full h-full bg-gradient-to-b from-gray-800 via-gray-900 to-black rounded-[2rem] shadow-2xl border border-gray-600"
                  style={{ transform: "translateZ(0.1px)" }}
                >
                  {/* Screen */}
                  <div className="absolute inset-4 bg-black rounded-[1.5rem] overflow-hidden">
                    {/* Screen on effect */}
                    <div className="w-full h-full bg-gradient-to-br from-blue-600/30 via-purple-600/20 to-pink-600/30 relative">
                      {/* Dynamic Island */}
                      <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black rounded-full"></div>

                      {/* Wallpaper effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/40 via-purple-500/30 to-pink-500/40"></div>

                      {/* App Grid */}
                      <div className="absolute top-16 left-4 right-4 grid grid-cols-4 gap-3">
                        {[...Array(12)].map((_, i) => (
                          <div
                            key={i}
                            className="w-8 h-8 rounded-xl shadow-lg"
                            style={{
                              background: `linear-gradient(135deg, hsl(${
                                i * 30
                              }, 70%, 60%), hsl(${i * 30 + 40}, 70%, 40%))`,
                            }}
                          ></div>
                        ))}
                      </div>

                      {/* Dock */}
                      <div className="absolute bottom-6 left-4 right-4 bg-white/10 backdrop-blur-md rounded-2xl p-3">
                        <div className="flex justify-center gap-4">
                          {[...Array(4)].map((_, i) => (
                            <div
                              key={i}
                              className="w-10 h-10 rounded-xl shadow-lg"
                              style={{
                                background: `linear-gradient(135deg, hsl(${
                                  i * 90
                                }, 60%, 50%), hsl(${i * 90 + 30}, 60%, 30%))`,
                              }}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phone Body - Back */}
                <div
                  className="absolute w-full h-full bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 rounded-[2rem] shadow-2xl border border-gray-500"
                  style={{ transform: "rotateY(180deg) translateZ(5px)" }}
                >
                  {/* Camera Module */}
                  <div className="absolute top-6 left-6 w-16 h-16 bg-gray-900 rounded-2xl shadow-lg border border-gray-600">
                    <div className="absolute top-2 left-2 w-5 h-5 bg-black rounded-full shadow-inner"></div>
                    <div className="absolute top-2 right-2 w-5 h-5 bg-black rounded-full shadow-inner"></div>
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-black rounded-full shadow-inner"></div>
                  </div>

                  {/* Apple Logo */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-10 bg-gray-600 rounded-lg opacity-30"></div>
                </div>

                {/* Phone Middle Layer - fills the gap between front and back */}
                <div
                  className="absolute w-full h-full bg-black rounded-[2rem] border border-gray-800"
                  style={{ transform: "translateZ(0px) scaleY(1)" }}
                ></div>
              </div>
            </div>
          </div>
          {/* Mouse Indicator */}
          <div className="animate-bounce-subtle">
            <div className="flex flex-col items-center gap-2 text-gray-500">
              <Mouse
                size={32}
                className="hover:text-primary-400 transition-colors duration-300"
              />
              <p className="text-sm">Táhněte pro otočení telefonu</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
