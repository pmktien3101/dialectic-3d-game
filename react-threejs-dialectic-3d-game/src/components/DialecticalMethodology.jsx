"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const concepts = [
  {
    title: "Cái Riêng và Cái Chung",
    icon: "concept",
    content: [
      {
        type: "definition",
        title: "Cái riêng",
        text: "Là phạm trù triết học dùng để chỉ sự vật, hiện tượng, một quá trình nhất định",
      },
      {
        type: "definition",
        title: "Cái chung",
        text: "Là phạm trù triết học dùng để chỉ những mặt, những thuộc tính giống nhau và lặp lại ở nhiều sự vật, hiện tượng",
      },
      {
        type: "definition",
        title: "Cái đơn nhất",
        text: "Là những đặc tính, tính chất chỉ tồn tại ở một sự vật, hiện tượng và không lặp lại ở sự vật khác",
      },
    ],
  },
  {
    title: "Ví Dụ Thực Tế",
    icon: "example",
    content: [
      {
        type: "example",
        title: "Ví dụ về con người",
        points: [
          "Cái chung: Những thuộc tính tự nhiên và xã hội khiến con người khác với động vật, như khả năng tư duy, ngôn ngữ, văn hóa, đạo đức,...",
          "Cái riêng: Mỗi con người là một cá thể riêng biệt với những đặc điểm riêng về ngoại hình, tính cách, sở thích,...",
          "Cái đơn nhất: Ở mỗi con người có những thuộc tính không lặp lại ở người khác như cấu tạo gen độc đáo, nhân cách riêng biệt, năng lực đặc thù, hoàn cảnh sống cụ thể,...",
        ],
      },
    ],
  },
  {
    title: "Mối Liên Hệ Biện Chứng",
    icon: "relationship",
    content: [
      {
        type: "relationship",
        points: [
          "Cái chung chỉ tồn tại trong cái riêng, thông qua cái riêng mà biểu hiện sự tồn tại của mình",
          "Cái riêng chỉ tồn tại trong mối quan hệ với cái chung, không có cái riêng tồn tại độc lập tuyệt đối tách rời cái chung",
          "Cái riêng là cái toàn bộ, phong phú hơn cái chung, còn cái chung thì sâu sắc, bản chất hơn cái riêng",
          "Trong quá trình vận động và phát triển của sự vật, cái riêng có thể chuyển hóa thành cái chung và ngược lại",
        ],
      },
    ],
  },
  {
    title: "Ý Nghĩa Phương Pháp Luận",
    icon: "methodology",
    content: [
      {
        type: "methodology",
        points: [
          "Muốn nhận thức được cái chung, cái bản chất thì phải xuất phát từ cái riêng",
          "Nhiệm vụ của nhận thức là phải tìm ra cái chung và trong hoạt động thực tiễn phải dựa vào cái chung để cải tạo cái riêng",
          "Trong hoạt động thực tiễn ta cần chủ động tác động vào sự chuyển hoá cái mới thành cái chung để phát triển nó, và ngược lại cái cũ thành cái đơn nhất để xóa bỏ nó",
        ],
      }
    ],
  },
]

export default function DialecticalMethodology({ onContinue }) {
  const containerRef = useRef(null)
  


  return (
    <div className="h-screen overflow-y-auto bg-gradient-to-br from-indigo-950 via-purple-900 to-fuchsia-900 text-white">

      {/* Main content */}
      <div ref={containerRef} className="container mx-auto px-4 pt-10 pb-20 min-h-screen">
        {/* Hero section */}
        <section className="min-h-[80vh] flex flex-col items-center justify-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-cyan-300 to-fuchsia-300 bg-clip-text text-transparent">
              Phương Pháp Luận Biện Chứng
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed">
              Khám phá mối quan hệ giữa cái riêng và cái chung trong triết học biện chứng
            </p>
            <div className="flex justify-center">
              <a
                href="#concepts"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-full text-lg font-medium hover:opacity-90 transition-opacity"
              >
                Khám phá
              </a>
            </div>
          </motion.div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white/70"
            >
              <path d="M12 5v14"></path>
              <path d="m19 12-7 7-7-7"></path>
            </svg>
          </div>
        </section>

        {/* Concepts */}
        <div id="concepts" className="space-y-32 pb-20">
          {concepts.map((concept, index) => {
            const isEven = index % 2 === 0
            return <ConceptSection key={index} concept={concept} index={index} isEven={isEven} />
          })}
        </div>

        {/* Back button */}
        <div className="flex justify-end mb-10">
          <button
            onClick={onContinue}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-full text-lg font-medium hover:opacity-90 transition-opacity"
          >
            Chọn chủ đề khác
          </button>
        </div>
      </div>
    </div>
  )
}

function ConceptSection({ concept, index, isEven }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-16 items-center`}
    >
      {/* Concept illustration */}
      <div className="w-full md:w-2/5">
        <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-purple-500/20 to-fuchsia-500/20 p-6 border border-white/10 backdrop-blur-sm">
          <ConceptIllustration type={concept.icon} />
        </div>
      </div>

      {/* Concept content */}
      <div className="w-full md:w-3/5">
        <div className="mb-6">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-white/10 rounded-full mb-4">
            Phần {index + 1}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-300 to-fuchsia-300 bg-clip-text text-transparent">
            {concept.title}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-full"></div>
        </div>

        <div className="space-y-6">
          {concept.content.map((item, itemIndex) => (
            <ConceptContent key={itemIndex} item={item} />
          ))}
        </div>
      </div>
    </motion.section>
  )
}

function ConceptContent({ item }) {
  switch (item.type) {
    case "definition":
      return (
        <div className="p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
          <h3 className="text-2xl font-semibold text-white mb-3">{item.title}</h3>
          <p className="text-lg text-white/80 leading-relaxed">{item.text}</p>
        </div>
      )
    case "example":
      return (
        <div className="p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
          <h3 className="text-2xl font-semibold text-white mb-3">{item.title}</h3>
          <ul className="space-y-3">
            {item.points.map((point, i) => (
              <li key={i} className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2.5 mr-3 bg-cyan-400 rounded-full flex-shrink-0"></span>
                <p className="text-lg text-white/80 leading-relaxed">{point}</p>
              </li>
            ))}
          </ul>
        </div>
      )
    case "relationship":
    case "methodology":
      return (
        <div className="p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
          <ul className="space-y-3">
            {item.points.map((point, i) => (
              <li key={i} className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2.5 mr-3 bg-fuchsia-400 rounded-full flex-shrink-0"></span>
                <p className="text-lg text-white/80 leading-relaxed">{point}</p>
              </li>
            ))}
          </ul>
        </div>
      )
    case "application":
      return (
        <div className="mt-6 p-6 bg-gradient-to-r from-cyan-600/30 to-fuchsia-600/30 rounded-xl border border-white/10 backdrop-blur-sm">
          <p className="text-lg text-white/90 italic leading-relaxed">"{item.text}"</p>
        </div>
      )
    default:
      return null
  }
}

function ConceptIllustration({ type }) {
  switch (type) {
    case "concept":
      return (
        <div className="w-full h-full flex items-center justify-center">
          <div className="relative">
            <div className="absolute top-0 left-0 w-32 h-32 bg-cyan-500/30 rounded-full blur-xl"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-fuchsia-500/30 rounded-full blur-xl"></div>

            <div className="relative z-10 flex items-center justify-center">
              <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-fuchsia-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    case "example":
      return (
        <div className="w-full h-full flex items-center justify-center">
          <div className="relative">
            <div className="absolute top-0 left-0 w-32 h-32 bg-cyan-500/30 rounded-full blur-xl"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-fuchsia-500/30 rounded-full blur-xl"></div>

            <div className="relative z-10">
              <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M100 20C120 20 140 30 150 50C160 70 160 90 150 110C140 130 120 140 100 140C80 140 60 130 50 110C40 90 40 70 50 50C60 30 80 20 100 20Z"
                  fill="url(#paint0_linear)"
                  fillOpacity="0.3"
                />
                <path
                  d="M100 40C110 40 120 45 125 55C130 65 130 75 125 85C120 95 110 100 100 100C90 100 80 95 75 85C70 75 70 65 75 55C80 45 90 40 100 40Z"
                  fill="url(#paint1_linear)"
                  fillOpacity="0.5"
                />
                <path
                  d="M100 60C105 60 110 62.5 112.5 67.5C115 72.5 115 77.5 112.5 82.5C110 87.5 105 90 100 90C95 90 90 87.5 87.5 82.5C85 77.5 85 72.5 87.5 67.5C90 62.5 95 60 100 60Z"
                  fill="url(#paint2_linear)"
                />
                <path
                  d="M100 150C105 150 110 152.5 112.5 157.5C115 162.5 115 167.5 112.5 172.5C110 177.5 105 180 100 180C95 180 90 177.5 87.5 172.5C85 167.5 85 162.5 87.5 157.5C90 152.5 95 150 100 150Z"
                  fill="url(#paint3_linear)"
                />
                <line x1="100" y1="100" x2="100" y2="150" stroke="url(#paint4_linear)" strokeWidth="2" />
                <defs>
                  <linearGradient id="paint0_linear" x1="50" y1="20" x2="150" y2="140" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#7DD3FC" />
                    <stop offset="1" stopColor="#D946EF" />
                  </linearGradient>
                  <linearGradient id="paint1_linear" x1="75" y1="40" x2="125" y2="100" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#7DD3FC" />
                    <stop offset="1" stopColor="#D946EF" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear"
                    x1="87.5"
                    y1="60"
                    x2="112.5"
                    y2="90"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#7DD3FC" />
                    <stop offset="1" stopColor="#D946EF" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear"
                    x1="87.5"
                    y1="150"
                    x2="112.5"
                    y2="180"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#7DD3FC" />
                    <stop offset="1" stopColor="#D946EF" />
                  </linearGradient>
                  <linearGradient id="paint4_linear" x1="100" y1="100" x2="100" y2="150" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#7DD3FC" />
                    <stop offset="1" stopColor="#D946EF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      )
    case "relationship":
      return (
        <div className="w-full h-full flex items-center justify-center">
          <div className="relative">
            <div className="absolute top-0 left-0 w-32 h-32 bg-cyan-500/30 rounded-full blur-xl"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-fuchsia-500/30 rounded-full blur-xl"></div>

            <div className="relative z-10">
              <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="60" cy="60" r="30" fill="url(#paint0_linear)" fillOpacity="0.5" />
                <circle cx="140" cy="140" r="30" fill="url(#paint1_linear)" fillOpacity="0.5" />
                <path d="M85 85L115 115" stroke="url(#paint2_linear)" strokeWidth="4" strokeLinecap="round" />
                <path d="M85 115L115 85" stroke="url(#paint3_linear)" strokeWidth="4" strokeLinecap="round" />
                <defs>
                  <linearGradient id="paint0_linear" x1="30" y1="30" x2="90" y2="90" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#7DD3FC" />
                    <stop offset="1" stopColor="#7DD3FC" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="paint1_linear" x1="110" y1="110" x2="170" y2="170" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#D946EF" />
                    <stop offset="1" stopColor="#D946EF" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="paint2_linear" x1="85" y1="85" x2="115" y2="115" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#7DD3FC" />
                    <stop offset="1" stopColor="#D946EF" />
                  </linearGradient>
                  <linearGradient id="paint3_linear" x1="85" y1="115" x2="115" y2="85" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#D946EF" />
                    <stop offset="1" stopColor="#7DD3FC" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      )
    case "methodology":
      return (
        <div className="w-full h-full flex items-center justify-center">
          <div className="relative">
            <div className="absolute top-0 left-0 w-32 h-32 bg-cyan-500/30 rounded-full blur-xl"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-fuchsia-500/30 rounded-full blur-xl"></div>

            <div className="relative z-10">
              <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M100 40L140 60V100L100 120L60 100V60L100 40Z"
                  fill="url(#paint0_linear)"
                  fillOpacity="0.3"
                  stroke="url(#paint1_linear)"
                  strokeWidth="2"
                />
                <path
                  d="M100 80L120 90V110L100 120L80 110V90L100 80Z"
                  fill="url(#paint2_linear)"
                  fillOpacity="0.5"
                  stroke="url(#paint3_linear)"
                  strokeWidth="2"
                />
                <path d="M100 120V160" stroke="url(#paint4_linear)" strokeWidth="2" />
                <circle cx="100" cy="170" r="10" fill="url(#paint5_linear)" />
                <defs>
                  <linearGradient id="paint0_linear" x1="60" y1="40" x2="140" y2="120" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#7DD3FC" />
                    <stop offset="1" stopColor="#D946EF" />
                  </linearGradient>
                  <linearGradient id="paint1_linear" x1="60" y1="40" x2="140" y2="120" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#7DD3FC" />
                    <stop offset="1" stopColor="#D946EF" />
                  </linearGradient>
                  <linearGradient id="paint2_linear" x1="80" y1="80" x2="120" y2="120" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#7DD3FC" />
                    <stop offset="1" stopColor="#D946EF" />
                  </linearGradient>
                  <linearGradient id="paint3_linear" x1="80" y1="80" x2="120" y2="120" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#7DD3FC" />
                    <stop offset="1" stopColor="#D946EF" />
                  </linearGradient>
                  <linearGradient id="paint4_linear" x1="100" y1="120" x2="100" y2="160" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#D946EF" />
                    <stop offset="1" stopColor="#7DD3FC" />
                  </linearGradient>
                  <linearGradient id="paint5_linear" x1="90" y1="160" x2="110" y2="180" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#7DD3FC" />
                    <stop offset="1" stopColor="#D946EF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      )
    default:
      return null
  }
}
