# 🚀 Creative Web Starter Kit

> **Tailwind CSS + shadcn/ui + GSAP + Motion + Lenis + React Three Fiber (R3F)**
> एक अत्याधुनिक, हाय-परफॉर्मन्स आणि रेडी-टू-युज स्टार्टर टेम्पलेट.

---

## 📦 काय काय इन्स्टॉल आणि कॉन्फिगर केले आहे?

| लायब्ररी | व्हर्जन | उद्देश |
|---|---|---|
| **Tailwind CSS** | `v3.4` | युटिलिटी-फर्स्ट स्टायलिंग आणि डिझाइन टोकन्स |
| **shadcn/ui** | Configured | ॲक्सेसिबल, स्टाईलिश UI घटकांचा सेट (`Button`, `Card`, `Badge`, `Dialog`) |
| **GSAP + ScrollTrigger** | `v3.15` | स्मूथ स्क्रोल अ‍ॅनिमेशन्स आणि टाइमलाइन कोरिओग्राफी (`@gsap/react` सह) |
| **Motion** | `v14` | डिक्लेरेटिव्ह मायक्रो-इंटरॅक्शन्स, स्प्रिंग फिजिक्स आणि लेआउट मॉर्फिंग |
| **Lenis** | `v1.3` | बटर-स्मूथ व्हर्च्युअल मोमेंटम स्क्रोलिंग |
| **React Three Fiber (R3F)** | `v9.8` | 3D WebGL कॅनव्हास, मेश डिस्टॉर्शन आणि परस्परसंवादी सीन्स |
| **@react-three/drei** | `v10.7` | R3F साठी उपयुक्त 3D शेडर्स, कॅमेरा आणि ऑब्जेक्ट्स |
| **Lucide React** | `v1.51` | आधुनिक, स्वच्छ SVG आयकॉन्स |

---

## 🎯 नवीन वेबसाइटसाठी हे टेम्पलेट कसे वापरावे? (How to Reuse)

जेव्हाही तुम्हाला नवीन वेबसाइट बनवायची असेल, तेव्हा तुम्ही हा फोल्डर थेट कॉपी करू शकता:

```bash
# 1. नवीन प्रोजेक्टच्या नावाने कॉपी करा
cp -r creative-web-starter my-new-website

# 2. नवीन प्रोजेक्टमध्ये जा
cd my-new-website

# 3. सर्व पॅकेजेस इन्स्टॉल करा
pnpm install

# 4. डेव्हलपमेंट सर्व्हर सुरू करा
pnpm dev
```

---

## 🛠️ shadcn/ui चे नवीन कॉम्पोनंट्स कसे ॲड करावे?

`components.json` आधीच कॉन्फिगर केलेले आहे. नवीन घटक जोडण्यासाठी फक्त खालील कमांड चालवा:

```bash
pnpm dlx shadcn@latest add dropdown-menu
pnpm dlx shadcn@latest add sheet
pnpm dlx shadcn@latest add avatar
pnpm dlx shadcn@latest add accordion
```

---

## 📂 प्रोजेक्ट रचना (Folder Structure)

```text
src/
├── components/
│   ├── ui/                    # shadcn/ui components (button, card, badge, dialog)
│   ├── SmoothScrollProvider.tsx # Lenis + GSAP ScrollTrigger इंटिग्रेशन
│   ├── ThreeCanvas.tsx        # React Three Fiber 3D Scene
│   ├── GsapShowcase.tsx       # GSAP ScrollTrigger अ‍ॅनिमेशन
│   ├── MotionShowcase.tsx     # Motion स्प्रिंग फिजिक्स आणि ड्रॅगेबल कार्ड
│   ├── ShadcnShowcase.tsx     # shadcn/ui घटक
│   ├── Navbar.tsx             # आधुनिक नॅव्हबार + मार्गदर्शक मोडल
│   ├── Hero.tsx               # मुख्य हिरो सेक्शन + 3D कॅनव्हास
│   └── Footer.tsx
├── lib/
│   └── utils.ts               # clsx + twMerge utility
├── App.tsx
├── index.css                  # Tailwind + Design Tokens + Lenis Styles
└── main.tsx
```

---

## ⚡ कमांड्स

- `pnpm dev` - डेव्हलपमेंट सर्व्हर सुरू करा (HMR सह अतिजलद)
- `pnpm build` - प्रोडक्शन बिल्ड तयार करा
- `pnpm preview` - प्रोडक्शन बिल्ड प्रीव्ह्यू करा
