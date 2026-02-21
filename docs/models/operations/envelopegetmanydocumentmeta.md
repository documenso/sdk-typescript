# EnvelopeGetManyDocumentMeta

## Example Usage

```typescript
import { EnvelopeGetManyDocumentMeta } from "@documenso/sdk-typescript/models/operations";

let value: EnvelopeGetManyDocumentMeta = {
  signingOrder: "SEQUENTIAL",
  distributionMethod: "EMAIL",
  id: "<id>",
  subject: "<value>",
  message: "<value>",
  timezone: "America/Araguaina",
  dateFormat: "<value>",
  redirectUrl: "https://dependent-netsuke.info",
  typedSignatureEnabled: true,
  uploadSignatureEnabled: true,
  drawSignatureEnabled: true,
  allowDictateNextSigner: false,
  language: "<value>",
  emailSettings: {},
  emailId: "<id>",
  emailReplyTo: "<value>",
  envelopeExpirationPeriod: {
    unit: "year",
    amount: 810643,
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `signingOrder`                                                                                               | [operations.EnvelopeGetManySigningOrder](../../models/operations/envelopegetmanysigningorder.md)             | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `distributionMethod`                                                                                         | [operations.EnvelopeGetManyDistributionMethod](../../models/operations/envelopegetmanydistributionmethod.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `id`                                                                                                         | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `subject`                                                                                                    | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `message`                                                                                                    | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `timezone`                                                                                                   | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `dateFormat`                                                                                                 | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `redirectUrl`                                                                                                | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `typedSignatureEnabled`                                                                                      | *boolean*                                                                                                    | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `uploadSignatureEnabled`                                                                                     | *boolean*                                                                                                    | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `drawSignatureEnabled`                                                                                       | *boolean*                                                                                                    | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `allowDictateNextSigner`                                                                                     | *boolean*                                                                                                    | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `language`                                                                                                   | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `emailSettings`                                                                                              | [operations.EnvelopeGetManyEmailSettings](../../models/operations/envelopegetmanyemailsettings.md)           | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `emailId`                                                                                                    | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `emailReplyTo`                                                                                               | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `envelopeExpirationPeriod`                                                                                   | *operations.EnvelopeGetManyEnvelopeExpirationPeriodUnion*                                                    | :heavy_check_mark:                                                                                           | N/A                                                                                                          |