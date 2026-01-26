---
id: module-structure
title: 'Module Structure'
sidebar_position: 2
hide_table_of_contents: true
sidebar_label: Module Structure
slug: /test-case-configuration/module-structure
description: 'Understanding the module structure'
---
import { Layers, Settings, Database } from 'lucide-react';


# Module Structure

---

<div class="step-block">
  <div class="step-text">

The Test Case & Configuration module follows a clear hierarchy:


<div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>


  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
    <Layers size={20} color="#6366f1" />
    <strong>Collections</strong>
  </div>

  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: '24px', marginTop: '10px' }}>
    └── <Settings size={20} color="#10b981" />
    <strong> Test Cases</strong>
  </div>

  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: '75px' }}>
    └── <Database size={20} color="#f59e0b" />
    <strong> Steps</strong>
  </div>
</div>

| Component | Purpose |
|-----------|---------|
| **Collections** | `Group` related test cases for organization and collaboration |
| **Test Cases** | Define end-to-end, `executable test flows` |
| **Steps** | `Ordered actions` within a test case (`TAU`s or `individual API`s) |

  </div>
</div>

---