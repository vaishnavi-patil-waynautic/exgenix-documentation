---
id: troubleshooting
title: 'Troubleshooting'
sidebar_position: 10
hide_table_of_contents: true
sidebar_label: Troubleshooting
slug: /test-case-configuration/troubleshooting
description: 'Troubleshooting common issues'
---

# Troubleshooting
#
---

<div class="collapsible-card-div">
  <details class="green-collapsible">
  <summary><strong>1. Step Execution Skipped</strong></summary>

  **Causes:**
  - Missing datasheet  
  - Previous step aborted  
  - Invalid session reference  

  **Solutions:**
  - Select the correct datasheet  
  - Check status of previous step  
  - Unify session names  

  </details>


  <details class="green-collapsible">
  <summary><strong>2. Variable Not Found</strong></summary>

  **Causes:**
  - Variable not captured  
  - Session mismatch  
  - Typographical error  

  **Solutions:**
  - Verify capture syntax  
  - Ensure step uses same session  
  - Check variable name and casing  

  </details>


  <details class="green-collapsible">
  <summary><strong>3. Datasheet Row Mismatch</strong></summary>

  **Causes:**
  - Wrong row pattern  
  - Incorrect starting row  
  - Not enough rows in datasheet  

  **Solutions:**
  - Review and correct pattern (NEXT_ROW / SAME_ROW)  
  - Adjust starting row  
  - Add more rows to the datasheet  

  </details>

  <details class="green-collapsible">
  <summary><strong>4. Test Action Unit Not Executing</strong></summary>

  **Causes:**
  - TAU datasheet not configured  
  - Invalid configurations  
  - Required fields left empty  

  **Solutions:**
  - Open Configure and set datasheets  
  - Validate and correct configuration  
  - Populate mandatory data fields  

  </details>

</div>