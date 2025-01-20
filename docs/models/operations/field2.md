# Field2

## Example Usage

```typescript
import { Field2 } from "@documenso/sdk-typescript/models/operations";

let value: Field2 = {
  type: "FREE_SIGNATURE",
  recipientId: 8818.97,
  pageNumber: 7196.2,
  pageX: 9663.9,
  pageY: 5076.36,
  width: 3004.03,
  height: 5495.01,
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                       | [operations.FieldCreateDocumentFieldFieldType](../../models/operations/fieldcreatedocumentfieldfieldtype.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `recipientId`                                                                                                | *number*                                                                                                     | :heavy_check_mark:                                                                                           | The ID of the recipient to create the field for.                                                             |
| `pageNumber`                                                                                                 | *number*                                                                                                     | :heavy_check_mark:                                                                                           | The page number the field will be on.                                                                        |
| `pageX`                                                                                                      | *number*                                                                                                     | :heavy_check_mark:                                                                                           | The X coordinate of where the field will be placed.                                                          |
| `pageY`                                                                                                      | *number*                                                                                                     | :heavy_check_mark:                                                                                           | The Y coordinate of where the field will be placed.                                                          |
| `width`                                                                                                      | *number*                                                                                                     | :heavy_check_mark:                                                                                           | The width of the field.                                                                                      |
| `height`                                                                                                     | *number*                                                                                                     | :heavy_check_mark:                                                                                           | The height of the field.                                                                                     |