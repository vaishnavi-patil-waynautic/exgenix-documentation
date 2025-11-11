import React from "react";
import Layout from "@theme/Layout";
import useBaseUrl from "@docusaurus/useBaseUrl";

const videos = [
  { id: "gen", title: "AI Generation Demo", file: "aigeneration.mp4" },
  { id: "order", title: "Order Placement Walkthrough", file: "orderwalk.mp4" },
  { id: "perf", title: "Performance Testing Overview", file: "performance.mp4" },
];

export default function VideosPage() {
  return (
    <Layout title="Video Tutorials">
      <div style={{ display: "flex", maxWidth: "1200px", margin: "auto", padding: "2rem" }}>

        {/* Sidebar */}
        <div style={{ width: "250px", borderRight: "1px solid #ddd", paddingRight: "1rem" }}>
          <h3>Videos</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {videos.map(v => (
              <li key={v.id} style={{ marginBottom: "1rem" }}>
                <a href={`#${v.id}`} style={{ textDecoration: "none", color: "blue" }}>
                  {v.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Main video content */}
        <div style={{ flex: 1, paddingLeft: "2rem" }}>
          {videos.map(v => (
            <div key={v.id} id={v.id} style={{ marginBottom: "3rem" }}>
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
