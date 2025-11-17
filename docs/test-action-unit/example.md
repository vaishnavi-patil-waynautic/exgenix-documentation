---
id: example
title: 'Example'
sidebar_position: 5
hide_table_of_contents: true
sidebar_label: Example
slug: /test-action-unit/example
description: 'Example of a Login Test Action Unit'
---

import ExampleBlock from '@site/src/components/ExampleBlock'

---

<ExampleBlock
  title="Example: Login Test Action Unit"
  image={{
    title: "Login Test Action Unit",
    src: "/exgenix-documentation/img/test_action_unit/login_tau.png",
    alt: "Login Test Action Unit"
  }}
  caption="🖱️ Click to expand image"
>
  <p>A complete Login Test Action Unit typically includes:</p>

  <ol>
    <li><strong>Socket Connection</strong>: Establish connection to the server</li>
    <li><strong>Session Logon Request</strong>: Send session authentication request</li>
    <li><strong>Session Logon Response</strong>: Validate session authentication</li>
    <li><strong>User Logon Request</strong>: Send user credentials</li>
    <li><strong>User Logon Response</strong>: Validate user authentication</li>
  </ol>

  <p>
    Each step is configured with the appropriate data sheets and validation rules
    to ensure correct system behavior.
  </p>
</ExampleBlock>


---

<div class="step-block">
  <div class="step-text">
    ## Step Configuration Details
    
    Each step within the Test Action Unit displays:
    - **Step Number & Sequence** – The order in which the step executes.
    - **API Configuration Name** – The specific API or message type configured for that step.
  </div>
  <div class="step-image">
    <h4 class="image-title">Step Configuration View</h4>
    <img src="/exgenix-documentation/img/test_action_unit/step_added.png" alt="Test Action Unit step configuration" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

---