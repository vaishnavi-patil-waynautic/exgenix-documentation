import React from "react";

// Layout-isolated wide grid component
// Prevents page width overflow in Docusaurus

export default function WideScrollableGrid() {
  const columns = [
    "ID",
    "API/Flow",
    "Type",
    "Title/Objective",
    "Input/Steps",
    "OrderSingle Multileg",
    "OrderSingle Multileg Short",
    "OrderSingle Standard",
    "OrderSingle Short",
  ];

  const rows = [
    [
      "1",
      "Butterfly Spread - Multileg",
      "Positive",
      "Full Trade scenario",
      "Session1 BUY (qty 10) → Session2 SELL (qty 10)",
      "Y",
      "Y",
      "NA",
      "NA",
    ],
    [
      "2",
      "Butterfly Spread - Multileg",
      "Positive",
      "Partial Trade scenario",
      "Session1 BUY (qty 10) → Session2 SELL (qty 4)",
      "Y",
      "Y",
      "NA",
      "NA",
    ],
  ];

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "100%",
        overflow: "hidden", // hard stop layout bleed
        border: "1px solid #e0e0e0",
        borderRadius: "6px",
      }}
    >
      {/* Scroll container */}
      <div
        style={{
          width: "100%",
          overflowX: "auto",
          overflowY: "hidden",
        }}
      >
        {/* Wide content holder */}
        <div
          style={{
            minWidth: "1600px",
            display: "grid",
            gridTemplateColumns:
              "60px 240px 100px 260px 520px 140px 180px 160px 140px",
          }}
        >
          {/* Header */}
          {columns.map((col, i) => (
            <div
              key={i}
              style={{
                padding: "10px",
                fontWeight: 600,
                borderBottom: "1px solid #ddd",
                background: "#fafafa",
                position: "sticky",
                top: 0,
                zIndex: 1,
              }}
            >
              {col}
            </div>
          ))}

          {/* Rows */}
          {rows.map((row, rIndex) =>
            row.map((cell, cIndex) => (
              <div
                key={`${rIndex}-${cIndex}`}
                style={{
                  padding: "8px 10px",
                  borderBottom: "1px solid #eee",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {cell}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
