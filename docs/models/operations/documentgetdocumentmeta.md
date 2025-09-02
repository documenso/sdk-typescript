# DocumentGetDocumentMeta

## Example Usage

```typescript
import { DocumentGetDocumentMeta } from "@documenso/sdk-typescript/models/operations";

let value: DocumentGetDocumentMeta = {
  signingOrder: "SEQUENTIAL",
  distributionMethod: "NONE",
  id: "<id>",
  subject: "<value>",
  message: "<value>",
  timezone: "Asia/Kabul",
  password: "Arf0eB1hteyfkko",
  dateFormat: "<value>",
  documentId: 3525.39,
  redirectUrl: "https://rich-trick.biz/",
  typedSignatureEnabled: true,
  uploadSignatureEnabled: true,
  drawSignatureEnabled: true,
  allowDictateNextSigner: false,
  language: "<value>",
  emailSettings: {},
  emailId: "<id>",
  emailReplyTo: "<value>",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `signingOrder`                                                                                       | [operations.DocumentGetSigningOrder](../../models/operations/documentgetsigningorder.md)             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `distributionMethod`                                                                                 | [operations.DocumentGetDistributionMethod](../../models/operations/documentgetdistributionmethod.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `id`                                                                                                 | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `subject`                                                                                            | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `message`                                                                                            | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `timezone`                                                                                           | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `password`                                                                                           | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `dateFormat`                                                                                         | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `documentId`                                                                                         | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `redirectUrl`                                                                                        | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `typedSignatureEnabled`                                                                              | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `uploadSignatureEnabled`                                                                             | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `drawSignatureEnabled`                                                                               | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `allowDictateNextSigner`                                                                             | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `language`                                                                                           | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `emailSettings`                                                                                      | [operations.DocumentGetEmailSettings](../../models/operations/documentgetemailsettings.md)           | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `emailId`                                                                                            | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `emailReplyTo`                                                                                       | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |