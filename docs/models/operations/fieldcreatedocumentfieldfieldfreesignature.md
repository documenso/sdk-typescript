# FieldCreateDocumentFieldFieldFreeSignature

## Example Usage

```typescript
import { FieldCreateDocumentFieldFieldFreeSignature } from "@documenso/sdk-typescript/models/operations";

let value: FieldCreateDocumentFieldFieldFreeSignature = {
  type: "FREE_SIGNATURE",
  recipientId: 372.01,
  pageNumber: 7291.01,
  pageX: 9638.35,
  pageY: 8729.09,
  width: 920.36,
  height: 2246.88,
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                       | [operations.FieldCreateDocumentFieldTypeFreeSignature](../../models/operations/fieldcreatedocumentfieldtypefreesignature.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `recipientId`                                                                                                                | *number*                                                                                                                     | :heavy_check_mark:                                                                                                           | The ID of the recipient to create the field for.                                                                             |
| `pageNumber`                                                                                                                 | *number*                                                                                                                     | :heavy_check_mark:                                                                                                           | The page number the field will be on.                                                                                        |
| `pageX`                                                                                                                      | *number*                                                                                                                     | :heavy_check_mark:                                                                                                           | The X coordinate of where the field will be placed.                                                                          |
| `pageY`                                                                                                                      | *number*                                                                                                                     | :heavy_check_mark:                                                                                                           | The Y coordinate of where the field will be placed.                                                                          |
| `width`                                                                                                                      | *number*                                                                                                                     | :heavy_check_mark:                                                                                                           | The width of the field.                                                                                                      |
| `height`                                                                                                                     | *number*                                                                                                                     | :heavy_check_mark:                                                                                                           | The height of the field.                                                                                                     |