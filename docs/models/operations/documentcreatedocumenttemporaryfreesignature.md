# DocumentCreateDocumentTemporaryFreeSignature

## Example Usage

```typescript
import { DocumentCreateDocumentTemporaryFreeSignature } from "@documenso/sdk-typescript/models/operations";

let value: DocumentCreateDocumentTemporaryFreeSignature = {
  type: "FREE_SIGNATURE",
  pageNumber: 568.48,
  pageX: 6969.97,
  pageY: 7786.96,
  width: 7774.08,
  height: 2594.22,
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `type`                                                                                     | [operations.TypeAccountFreeSignature](../../models/operations/typeaccountfreesignature.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `pageNumber`                                                                               | *number*                                                                                   | :heavy_check_mark:                                                                         | The page number the field will be on.                                                      |
| `pageX`                                                                                    | *number*                                                                                   | :heavy_check_mark:                                                                         | The X coordinate of where the field will be placed.                                        |
| `pageY`                                                                                    | *number*                                                                                   | :heavy_check_mark:                                                                         | The Y coordinate of where the field will be placed.                                        |
| `width`                                                                                    | *number*                                                                                   | :heavy_check_mark:                                                                         | The width of the field.                                                                    |
| `height`                                                                                   | *number*                                                                                   | :heavy_check_mark:                                                                         | The height of the field.                                                                   |