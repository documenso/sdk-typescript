# FieldCreateTemplateFieldFieldSignature

## Example Usage

```typescript
import { FieldCreateTemplateFieldFieldSignature } from "@documenso/sdk-typescript/models/operations";

let value: FieldCreateTemplateFieldFieldSignature = {
  type: "SIGNATURE",
  recipientId: 477.63,
  pageNumber: 6298.96,
  pageX: 163.32,
  pageY: 9334.82,
  width: 4871.86,
  height: 91.19,
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                               | [operations.FieldCreateTemplateFieldTypeSignature](../../models/operations/fieldcreatetemplatefieldtypesignature.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `recipientId`                                                                                                        | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | The ID of the recipient to create the field for.                                                                     |
| `pageNumber`                                                                                                         | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | The page number the field will be on.                                                                                |
| `pageX`                                                                                                              | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | The X coordinate of where the field will be placed.                                                                  |
| `pageY`                                                                                                              | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | The Y coordinate of where the field will be placed.                                                                  |
| `width`                                                                                                              | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | The width of the field.                                                                                              |
| `height`                                                                                                             | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | The height of the field.                                                                                             |