# FieldUpdateDocumentFieldsResponseBody

Successful response

## Example Usage

```typescript
import { FieldUpdateDocumentFieldsResponseBody } from "@documenso/sdk-typescript/models/operations";

let value: FieldUpdateDocumentFieldsResponseBody = {
  fields: [
    {
      type: "DATE",
      id: 83291,
      secondaryId: "<id>",
      documentId: 51075,
      templateId: 965517,
      recipientId: 859003,
      page: 1520.27,
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

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `fields`                                                                                                                                 | [operations.FieldUpdateDocumentFieldsDocumentsFieldsFields](../../models/operations/fieldupdatedocumentfieldsdocumentsfieldsfields.md)[] | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |