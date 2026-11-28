# EnvelopeGetContent

## Example Usage

```typescript
import { EnvelopeGetContent } from "@documenso/sdk-typescript/models/operations";

let value: EnvelopeGetContent = {
  id: "<id>",
  envelopeId: "<id>",
  envelopeItemId: "<id>",
  contentMeta: {
    page: 44432,
    positionX: 8489.16,
    positionY: 3352.3,
    width: 6517.82,
    height: 6409.43,
    zIndex: 0,
    type: "shape",
    shape: "rectangle",
    rotation: 0,
    strokeWidth: 1,
    strokeColor: "#000000",
    strokeStyle: "solid",
    fillColor: null,
    fillOpacity: 1,
  },
  dataContentId: "<id>",
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `id`                                     | *string*                                 | :heavy_check_mark:                       | N/A                                      |
| `envelopeId`                             | *string*                                 | :heavy_check_mark:                       | N/A                                      |
| `envelopeItemId`                         | *string*                                 | :heavy_check_mark:                       | N/A                                      |
| `contentMeta`                            | *operations.EnvelopeGetContentMetaUnion* | :heavy_check_mark:                       | N/A                                      |
| `dataContentId`                          | *string*                                 | :heavy_check_mark:                       | N/A                                      |