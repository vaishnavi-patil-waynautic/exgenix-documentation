---
id: information-panel
title: 'Test Suite Information Panel'
sidebar_position: 6
hide_table_of_contents: true
sidebar_label: Information Panel
slug: /test-suite-execution/information-panel
description: 'Understanding the test suite information panel'
---

import {
  FeatureCard,
  FeatureGrid
} from '@site/src/components/DocumentationComponents';

# Test Suite Information Panel

After suite creation, the panel shows:

<FeatureGrid>
  <FeatureCard
    icon="calendar"
    title="Schedule"
    description="Displays the execution schedule type (On Demand or Scheduled), including configured frequency and timing."
    color="#2563eb"
  />

  <FeatureCard
    icon="clock"
    title="Last Run"
    description="Shows the timestamp of the most recent execution, with quick access to the last execution report."
    color="#10b981"
  />

  <FeatureCard
    icon="user"
    title="Created By"
    description="Identifies the user who created the suite along with the creation timestamp."
    color="#f59e0b"
  />

  <FeatureCard
    icon="zap"
    title="Parallel Execution"
    description="Indicates whether parallel execution is enabled or disabled, with full configuration details."
    color="#ec4899"
  />
</FeatureGrid>