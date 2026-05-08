# DocumentCreateDocumentTemporaryReminderSettingsRequest

## Example Usage

```typescript
import { DocumentCreateDocumentTemporaryReminderSettingsRequest } from "@documenso/sdk-typescript/models/operations";

let value: DocumentCreateDocumentTemporaryReminderSettingsRequest = {
  sendAfter: {
    disabled: true,
  },
  repeatEvery: {
    disabled: true,
  },
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `sendAfter`                                                         | *operations.DocumentCreateDocumentTemporarySendAfterRequestUnion*   | :heavy_check_mark:                                                  | N/A                                                                 |
| `repeatEvery`                                                       | *operations.DocumentCreateDocumentTemporaryRepeatEveryRequestUnion* | :heavy_check_mark:                                                  | N/A                                                                 |