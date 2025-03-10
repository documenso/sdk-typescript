# FieldUpdateTemplateFieldsResponse

Successful response

## Example Usage

```typescript
import { FieldUpdateTemplateFieldsResponse } from "@documenso/sdk-typescript/models/operations";

let value: FieldUpdateTemplateFieldsResponse = {
  fields: [
    {
      type: "INITIALS",
      id: 9905.4,
      secondaryId: "<id>",
      documentId: 5714.98,
      templateId: 7328.15,
      recipientId: 982.5,
      page: 3661.17,
      customText: "<value>",
      inserted: false,
      fieldMeta: {
        type: "dropdown",
      },
    },
  ],
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `fields`                                                                                                                   | [operations.FieldUpdateTemplateFieldsResponseFields](../../models/operations/fieldupdatetemplatefieldsresponsefields.md)[] | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |