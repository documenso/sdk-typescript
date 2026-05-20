# EnvelopeUpdateReminderSettings

## Example Usage

```typescript
import { EnvelopeUpdateReminderSettings } from "@documenso/sdk-typescript/models/operations";

let value: EnvelopeUpdateReminderSettings = {
  sendAfter: {
    unit: "week",
    amount: 864548,
  },
  repeatEvery: {
    unit: "day",
    amount: 133909,
  },
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `sendAfter`                                 | *operations.EnvelopeUpdateSendAfterUnion*   | :heavy_check_mark:                          | N/A                                         |
| `repeatEvery`                               | *operations.EnvelopeUpdateRepeatEveryUnion* | :heavy_check_mark:                          | N/A                                         |