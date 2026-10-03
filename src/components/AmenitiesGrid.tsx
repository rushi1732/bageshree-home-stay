import React from "react"
import { Waves, Sparkles, Wifi, Heart, TreePine, BookOpen, Flame } from "lucide-react"

export const AmenitiesGrid: React.FC = () => {
  const amenities = [
    {
      icon: Waves,
      title: "Natural Stone Plunge Pools",
      marathi: "दगडी कुंड आणि पाण्याचे झरे",
      desc: "Chiseled basalt dip pools fed by gentle mountain streams, surrounded by ferns and flowering jasmines."
    },
    {
      icon: Wifi,
      title: "Dual Fiber Workation Wi-Fi",
      marathi: "अखंड हाय-स्पीड इंटरनेट",
      desc: "150+ Mbps redundant fiber connectivity and solar inverters so your focus and video meetings never falter."
    },
    {
      icon: Heart,
      title: "Pet Sanctuary & Sniff Trails",
      marathi: "प्राणी मित्रांसाठी मोकळी जागा",
      desc: "Gated, pesticide-free open lawns and soft trails where your canine and feline companions can roam with joy."
    },
    {
      icon: Flame,
      title: "Courtyard Bonfire & Flute",
      marathi: "अंगणातील शेकोटी व बासरी",
      desc: "Evening earthen hearths with live classical flute melodies, toasted sweet potatoes, and stargazing."
    },
    {
      icon: TreePine,
      title: "Organic Spice Foraging",
      marathi: "मसाला बागेतील अभ्यास",
      desc: "Walk with our horticulturist to pick fresh nutmeg, clove, black pepper, and cinnamon bark directly from branches."
    },
    {
      icon: BookOpen,
      title: "Sahyadri Heritage Library",
      marathi: "कोकण आणि संत साहित्याचे दालन",
      desc: "Curated collection of Marathi poetry, Konkan history, wildlife field guides, and cozy cane reading chairs."
    }
  ]

  return (
    <section id="amenities" className="py-24 bg-[#0a110d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#d4a373] uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#d4a373]" />
            <span>Sanctuary Living • सुविधा</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#f7f4ee]">
            Slow Luxury in the Heart of Nature
          </h2>
          <p className="text-sm sm:text-base text-[#8fa898] mt-3">
            Every amenity is designed to reconnect your senses with the earth, combining ancient Konkan heritage with thoughtful modern comforts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {amenities.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="bg-[#111e16] border border-[#2b4232] rounded-2xl p-6 sm:p-7 hover:border-[#d4a373]/60 transition-all duration-300 group hover:-translate-y-1 shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-[#172b1e] border border-[#2b4232] flex items-center justify-center text-[#d4a373] mb-5 group-hover:bg-[#c5705d] group-hover:text-white group-hover:border-[#c5705d] transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>

                <span className="text-[10px] font-mono text-[#d4a373] uppercase tracking-wider block">
                  {item.marathi}
                </span>

                <h3 className="text-xl font-serif text-[#f7f4ee] mt-1 group-hover:text-[#d4a373] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#8fa898] mt-2.5 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
