---
id: trial_project_details
title: 'Trial Project Details'
sidebar_position: 2
hide_table_of_contents: true
sidebar_label: Trial Project Details
slug: /quick-start-guide/trial_project_details
---

# Trial Project Details

---

<div style={{ width: "100%", margin: "20px 0" }}>
  <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
    <thead style={{ backgroundColor: "#f8f9fa" }}>
      <tr>
        <th style={{ padding: "10px", border: "1px solid #ddd" }}>Platform</th>
        <th style={{ padding: "10px", border: "1px solid #ddd" }}>Project/Module Name</th>
        <th style={{ padding: "10px", border: "1px solid #ddd", width: "auto" }}>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style={{ padding: "10px", border: "1px solid #ddd" }} rowSpan="3">
          `Exgenix`
        </td>
        <td style={{ padding: "10px", border: "1px solid #ddd" }}>`API configuration`</td>
        <td style={{ padding: "10px", border: "1px solid #ddd" }} rowSpan="3">
          Covers end-to-end exchange workflow (Order Entry → Trade → Clearing)
        </td>
      </tr>
      <tr>
        <td style={{ padding: "10px", border: "1px solid #ddd" }}>`Test configuration`</td>
      </tr>
      <tr>
        <td style={{ padding: "10px", border: "1px solid #ddd" }}>`Execution`</td>
      </tr>
      <tr>
        <td style={{ padding: "10px", border: "1px solid #ddd" }}>`AI QA Agent`</td>
        <td style={{ padding: "10px", border: "1px solid #ddd" }}>`Project_Trial`</td>
        <td style={{ padding: "10px", border: "1px solid #ddd" }}>
          Enables QA traceability and insights for different modules and features
        </td>
      </tr>
      <tr>
        <td style={{ padding: "10px", border: "1px solid #ddd" }}>`Jira`</td>
        <td style={{ padding: "10px", border: "1px solid #ddd" }}>`Project_Trial`</td>
        <td style={{ padding: "10px", border: "1px solid #ddd" }}>
          Contains User Stories and Acceptance Criteria linked to Exgenix tests
        </td>
      </tr>
      <tr>
        <td style={{ padding: "10px", border: "1px solid #ddd" }}>`ADO`</td>
        <td style={{ padding: "10px", border: "1px solid #ddd" }}>`Project_Trial`</td>
        <td style={{ padding: "10px", border: "1px solid #ddd" }}>
          Contains User Stories and Acceptance Criteria linked to Exgenix tests
        </td>
      </tr>
    </tbody>
  </table>
</div>


import useBaseUrl from '@docusaurus/useBaseUrl';

<div
  className="step-images-row"
  style={{
   paddingTop: '20px', 
    display: 'flex',
    gap: '24px', // space between images
    justifyContent: 'center', // centers images horizontally
    flexWrap: 'wrap', // responsive wrapping
    textAlign: 'center',
  }}
>
  {/* First image */}
  <div className="step-image" style={{ flex: 1, minWidth: '300px' }}>
    <h4 className="image-title">Exgenix - Login Screen</h4>
    <img
      src={useBaseUrl('/img/quickStartGuide/quickStart1.png')}
      alt="Exgenix - Login Screen"
      style={{
        height: '200px', // fixed height
        width: '100%',
        objectFit: 'contain', // maintains aspect ratio
        borderRadius: '8px',
      }}
    />
    <p className="image-caption">🖱️ Click to expand image</p>
  </div>

  {/* Second image */}
  <div className="step-image" style={{ flex: 1, minWidth: '300px' }}>
    <h4 className="image-title">Exgenix Home Dashboard</h4>
    <img
      src={useBaseUrl('/img/quickStartGuide/quickStart2.png')}
      alt="Exgenix Home Dashboard"
      style={{
        height: '200px', // same fixed height
        width: '100%',
        objectFit: 'contain', // maintains aspect ratio
        borderRadius: '8px',
      }}
    />
    <p className="image-caption">🖱️ Click to expand image</p>
  </div>
</div>
