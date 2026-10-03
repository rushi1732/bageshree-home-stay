import React from "react"
import { Star, TreePine, SunMedium, Feather } from "lucide-react"

export const Statistics: React.FC = () => {
  const stats = [
    {
      value: "12+",
      unit: "Acres",
      label: "Pristine Agro-Forest",
      marathi: "१२ एकर सेंद्रिय बागायत",
      icon: TreePine,
      desc: "Lush betel nut, spice and organic mango orchards."
    },
    {
      value: "4.98",
      unit: "/ 5.0",
      label: "Guest Satisfaction",
      marathi: "६४०+ समाधानी पाहुणे",
      icon: Star,
      desc: "Over 640 verified stays across Maharashtra & abroad."
    },
    {
      value: "42+",
      unit: "Species",
      label: "Native Bird Haven",
      marathi: "४२+ दुर्मिळ पक्षी प्रजाती",
      icon: Feather,
      desc: "Spotting hornbills, emerald drongos & kingfishers."
    },
    {
      value: "100%",
      unit: "Solar",
      label: "Eco-Conscious Energy",
      marathi: "१००% सौरऊर्जेवर आधारित",
      icon: SunMedium,
      desc: "Rainwater harvesting and zero single-use plastic."
    }
  ]

  return (
    <section className="py-20 bg-[#0c1510] border-y border-[#2b4232]/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <div
                key={idx}
                className="bg-[#111e16] border border-[#2b4232] rounded-2xl p-6 relative hover:border-[#d4a373]/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#172b1e] border border-[#2b4232] flex items-center justify-center text-[#d4a373]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-[#8fa898] uppercase">
                    Verified
                  </span>
                </div>

                <div className="flex items-baseline gap-1">
                  <span className="text-3xl sm:text-4xl font-serif text-[#f7f4ee] font-semibold">
                    {stat.value}
                  </span>
                  <span className="text-xs font-mono text-[#d4a373]">
                    {stat.unit}
                  </span>
                </div>

                <h4 className="text-sm font-semibold text-[#f7f4ee] mt-1">
                  {stat.label}
                </h4>

                <span className="text-[11px] font-serif text-[#d4a373] block mt-0.5">
                  {stat.marathi}
                </span>

                <p className="text-xs text-[#8fa898] mt-2 leading-relaxed">
                  {stat.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
