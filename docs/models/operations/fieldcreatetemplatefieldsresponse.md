# FieldCreateTemplateFieldsResponse

Successful response

## Example Usage

```typescript
import { FieldCreateTemplateFieldsResponse } from "@documenso/sdk-typescript/models/operations";

let value: FieldCreateTemplateFieldsResponse = {
  fields: [
    {
      type: "DROPDOWN",
      id: 9103.96,
      secondaryId: "<id>",
      documentId: 5846.63,
      templateId: 3035.49,
      recipientId: 3299.61,
      page: 8979.14,
      customText: "<value>",
      inserted: false,
      fieldMeta: {
        type: "text",
      },
    },
  ],
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `fields`                                                                                                                   | [operations.FieldCreateTemplateFieldsResponseFields](../../models/operations/fieldcreatetemplatefieldsresponsefields.md)[] | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |