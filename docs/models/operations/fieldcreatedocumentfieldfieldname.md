# FieldCreateDocumentFieldFieldName

## Example Usage

```typescript
import { FieldCreateDocumentFieldFieldName } from "@documenso/sdk-typescript/models/operations";

let value: FieldCreateDocumentFieldFieldName = {
  type: "NAME",
  recipientId: 6983.1,
  pageNumber: 3155.94,
  pageX: 3652.9,
  pageY: 984.76,
  width: 9760.5,
  height: 3960.1,
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                             | [operations.FieldCreateDocumentFieldTypeNameRequest1](../../models/operations/fieldcreatedocumentfieldtypenamerequest1.md)         | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `fieldMeta`                                                                                                                        | [operations.FieldCreateDocumentFieldFieldMetaNameRequest](../../models/operations/fieldcreatedocumentfieldfieldmetanamerequest.md) | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |
| `recipientId`                                                                                                                      | *number*                                                                                                                           | :heavy_check_mark:                                                                                                                 | The ID of the recipient to create the field for.                                                                                   |
| `pageNumber`                                                                                                                       | *number*                                                                                                                           | :heavy_check_mark:                                                                                                                 | The page number the field will be on.                                                                                              |
| `pageX`                                                                                                                            | *number*                                                                                                                           | :heavy_check_mark:                                                                                                                 | The X coordinate of where the field will be placed.                                                                                |
| `pageY`                                                                                                                            | *number*                                                                                                                           | :heavy_check_mark:                                                                                                                 | The Y coordinate of where the field will be placed.                                                                                |
| `width`                                                                                                                            | *number*                                                                                                                           | :heavy_check_mark:                                                                                                                 | The width of the field.                                                                                                            |
| `height`                                                                                                                           | *number*                                                                                                                           | :heavy_check_mark:                                                                                                                 | The height of the field.                                                                                                           |