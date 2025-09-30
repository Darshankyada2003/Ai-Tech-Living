import { motion, AnimatePresence } from "framer-motion";
import { X, Home, Lightbulb, Shield, Phone, Mail, Sun, Moon, Volume2, VolumeX } from "lucide-react";
import { useState } from "react";

interface HomeAutomationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HomeAutomationModal({ isOpen, onClose }: HomeAutomationModalProps) {
  const [activeRoom, setActiveRoom] = useState("bedroom");
  const [lightsOn, setLightsOn] = useState(true);
  const [blindsOpen, setBlindsOpen] = useState(true);
  const [securityArmed, setSecurityArmed] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);

  const rooms = [
    { 
      id: "bedroom", 
      name: "Master Bedroom", 
      icon: Home,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&crop=center",
      lights: 4,
      temperature: 22
    },
    { 
      id: "living-room", 
      name: "Living Room", 
      icon: Home,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&crop=center",
      lights: 6,
      temperature: 24
    },
    { 
      id: "kitchen", 
      name: "Kitchen", 
      icon: Home,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&crop=center",
      lights: 3,
      temperature: 20
    },
    { 
      id: "office", 
      name: "Home Office", 
      icon: Home,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&crop=center",
      lights: 2,
      temperature: 23
    },
  ];

  const currentRoom = rooms.find(r => r.id === activeRoom);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal - Smaller, more realistic */}
          <motion.div
            className="relative w-full max-w-sm sm:max-w-2xl lg:max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden mx-2 sm:mx-4 max-h-[85vh] sm:max-h-none"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold">Smart Home Control</h2>
                  <p className="text-slate-300 text-xs">AiTech Living</p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 max-h-[75vh] overflow-y-auto sm:max-h-none sm:overflow-visible">
              {/* Room Image & Controls */}
              <div className="relative order-2 lg:order-1">
                {/* Room Image with Overlay */}
                <div className="relative h-64 sm:h-80 lg:h-full min-h-[240px] sm:min-h-[320px] overflow-hidden">
                  <img
                    src={currentRoom?.image}
                    alt={currentRoom?.name}
                    className={`w-full h-full object-cover transition-all duration-500 ${
                      lightsOn ? 'brightness-100' : 'brightness-30'
                    }`}
                  />
                  
                  {/* Dark Overlay when lights off */}
                  <div className={`absolute inset-0 bg-black transition-opacity duration-500 ${
                    lightsOn ? 'opacity-0' : 'opacity-40'
                  }`} />
                  
                  {/* Room Info Overlay */}
                  <div className="absolute top-2 left-2 right-2 sm:top-3 sm:left-3 sm:right-3">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-3">
                      <h3 className="text-base sm:text-lg font-bold text-gray-800">{currentRoom?.name}</h3>
                      <div className="flex items-center gap-2 sm:gap-3 mt-1">
                        <div className="flex items-center gap-1">
                          <div className={`w-2 h-2 rounded-full ${lightsOn ? 'bg-green-500' : 'bg-gray-400'}`} />
                          <span className="text-xs text-gray-600">
                            {lightsOn ? 'Lights On' : 'Lights Off'}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className={`w-2 h-2 rounded-full ${blindsOpen ? 'bg-blue-500' : 'bg-gray-400'}`} />
                          <span className="text-xs text-gray-600">
                            {blindsOpen ? 'Blinds Open' : 'Blinds Closed'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Temperature Display */}
                  <div className="absolute top-2 right-2 sm:top-3 sm:right-3">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-1.5 sm:p-2">
                      <div className="text-center">
                        <div className="text-sm sm:text-lg font-bold text-gray-800">{currentRoom?.temperature}°</div>
                        <div className="text-xs text-gray-600">Temp</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Controls Panel */}
              <div className="p-3 sm:p-4 bg-gray-50 order-1 lg:order-2">
                {/* Room Selection */}
                <div className="mb-3 sm:mb-4">
                  <h3 className="text-sm sm:text-base font-semibold text-gray-800 mb-2 sm:mb-3">Select Room</h3>
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    {rooms.map((room) => (
                      <motion.button
                        key={room.id}
                        className={`p-1.5 sm:p-2 rounded-lg border-2 transition-all text-left ${
                          activeRoom === room.id
                            ? "border-blue-500 bg-blue-50 text-blue-700"
                            : "border-gray-200 hover:border-gray-300 text-gray-700 bg-white"
                        }`}
                        onClick={() => setActiveRoom(room.id)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-center gap-1 sm:gap-2">
                          <Home size={12} className="sm:w-3.5 sm:h-3.5" />
                          <span className="text-xs font-medium truncate">{room.name}</span>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Main Controls */}
                <div className="space-y-2 sm:space-y-3">
                  {/* Lights Control */}
                  <div className="bg-white rounded-lg sm:rounded-xl p-2.5 sm:p-3 border border-gray-200">
                    <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <Lightbulb size={14} className="sm:w-4 sm:h-4 text-yellow-500" />
                        <span className="text-xs sm:text-sm font-medium text-gray-800">Lights</span>
                      </div>
                      <motion.button
                        className={`w-10 h-5 sm:w-12 sm:h-6 rounded-full transition-colors ${
                          lightsOn ? 'bg-blue-500' : 'bg-gray-300'
                        }`}
                        onClick={() => setLightsOn(!lightsOn)}
                        whileTap={{ scale: 0.95 }}
                      >
                        <motion.div
                          className={`w-4 h-4 sm:w-5 sm:h-5 bg-white rounded-full shadow-md ${
                            lightsOn ? 'ml-1.1' : 'ml-0.5'
                          }`}
                          animate={{ x: lightsOn ? 20 : 2 }}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      </motion.button>
                    </div>
                    <div className="text-xs text-gray-600">
                      {currentRoom?.lights} lights • {lightsOn ? 'All On' : 'All Off'}
                    </div>
                  </div>

                  {/* Blinds Control */}
                  <div className="bg-white rounded-lg sm:rounded-xl p-2.5 sm:p-3 border border-gray-200">
                    <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        {blindsOpen ? <Sun size={14} className="sm:w-4 sm:h-4 text-orange-500" /> : <Moon size={14} className="sm:w-4 sm:h-4 text-blue-500" />}
                        <span className="text-xs sm:text-sm font-medium text-gray-800">Window Blinds</span>
                      </div>
                      <motion.button
                        className={`w-10 h-5 sm:w-12 sm:h-6 rounded-full transition-colors ${
                          blindsOpen ? 'bg-orange-500' : 'bg-gray-300'
                        }`}
                        onClick={() => setBlindsOpen(!blindsOpen)}
                        whileTap={{ scale: 0.95 }}
                      >
                        <motion.div
                          className={`w-4 h-4 sm:w-5 sm:h-5 bg-white rounded-full shadow-md ${
                            blindsOpen ? 'ml-1.1' : 'ml-0.5'
                          }`}
                          animate={{ x: blindsOpen ? 20 : 2 }}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      </motion.button>
                    </div>
                    <div className="text-xs text-gray-600">
                      {blindsOpen ? 'Natural light flowing in' : 'Privacy mode active'}
                    </div>
                  </div>

                  {/* Music Control */}
                  <div className="bg-white rounded-lg sm:rounded-xl p-2.5 sm:p-3 border border-gray-200">
                    <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        {musicPlaying ? <Volume2 size={14} className="sm:w-4 sm:h-4 text-green-500" /> : <VolumeX size={14} className="sm:w-4 sm:h-4 text-gray-500" />}
                        <span className="text-xs sm:text-sm font-medium text-gray-800">Ambient Music</span>
                      </div>
                      <motion.button
                        className={`w-10 h-5 sm:w-12 sm:h-6 rounded-full transition-colors ${
                          musicPlaying ? 'bg-green-500' : 'bg-gray-300'
                        }`}
                        onClick={() => setMusicPlaying(!musicPlaying)}
                        whileTap={{ scale: 0.95 }}
                      >
                        <motion.div
                          className={`w-4 h-4 sm:w-5 sm:h-5 bg-white rounded-full shadow-md ${
                            musicPlaying ? 'ml-1.1' : 'ml-0.5'
                          }`}
                          animate={{ x: musicPlaying ? 20 : 2 }}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      </motion.button>
                    </div>
                    <div className="text-xs text-gray-600">
                      {musicPlaying ? 'Relaxing sounds playing' : 'Silent mode'}
                    </div>
                  </div>

                  {/* Security Status */}
                  <div className="bg-white rounded-lg sm:rounded-xl p-2.5 sm:p-3 border border-gray-200">
                    <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <Shield size={14} className={`sm:w-4 sm:h-4 ${securityArmed ? "text-red-500" : "text-green-500"}`} />
                        <span className="text-xs sm:text-sm font-medium text-gray-800">Security System</span>
                      </div>
                      <motion.button
                        className={`w-10 h-5 sm:w-12 sm:h-6 rounded-full transition-colors ${
                          securityArmed ? 'bg-red-500' : 'bg-gray-300'
                        }`}
                        onClick={() => setSecurityArmed(!securityArmed)}
                        whileTap={{ scale: 0.95 }}
                      >
                        <motion.div
                          className={`w-4 h-4 sm:w-5 sm:h-5 bg-white rounded-full shadow-md ${
                            securityArmed ? 'ml-1.1' : 'ml-0.5'
                          }`}
                          animate={{ x: securityArmed ? 20 : 2 }}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      </motion.button>
                    </div>
                    <div className="text-xs text-gray-600">
                      {securityArmed ? 'System armed - monitoring active' : 'System disarmed - safe to enter'}
                    </div>
                  </div>
                </div>

                {/* Contact Section */}
                <div className="mt-3 sm:mt-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg sm:rounded-xl p-2.5 sm:p-3 text-white">
                  <h4 className="text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2">Ready to automate your home?</h4>
                  <div className="flex gap-1.5 sm:gap-2">
                    <motion.button
                      className="flex-1 bg-white/20 hover:bg-white/30 rounded-md sm:rounded-lg p-1.5 sm:p-2 text-xs font-medium transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Phone size={12} className="sm:w-3.5 sm:h-3.5 inline mr-1" />
                      Call Now
                    </motion.button>
                    <motion.button
                      className="flex-1 bg-white/20 hover:bg-white/30 rounded-md sm:rounded-lg p-1.5 sm:p-2 text-xs font-medium transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Mail size={12} className="sm:w-3.5 sm:h-3.5 inline mr-1" />
                      Email
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
