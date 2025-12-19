import React from 'react'

const page = () => {
  const primaryBlue = '#0a4ea3'
  const darkBlue = '#083b7a'
  const textColor = '#1f2937'
  const lightBlue = '#e6f0ff'

  return (
    <div className='min-h-screen text-justify text-black pt-16 bg-white py-8 px-6'>
      <div className="max-w-4xl mx-auto">
        <header style={{ marginBottom: 32, borderBottom: `3px solid ${primaryBlue}`, paddingBottom: 16 }}>
          <h1 style={{ color: darkBlue, fontSize: 36, margin: 0, fontWeight: 'bold' }}>Publication Ethics</h1>
          <h2 style={{ color: primaryBlue, fontSize: 28, margin: '8px 0 0 0', fontWeight: 600 }}>Frontiers in Engineering and Informatics</h2>
          <p style={{ margin: '8px 0 0 0', color: primaryBlue, fontWeight: 600, fontSize: 18 }}>ISSN: 3049-3412 (Online)</p>
        </header>

        <section style={{ background: lightBlue, padding: 24, borderRadius: 12, border: `1px solid ${primaryBlue}`, marginBottom: 32 }}>
          <h2 style={{ color: darkBlue, fontSize: 24, marginTop: 0, marginBottom: 16 }}>Our Commitment</h2>
          <p style={{ marginBottom: 16, fontSize: 16 }}>
            "Frontiers in Engineering and Informatics" is committed to maintaining the highest standards of
            publication ethics and integrity. We adhere to the guidelines established by the Committee on
            Publication Ethics (COPE) and follow best practices in scholarly publishing.
          </p>
        </section>

        <section style={{ marginBottom: 32 }}>
          <h2 style={{ color: darkBlue, fontSize: 24, marginTop: 0, marginBottom: 16 }}>Author Responsibilities</h2>
          <div style={{ background: '#f8fafc', padding: 20, borderRadius: 8, border: `1px solid ${primaryBlue}/20` }}>
            <h3 style={{ color: darkBlue, fontSize: 18, marginTop: 0, marginBottom: 12 }}>Originality and Plagiarism</h3>
            <ul style={{ paddingLeft: 24, marginBottom: 16 }}>
              <li style={{ marginBottom: 8 }}>Authors must ensure that their work is original and has not been published elsewhere</li>
              <li style={{ marginBottom: 8 }}>All sources must be properly cited and acknowledged</li>
              <li style={{ marginBottom: 8 }}>Plagiarism in any form is strictly prohibited</li>
              <li style={{ marginBottom: 8 }}>All manuscripts undergo plagiarism detection screening</li>
            </ul>

            <h3 style={{ color: darkBlue, fontSize: 18, marginTop: 0, marginBottom: 12 }}>Data Integrity</h3>
            <ul style={{ paddingLeft: 24, marginBottom: 16 }}>
              <li style={{ marginBottom: 8 }}>Authors must present accurate and reliable data</li>
              <li style={{ marginBottom: 8 }}>Fabrication, falsification, or manipulation of data is unacceptable</li>
              <li style={{ marginBottom: 8 }}>Raw data should be available for review when requested</li>
              <li style={{ marginBottom: 8 }}>Authors must retain research data for a reasonable period</li>
            </ul>

            <h3 style={{ color: darkBlue, fontSize: 18, marginTop: 0, marginBottom: 12 }}>Authorship</h3>
            <ul style={{ paddingLeft: 24, marginBottom: 0 }}>
              <li style={{ marginBottom: 8 }}>All authors must have made significant contributions to the work</li>
              <li style={{ marginBottom: 8 }}>Authorship order should reflect the relative contributions</li>
              <li style={{ marginBottom: 8 }}>All authors must approve the final version of the manuscript</li>
              <li style={{ marginBottom: 8 }}>Ghost authorship and gift authorship are prohibited</li>
            </ul>
          </div>
        </section>

        <section style={{ marginBottom: 32 }}>
          <h2 style={{ color: darkBlue, fontSize: 24, marginTop: 0, marginBottom: 16 }}>Editor Responsibilities</h2>
          <div style={{ background: '#f8fafc', padding: 20, borderRadius: 8, border: `1px solid ${primaryBlue}/20` }}>
            <ul style={{ paddingLeft: 24, margin: 0 }}>
              <li style={{ marginBottom: 8 }}>Editors must evaluate manuscripts based on scientific merit alone</li>
              <li style={{ marginBottom: 8 }}>Decisions should be fair, unbiased, and timely</li>
              <li style={{ marginBottom: 8 }}>Confidentiality of manuscripts must be maintained</li>
              <li style={{ marginBottom: 8 }}>Editors must disclose any conflicts of interest</li>
              <li style={{ marginBottom: 8 }}>Appropriate action must be taken when ethical violations are suspected</li>
              <li style={{ marginBottom: 8 }}>Editors must ensure peer review integrity</li>
            </ul>
          </div>
        </section>

        <section style={{ marginBottom: 32 }}>
          <h2 style={{ color: darkBlue, fontSize: 24, marginTop: 0, marginBottom: 16 }}>Reviewer Responsibilities</h2>
          <div style={{ background: '#f8fafc', padding: 20, borderRadius: 8, border: `1px solid ${primaryBlue}/20` }}>
            <ul style={{ paddingLeft: 24, margin: 0 }}>
              <li style={{ marginBottom: 8 }}>Reviewers must provide objective, constructive, and timely reviews</li>
              <li style={{ marginBottom: 8 }}>Confidentiality of manuscripts must be maintained</li>
              <li style={{ marginBottom: 8 }}>Reviewers must disclose any conflicts of interest</li>
              <li style={{ marginBottom: 8 }}>Reviewers should not use unpublished information for personal gain</li>
              <li style={{ marginBottom: 8 }}>Reviewers must report any suspected ethical violations</li>
              <li style={{ marginBottom: 8 }}>Reviewers should decline reviews if they lack expertise</li>
            </ul>
          </div>
        </section>

        <section style={{ marginBottom: 32 }}>
          <h2 style={{ color: darkBlue, fontSize: 24, marginTop: 0, marginBottom: 16 }}>Conflict of Interest</h2>
          <p style={{ marginBottom: 16, fontSize: 16 }}>
            All parties involved in the publication process must disclose any potential conflicts of interest.
            This includes financial, personal, professional, or other relationships that could influence
            the objectivity of the work.
          </p>
          <div style={{ background: '#f8fafc', padding: 20, borderRadius: 8, border: `1px solid ${primaryBlue}/20` }}>
            <h3 style={{ color: darkBlue, fontSize: 18, marginTop: 0, marginBottom: 12 }}>Types of Conflicts Include:</h3>
            <ul style={{ paddingLeft: 24, margin: 0 }}>
              <li style={{ marginBottom: 8 }}>Financial relationships with funding agencies or commercial entities</li>
              <li style={{ marginBottom: 8 }}>Personal relationships with authors or reviewers</li>
              <li style={{ marginBottom: 8 }}>Professional affiliations that could bias judgment</li>
              <li style={{ marginBottom: 8 }}>Intellectual property interests</li>
              <li style={{ marginBottom: 8 }}>Political or ideological affiliations</li>
            </ul>
          </div>
        </section>

        <section style={{ marginBottom: 32 }}>
          <h2 style={{ color: darkBlue, fontSize: 24, marginTop: 0, marginBottom: 16 }}>Handling Ethical Violations</h2>
          <p style={{ marginBottom: 16, fontSize: 16 }}>
            When ethical violations are suspected or reported, we follow a systematic approach to investigate
            and resolve the matter fairly and transparently.
          </p>
          <div style={{ background: '#f8fafc', padding: 20, borderRadius: 8, border: `1px solid ${primaryBlue}/20` }}>
            <h3 style={{ color: darkBlue, fontSize: 18, marginTop: 0, marginBottom: 12 }}>Investigation Process:</h3>
            <ol style={{ paddingLeft: 24, margin: 0 }}>
              <li style={{ marginBottom: 8 }}>Initial assessment of the complaint or concern</li>
              <li style={{ marginBottom: 8 }}>Gathering of relevant evidence and documentation</li>
              <li style={{ marginBottom: 8 }}>Consultation with appropriate experts or committees</li>
              <li style={{ marginBottom: 8 }}>Fair hearing for all parties involved</li>
              <li style={{ marginBottom: 8 }}>Decision-making based on evidence and guidelines</li>
              <li style={{ marginBottom: 8 }}>Implementation of appropriate corrective measures</li>
              <li style={{ marginBottom: 8 }}>Communication of outcomes to relevant parties</li>
            </ol>
          </div>
        </section>

        <section style={{ marginBottom: 32 }}>
          <h2 style={{ color: darkBlue, fontSize: 24, marginTop: 0, marginBottom: 16 }}>Corrective Actions</h2>
          <div style={{ background: '#f8fafc', padding: 20, borderRadius: 8, border: `1px solid ${primaryBlue}/20` }}>
            <h3 style={{ color: darkBlue, fontSize: 18, marginTop: 0, marginBottom: 12 }}>Available Actions Include:</h3>
            <ul style={{ paddingLeft: 24, margin: 0 }}>
              <li style={{ marginBottom: 8 }}>Publication of corrections or errata</li>
              <li style={{ marginBottom: 8 }}>Retraction of published articles</li>
              <li style={{ marginBottom: 8 }}>Rejection of manuscripts under review</li>
              <li style={{ marginBottom: 8 }}>Banning of authors or reviewers from future submissions</li>
              <li style={{ marginBottom: 8 }}>Notification of institutional authorities</li>
              <li style={{ marginBottom: 8 }}>Public statements regarding ethical violations</li>
            </ul>
          </div>
        </section>

        <section style={{ marginBottom: 32 }}>
          <h2 style={{ color: darkBlue, fontSize: 24, marginTop: 0, marginBottom: 16 }}>Research Integrity</h2>
          <p style={{ marginBottom: 16, fontSize: 16 }}>
            We are committed to promoting research integrity and responsible conduct of research.
            This includes adherence to ethical guidelines, proper data management, and transparent
            reporting of research findings.
          </p>
          <div style={{ background: '#f8fafc', padding: 20, borderRadius: 8, border: `1px solid ${primaryBlue}/20` }}>
            <h3 style={{ color: darkBlue, fontSize: 18, marginTop: 0, marginBottom: 12 }}>Key Principles:</h3>
            <ul style={{ paddingLeft: 24, margin: 0 }}>
              <li style={{ marginBottom: 8 }}>Honesty in all aspects of research</li>
              <li style={{ marginBottom: 8 }}>Accuracy in reporting and analysis</li>
              <li style={{ marginBottom: 8 }}>Objectivity in evaluation and interpretation</li>
              <li style={{ marginBottom: 8 }}>Transparency in methodology and data</li>
              <li style={{ marginBottom: 8 }}>Respect for intellectual property</li>
              <li style={{ marginBottom: 8 }}>Responsibility for research outcomes</li>
            </ul>
          </div>
        </section>

        <section style={{ background: '#f0f9ff', padding: 24, borderRadius: 12, border: `1px solid ${primaryBlue}/30` }}>
          <h2 style={{ color: darkBlue, fontSize: 24, marginTop: 0, marginBottom: 16 }}>Reporting Ethical Concerns</h2>
          <p style={{ marginBottom: 16, fontSize: 16 }}>
            If you suspect any ethical violations or have concerns about the integrity of published work,
            please report them to our ethics committee. All reports will be treated confidentially and
            investigated thoroughly.
          </p>
          <p style={{ fontSize: 16, fontWeight: 600, color: darkBlue }}>
            Ethics Committee: <span style={{ color: primaryBlue }}>ethics@crinfoglobal.com</span>
          </p>
        </section>
      </div>
    </div>
  )
}

export default page
