# EnvelopeRecipientCreateManyAuthOptions

## Example Usage

```typescript
import { EnvelopeRecipientCreateManyAuthOptions } from "@documenso/sdk-typescript/models/operations";

let value: EnvelopeRecipientCreateManyAuthOptions = {
  accessAuth: [
    "ACCOUNT",
  ],
  actionAuth: [],
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `accessAuth`                                                                                                                           | [operations.EnvelopeRecipientCreateManyAccessAuthResponse](../../models/operations/enveloperecipientcreatemanyaccessauthresponse.md)[] | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `actionAuth`                                                                                                                           | [operations.EnvelopeRecipientCreateManyActionAuthResponse](../../models/operations/enveloperecipientcreatemanyactionauthresponse.md)[] | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |