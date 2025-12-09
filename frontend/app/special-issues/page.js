import React from "react";

const SpecialIssuesPage = () => {
  const specialIssues = [
    {
      title: "AI-Driven Innovations in Renewable Energy Systems",
      editors: "Dr. DINESH KUMAR ANGURAJ; Dr. D MYTHRAYEE",
      deadline: "15 July 2026",
      status: "Open",
    },
    {
      title: "Exploring Deep Learning Techniques in Multimedia Engineering",
      editors: "Dr. D PADMANABAN; Dr. A. K. VELMURUGAN",
      deadline: "15 August 2026",
      status: "Open",
    },
    {
      title:
        "Recent Advances in Natural Language Processing for Engineering Applications",
      editors: "Dr. V DEEPAK; Dr. D JAGADEESAN",
      deadline: "20 November 2026",
      status: "Open",
    },
    {
      title:
        "Integration of IoMT and Cloud Technologies for Advanced Healthcare Systems",
      editors: "Dr. A. K. VELMURUGAN; Dr. D JAGADEESAN",
      deadline: "26 February 2027",
      status: "Open",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16 py-8 px-6 text-justify">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-[#083b7a] mb-4">
            Open Special Issues
          </h1>
          <h2 className="text-2xl font-semibold text-[#0a4ea3] mb-2">
            Frontiers in Engineering and Informatics
          </h2>
          <p className="text-lg font-medium text-[#0a4ea3]">
            ISSN: 3049-3412 (Online)
          </p>
        </header>

        <section className="bg-blue-50 rounded-xl p-8 mb-12 border border-blue-200">
          <h2 className="text-2xl font-bold text-[#083b7a] mb-4">
            Call for Special Issues
          </h2>
          <p className="text-gray-700 leading-relaxed">
            If you would like to propose a special issue topic for this journal,
            please draft your proposal and send the email to
            <span className="font-semibold text-[#0a4ea3]">
              {" "}
              edboard@crinfoglobal.com
            </span>
            . Our editors will get back to you shortly.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#083b7a] mb-8">
            Special Issue Titles and Editors
          </h2>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-[#083b7a] to-[#0a4ea3] text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold">
                      Special Issue Title
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">
                      Editors
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">
                      Submission Deadline
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {specialIssues.map((issue, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                        {issue.title}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {issue.editors}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {issue.deadline}
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200">
                          {issue.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-[#083b7a] to-[#0a4ea3] rounded-xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">How to Submit</h2>
          <div className="space-y-4">
            <p className="text-blue-100">
              Authors interested in contributing to any of the special issues
              should:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-blue-100">
              <li>
                Prepare your manuscript according to the journal guidelines
              </li>
              <li>Submit through the online submission system</li>
              <li>
                Clearly indicate the special issue title in your submission
              </li>
              <li>
                Include a cover letter mentioning your interest in the special
                issue
              </li>
            </ol>
            <div className="mt-6 p-4 bg-white/10 rounded-lg border border-white/20">
              <p className="font-semibold mb-2">Contact Information:</p>
              <p className="text-blue-100">
                For any queries regarding special issues, please contact:
                edboard@crinfoglobal.com
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SpecialIssuesPage;
