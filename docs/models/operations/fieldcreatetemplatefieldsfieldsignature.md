# FieldCreateTemplateFieldsFieldSignature

## Example Usage

```typescript
import { FieldCreateTemplateFieldsFieldSignature } from "@documenso/sdk-typescript/models/operations";

let value: FieldCreateTemplateFieldsFieldSignature = {
  type: "SIGNATURE",
  recipientId: 9297.61,
  pageNumber: 2866.31,
  pageX: 3420.03,
  pageY: 5508.2,
  width: 2533.94,
  height: 490.18,
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                 | [operations.FieldCreateTemplateFieldsTypeSignature](../../models/operations/fieldcreatetemplatefieldstypesignature.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `recipientId`                                                                                                          | *number*                                                                                                               | :heavy_check_mark:                                                                                                     | The ID of the recipient to create the field for.                                                                       |
| `pageNumber`                                                                                                           | *number*                                                                                                               | :heavy_check_mark:                                                                                                     | The page number the field will be on.                                                                                  |
| `pageX`                                                                                                                | *number*                                                                                                               | :heavy_check_mark:                                                                                                     | The X coordinate of where the field will be placed.                                                                    |
| `pageY`                                                                                                                | *number*                                                                                                               | :heavy_check_mark:                                                                                                     | The Y coordinate of where the field will be placed.                                                                    |
| `width`                                                                                                                | *number*                                                                                                               | :heavy_check_mark:                                                                                                     | The width of the field.                                                                                                |
| `height`                                                                                                               | *number*                                                                                                               | :heavy_check_mark:                                                                                                     | The height of the field.                                                                                               |