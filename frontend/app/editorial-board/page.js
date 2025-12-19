import React from 'react'

const page = () => {
  const primaryBlue = '#0a4ea3'
  const darkBlue = '#083b7a'
  const textColor = '#1f2937'
  const lightBlue = '#e6f0ff'

  return (
    <div className='min-h-screen text-black pt-16 bg-white py-8 px-6'>
      <div className="max-w-6xl mx-auto">
        <header style={{ marginBottom: 32, borderBottom: `3px solid ${primaryBlue}`, paddingBottom: 16 }}>
          <h1 style={{ color: darkBlue, fontSize: 36, margin: 0, fontWeight: 'bold' }}>Editorial Board</h1>
          <h2 style={{ color: primaryBlue, fontSize: 28, margin: '8px 0 0 0', fontWeight: 600 }}>Frontiers in Engineering and Informatics</h2>
          <p style={{ margin: '8px 0 0 0', color: primaryBlue, fontWeight: 600, fontSize: 18 }}>ISSN: 3049-3412 (Online)</p>
        </header>

        <section style={{ background: lightBlue, padding: 24, borderRadius: 12, border: `1px solid ${primaryBlue}`, marginBottom: 32 }}>
          <h2 style={{ color: darkBlue, fontSize: 24, marginTop: 0, marginBottom: 16 }}>Editor-in-Chief</h2>
          <div style={{ background: 'white', padding: 20, borderRadius: 8, border: `1px solid ${primaryBlue}/30` }}>
            <h3 style={{ color: darkBlue, fontSize: 20, marginTop: 0, marginBottom: 8 }}>Dr. DINESH KUMAR ANGURAJ</h3>
            <p style={{ marginBottom: 8, fontWeight: 600 }}>Professor, Department of Computer Science and Engineering</p>
            <p style={{ marginBottom: 8 }}>Koneru Lakshmaiah Education Foundation, Andhra Pradesh, India</p>
            <p style={{ marginBottom: 0, color: primaryBlue }}>edboard@crinfoglobal.com</p>
          </div>
        </section>

        <section style={{ marginBottom: 32 }}>
          <h2 style={{ color: darkBlue, fontSize: 24, marginTop: 0, marginBottom: 16 }}>Associate Editors-in-Chief</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 20 }}>
            <div style={{ background: '#f8fafc', padding: 20, borderRadius: 8, border: `1px solid ${primaryBlue}/20` }}>
              <h3 style={{ color: darkBlue, fontSize: 18, marginTop: 0, marginBottom: 8 }}>Prof. Manisha G</h3>
              <p style={{ marginBottom: 8, fontWeight: 600 }}>Professor, School of Computing and Informatics</p>
              <p style={{ marginBottom: 8 }}>University of Louisiana at Lafayette, USA</p>
              <p style={{ marginBottom: 0, fontSize: 14, color: textColor }}>
                <strong>Area of Research:</strong> Machine learning, 3-D computer vision, video content analysis,
                interactive multimedia, sensor analysis and fusion, visual sensor networks
              </p>
            </div>
            <div style={{ background: '#f8fafc', padding: 20, borderRadius: 8, border: `1px solid ${primaryBlue}/20` }}>
              <h3 style={{ color: darkBlue, fontSize: 18, marginTop: 0, marginBottom: 8 }}>Prof. D Mythrayee</h3>
              <p style={{ marginBottom: 8, fontWeight: 600 }}>Assistant Professor, Department of Computer Science and Engineering</p>
              <p style={{ marginBottom: 8 }}>Koneru Lakshmaiah Education Foundation, Guntur, Andhra Pradesh, INDIA</p>
              <p style={{ marginBottom: 0, fontSize: 14, color: textColor }}>
                <strong>Area of Research:</strong> Computer vision, feature extraction, image classification, artificial intelligence
              </p>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: 32 }}>
          <h2 style={{ color: darkBlue, fontSize: 24, marginTop: 0, marginBottom: 16 }}>Associate Editors</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 20 }}>
            <div style={{ background: '#f8fafc', padding: 20, borderRadius: 8, border: `1px solid ${primaryBlue}/20` }}>
              <h3 style={{ color: darkBlue, fontSize: 18, marginTop: 0, marginBottom: 8 }}>Dr. Gyu Myoung Lee</h3>
              <p style={{ marginBottom: 8, fontWeight: 600 }}>Professor, School of Computer Science and Mathematics</p>
              <p style={{ marginBottom: 8 }}>Liverpool John Moores University, UK</p>
              <p style={{ marginBottom: 0, fontSize: 14, color: textColor }}>
                <strong>Area of Research:</strong> Trustworthy networking and services, trust in data and AI,
                blockchain, cybersecurity, privacy-preservation
              </p>
            </div>
            <div style={{ background: '#f8fafc', padding: 20, borderRadius: 8, border: `1px solid ${primaryBlue}/20` }}>
              <h3 style={{ color: darkBlue, fontSize: 18, marginTop: 0, marginBottom: 8 }}>Prof. K Padmanaban</h3>
              <p style={{ marginBottom: 8, fontWeight: 600 }}>Professor, Department of Computer Science and Engineering</p>
              <p style={{ marginBottom: 8 }}>Koneru Lakshmaiah Education Foundation, Andhra Pradesh, India</p>
              <p style={{ marginBottom: 0, fontSize: 14, color: textColor }}>
                <strong>Area of Research:</strong> Social/semantic network analysis, natural language processing,
                collective behavior modeling, risk communication, multi-modal analysis of personality
              </p>
            </div>
            <div style={{ background: '#f8fafc', padding: 20, borderRadius: 8, border: `1px solid ${primaryBlue}/20` }}>
              <h3 style={{ color: darkBlue, fontSize: 18, marginTop: 0, marginBottom: 8 }}>Dr. Shaji Kalistine Apolinmary</h3>
              <p style={{ marginBottom: 8, fontWeight: 600 }}>Professor, Dept of IT</p>
              <p style={{ marginBottom: 8 }}>University of Technology and Applied Sciences Al-MUSANNA, Sultanate of Oman</p>
              <p style={{ marginBottom: 0, fontSize: 14, color: textColor }}>
                <strong>Area of Research:</strong> Wireless Sensor Networks, natural language processing,
                Network Security, risk communication, Time Series Analysis
              </p>
            </div>
            <div style={{ background: '#f8fafc', padding: 20, borderRadius: 8, border: `1px solid ${primaryBlue}/20` }}>
              <h3 style={{ color: darkBlue, fontSize: 18, marginTop: 0, marginBottom: 8 }}>Dr. Prabakaran Sellamuthu</h3>
              <p style={{ marginBottom: 8, fontWeight: 600 }}>Associate Professor, Faculty of Economic and Administrative Sciences</p>
              <p style={{ marginBottom: 8 }}>Pontificia Universidad Javeriana, Cali, Colombia</p>
              <p style={{ marginBottom: 0, fontSize: 14, color: textColor }}>
                <strong>Area of Research:</strong> Sustainable IT, Education 5.0, physiological computing,
                artificial intelligence, medical informatics
              </p>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: 32 }}>
          <h2 style={{ color: darkBlue, fontSize: 24, marginTop: 0, marginBottom: 16 }}>Editorial Board Members</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 20 }}>
            <div style={{ background: '#f8fafc', padding: 20, borderRadius: 8, border: `1px solid ${primaryBlue}/20` }}>
              <h3 style={{ color: darkBlue, fontSize: 18, marginTop: 0, marginBottom: 8 }}>Dr. Balasubramani S</h3>
              <p style={{ marginBottom: 8, fontWeight: 600 }}>Professor, Department of Computer Science and Engineering</p>
              <p style={{ marginBottom: 8 }}>Koneru Lakshmaiah Education Foundation, Andhra Pradesh, India</p>
              <p style={{ marginBottom: 0, fontSize: 14, color: textColor }}>
                <strong>Area of Research:</strong> Image Processing, Artificial Intelligence, Machine Learning
              </p>
            </div>
            <div style={{ background: '#f8fafc', padding: 20, borderRadius: 8, border: `1px solid ${primaryBlue}/20` }}>
              <h3 style={{ color: darkBlue, fontSize: 18, marginTop: 0, marginBottom: 8 }}>Dr. D. JAGADEESAN</h3>
              <p style={{ marginBottom: 8, fontWeight: 600 }}>Professor and Dean (i/c), School of Technology</p>
              <p style={{ marginBottom: 8 }}>The Apollo University, Andhra Pradesh, India</p>
              <p style={{ marginBottom: 0, fontSize: 14, color: textColor }}>
                <strong>Area of Research:</strong> Artificial Intelligence, Deep Learning, IoT Security
              </p>
            </div>
            <div style={{ background: '#f8fafc', padding: 20, borderRadius: 8, border: `1px solid ${primaryBlue}/20` }}>
              <h3 style={{ color: darkBlue, fontSize: 18, marginTop: 0, marginBottom: 8 }}>Dr. R. Nidhya</h3>
              <p style={{ marginBottom: 8, fontWeight: 600 }}>Professor, Department of Computer Science and Engineering</p>
              <p style={{ marginBottom: 8 }}>Madanapalli Institute of Technology and Science (MITS), Andhra Pradesh, India</p>
              <p style={{ marginBottom: 0, fontSize: 14, color: textColor }}>
                <strong>Area of Research:</strong> Cloud Computing, Big Data Analytics, Cybersecurity
              </p>
            </div>
            <div style={{ background: '#f8fafc', padding: 20, borderRadius: 8, border: `1px solid ${primaryBlue}/20` }}>
              <h3 style={{ color: darkBlue, fontSize: 18, marginTop: 0, marginBottom: 8 }}>Dr. A. K Velmurugan</h3>
              <p style={{ marginBottom: 8, fontWeight: 600 }}>Professor, Department of Computer Science and Engineering</p>
              <p style={{ marginBottom: 8 }}>Koneru Lakshmaiah Education Foundation, Andhra Pradesh, India</p>
              <p style={{ marginBottom: 0, fontSize: 14, color: textColor }}>
                <strong>Area of Research:</strong> Image Processing, Artificial Intelligence, Machine Learning
              </p>
            </div>
            <div style={{ background: '#f8fafc', padding: 20, borderRadius: 8, border: `1px solid ${primaryBlue}/20` }}>
              <h3 style={{ color: darkBlue, fontSize: 18, marginTop: 0, marginBottom: 8 }}>Dr. Santhosh Jayagopalan</h3>
              <p style={{ marginBottom: 8, fontWeight: 600 }}>Assistant Professor, School of Computing</p>
              <p style={{ marginBottom: 8 }}>British Applied College, Umm Al Quwain, United Arab Emirates (UAE)</p>
              <p style={{ marginBottom: 0, fontSize: 14, color: textColor }}>
                <strong>Area of Research:</strong> Cybersecurity, Blockchain, Cloud Security
              </p>
            </div>
            <div style={{ background: '#f8fafc', padding: 20, borderRadius: 8, border: `1px solid ${primaryBlue}/20` }}>
              <h3 style={{ color: darkBlue, fontSize: 18, marginTop: 0, marginBottom: 8 }}>Dr. A. M. Senthil Kumar</h3>
              <p style={{ marginBottom: 8, fontWeight: 600 }}>Associate Professor, School of Computer Science (SCOPE)</p>
              <p style={{ marginBottom: 8 }}>VIT University, Chennai Campus, Chennai, Tamil Nadu, INDIA</p>
              <p style={{ marginBottom: 0, fontSize: 14, color: textColor }}>
                <strong>Area of Research:</strong> Data Science, AI-driven Automation, Bioinformatics
              </p>
            </div>
          </div>
        </section>

        <section style={{ background: '#f0f9ff', padding: 24, borderRadius: 12, border: `1px solid ${primaryBlue}/30` }}>
          <h2 style={{ color: darkBlue, fontSize: 24, marginTop: 0, marginBottom: 16 }}>Editorial Board Contact</h2>
          <p style={{ marginBottom: 16, fontSize: 16 }}>
            For editorial matters, manuscript submissions, or any queries related to the editorial process,
            please contact our editorial board.
          </p>
          <p style={{ fontSize: 16, fontWeight: 600, color: darkBlue }}>
            General Editorial Inquiries: <span style={{ color: primaryBlue }}>edboard@crinfoglobal.com</span>
          </p>
        </section>
      </div>
    </div>
  )
}

export default page
