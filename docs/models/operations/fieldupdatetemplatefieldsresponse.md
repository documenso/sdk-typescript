# FieldUpdateTemplateFieldsResponse

Successful response

## Example Usage

```typescript
import { FieldUpdateTemplateFieldsResponse } from "@documenso/sdk-typescript/models/operations";

let value: FieldUpdateTemplateFieldsResponse = {
  fields: [
    {
      type: "CHECKBOX",
      id: 1284.33,
      secondaryId: "<id>",
      documentId: 6817.07,
      templateId: 1094.84,
      recipientId: 2673.63,
      page: 5224.94,
      customText: "<value>",
      inserted: false,
      fieldMeta: {
        type: "number",
      },
    },
  ],
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `fields`                                                                                                                 | [operations.FieldUpdateTemplateFieldsFieldResponse](../../models/operations/fieldupdatetemplatefieldsfieldresponse.md)[] | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |