# EnvelopeDistributeResponse

Successful response

## Example Usage

```typescript
import { EnvelopeDistributeResponse } from "@documenso/sdk-typescript/models/operations";

let value: EnvelopeDistributeResponse = {
  success: true,
  id: "<id>",
  recipients: [
    {
      id: 147.07,
      name: "<value>",
      email: "Edward_Ferry@gmail.com",
      token: "<value>",
      role: "ASSISTANT",
      signingOrder: 55.46,
      signingUrl: "https://simplistic-cow.net",
    },
  ],
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `success`                                                                                          | *boolean*                                                                                          | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `id`                                                                                               | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `recipients`                                                                                       | [operations.EnvelopeDistributeRecipient](../../models/operations/envelopedistributerecipient.md)[] | :heavy_check_mark:                                                                                 | N/A                                                                                                |