import React from "react";
import { ExternalLink } from "lucide-react";

const IndexingPage = () => {
  return (
    <div className="min-h-screen bg-white py-16 mt-16 text-justify">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Indexing and Abstracting
          </h1>
          <div className="w-24 h-1 bg-[#083b7a] mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our journal is indexed and abstracted in renowned databases to
            ensure maximum visibility and accessibility for published research.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 mb-12">
          {/* Google Scholar */}
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 flex items-center justify-center bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Scholar_logo.svg"
                alt="Google Scholar"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="mt-4 text-sm font-medium text-gray-700">
              Google Scholar
            </p>
          </div>

          {/* Crossref */}
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 flex items-center justify-center bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
              <img
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fipmuonline.com%2Fwp-content%2Fuploads%2F2021%2F04%2Fcrossref.jpg&f=1&nofb=1&ipt=bff95b089ed0e9da805bbc49f817bda609ddaaa868ba5e8424b8dbdd392978e8"
                alt="Crossref"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="mt-4 text-sm font-medium text-gray-700">Crossref</p>
          </div>
        </div>

        <div className="text-center">
          <a
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#083b7a] text-white rounded-lg font-semibold hover:bg-[#0a4ea3] transition-colors"
          >
            Back to Home
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default IndexingPage;
