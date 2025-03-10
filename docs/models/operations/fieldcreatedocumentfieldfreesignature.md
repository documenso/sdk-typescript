# FieldCreateDocumentFieldFreeSignature

## Example Usage

```typescript
import { FieldCreateDocumentFieldFreeSignature } from "@documenso/sdk-typescript/models/operations";

let value: FieldCreateDocumentFieldFreeSignature = {
  type: "FREE_SIGNATURE",
  recipientId: 9450.27,
  pageNumber: 9918.91,
  pageX: 3767.41,
  pageY: 9661.48,
  width: 7918.8,
  height: 6756.89,
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