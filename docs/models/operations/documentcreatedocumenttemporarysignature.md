# DocumentCreateDocumentTemporarySignature

## Example Usage

```typescript
import { DocumentCreateDocumentTemporarySignature } from "@documenso/sdk-typescript/models/operations";

let value: DocumentCreateDocumentTemporarySignature = {
  type: "SIGNATURE",
  pageNumber: 3738.13,
  pageX: 5876,
  pageY: 2728.22,
  width: 3708.53,
  height: 1970.54,
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `type`                                                                             | [operations.TypeAccountSignature](../../models/operations/typeaccountsignature.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `pageNumber`                                                                       | *number*                                                                           | :heavy_check_mark:                                                                 | The page number the field will be on.                                              |
| `pageX`                                                                            | *number*                                                                           | :heavy_check_mark:                                                                 | The X coordinate of where the field will be placed.                                |
| `pageY`                                                                            | *number*                                                                           | :heavy_check_mark:                                                                 | The Y coordinate of where the field will be placed.                                |
| `width`                                                                            | *number*                                                                           | :heavy_check_mark:                                                                 | The width of the field.                                                            |
| `height`                                                                           | *number*                                                                           | :heavy_check_mark:                                                                 | The height of the field.                                                           |