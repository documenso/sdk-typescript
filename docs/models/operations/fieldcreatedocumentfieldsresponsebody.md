# FieldCreateDocumentFieldsResponseBody

Successful response

## Example Usage

```typescript
import { FieldCreateDocumentFieldsResponseBody } from "@documenso/sdk-typescript/models/operations";

let value: FieldCreateDocumentFieldsResponseBody = {
  fields: [
    {
      type: "TEXT",
      id: 922299,
      secondaryId: "<id>",
      documentId: 492361,
      templateId: 873833,
      recipientId: 833982,
      page: 2138.35,
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
| `fields`                                                                                                                                 | [operations.FieldCreateDocumentFieldsDocumentsFieldsFields](../../models/operations/fieldcreatedocumentfieldsdocumentsfieldsfields.md)[] | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |