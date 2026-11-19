import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export const SoundscapeToggle: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const intervalRef = useRef<any>(null);

  const startSoundscape = () => {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      
      const ctx = new AudioCtx();
      if (ctx.state === 'suspended') {
        ctx.resume();
      }
      audioCtxRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.08, ctx.currentTime);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // Pink noise generator for gentle coastal breeze & rustling mango leaves
      const bufferSize = ctx.sampleRate * 2;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
      
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.04;
        b6 = white * 0.115926;
      }

      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      // Soft lowpass filter to mimic distant wind through cashew trees
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(450, ctx.currentTime);

      whiteNoise.connect(filter);
      filter.connect(masterGain);
      whiteNoise.start(0);

      // Random soft melodic bird chirp synthesizer every 4-8 seconds
      intervalRef.current = setInterval(() => {
        if (!audioCtxRef.current || audioCtxRef.current.state !== 'running') return;
        try {
          const chirpOsc = ctx.createOscillator();
          const chirpGain = ctx.createGain();
          chirpOsc.type = 'sine';
          const now = ctx.currentTime;
          const baseFreq = 2200 + Math.random() * 600;
          
          chirpOsc.frequency.setValueAtTime(baseFreq, now);
          chirpOsc.frequency.exponentialRampToValueAtTime(baseFreq + 500, now + 0.08);
          chirpOsc.frequency.exponentialRampToValueAtTime(baseFreq + 1000, now + 0.16);

          chirpGain.gain.setValueAtTime(0.001, now);
          chirpGain.gain.linearRampToValueAtTime(0.03, now + 0.05);
          chirpGain.gain.linearRampToValueAtTime(0.001, now + 0.18);

          chirpOsc.connect(chirpGain);
          chirpGain.connect(masterGain);
          chirpOsc.start(now);
          chirpOsc.stop(now + 0.2);
        } catch (_) {}
      }, 5000);

      setIsPlaying(true);
    } catch (_) {
      setIsPlaying(false);
    }
  };

  const stopSoundscape = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (audioCtxRef.current) {
      try {
        audioCtxRef.current.close();
      } catch (_) {}
      audioCtxRef.current = null;
    }
    setIsPlaying(false);
  };

  const toggleSound = () => {
    if (isPlaying) {
      stopSoundscape();
    } else {
      startSoundscape();
    }
  };

  useEffect(() => {
    return () => {
      stopSoundscape();
    };
  }, []);

  return (
    <button
      onClick={toggleSound}
      title={isPlaying ? 'Mute Konkan Nature Ambience' : 'Listen to Konkan Nature Ambience'}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 border ${
        isPlaying
          ? 'bg-[#1b4332] text-[#d4af37] border-[#d4af37]/40 shadow-sm'
          : 'bg-[#ede5d8]/80 hover:bg-[#e4dacb] text-[#1b3b2b] border-[#d9ccb8]'
      }`}
      aria-label="Toggle Nature Ambience"
    >
      {isPlaying ? (
        <>
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4af37] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#d4af37]"></span>
          </span>
          <Volume2 className="w-3.5 h-3.5 text-[#d4af37]" />
          <span className="hidden sm:inline">Konkan Breeze: ON</span>
        </>
      ) : (
        <>
          <VolumeX className="w-3.5 h-3.5 text-[#5e6f64]" />
          <span className="hidden sm:inline">Konkan Ambience</span>
        </>
      )}
    </button>
  );
};
