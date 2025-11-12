# EnvelopeFieldUpdateManyResponse

Successful response

## Example Usage

```typescript
import { EnvelopeFieldUpdateManyResponse } from "@documenso/sdk-typescript/models/operations";

let value: EnvelopeFieldUpdateManyResponse = {
  data: [
    {
      envelopeId: "<id>",
      envelopeItemId: "<id>",
      type: "NAME",
      id: 1946.89,
      secondaryId: "<id>",
      recipientId: 7070.4,
      page: 2159.27,
      positionX: "<value>",
      positionY: "<value>",
      width: "<value>",
      height: "<value>",
      customText: "<value>",
      inserted: false,
      fieldMeta: {
        fontSize: 12,
        type: "number",
      },
    },
  ],
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `data`                                                                                                             | [operations.EnvelopeFieldUpdateManyDataResponse](../../models/operations/envelopefieldupdatemanydataresponse.md)[] | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |