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
          <h1 style={{ color: darkBlue, fontSize: 36, margin: 0, fontWeight: 'bold' }}>Article Processing Charge</h1>
          <h2 style={{ color: primaryBlue, fontSize: 28, margin: '8px 0 0 0', fontWeight: 600 }}>Frontiers in Engineering and Informatics</h2>
          <p style={{ margin: '8px 0 0 0', color: primaryBlue, fontWeight: 600, fontSize: 18 }}>ISSN: 3049-3412 (Online)</p>
        </header>

        <section style={{ background: lightBlue, padding: 24, borderRadius: 12, border: `1px solid ${primaryBlue}`, marginBottom: 32 }}>
          <h2 style={{ color: darkBlue, fontSize: 24, marginTop: 0, marginBottom: 16 }}>Open Access Publishing</h2>
          <p style={{ marginBottom: 16, fontSize: 16 }}>
            "Frontiers in Engineering and Informatics" is committed to open access publishing, ensuring that 
            all published research is freely available to readers worldwide. To maintain the high quality of 
            our peer-review process and publication standards, we charge an Article Processing Charge (APC) 
            to cover the costs associated with manuscript handling, peer review, editing, and publication.
          </p>
        </section>

        <section style={{ marginBottom: 32 }}>
          <h2 style={{ color: darkBlue, fontSize: 24, marginTop: 0, marginBottom: 16 }}>APC Structure</h2>
          <div style={{ background: '#f8fafc', padding: 20, borderRadius: 8, border: `1px solid ${primaryBlue}/20` }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
              <div style={{ background: 'white', padding: 20, borderRadius: 8, border: `1px solid ${primaryBlue}/30` }}>
                <h3 style={{ color: darkBlue, fontSize: 20, marginTop: 0, marginBottom: 12 }}>Research Articles</h3>
                <p style={{ fontSize: 24, fontWeight: 'bold', color: primaryBlue, marginBottom: 8 }}>$150 USD</p>
                <p style={{ fontSize: 14, color: textColor, marginBottom: 0 }}>Original research papers with novel findings</p>
              </div>
              <div style={{ background: 'white', padding: 20, borderRadius: 8, border: `1px solid ${primaryBlue}/30` }}>
                <h3 style={{ color: darkBlue, fontSize: 20, marginTop: 0, marginBottom: 12 }}>Review Articles</h3>
                <p style={{ fontSize: 24, fontWeight: 'bold', color: primaryBlue, marginBottom: 8 }}>$200 USD</p>
                <p style={{ fontSize: 14, color: textColor, marginBottom: 0 }}>Comprehensive reviews of existing literature</p>
              </div>
              <div style={{ background: 'white', padding: 20, borderRadius: 8, border: `1px solid ${primaryBlue}/30` }}>
                <h3 style={{ color: darkBlue, fontSize: 20, marginTop: 0, marginBottom: 12 }}>Short Communications</h3>
                <p style={{ fontSize: 24, fontWeight: 'bold', color: primaryBlue, marginBottom: 8 }}>$100 USD</p>
                <p style={{ fontSize: 14, color: textColor, marginBottom: 0 }}>Brief reports and technical notes</p>
              </div>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: 32 }}>
          <h2 style={{ color: darkBlue, fontSize: 24, marginTop: 0, marginBottom: 16 }}>What's Included</h2>
          <div style={{ background: '#f8fafc', padding: 20, borderRadius: 8, border: `1px solid ${primaryBlue}/20` }}>
            <ul style={{ paddingLeft: 24, margin: 0 }}>
              <li style={{ marginBottom: 8 }}>Professional peer review by expert reviewers</li>
              <li style={{ marginBottom: 8 }}>Editorial handling and manuscript processing</li>
              <li style={{ marginBottom: 8 }}>Copyediting and proofreading services</li>
              <li style={{ marginBottom: 8 }}>Professional formatting and typesetting</li>
              <li style={{ marginBottom: 8 }}>DOI assignment and metadata registration</li>
              <li style={{ marginBottom: 8 }}>Online publication and archiving</li>
              <li style={{ marginBottom: 8 }}>Open access under CC-BY 4.0 license</li>
              <li style={{ marginBottom: 8 }}>Indexing in major databases (when available)</li>
              <li style={{ marginBottom: 8 }}>Author support and correspondence</li>
            </ul>
          </div>
        </section>

        <section style={{ marginBottom: 32 }}>
          <h2 style={{ color: darkBlue, fontSize: 24, marginTop: 0, marginBottom: 16 }}>Payment Methods</h2>
          <div style={{ background: '#f8fafc', padding: 20, borderRadius: 8, border: `1px solid ${primaryBlue}/20` }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 20 }}>
              <div style={{ background: 'white', padding: 16, borderRadius: 8, border: `1px solid ${primaryBlue}/30` }}>
                <h3 style={{ color: darkBlue, fontSize: 18, marginTop: 0, marginBottom: 8 }}>Credit/Debit Cards</h3>
                <p style={{ fontSize: 14, color: textColor, marginBottom: 0 }}>Visa, MasterCard, American Express</p>
              </div>
              <div style={{ background: 'white', padding: 16, borderRadius: 8, border: `1px solid ${primaryBlue}/30` }}>
                <h3 style={{ color: darkBlue, fontSize: 18, marginTop: 0, marginBottom: 8 }}>Bank Transfer</h3>
                <p style={{ fontSize: 14, color: textColor, marginBottom: 0 }}>Wire transfer and ACH payments</p>
              </div>
              <div style={{ background: 'white', padding: 16, borderRadius: 8, border: `1px solid ${primaryBlue}/30` }}>
                <h3 style={{ color: darkBlue, fontSize: 18, marginTop: 0, marginBottom: 8 }}>PayPal</h3>
                <p style={{ fontSize: 14, color: textColor, marginBottom: 0 }}>Secure online payment processing</p>
              </div>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: 32 }}>
          <h2 style={{ color: darkBlue, fontSize: 24, marginTop: 0, marginBottom: 16 }}>Waiver Policy</h2>
          <p style={{ marginBottom: 16, fontSize: 16 }}>
            We understand that publication fees can be a barrier for some authors. We offer APC waivers 
            in the following circumstances:
          </p>
          <div style={{ background: '#f8fafc', padding: 20, borderRadius: 8, border: `1px solid ${primaryBlue}/20` }}>
            <ul style={{ paddingLeft: 24, margin: 0 }}>
              <li style={{ marginBottom: 8 }}>Authors from low-income countries (as defined by World Bank)</li>
              <li style={{ marginBottom: 8 }}>Students and early-career researchers with limited funding</li>
              <li style={{ marginBottom: 8 }}>Authors facing financial hardship</li>
              <li style={{ marginBottom: 8 }}>Invited articles and special issue contributions</li>
            </ul>
            <p style={{ marginTop: 16, fontSize: 16, fontWeight: 600, color: darkBlue }}>
              To request a waiver, please contact us at <span style={{ color: primaryBlue }}>apc@crinfoglobal.com</span> 
              with your justification before submitting your manuscript.
            </p>
          </div>
        </section>

        <section style={{ marginBottom: 32 }}>
          <h2 style={{ color: darkBlue, fontSize: 24, marginTop: 0, marginBottom: 16 }}>Payment Timeline</h2>
          <div style={{ background: '#f8fafc', padding: 20, borderRadius: 8, border: `1px solid ${primaryBlue}/20` }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ background: primaryBlue, color: 'white', borderRadius: '50%', width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px', fontWeight: 'bold' }}>1</div>
                <p style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}>Manuscript Submission</p>
                <p style={{ fontSize: 12, color: textColor, marginBottom: 0 }}>Submit your manuscript</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ background: primaryBlue, color: 'white', borderRadius: '50%', width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px', fontWeight: 'bold' }}>2</div>
                <p style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}>Peer Review</p>
                <p style={{ fontSize: 12, color: textColor, marginBottom: 0 }}>Review process begins</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ background: primaryBlue, color: 'white', borderRadius: '50%', width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px', fontWeight: 'bold' }}>3</div>
                <p style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}>Acceptance</p>
                <p style={{ fontSize: 12, color: textColor, marginBottom: 0 }}>Article accepted for publication</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ background: primaryBlue, color: 'white', borderRadius: '50%', width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px', fontWeight: 'bold' }}>4</div>
                <p style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}>Payment</p>
                <p style={{ fontSize: 12, color: textColor, marginBottom: 0 }}>APC payment due</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ background: primaryBlue, color: 'white', borderRadius: '50%', width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px', fontWeight: 'bold' }}>5</div>
                <p style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}>Publication</p>
                <p style={{ fontSize: 12, color: textColor, marginBottom: 0 }}>Article published online</p>
              </div>
            </div>
          </div>
        </section>

        <section style={{ background: '#f0f9ff', padding: 24, borderRadius: 12, border: `1px solid ${primaryBlue}/30` }}>
          <h2 style={{ color: darkBlue, fontSize: 24, marginTop: 0, marginBottom: 16 }}>Contact Information</h2>
          <p style={{ marginBottom: 16, fontSize: 16 }}>
            For questions about Article Processing Charges, payment methods, or waiver requests, 
            please contact our finance team.
          </p>
          <p style={{ fontSize: 16, fontWeight: 600, color: darkBlue }}>
            APC Inquiries: <span style={{ color: primaryBlue }}>apc@crinfoglobal.com</span>
          </p>
        </section>
      </div>
    </div>
  )
}

export default page