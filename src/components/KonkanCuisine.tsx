import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Utensils, Flame, CheckCircle, Leaf } from "lucide-react"
import { MEALS } from "@/data/homestayData"

export const KonkanCuisine: React.FC = () => {
  const [filter, setFilter] = useState<string>("all")

  const filteredMeals = filter === "all"
    ? MEALS
    : filter === "veg"
    ? MEALS.filter((m) => m.dietary === "veg")
    : filter === "specialty"
    ? MEALS.filter((m) => m.isSpecialty)
    : MEALS

  return (
    <section id="cuisine" className="py-24 bg-[#0a110d] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#d4a373] uppercase mb-2">
            <Flame className="w-3.5 h-3.5 text-[#c5705d]" />
            <span>Farm to Table Gastronomy • चुलीवरचं जेवण</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#f7f4ee]">
            The Fragrance of Konkan on Wood Embers
          </h2>
          <p className="text-sm sm:text-base text-[#8fa898] mt-3 leading-relaxed">
            Every dish is cooked over aromatic mango and teak firewood in cast-iron vessels. Freshly grated coconut, wild forest kokum, and hand-ground spices from our estate.
          </p>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: "all", label: "Full Estate Menu" },
              { id: "specialty", label: "Heritage Specialties" },
              { id: "veg", label: "Satvik & Vegetarian" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all cursor-pointer ${
                  filter === tab.id
                    ? "bg-[#c5705d] text-white shadow-md shadow-[#c5705d]/20"
                    : "bg-[#132219] text-[#8fa898] hover:text-[#f7f4ee] border border-[#2b4232]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Food Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredMeals.map((meal) => (
              <motion.div
                key={meal.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-[#111e16] border border-[#2b4232] rounded-2xl overflow-hidden hover:border-[#d4a373]/60 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  {/* Food Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={meal.image}
                      alt={meal.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111e16] via-transparent to-transparent opacity-80" />

                    {/* Tag badge */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5">
                      {meal.dietary === 'veg' ? (
                        <span className="bg-emerald-950/90 text-emerald-400 border border-emerald-700/50 text-[10px] font-mono px-2.5 py-1 rounded-full backdrop-blur-sm">
                          Pure Vegetarian
                        </span>
                      ) : (
                        <span className="bg-amber-950/90 text-amber-300 border border-amber-700/50 text-[10px] font-mono px-2.5 py-1 rounded-full backdrop-blur-sm">
                          Fresh Catch Non-Veg
                        </span>
                      )}

                      {meal.isSpecialty && (
                        <span className="bg-[#c5705d]/90 text-white text-[10px] font-mono px-2.5 py-1 rounded-full backdrop-blur-sm">
                          Signature
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <span className="text-xs font-marathi text-[#d4a373] font-medium block">
                      {meal.marathiName}
                    </span>
                    <h3 className="text-xl font-serif text-[#f7f4ee] mt-1 group-hover:text-[#d4a373] transition-colors">
                      {meal.name}
                    </h3>
                    <p className="text-xs text-[#8fa898] mt-2.5 leading-relaxed">
                      {meal.description}
                    </p>
                  </div>
                </div>

                {/* Footer notes */}
                <div className="px-6 pb-6 pt-2 border-t border-[#2b4232]/50 flex items-center justify-between text-xs text-[#8fa898]">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-[#d4a373]" />
                    <span>Included in Kokani Thali</span>
                  </span>
                  <span className="text-[11px] font-mono text-[#c0cfc6]">Woodfire Clay Hearth</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Dietary Reassurance Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#14231a] border border-[#2b4232] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#1c3024] border border-[#d4a373]/50 flex items-center justify-center text-[#d4a373] shrink-0">
              <Leaf className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-serif text-[#f7f4ee]">
                Dedicated Pure Vegetarian & Jain Kitchen Facilities
              </h4>
              <p className="text-xs text-[#8fa898] mt-1">
                We maintain separate cookware, cutlery, and kitchen hearths for vegetarian meals. Satvik, gluten-free, and no onion-garlic food available on advance notice.
              </p>
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-2 text-xs font-mono text-[#d4a373] uppercase tracking-wider bg-[#0c1510] px-4 py-2.5 rounded-xl border border-[#2b4232]">
            <Utensils className="w-4 h-4" />
            <span>Farm Harvested • 0% Chemicals</span>
          </div>
        </div>
      </div>
    </section>
  )
}
