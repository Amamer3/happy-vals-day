'use client'

import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import Fireworks from '@/components/fireworks'
import { initializeAudio, setAudioVolume } from '@/lib/audio-handler'

export default function ValentinePage() {
  const [hasStarted, setHasStarted] = useState(false)
  const [showCelebration, setShowCelebration] = useState(false)
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 })
  const [noButtonScale, setNoButtonScale] = useState(1)
  const [isMobile, setIsMobile] = useState(false)
  const noButtonRef = useRef<HTMLButtonElement>(null)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleStart = () => {
    setHasStarted(true)
    initializeAudio()
  }

  const handleYes = () => {
    setAudioVolume(0.2)
    setShowCelebration(true)
  }

  const handleNoHover = () => {
    if (!isMobile) {
      const randomX = Math.random() * (window.innerWidth - 120)
      const randomY = Math.random() * (window.innerHeight - 60)
      setNoButtonPos({ x: randomX, y: randomY })
    }
  }

  const handleNoClick = () => {
    if (isMobile) {
      setNoButtonScale(prev => Math.max(0.2, prev - 0.2))
    } else {
      handleNoHover()
    }
  }

  if (!hasStarted) {
    return (
      <div 
        className="min-h-screen w-full bg-linear-to-br from-rose-50 via-white to-pink-100 flex items-center justify-center p-4 cursor-pointer touch-manipulation"
        onClick={handleStart}
        onTouchStart={handleStart}
      >
        <div className="text-center space-y-6 animate-pulse">
          <div className="text-6xl sm:text-7xl">💌</div>
          <h1 className="text-2xl sm:text-4xl font-bold text-rose-500 font-sans">
            Tap to Open
          </h1>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen w-full bg-linear-to-br from-rose-50 via-white to-pink-100 flex items-center justify-center p-3 sm:p-4 md:p-6 relative overflow-hidden">
      {showCelebration && (
        <>
          <Fireworks />
          <div className="fixed left-2 sm:left-10 top-1/2 -translate-y-1/2 flex flex-col gap-8 pointer-events-none z-20">
            <img src="/fireworks/celebration-19390.gif" className="w-20 sm:w-32 md:w-48 h-auto object-contain opacity-80 animate-pop-in animate-float-slow" alt="Celebration" />
            <img src="/fireworks/firework-7791.gif" className="w-20 sm:w-32 md:w-48 h-auto object-contain opacity-80 animate-pop-in animation-delay-500 animate-float-medium" alt="Fireworks" />
          </div>
          <div className="fixed right-2 sm:right-10 top-1/2 -translate-y-1/2 flex flex-col gap-8 pointer-events-none z-20">
            <img src="/fireworks/firework-9816.gif" className="w-20 sm:w-32 md:w-48 h-auto object-contain opacity-80 animate-pop-in animation-delay-200 animate-float-fast" alt="Fireworks" />
            <img src="/fireworks/fireworks-9582_256.gif" className="w-20 sm:w-32 md:w-48 h-auto object-contain opacity-80 animate-pop-in animation-delay-700 animate-float-slow" alt="Celebration" />
          </div>
        </>
      )}

      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-5 sm:top-10 left-5 sm:left-10 w-20 sm:w-32 h-20 sm:h-32 bg-rose-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-float" />
        <div className="absolute bottom-5 sm:bottom-10 right-5 sm:right-10 w-20 sm:w-32 h-20 sm:h-32 bg-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-float animation-delay-2s" />
      </div>

      <div className="w-full max-w-3xl relative z-10 px-2 sm:px-4">
        {!showCelebration ? (
          <div className="text-center space-y-6 sm:space-y-8 md:space-y-10 animate-fade-in">
            {/* Header Section */}
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              <div className="inline-block">
                <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-linear-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent animate-scale-in text-balance">
                  💕 Queenstar 💕
                </h1>
              </div>
              
              <div className="space-y-2 sm:space-y-3 md:space-y-4">
                <p className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-light text-gray-800 text-balance">
                  💗 Will you be my Valentine? 💗
                </p>
                <p className="text-base xs:text-lg sm:text-lg md:text-xl text-gray-600 max-w-md mx-auto leading-relaxed text-pretty">
                  ✨ I promise to make you smile every single day... ✨
                </p>
              </div>
            </div>

            {/* Buttons Section */}
            <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 justify-center items-center pt-4 md:pt-6">
              <button
                onClick={handleYes}
                className="group relative px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-4 bg-linear-to-r from-rose-500 to-pink-500 text-white text-base sm:text-lg md:text-lg font-bold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 w-full sm:w-auto sm:min-w-44 md:min-w-48 touch-manipulation"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  💖 YES 💖
                </span>
                <div className="absolute inset-0 bg-linear-to-r from-rose-600 to-pink-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              <div className="relative h-12 sm:h-14 w-full sm:w-auto sm:min-w-44 md:min-w-48 flex items-center justify-center">
                {isMobile ? (
                  <button
                    ref={noButtonRef}
                    onClick={handleNoClick}
                    style={{
                      transform: `scale(${noButtonScale})`,
                      transition: 'transform 0.2s ease-out',
                      opacity: Math.max(0.5, noButtonScale),
                    }}
                    className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-4 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-full font-bold shadow-md hover:shadow-lg cursor-pointer whitespace-nowrap transition-all touch-manipulation"
                  >
                    😢 No 😢
                  </button>
                ) : (
                  <button
                    ref={noButtonRef}
                    onMouseEnter={handleNoHover}
                    onTouchStart={handleNoHover}
                    onClick={handleNoClick}
                    style={{
                      position: 'fixed',
                      left: `${noButtonPos.x}px`,
                      top: `${noButtonPos.y}px`,
                      transition: 'all 0.15s ease-out',
                    }}
                    className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-4 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-full font-bold shadow-md hover:shadow-lg cursor-pointer whitespace-nowrap touch-manipulation"
                  >
                    No 😢
                  </button>
                )}
              </div>
            </div>

            <div className="pt-2 sm:pt-3 md:pt-4 text-xs sm:text-sm md:text-base text-gray-500 text-pretty">
              {isMobile ? (
                <p>💕 The No button gets smaller with each click... 💕</p>
              ) : (
                <p>❤️ Try clicking the No button if you dare! ❤️</p>
              )}
            </div>
          </div>
        ) : (
          <div className="text-center space-y-6 sm:space-y-8 md:space-y-10 animate-fade-in">
            <div className="space-y-4 sm:space-y-6 md:space-y-6">
              <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-bold bg-linear-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent animate-bounce text-balance">
                💖 YES! 💖
              </h1>
              
              <div className="space-y-3 sm:space-y-4 md:space-y-4">
                <p className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-light text-gray-800 text-pretty">
                  ✨ You just made me the happiest person alive! ✨
                </p>
                
                <img
                  src="/Happy Fresh Prince Of Bel Air GIF.gif"
                  alt="Celebration"
                  className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform"
                />
                
                <p className="text-base xs:text-lg sm:text-xl md:text-2xl text-rose-500 font-bold pt-2 sm:pt-3 md:pt-4 text-balance">
                  💕 Happy Valentine's Day, Queenstar! 💕
                </p>
                
                <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-700 pt-1 sm:pt-2 md:pt-2 text-pretty">
                  💗 I love you so much! 💗
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

       <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-scale-in {
          animation: scaleIn 0.6s ease-out;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes popIn {
          0% {
            opacity: 0;
            transform: scale(0);
          }
          60% {
            transform: scale(1.1);
          }
          100% {
            opacity: 0.8;
            transform: scale(1);
          }
        }

        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(2deg); }
        }

        @keyframes floatMedium {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(-2deg); }
        }

        @keyframes floatFast {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(1deg); }
        }

        .animate-pop-in {
          animation: popIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }

        .animate-float-slow {
          animation: floatSlow 4s ease-in-out infinite;
        }

        .animate-float-medium {
          animation: floatMedium 3s ease-in-out infinite;
        }

        .animate-float-fast {
          animation: floatFast 2.5s ease-in-out infinite;
        }

        .animation-delay-200 { animation-delay: 200ms; }
        .animation-delay-500 { animation-delay: 500ms; }
        .animation-delay-700 { animation-delay: 700ms; }
      `}</style>
    </main>
  )
}
