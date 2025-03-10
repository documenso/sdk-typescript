# FieldCreateDocumentFieldFieldEmail

## Example Usage

```typescript
import { FieldCreateDocumentFieldFieldEmail } from "@documenso/sdk-typescript/models/operations";

let value: FieldCreateDocumentFieldFieldEmail = {
  type: "EMAIL",
  recipientId: 813.69,
  pageNumber: 8818.97,
  pageX: 7196.2,
  pageY: 9663.9,
  width: 5076.36,
  height: 3004.03,
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                           | [operations.FieldCreateDocumentFieldFieldTypeEmail](../../models/operations/fieldcreatedocumentfieldfieldtypeemail.md)           | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `fieldMeta`                                                                                                                      | [operations.FieldCreateDocumentFieldFieldFieldMetaEmail](../../models/operations/fieldcreatedocumentfieldfieldfieldmetaemail.md) | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |
| `recipientId`                                                                                                                    | *number*                                                                                                                         | :heavy_check_mark:                                                                                                               | The ID of the recipient to create the field for.                                                                                 |
| `pageNumber`                                                                                                                     | *number*                                                                                                                         | :heavy_check_mark:                                                                                                               | The page number the field will be on.                                                                                            |
| `pageX`                                                                                                                          | *number*                                                                                                                         | :heavy_check_mark:                                                                                                               | The X coordinate of where the field will be placed.                                                                              |
| `pageY`                                                                                                                          | *number*                                                                                                                         | :heavy_check_mark:                                                                                                               | The Y coordinate of where the field will be placed.                                                                              |
| `width`                                                                                                                          | *number*                                                                                                                         | :heavy_check_mark:                                                                                                               | The width of the field.                                                                                                          |
| `height`                                                                                                                         | *number*                                                                                                                         | :heavy_check_mark:                                                                                                               | The height of the field.                                                                                                         |