---
id: best-practices
title: 'Best Practices'
sidebar_position: 7
hide_table_of_contents: true
sidebar_label: Best Practices
slug: /test-case-configuration/best-practices
description: 'Best practices for test case configuration'
---

# Best Practices

<div class="collapsible-card-div">

  <details class="green-collapsible">
  <summary><strong>1. Naming Conventions</strong></summary>

  Use descriptive, action-oriented names:

  **Good Examples:**
  - `Trade_PlaceAndCancelOrder`
  - `User_LoginWithInvalidCredentials`
  - `Market_SubscribeToMultipleSymbols`
  - `Risk_ExceedPositionLimit`

  **Avoid:**
  - `Test1`
  - `MyTest`
  - `TestCase`
  - `Flow`

  </details>


  <details class="green-collapsible">
  <summary><strong>2. Step Organization</strong></summary>

  **Logical Grouping:**

  1. **Setup** (Login, connections)  
  2. **Preconditions** (Data setup, subscriptions)  
  3. **Main Actions** (Core test operations)  
  4. **Validations** (Response checks)  
  5. **Cleanup** (Logout, disconnections)

  </details>


  <details class="green-collapsible">
  <summary><strong>3. Error Handling Strategy</strong></summary>

  **Abort** for critical path:
  - Authentication  
  - Mandatory validations  
  - Order acceptance/rejection  

  **Continue** for optional operations:
  - Notifications  
  - Non-critical subscriptions  
  - Logging operations  

  **Retry** for transient issues:
  - Network timeouts  
  - Temporary unavailability  
  - External service calls  

  </details>


  <details class="green-collapsible">
  <summary><strong>4. Datasheet Management</strong></summary>

  - **Data Independence** – Each test case should have its own data  
  - **Data Reusability** – Use base row inheritance; override minimally  
  - **Data Clarity** – Use meaningful values; document expected outcomes  

  </details>


  <details class="green-collapsible">
  <summary><strong>5. Session Design Patterns (Selection Guide)</strong></summary>

  | Scenario | Session Type | Pattern | Rationale |
  |----------|-------------|---------|-----------|
  | Single user workflow | Continuous | SAME_ROW | Stable, consistent context |
  | Multi-user testing | Different per user | NEXT_ROW | Isolated sessions |
  | Load testing | Different per iteration | NEXT_ROW | Simulate many users |
  | Idempotency testing | Continuous | SAME_ROW | Same session/data |
  | Session lifecycle | Different per iteration | SAME_ROW | Creation/destruction focus |

  </details>

</div>