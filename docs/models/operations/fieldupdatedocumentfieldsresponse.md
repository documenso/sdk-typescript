# FieldUpdateDocumentFieldsResponse

Successful response

## Example Usage

```typescript
import { FieldUpdateDocumentFieldsResponse } from "@documenso/sdk-typescript/models/operations";

let value: FieldUpdateDocumentFieldsResponse = {
  fields: [
    {
      type: "DROPDOWN",
      id: 2992.55,
      secondaryId: "<id>",
      documentId: 6326.22,
      templateId: 4223.59,
      recipientId: 892,
      page: 9865.38,
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
| `fields`                                                                                                                 | [operations.FieldUpdateDocumentFieldsFieldResponse](../../models/operations/fieldupdatedocumentfieldsfieldresponse.md)[] | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |