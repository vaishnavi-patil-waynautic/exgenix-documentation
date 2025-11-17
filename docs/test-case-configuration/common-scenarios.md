---
id: common-scenarios
title: 'Common Scenarios'
sidebar_position: 9
hide_table_of_contents: true
sidebar_label: Common Scenarios
slug: /test-case-configuration/common-scenarios
description: 'Common test case scenarios'
---

# Common Scenarios
#
---

<div class="collapsible-card-div">

  <details class="green-collapsible">
    <summary><strong>Authentication Testing</strong></summary>

      <pre>
      Test Case: User_Authentication
      ├── Valid Credentials Test
      ├── Invalid Password Test
      ├── Locked Account Test
      └── Session Timeout Test
      </pre>

  **Configuration:**
  - Pattern: NEXT_ROW (test different credentials)
  - On Error: Continue (test all scenarios)

  </details>

    
  <details class="green-collapsible">
  <summary><strong>Order Lifecycle</strong></summary>

    <pre>
    Test Case: Order_Complete_Lifecycle
    ├── Login
    ├── Place Order
    ├── Validate Placement
    ├── Modify Order
    ├── Validate Modification
    ├── Cancel Order
    ├── Validate Cancellation
    └── Logout
    </pre>

    **Configuration:**
    - Session: session1 (continuous)
    - Pattern: SAME_ROW (same order throughout)
    - On Error: Abort (critical flow)

  </details>

    <details class="green-collapsible">
    <summary><strong>Negative Testing</strong></summary>

  <pre>
  Test Case: Negative_Order_Scenarios
  ├── Invalid Price
  ├── Invalid Quantity
  ├── Invalid Security ID
  ├── Duplicate Order ID
  └── Unauthorized User
  </pre>

  **Configuration:**
  - Datasheet: DS_negative_nos
  - Pattern: NEXT_ROW (test each scenario)
  - On Error: Continue (collect all failures)

  </details>

    <details class="green-collapsible">
    <summary><strong>Stress Testing</strong></summary>

  <pre>
  Test Case: Stress_Multiple_Orders
  ├── Login
  ├── Loop (100 iterations)
  │   ├── Place Order (NEXT_ROW)
  │   └── Validate Response
  └── Logout
  </pre>

  **Configuration:**
  - Loop: 100 iterations
  - Pattern: NEXT_ROW (unique orders)
  - Session: Different per iteration
  - Wait Time: 0 seconds (maximum throughput)

  </details>



    <details class="green-collapsible">
    <summary><strong>Multi-User Scenario</strong></summary>

  <pre>
  Test Case: Multi_User_Trading
  ├── User A Login (session1)
  ├── User B Login (session2)
  ├── User A Place Order (session1)
  ├── User B Place Order (session2)
  ├── User A Cancel Order (session1)
  ├── User B Cancel Order (session2)
  ├── User A Logout (session1)
  └── User B Logout (session2)
  </pre>

  **Configuration:**
  - Sessions: session1 and session2
  - Pattern: NEXT_ROW (different users)
  - On Error: Abort (per session)

  </details>

</div>