# RecipientsAccount

## Example Usage

```typescript
import { RecipientsAccount } from "@documenso/sdk-typescript/models/operations";

let value: RecipientsAccount = {
  email: "Agnes9@yahoo.com",
  name: "<value>",
  role: "ASSISTANT",
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `email`                                                                       | *string*                                                                      | :heavy_check_mark:                                                            | N/A                                                                           |
| `name`                                                                        | *string*                                                                      | :heavy_check_mark:                                                            | N/A                                                                           |
| `role`                                                                        | [operations.RoleAccount](../../models/operations/roleaccount.md)              | :heavy_check_mark:                                                            | N/A                                                                           |
| `signingOrder`                                                                | *number*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `accessAuth`                                                                  | [operations.AccessAuthAccount](../../models/operations/accessauthaccount.md)  | :heavy_minus_sign:                                                            | The type of authentication required for the recipient to access the document. |
| `actionAuth`                                                                  | [operations.ActionAuthAccount](../../models/operations/actionauthaccount.md)  | :heavy_minus_sign:                                                            | The type of authentication required for the recipient to sign the document.   |
| `fields`                                                                      | *operations.FieldsAccount*[]                                                  | :heavy_minus_sign:                                                            | N/A                                                                           |