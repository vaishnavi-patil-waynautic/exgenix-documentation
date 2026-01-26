---
id: troubleshooting
title: 'Troubleshooting'
sidebar_position: 13
hide_table_of_contents: true
sidebar_label: Troubleshooting
slug: /test-suite-execution/troubleshooting
description: 'Common issues and solutions'
---

# Troubleshooting
#
---

<div class="collapsible-card-div">
  <details class="green-collapsible">
  <summary><strong>1. Suite Won't Execute</strong></summary>

  **Causes:**  
  - No test cases added  
  - Invalid test suite configurations  
  - Missing datasheets  
  - Connectivity issues  

  **Fix:**  
  - Add at least one test case  
  - Validate each test case configuration  
  - Ensure datasheets exist and are linked  
  - Verify system/network connectivity  

  </details>

  <details class="green-collapsible">
  <summary><strong>2. Parallel Execution Failures</strong></summary>

  **Causes:**  
  - Resource contention  
  - Shared/locked data  
  - Infrastructure limitations  

  **Fix:**  
  - Reduce level of parallelism  
  - Ensure test cases are fully independent  
  - Allocate additional resources if needed  

  </details>

  <details class="green-collapsible">
  <summary><strong>3. Scheduled Execution Not Running</strong></summary>

  **Causes:**  
  - Misconfigured schedule  
  - System maintenance window  
  - Missing permissions  
  - Scheduler errors  

  **Fix:**  
  - Recheck schedule configuration  
  - Verify system/service status  
  - Confirm user or system permissions  
  - Review scheduler logs for errors  

  </details>

  <details class="green-collapsible">
  <summary><strong>4. Reports Not Generated</strong></summary>

  **Causes:**  
  - Interrupted execution  
  - Storage limitations  
  - Report generation error  

  **Fix:**  
  - Allow tests to finish fully  
  - Free up storage or increase quota  
  - Contact support if issue persists  

  </details>

</div>