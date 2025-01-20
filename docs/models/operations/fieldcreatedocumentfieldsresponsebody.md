# FieldCreateDocumentFieldsResponseBody

Successful response

## Example Usage

```typescript
import { FieldCreateDocumentFieldsResponseBody } from "@documenso/sdk-typescript/models/operations";

let value: FieldCreateDocumentFieldsResponseBody = {
  fields: [
    {
      type: "RADIO",
      id: 97676,
      secondaryId: "<id>",
      documentId: 514922,
      templateId: 938412,
      recipientId: 228646,
      page: 6771.41,
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

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `fields`                                                                                                                                 | [operations.FieldCreateDocumentFieldsDocumentsFieldsFields](../../models/operations/fieldcreatedocumentfieldsdocumentsfieldsfields.md)[] | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |