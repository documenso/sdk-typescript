# FieldCreateTemplateFieldsFieldFreeSignature

## Example Usage

```typescript
import { FieldCreateTemplateFieldsFieldFreeSignature } from "@documenso/sdk-typescript/models/operations";

let value: FieldCreateTemplateFieldsFieldFreeSignature = {
  type: "FREE_SIGNATURE",
  recipientId: 4240.79,
  pageNumber: 8469.47,
  pageX: 1546.47,
  pageY: 6619.58,
  width: 4640.21,
  height: 3583.9,
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                         | [operations.FieldCreateTemplateFieldsTypeFreeSignature](../../models/operations/fieldcreatetemplatefieldstypefreesignature.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `recipientId`                                                                                                                  | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | The ID of the recipient to create the field for.                                                                               |
| `pageNumber`                                                                                                                   | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | The page number the field will be on.                                                                                          |
| `pageX`                                                                                                                        | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | The X coordinate of where the field will be placed.                                                                            |
| `pageY`                                                                                                                        | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | The Y coordinate of where the field will be placed.                                                                            |
| `width`                                                                                                                        | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | The width of the field.                                                                                                        |
| `height`                                                                                                                       | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | The height of the field.                                                                                                       |