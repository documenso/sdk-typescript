# EnvelopeGetDocumentMeta

## Example Usage

```typescript
import { EnvelopeGetDocumentMeta } from "@documenso/sdk-typescript/models/operations";

let value: EnvelopeGetDocumentMeta = {
  signingOrder: "PARALLEL",
  distributionMethod: "NONE",
  id: "<id>",
  subject: "<value>",
  message: "<value>",
  timezone: "Europe/Moscow",
  dateFormat: "<value>",
  redirectUrl: "https://selfish-restaurant.biz/",
  typedSignatureEnabled: true,
  uploadSignatureEnabled: true,
  drawSignatureEnabled: true,
  allowDictateNextSigner: false,
  language: "<value>",
  emailSettings: null,
  emailId: "<id>",
  emailReplyTo: "<value>",
  envelopeExpirationPeriod: {
    unit: "month",
    amount: 104154,
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `signingOrder`                                                                                       | [operations.EnvelopeGetSigningOrder](../../models/operations/envelopegetsigningorder.md)             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `distributionMethod`                                                                                 | [operations.EnvelopeGetDistributionMethod](../../models/operations/envelopegetdistributionmethod.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `id`                                                                                                 | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `subject`                                                                                            | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `message`                                                                                            | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `timezone`                                                                                           | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `dateFormat`                                                                                         | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `redirectUrl`                                                                                        | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `typedSignatureEnabled`                                                                              | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `uploadSignatureEnabled`                                                                             | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `drawSignatureEnabled`                                                                               | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `allowDictateNextSigner`                                                                             | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `language`                                                                                           | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `emailSettings`                                                                                      | [operations.EnvelopeGetEmailSettings](../../models/operations/envelopegetemailsettings.md)           | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `emailId`                                                                                            | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `emailReplyTo`                                                                                       | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `envelopeExpirationPeriod`                                                                           | *operations.EnvelopeGetEnvelopeExpirationPeriodUnion*                                                | :heavy_check_mark:                                                                                   | N/A                                                                                                  |