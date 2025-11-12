# EnvelopeCreateFieldSignature

## Example Usage

```typescript
import { EnvelopeCreateFieldSignature } from "@documenso/sdk-typescript/models/operations";

let value: EnvelopeCreateFieldSignature = {
  type: "SIGNATURE",
  page: 5853.85,
  positionX: 3223.98,
  positionY: 2373.32,
  width: 3847.35,
  height: 433.48,
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                     | [operations.EnvelopeCreateTypeSignature1](../../models/operations/envelopecreatetypesignature1.md)         | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `fieldMeta`                                                                                                | [operations.EnvelopeCreateFieldMetaSignature](../../models/operations/envelopecreatefieldmetasignature.md) | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `identifier`                                                                                               | *operations.EnvelopeCreateIdentifier1*                                                                     | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `page`                                                                                                     | *number*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `positionX`                                                                                                | *number*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `positionY`                                                                                                | *number*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `width`                                                                                                    | *number*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `height`                                                                                                   | *number*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |