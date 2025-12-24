# EnvelopeGetManyRecipientAuthOptions

## Example Usage

```typescript
import { EnvelopeGetManyRecipientAuthOptions } from "@documenso/sdk-typescript/models/operations";

let value: EnvelopeGetManyRecipientAuthOptions = {
  accessAuth: [
    "TWO_FACTOR_AUTH",
  ],
  actionAuth: [
    "PASSWORD",
  ],
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `accessAuth`                                                                                   | [operations.EnvelopeGetManyAccessAuth](../../models/operations/envelopegetmanyaccessauth.md)[] | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `actionAuth`                                                                                   | [operations.EnvelopeGetManyActionAuth](../../models/operations/envelopegetmanyactionauth.md)[] | :heavy_check_mark:                                                                             | N/A                                                                                            |