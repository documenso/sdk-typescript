# Three

## Example Usage

```typescript
import { Three } from "@documenso/sdk-typescript/models/operations";

let value: Three = {
  type: "INITIALS",
  pageNumber: 2453.67,
  pageX: 4205.39,
  pageY: 5573.69,
  width: 8605.52,
  height: 7270.44,
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