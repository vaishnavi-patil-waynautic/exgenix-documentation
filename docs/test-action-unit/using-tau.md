---
id: using-tau
title: 'Using Test Action Units in Test Cases'
sidebar_position: 7
hide_table_of_contents: true
sidebar_label: Using Test Action Units
slug: /test-action-unit/using-tau
description: 'How to use Test Action Units in test cases'
---

# Using Test Action Units in Test Cases

---

## Adding a Test Action Unit

1. Open or create a test case
2. Click **`+ Add Step`**
3. Select **`TEST ACTION UNIT`** in Type
4. Choose the desired unit
5. Configure datasheets

---
<div class="step-block">
  <div class="step-text">
    ## Before vs After Using Test Action Units
    
    **Before (Manual Steps)**
    
    > Without Test Action Units, test cases require manually adding each individual step:
    > - `Socket Connection`
    > - `Session Logon Request`
    > - `Session Logon Response`
    > - `User Logon Request`
    > - `User Logon Response`
    > - Additional test steps...

    > This results in lengthy, repetitive test case configurations.
  </div>
  <div class="step-image">
    <h4 class="image-title">Before Using Test Action Units</h4>
    <img src="/img/test_action_unit/before_tau.png" alt="Test case before using Test Action Units" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>


<div class="step-block">
  <div class="step-text">
    **After (Using Units)**
    
    > With Test Action Units, the same login flow is encapsulated in a single reusable component:
    > - `Login Test Action Unit` (contains all login steps)
    > - Additional test steps...

    :::info
    **Benefits:**
    - Reduced test case size
    - Improved readability
    - Single point of maintenance
    - Consistent execution across test cases
    - Faster test case creation
    :::
    
    
  </div>
  <div class="step-image">
    <h4 class="image-title">After Using Test Action Units</h4>
    <img src="/img/test_action_unit/after_tau.png" alt="Test case after using Test Action Units" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

---