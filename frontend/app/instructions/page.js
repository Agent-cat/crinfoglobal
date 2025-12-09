import React from "react";

const page = () => {
  const primaryBlue = "#0a4ea3";
  const darkBlue = "#083b7a";
  const textColor = "#1f2937";
  const lightBlue = "#e6f0ff";

  return (
    <div className="min-h-screen text-black pt-16 bg-white py-8 px-6">
      <div className="max-w-4xl mx-auto">
        <header
          style={{
            marginBottom: 32,
            borderBottom: `3px solid ${primaryBlue}`,
            paddingBottom: 16,
          }}
        >
          <h1
            style={{
              color: darkBlue,
              fontSize: 36,
              margin: 0,
              fontWeight: "bold",
            }}
          >
            Submission Instructions
          </h1>
          <h2
            style={{
              color: primaryBlue,
              fontSize: 28,
              margin: "8px 0 0 0",
              fontWeight: 600,
            }}
          >
            Frontiers in Engineering and Informatics
          </h2>
          <p
            style={{
              margin: "8px 0 0 0",
              color: primaryBlue,
              fontWeight: 600,
              fontSize: 18,
            }}
          >
            ISSN: 3049-3412 (Online)
          </p>
        </header>

        <section
          style={{
            background: lightBlue,
            padding: 24,
            borderRadius: 12,
            border: `1px solid ${primaryBlue}`,
            marginBottom: 32,
          }}
        >
          <h2
            style={{
              color: darkBlue,
              fontSize: 24,
              marginTop: 0,
              marginBottom: 16,
            }}
          >
            Article Types
          </h2>
          <ul style={{ paddingLeft: 24, margin: 0, fontSize: 16 }}>
            <li style={{ marginBottom: 8 }}>Research Articles</li>
            <li style={{ marginBottom: 8 }}>Review Articles</li>
            <li style={{ marginBottom: 8 }}>Editorials</li>
            <li style={{ marginBottom: 8 }}>Communications</li>
            <li style={{ marginBottom: 0 }}>Letters</li>
          </ul>
        </section>

        <section style={{ marginBottom: 32 }}>
          <h2
            style={{
              color: darkBlue,
              fontSize: 24,
              marginTop: 0,
              marginBottom: 16,
            }}
          >
            General Formatting Guidelines
          </h2>
          <div
            style={{
              background: "#f8fafc",
              padding: 20,
              borderRadius: 8,
              border: `1px solid ${primaryBlue}/20`,
            }}
          >
            <ul style={{ paddingLeft: 24, margin: 0, fontSize: 16 }}>
              <li style={{ marginBottom: 8 }}>
                <strong>Paper Title:</strong> Use Times New Roman, font size 14,
                and bold for the title.
              </li>
              <li style={{ marginBottom: 8 }}>
                <strong>Author Information:</strong> List authors, their
                affiliations, and email addresses below the title.
              </li>
              <li style={{ marginBottom: 8 }}>
                <strong>Abstract:</strong> Use Times New Roman, font size 11,
                and italic for the heading. The abstract text should be Times
                New Roman, font size 11.
              </li>
              <li style={{ marginBottom: 8 }}>
                <strong>Keywords:</strong> Provide up to 4-5 keywords, separated
                by commas.
              </li>
              <li style={{ marginBottom: 8 }}>
                <strong>Margins:</strong> Use 2.54 cm (1 inch) margins on all
                sides.
              </li>
              <li style={{ marginBottom: 8 }}>
                <strong>Font:</strong> Times New Roman, font size 11 throughout
                the manuscript.
              </li>
              <li style={{ marginBottom: 8 }}>
                <strong>Line Spacing:</strong> Use single spacing throughout the
                document.
              </li>
              <li style={{ marginBottom: 8 }}>
                <strong>Section Titles:</strong> Use uppercase and bold for
                major section titles. Subsection titles should be bold and
                italic.
              </li>
              <li style={{ marginBottom: 8 }}>
                <strong>Figures:</strong> Center figures and provide captions
                below them (e.g., "Figure 1: Caption"). Ensure images are high
                quality (300 dpi).
              </li>
              <li style={{ marginBottom: 8 }}>
                <strong>Tables:</strong> Center tables and provide captions
                above them (e.g., "Table 1: Caption").
              </li>
              <li style={{ marginBottom: 0 }}>
                <strong>Equations:</strong> Use MS Word's equation editor to
                insert equations and number them consecutively (e.g., Eq. (1)).
              </li>
            </ul>
          </div>
        </section>

        <section style={{ marginBottom: 32 }}>
          <h2
            style={{
              color: darkBlue,
              fontSize: 24,
              marginTop: 0,
              marginBottom: 16,
            }}
          >
            References and Citations
          </h2>
          <p style={{ marginBottom: 16, fontSize: 16 }}>
            Please use the following formats for references:
          </p>
          <div
            style={{
              background: "#f8fafc",
              padding: 20,
              borderRadius: 8,
              border: `1px solid ${primaryBlue}/20`,
            }}
          >
            <div style={{ marginBottom: 20 }}>
              <h3
                style={{
                  color: darkBlue,
                  fontSize: 18,
                  marginTop: 0,
                  marginBottom: 8,
                }}
              >
                Book:
              </h3>
              <p style={{ fontStyle: "italic", margin: 0, fontSize: 16 }}>
                Stamp M. Information security: principles and practice. John
                Wiley & Sons; 2011 May 3.
              </p>
            </div>

            <div style={{ marginBottom: 20 }}>
              <h3
                style={{
                  color: darkBlue,
                  fontSize: 18,
                  marginTop: 0,
                  marginBottom: 8,
                }}
              >
                Conference Paper:
              </h3>
              <p style={{ fontStyle: "italic", margin: 0, fontSize: 16 }}>
                Maes F, Vandermeulen D, Suetens P. Medical image registration
                using mutual information. Proceedings of the IEEE. 2003 Sep
                15;91(10):1699-722.
              </p>
            </div>

            <div>
              <h3
                style={{
                  color: darkBlue,
                  fontSize: 18,
                  marginTop: 0,
                  marginBottom: 8,
                }}
              >
                Journal:
              </h3>
              <p style={{ fontStyle: "italic", margin: 0, fontSize: 16 }}>
                Liang Z, Jaszczak RJ, Coleman RE. Parameter estimation of finite
                mixtures using the EM algorithm and information criteria with
                application to medical image processing. IEEE Transactions on
                Nuclear Science. 1992 Aug;39(4):1126-33.
              </p>
            </div>
          </div>

          <p style={{ marginTop: 16, fontSize: 16 }}>
            Cite references in-text using bracketed numbers, e.g., [1], [2],
            [3].
          </p>
        </section>

        <section style={{ marginBottom: 32 }}>
          <h2
            style={{
              color: darkBlue,
              fontSize: 24,
              marginTop: 0,
              marginBottom: 16,
            }}
          >
            Download Templates
          </h2>
          <p style={{ marginBottom: 16, fontSize: 16 }}>
            We recommend using the following templates when preparing your
            manuscript:
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a
              href="/templates/CrinfoGlobal_Template_Word.docx"
              download
              style={{
                background: primaryBlue,
                color: "white",
                padding: "12px 24px",
                borderRadius: 8,
                border: "none",
                cursor: "pointer",
                fontSize: 16,
                fontWeight: 600,
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Download Word Template
            </a>
            <a
              href="/templates/CrinfoGlobal_Template_Latex.zip"
              download
              style={{
                background: primaryBlue,
                color: "white",
                padding: "12px 24px",
                borderRadius: 8,
                border: "none",
                cursor: "pointer",
                fontSize: 16,
                fontWeight: 600,
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Download LaTeX Template
            </a>
          </div>
        </section>

        <section style={{ marginBottom: 32 }}>
          <h2
            style={{
              color: darkBlue,
              fontSize: 24,
              marginTop: 0,
              marginBottom: 16,
            }}
          >
            Submission Process
          </h2>
          <p style={{ marginBottom: 16, fontSize: 16 }}>
            Manuscripts can be submitted via email or through our online
            submission portal:
          </p>
          <div
            style={{
              background: "#f8fafc",
              padding: 20,
              borderRadius: 8,
              border: `1px solid ${primaryBlue}/20`,
            }}
          >
            <div style={{ marginBottom: 16 }}>
              <h3
                style={{
                  color: darkBlue,
                  fontSize: 18,
                  marginTop: 0,
                  marginBottom: 8,
                }}
              >
                Email Submission:
              </h3>
              <p style={{ margin: 0, fontSize: 16 }}>
                Send your manuscript to{" "}
                <a
                  href="mailto:submission@crinfoglobal.com"
                  style={{ color: primaryBlue, textDecoration: "underline" }}
                >
                  submission@crinfoglobal.com
                </a>
                .
              </p>
            </div>
            <div>
              <h3
                style={{
                  color: darkBlue,
                  fontSize: 18,
                  marginTop: 0,
                  marginBottom: 8,
                }}
              >
                Submission Portal:
              </h3>
              <p style={{ margin: 0, fontSize: 16 }}>
                Submit your manuscript through the{" "}
                <a
                  href="#"
                  style={{ color: primaryBlue, textDecoration: "underline" }}
                >
                  Submission Portal
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: 32 }}>
          <h2
            style={{
              color: darkBlue,
              fontSize: 24,
              marginTop: 0,
              marginBottom: 16,
            }}
          >
            Corrections and Retractions
          </h2>
          <div
            style={{
              background: "#f8fafc",
              padding: 20,
              borderRadius: 8,
              border: `1px solid ${primaryBlue}/20`,
            }}
          >
            <div style={{ marginBottom: 20 }}>
              <h3
                style={{
                  color: darkBlue,
                  fontSize: 18,
                  marginTop: 0,
                  marginBottom: 8,
                }}
              >
                Corrections
              </h3>
              <p style={{ margin: 0, fontSize: 16 }}>
                Corrections may be issued for significant errors that impact the
                scientific integrity of a published article. Corrections can be
                initiated by authors, editors, or the publisher. Corrections
                will include a notice clearly linked to the original article and
                will outline the nature of the error and the correction made.
              </p>
            </div>

            <div>
              <h3
                style={{
                  color: darkBlue,
                  fontSize: 18,
                  marginTop: 0,
                  marginBottom: 8,
                }}
              >
                Retractions
              </h3>
              <p style={{ margin: 0, fontSize: 16 }}>
                Retractions are issued to correct the scholarly record in cases
                of ethical misconduct (e.g., plagiarism, data fabrication) or
                severe errors (e.g., major miscalculations). Retraction notices
                will be clearly linked to the original article, and the article
                itself will remain accessible with its retracted status
                indicated.
              </p>
              <p style={{ margin: "8px 0 0 0", fontSize: 16 }}>
                Retractions may be initiated by the authors, editors, or the
                publisher. In cases where author agreement is not unanimous, the
                retraction notice will reflect this.
              </p>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: 32 }}>
          <h2
            style={{
              color: darkBlue,
              fontSize: 24,
              marginTop: 0,
              marginBottom: 16,
            }}
          >
            Article Withdrawal
          </h2>
          <p style={{ fontSize: 16 }}>
            Articles in press may be withdrawn for reasons such as duplicate
            submissions, plagiarism, or accidental submission errors. Withdrawn
            articles will not be available in the final journal issue and will
            be removed from all processing systems.
          </p>
        </section>

        <section style={{ marginBottom: 32 }}>
          <h2
            style={{
              color: darkBlue,
              fontSize: 24,
              marginTop: 0,
              marginBottom: 16,
            }}
          >
            Removal of Published Content
          </h2>
          <p style={{ fontSize: 16 }}>
            In exceptional circumstances, published articles may be removed to
            comply with legal requirements (e.g., court orders) or if the
            content poses significant public health risks. A statement
            explaining the reason for removal will be published in place of the
            removed article.
          </p>
        </section>

        <section
          style={{
            background: "#f0f9ff",
            padding: 24,
            borderRadius: 12,
            border: `1px solid ${primaryBlue}/30`,
          }}
        >
          <h2
            style={{
              color: darkBlue,
              fontSize: 24,
              marginTop: 0,
              marginBottom: 16,
            }}
          >
            Post-publication Issues
          </h2>
          <p style={{ fontSize: 16 }}>
            The journal will investigate post-publication issues such as ethical
            concerns or errors. Depending on the outcome, actions may include
            issuing a correction, retraction, or notification to the relevant
            institution. The journal is committed to maintaining the integrity
            of the scholarly record.
          </p>
        </section>
      </div>
    </div>
  );
};

export default page;
