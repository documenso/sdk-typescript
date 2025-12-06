# FieldCreateDocumentFieldResponse

Successful response

## Example Usage

```typescript
import { FieldCreateDocumentFieldResponse } from "@documenso/sdk-typescript/models/operations";

let value: FieldCreateDocumentFieldResponse = {
  envelopeId: "<id>",
  envelopeItemId: "<id>",
  type: "NAME",
  id: 4449.71,
  secondaryId: "<id>",
  recipientId: 1726.85,
  page: 5701.48,
  positionX: "<value>",
  positionY: "<value>",
  width: "<value>",
  height: "<value>",
  customText: "<value>",
  inserted: true,
  fieldMeta: {
    fontSize: 12,
    type: "number",
  },
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `envelopeId`                                                                                                               | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `envelopeItemId`                                                                                                           | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `type`                                                                                                                     | [operations.FieldCreateDocumentFieldTypeResponseEnum](../../models/operations/fieldcreatedocumentfieldtyperesponseenum.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `id`                                                                                                                       | *number*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `secondaryId`                                                                                                              | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `recipientId`                                                                                                              | *number*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `page`                                                                                                                     | *number*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `positionX`                                                                                                                | *any*                                                                                                                      | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `positionY`                                                                                                                | *any*                                                                                                                      | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `width`                                                                                                                    | *any*                                                                                                                      | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `height`                                                                                                                   | *any*                                                                                                                      | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `customText`                                                                                                               | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `inserted`                                                                                                                 | *boolean*                                                                                                                  | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `fieldMeta`                                                                                                                | *operations.FieldCreateDocumentFieldFieldMetaUnion*                                                                        | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `documentId`                                                                                                               | *number*                                                                                                                   | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `templateId`                                                                                                               | *number*                                                                                                                   | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |