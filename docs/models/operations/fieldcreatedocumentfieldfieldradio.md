# FieldCreateDocumentFieldFieldRadio

## Example Usage

```typescript
import { FieldCreateDocumentFieldFieldRadio } from "@documenso/sdk-typescript/models/operations";

let value: FieldCreateDocumentFieldFieldRadio = {
  type: "RADIO",
  recipientId: 5282.34,
  pageNumber: 3494.4,
  pageX: 7814.8,
  pageY: 7510.22,
  width: 9272.12,
  height: 289.52,
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                           | [operations.FieldCreateDocumentFieldFieldTypeRadio](../../models/operations/fieldcreatedocumentfieldfieldtyperadio.md)           | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `fieldMeta`                                                                                                                      | [operations.FieldCreateDocumentFieldFieldFieldMetaRadio](../../models/operations/fieldcreatedocumentfieldfieldfieldmetaradio.md) | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |
| `recipientId`                                                                                                                    | *number*                                                                                                                         | :heavy_check_mark:                                                                                                               | The ID of the recipient to create the field for.                                                                                 |
| `pageNumber`                                                                                                                     | *number*                                                                                                                         | :heavy_check_mark:                                                                                                               | The page number the field will be on.                                                                                            |
| `pageX`                                                                                                                          | *number*                                                                                                                         | :heavy_check_mark:                                                                                                               | The X coordinate of where the field will be placed.                                                                              |
| `pageY`                                                                                                                          | *number*                                                                                                                         | :heavy_check_mark:                                                                                                               | The Y coordinate of where the field will be placed.                                                                              |
| `width`                                                                                                                          | *number*                                                                                                                         | :heavy_check_mark:                                                                                                               | The width of the field.                                                                                                          |
| `height`                                                                                                                         | *number*                                                                                                                         | :heavy_check_mark:                                                                                                               | The height of the field.                                                                                                         |