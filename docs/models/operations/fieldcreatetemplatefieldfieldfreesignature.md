# FieldCreateTemplateFieldFieldFreeSignature

## Example Usage

```typescript
import { FieldCreateTemplateFieldFieldFreeSignature } from "@documenso/sdk-typescript/models/operations";

let value: FieldCreateTemplateFieldFieldFreeSignature = {
  type: "FREE_SIGNATURE",
  recipientId: 1899.72,
  pageNumber: 874.17,
  pageX: 8624.45,
  pageY: 8718.74,
  width: 25.91,
  height: 6929.78,
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                       | [operations.FieldCreateTemplateFieldTypeFreeSignature](../../models/operations/fieldcreatetemplatefieldtypefreesignature.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `recipientId`                                                                                                                | *number*                                                                                                                     | :heavy_check_mark:                                                                                                           | The ID of the recipient to create the field for.                                                                             |
| `pageNumber`                                                                                                                 | *number*                                                                                                                     | :heavy_check_mark:                                                                                                           | The page number the field will be on.                                                                                        |
| `pageX`                                                                                                                      | *number*                                                                                                                     | :heavy_check_mark:                                                                                                           | The X coordinate of where the field will be placed.                                                                          |
| `pageY`                                                                                                                      | *number*                                                                                                                     | :heavy_check_mark:                                                                                                           | The Y coordinate of where the field will be placed.                                                                          |
| `width`                                                                                                                      | *number*                                                                                                                     | :heavy_check_mark:                                                                                                           | The width of the field.                                                                                                      |
| `height`                                                                                                                     | *number*                                                                                                                     | :heavy_check_mark:                                                                                                           | The height of the field.                                                                                                     |