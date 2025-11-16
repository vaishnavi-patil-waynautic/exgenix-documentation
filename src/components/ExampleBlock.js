export default function ExampleBlock({ title, children, image, caption }) {
  return (
    <div
      className="example-block"
      style={{
        backgroundColor: "#e6f9e8",  // light green background
        border: "1px solid #a3e4a8",
        borderRadius: "10px",
        padding: "20px",
        display: "flex",
        gap: "20px",
        marginBottom: "24px",
      }}
    >
      <div className="example-text" style={{ flex: 1 }}>
        {title && <h3 style={{ marginBottom: "12px" }}>{title}</h3>}
        <div>{children}</div>
      </div>

      {image && (
        <div
          className="example-image"
          style={{
            flex: "0 0 300px",
            textAlign: "center",
          }}
        >
          <h4 className="image-title">{image.title}</h4>
          <img
            src={image.src}
            alt={image.alt}
            style={{
              width: "100%",
              borderRadius: "8px",
              border: "1px solid #c3eccc",
            }}
          />
          {caption && (
            <p
              className="image-caption"
              style={{ marginTop: "8px", fontSize: "14px", color: "#2b5932" }}
            >
              {caption}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
