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
          <h1 style={{ color: darkBlue, fontSize: 36, margin: 0, fontWeight: 'bold' }}>Contact Information</h1>
          <h2 style={{ color: primaryBlue, fontSize: 28, margin: '8px 0 0 0', fontWeight: 600 }}>Frontiers in Engineering and Informatics</h2>
          <p style={{ margin: '8px 0 0 0', color: primaryBlue, fontWeight: 600, fontSize: 18 }}>ISSN: 3049-3412 (Online)</p>
        </header>

        <section style={{ background: lightBlue, padding: 24, borderRadius: 12, border: `1px solid ${primaryBlue}`, marginBottom: 32 }}>
          <h2 style={{ color: darkBlue, fontSize: 24, marginTop: 0, marginBottom: 16 }}>Publisher Information</h2>
          <div style={{ background: 'white', padding: 20, borderRadius: 8, border: `1px solid ${primaryBlue}/30` }}>
            <h3 style={{ color: darkBlue, fontSize: 20, marginTop: 0, marginBottom: 12 }}>CRInfo Global Publishers (CGP)</h3>
            <p style={{ marginBottom: 8, fontWeight: 600 }}>A concern of CrevoSys Solutions India Private Limited</p>
            <p style={{ marginBottom: 8 }}>Established: 2025</p>
            <p style={{ marginBottom: 0 }}>Based in India</p>
          </div>
        </section>

        <section style={{ marginBottom: 32 }}>
          <h2 style={{ color: darkBlue, fontSize: 24, marginTop: 0, marginBottom: 16 }}>Editorial Office</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            <div style={{ background: '#f8fafc', padding: 20, borderRadius: 8, border: `1px solid ${primaryBlue}/20` }}>
              <h3 style={{ color: darkBlue, fontSize: 18, marginTop: 0, marginBottom: 12 }}>General Inquiries</h3>
              <p style={{ marginBottom: 8, fontWeight: 600 }}>Email:</p>
              <p style={{ marginBottom: 8, color: primaryBlue }}>info@crinfoglobal.com</p>
              <p style={{ marginBottom: 8, fontWeight: 600 }}>Phone:</p>
              <p style={{ marginBottom: 0 }}>+91-XXX-XXXX-XXXX</p>
            </div>
            <div style={{ background: '#f8fafc', padding: 20, borderRadius: 8, border: `1px solid ${primaryBlue}/20` }}>
              <h3 style={{ color: darkBlue, fontSize: 18, marginTop: 0, marginBottom: 12 }}>Manuscript Submissions</h3>
              <p style={{ marginBottom: 8, fontWeight: 600 }}>Email:</p>
              <p style={{ marginBottom: 8, color: primaryBlue }}>submission@crinfoglobal.com</p>
              <p style={{ marginBottom: 8, fontWeight: 600 }}>Portal:</p>
              <p style={{ marginBottom: 0 }}>Online Submission System</p>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: 32 }}>
          <h2 style={{ color: darkBlue, fontSize: 24, marginTop: 0, marginBottom: 16 }}>Editorial Board Contact</h2>
          <div style={{ background: '#f8fafc', padding: 20, borderRadius: 8, border: `1px solid ${primaryBlue}/20` }}>
            <h3 style={{ color: darkBlue, fontSize: 18, marginTop: 0, marginBottom: 12 }}>Editor-in-Chief</h3>
            <p style={{ marginBottom: 8, fontWeight: 600 }}>Dr. DINESH KUMAR ANGURAJ</p>
            <p style={{ marginBottom: 8 }}>Professor, Department of Computer Science and Engineering</p>
            <p style={{ marginBottom: 8 }}>Koneru Lakshmaiah Education Foundation, Andhra Pradesh, India</p>
            <p style={{ marginBottom: 0, color: primaryBlue }}>edboard@crinfoglobal.com</p>
          </div>
        </section>

        <section style={{ marginBottom: 32 }}>
          <h2 style={{ color: darkBlue, fontSize: 24, marginTop: 0, marginBottom: 16 }}>Specialized Contacts</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            <div style={{ background: '#f8fafc', padding: 20, borderRadius: 8, border: `1px solid ${primaryBlue}/20` }}>
              <h3 style={{ color: darkBlue, fontSize: 18, marginTop: 0, marginBottom: 12 }}>Article Processing Charges</h3>
              <p style={{ marginBottom: 8, fontWeight: 600 }}>Email:</p>
              <p style={{ marginBottom: 0, color: primaryBlue }}>apc@crinfoglobal.com</p>
            </div>
            <div style={{ background: '#f8fafc', padding: 20, borderRadius: 8, border: `1px solid ${primaryBlue}/20` }}>
              <h3 style={{ color: darkBlue, fontSize: 18, marginTop: 0, marginBottom: 12 }}>Indexing & Abstracting</h3>
              <p style={{ marginBottom: 8, fontWeight: 600 }}>Email:</p>
              <p style={{ marginBottom: 0, color: primaryBlue }}>indexing@crinfoglobal.com</p>
            </div>
            <div style={{ background: '#f8fafc', padding: 20, borderRadius: 8, border: `1px solid ${primaryBlue}/20` }}>
              <h3 style={{ color: darkBlue, fontSize: 18, marginTop: 0, marginBottom: 12 }}>Publication Ethics</h3>
              <p style={{ marginBottom: 8, fontWeight: 600 }}>Email:</p>
              <p style={{ marginBottom: 0, color: primaryBlue }}>ethics@crinfoglobal.com</p>
            </div>
            <div style={{ background: '#f8fafc', padding: 20, borderRadius: 8, border: `1px solid ${primaryBlue}/20` }}>
              <h3 style={{ color: darkBlue, fontSize: 18, marginTop: 0, marginBottom: 12 }}>Technical Support</h3>
              <p style={{ marginBottom: 8, fontWeight: 600 }}>Email:</p>
              <p style={{ marginBottom: 0, color: primaryBlue }}>support@crinfoglobal.com</p>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: 32 }}>
          <h2 style={{ color: darkBlue, fontSize: 24, marginTop: 0, marginBottom: 16 }}>Business Hours</h2>
          <div style={{ background: '#f8fafc', padding: 20, borderRadius: 8, border: `1px solid ${primaryBlue}/20` }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20 }}>
              <div>
                <h3 style={{ color: darkBlue, fontSize: 16, marginTop: 0, marginBottom: 8 }}>Monday - Friday</h3>
                <p style={{ marginBottom: 0 }}>9:00 AM - 6:00 PM IST</p>
              </div>
              <div>
                <h3 style={{ color: darkBlue, fontSize: 16, marginTop: 0, marginBottom: 8 }}>Saturday</h3>
                <p style={{ marginBottom: 0 }}>10:00 AM - 2:00 PM IST</p>
              </div>
              <div>
                <h3 style={{ color: darkBlue, fontSize: 16, marginTop: 0, marginBottom: 8 }}>Sunday</h3>
                <p style={{ marginBottom: 0 }}>Closed</p>
              </div>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: 32 }}>
          <h2 style={{ color: darkBlue, fontSize: 24, marginTop: 0, marginBottom: 16 }}>Response Times</h2>
          <div style={{ background: '#f8fafc', padding: 20, borderRadius: 8, border: `1px solid ${primaryBlue}/20` }}>
            <ul style={{ paddingLeft: 24, margin: 0 }}>
              <li style={{ marginBottom: 8 }}><strong>General Inquiries:</strong> Within 2-3 business days</li>
              <li style={{ marginBottom: 8 }}><strong>Manuscript Submissions:</strong> Initial acknowledgment within 24 hours</li>
              <li style={{ marginBottom: 8 }}><strong>Editorial Decisions:</strong> Within 4-6 weeks</li>
              <li style={{ marginBottom: 8 }}><strong>Technical Support:</strong> Within 1-2 business days</li>
              <li style={{ marginBottom: 8 }}><strong>Ethics Concerns:</strong> Within 1 week</li>
            </ul>
          </div>
        </section>

        <section style={{ marginBottom: 32 }}>
          <h2 style={{ color: darkBlue, fontSize: 24, marginTop: 0, marginBottom: 16 }}>Mailing Address</h2>
          <div style={{ background: '#f8fafc', padding: 20, borderRadius: 8, border: `1px solid ${primaryBlue}/20` }}>
            <h3 style={{ color: darkBlue, fontSize: 18, marginTop: 0, marginBottom: 12 }}>CRInfo Global Publishers (CGP)</h3>
            <p style={{ marginBottom: 8 }}>A concern of CrevoSys Solutions India Private Limited</p>
            <p style={{ marginBottom: 8 }}>[Street Address]</p>
            <p style={{ marginBottom: 8 }}>[City, State]</p>
            <p style={{ marginBottom: 8 }}>[Postal Code]</p>
            <p style={{ marginBottom: 0 }}>India</p>
          </div>
        </section>

        <section style={{ background: '#f0f9ff', padding: 24, borderRadius: 12, border: `1px solid ${primaryBlue}/30` }}>
          <h2 style={{ color: darkBlue, fontSize: 24, marginTop: 0, marginBottom: 16 }}>Get in Touch</h2>
          <p style={{ marginBottom: 16, fontSize: 16 }}>
            We welcome your questions, suggestions, and feedback. Our team is committed to providing 
            excellent service and support to our authors, reviewers, and readers.
          </p>
          <p style={{ fontSize: 16, fontWeight: 600, color: darkBlue }}>
            For urgent matters, please call: <span style={{ color: primaryBlue }}>+91-XXX-XXXX-XXXX</span>
          </p>
        </section>
      </div>
    </div>
  )
}

export default page