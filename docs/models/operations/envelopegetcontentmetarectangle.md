# EnvelopeGetContentMetaRectangle

## Example Usage

```typescript
import { EnvelopeGetContentMetaRectangle } from "@documenso/sdk-typescript/models/operations";

let value: EnvelopeGetContentMetaRectangle = {
  page: 586408,
  positionX: 6019.58,
  positionY: 3416.91,
  width: 2927.2,
  height: 8400.39,
  type: "shape",
  shape: "rectangle",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `page`                                                                                   | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `positionX`                                                                              | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `positionY`                                                                              | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `width`                                                                                  | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `height`                                                                                 | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `zIndex`                                                                                 | *number*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `type`                                                                                   | *"shape"*                                                                                | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `shape`                                                                                  | [operations.EnvelopeGetShape](../../models/operations/envelopegetshape.md)               | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `rotation`                                                                               | *number*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `strokeWidth`                                                                            | *number*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `strokeColor`                                                                            | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `strokeStyle`                                                                            | [operations.EnvelopeGetStrokeStyle2](../../models/operations/envelopegetstrokestyle2.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `fillColor`                                                                              | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `fillOpacity`                                                                            | *number*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |