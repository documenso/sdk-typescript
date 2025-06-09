# FieldUpdateDocumentFieldsResponse

Successful response

## Example Usage

```typescript
import { FieldUpdateDocumentFieldsResponse } from "@documenso/sdk-typescript/models/operations";

let value: FieldUpdateDocumentFieldsResponse = {
  fields: [
    {
      type: "NAME",
      id: 6326.22,
      secondaryId: "<id>",
      documentId: 892,
      templateId: 608.73,
      recipientId: 7078.42,
      page: 724.02,
      customText: "<value>",
      inserted: true,
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