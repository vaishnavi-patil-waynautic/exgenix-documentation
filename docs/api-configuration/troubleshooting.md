---
hide_table_of_contents: true
slug: /api-configuration/troubleshooting
id: troubleshooting
title: 'Troubleshooting'
sidebar_label: Troubleshooting
---

<!-- ### Import Failures

**Problem:** **PDF import doesn't extract fields correctly** 
**Solutions:**
- Verify page numbers are correct (use actual PDF page index)
- Check table name matches exactly as in document (case-sensitive)
- Ensure PDF is not encrypted or image-based
- Try importing smaller page ranges
- Adjust Max Continuation Pages setting

**Problem:** **Excel import fails with validation errors**  
**Solutions:**
- Export current datasheet to see exact column names and structure
- Ensure Excel file has no extra columns
- Verify column headers match exactly (case-sensitive)
- Check for special characters or formatting in cells
- Remove any merged cells or complex formatting

---

### Function Errors
**Problem:** **Functions don't generate expected values**  
**Solutions:**
- Verify function syntax is correct (must start with =)
- Check function parameters match expected types
- Test functions in base row first
- Review function documentation for proper usage
- Check for circular dependencies in nested functions -->

<div class="collapsible-card-div">

  <!-- Import Failures -->
  <details class="green-collapse">
  <summary><strong> Import Failures</strong></summary>

  <p><strong>PDF import doesn't extract fields correctly</strong></p>
  <ul>
    <li>Verify page numbers are correct</li>
    <li>Ensure table name matches exactly</li>
    <li>Check if PDF is encrypted or image-based</li>
    <li>Try importing smaller page ranges</li>
    <li>Adjust "Max Continuation Pages"</li>
  </ul>

  <p><strong>Excel import fails with validation errors</strong></p>
  <ul>
    <li>Export current datasheet to compare structure</li>
    <li>Ensure no extra columns exist</li>
    <li>Column headers must match exactly</li>
    <li>Remove special characters or formatting</li>
    <li>Remove merged cells</li>
  </ul>

</details>


  <!-- Function Errors -->
  <details class="green-collapse">
    <summary><strong> Function Errors</strong></summary>

    <p><strong>Functions don't generate expected values</strong></p>
    <ul>
      <li>Check function syntax (must start with =)</li>
      <li>Verify parameter types</li>
      <li>Test functions in base row</li>
      <li>Review function documentation</li>
      <li>Check for circular dependencies</li>
    </ul>

  </details>


<details class="green-collapse">
  <summary><strong> Performance Issues</strong></summary>

  <p><strong>Large datasheets load slowly</strong></p>
  <ul>
    <li>Limit datasheets to necessary rows only </li>
    <li>Use static values instead of functions where possible </li>
    <li>Split large datasheets into multiple smaller ones</li>
    <li>Consider database-backed test data for very large datasets</li>
    <li>Remove unused columns from datasheets</li>
  </ul>

</details>

</div>
<!-- **Problem:** **Large datasheets load slowly**  
**Solutions:**
- Limit datasheets to necessary rows only
- Use static values instead of functions where possible
- Split large datasheets into multiple smaller ones
- Consider database-backed test data for very large datasets
- Remove unused columns from datasheets -->



---