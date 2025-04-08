# FieldCreateTemplateFieldsResponse

Successful response

## Example Usage

```typescript
import { FieldCreateTemplateFieldsResponse } from "@documenso/sdk-typescript/models/operations";

let value: FieldCreateTemplateFieldsResponse = {
  fields: [
    {
      type: "NAME",
      id: 7722.35,
      secondaryId: "<id>",
      documentId: 2702.42,
      templateId: 6052.09,
      recipientId: 3563.9,
      page: 8565.69,
      customText: "<value>",
      inserted: false,
      fieldMeta: {
        type: "initials",
      },
    },
  ],
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `fields`                                                                                                                 | [operations.FieldCreateTemplateFieldsFieldResponse](../../models/operations/fieldcreatetemplatefieldsfieldresponse.md)[] | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |