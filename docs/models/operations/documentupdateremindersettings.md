# DocumentUpdateReminderSettings

## Example Usage

```typescript
import { DocumentUpdateReminderSettings } from "@documenso/sdk-typescript/models/operations";

let value: DocumentUpdateReminderSettings = {
  sendAfter: {
    unit: "month",
    amount: 541029,
  },
  repeatEvery: {
    disabled: true,
  },
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `sendAfter`                                 | *operations.DocumentUpdateSendAfterUnion*   | :heavy_check_mark:                          | N/A                                         |
| `repeatEvery`                               | *operations.DocumentUpdateRepeatEveryUnion* | :heavy_check_mark:                          | N/A                                         |