---
title: Waynautic AI QA Agent – User Guide
sidebar_position: 5
---

# 🚀 Waynautic AI QA Agent – User Guide

> **An intelligent QA automation module integrated within Exgenix — designed for stock exchanges and financial institutions.**

---

## 🧭 Table of Contents
1. [Overview](#overview)
2. [Module Structure](#module-structure)
3. [Requirement Synchronization](#requirement-synchronization)
4. [AI Test Case Generation](#ai-test-case-generation)
5. [Test Case Review and Customization](#test-case-review-and-customization)
6. [Requirement & Test Case Mapping](#requirement--test-case-mapping)
7. [Defect Traceability and Impact Analysis](#defect-traceability-and-impact-analysis)
8. [Intelligent Chat Interface](#intelligent-chat-interface)
9. [Advanced Features](#advanced-features)
10. [Best Practices](#best-practices)
11. [Troubleshooting](#troubleshooting)
12. [Summary](#summary)

---

## 🧩 Overview

The **Waynautic AI QA Agent** is an intelligent quality assurance automation module integrated within **Exgenix**, designed specifically for stock exchanges and financial institutions.  
It streamlines the end-to-end QA lifecycle — from requirement ingestion to test case generation, execution mapping, and defect traceability — using AI models fine-tuned for trading workflows.

### ✨ Key Benefits
- 🔗 Seamless integration with requirement management tools like Jira  
- ⚙️ One-click AI-driven test case generation  
- 🔍 End-to-end traceability from requirements to test cases and defects  
- 🧠 Continuous learning and accuracy improvement through feedback  
- 💬 Real-time insights and analytics via an intelligent chat interface  
- 📊 Enhanced QA governance and release readiness visibility  

---

## 🧱 Module Structure

The Waynautic AI QA Agent follows a structured hierarchy for managing QA assets across the exchange lifecycle:

Requirements  
└── Test Cases  
└── Defects  

| Component | Purpose |
|------------|----------|
| **Requirements** | Source of truth for functional and non-functional business needs |
| **Test Cases** | AI-generated or manually refined validation scenarios mapped to requirements |
| **Defects** | Identified issues linked to test cases and corresponding requirements |

---

## 🔄 Requirement Synchronization

### 💡 What It Does
The module allows direct synchronization between requirement management tools (e.g., Jira) and the Waynautic AI QA Agent.

### ⚙️ Key Capabilities
- Browse all linked requirements via your connected account  
- Import requirements instantly — no manual copy-paste or data loss  
- Maintain version control and change history  

### 🪜 Steps to Sync Requirements
1. Navigate to **Waynautic QA Agent**  
2. Click **Sync Requirements**  
3. Choose your connected account (e.g., Jira, ServiceNow)  
4. Select the requirements to import  
5. Click **Generate**  

The imported requirements are now ready for AI test case generation.

---

## 🤖 AI Test Case Generation

### 🔍 Overview
Once requirements are imported, the AI QA Agent automatically generates test cases tuned for exchange workflows like trading, surveillance, and clearing.

### 🪜 Steps
1. Click **Generate Test Cases**  
2. Select one or more requirements  
3. Let the AI model process and create test cases  
4. Review auto-generated test cases instantly  

### 🧠 Generated Test Case Structure
Each AI-generated test case includes:
- **Description** – Purpose and validation scope  
- **Step-by-step flow** – Execution logic aligned with exchange processes  
- **Test data** – Predefined or dynamically generated inputs  

### 🎯 Benefits
- ⚡ Instant creation of detailed test cases  
- 🎓 Domain-specific accuracy tuned to exchange protocols  
- 🕒 Reduction in manual test design effort  

---

## 🧾 Test Case Review and Customization

### 🔍 Review Process
- QA teams can review, accept, or reject each test case individually or in bulk  
- Each decision trains the AI model to continuously enhance accuracy  

### ✏️ Editing Capabilities
- Modify or add test steps manually  
- Combine manual and automated flows  
- Adjust test data for specific edge cases  
- Clone and reuse test cases across modules  

This ensures test cases remain transparent, editable, and aligned with domain expertise — not opaque AI outputs.

---

## 🔗 Requirement & Test Case Mapping

### 🧭 Mapping Overview
The AI QA Agent supports both:
- **One-to-one mapping:** A single requirement linked to one test case  
- **One-to-many mapping:** A requirement spawning multiple related test cases  

### 🔍 Traceability Features
- Full traceability between requirements → test cases → execution results  
- Auto-updates when requirements change — new tests are generated or obsolete ones retired  
- Ensures continuous alignment between requirements and QA coverage  

#### 🧱 Example Mapping Hierarchy
Requirement: "Detect unusual trading patterns"  
├── Test Case 1: Validate alert trigger for abnormal volume  
├── Test Case 2: Verify alert suppression for legitimate high-volume trades  
└── Test Case 3: Validate escalation workflow to compliance  

---

## 🐞 Defect Traceability and Impact Analysis

### 🔗 Defect Linking
Every defect raised during execution can be:
- Linked to one or more test cases  
- Automatically traced back to originating requirements  

### 📊 Impact Analysis
- Visualize coverage gaps across modules  
- Track defects by requirement, release, or component  
- Link historical defects with release notes and change requests  
- Analyze impact across the QA lifecycle  

### 🎯 Benefits
- ✅ End-to-end visibility of defect origins  
- 🔍 Streamlined root cause analysis  
- 📈 Data-driven release decision-making  

---

## 💬 Intelligent Chat Interface

### 🧠 Overview
The integrated AI Chat Interface acts as a real-time QA assistant for all stakeholders.

### 🗣️ Capabilities
Users can query the system in natural language:
- “Show failed regressions linked to my changes.”  
- “Are all failure paths in the payment gateway covered?”  
- “Summarize QA status for the current release.”  

The AI interprets queries, analyzes QA data, and returns relevant insights with supporting metrics.

#### 💡 Example Output
> “There are unresolved defects and incomplete test cases in the Payment Gateway module. Recommendation: Do not proceed with go-live.”

This conversational interface ensures real-time situational awareness for project managers, QA leads, and developers.

---

## ⚙️ Advanced Features

| Feature | Description |
|----------|-------------|
| **Continuous Learning** | The AI model refines itself from user actions (accept/reject decisions) |
| **Historical Data Integration** | Supports importing legacy requirements, defects, and release notes |
| **Release Impact Mapping** | Correlates QA coverage with each release cycle |
| **Automated Traceability Matrix** | Auto-generates matrices between requirements, test cases, and defects |

---

## 🧠 Best Practices

### 🧾 For Requirements
- Maintain clear, atomic requirement statements  
- Group by functional area (e.g., Surveillance, Risk, Matching Engine)  
- Keep requirement names concise and descriptive  

### 🧪 For Test Cases
- Review generated test cases before approval  
- Customize critical scenarios with domain insights  
- Reuse validated test cases across releases  

### 🐞 For Defects
- Ensure all defects are linked to at least one test case  
- Add contextual notes (release, module, severity)  
- Review recurring defect patterns for AI learning  

### 💡 General Tips
- 🔁 Use requirement sync frequently to capture latest changes  
- 📊 Export mapping reports weekly for QA governance reviews  
- 💬 Use chat interface for instant QA summaries  

---

## 🧰 Troubleshooting

| Problem | Possible Cause | Solution |
|----------|----------------|-----------|
| Requirements not syncing | Integration token expired | Reconnect Jira account and refresh token |
| Test cases missing | AI generation failed | Verify requirement text completeness and retry generation |
| Defects not linking | Mapping data incomplete | Check test case IDs and re-sync |
| Chat not responding | Network or auth issue | Refresh session and retry |

---

## 🏁 Summary

The **Waynautic AI QA Agent** delivers intelligent, automated QA lifecycle management purpose-built for stock exchange environments.  
By combining requirement synchronization, AI-driven test design, traceability, and conversational insights, it ensures total coverage and governance across all functional areas.

### 🔑 Key Takeaways
- 🔗 Connect requirements directly from Jira with zero manual effort  
- 🤖 Instantly generate domain-specific test cases using AI  
- 📋 Maintain one-to-one traceability between requirements, tests, and defects  
- 💬 Gain instant QA insights through the chat interface  
- 🧠 Continuously improve coverage and accuracy via AI learning  
