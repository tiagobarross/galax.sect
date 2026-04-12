'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Accessibility, 
  X, 
  Minus, 
  Plus, 
  Type,
  AlignLeft,
  FileText,
  Zap,
} from 'lucide-react';

interface AccessibilitySettings {
  fontSize: number;
  highContrast: boolean;
  letterSpacing: boolean;
  lineHeight: boolean;
}

const STORAGE_KEY = 'galax-sect-accessibility';

const defaultSettings: AccessibilitySettings = {
  fontSize: 100,
  highContrast: false,
  letterSpacing: false,
  lineHeight: false,
};

export function AccessibilityPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>(defaultSettings);
  const [mounted, setMounted] = useState(false);

  const applySettings = (newSettings: AccessibilitySettings) => {
    if (typeof document === 'undefined') return;

    const root = document.documentElement;
    
    root.style.setProperty('--accessibility-font-size', `${newSettings.fontSize}%`);
    
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    if (newSettings.letterSpacing) {
      root.setAttribute('data-letter-spacing', 'true');
    } else {
      root.removeAttribute('data-letter-spacing');
    }

    if (newSettings.lineHeight) {
      root.setAttribute('data-line-height', 'true');
    } else {
      root.removeAttribute('data-line-height');
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setSettings(parsed);
        applySettings(parsed);
      } catch {
        // Ignore parse errors
      }
    }
  }, []);

  const updateSetting = <K extends keyof AccessibilitySettings>(
    key: K,
    value: AccessibilitySettings[K]
  ) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    applySettings(newSettings);
    
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newSettings));
    }
  };

  const resetSettings = () => {
    setSettings(defaultSettings);
    applySettings(defaultSettings);
    if (typeof window !== 'undefined') {
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-14 h-14 rounded-full bg-eletric-blue text-white shadow-lg hover:shadow-xl transition-all flex items-center justify-center group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Acessibilidade"
        aria-expanded={isOpen}
      >
        <Accessibility className="w-7 h-7" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            />
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 z-50 w-[calc(100vw-2rem)] max-w-80 sm:max-w-96 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-white/10 rounded-xl shadow-2xl p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  <Accessibility className="w-5 h-5 text-eletric-blue" />
                  Acessibilidade
                </h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
                  aria-label="Fechar"
                >
                  <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </button>
              </div>

              <div className="space-y-4">
                {/* Font Size Control */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-medium text-gray-900 dark:text-white flex items-center gap-2">
                      <Type className="w-4 h-4" />
                      Tamanho da fonte
                    </label>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {settings.fontSize}%
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateSetting('fontSize', Math.max(75, settings.fontSize - 10))}
                      className="w-8 h-8 rounded-lg border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 flex items-center justify-center transition-colors"
                      aria-label="Diminuir fonte"
                      disabled={settings.fontSize <= 75}
                    >
                      <Minus className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                    </button>
                    <div className="flex-1 h-2 bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-eletric-blue rounded-full transition-all"
                        style={{ width: `${((settings.fontSize - 75) / (150 - 75)) * 100}%` }}
                      />
                    </div>
                    <button
                      onClick={() => updateSetting('fontSize', Math.min(150, settings.fontSize + 10))}
                      className="w-8 h-8 rounded-lg border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 flex items-center justify-center transition-colors"
                      aria-label="Aumentar fonte"
                      disabled={settings.fontSize >= 150}
                    >
                      <Plus className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                    </button>
                  </div>
                </div>

                {/* Toggles */}
                <div className="space-y-2">
                  <label className="flex items-center justify-between p-3 rounded-lg border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/5 cursor-pointer transition-colors">
                    <div className="flex items-center gap-2">
                      <Zap className="h-5 w-5 text-eletric-blue" aria-hidden />
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        Alto contraste
                      </span>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.highContrast}
                      onChange={(e) => updateSetting('highContrast', e.target.checked)}
                      className="w-5 h-5 rounded border-gray-300 dark:border-white/20 text-eletric-blue focus:ring-2 focus:ring-eletric-blue"
                    />
                  </label>

                  <label className="flex items-center justify-between p-3 rounded-lg border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/5 cursor-pointer transition-colors">
                    <div className="flex items-center gap-2">
                      <AlignLeft className="w-5 h-5 text-eletric-blue" />
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        Espaçamento entre letras
                      </span>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.letterSpacing}
                      onChange={(e) => updateSetting('letterSpacing', e.target.checked)}
                      className="w-5 h-5 rounded border-gray-300 dark:border-white/20 text-eletric-blue focus:ring-2 focus:ring-eletric-blue"
                    />
                  </label>

                  <label className="flex items-center justify-between p-3 rounded-lg border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/5 cursor-pointer transition-colors">
                    <div className="flex items-center gap-2">
                      <FileText className="w-5 h-5 text-eletric-blue" />
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        Espaçamento entre linhas
                      </span>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.lineHeight}
                      onChange={(e) => updateSetting('lineHeight', e.target.checked)}
                      className="w-5 h-5 rounded border-gray-300 dark:border-white/20 text-eletric-blue focus:ring-2 focus:ring-eletric-blue"
                    />
                  </label>
                </div>

                <button
                  onClick={resetSettings}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-sm font-medium text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                >
                  Redefinir configurações
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
