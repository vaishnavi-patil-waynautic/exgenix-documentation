---
title: AI-Powered Test Case Generation
sidebar_position: 3
hide_table_of_contents: true
---

# AI-Powered Test Case Generation

---

## Table of Contents
- [Overview](#overview)
- [Category 1: From FIX / ETI/Custom Binary API Definitions](#category-1-from-fix--eticustom-binary-api-definitions)
- [Category 2: From Business Requirement Documents (BRD) and Impact Assessment Reports](#category-2-from-business-requirement-documents-brd-and-impact-assessment-reports)
- [Category 3: From User Stories Integrated via ADO or Jira](#category-3-from-user-stories-integrated-via-ado-or-jira)
- [Key Highlights](#key-highlights)

---

## Overview

Exgenix enables **AI-driven, one-click test case generation** across technical and business layers — ensuring full test coverage for exchange, trading, and financial workflows.

The AI engine automatically classifies all generated test cases into **Positive**, **Negative**, and **Boundary** scenarios.

---

## Category 1: From FIX / ETI/Custom Binary API Definitions

<div class="step-block">
  <div class="step-text">
    Use Exgenix to automatically generate test cases directly from API definitions such as **FIX / ETI/Custom Binary API** or **ETI (Enhanced Trading Interface)** specifications.
    
    ### Steps:
    
    1. **Upload API Document** – Import FIX / ETI/Custom Binary API/ETI definitions or schema files (.pdf)
    2. **Provide AI Prompt (Optional)** – Add custom generation parameters like:
       - *"Generate FIX / ETI/Custom Binary API-format test cases for New Order Single with price band validation."*
    3. **Generate Test Cases** – AI parses each field, its rules, and dependencies to produce complete scenarios
    
    ### Output Example:
    
    - **Positive:** Valid order message with all mandatory fields
    - **Negative:** Missing tag or invalid data type
    - **Boundary:** Price or quantity at edge of configured range
    
    📎 *Output can be exported as Excel or imported directly into API configurations for execution.*
  </div>
  <div class="step-image">
    <h4 class="image-title">AI Test Generation from API Definitions</h4>
    <img src="/exgenix-documentation/img/ai_powered_testcase_generation/1.png" alt="Generate test cases from FIX/ETI API definitions" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

---

## Category 2: From Business Requirement Documents (BRD) and Impact Assessment Reports

<div class="step-block">
  <div class="step-text">
    AI models extract **functional and business-level test scenarios** directly from text-based or semi-structured documents like BRDs, FSDs, or impact reports.
    
    ### Steps:
    
    1. **Upload Document(s)** – Accepts `.pdf`, `.docx`, `.txt`, or scanned content
    2. **Contextual Prompting** – Specify functional focus or behavior, e.g.,
       - *"Generate test cases for margin shortfall scenarios from this BRD."*
    3. **AI Analysis** – System interprets use cases, data dependencies, and workflows
    4. **Generate Test Cases** – AI converts each logical step into actionable QA test cases
    
    ### Example Output:
    
    - **Positive:** Standard user action or business flow
    - **Negative:** Constraint violation or invalid rule path
    - **Boundary:** Extreme operational or numeric value limits
    
    📎 *Ensures test coverage from both system and business process perspectives.*
  </div>
  <div class="step-image">
    <h4 class="image-title">AI Test Generation from BRD</h4>
    <img src="/exgenix-documentation/img/ai_powered_testcase_generation/2.png" alt="Generate test cases from Business Requirement Documents" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

---

## Category 3: From User Stories Integrated via ADO or Jira

<div class="step-block">
  <div class="step-text">
    Exgenix connects directly to **Azure DevOps (ADO)** and **Jira** to fetch user stories and automatically generate test cases based on requirement narratives.
    
  </div>
  <div class="step-image">
    <h4 class="image-title">Connect to ADO/Jira</h4>
    <img src="/exgenix-documentation/img/ai_powered_testcase_generation/3.png" alt="Connect to ADO or Jira for user stories" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

---

<div class="step-block">
  <div class="step-text">
    ### Steps:
    
    1. **Connect to ADO/Jira** – Authenticate and access requirement repositories
    2. **Select User Stories or Epics** – Choose the project and related stories (Single or Multiple)
    3. **Generate Test Cases** – AI reads acceptance criteria and generates relevant test steps
    4. **Review and Map** – Link generated test cases back to stories for traceability
  </div>
  <div class="step-image">
    <h4 class="image-title">Select User Stories</h4>
    <img src="/exgenix-documentation/img/ai_powered_testcase_generation/4.png" alt="Select user stories from ADO/Jira" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

---

<div class="step-block">
  <div class="step-text">
    ### Example Output:
    
    - **Positive:** User completes a valid workflow
    - **Negative:** Missing mandatory field or permission issue
    - **Boundary:** System response at capacity or limit conditions
    
    📎 *Enables full traceability between user stories → test cases → defects within the same ecosystem.*
  </div>
  <div class="step-image">
    <h4 class="image-title">Generated Test Cases</h4>
    <img src="/exgenix-documentation/img/ai_powered_testcase_generation/5.png" alt="AI-generated test cases from user stories" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

---

## Key Highlights

### Unified Coverage
Generate test cases from API specs, BRDs, and user stories within one platform.

### Full Lifecycle Integration
Auto-sync with Jira/ADO for complete traceability throughout the testing lifecycle.

### Configurable Outputs
- Export to Excel for documentation
- Integrate directly with Exgenix test suites
- Trigger automated execution workflows

### Speed & Precision
- **Hundreds of scenarios generated in minutes**
- Powered by domain-trained AI models
- Understands exchange and trading workflows
- Continuously learns from feedback
 
---