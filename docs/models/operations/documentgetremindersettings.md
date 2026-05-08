# DocumentGetReminderSettings

## Example Usage

```typescript
import { DocumentGetReminderSettings } from "@documenso/sdk-typescript/models/operations";

let value: DocumentGetReminderSettings = {
  sendAfter: {
    disabled: true,
  },
  repeatEvery: {
    unit: "month",
    amount: 990208,
  },
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `sendAfter`                              | *operations.DocumentGetSendAfterUnion*   | :heavy_check_mark:                       | N/A                                      |
| `repeatEvery`                            | *operations.DocumentGetRepeatEveryUnion* | :heavy_check_mark:                       | N/A                                      |