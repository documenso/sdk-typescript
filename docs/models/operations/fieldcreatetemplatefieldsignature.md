# FieldCreateTemplateFieldSignature

## Example Usage

```typescript
import { FieldCreateTemplateFieldSignature } from "@documenso/sdk-typescript/models/operations";

let value: FieldCreateTemplateFieldSignature = {
  type: "SIGNATURE",
  recipientId: 7143,
  pageNumber: 4938.65,
  pageX: 5818.89,
  pageY: 1263.67,
  width: 8768.21,
  height: 7607.93,
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