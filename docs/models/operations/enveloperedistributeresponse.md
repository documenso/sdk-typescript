# EnvelopeRedistributeResponse

Successful response

## Example Usage

```typescript
import { EnvelopeRedistributeResponse } from "@documenso/sdk-typescript/models/operations";

let value: EnvelopeRedistributeResponse = {
  success: true,
  id: "<id>",
  recipients: [],
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `success`                                                                                              | *boolean*                                                                                              | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `id`                                                                                                   | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `recipients`                                                                                           | [operations.EnvelopeRedistributeRecipient](../../models/operations/enveloperedistributerecipient.md)[] | :heavy_check_mark:                                                                                     | N/A                                                                                                    |