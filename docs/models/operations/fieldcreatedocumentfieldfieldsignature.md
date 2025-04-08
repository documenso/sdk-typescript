# FieldCreateDocumentFieldFieldSignature

## Example Usage

```typescript
import { FieldCreateDocumentFieldFieldSignature } from "@documenso/sdk-typescript/models/operations";

let value: FieldCreateDocumentFieldFieldSignature = {
  type: "SIGNATURE",
  recipientId: 3693.8,
  pageNumber: 6646.07,
  pageX: 4431.18,
  pageY: 1762.32,
  width: 7571.09,
  height: 1974.32,
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                               | [operations.FieldCreateDocumentFieldTypeSignature](../../models/operations/fieldcreatedocumentfieldtypesignature.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `recipientId`                                                                                                        | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | The ID of the recipient to create the field for.                                                                     |
| `pageNumber`                                                                                                         | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | The page number the field will be on.                                                                                |
| `pageX`                                                                                                              | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | The X coordinate of where the field will be placed.                                                                  |
| `pageY`                                                                                                              | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | The Y coordinate of where the field will be placed.                                                                  |
| `width`                                                                                                              | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | The width of the field.                                                                                              |
| `height`                                                                                                             | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | The height of the field.                                                                                             |