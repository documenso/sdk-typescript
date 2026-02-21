# DocumentCreateDocumentTemporaryDocumentMeta

## Example Usage

```typescript
import { DocumentCreateDocumentTemporaryDocumentMeta } from "@documenso/sdk-typescript/models/operations";

let value: DocumentCreateDocumentTemporaryDocumentMeta = {
  signingOrder: "SEQUENTIAL",
  distributionMethod: "EMAIL",
  id: "<id>",
  subject: "<value>",
  message: "<value>",
  timezone: null,
  dateFormat: "<value>",
  redirectUrl: "https://exotic-meander.name/",
  typedSignatureEnabled: false,
  uploadSignatureEnabled: false,
  drawSignatureEnabled: false,
  allowDictateNextSigner: true,
  language: "<value>",
  emailSettings: {},
  emailId: "<id>",
  emailReplyTo: "<value>",
  envelopeExpirationPeriod: {
    unit: "day",
    amount: 658704,
  },
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
| `dateFormat`                                                                                   | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `redirectUrl`                                                                                  | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `typedSignatureEnabled`                                                                        | *boolean*                                                                                      | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `uploadSignatureEnabled`                                                                       | *boolean*                                                                                      | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `drawSignatureEnabled`                                                                         | *boolean*                                                                                      | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `allowDictateNextSigner`                                                                       | *boolean*                                                                                      | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `language`                                                                                     | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `emailSettings`                                                                                | [operations.DocumentEmailSettings](../../models/operations/documentemailsettings.md)           | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `emailId`                                                                                      | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `emailReplyTo`                                                                                 | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `envelopeExpirationPeriod`                                                                     | *operations.DocumentEnvelopeExpirationPeriodUnion*                                             | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `password`                                                                                     | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `documentId`                                                                                   | *number*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |