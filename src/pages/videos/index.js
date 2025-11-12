// import React from "react";
// import Layout from "@theme/Layout";
// import useBaseUrl from "@docusaurus/useBaseUrl";

// const videos = [
//   { id: "brd", title: "AI testcase generation using BRD document", file: "AI testcase generation using BRD document.mp4" },
//   { id: "fix", title: "AI testcase generation using FIX API definition", file: "AI testcase generation using FIX API definition.mp4" },
//   { id: "datasheet", title: "Datasheet Configuration", file: "Datasheet.mp4" },
//   { id: "testcase", title: "Testcase Configuration", file: "Testcase_creation.mp4" },
//   { id: "qa_agent", title: "Waynautic AI QA Agent", file: "Waynautic AI QA Agent - Exgenix.mp4" },
// ];

// export default function VideosPage() {
//   return (
//     <Layout title="Video Tutorials">
//       <div style={{ display: "flex", maxWidth: "1200px", margin: "auto", padding: "2rem" }}>

//         {/* Sidebar */}
//         <div style={{ width: "250px", borderRight: "1px solid #ddd", paddingRight: "1rem" }}>
//           <h3>Videos</h3>
//           <ul style={{ listStyle: "none", padding: 0 }}>
//             {videos.map(v => (
//               <li key={v.id} style={{ marginBottom: "1rem" }}>
//                 <a href={`#${v.id}`} style={{ textDecoration: "none", color: "blue" }}>
//                   {v.title}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Main video content */}
//         <div style={{ flex: 1, paddingLeft: "2rem" }}>
//           {videos.map(v => (
//             <div key={v.id} id={v.id} style={{ marginBottom: "3rem" }}>
//               <h2>{v.title}</h2>
//               <video width="100%" controls>
//                 <source src={useBaseUrl(`/videos/${v.file}`)} type="video/mp4" />
//               </video>
//             </div>
//           ))}
//         </div>

//       </div>
//     </Layout>
//   );
// }



// import React, { useRef, useEffect } from "react";
// import Layout from "@theme/Layout";
// import useBaseUrl from "@docusaurus/useBaseUrl";

// const videos = [
//   { id: "brd", title: "AI testcase generation using BRD document", file: "AI testcase generation using BRD document.mp4" },
//   { id: "fix", title: "AI testcase generation using FIX API definition", file: "AI testcase generation using FIX API definition.mp4" },
//   { id: "datasheet", title: "Datasheet Configuration", file: "Datasheet.mp4" },
//   { id: "testcase", title: "Testcase Configuration", file: "Testcase_creation.mp4" },
//   { id: "qa_agent", title: "Waynautic AI QA Agent", file: "Waynautic AI QA Agent - Exgenix.mp4" },
// ];

// export default function VideosPage() {
//   const videoRefs = useRef({});

//   // Handle hash-based autoplay and fullscreen on page load or navigation
//   useEffect(() => {
//     const hash = window.location.hash.replace("#", "");
//     if (hash && videoRefs.current[hash]) {
//       const video = videoRefs.current[hash];
//       setTimeout(() => {
//         openFullscreen(video);
//         playExclusive(video);
//       }, 500);
//     }
//   }, []);

//   // Pause all other videos when one starts playing
//   const playExclusive = (activeVideo) => {
//     Object.values(videoRefs.current).forEach((v) => {
//       if (v !== activeVideo) v.pause();
//     });
//     activeVideo.play();
//   };

//   // Enter fullscreen
//   const openFullscreen = (video) => {
//     if (video.requestFullscreen) {
//       video.requestFullscreen();
//     } else if (video.webkitRequestFullscreen) {
//       video.webkitRequestFullscreen();
//     } else if (video.msRequestFullscreen) {
//       video.msRequestFullscreen();
//     }
//   };

//   // Handle click → fullscreen + pause others
//   const handleVideoClick = (id) => {
//     const video = videoRefs.current[id];
//     if (video) {
//       playExclusive(video);
//       openFullscreen(video);
//     }
//   };

//   return (
//     <Layout title="Video Tutorials">
//       <div style={{ display: "flex", maxWidth: "1200px", margin: "auto", padding: "2rem" }}>

//         {/* Sidebar */}
//         <div style={{ width: "250px", borderRight: "1px solid #ddd", paddingRight: "1rem" }}>
//           <h3>Videos</h3>
//           <ul style={{ listStyle: "none", padding: 0 }}>
//             {videos.map(v => (
//               <li key={v.id} style={{ marginBottom: "1rem" }}>
//                 <a href={`#${v.id}`} style={{ textDecoration: "none", color: "#007bff" }}>
//                   {v.title}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Main Content */}
//         <div style={{ flex: 1, paddingLeft: "2rem" }}>
//           {videos.map(v => (
//             <div key={v.id} id={v.id} style={{ marginBottom: "3rem" }}>
//               <h2>{v.title}</h2>
//               <video
//                 width="100%"
//                 controls
//                 ref={(el) => (videoRefs.current[v.id] = el)}
//                 onPlay={() => playExclusive(videoRefs.current[v.id])}
//                 onClick={() => handleVideoClick(v.id)}
//               >
//                 <source src={useBaseUrl(`/videos/${v.file}`)} type="video/mp4" />
//               </video>
//             </div>
//           ))}
//         </div>
//       </div>
//     </Layout>
//   );
// }



import React, { useRef, useEffect } from "react";
import Layout from "@theme/Layout";
import useBaseUrl from "@docusaurus/useBaseUrl";

const videos = [
  { id: "brd", title: "AI testcase generation using BRD document", file: "AI testcase generation using BRD document.mp4" },
  { id: "fix", title: "AI testcase generation using FIX API definition", file: "AI testcase generation using FIX API definition.mp4" },
  { id: "datasheet", title: "Datasheet Configuration", file: "Datasheet.mp4" },
  { id: "testcase", title: "Testcase Configuration", file: "Testcase_creation.mp4" },
  { id: "qa_agent", title: "Waynautic AI QA Agent", file: "Waynautic AI QA Agent - Exgenix.mp4" },
];

export default function VideosPage() {
  const sectionRefs = useRef({});

  // Smooth scroll to a section
  const scrollToSection = (id) => {
    const section = sectionRefs.current[id];
    if (!section) return;
    const scrollOffset = 120; // space above title
    const top = section.offsetTop - scrollOffset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  // Scroll to hash section after page loads
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;

    // Wait a bit for Docusaurus to render layout
    setTimeout(() => scrollToSection(hash), 100);
  }, []);

  return (
    <Layout title="Video Tutorials">
      <div style={{ display: "flex", maxWidth: "1200px", margin: "auto", padding: "2rem" }}>
        {/* Sidebar */}
        <div style={{ width: "250px", borderRight: "1px solid #ddd", paddingRight: "1rem" }}>
          <h3>Videos</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {videos.map((v) => (
              <li key={v.id} style={{ marginBottom: "1rem" }}>
                <a
                  href={`#${v.id}`}
                  style={{ textDecoration: "none", color: "#007bff", cursor: "pointer" }}
                  onClick={(e) => {
                    e.preventDefault();
                    window.history.pushState(null, "", `#${v.id}`);
                    scrollToSection(v.id);
                  }}
                >
                  {v.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <div style={{ flex: 1, paddingLeft: "2rem" }}>
          {videos.map((v) => (
            <div
              key={v.id}
              id={v.id}
              ref={(el) => (sectionRefs.current[v.id] = el)}
              style={{ marginBottom: "3rem" }}
            >
              <h2>{v.title}</h2>
              <video width="100%" controls>
                <source src={useBaseUrl(`/videos/${v.file}`)} type="video/mp4" />
              </video>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
