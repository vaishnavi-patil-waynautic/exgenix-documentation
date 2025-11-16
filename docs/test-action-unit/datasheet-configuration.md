---
id: datasheet-configuration
title: 'Datasheet Configuration'
sidebar_position: 6
hide_table_of_contents: true
sidebar_label: Configuring Datasheets
slug: /test-action-unit/datasheet-configuration
description: 'Configuring datasheets for Test Action Units'
---

# Configuring Datasheets for Test Action Units

When adding a Test Action Unit inside a test case, you must configure the datasheet mapping for each internal step.

<div class="step-block">
  <div class="step-text">
    > ## Configuration Process
    
    1. Open the test case
    2. Select the Test Action Unit step
    3. Click **Configure**
    4. A dialog displays all steps inside the unit
    
    > ## Configuration Modal
    
    | Column | Description |
    |--------|-------------|
    | **API Name** | API configuration included in the unit |
    | **Collection** | API's parent collection |
    | **Datasheet** | Choose datasheet for this step |
    | **Row No.** | Starting row to be used |
    | **Actions** | Edit or delete |
    
    > ## Row Number Behavior
    
    - **Row 1**: Base row
    - **Row 2+**: Specific data set
    - **Sequential rows** can vary between steps
    
    > **Use cases**
    > - Same data row for entire unit
    > - Different rows to test variations
    > - Use base row for common values
  </div>
  <div class="step-image">
    <h4 class="image-title">Datasheet Configuration Modal</h4>
    <img src="/exgenix-documentation/img/testcase/datasheet_selection.png" alt="Configuring datasheets for Test Action Unit" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>