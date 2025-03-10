# DocumentCreateDocumentTemporaryDocumentMeta

## Example Usage

```typescript
import { DocumentCreateDocumentTemporaryDocumentMeta } from "@documenso/sdk-typescript/models/operations";

let value: DocumentCreateDocumentTemporaryDocumentMeta = {
  signingOrder: "SEQUENTIAL",
  distributionMethod: "NONE",
  id: "<id>",
  subject: "<value>",
  message: "<value>",
  timezone: "Pacific/Tahiti",
  password: "G0Ok7_8RIUdHCox",
  dateFormat: "<value>",
  documentId: 460.07,
  redirectUrl: "https://guilty-simple.org/",
  typedSignatureEnabled: false,
  language: "<value>",
  emailSettings: {},
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `signingOrder`                                                                                 | [operations.DocumentSigningOrder](../../models/operations/documentsigningorder.md)             | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `distributionMethod`                                                                           | [operations.DocumentDistributionMethod](../../models/operations/documentdistributionmethod.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `id`                                                                                           | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `subject`                                                                                      | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `message`                                                                                      | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `timezone`                                                                                     | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `password`                                                                                     | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `dateFormat`                                                                                   | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `documentId`                                                                                   | *number*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `redirectUrl`                                                                                  | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `typedSignatureEnabled`                                                                        | *boolean*                                                                                      | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `language`                                                                                     | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `emailSettings`                                                                                | [operations.DocumentEmailSettings](../../models/operations/documentemailsettings.md)           | :heavy_check_mark:                                                                             | N/A                                                                                            |