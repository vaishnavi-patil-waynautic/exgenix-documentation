---
id: scheduled-execution
title: 'Scheduled Execution'
sidebar_position: 10
hide_table_of_contents: true
sidebar_label: Scheduled Execution
slug: /test-suite-execution/scheduled-execution
description: 'Configuring and managing scheduled executions'
---

import {
  FeatureCard,
  FeatureGrid
} from '@site/src/components/DocumentationComponents';

# Scheduled Execution

## Configuring Schedules
#
When creating or editing a suite:

1. Set **Schedule** = **Scheduled**
2. Configure frequency:

<FeatureGrid>

  <FeatureCard
    icon="calendar"
    title="Daily Schedule"
    description="Configure daily execution with a specific time of day, timezone settings, selected days (weekdays/weekends/all), and notification preferences."
    color="#2563eb"
  />

  <FeatureCard
    icon="calendar-days"
    title="Weekly Schedule"
    description="Configure weekly execution by selecting specific days of the week, setting execution time, defining recurrence patterns, and managing notification recipients."
    color="#10b981"
  />

  <FeatureCard
    icon="calendar-range"
    title="Monthly Schedule"
    description="Configure monthly execution by choosing specific date(s) of the month, selecting execution time, handling month-end scenarios, and setting recurring patterns."
    color="#f59e0b"
  />

</FeatureGrid>


---

## Schedule Management
#
- **View** scheduled suites: Execution module → filter **Scheduled**
- **Modify**: Edit suite → update schedule → Save
- **Disable**: Change to **On Demand** → Save


:::info
## Notifications

Available notification channels:
- **Email**: Send results to stakeholders
- **Webhook**: Integrate with external systems
- **Dashboard**: Real-time updates in Exgenix

:::