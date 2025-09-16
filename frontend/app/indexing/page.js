import React from 'react'

const page = () => {
  const primaryBlue = '#0a4ea3'
  const darkBlue = '#083b7a'
  const textColor = '#1f2937'
  const lightBlue = '#e6f0ff'

  return (
    <div className='min-h-screen text-black pt-16 bg-white py-8 px-6'>
      <div className="max-w-4xl mx-auto">
        <header style={{ marginBottom: 32, borderBottom: `3px solid ${primaryBlue}`, paddingBottom: 16 }}>
          <h1 style={{ color: darkBlue, fontSize: 36, margin: 0, fontWeight: 'bold' }}>Indexing & Abstracting</h1>
          <h2 style={{ color: primaryBlue, fontSize: 28, margin: '8px 0 0 0', fontWeight: 600 }}>Frontiers in Engineering and Informatics</h2>
          <p style={{ margin: '8px 0 0 0', color: primaryBlue, fontWeight: 600, fontSize: 18 }}>ISSN: 3049-3412 (Online)</p>
        </header>

        <section style={{ background: lightBlue, padding: 24, borderRadius: 12, border: `1px solid ${primaryBlue}`, marginBottom: 32 }}>
          <h2 style={{ color: darkBlue, fontSize: 24, marginTop: 0, marginBottom: 16 }}>Current Indexing & Abstracting</h2>
          <p style={{ marginBottom: 16, fontSize: 16 }}>
            The indexing and abstracting information for the journal "Frontiers in Engineering and Informatics" 
            is currently being updated. We are actively working to include this journal in major indexing 
            databases to ensure maximum visibility and accessibility for published research.
          </p>
        </section>

        <section style={{ marginBottom: 32 }}>
          <h2 style={{ color: darkBlue, fontSize: 24, marginTop: 0, marginBottom: 16 }}>Upcoming Indexing Plans</h2>
          <p style={{ marginBottom: 16, fontSize: 16 }}>
            We are in the process of applying for indexing in renowned databases, including:
          </p>
          <div style={{ background: '#f8fafc', padding: 20, borderRadius: 8, border: `1px solid ${primaryBlue}/20`, marginBottom: 16 }}>
            <p style={{ fontWeight: 600, color: darkBlue, margin: 0 }}>YET TO BE RELEASED</p>
          </div>
          <p style={{ fontSize: 16 }}>
            We appreciate your patience and support as we work towards making "Frontiers in Engineering and 
            Informatics" a highly recognized journal in the academic community.
          </p>
        </section>

        <section style={{ marginBottom: 32 }}>
          <h2 style={{ color: darkBlue, fontSize: 24, marginTop: 0, marginBottom: 16 }}>Benefits of Indexing</h2>
          <p style={{ marginBottom: 16, fontSize: 16 }}>
            Indexing in reputable databases enhances the visibility, credibility, and accessibility of research 
            articles. It ensures that authors' work reaches a broader audience and contributes to the global 
            research community.
          </p>
          <div style={{ background: '#f0f9ff', padding: 20, borderRadius: 8, border: `1px solid ${primaryBlue}/30` }}>
            <h3 style={{ color: darkBlue, fontSize: 18, marginTop: 0, marginBottom: 12 }}>Key Benefits Include:</h3>
            <ul style={{ paddingLeft: 24, margin: 0 }}>
              <li style={{ marginBottom: 8 }}>Enhanced visibility and discoverability of research</li>
              <li style={{ marginBottom: 8 }}>Increased citation potential</li>
              <li style={{ marginBottom: 8 }}>Improved academic reputation and credibility</li>
              <li style={{ marginBottom: 8 }}>Broader reach to international research community</li>
              <li style={{ marginBottom: 8 }}>Better indexing in search engines and academic databases</li>
              <li style={{ marginBottom: 8 }}>Compliance with institutional and funding requirements</li>
            </ul>
          </div>
        </section>

        <section style={{ marginBottom: 32 }}>
          <h2 style={{ color: darkBlue, fontSize: 24, marginTop: 0, marginBottom: 16 }}>Target Databases</h2>
          <p style={{ marginBottom: 16, fontSize: 16 }}>
            We are actively pursuing indexing in the following categories of databases:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            <div style={{ background: '#f8fafc', padding: 20, borderRadius: 8, border: `1px solid ${primaryBlue}/20` }}>
              <h3 style={{ color: darkBlue, fontSize: 18, marginTop: 0, marginBottom: 12 }}>General Academic Databases</h3>
              <ul style={{ paddingLeft: 20, margin: 0 }}>
                <li style={{ marginBottom: 6 }}>Google Scholar</li>
                <li style={{ marginBottom: 6 }}>Microsoft Academic</li>
                <li style={{ marginBottom: 6 }}>ResearchGate</li>
                <li style={{ marginBottom: 6 }}>Academia.edu</li>
              </ul>
            </div>
            <div style={{ background: '#f8fafc', padding: 20, borderRadius: 8, border: `1px solid ${primaryBlue}/20` }}>
              <h3 style={{ color: darkBlue, fontSize: 18, marginTop: 0, marginBottom: 12 }}>Engineering Databases</h3>
              <ul style={{ paddingLeft: 20, margin: 0 }}>
                <li style={{ marginBottom: 6 }}>IEEE Xplore</li>
                <li style={{ marginBottom: 6 }}>Engineering Village</li>
                <li style={{ marginBottom: 6 }}>Compendex</li>
                <li style={{ marginBottom: 6 }}>Inspec</li>
              </ul>
            </div>
            <div style={{ background: '#f8fafc', padding: 20, borderRadius: 8, border: `1px solid ${primaryBlue}/20` }}>
              <h3 style={{ color: darkBlue, fontSize: 18, marginTop: 0, marginBottom: 12 }}>Computer Science Databases</h3>
              <ul style={{ paddingLeft: 20, margin: 0 }}>
                <li style={{ marginBottom: 6 }}>ACM Digital Library</li>
                <li style={{ marginBottom: 6 }}>DBLP</li>
                <li style={{ marginBottom: 6 }}>CiteSeerX</li>
                <li style={{ marginBottom: 6 }}>arXiv</li>
              </ul>
            </div>
          </div>
        </section>

        <section style={{ background: '#f0f9ff', padding: 24, borderRadius: 12, border: `1px solid ${primaryBlue}/30` }}>
          <h2 style={{ color: darkBlue, fontSize: 24, marginTop: 0, marginBottom: 16 }}>Stay Updated</h2>
          <p style={{ marginBottom: 16, fontSize: 16 }}>
            We will update this page as soon as indexing information becomes available. Authors and readers 
            are encouraged to check back regularly for the latest updates on our indexing status.
          </p>
          <p style={{ fontSize: 16, fontWeight: 600, color: darkBlue }}>
            For any queries regarding indexing, please contact us at: <span style={{ color: primaryBlue }}>indexing@crinfoglobal.com</span>
          </p>
        </section>
      </div>
    </div>
  )
}

export default page