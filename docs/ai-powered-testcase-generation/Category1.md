---
id: category1
title: 'Category 1'
sidebar_position: 2
hide_table_of_contents: true
sidebar_label: Category 1 - From FIX / ETI/Custom Binary API Definitions
slug: /ai-powered-testcase-generation/category1
---

# Category 1: From FIX / ETI/Custom Binary API Definitions

---

<div class="step-block">
  <div class="step-text">
    Use Exgenix to automatically generate test cases directly from API definitions such as **FIX / ETI/Custom Binary API** or **ETI (Enhanced Trading Interface)** specifications.
    
    ### Steps:
    
    1. **Upload API Document** – Import FIX / ETI/Custom Binary API/ETI definitions or schema files (.pdf)
    2. **Provide AI Prompt (Optional)** – Add custom generation parameters like:
       - *"Generate FIX / ETI/Custom Binary API-format test cases for New Order Single with price band validation."*
    3. **Generate Test Cases** – AI parses each field, its rules, and dependencies to produce complete scenarios
  
  </div>
  <div class="step-image">
    <h4 class="image-title">AI Test Generation from API Definitions</h4>
    <img src="/exgenix-documentation/img/ai_powered_testcase_generation/1.png" alt="Generate test cases from FIX/ETI API definitions" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

<div class="step-block">
  <div class="step-text">
    
    ### Output Example:
    
    - **Positive:** Valid order message with all mandatory fields
    - **Negative:** Missing tag or invalid data type
    - **Boundary:** Price or quantity at edge of configured range
    
    📎 *Output can be exported as Excel or imported directly into API configurations for execution.*
  </div>
  <div class="step-image">
    <h4 class="image-title">Generated Testcases</h4>
    <img src="/exgenix-documentation/img/ai_powered_testcase_generation/generated_testcases.png" alt="Output Example" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

---