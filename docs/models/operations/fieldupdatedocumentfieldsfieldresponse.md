# FieldUpdateDocumentFieldsFieldResponse

## Example Usage

```typescript
import { FieldUpdateDocumentFieldsFieldResponse } from "@documenso/sdk-typescript/models/operations";

let value: FieldUpdateDocumentFieldsFieldResponse = {
  envelopeId: "<id>",
  envelopeItemId: "<id>",
  type: "SIGNATURE",
  id: 1175.92,
  secondaryId: "<id>",
  recipientId: 1075.03,
  page: 649.18,
  positionX: "<value>",
  positionY: "<value>",
  width: "<value>",
  height: "<value>",
  customText: "<value>",
  inserted: true,
  fieldMeta: {
    fontSize: 12,
    type: "email",
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `envelopeId`                                                                                                         | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `envelopeItemId`                                                                                                     | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `type`                                                                                                               | [operations.FieldUpdateDocumentFieldsTypeResponse](../../models/operations/fieldupdatedocumentfieldstyperesponse.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
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
| `fieldMeta`                                                                                                          | *operations.FieldUpdateDocumentFieldsFieldMetaUnion*                                                                 | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `documentId`                                                                                                         | *number*                                                                                                             | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `templateId`                                                                                                         | *number*                                                                                                             | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |