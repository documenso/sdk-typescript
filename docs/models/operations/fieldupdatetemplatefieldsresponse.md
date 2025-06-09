# FieldUpdateTemplateFieldsResponse

Successful response

## Example Usage

```typescript
import { FieldUpdateTemplateFieldsResponse } from "@documenso/sdk-typescript/models/operations";

let value: FieldUpdateTemplateFieldsResponse = {
  fields: [
    {
      type: "FREE_SIGNATURE",
      id: 6817.07,
      secondaryId: "<id>",
      documentId: 2673.63,
      templateId: 6356.17,
      recipientId: 2551.5,
      page: 107.6,
      customText: "<value>",
      inserted: false,
      fieldMeta: {
        type: "date",
      },
    },
  ],
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `fields`                                                                                                                 | [operations.FieldUpdateTemplateFieldsFieldResponse](../../models/operations/fieldupdatetemplatefieldsfieldresponse.md)[] | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |