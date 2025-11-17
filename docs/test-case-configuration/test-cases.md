---
id: test-cases
title: 'Test Cases'
sidebar_position: 3
hide_table_of_contents: true
sidebar_label: Test Cases
slug: /test-case-configuration/test-cases
description: 'Understanding test cases'
---

import ExampleBlock from '@site/src/components/ExampleBlock';

# Test Cases

---
#
A **Test Case** represents a complete, executable test scenario that validates specific functionality. Each test case consists of:

1. **Identification** – Name and description
2. **Test Steps** – Ordered sequence of actions
3. **Data Configuration** – Datasheets for each step
4. **Execution Settings** – Session type, patterns, timing
5. **Error Handling** – Response to failures

<ExampleBlock title="Test Case Structure (Example)">

<div className="step-block">
    <div className="step-text">
      <p>A typical test case includes:</p>

      <ul>
            <li>Login/Authentication steps</li>
            <li>Business logic operations (Orders, Modifications, Cancellations)</li>
            <li>Response validations</li>
            <li>Cleanup/Logout steps</li>
        </ul>

          <p>Each step can be either:</p>

          <ul>
            <li><strong>Test Action Unit</strong> (pre-configured group of APIs)</li>
            <li><strong>Individual API</strong> (single request or response)</li>
          </ul>

      </div>

    <div className="step-image">
        <h4 className="image-title">Test Case Structure Example</h4>
        <img
          src="/exgenix-documentation/img/testcase/example.png"
          alt="Example Test Case Structure"
          style={{
            width: "100%",
            maxWidth: "500px",
            borderRadius: "8px",
            border: "1px solid #c3eccc",
          }}
        />
        <p className="image-caption">🖱️ Click to expand image</p>
      </div>
  </div>
</ExampleBlock>

<p>The test case view provides a comprehensive overview of all configured steps, including:</p>

  <ul>
    <li>Step sequence and numbering</li>
    <li>Step type (TAU or individual API)</li>
    <li>Associated datasheets</li>
    <li>Execution patterns</li>
    <li>Error handling configuration</li>
  </ul>

  ---