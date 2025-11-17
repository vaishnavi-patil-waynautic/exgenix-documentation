---
id: creating-test-case
title: 'Creating a Test Case'
sidebar_position: 4
hide_table_of_contents: true
sidebar_label: Creating a Test Case
slug: /test-case-configuration/creating-test-case
description: 'Step-by-step guide to creating test cases'
---

# Creating a Test Case

---

## Step 1: Navigate to Test Cases

<div class="step-block">
  <div class="step-text">

  <ol>
    <li>Go to <strong>Test Configuration</strong> in the left navigation menu</li>
    <li>Expand and select <strong>Test Case</strong></li>
    <li>Choose a collection or create a new one</li>
    <li>Click <strong>`+ Create Test Case`</strong></li>
  </ol>

  </div>

   <div class="step-image">
    <h4 class="image-title">Navigate To Test Cases</h4>
    <img src="/exgenix-documentation/img/testcase/testcase.png" alt="Navigate To Test Cases" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>

</div>

---

## Step 2: Define Basic Information

<div class="step-block">
  <div class="step-text">
  <p><strong>Name (Required)</strong></p>
  <ul>
    <li>Descriptive identifier for the test case</li>
    <li>Examples: <code>Trade_Flow_Order_Placement</code>, <code>User_Authentication_Success</code></li>
  </ul>

  <p><strong>Description (Optional but Recommended)</strong></p>
  <ul>
    <li>Document the test objective</li>
    <li>List expected outcomes</li>
    <li>Note any prerequisites or dependencies</li>
  </ul>
</div>


  <div class="step-image">
    <h4 class="image-title">Test Case Basic Information</h4>
    <img src="/exgenix-documentation/img/testcase/main_tab.png" alt="Test Case Name and Description" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

---

## Step 3: Add Test Steps

You can add two step types:
#
> ### Type 1: Test Action Unit

Reusable component containing multiple APIs configured together.


<div class="step-block">
  <div class="step-text">
  **Configuration:**
1. Click **`+ Add Step`**
2. Select **Type**: `TEST ACTION UNIT`
3. Choose the Test Action Unit from dropdown
4. Configure settings (see Step Settings)
5. Click **Configure** to set datasheets for each API within the unit
</div>


  <div class="step-image">
    <h4 class="image-title">Action Type Configuration</h4>
    <img src="/exgenix-documentation/img/testcase/type.png" alt="Action Type Configuration" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

---



<div class="step-block">
  <div class="step-text">
      > ### Type 2: Individual API Configuration

      Single API call as a test step.

      **Configuration:**
      1. Click **`+ Add Step`**
      2. Select **Type**: `TCP IP Request` or `TCP IP Response` or `Socket Connection`
      3. Choose the [API configuration](./api-configuration) from dropdown
      4. Configure settings
   </div>


  <div class="step-image">
    <h4 class="image-title">Action Type Configuration</h4>
    <img src="/exgenix-documentation/img/testcase/add_step_normal.png" alt="Step Type Configuration" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

---