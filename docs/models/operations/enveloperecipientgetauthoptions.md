# EnvelopeRecipientGetAuthOptions

## Example Usage

```typescript
import { EnvelopeRecipientGetAuthOptions } from "@documenso/sdk-typescript/models/operations";

let value: EnvelopeRecipientGetAuthOptions = {
  accessAuth: [],
  actionAuth: [
    "TWO_FACTOR_AUTH",
  ],
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `accessAuth`                                                                                             | [operations.EnvelopeRecipientGetAccessAuth](../../models/operations/enveloperecipientgetaccessauth.md)[] | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `actionAuth`                                                                                             | [operations.EnvelopeRecipientGetActionAuth](../../models/operations/enveloperecipientgetactionauth.md)[] | :heavy_check_mark:                                                                                       | N/A                                                                                                      |