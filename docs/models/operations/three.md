# Three

## Example Usage

```typescript
import { Three } from "@documenso/sdk-typescript/models/operations";

let value: Three = {
  type: "INITIALS",
  pageNumber: 6956.26,
  pageX: 2835.19,
  pageY: 3799.27,
  width: 1811.51,
  height: 7885.46,
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                       | [operations.DocumentCreateDocumentTemporaryFieldsType](../../models/operations/documentcreatedocumenttemporaryfieldstype.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `fieldMeta`                                                                                                                  | [operations.FieldMeta](../../models/operations/fieldmeta.md)                                                                 | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |
| `pageNumber`                                                                                                                 | *number*                                                                                                                     | :heavy_check_mark:                                                                                                           | The page number the field will be on.                                                                                        |
| `pageX`                                                                                                                      | *number*                                                                                                                     | :heavy_check_mark:                                                                                                           | The X coordinate of where the field will be placed.                                                                          |
| `pageY`                                                                                                                      | *number*                                                                                                                     | :heavy_check_mark:                                                                                                           | The Y coordinate of where the field will be placed.                                                                          |
| `width`                                                                                                                      | *number*                                                                                                                     | :heavy_check_mark:                                                                                                           | The width of the field.                                                                                                      |
| `height`                                                                                                                     | *number*                                                                                                                     | :heavy_check_mark:                                                                                                           | The height of the field.                                                                                                     |