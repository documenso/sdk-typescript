# TemplateCreateDocumentFromTemplateReminderSettings

## Example Usage

```typescript
import { TemplateCreateDocumentFromTemplateReminderSettings } from "@documenso/sdk-typescript/models/operations";

let value: TemplateCreateDocumentFromTemplateReminderSettings = {
  sendAfter: {
    disabled: true,
  },
  repeatEvery: {
    disabled: true,
  },
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `sendAfter`                                                     | *operations.TemplateCreateDocumentFromTemplateSendAfterUnion*   | :heavy_check_mark:                                              | N/A                                                             |
| `repeatEvery`                                                   | *operations.TemplateCreateDocumentFromTemplateRepeatEveryUnion* | :heavy_check_mark:                                              | N/A                                                             |