# DocumentCreateDocumentTemporaryFieldFreeSignature

## Example Usage

```typescript
import { DocumentCreateDocumentTemporaryFieldFreeSignature } from "@documenso/sdk-typescript/models/operations";

let value: DocumentCreateDocumentTemporaryFieldFreeSignature = {
  type: "FREE_SIGNATURE",
  pageNumber: 6889.03,
  pageX: 4117.27,
  pageY: 7297.07,
  width: 8391.06,
  height: 9587.75,
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                     | [operations.DocumentCreateDocumentTemporaryTypeFreeSignature](../../models/operations/documentcreatedocumenttemporarytypefreesignature.md) | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `pageNumber`                                                                                                                               | *number*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | The page number the field will be on.                                                                                                      |
| `pageX`                                                                                                                                    | *number*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | The X coordinate of where the field will be placed.                                                                                        |
| `pageY`                                                                                                                                    | *number*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | The Y coordinate of where the field will be placed.                                                                                        |
| `width`                                                                                                                                    | *number*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | The width of the field.                                                                                                                    |
| `height`                                                                                                                                   | *number*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | The height of the field.                                                                                                                   |