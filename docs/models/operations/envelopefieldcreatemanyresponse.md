# EnvelopeFieldCreateManyResponse

Successful response

## Example Usage

```typescript
import { EnvelopeFieldCreateManyResponse } from "@documenso/sdk-typescript/models/operations";

let value: EnvelopeFieldCreateManyResponse = {
  data: [
    {
      envelopeId: "<id>",
      envelopeItemId: "<id>",
      type: "NUMBER",
      id: 8813.07,
      secondaryId: "<id>",
      recipientId: 8290.21,
      page: 8197.31,
      positionX: "<value>",
      positionY: "<value>",
      width: "<value>",
      height: "<value>",
      customText: "<value>",
      inserted: true,
      fieldMeta: {
        fontSize: 12,
        type: "dropdown",
      },
    },
  ],
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `data`                                                                                                             | [operations.EnvelopeFieldCreateManyDataResponse](../../models/operations/envelopefieldcreatemanydataresponse.md)[] | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |