---
id: advanced-features
title: 'Advanced Features'
hide_table_of_contents: true
sidebar_label: Advanced Features
---

<!-- ### Reference Groups
Reference groups allow you to define repeating groups of fields within a message. (e.g., NoOrders group in a mass order message )

**Configuration steps:**
1. Define the group count field (e.g., NoOrders=N)
2. Mark child fields with the reference group name
3. Specify cardinality for repeating fields

---

### Field Dependencies
Some fields depend on values in other fields (e.g., OrderQty must be positive if Side=Buy).

**Best practices:**
- Use validation rules in the Configuration step
- Leverage datasheet functions to maintain consistency
- Document dependencies in field descriptions

---

### Integration with Other Modules -->
<!-- 
#### Test Configuration Module
- Build test case flows by sequencing multiple API configs  
- Define the order of message exchanges  
- Create complex multi-step scenarios  

#### Execution Module
- Execute API configurations in sequence  
- Use datasheets to provide runtime values  
- Apply iteration settings to control data consumption  
- Establish server communication via connection configurations  

#### Reports Module
- View which API configurations were executed  
- Compare actual vs. expected message structures  
- Analyze field-level validation results  
- Review datasheet values used in each iteration   -->

<div class="collapsible-card-div">

  <!-- Reference Groups -->
    <details class="green-collapsible">
      <summary> **Advanced Feature: Reference Groups**</summary>

      <p>Reference groups allow you to define repeating groups of fields within a message (e.g., <strong>NoOrders</strong> group in a mass order message).</p>

      <h4>Configuration Steps:</h4>
      <ul>
        <li>Define the group count field (e.g., <strong>NoOrders = N</strong>)</li>
        <li>Mark child fields with the reference group name</li>
        <li>Specify cardinality for repeating fields</li>
      </ul>

    </details>

  <!-- Field Dependencies -->
    <details class="green-collapsible">
      <summary>**Advanced Feature: Field Dependencies**</summary>

      <p>Some fields depend on values in other fields (e.g., <strong>OrderQty</strong> must be positive if <strong>Side = Buy</strong>).</p>

      <h4>Best Practices:</h4>
      <ul>
        <li>Use validation rules in the Configuration step</li>
        <li>Leverage datasheet functions to maintain consistency</li>
        <li>Document dependencies in field descriptions</li>
      </ul>

    </details>

  <!-- Integration with Other Modules -->
    <details class="green-collapsible">
      <summary>**Integration with Other Modules**</summary>

      <h4>Test Configuration Module</h4>
      <ul>
        <li>Build test case flows by sequencing multiple API configs</li>
        <li>Define the order of message exchanges</li>
        <li>Create complex multi-step scenarios</li>
      </ul>

      <h4>Execution Module</h4>
      <ul>
        <li>Execute API configurations in sequence</li>
        <li>Use datasheets to provide runtime values</li>
        <li>Apply iteration settings to control data consumption</li>
        <li>Establish server communication via connection configurations</li>
      </ul>

        <h4>Reports Module</h4>
        <ul>
          <li>View which API configurations were executed</li>
          <li>Compare actual vs. expected message structures</li>
          <li>Analyze field-level validation results</li>
          <li>Review datasheet values used in each iteration</li>
        </ul>

    </details>
</div>

---
