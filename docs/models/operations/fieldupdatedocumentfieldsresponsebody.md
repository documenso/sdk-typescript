# FieldUpdateDocumentFieldsResponseBody

Successful response

## Example Usage

```typescript
import { FieldUpdateDocumentFieldsResponseBody } from "@documenso/sdk-typescript/models/operations";

let value: FieldUpdateDocumentFieldsResponseBody = {
  fields: [
    {
      type: "DROPDOWN",
      id: 728559,
      secondaryId: "<id>",
      documentId: 329651,
      templateId: 791762,
      recipientId: 108165,
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

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `fields`                                                                                                                                 | [operations.FieldUpdateDocumentFieldsDocumentsFieldsFields](../../models/operations/fieldupdatedocumentfieldsdocumentsfieldsfields.md)[] | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |