import React from 'react'

export default function Page() {
  const primaryBlue = '#0a4ea3'
  const darkBlue = '#083b7a'
  const textColor = '#1f2937'
  const lightBlue = '#e6f0ff'

  const cssVars = {
    '--primary-blue': primaryBlue,
    '--dark-blue': darkBlue,
    '--text-color': textColor,
    '--light-blue': lightBlue,
  }

  return (
    <div className="min-h-screen bg-white text-justify mt-16 py-8 px-5" style={cssVars}>
      <div className="max-w-4xl mx-auto" style={{ color: 'var(--text-color)' }}>
        <header className="mb-6 pb-3 border-b-4" style={{ borderColor: 'var(--primary-blue)' }}>
          <h1 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--dark-blue)' }}>Frontiers in Engineering and Informatics</h1>
          <p className="mt-2 font-semibold" style={{ color: 'var(--primary-blue)' }}>ISSN: 3049-3412 (Online)</p>
        </header>

        <section className="rounded-lg border p-4 mb-6" style={{ background: 'var(--light-blue)', borderColor: 'var(--primary-blue)' }}>
          <h2 className="text-lg md:text-xl font-semibold" style={{ color: 'var(--dark-blue)' }}>Aims &amp; Scope</h2>
          <p className="mt-2 leading-relaxed">
            "Frontiers in Engineering and Informatics" is a peer-reviewed journal devoted to advancing theoretical and practical
            developments in the fields of engineering and informatics which is published by Crinfo Global Publisher (CGP) - A concern of
            CreovSys Solutions India Private Limited. The journal provides a platform for disseminating high-quality research that addresses
            challenges in emerging Engineering and Informatics field of research.
          </p>

          <div className="mt-3">
            <h3 className="text-base font-semibold" style={{ color: 'var(--dark-blue)' }}>Areas of interest include, but are not limited to:</h3>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Artificial Intelligence and Machine Learning</li>
              <li>Big Data Analytics and Cloud Computing</li>
              <li>Internet of Things (IoT) and Smart Systems</li>
              <li>Cybersecurity and Blockchain Technology</li>
              <li>Renewable and Sustainable Engineering</li>
              <li>Advanced Robotics and Automation</li>
              <li>Software Engineering and Programming Languages</li>
              <li>Testing and Verification of Systems</li>
              <li>Visualization and Multimedia Systems</li>
            </ul>
            <p className="mt-3">The journal also publishes research notes, technical reviews, and application-oriented papers, providing an all-encompassing
              view of modern challenges and advancements in the engineering and informatics domains.</p>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-lg md:text-xl font-semibold" style={{ color: 'var(--dark-blue)' }}>Journal Meta Data</h2>
          <dl className="grid grid-cols-[180px_1fr] gap-y-2 gap-x-3 mt-2">
            <dt className="font-semibold" style={{ color: 'var(--dark-blue)' }}>Title</dt>
            <dd>Frontiers in Engineering and Informatics</dd>

            <dt className="font-semibold" style={{ color: 'var(--dark-blue)' }}>Starting Year</dt>
            <dd>2025</dd>

            <dt className="font-semibold" style={{ color: 'var(--dark-blue)' }}>Format</dt>
            <dd>ISSN: 3049-3412 (Online)</dd>

            <dt className="font-semibold" style={{ color: 'var(--dark-blue)' }}>Language</dt>
            <dd>English</dd>

            <dt className="font-semibold" style={{ color: 'var(--dark-blue)' }}>Publication Frequency</dt>
            <dd>Quarterly (4 issues per year)</dd>

            <dt className="font-semibold" style={{ color: 'var(--dark-blue)' }}>Ownership &amp; Publisher</dt>
            <dd>
              Owned and published by CRInfo Global Publication (CGP) - a concern of CrevoSys Solutions India Private Limited.
            </dd>
          </dl>
        </section>

        <section className="mb-6">
          <h2 className="text-lg md:text-xl font-semibold" style={{ color: 'var(--dark-blue)' }}>Publisher Details</h2>
          <p className="mt-2 leading-relaxed">
            CRInfo Global Publishers (CGP) - a concern of CrevoSys Solutions India Private Limited established in 2025, is a distinguished
            research publishing entity. Committed to advancing scientific knowledge, CRInfo Publication specializes in publishing
            high-quality research papers, journals, and books across various domains of engineering, informatics, and technology. As a leading
            publisher, CRInfo Global Publishers (CGP) - a concern of CrevoSys Solutions India Private Limited which fosters interdisciplinary
            research, innovation, and collaboration within the global academic community.
          </p>

          <p className="mt-2 leading-relaxed">
            Based in India, CRInfo Global Publishers (CGP) - a concern of CrevoSys Solutions India Private Limited which collaborates with
            academic institutions, researchers, and professionals to disseminate cutting-edge research. The publisher supports open access
            publishing, ensuring all articles are freely available to a broad audience, thereby accelerating knowledge dissemination and
            global academic engagement. CRInfo Global Publishers (CGP) - a concern of CrevoSys Solutions India Private Limited which upholds
            stringent ethical standards in publishing and peer review to maintain the integrity and credibility of its work.
          </p>

          <p className="mt-2"><strong>Publication Format:</strong> CRInfo Global Publishers (CGP) - a concern of CrevoSys Solutions India Private Limited offers
            research publications in both online (HTML, PDF) and print formats, providing flexibility for readers and researchers worldwide.
          </p>

          <p className="mt-2"><strong>Language:</strong> All publications are primarily available in English, with abstracts accessible in multiple languages to
            enhance global reach and inclusivity.
          </p>

          <p className="mt-2 leading-relaxed">
            CRInfo Global Publishers (CGP) - a concern of CrevoSys Solutions India Private Limited is dedicated to making a significant impact
            in the fields it serves, continuously expanding its portfolio of publications and fostering research collaborations worldwide.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg md:text-xl font-semibold" style={{ color: 'var(--dark-blue)' }}>Publication Frequency</h2>
          <p className="mt-2">Quarterly (4 issues per year)</p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg md:text-xl font-semibold" style={{ color: 'var(--dark-blue)' }}>Ownership</h2>
          <p className="mt-2">The journal is owned and published by CRInfo Global Publishers (CGP) - a concern of CrevoSys Solutions India Private Limited.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg md:text-xl font-semibold" style={{ color: 'var(--dark-blue)' }}>Open Access</h2>
          <p className="mt-2">All articles published in "Frontiers in Engineering and Informatics" are available under the terms of the Creative Commons
            Attribution License (CC-BY 4.0). Articles are freely accessible online from the date of publication, promoting unrestricted use,
            distribution, and reproduction in any medium, provided the original author and source are credited.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg md:text-xl font-semibold" style={{ color: 'var(--dark-blue)' }}>Archiving</h2>
          <p className="mt-2">All articles are archived and preserved in Portico, ensuring long-term digital preservation and accessibility for scholarly
            publications.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg md:text-xl font-semibold" style={{ color: 'var(--dark-blue)' }}>Ethics Statement</h2>
          <p className="mt-2 leading-relaxed">"Frontiers in Engineering and Informatics" is committed to upholding the highest ethical standards in scholarly publishing. The
            journal adheres to COPE's Core Practices and Guidelines to ensure integrity in every aspect of the publishing process.
          </p>
          <p className="mt-2 leading-relaxed">All submissions undergo rigorous peer review and plagiarism checks to maintain the quality and originality of published work. The
            editorial board follows a zero-tolerance policy for unethical practices such as plagiarism, data fabrication, and improper
            authorship credit.
          </p>
          <p className="mt-2 leading-relaxed">Authors, reviewers, and editors are encouraged to report any ethical concerns, ensuring transparency and fairness in the
            publication process.
          </p>
        </section>
      </div>
    </div>
  )
}
