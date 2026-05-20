# DocumentCreateReminderSettings

## Example Usage

```typescript
import { DocumentCreateReminderSettings } from "@documenso/sdk-typescript/models/operations";

let value: DocumentCreateReminderSettings = {
  sendAfter: {
    unit: "day",
    amount: 983867,
  },
  repeatEvery: {
    unit: "week",
    amount: 860557,
  },
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `sendAfter`                                 | *operations.DocumentCreateSendAfterUnion*   | :heavy_check_mark:                          | N/A                                         |
| `repeatEvery`                               | *operations.DocumentCreateRepeatEveryUnion* | :heavy_check_mark:                          | N/A                                         |