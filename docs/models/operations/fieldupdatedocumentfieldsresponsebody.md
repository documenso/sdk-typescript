# FieldUpdateDocumentFieldsResponseBody

Successful response

## Example Usage

```typescript
import { FieldUpdateDocumentFieldsResponseBody } from "@documenso/sdk-typescript/models/operations";

let value: FieldUpdateDocumentFieldsResponseBody = {
  fields: [
    {
      type: "FREE_SIGNATURE",
      id: 264649,
      secondaryId: "<id>",
      documentId: 975095,
      templateId: 639463,
      recipientId: 520678,
      page: 3979.19,
      customText: "<value>",
      inserted: false,
      fieldMeta: {
        type: "radio",
      },
    },
  ],
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `fields`                                                                                                                                 | [operations.FieldUpdateDocumentFieldsDocumentsFieldsFields](../../models/operations/fieldupdatedocumentfieldsdocumentsfieldsfields.md)[] | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |