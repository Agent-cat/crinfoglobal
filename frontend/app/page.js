import React from "react";
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
} from "lucide-react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white text-justify">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#083b7a] to-[#0a4ea3] text-white py-20 mt-16 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
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

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto border border-gray-100 transform transition-all hover:scale-[1.01]">
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
      <section className="py-16 bg-gray-50">
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Research Areas
            </h2>
            <div className="w-24 h-1 bg-[#083b7a] mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We publish cutting-edge research across diverse fields of
              engineering and informatics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-[#083b7a] mb-4 flex items-center gap-2">
                <FileText className="w-6 h-6" />
                Engineering
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Civil and Structural Engineering</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Mechanical and Manufacturing Engineering</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Electrical and Electronics Engineering</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Chemical and Materials Engineering</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-[#083b7a] mb-4 flex items-center gap-2">
                <FileText className="w-6 h-6" />
                Informatics
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Computer Science and Software Engineering</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Artificial Intelligence and Machine Learning</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Data Science and Big Data Analytics</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Cybersecurity and Information Systems</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
