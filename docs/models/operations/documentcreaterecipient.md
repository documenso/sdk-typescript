# DocumentCreateRecipient

## Example Usage

```typescript
import { DocumentCreateRecipient } from "@documenso/sdk-typescript/models/operations";

let value: DocumentCreateRecipient = {
  email: "Einar.Kemmer75@hotmail.com",
  name: "<value>",
  role: "ASSISTANT",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `email`                                                                                      | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `name`                                                                                       | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `role`                                                                                       | [operations.DocumentCreateRole](../../models/operations/documentcreaterole.md)               | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `signingOrder`                                                                               | *number*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `accessAuth`                                                                                 | [operations.DocumentCreateAccessAuth](../../models/operations/documentcreateaccessauth.md)[] | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `actionAuth`                                                                                 | [operations.DocumentCreateActionAuth](../../models/operations/documentcreateactionauth.md)[] | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `fields`                                                                                     | *operations.DocumentCreateFieldUnion*[]                                                      | :heavy_minus_sign:                                                                           | N/A                                                                                          |