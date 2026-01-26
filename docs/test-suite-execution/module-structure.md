---
id: module-structure
title: 'Module Structure'
sidebar_position: 2
hide_table_of_contents: true
sidebar_label: Module Structure
slug: /test-suite-execution/module-structure
description: 'Understanding the hierarchical structure'
---
import { Layers, Settings, Database } from 'lucide-react';


# Module Structure
---

<div class="step-block">
  <div class="step-text">
    The execution module follows a hierarchical structure:
    
<div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>


  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
    <Layers size={20} color="#6366f1" />
    <strong>Test Execution Collection</strong>
  </div>

  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: '24px', marginTop: '10px' }}>
    └── <Settings size={20} color="#10b981" />
    <strong> Test Suite</strong>
  </div>

  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: '75px' }}>
    └── <Database size={20} color="#f59e0b" />
    <strong>Test Case</strong>
  </div>
</div>
    
    This three-tier structure provides logical organization and efficient execution management.
  </div>

  <div class="step-image">
    <h4 class="image-title">Test Execution</h4>
    <img src="/img/test_suite_and_execution/test_execution.png" alt="Test Execution" />
    <p class="image-caption">🖱️ Click to expand image</p>
  </div>
</div>

## Components
#
| Component | Purpose | Contains |
|-----------|---------|----------|
| **Test Execution Collection** | `Top-level organizer` | Multiple Test Suites |
| **Test Suite** | `Logical grouping of tests` | Multiple Test Cases |
| **Test Case** | `Individual test scenario` | Multiple Test Steps |
---