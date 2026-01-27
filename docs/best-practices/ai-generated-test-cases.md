---
hide_table_of_contents: true
---

# Ai-generated-test-cases

---

This page explains how to configure and generate AI-powered test cases efficiently, including distribution settings, FIX naming requirements, and mandatory inputs.

---

## Test Case Distribution

Users can define the **distribution of different types of test cases** to be generated.

:::info Example
Generate **10 positive** and **10 negative** test cases.  
You may add more context if needed to refine generation behavior.
:::

---

## FIX-Based Test Case Naming

For FIX-based test case generation, users must use the **exact API name** as mentioned in the **API specification PDF**.

:::warning Important
It is strongly recommended to **copy and paste the API name directly from the document** to avoid spelling or formatting errors.
:::


---

## Mandatory API Information for FIX Generation

Providing API details — especially the **API name** — in the **Additional Requirements** section is **mandatory** for FIX-based test case generation.

If the API name is not provided, the system will **not be able to recognize any API** and test case generation will fail.


---

## Additional Requirements (Optional Context)

Users may optionally provide **additional requirements** when generating test cases from:

- BRD (Business Requirement Document)  
- ADO documents  

This helps improve the relevance and precision of generated test cases.

:::tip Use When Needed
Additional context can help:

- Focus on specific document sections  
- Add business logic constraints  
- Highlight functional priorities  
- Customize scenario behavior  
:::

---

## Trial Access Limitation

:::info Trial Usage Limit
For trial access, the **maximum number of test cases that can be generated is capped at 20**.
:::

---


