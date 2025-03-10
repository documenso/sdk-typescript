# FieldCreateDocumentFieldFieldName

## Example Usage

```typescript
import { FieldCreateDocumentFieldFieldName } from "@documenso/sdk-typescript/models/operations";

let value: FieldCreateDocumentFieldFieldName = {
  type: "NAME",
  recipientId: 9308.19,
  pageNumber: 5207.61,
  pageX: 2672.07,
  pageY: 8773.99,
  width: 3719.19,
  height: 13.83,
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                         | [operations.FieldCreateDocumentFieldFieldTypeName](../../models/operations/fieldcreatedocumentfieldfieldtypename.md)           | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `fieldMeta`                                                                                                                    | [operations.FieldCreateDocumentFieldFieldFieldMetaName](../../models/operations/fieldcreatedocumentfieldfieldfieldmetaname.md) | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `recipientId`                                                                                                                  | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | The ID of the recipient to create the field for.                                                                               |
| `pageNumber`                                                                                                                   | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | The page number the field will be on.                                                                                          |
| `pageX`                                                                                                                        | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | The X coordinate of where the field will be placed.                                                                            |
| `pageY`                                                                                                                        | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | The Y coordinate of where the field will be placed.                                                                            |
| `width`                                                                                                                        | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | The width of the field.                                                                                                        |
| `height`                                                                                                                       | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | The height of the field.                                                                                                       |