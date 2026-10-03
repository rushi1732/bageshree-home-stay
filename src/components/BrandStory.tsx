import React, { useState, useRef } from "react"
import { Volume2, VolumeX, Compass, Leaf, Music, Shield } from "lucide-react"
import bageshreeHeroImg from "@/assets/bageshree-real.jpg"

export const BrandStory: React.FC = () => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false)
  const audioContextRef = useRef<AudioContext | null>(null)
  const masterGainRef = useRef<GainNode | null>(null)

  // Web Audio API Ambient Sound Generator (Tanpura-inspired meditative drone + gentle night breeze)
  const toggleAmbientSound = () => {
    if (isPlayingAudio) {
      if (audioContextRef.current && masterGainRef.current) {
        masterGainRef.current.gain.setTargetAtTime(0, audioContextRef.current.currentTime, 0.5)
        setTimeout(() => {
          audioContextRef.current?.close()
          audioContextRef.current = null
        }, 600)
      }
      setIsPlayingAudio(false)
    } else {
      try {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
        const ctx = new AudioCtx()
        audioContextRef.current = ctx

        const masterGain = ctx.createGain()
        masterGain.gain.setValueAtTime(0.01, ctx.currentTime)
        masterGain.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + 1.5)
        masterGain.connect(ctx.destination)
        masterGainRef.current = masterGain

        // Root drone frequencies matching Raga Bageshree tonic (Sa = D3 ~ 146.8 Hz, Pa = A2 ~ 110 Hz, Komal Ni = C3 ~ 130.8 Hz)
        const freqs = [110, 146.83, 220, 261.63, 293.66]

        freqs.forEach((freq, idx) => {
          const osc = ctx.createOscillator()
          const gain = ctx.createGain()

          osc.type = idx % 2 === 0 ? "triangle" : "sine"
          osc.frequency.setValueAtTime(freq, ctx.currentTime)

          // Subtle harmonic detune for rich resonance
          osc.detune.setValueAtTime((Math.random() - 0.5) * 8, ctx.currentTime)

          gain.gain.setValueAtTime(0.03 / (idx + 1), ctx.currentTime)

          // Soft LFO for breathing effect
          const lfo = ctx.createOscillator()
          const lfoGain = ctx.createGain()
          lfo.frequency.setValueAtTime(0.15 + idx * 0.05, ctx.currentTime)
          lfoGain.gain.setValueAtTime(0.01, ctx.currentTime)
          lfo.connect(lfoGain)
          lfoGain.connect(gain.gain)
          lfo.start()

          osc.connect(gain)
          gain.connect(masterGain)
          osc.start()
        })

        setIsPlayingAudio(true)
      } catch (err) {
        console.error("Audio could not start", err)
      }
    }
  }

  return (
    <section id="story" className="py-24 bg-[#0e1913] relative overflow-hidden">
      {/* Decorative background leaf watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 opacity-5 pointer-events-none">
        <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full text-[#d4a373]">
          <path d="M50 0C30 25 10 50 10 75C10 88.8 21.2 100 35 100C45 100 50 90 50 90C50 90 55 100 65 100C78.8 100 90 88.8 90 75C90 50 70 25 50 0Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Collage with Heritage Frames */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden border border-[#2b4232] shadow-2xl">
              <img
                src={bageshreeHeroImg}
                alt="Bageshree Home Stay Property - Devrukh, Konkan"
                className="w-full h-[440px] sm:h-[500px] object-cover filter brightness-95 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e1913] via-transparent to-transparent opacity-80" />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#132219]/90 border border-[#2b4232] backdrop-blur-md">
                <p className="font-serif text-lg text-[#f7f4ee] italic">
                  "बागेश्री ही केवळ जागा नाही, तर एका शांत मनाची अनुभूती आहे."
                </p>
                <span className="text-[11px] font-mono tracking-widest text-[#d4a373] uppercase mt-1 block">
                  — The Sahasrabuddhe Family, Founders & Custodians
                </span>
              </div>
            </div>

            {/* Floating Inset Picture */}
            <div className="hidden sm:block absolute -bottom-8 -right-8 w-56 h-56 rounded-2xl overflow-hidden border-4 border-[#0e1913] shadow-2xl z-20">
              <img
                src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=600&q=80"
                alt="Teakwood Verandah Room"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Origin */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#d4a373] uppercase">
              <Leaf className="w-3.5 h-3.5 text-[#d4a373]" />
              <span>The Bageshree Philosophy • आमची गोष्ट</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#f7f4ee] leading-tight">
              Named after the midnight raga of peaceful homecoming.
            </h2>

            <p className="text-base text-[#c0cfc6] leading-relaxed">
              In Indian classical music, <strong className="text-[#f7f4ee] font-semibold">Raga Bageshree</strong> is sung at the quiet hour of midnight. It speaks of longing fulfilled, of tender stillness, and of weary souls returning to where they belong.
            </p>

            <p className="text-sm text-[#8fa898] leading-relaxed">
              Two decades ago, we began restoring an ancient 12-acre betel nut grove along an unnamed Sahyadri river tributary in Devrukh, Konkan. Every wall at Bageshree was chiseled by local Konkani artisans using native red laterite stone (चिरा), reclaimed 100-year-old teak timber, and cooling clay terracotta tiles.
            </p>

            {/* Interactive Ambient Sound Synthesizer Bar */}
            <div className="p-4 rounded-xl bg-[#14231a] border border-[#2b4232] flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1c3024] border border-[#d4a373]/50 flex items-center justify-center text-[#d4a373]">
                  <Music className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-[#f7f4ee]">
                    Evening Tanpura Ambience
                  </h4>
                  <p className="text-[11px] text-[#8fa898]">
                    {isPlayingAudio ? "Playing Raga Bageshree resonant drones..." : "Tap to listen to evening forest acoustic mood"}
                  </p>
                </div>
              </div>

              <button
                onClick={toggleAmbientSound}
                className={`p-3 rounded-full border transition-all cursor-pointer ${
                  isPlayingAudio
                    ? "bg-[#c5705d] border-[#c5705d] text-white shadow-lg shadow-[#c5705d]/30"
                    : "bg-[#1c3024] border-[#2b4232] text-[#d4a373] hover:border-[#d4a373]"
                }`}
                aria-label={isPlayingAudio ? "Stop sound" : "Play ambient sound"}
              >
                {isPlayingAudio ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </button>
            </div>

            {/* 3 Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-3.5 rounded-xl bg-[#111e16] border border-[#2b4232]">
                <Compass className="w-4 h-4 text-[#d4a373] mb-2" />
                <h4 className="text-xs font-semibold text-[#f7f4ee]">Red Laterite Chira</h4>
                <p className="text-[11px] text-[#8fa898] mt-1">Naturally cool stone that breathes with seasonal humidity.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#111e16] border border-[#2b4232]">
                <Leaf className="w-4 h-4 text-[#d4a373] mb-2" />
                <h4 className="text-xs font-semibold text-[#f7f4ee]">12-Acre Agroforest</h4>
                <p className="text-[11px] text-[#8fa898] mt-1">Organic nutmeg, cardamom, coconut & betel nut groves.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#111e16] border border-[#2b4232]">
                <Shield className="w-4 h-4 text-[#d4a373] mb-2" />
                <h4 className="text-xs font-semibold text-[#f7f4ee]">True Kokani Warmth</h4>
                <p className="text-[11px] text-[#8fa898] mt-1">Hosted personally by our family with home-cooked meals.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
