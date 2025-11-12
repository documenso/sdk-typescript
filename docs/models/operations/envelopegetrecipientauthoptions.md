# EnvelopeGetRecipientAuthOptions

## Example Usage

```typescript
import { EnvelopeGetRecipientAuthOptions } from "@documenso/sdk-typescript/models/operations";

let value: EnvelopeGetRecipientAuthOptions = {
  accessAuth: [],
  actionAuth: [
    "PASSKEY",
  ],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `accessAuth`                                                                           | [operations.EnvelopeGetAccessAuth](../../models/operations/envelopegetaccessauth.md)[] | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `actionAuth`                                                                           | [operations.EnvelopeGetActionAuth](../../models/operations/envelopegetactionauth.md)[] | :heavy_check_mark:                                                                     | N/A                                                                                    |