# FieldUpdateDocumentFieldFieldSignature

## Example Usage

```typescript
import { FieldUpdateDocumentFieldFieldSignature } from "@documenso/sdk-typescript/models/operations";

let value: FieldUpdateDocumentFieldFieldSignature = {
  type: "SIGNATURE",
  id: 4647.46,
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                               | [operations.FieldUpdateDocumentFieldTypeSignature](../../models/operations/fieldupdatedocumentfieldtypesignature.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `id`                                                                                                                 | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | The ID of the field to update.                                                                                       |
| `pageNumber`                                                                                                         | *number*                                                                                                             | :heavy_minus_sign:                                                                                                   | The page number the field will be on.                                                                                |
| `pageX`                                                                                                              | *number*                                                                                                             | :heavy_minus_sign:                                                                                                   | The X coordinate of where the field will be placed.                                                                  |
| `pageY`                                                                                                              | *number*                                                                                                             | :heavy_minus_sign:                                                                                                   | The Y coordinate of where the field will be placed.                                                                  |
| `width`                                                                                                              | *number*                                                                                                             | :heavy_minus_sign:                                                                                                   | The width of the field.                                                                                              |
| `height`                                                                                                             | *number*                                                                                                             | :heavy_minus_sign:                                                                                                   | The height of the field.                                                                                             |