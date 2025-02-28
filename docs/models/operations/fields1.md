# Fields1

## Example Usage

```typescript
import { Fields1 } from "@documenso/sdk-typescript/models/operations";

let value: Fields1 = {
  type: "SIGNATURE",
  recipientId: 8200.23,
  pageNumber: 2981.87,
  pageX: 1509.35,
  pageY: 3302.67,
  width: 8138.8,
  height: 1403.84,
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                           | [operations.FieldCreateDocumentFieldsFieldsType](../../models/operations/fieldcreatedocumentfieldsfieldstype.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `recipientId`                                                                                                    | *number*                                                                                                         | :heavy_check_mark:                                                                                               | The ID of the recipient to create the field for.                                                                 |
| `pageNumber`                                                                                                     | *number*                                                                                                         | :heavy_check_mark:                                                                                               | The page number the field will be on.                                                                            |
| `pageX`                                                                                                          | *number*                                                                                                         | :heavy_check_mark:                                                                                               | The X coordinate of where the field will be placed.                                                              |
| `pageY`                                                                                                          | *number*                                                                                                         | :heavy_check_mark:                                                                                               | The Y coordinate of where the field will be placed.                                                              |
| `width`                                                                                                          | *number*                                                                                                         | :heavy_check_mark:                                                                                               | The width of the field.                                                                                          |
| `height`                                                                                                         | *number*                                                                                                         | :heavy_check_mark:                                                                                               | The height of the field.                                                                                         |