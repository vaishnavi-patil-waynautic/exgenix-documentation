// import React, { useState } from 'react';
// import styles from './StepGallery.module.css';

// export default function StepGallery({ steps }) {
//   const [active, setActive] = useState(null);

//   return (
//     <div className={styles.galleryContainer}>
//       <h3 className={styles.title}>Steps Overview</h3>
//       <div className={styles.gallery}>
//         {steps.map((step, index) => (
//           <div key={index} className={styles.step}>
//             <img
//               src={step.image}
//               alt={step.title}
//               className={styles.thumbnail}
//               onClick={() => setActive(index)}
//             />
//             <p>{step.title}</p>
//           </div>
//         ))}
//       </div>

//       {active !== null && (
//         <div className={styles.lightbox} onClick={() => setActive(null)}>
//           <img src={steps[active].image} alt="Expanded view" className={styles.fullImage} />
//         </div>
//       )}
//     </div>
//   );
// }



import React, { useState } from "react";
import "./StepGallery.module.css";

export default function StepGallery({ steps }) {
  const [expandedImage, setExpandedImage] = useState(null);

  return (
    <>
      <div className="step-gallery-container">
        <h4>Steps Overview</h4>
        {steps.map((step, index) => (
          <div key={index}>
            <img
              src={step.image}
              alt={step.title}
              onClick={() => setExpandedImage(step.image)}
              title="Click to expand"
            />
            <p>{step.title}</p>
          </div>
        ))}
      </div>

      {expandedImage && (
        <div className="image-viewer-overlay">
          <button
            className="image-viewer-close"
            onClick={() => setExpandedImage(null)}
          >
            ✕
          </button>
          <img src={expandedImage} alt="Expanded view" />
        </div>
      )}
    </>
  );
}
