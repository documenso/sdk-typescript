# FieldCreateTemplateFieldsSignature

## Example Usage

```typescript
import { FieldCreateTemplateFieldsSignature } from "@documenso/sdk-typescript/models/operations";

let value: FieldCreateTemplateFieldsSignature = {
  type: "SIGNATURE",
  recipientId: 7080.75,
  pageNumber: 9219.16,
  pageX: 2172.75,
  pageY: 1149.24,
  width: 7240.73,
  height: 2033.96,
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