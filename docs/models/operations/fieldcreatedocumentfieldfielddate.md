# FieldCreateDocumentFieldFieldDate

## Example Usage

```typescript
import { FieldCreateDocumentFieldFieldDate } from "@documenso/sdk-typescript/models/operations";

let value: FieldCreateDocumentFieldFieldDate = {
  type: "DATE",
  recipientId: 1173.8,
  pageNumber: 1598.45,
  pageX: 468.06,
  pageY: 9707.32,
  width: 38.6,
  height: 1785.8,
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                         | [operations.FieldCreateDocumentFieldFieldTypeDate](../../models/operations/fieldcreatedocumentfieldfieldtypedate.md)           | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `fieldMeta`                                                                                                                    | [operations.FieldCreateDocumentFieldFieldFieldMetaDate](../../models/operations/fieldcreatedocumentfieldfieldfieldmetadate.md) | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `recipientId`                                                                                                                  | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | The ID of the recipient to create the field for.                                                                               |
| `pageNumber`                                                                                                                   | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | The page number the field will be on.                                                                                          |
| `pageX`                                                                                                                        | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | The X coordinate of where the field will be placed.                                                                            |
| `pageY`                                                                                                                        | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | The Y coordinate of where the field will be placed.                                                                            |
| `width`                                                                                                                        | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | The width of the field.                                                                                                        |
| `height`                                                                                                                       | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | The height of the field.                                                                                                       |