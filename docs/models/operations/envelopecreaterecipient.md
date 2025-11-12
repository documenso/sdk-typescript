# EnvelopeCreateRecipient

## Example Usage

```typescript
import { EnvelopeCreateRecipient } from "@documenso/sdk-typescript/models/operations";

let value: EnvelopeCreateRecipient = {
  email: "Emile.Davis79@gmail.com",
  name: "<value>",
  role: "APPROVER",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `email`                                                                                      | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `name`                                                                                       | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `role`                                                                                       | [operations.EnvelopeCreateRole](../../models/operations/envelopecreaterole.md)               | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `signingOrder`                                                                               | *number*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `accessAuth`                                                                                 | [operations.EnvelopeCreateAccessAuth](../../models/operations/envelopecreateaccessauth.md)[] | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `actionAuth`                                                                                 | [operations.EnvelopeCreateActionAuth](../../models/operations/envelopecreateactionauth.md)[] | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `fields`                                                                                     | *operations.EnvelopeCreateFieldUnion*[]                                                      | :heavy_minus_sign:                                                                           | N/A                                                                                          |