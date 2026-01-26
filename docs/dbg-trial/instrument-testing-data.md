---
hide_table_of_contents: true
---
import { Layers, GitBranch, Building2 } from "lucide-react";

# Instrument Data for Testing

---

This document lists the **Instrument Test Data** to be used for testing purposes.

For **detailed information** such as **Security ID, Product, Expiry, Price**, etc.,  
please refer to the **Security Table** available in the **Test Configuration** section of the product.

---

<!-- ## A. Outright Futures -->
## <Layers size={20} color='green' style={{ marginRight:10 }}/> Outright Futures

The following **Outright Future instruments** are supported for testing:

- `**Euro-Bund Future**`
- `**Euro-Bobl Future**`
- `**Euro-Schatz Future**`
- `**Euro-Buxl Future**`
- `**Euro STOXX 50 Future**`

---

<!-- ## B. Complex Instruments – Multileg -->
## <GitBranch size={20} color="#F59E0B" style={{ marginRight:10 }} /> Complex Instruments – Multileg

### 1. Calendar Butterfly – 3 Legs

# 

> **Strategy Name:**  `**OGBL BUL – Bund Calendar Butterfly**`

**Leg Structure (exchange-defined):**

| Action | Instrument |
|------|------------|
| Buy  | 1 × FGBL Mar-26 |
| Sell | 2 × FGBL Jun-26 |
| Buy  | 1 × FGBL Sep-26 |

---

### 2. Calendar Spread Strategy – 2 Legs

#

> **Strategy Name:** `**FGBL SPD – Bund Calendar Spread**`

**Leg Structure:**

| Action | Instrument |
|------|------------|
| Buy  | 1 × FGBL Mar-26 |
| Sell | 1 × FGBL Jun-26 |

---

## <Building2 size={20} color='blue' style={{ marginRight:10 }} />  Equity – Instrument ID

The following **Equity instruments** can be used for testing:

- `**SAP SE**`
- `**Siemens AG**`
- `**Allianz SE**`
- `**BMW AG**`
- `**Airbus SE**`

---

