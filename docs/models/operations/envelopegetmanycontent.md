# EnvelopeGetManyContent

## Example Usage

```typescript
import { EnvelopeGetManyContent } from "@documenso/sdk-typescript/models/operations";

let value: EnvelopeGetManyContent = {
  id: "<id>",
  envelopeId: "<id>",
  envelopeItemId: "<id>",
  contentMeta: {
    page: 854171,
    positionX: 7773,
    positionY: 2410.09,
    width: 7181.65,
    height: 8402.2,
    zIndex: 0,
    type: "image",
    rotation: 0,
  },
  dataContentId: "<id>",
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `id`                                         | *string*                                     | :heavy_check_mark:                           | N/A                                          |
| `envelopeId`                                 | *string*                                     | :heavy_check_mark:                           | N/A                                          |
| `envelopeItemId`                             | *string*                                     | :heavy_check_mark:                           | N/A                                          |
| `contentMeta`                                | *operations.EnvelopeGetManyContentMetaUnion* | :heavy_check_mark:                           | N/A                                          |
| `dataContentId`                              | *string*                                     | :heavy_check_mark:                           | N/A                                          |