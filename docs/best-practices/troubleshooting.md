---
hide_table_of_contents: true
---

# Test Report Analysis & Troubleshooting

---

<details style={{border:"1px solid #e5e7eb", borderRadius:"8px", padding:"10px 14px", marginBottom:"10px"}}>
<summary style={{fontWeight:"500", cursor:"pointer", color:"#111827"}}>Step 1: Connection — Socket Handshake</summary>

**Check:** TCP handshake initiated and completed.

**If Pass**
- Proceed to Step 2.

**If Fail**
- Review IP and port configuration  
- Verify server availability  
- Test TCP connectivity on the configured port  
- Rare: Investigate application-side failure  

</details>

---

<details style={{border:"1px solid #e5e7eb", borderRadius:"8px", padding:"10px 14px", marginBottom:"10px"}}>
<summary style={{fontWeight:"500", cursor:"pointer", color:"#111827"}}>Step 2: Request — Any Request</summary>

**Check:** Request successfully sent to the server.

**If Pass**
- Proceed to Step 3.

**If Fail**
- Review request error message in the report  
- Validate configuration values  
- Common cause: Incorrect configuration  
- Rare: Application-side failure  

</details>

---

<details style={{border:"1px solid #e5e7eb", borderRadius:"8px", padding:"10px 14px", marginBottom:"10px"}}>
<summary style={{fontWeight:"500", cursor:"pointer", color:"#111827"}}>Step 3: Response</summary>

**Check:** Response received within 10 seconds.

**If Fail**
- Client waiting for response and did not receive within 10 seconds  
- Cause: Server-side failure  
- Action: Check server health and logs  

**If Pass**
- Proceed to response validation  

</details>

---

<details style={{border:"1px solid #e5e7eb", borderRadius:"8px", padding:"10px 14px", marginBottom:"10px"}}>
<summary style={{fontWeight:"500", cursor:"pointer", color:"#111827"}}>Step 4: Response Validation</summary>

**Scenario A: Reject Received Instead of Expected Response**

- Expected: `<template_id: other than reject>`  
- Received: Reject `<template_id: 10010>`  
- Action: Debug request payload parameters  
- Validate mandatory fields  

**Escalation:**  
If request is correct but response is incorrect — escalate as possible server defect.

---

**Scenario B: Other Template Received Instead of Expected Response**

- Expected: `<template_id: other than reject>`  
- Received: Other `<template_id>`  
- Action: Analyze response content  
- Review Order Book, Trade Book, and Security Table  

**Escalation:**  
If request is correct but response is incorrect — escalate as possible server defect.

---

**Scenario C: Expected Template Received but Assertion Fails**

- Action: Validate assertion logic and expected values  
- If response is correct: Fix assertions  

**Escalation:**  
If response is incorrect — escalate as possible server defect.

</details>

---

<details style={{border:"1px solid #e5e7eb", borderRadius:"8px", padding:"10px 14px", marginBottom:"10px"}}>
<summary style={{fontWeight:"500", cursor:"pointer", color:"#111827"}}>Step 5: Response Unpacking</summary>

**Check:** Validate response structure against documentation.

**If Fail**
- Cause: Application-side issue  
- Action: Fix parser or schema mapping  

</details>

---

<details style={{border:"1px solid #fee2e2", borderRadius:"8px", padding:"10px 14px", marginBottom:"10px"}}>
<summary style={{fontWeight:"500", cursor:"pointer", color:"#991b1b"}}>Escalation Criteria</summary>

Escalate when ALL are true:

- Request payload is correct  
- Configuration is correct  
- Assertions are correct  
- Response content or template is incorrect  

</details>

---
