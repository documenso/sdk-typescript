# DocumentReminderSettings

## Example Usage

```typescript
import { DocumentReminderSettings } from "@documenso/sdk-typescript/models/operations";

let value: DocumentReminderSettings = {
  sendAfter: {
    unit: "day",
    amount: 852106,
  },
  repeatEvery: {
    disabled: true,
  },
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `sendAfter`                           | *operations.DocumentSendAfterUnion*   | :heavy_check_mark:                    | N/A                                   |
| `repeatEvery`                         | *operations.DocumentRepeatEveryUnion* | :heavy_check_mark:                    | N/A                                   |