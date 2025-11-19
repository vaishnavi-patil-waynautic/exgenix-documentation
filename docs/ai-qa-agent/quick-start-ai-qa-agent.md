---
id: quick-start-guide
title: 'Exgenix QA Governance - Quick Start Guide'
sidebar_position: 3
hide_table_of_contents: true
sidebar_label: Quick Start Guide
slug: /ai-qa-agent/quick-start-guide
---
import { Lock, Folder, RefreshCw, Bot, FileText, Link, GitBranch, Bug, MessageSquare, Bookmark, Check, Mouse, FileCog, ClipboardCheck, GitMerge, Search, AlignLeft } from 'lucide-react';
import ExampleBlock  from '@site/src/components/ExampleBlock';

# Exgenix QA Governance - Quick Start Guide


---


## <Lock size={18} /> Step 1: Login to QA Governance Module


<div class="step-block">
<div class="step-text">

### Objective

Access the platform and navigate to the governance workspace.

### User Actions

1. Open AI QA - Exgenix URL
2. Enter valid username & password
3. Navigate to **QA Governance** section from main dashboard

</div>
<div class="step-image">
<h4 class="image-title">Login Page</h4>
<img src="/img/ai-qa-agent/1.png" alt="Login Page" />
<p class="image-caption">🖱️ Click to expand image</p>
</div>
</div>

<div class="step-block">
<div class="step-text">

<ExampleBlock title="">
### System Output

✓ Successful authentication  
✓ Dashboard view accessible
</ExampleBlock>

</div>
<div class="step-image">
<h4 class="image-title">QA Governance Dashboard</h4>
<img src="/img/ai-qa-agent/2.png" alt="QA Governance Dashboard" />
<p class="image-caption">🖱️ Click to expand image</p>
</div>
</div>

---

## <Folder size={18} /> Step 2: Create Folder Structure


<div class="step-block">
<div class="step-text">

### Objective

Organize the test repository aligned with business or functional hierarchy.

### User Actions

1. Navigate to **Test Repository / Folder Management**
2. Create module-based folders such as:
   - Gateway
   - Matching Engine
   - Risk
   - Clearing & Settlement
   - Surveillance


</div>
<div class="step-image">
<h4 class="image-title">Folder creation UI</h4>
<img src="/img/ai-qa-agent/3.png" alt="Folder creation UI" />
<p class="image-caption">🖱️ Click to expand image</p>
</div>
</div>


<div class="step-block">
<div class="step-text">

<ExampleBlock title="">

### System Output

✓ Clean hierarchical structure for mapped test cases

</ExampleBlock>

</div>
<div class="step-image">
<h4 class="image-title">Create folder or subfolder</h4>
<img src="/img/ai-qa-agent/4.png" alt="Create folder or subfolder" />
<p class="image-caption">🖱️ Click to expand image</p>
</div>
</div>

---

## <RefreshCw size={18} /> Step 3: Requirements Sync

<div class="step-block">
<div class="step-text">

### Objective

Fetch latest requirements from **Jira / Azure DevOps (ADO)** to begin test generation.

### User Actions

1. Navigate to **Requirements** tab
2. Click **Sync**
3. Wait for system to fetch & display requirements


</div>
<div class="step-image">
<h4 class="image-title">Requirements tab navigation</h4>
<img src="/img/ai-qa-agent/5.png" alt="Requirements tab navigation" />
<p class="image-caption">🖱️ Click to expand image</p>
</div>
</div>


<div class="step-block">
<div class="step-text">

<ExampleBlock title="">

### System Output

✓ Auto-sync of epics, stories, requirement IDs & descriptions  
✓ Stored inside governance repository

</ExampleBlock>

</div>
<div class="step-image">
<h4 class="image-title">Sync button highlighted</h4>
<img src="/img/ai-qa-agent/6.png" alt="Sync button highlighted" />
<p class="image-caption">🖱️ Click to expand image</p>
</div>
</div>

---
## <FileCog /> Step 4: AI Test Case Generation

<div class="step-block">
<div class="step-text">

### Objective

Generate intelligent manual-style test cases using AI.

### User Actions

1. Select one or multiple requirements
2. Click **Generate Test Cases**
3. Wait for AI to process and generate test suites


</div>
<div class="step-image">
<h4 class="image-title">Test case Generate button</h4>
<img src="/img/ai-qa-agent/7.png" alt="Test case Generate button" />
<p class="image-caption">🖱️ Click to expand image</p>
</div>
</div>

<div class="step-block">
<div class="step-text">
<ExampleBlock title="">

### System Output

✓ Positive, Negative & Edge Scenarios generated  
✓ Test steps, data, and expected results included

</ExampleBlock>
</div>
<div class="step-image">
<h4 class="image-title">Select requirements and generate</h4>
<img src="/img/ai-qa-agent/8.png" alt="Select requirements and generate" />
<p class="image-caption">🖱️ Click to expand image</p>
</div>
</div>

---

<div class="step-block">
<div class="step-text">

**Go to test cases**

</div>
<div class="step-image">
<h4 class="image-title"> Go to test cases </h4>
<img src="/img/ai-qa-agent/9.png" alt="Go to test cases" />
<p class="image-caption">🖱️ Click to expand image</p>
</div>
</div>

---

<div class="step-block">
<div class="step-text">

Generated test cases list

</div>
<div class="step-image">
<h4 class="image-title">Generated test cases list</h4>
<img src="/img/ai-qa-agent/10.png" alt="Generated test cases list" />
<p class="image-caption">🖱️ Click to expand image</p>
</div>
</div>

---

## <ClipboardCheck /> Step 5: Test Review & Approval






<div class="step-block">
<div class="step-text">
### Objective

Approve, reject, or edit tests for better refinement.

</div>
<div class="step-image">
<h4 class="image-title">Select test cases</h4>
<img src="/img/ai-qa-agent/11.png" alt="Select test cases" />
<p class="image-caption">🖱️ Click to expand image</p>
</div>
</div>


<div class="step-block">
<div class="step-text">

### User Actions

1. Open **Generated Test Cases**
2. Review content and modify if required
3. Accept or Reject individually or in bulk

</div>
<div class="step-image">
<h4 class="image-title">Accept or Reject Test Case</h4>
<img src="/img/ai-qa-agent/12.png" alt="Accept or Reject Test Case" />
<p class="image-caption">🖱️ Click to expand image</p>
</div>
</div>


<div class="step-block">
<div class="step-text">

<ExampleBlock title="">

### System Output

✓ Approved test cases become part of repository  
✓ Rejected cases are excluded & stored for model learning

</ExampleBlock>

</div>
<div class="step-image">
<h4 class="image-title">Approval/Rejection UI</h4>
<img src="/img/ai-qa-agent/13.png" alt="Approval/Rejection UI" />
<p class="image-caption">🖱️ Click to expand image</p>
</div>
</div>

---
## <GitMerge /> Step 6: Mapping Test Cases to Modules



<div class="step-block">
<div class="step-text">

### Objective

Place approved test cases in the correct functional module folder.

### User Actions

1. Navigate to **Unmapped Cases**
2. Select test cases to move
3. Choose correct module folder & apply


</div>
<div class="step-image">
<h4 class="image-title">Unmapped test case view</h4>
<img src="/img/ai-qa-agent/14.png" alt="Unmapped test case view" />
<p class="image-caption">🖱️ Click to expand image</p>
</div>
</div>


<div class="step-block">
<div class="step-text">

<ExampleBlock title="">

### System Output

✓ Organized test repository for execution & reporting

</ExampleBlock>


</div>
<div class="step-image">
<h4 class="image-title">Drag test cases to folder</h4>
<img src="/img/ai-qa-agent/15.png" alt="Drag test cases to folder" />
<p class="image-caption">🖱️ Click to expand image</p>
</div>
</div>

---
## <Search /> Step 7: Maintain End-to-End Traceability



<div class="step-block">
<div class="step-text">

### Objective

Preserve automated traceability across the lifecycle.

</div>
<div class="step-image">
<h4 class="image-title">Test case tab</h4>
<img src="/img/ai-qa-agent/16.png" alt="Test case tab" />
<p class="image-caption">🖱️ Click to expand image</p>
</div>
</div>


<div class="step-block">
<div class="step-text">


### Traceability Links

| From | To |
|------|-----|
| Requirement | Test Case |
| Test Case | Execution |
| Test Case | Defects |


</div>
<div class="step-image">
<h4 class="image-title">Select test case</h4>
<img src="/img/ai-qa-agent/17.png" alt="Select test case" />
<p class="image-caption">🖱️ Click to expand image</p>
</div>
</div>

---

<div class="step-block">
<div class="step-text">

Click on Relationship tab and click on Plus Sign as high lighted

</div>
<div class="step-image">
<h4 class="image-title">Relationship tab</h4>
<img src="/img/ai-qa-agent/18.png" alt="Relationship tab" />
<p class="image-caption">🖱️ Click to expand image</p>
</div>
</div>

---

<div class="step-block">
<div class="step-text">

Select the requirement to one by one to be linked and click Submit

</div>
<div class="step-image">
<h4 class="image-title">Link requirement</h4>
<img src="/img/ai-qa-agent/19.png" alt="Link requirement" />
<p class="image-caption">🖱️ Click to expand image</p>
</div>
</div>

---

<div class="step-block">
<div class="step-text">

Click on Update Button as highlighted

</div>
<div class="step-image">
<h4 class="image-title">Update Button</h4>
<img src="/img/ai-qa-agent/20.png" alt="Update Button" />
<p class="image-caption">🖱️ Click to expand image</p>
</div>
</div>

---
## <Bug /> Step 8: Defect Tracking & Mapping



<div class="step-block">
<div class="step-text">
### Objective

Connect execution results and defects with requirement lineage.

</div>
<div class="step-image">
<h4 class="image-title">Defect Tab</h4>
<img src="/img/ai-qa-agent/21.png" alt="Defect Tab" />
<p class="image-caption">🖱️ Click to expand image</p>
</div>
</div>

<div class="step-block">
<div class="step-text">

### User Actions

1. Open defect module
2. Link defect to test case & requirement

</div>
<div class="step-image">
<h4 class="image-title">Create or select defect</h4>
<img src="/img/ai-qa-agent/22.png" alt="Create or select defect" />
<p class="image-caption">🖱️ Click to expand image</p>
</div>
</div>

---

<div class="step-block">
<div class="step-text">

Click on Relationship tab and click on Plus Sign as high lighted

</div>
<div class="step-image">
<h4 class="image-title">Defect Relationship tab</h4>
<img src="/img/ai-qa-agent/23.png" alt="Defect Relationship tab" />
<p class="image-caption">🖱️ Click to expand image</p>
</div>
</div>

---

<div class="step-block">
<div class="step-text">

Select the requirement to one by one to be linked and click Submit

</div>
<div class="step-image">
<h4 class="image-title">Link defect to requirement</h4>
<img src="/img/ai-qa-agent/24.png" alt="Link defect to requirement" />
<p class="image-caption">🖱️ Click to expand image</p>
</div>
</div>

---

<div class="step-block">
<div class="step-text">

Click on Update Button as highlighted

</div>
<div class="step-image">
<h4 class="image-title">Update defect</h4>
<img src="/img/ai-qa-agent/25.png" alt="Update defect" />
<p class="image-caption">🖱️ Click to expand image</p>
</div>
</div>

---
## <MessageSquare /> Step 9: Conversational AI Insights


### Objective

Access dynamic governance analytics using natural language prompts.

### Examples

- "Show coverage for Gateway module"
- "List all high-risk areas for this release"
- "Are we ready for production?"

<ExampleBlock title="">

### System Output

✓ Role-based governance insights  
✓ Data-backed decisions

</ExampleBlock>

- Chat/Query Console
- AI Response Panel

---

# <AlignLeft /> Final Summary


| Stage | Output |
|-------|--------|
| Requirements Sync | Centralized requirement source |
| AI Generation | Full test suite auto-created |
| Review & Refine | Human validation |
| Folder Mapping | Structured repository |
| Traceability | Automated bidirectional view |
| Defects | Complete QA audit link |
| Insights | AI-driven decision & reporting |