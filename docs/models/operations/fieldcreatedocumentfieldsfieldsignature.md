# FieldCreateDocumentFieldsFieldSignature

## Example Usage

```typescript
import { FieldCreateDocumentFieldsFieldSignature } from "@documenso/sdk-typescript/models/operations";

let value: FieldCreateDocumentFieldsFieldSignature = {
  type: "SIGNATURE",
  recipientId: 1920.43,
  pageNumber: 6534.2,
  pageX: 410.5,
  pageY: 8806.16,
  width: 319.43,
  height: 4271.02,
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                 | [operations.FieldCreateDocumentFieldsTypeSignature](../../models/operations/fieldcreatedocumentfieldstypesignature.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `recipientId`                                                                                                          | *number*                                                                                                               | :heavy_check_mark:                                                                                                     | The ID of the recipient to create the field for.                                                                       |
| `pageNumber`                                                                                                           | *number*                                                                                                               | :heavy_check_mark:                                                                                                     | The page number the field will be on.                                                                                  |
| `pageX`                                                                                                                | *number*                                                                                                               | :heavy_check_mark:                                                                                                     | The X coordinate of where the field will be placed.                                                                    |
| `pageY`                                                                                                                | *number*                                                                                                               | :heavy_check_mark:                                                                                                     | The Y coordinate of where the field will be placed.                                                                    |
| `width`                                                                                                                | *number*                                                                                                               | :heavy_check_mark:                                                                                                     | The width of the field.                                                                                                |
| `height`                                                                                                               | *number*                                                                                                               | :heavy_check_mark:                                                                                                     | The height of the field.                                                                                               |