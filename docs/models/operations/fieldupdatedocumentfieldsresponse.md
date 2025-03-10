# FieldUpdateDocumentFieldsResponse

Successful response

## Example Usage

```typescript
import { FieldUpdateDocumentFieldsResponse } from "@documenso/sdk-typescript/models/operations";

let value: FieldUpdateDocumentFieldsResponse = {
  fields: [
    {
      type: "DROPDOWN",
      id: 7285.59,
      secondaryId: "<id>",
      documentId: 3296.51,
      templateId: 7917.62,
      recipientId: 1081.65,
      page: 3923.19,
      customText: "<value>",
      inserted: false,
      fieldMeta: {
        type: "name",
      },
    },
  ],
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `fields`                                                                                                                   | [operations.FieldUpdateDocumentFieldsResponseFields](../../models/operations/fieldupdatedocumentfieldsresponsefields.md)[] | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |