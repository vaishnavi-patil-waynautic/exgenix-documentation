---
title: AI-Powered Test Case Generation
sidebar_position: 4
hide_table_of_contents: true
---

# AI-Powered Test Case Generation

---

**Exgenix** empowers teams with **AI-driven, one-click test case generation** across **technical** and **business** layers — ensuring **complete QA coverage** for exchange, trading, and financial workflows.  

The AI engine intelligently classifies every generated test case into **Positive**, **Negative**, and **Boundary** categories for maximum precision.

---

## Category 1: From FIX / ETI / Custom Binary API Definitions & Requirement Documents

Automatically generate test cases directly from **API specifications** such as **FIX**, **ETI**, or **Custom Binary API (Enhanced Trading Interface)** files.

### Steps

1. **Upload API Document**  
   Import `.txt`, `.csv`, or `.pdf` definitions for FIX, ETI, or Binary APIs.  
2. **Set API Context**  
   Choose your target message type — e.g., *New Order Single*, *Cancel*, or *Replace*.  
3. **Provide AI Prompt (Optional)**  
   Add contextual instructions, e.g.:  
   > “Generate FIX / ETI / Binary API-format test cases for *New Order Single* with price band validation.”  
4. **Generate Test Cases**  
   The AI parses each tag, rule, and dependency to produce comprehensive test cases.

### Example Output

| **Type** | **Example Description** |
|-----------|--------------------------|
| ✅ **Positive** | Valid order message with all mandatory fields present |
| ❌ **Negative** | Missing tag or invalid tick size |
| ⚠️ **Boundary** | Price or quantity at the edge of configured range |

📎 *Output can be exported as Excel or directly integrated into Exgenix API configurations for automated execution.*

---

## Category 2: From Business Requirement Documents (BRD) & Impact Assessment Reports

AI models can extract **functional** and **business-level** test cases directly from **BRDs**, **FSDs**, and **Impact Assessment Reports** — ensuring every workflow is covered.

### Steps

1. **Upload Document(s)**  
   Supports `.pdf`, `.docx`, `.txt`, and scanned input formats.  
2. **Contextual Prompting**  
   Provide a specific focus, e.g.:  
   > “Generate test cases for margin shortfall scenarios from this BRD.”  
3. **AI Analysis**  
   The system interprets **use cases**, **data dependencies**, and **workflows**.  
4. **Generate Test Cases**  
   Each logical business step is converted into a fully structured QA test case.

### Example Output

| **Type** | **Example Description** |
|-----------|--------------------------|
| ✅ **Positive** | Standard trade workflow or valid user action |
| ❌ **Negative** | Invalid input or violated constraint |
| ⚠️ **Boundary** | Extreme operational or numeric edge conditions |

📎 *Delivers both system-level and business process coverage from a single source document.*

---

## Category 3: From User Stories Integrated via ADO or Jira

Seamlessly connect **Azure DevOps (ADO)** or **Jira** to auto-generate test cases from **user stories**, **epics**, and **acceptance criteria**.

### Steps

1. **Connect to ADO / Jira**  
   Authenticate and access your requirement repositories.  
2. **Select User Stories or Epics**  
   Choose the desired project and related user stories.  
3. **Generate Test Cases**  
   AI analyzes the **narratives** and **acceptance criteria** to create structured tests.  
4. **Review and Map**  
   Link generated test cases back to stories for **traceability**.

### Example Output

| **Type** | **Example Description** |
|-----------|--------------------------|
| ✅ **Positive** | User completes valid end-to-end workflow |
| ❌ **Negative** | Missing mandatory field or invalid user permission |
| ⚠️ **Boundary** | System handling under stress or near-limit conditions |

📎 *Enables end-to-end traceability between user stories → test cases → defects — all within the same ecosystem.*

---

## Key Highlights

|  Feature |  Description |
|-------------|----------------|
| **Unified Coverage** | Generate test cases from APIs, BRDs, and user stories within one platform |
| **Lifecycle Integration** | Auto-sync with **Jira / ADO** for continuous alignment |
| **Configurable Outputs** | Export to **Excel**, integrate with **Exgenix**, or trigger **automated execution** |
| **Speed & Precision** | Generate hundreds of domain-accurate test scenarios in minutes |

---

> 💡 **Pro Tip:** Combine **API-based** and **BRD-based** generation for complete **technical + business coverage** — ensuring every exchange workflow is validated end-to-end.

> 🧠 *Exgenix AI continuously learns from user feedback, improving generation quality with every iteration.*

---


