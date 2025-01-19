# Recipients

## Example Usage

```typescript
import { Recipients } from "@documenso/sdk-typescript/models/operations";

let value: Recipients = {
  email: "Raven.Murphy@hotmail.com",
  name: "<value>",
  role: "SIGNER",
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `email`                                                                       | *string*                                                                      | :heavy_check_mark:                                                            | N/A                                                                           |
| `name`                                                                        | *string*                                                                      | :heavy_check_mark:                                                            | N/A                                                                           |
| `role`                                                                        | [operations.Role](../../models/operations/role.md)                            | :heavy_check_mark:                                                            | N/A                                                                           |
| `signingOrder`                                                                | *number*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `accessAuth`                                                                  | [operations.AccessAuth](../../models/operations/accessauth.md)                | :heavy_minus_sign:                                                            | The type of authentication required for the recipient to access the document. |
| `actionAuth`                                                                  | [operations.ActionAuth](../../models/operations/actionauth.md)                | :heavy_minus_sign:                                                            | The type of authentication required for the recipient to sign the document.   |
| `fields`                                                                      | *operations.Fields*[]                                                         | :heavy_minus_sign:                                                            | N/A                                                                           |