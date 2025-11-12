# EnvelopeItemUpdateManyResponse

Successful response

## Example Usage

```typescript
import { EnvelopeItemUpdateManyResponse } from "@documenso/sdk-typescript/models/operations";

let value: EnvelopeItemUpdateManyResponse = {
  data: [
    {
      id: "<id>",
      order: 4811.83,
      title: "<value>",
      envelopeId: "<id>",
    },
  ],
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                           | [operations.EnvelopeItemUpdateManyDataResponse](../../models/operations/envelopeitemupdatemanydataresponse.md)[] | :heavy_check_mark:                                                                                               | N/A                                                                                                              |