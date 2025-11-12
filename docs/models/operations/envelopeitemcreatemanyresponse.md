# EnvelopeItemCreateManyResponse

Successful response

## Example Usage

```typescript
import { EnvelopeItemCreateManyResponse } from "@documenso/sdk-typescript/models/operations";

let value: EnvelopeItemCreateManyResponse = {
  data: [
    {
      id: "<id>",
      title: "<value>",
      envelopeId: "<id>",
      order: 4242.55,
    },
  ],
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `data`                                                                                           | [operations.EnvelopeItemCreateManyData](../../models/operations/envelopeitemcreatemanydata.md)[] | :heavy_check_mark:                                                                               | N/A                                                                                              |