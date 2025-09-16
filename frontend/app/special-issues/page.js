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
          <h1 style={{ color: darkBlue, fontSize: 36, margin: 0, fontWeight: 'bold' }}>Open Special Issues</h1>
          <h2 style={{ color: primaryBlue, fontSize: 28, margin: '8px 0 0 0', fontWeight: 600 }}>Frontiers in Engineering and Informatics</h2>
          <p style={{ margin: '8px 0 0 0', color: primaryBlue, fontWeight: 600, fontSize: 18 }}>ISSN: 3049-3412 (Online)</p>
        </header>

        <section style={{ background: lightBlue, padding: 24, borderRadius: 12, border: `1px solid ${primaryBlue}`, marginBottom: 32 }}>
          <h2 style={{ color: darkBlue, fontSize: 24, marginTop: 0, marginBottom: 16 }}>Call for Special Issues</h2>
          <p style={{ marginBottom: 16, fontSize: 16 }}>
            "Frontiers in Engineering and Informatics" invites proposals for special issues on cutting-edge 
            topics in engineering and informatics. Special issues provide an opportunity to explore 
            emerging trends, address current challenges, and showcase innovative research in focused areas.
          </p>
        </section>

        <section style={{ marginBottom: 32 }}>
          <h2 style={{ color: darkBlue, fontSize: 24, marginTop: 0, marginBottom: 16 }}>Currently Open Special Issues</h2>
          <div style={{ background: '#f8fafc', padding: 20, borderRadius: 8, border: `1px solid ${primaryBlue}/20` }}>
            <div style={{ textAlign: 'center', padding: 40 }}>
              <h3 style={{ color: darkBlue, fontSize: 20, marginTop: 0, marginBottom: 16 }}>No Special Issues Currently Open</h3>
              <p style={{ fontSize: 16, color: textColor, marginBottom: 0 }}>
                We are currently not accepting submissions for any special issues. 
                Please check back regularly for new opportunities.
              </p>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: 32 }}>
          <h2 style={{ color: darkBlue, fontSize: 24, marginTop: 0, marginBottom: 16 }}>Proposing a Special Issue</h2>
          <p style={{ marginBottom: 16, fontSize: 16 }}>
            We welcome proposals for special issues from researchers, practitioners, and professionals 
            in the fields of engineering and informatics. Special issue proposals should align with 
            the journal's scope and address topics of significant interest to the research community.
          </p>
          
          <div style={{ background: '#f8fafc', padding: 20, borderRadius: 8, border: `1px solid ${primaryBlue}/20` }}>
            <h3 style={{ color: darkBlue, fontSize: 18, marginTop: 0, marginBottom: 12 }}>Proposal Requirements:</h3>
            <ul style={{ paddingLeft: 24, margin: 0 }}>
              <li style={{ marginBottom: 8 }}>Clear title and scope of the special issue</li>
              <li style={{ marginBottom: 8 }}>Detailed description of the topic and its significance</li>
              <li style={{ marginBottom: 8 }}>List of potential guest editors (minimum 2-3)</li>
              <li style={{ marginBottom: 8 }}>Tentative timeline for submission and publication</li>
              <li style={{ marginBottom: 8 }}>Expected number of articles (typically 8-15)</li>
              <li style={{ marginBottom: 8 }}>Target audience and potential contributors</li>
            </ul>
          </div>
        </section>

        <section style={{ marginBottom: 32 }}>
          <h2 style={{ color: darkBlue, fontSize: 24, marginTop: 0, marginBottom: 16 }}>Guest Editor Responsibilities</h2>
          <div style={{ background: '#f8fafc', padding: 20, borderRadius: 8, border: `1px solid ${primaryBlue}/20` }}>
            <h3 style={{ color: darkBlue, fontSize: 18, marginTop: 0, marginBottom: 12 }}>Guest editors are responsible for:</h3>
            <ul style={{ paddingLeft: 24, margin: 0 }}>
              <li style={{ marginBottom: 8 }}>Developing the call for papers and promoting the special issue</li>
              <li style={{ marginBottom: 8 }}>Managing the peer review process for submitted manuscripts</li>
              <li style={{ marginBottom: 8 }}>Making editorial decisions in consultation with the journal editors</li>
              <li style={{ marginBottom: 8 }}>Ensuring timely completion of the review process</li>
              <li style={{ marginBottom: 8 }}>Writing an editorial introduction for the special issue</li>
              <li style={{ marginBottom: 8 }}>Maintaining high standards of quality and ethics</li>
            </ul>
          </div>
        </section>

        <section style={{ marginBottom: 32 }}>
          <h2 style={{ color: darkBlue, fontSize: 24, marginTop: 0, marginBottom: 16 }}>Special Issue Topics of Interest</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            <div style={{ background: '#f8fafc', padding: 20, borderRadius: 8, border: `1px solid ${primaryBlue}/20` }}>
              <h3 style={{ color: darkBlue, fontSize: 18, marginTop: 0, marginBottom: 12 }}>Artificial Intelligence</h3>
              <ul style={{ paddingLeft: 20, margin: 0 }}>
                <li style={{ marginBottom: 6 }}>Machine Learning Applications</li>
                <li style={{ marginBottom: 6 }}>Deep Learning in Engineering</li>
                <li style={{ marginBottom: 6 }}>AI Ethics and Fairness</li>
                <li style={{ marginBottom: 6 }}>Natural Language Processing</li>
              </ul>
            </div>
            <div style={{ background: '#f8fafc', padding: 20, borderRadius: 8, border: `1px solid ${primaryBlue}/20` }}>
              <h3 style={{ color: darkBlue, fontSize: 18, marginTop: 0, marginBottom: 12 }}>Cybersecurity</h3>
              <ul style={{ paddingLeft: 20, margin: 0 }}>
                <li style={{ marginBottom: 6 }}>Blockchain Technology</li>
                <li style={{ marginBottom: 6 }}>Network Security</li>
                <li style={{ marginBottom: 6 }}>Cryptographic Systems</li>
                <li style={{ marginBottom: 6 }}>Privacy Preservation</li>
              </ul>
            </div>
            <div style={{ background: '#f8fafc', padding: 20, borderRadius: 8, border: `1px solid ${primaryBlue}/20` }}>
              <h3 style={{ color: darkBlue, fontSize: 18, marginTop: 0, marginBottom: 12 }}>IoT & Smart Systems</h3>
              <ul style={{ paddingLeft: 20, margin: 0 }}>
                <li style={{ marginBottom: 6 }}>Smart Cities</li>
                <li style={{ marginBottom: 6 }}>Industrial IoT</li>
                <li style={{ marginBottom: 6 }}>Sensor Networks</li>
                <li style={{ marginBottom: 6 }}>Edge Computing</li>
              </ul>
            </div>
            <div style={{ background: '#f8fafc', padding: 20, borderRadius: 8, border: `1px solid ${primaryBlue}/20` }}>
              <h3 style={{ color: darkBlue, fontSize: 18, marginTop: 0, marginBottom: 12 }}>Data Science</h3>
              <ul style={{ paddingLeft: 20, margin: 0 }}>
                <li style={{ marginBottom: 6 }}>Big Data Analytics</li>
                <li style={{ marginBottom: 6 }}>Cloud Computing</li>
                <li style={{ marginBottom: 6 }}>Data Visualization</li>
                <li style={{ marginBottom: 6 }}>Predictive Modeling</li>
              </ul>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: 32 }}>
          <h2 style={{ color: darkBlue, fontSize: 24, marginTop: 0, marginBottom: 16 }}>Submission Guidelines</h2>
          <div style={{ background: '#f8fafc', padding: 20, borderRadius: 8, border: `1px solid ${primaryBlue}/20` }}>
            <h3 style={{ color: darkBlue, fontSize: 18, marginTop: 0, marginBottom: 12 }}>For Special Issue Submissions:</h3>
            <ul style={{ paddingLeft: 24, margin: 0 }}>
              <li style={{ marginBottom: 8 }}>Follow the same formatting guidelines as regular submissions</li>
              <li style={{ marginBottom: 8 }}>Indicate the special issue title in the cover letter</li>
              <li style={{ marginBottom: 8 }}>Ensure relevance to the special issue theme</li>
              <li style={{ marginBottom: 8 }}>Meet the same quality standards as regular articles</li>
              <li style={{ marginBottom: 8 }}>Submit through the regular submission portal</li>
              <li style={{ marginBottom: 8 }}>Include a statement of contribution to the special issue</li>
            </ul>
          </div>
        </section>

        <section style={{ marginBottom: 32 }}>
          <h2 style={{ color: darkBlue, fontSize: 24, marginTop: 0, marginBottom: 16 }}>Timeline and Process</h2>
          <div style={{ background: '#f8fafc', padding: 20, borderRadius: 8, border: `1px solid ${primaryBlue}/20` }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ background: primaryBlue, color: 'white', borderRadius: '50%', width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px', fontWeight: 'bold' }}>1</div>
                <p style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}>Proposal Submission</p>
                <p style={{ fontSize: 12, color: textColor, marginBottom: 0 }}>Submit special issue proposal</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ background: primaryBlue, color: 'white', borderRadius: '50%', width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px', fontWeight: 'bold' }}>2</div>
                <p style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}>Review & Approval</p>
                <p style={{ fontSize: 12, color: textColor, marginBottom: 0 }}>Editorial board review</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ background: primaryBlue, color: 'white', borderRadius: '50%', width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px', fontWeight: 'bold' }}>3</div>
                <p style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}>Call for Papers</p>
                <p style={{ fontSize: 12, color: textColor, marginBottom: 0 }}>Publication of call</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ background: primaryBlue, color: 'white', borderRadius: '50%', width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px', fontWeight: 'bold' }}>4</div>
                <p style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}>Submission Period</p>
                <p style={{ fontSize: 12, color: textColor, marginBottom: 0 }}>Authors submit manuscripts</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ background: primaryBlue, color: 'white', borderRadius: '50%', width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px', fontWeight: 'bold' }}>5</div>
                <p style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}>Publication</p>
                <p style={{ fontSize: 12, color: textColor, marginBottom: 0 }}>Special issue published</p>
              </div>
            </div>
          </div>
        </section>

        <section style={{ background: '#f0f9ff', padding: 24, borderRadius: 12, border: `1px solid ${primaryBlue}/30` }}>
          <h2 style={{ color: darkBlue, fontSize: 24, marginTop: 0, marginBottom: 16 }}>Submit Your Proposal</h2>
          <p style={{ marginBottom: 16, fontSize: 16 }}>
            Interested in proposing a special issue? We encourage researchers to submit proposals 
            that address emerging trends and challenges in engineering and informatics.
          </p>
          <p style={{ fontSize: 16, fontWeight: 600, color: darkBlue }}>
            Special Issue Proposals: <span style={{ color: primaryBlue }}>specialissues@crinfoglobal.com</span>
          </p>
        </section>
      </div>
    </div>
  )
}

export default page
