# EnvelopeFindRecipientAuthOptions

## Example Usage

```typescript
import { EnvelopeFindRecipientAuthOptions } from "@documenso/sdk-typescript/models/operations";

let value: EnvelopeFindRecipientAuthOptions = {
  accessAuth: [],
  actionAuth: [
    "TWO_FACTOR_AUTH",
  ],
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `accessAuth`                                                                             | [operations.EnvelopeFindAccessAuth](../../models/operations/envelopefindaccessauth.md)[] | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `actionAuth`                                                                             | [operations.EnvelopeFindActionAuth](../../models/operations/envelopefindactionauth.md)[] | :heavy_check_mark:                                                                       | N/A                                                                                      |