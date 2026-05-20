# EnvelopeCreateReminderSettings

## Example Usage

```typescript
import { EnvelopeCreateReminderSettings } from "@documenso/sdk-typescript/models/operations";

let value: EnvelopeCreateReminderSettings = {
  sendAfter: {
    disabled: true,
  },
  repeatEvery: {
    unit: "day",
    amount: 236107,
  },
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `sendAfter`                                 | *operations.EnvelopeCreateSendAfterUnion*   | :heavy_check_mark:                          | N/A                                         |
| `repeatEvery`                               | *operations.EnvelopeCreateRepeatEveryUnion* | :heavy_check_mark:                          | N/A                                         |