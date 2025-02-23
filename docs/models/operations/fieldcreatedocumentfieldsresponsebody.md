# FieldCreateDocumentFieldsResponseBody

Successful response

## Example Usage

```typescript
import { FieldCreateDocumentFieldsResponseBody } from "@documenso/sdk-typescript/models/operations";

let value: FieldCreateDocumentFieldsResponseBody = {
  fields: [
    {
      type: "SIGNATURE",
      id: 943851,
      secondaryId: "<id>",
      documentId: 964925,
      templateId: 719389,
      recipientId: 349993,
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

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `fields`                                                                                                                                 | [operations.FieldCreateDocumentFieldsDocumentsFieldsFields](../../models/operations/fieldcreatedocumentfieldsdocumentsfieldsfields.md)[] | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |