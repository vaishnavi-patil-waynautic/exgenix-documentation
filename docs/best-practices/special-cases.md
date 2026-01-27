---
hide_table_of_contents: true
---

# Special Cases

---

<details>
<summary style={{ fontWeight: "500", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px" }}>
  1. Short Order Handling
</summary>

For **Short Order** scenarios, the **Client Order ID (ClOrdID)** is mandatory.  
Requests without this field will be rejected by the system.

</details>

---

<details>
<summary style={{ fontWeight: "500", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px" }}>
  2. Price Data Type Conversion
</summary>

When the data type is **Price**, the system automatically **converts the value to Int64 format** before processing.  
This ensures consistency with internal encoding and exchange protocol requirements.

:::info Note
Always provide valid numeric price values to avoid conversion or encoding errors.
:::

</details>

---