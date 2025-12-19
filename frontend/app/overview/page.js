import React from 'react'

const page = () => {
  const primaryBlue = '#0a4ea3'
  const darkBlue = '#083b7a'
  const textColor = '#000000'
  const lightBlue = '#e6f0ff'

  return (
    <div className='min-h-screen mt-16 text-justify text-black bg-white py-8 px-6'>
      <div className="max-w-4xl mx-auto">
        <header style={{ marginBottom: 32, borderBottom: `3px solid ${primaryBlue}`, paddingBottom: 16 }}>
          <h1 style={{ color: darkBlue, fontSize: 36, margin: 0, fontWeight: 'bold' }}>Journal Overview</h1>
          <h2 style={{ color: primaryBlue, fontSize: 28, margin: '8px 0 0 0', fontWeight: 600 }}>Frontiers in Engineering and Informatics</h2>
          <p style={{ margin: '8px 0 0 0', color: primaryBlue, fontWeight: 600, fontSize: 18 }}>ISSN: 3049-3412 (Online)</p>
        </header>

        <section style={{ background: lightBlue, padding: 24, borderRadius: 12, border: `1px solid ${primaryBlue}`, marginBottom: 32 }}>
          <h2 style={{ color: darkBlue, fontSize: 24, marginTop: 0, marginBottom: 16 }}>Aims & Scope</h2>
          <p style={{ marginBottom: 16, fontSize: 16 }}>
            "Frontiers in Engineering and Informatics" is a leading peer-reviewed journal that publishes original research,
            state-of-the-art reviews, and technical notes. The journal serves as a platform for scholars, practitioners,
            and professionals to share innovative research that advances the fields of engineering and informatics.
          </p>
          <p style={{ marginBottom: 16, fontSize: 16 }}>
            The journal welcomes contributions that address theoretical developments, practical applications, and emerging
            challenges across interdisciplinary domains. Areas of focus include, but are not limited to:
          </p>
          <ul style={{ paddingLeft: 24, marginBottom: 16 }}>
            <li style={{ marginBottom: 8 }}>Artificial Intelligence and Machine Learning</li>
            <li style={{ marginBottom: 8 }}>Big Data Analytics and Cloud Computing</li>
            <li style={{ marginBottom: 8 }}>Cybersecurity and Blockchain Technology</li>
            <li style={{ marginBottom: 8 }}>Renewable and Sustainable Engineering</li>
            <li style={{ marginBottom: 8 }}>Advanced Robotics and Automation</li>
            <li style={{ marginBottom: 8 }}>Software Engineering and Programming Languages</li>
            <li style={{ marginBottom: 8 }}>Internet of Things (IoT) and Smart Systems</li>
            <li style={{ marginBottom: 8 }}>Testing and Verification of Systems</li>
            <li style={{ marginBottom: 8 }}>Visualization and Multimedia Systems</li>
          </ul>
          <p style={{ fontSize: 16 }}>
            Submissions that emphasize the societal impact of research and its implications for industrial applications
            are highly encouraged.
          </p>
        </section>

        <section style={{ marginBottom: 32 }}>
          <h2 style={{ color: darkBlue, fontSize: 24, marginTop: 0, marginBottom: 16 }}>Journal Meta Data</h2>
          <div style={{ background: '#f8fafc', padding: 20, borderRadius: 8, border: `1px solid ${primaryBlue}/20` }}>
            <dl style={{ display: 'grid', gridTemplateColumns: '200px 1fr', rowGap: 12, columnGap: 16, margin: 0 }}>
              <dt style={{ fontWeight: 700, color: darkBlue }}>Title</dt>
              <dd style={{ margin: 0 }}>Frontiers in Engineering and Informatics</dd>
              <dt style={{ fontWeight: 700, color: darkBlue }}>Starting Year</dt>
              <dd style={{ margin: 0 }}>2025</dd>
              <dt style={{ fontWeight: 700, color: darkBlue }}>ISSN</dt>
              <dd style={{ margin: 0 }}>3049-3412 (Online)</dd>
              <dt style={{ fontWeight: 700, color: darkBlue }}>Language</dt>
              <dd style={{ margin: 0 }}>English</dd>
              <dt style={{ fontWeight: 700, color: darkBlue }}>Publication Frequency</dt>
              <dd style={{ margin: 0 }}>Quarterly (4 issues per year)</dd>
              <dt style={{ fontWeight: 700, color: darkBlue }}>Ownership & Publisher</dt>
              <dd style={{ margin: 0 }}>Owned and published by CRInfo Global Publication (CGP) - a concern of CrevoSys Solutions India Private Limited.</dd>
            </dl>
          </div>
        </section>

        <section style={{ marginBottom: 32 }}>
          <h2 style={{ color: darkBlue, fontSize: 24, marginTop: 0, marginBottom: 16 }}>Indexing and Abstracting</h2>
          <p style={{ marginBottom: 16 }}>
            "Frontiers in Engineering and Informatics" is indexed in prestigious databases to enhance visibility
            and ensure accessibility for researchers worldwide. Indexing partners include: <strong>YET TO BE UPDATED!</strong>
          </p>
        </section>

        <section style={{ marginBottom: 32 }}>
          <h2 style={{ color: darkBlue, fontSize: 24, marginTop: 0, marginBottom: 16 }}>Open Access Policy</h2>
          <p style={{ marginBottom: 16 }}>
            All articles published in "Frontiers in Engineering and Informatics" are freely accessible under the
            terms of the Creative Commons Attribution License (CC-BY 4.0). This ensures unrestricted use,
            distribution, and reproduction in any medium, provided the original work is properly cited.
          </p>
        </section>

        <section style={{ marginBottom: 32 }}>
          <h2 style={{ color: darkBlue, fontSize: 24, marginTop: 0, marginBottom: 16 }}>Archiving</h2>
          <p style={{ marginBottom: 16 }}>
            All published articles are digitally preserved in Portico, ensuring long-term accessibility and
            reliability for future generations.
          </p>
        </section>

        <section style={{ marginBottom: 32 }}>
          <h2 style={{ color: darkBlue, fontSize: 24, marginTop: 0, marginBottom: 16 }}>Ethics and Integrity</h2>
          <p style={{ marginBottom: 16 }}>
            The journal adheres to the highest standards of ethical publishing. We follow COPE's Core Practices
            to ensure transparency, fairness, and integrity in all aspects of the publication process.
          </p>
          <p style={{ marginBottom: 12, fontWeight: 600 }}>Key ethical practices include:</p>
          <ul style={{ paddingLeft: 24 }}>
            <li style={{ marginBottom: 8 }}>Zero tolerance for plagiarism and data falsification</li>
            <li style={{ marginBottom: 8 }}>Proper authorship and acknowledgment guidelines</li>
            <li style={{ marginBottom: 8 }}>Rigorous peer-review process</li>
            <li style={{ marginBottom: 8 }}>Conflict-of-interest management</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default page
