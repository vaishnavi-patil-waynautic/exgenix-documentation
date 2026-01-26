---
hide_table_of_contents: true
---

# Exgenix DBG Naming Convention

---


| Object Type     | Purpose                                 | Naming Format                                         | Example                                          | Notes                                     |
| --------------- | --------------------------------------- | ----------------------------------------------------- | ------------------------------------------------ | ----------------------------------------- |
| API Collection  | Group APIs by exchange interface        | `<Exchange>.<Segment>.<Interface>`                    | DBG.Derivatives.ETI                              | Top-level grouping for ETI APIs           |
| API Request     | Identify API request message            | `<Exchange>.<Segment>.<Interface>.<Message>.Request`  | DBG.Derivatives.ETI.NewOrderSingle.Request       | Aligned with ETI message semantics        |
| API Response    | Identify API response message           | `<Exchange>.<Segment>.<Interface>.<Message>.Response` | DBG.Derivatives.ETI.ExecutionReport.Response     | Covers Ack / Trade / Reject               |
| Test Collection | Describe one business situation         | `SCN.<InstrumentOrStrategy>.<Condition>`              | SCN.Multileg.Butterfly.NonImplied                | One scenario expands into many test cases |
| Test Case       | Executable validation unit              | `TC.<API>.<Variant>.<Scenario>.<Outcome>`             | TC.NewOrderMultiLeg.Std.FullMatch.Accepted       | Variant = Std / Short / Multi             |
| Test Data Sheet | Bind data to test cases                 | `DATA.<Scenario>.<Outcome>`                           | DATA.Multileg.Butterfly.FullMatch                | Reusable across executions                |
| Test Suite      | Group test cases by business capability | `<RunType>.<Suite>.<Functionality>.<Date>`            | Regression.PreOpne.Multileg.Butterfly.2026-01-21 | Mapped from ScenarioMapping.Functionality |



---

## Customized based on Testing needs

<table>
  <thead>
    <tr>
      <th>Test Case collection</th>
      <th>Test Case</th>
      <th>Test Data sheet</th>
      <th>Datasheet Lables</th>
      <th>Test Suite</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="3">SCN.UserLogon</td>
      <td rowspan="3">TC001.FieldLevelValidation.001</td>
      <td >DATA.TC001.Postive.001</td>
      <td>Valid.User</td>
      <td rowspan="3">Regression.UserLogon_2026-01-23</td>
    </tr>
    <tr>
      <td>DATA.FieldValidation.Negative</td>
      <td>Missing.UserName</td>
    </tr>
    <tr>
      <td>DATA.FieldValidation.Negative</td>
      <td>Invalid.Password</td>
    </tr>
  </tbody>
</table>

