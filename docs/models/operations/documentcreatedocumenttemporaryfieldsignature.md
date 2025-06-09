# DocumentCreateDocumentTemporaryFieldSignature

## Example Usage

```typescript
import { DocumentCreateDocumentTemporaryFieldSignature } from "@documenso/sdk-typescript/models/operations";

let value: DocumentCreateDocumentTemporaryFieldSignature = {
  type: "SIGNATURE",
  pageNumber: 6732.65,
  pageX: 4796.73,
  pageY: 2446.92,
  width: 8120.2,
  height: 5268.19,
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                             | [operations.DocumentCreateDocumentTemporaryTypeSignature](../../models/operations/documentcreatedocumenttemporarytypesignature.md) | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `pageNumber`                                                                                                                       | *number*                                                                                                                           | :heavy_check_mark:                                                                                                                 | The page number the field will be on.                                                                                              |
| `pageX`                                                                                                                            | *number*                                                                                                                           | :heavy_check_mark:                                                                                                                 | The X coordinate of where the field will be placed.                                                                                |
| `pageY`                                                                                                                            | *number*                                                                                                                           | :heavy_check_mark:                                                                                                                 | The Y coordinate of where the field will be placed.                                                                                |
| `width`                                                                                                                            | *number*                                                                                                                           | :heavy_check_mark:                                                                                                                 | The width of the field.                                                                                                            |
| `height`                                                                                                                           | *number*                                                                                                                           | :heavy_check_mark:                                                                                                                 | The height of the field.                                                                                                           |