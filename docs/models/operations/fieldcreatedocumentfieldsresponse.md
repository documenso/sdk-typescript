# FieldCreateDocumentFieldsResponse

Successful response

## Example Usage

```typescript
import { FieldCreateDocumentFieldsResponse } from "@documenso/sdk-typescript/models/operations";

let value: FieldCreateDocumentFieldsResponse = {
  fields: [
    {
      type: "INITIALS",
      id: 9570.18,
      secondaryId: "<id>",
      documentId: 1730.35,
      templateId: 372.33,
      recipientId: 8252.22,
      page: 1905.5,
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
| `fields`                                                                                                                 | [operations.FieldCreateDocumentFieldsFieldResponse](../../models/operations/fieldcreatedocumentfieldsfieldresponse.md)[] | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |