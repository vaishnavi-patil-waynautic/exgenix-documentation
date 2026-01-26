---
id: best-practices
title: 'Best Practices'
sidebar_position: 9
hide_table_of_contents: true
sidebar_label: Best Practices
slug: /test-action-unit/best-practices
description: 'Best practices for Test Action Units'
---

# Best Practices
#
---
<div class="collapsible-card-div">
  <details class="green-collapsible">
    <summary> Design Principles</summary>

  - ✓ **Single responsibility:** Each unit should have one clear purpose  
  - ✓ **High cohesion:** All steps should be closely related  
  - ✓ **Independence:** Units should not depend on external state  
  - ✓ **Include validations:** Validate responses within the unit  

  </details>


  <details class="green-collapsible">
    <summary> Naming Conventions</summary>

  **Format:**  
  `<Action>_<Component>_Tau`

  **Examples:**  
  - `Login_User_Tau`  
  - `Logout_Session_Tau`  
  - `Subscribe_MarketData_Tau`

  </details>


  <details class="green-collapsible">
    <summary> Documentation Guidelines</summary>

  Document the following for every Test Action Unit:

  - Purpose  
  - Prerequisites  
  - Steps included  
  - Expected outcomes  
  - Captured variables  

  </details>


  <details class="green-collapsible">
    <summary> Datasheet Organization</summary>

  ### **Consolidated Datasheet**
  - One sheet for the entire unit  
  - Simple to manage  
  - Best for straightforward flows  

  ### **Separate Datasheets**
  - One per step (for complex flows)  
  - Better flexibility  
  - Supports variations in data  

  </details>


  <details class="green-collapsible">
    <summary> Maintenance Strategy</summary>

  - Track dependencies  
  - Apply version control  
  - Review units periodically  
  - Test units independently  

  </details>
</div>