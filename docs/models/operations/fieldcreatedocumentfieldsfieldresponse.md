# FieldCreateDocumentFieldsFieldResponse

## Example Usage

```typescript
import { FieldCreateDocumentFieldsFieldResponse } from "@documenso/sdk-typescript/models/operations";

let value: FieldCreateDocumentFieldsFieldResponse = {
  envelopeId: "<id>",
  envelopeItemId: "<id>",
  type: "RADIO",
  id: 3256.67,
  secondaryId: "<id>",
  recipientId: 2411.58,
  page: 145.84,
  positionX: "<value>",
  positionY: "<value>",
  width: "<value>",
  height: "<value>",
  customText: "<value>",
  inserted: true,
  fieldMeta: {
    fontSize: 12,
    type: "initials",
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `envelopeId`                                                                                                         | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `envelopeItemId`                                                                                                     | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `type`                                                                                                               | [operations.FieldCreateDocumentFieldsTypeResponse](../../models/operations/fieldcreatedocumentfieldstyperesponse.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `id`                                                                                                                 | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `secondaryId`                                                                                                        | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `recipientId`                                                                                                        | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `page`                                                                                                               | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `positionX`                                                                                                          | *any*                                                                                                                | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `positionY`                                                                                                          | *any*                                                                                                                | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `width`                                                                                                              | *any*                                                                                                                | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `height`                                                                                                             | *any*                                                                                                                | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `customText`                                                                                                         | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `inserted`                                                                                                           | *boolean*                                                                                                            | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `fieldMeta`                                                                                                          | *operations.FieldCreateDocumentFieldsFieldMetaUnion*                                                                 | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `documentId`                                                                                                         | *number*                                                                                                             | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `templateId`                                                                                                         | *number*                                                                                                             | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |