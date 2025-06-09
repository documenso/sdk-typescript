# FieldCreateDocumentFieldFieldDate

## Example Usage

```typescript
import { FieldCreateDocumentFieldFieldDate } from "@documenso/sdk-typescript/models/operations";

let value: FieldCreateDocumentFieldFieldDate = {
  type: "DATE",
  recipientId: 8568.35,
  pageNumber: 8435.68,
  pageX: 7779.68,
  pageY: 3859.47,
  width: 1359.89,
  height: 1531.51,
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                             | [operations.FieldCreateDocumentFieldTypeDateRequest1](../../models/operations/fieldcreatedocumentfieldtypedaterequest1.md)         | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `fieldMeta`                                                                                                                        | [operations.FieldCreateDocumentFieldFieldMetaDateRequest](../../models/operations/fieldcreatedocumentfieldfieldmetadaterequest.md) | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |
| `recipientId`                                                                                                                      | *number*                                                                                                                           | :heavy_check_mark:                                                                                                                 | The ID of the recipient to create the field for.                                                                                   |
| `pageNumber`                                                                                                                       | *number*                                                                                                                           | :heavy_check_mark:                                                                                                                 | The page number the field will be on.                                                                                              |
| `pageX`                                                                                                                            | *number*                                                                                                                           | :heavy_check_mark:                                                                                                                 | The X coordinate of where the field will be placed.                                                                                |
| `pageY`                                                                                                                            | *number*                                                                                                                           | :heavy_check_mark:                                                                                                                 | The Y coordinate of where the field will be placed.                                                                                |
| `width`                                                                                                                            | *number*                                                                                                                           | :heavy_check_mark:                                                                                                                 | The width of the field.                                                                                                            |
| `height`                                                                                                                           | *number*                                                                                                                           | :heavy_check_mark:                                                                                                                 | The height of the field.                                                                                                           |