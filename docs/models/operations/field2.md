# Field2

## Example Usage

```typescript
import { Field2 } from "@documenso/sdk-typescript/models/operations";

let value: Field2 = {
  type: "FREE_SIGNATURE",
  recipientId: 6817.4,
  pageNumber: 2773.4,
  pageX: 5243.8,
  pageY: 1173.8,
  width: 1598.45,
  height: 468.06,
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