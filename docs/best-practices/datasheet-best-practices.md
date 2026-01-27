---
hide_table_of_contents: true
---


# Datasheet & Test Design Best Practices

This guide outlines recommended practices for datasheet management, function usage, variable correlation, labeling strategy, and multileg handling to ensure stable and reusable automated test flows.

---

## 1. Datasheet Import and Reusability


Always build from a **clean, verified master sheet** per message type (Butterfly, Calendar, etc.), then export and reuse it for similar test cases.

:::tip Import Validation
When importing into a new test, ensure the **column order and names exactly match** the API configuration.
:::

---

## 2. Standard vs Multicast Functions


### Standard Functions

Use standard functions for all dynamic but deterministic fields:


`${sequence(order_id)}`
`${UtcNow(...)}`
`${random_int(...)}`


### Multicast Functions

Use multicast functions only when the value depends on **live market data**:

`${mcast(...)}`


:::info Usage Rule
Always use `filter=` and `default=` so missing feed data does not break the message.
:::

---

## 3. Correlation with User Variables


Capture server-generated IDs (OrderID, TradeID) into **user variables** in response steps and reference them in later datasheet rows.  
Never hard-code these values.

:::tip Multi-Session Naming
For multi-session flows, prefix variables by session:

- `S1_OrderID`  
- `S2_OrderID`  

This keeps correlations unambiguous.
:::

---

## 4. Labels for Row Identification


Treat the **Label / Comment** column as mandatory.

### Examples

- Butterfly - FullMatch - 2 Sell Sessions  
- Calendar - Negative - Invalid Qty  

:::info Best Practice
When wiring the test case, always select rows by **label**, not only by row number.  
This ensures reports clearly show which logical scenario passed or failed.
:::

---

## 5. Sequence Numbers and Sessions


Maintain **separate sequences per session**:

`${sequence(S1_msg_seq)}` → Session 1
`${sequence(S2_msg_seq)}` → Session 2


:::warning Session Integrity
Mixing sequences across sessions can break FIX session state and cause reject scenarios.
:::

---

## 6. Body Length and Multileg Specifics


For multileg strategies such as Butterfly or Calendar:

Ensure **BodyLength reflects both the number and structure of legs** configured.  
Changing leg structure without adjusting BodyLength will cause encode errors.


---

## 7. Master Datasheet Strategy for Multileg Patterns

Keep a **separate master datasheet** for each multileg pattern:

- Butterfly  
- Calendar  

:::tip Reuse Strategy
Once validated, export the master sheet and reuse/import it for all similar test cases instead of rebuilding leg structures from scratch.
:::

---

