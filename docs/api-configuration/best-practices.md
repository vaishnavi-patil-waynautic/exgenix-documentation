---
hide_table_of_contents: true
slug: /api-configuration/best-practices
id: best-practices
title: 'Best Practices'
sidebar_label: Best Practices
---

<!-- ### Naming Conventions

#### Collections
- Use functional categories (e.g., "Order Management", "Market Data")
- Keep names concise but descriptive

#### Configurations
- Use action-oriented names (e.g., "Submit New Order", "Cancel Order Request")
- Include message type when helpful

#### Datasheets
- Indicate the test scenario (e.g., "Valid Orders Dataset", "Edge Case Scenarios")
- Include version numbers if applicable -->
<div class="collapsible-card-div">
<details class="green-collapsible">
  <summary><strong>Naming Conventions</strong></summary>

  #### Collections
  - Use functional categories (e.g., **"Order Management"**, **"Market Data"**)
  - Keep names concise but descriptive

  #### Configurations
  - Use action-oriented names (e.g., **"Submit New Order"**, **"Cancel Order Request"**)
  - Include message type when helpful

  #### Datasheets
  - Indicate the test scenario (e.g., **"Valid Orders Dataset"**, **"Edge Case Scenarios"**)
  - Include version numbers if applicable

</details>

<!-- ---

### Organization Strategy
- **Group by functionality**: Keep related APIs in the same collection
- **Separate by message direction**: Consider separate collections for requests and responses
- **Version control**: Include version numbers in collection names if working with multiple protocol versions

---

### Datasheet Management
- **Start simple**: Create base row with common values first
- **Use functions wisely**: Leverage functions for values that should change (IDs, timestamps), use static values for stable data
- **Document functions**: Add comments in the Description field explaining complex function usage
- **Regular exports**: Export datasheets regularly as backups
- **Validate data**: Test with small datasheets before scaling to large datasets

---

### Configuration Reusability
- **Create template configurations**: Build generic configurations that can be cloned and modified
- **Standardize field mappings**: Use consistent field naming across similar configurations
- **Share collections**: Export and share collection configurations with team members

--- -->

  <!-- Organization Strategy -->
    <details class="green-collapsible">
      <summary><strong> Organization Strategy</strong></summary>

      <ul>
        <li>Group by functionality: Keep related APIs together</li>
        <li>Separate by message direction: Requests vs Responses</li>
        <li>Version control: Add version numbers for protocol variations</li>
      </ul>

    </details>

  <!-- Datasheet Management -->
    <details class="green-collapsible">
      <summary><strong> Datasheet Management</strong></summary>

      <ul>
        <li>Start simple: Create base row with common values</li>
        <li>Use functions wisely for dynamic fields</li>
        <li>Document functions in the Description field</li>
        <li>Export datasheets regularly</li>
        <li>Validate with small datasets first</li>
      </ul>

    </details>

  <!-- Configuration Reusability -->
    <details class="green-collapsible">
      <summary><strong> Configuration Reusability</strong></summary>

      <ul>
        <li>Create template configurations to clone</li>
        <li>Standardize field mappings across configs</li>
        <li>Share collections with team members</li>
      </ul>

    </details>

  </div>

---
