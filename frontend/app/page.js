"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  BookOpen,
  Award,
  Globe,
  Users,
  FileText,
  TrendingUp,
  CheckCircle,
  ExternalLink,
  Wind,
  Rocket,
  Zap,
  Cpu,
  Microscope,
  Activity,
  Cloud,
  Lock,
  Monitor,
  MessageSquare,
  Wifi,
  Layers,
  Dna,
  Binary,
  Leaf,
  Shield,
  Box,
  Lightbulb,
} from "lucide-react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white text-justify">
      <section className="relative bg-gradient-to-r from-[#083b7a] to-[#0a4ea3] text-white py-20 mt-16 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex justify-center mb-8 relative">
              {/* Embossed effect - subtle white glow */}
              <div className="absolute inset-0 w-48 h-48 md:w-64 md:h-64 bg-white/40 blur-[64px] rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
              <Link href="/" className="relative z-10">
                <img
                  src="/fei.png"
                  alt="Frontiers in Engineering and Informatics"
                  className="h-24 md:h-32 w-auto scale-110 md:scale-125 transform transition-transform hover:scale-130"
                />
              </Link>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Frontiers in Engineering and Informatics
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-blue-100">
              ISSN: 3049-3412 (Online)
            </p>
            <p className="text-lg md:text-xl max-w-4xl mx-auto mb-8 text-blue-50 leading-relaxed">
              Dedicated to publishing high-quality research that advances the
              fields of engineering and informatics. We welcome original
              research papers, state-of-the-art reviews, and technical notes
              that contribute to theoretical and practical advancements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/submit">
                <button className="px-8 py-4 bg-white text-[#083b7a] rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:scale-95">
                  Submit Your Research
                </button>
              </Link>
              <Link href="/volumes">
                <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white/10 transition-all active:scale-95">
                  Browse Articles
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Supported By Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Supported By
            </h2>
            <div className="w-24 h-1 bg-[#083b7a] mx-auto rounded-full"></div>
          </div>

          <div className="bg-white text-justify rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto border border-gray-100 transform transition-all hover:scale-[1.01]">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#083b7a] to-[#0a4ea3] flex items-center justify-center text-white relative overflow-hidden">
                  <Image
                    src="https://crinfoglobal.com/Human.jpg"
                    alt="Society of Human Centered Technology"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  Society of Human Centered Technology
                </h3>
                <p className="text-lg text-gray-600 mb-2">South Korea</p>
                <p className="text-gray-700 leading-relaxed">
                  Our publication is proudly supported by the{" "}
                  <span className="font-semibold">
                    Society of Human Centered Technology
                  </span>{" "}
                  based in South Korea. This collaboration ensures our
                  commitment to advancing research that puts human needs at the
                  center of technological innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Sponsor Section */}
      <section className="py-16 text-justify bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Editorial Sponsor
            </h2>
            <div className="w-24 h-1 bg-[#083b7a] mx-auto rounded-full"></div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto border border-gray-100 transform transition-all hover:scale-[1.01]">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-full flex items-center justify-center text-white p-2 relative overflow-hidden">
                  <Image
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.jSQIqVHfK0h8av6QJKkK8gHaHZ%3Fpid%3DApi&f=1&ipt=cc721fe38adcaba38f02cf930974866482d6e6d7eb5e617fd1021ede545cd267&ipo=images"
                    alt="KL University Logo"
                    fill
                    className="object-contain p-2"
                  />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  KL University
                </h3>
                <p className="text-lg text-gray-600 mb-2">
                  Andhra Pradesh, India
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We are honored to have{" "}
                  <span className="font-semibold">KL University</span> as our
                  editorial sponsor. Their prestigious academic excellence and
                  commitment to research innovation greatly contribute to the
                  quality and integrity of our publication. This partnership
                  strengthens our mission to disseminate cutting-edge research
                  in engineering and informatics to the global academic
                  community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Indexing and Abstracting */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Indexing and Abstracting
            </h2>
            <div className="w-24 h-1 bg-[#083b7a] mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our journal is indexed and abstracted in renowned databases to
              ensure maximum visibility and accessibility for published
              research.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
            {/* Google Scholar */}
            <div className="flex flex-col items-center">
              <div className="w-48 h-48 relative bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-1">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Scholar_logo.svg"
                  alt="Google Scholar"
                  fill
                  className="object-contain p-6"
                />
              </div>
              <p className="mt-4 text-sm font-medium text-gray-700">
                Google Scholar
              </p>
            </div>

            {/* Crossref */}
            <div className="flex flex-col items-center">
              <div className="w-48 h-48 relative bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-1">
                <Image
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fipmuonline.com%2Fwp-content%2Fuploads%2F2021%2F04%2Fcrossref.jpg&f=1&nofb=1&ipt=bff95b089ed0e9da805bbc49f817bda609ddaaa868ba5e8424b8dbdd392978e8"
                  alt="Crossref"
                  fill
                  className="object-contain p-6"
                />
              </div>
              <p className="mt-4 text-sm font-medium text-gray-700">Crossref</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/indexing">
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#083b7a] text-white rounded-lg font-semibold hover:bg-[#0a4ea3] transition-colors">
                View All Indexing Partners
                <ExternalLink className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
              Research <span className="text-[#083b7a]">Specializations</span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#083b7a] to-blue-400 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Explore our core domains where innovation meets academic excellence across engineering and digital frontiers.
            </p>
          </motion.div>

          <div className="space-y-40">
            {/* Engineering Segment */}
            <div className="flex flex-col lg:flex-row gap-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:w-1/3"
              >
                <div className="sticky top-32">
                  <h3 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">Advanced Engineering</h3>
                  <p className="text-gray-500 text-lg leading-relaxed mb-8">
                    Developing hardware and structural foundations for the physical world, from nanoscale devices to aerospace exploration.
                  </p>
                  <div className="flex gap-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-8 h-1 bg-blue-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          transition={{ duration: 1, delay: i * 0.2 }}
                          className="h-full bg-blue-600"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { title: "Environmental Engineering", desc: "Sustainable water treatment and air quality management solutions.", icon: Wind },
                  { title: "Aerospace Systems", desc: "Propulsion, aerodynamics, and space exploration tech.", icon: Rocket },
                  { title: "Renewable Energy", desc: "Solar, wind, and hydroelectric efficiency innovations.", icon: Zap },
                  { title: "Robotics & AI", desc: "Industrial automation and autonomous machine design.", icon: Cpu },
                  { title: "Nanotechnology", desc: "Materials and devices at the atomic scale.", icon: Microscope },
                  { title: "Biomedical Systems", desc: "Engineering for healthcare and medical devices.", icon: Activity },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:bg-white hover:shadow-xl transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                      <item.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Informatics Segment */}
            <div className="flex flex-col lg:flex-row-reverse gap-16">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:w-1/3"
              >
                <div className="sticky top-32 lg:text-right">
                  <h3 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">Digital Informatics</h3>
                  <p className="text-gray-500 text-lg leading-relaxed mb-8">
                    The software, data, and intelligent systems driving the global digital transformation and quantum future.
                  </p>
                  <div className="flex gap-2 lg:justify-end">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-8 h-1 bg-indigo-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          transition={{ duration: 1, delay: i * 0.2 }}
                          className="h-full bg-indigo-600"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { title: "Cloud & Distributed", desc: "Scalable and fault-tolerant computing infrastructure.", icon: Cloud },
                  { title: "Blockchain & Security", desc: "Decentralized trust and cryptographic protocols.", icon: Lock },
                  { title: "User Interaction", desc: "HCI design and digital user experience.", icon: Monitor },
                  { title: "Quantum Computing", desc: "Revolutionary processing and cryptography.", icon: Binary },
                  { title: "Bioinformatics", desc: "Analyzing biological data via computation.", icon: Dna },
                  { title: "Smart City & IoT", desc: "Integrated devices for urban optimization.", icon: Wifi },
                  { title: "Immersive Tech", desc: "VR/AR for training and education.", icon: Layers },
                  { title: "AI/NLP", desc: "Advanced language and intelligence models.", icon: MessageSquare },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:bg-white hover:shadow-xl transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center mb-4">
                      <item.icon className="w-5 h-5 text-indigo-600" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Interdisciplinary Segment */}
            <div className="flex flex-col lg:flex-row gap-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:w-1/3"
              >
                <div className="sticky top-32">
                  <h3 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">Interdisciplinary Fusion</h3>
                  <p className="text-gray-500 text-lg leading-relaxed mb-8">
                    Where fields collide to solve complex socioeconomic and environmental challenges using technology.
                  </p>
                  <div className="space-y-4">
                    {['Sustainability', 'Ethics', 'Innovation'].map((label, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-teal-600" />
                        <span className="text-sm font-semibold text-gray-700">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-5 gap-4">
                {[
                  { title: "AI for Sustainability", icon: Leaf, col: "md:col-span-3" },
                  { title: "Cyber-Physical", icon: Box, col: "md:col-span-2" },
                  { title: "Ethical Technology", icon: Shield, col: "md:col-span-2" },
                  { title: "Computational Materials", icon: Lightbulb, col: "md:col-span-3" },
                  { title: "Economic Innovation", icon: TrendingUp, col: "md:col-span-5" },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className={`group ${item.col} h-40 bg-gray-50 rounded-2xl p-6 flex items-center gap-6 border border-gray-100 hover:bg-white hover:shadow-xl transition-all relative overflow-hidden`}
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                    <div className="w-16 h-16 flex-shrink-0 rounded-2xl bg-white shadow-sm flex items-center justify-center">
                      <item.icon className="w-8 h-8 text-teal-600" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 relative z-10">{item.title}</h4>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
