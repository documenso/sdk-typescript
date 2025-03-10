# FieldCreateDocumentFieldsResponse

Successful response

## Example Usage

```typescript
import { FieldCreateDocumentFieldsResponse } from "@documenso/sdk-typescript/models/operations";

let value: FieldCreateDocumentFieldsResponse = {
  fields: [
    {
      type: "SIGNATURE",
      id: 9438.51,
      secondaryId: "<id>",
      documentId: 9649.25,
      templateId: 7193.89,
      recipientId: 3499.93,
      page: 2543.82,
      customText: "<value>",
      inserted: false,
      fieldMeta: {
        type: "email",
      },
    },
  ],
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `fields`                                                                                                                   | [operations.FieldCreateDocumentFieldsResponseFields](../../models/operations/fieldcreatedocumentfieldsresponsefields.md)[] | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |