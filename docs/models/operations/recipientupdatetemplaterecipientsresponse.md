# RecipientUpdateTemplateRecipientsResponse

Successful response

## Example Usage

```typescript
import { RecipientUpdateTemplateRecipientsResponse } from "@documenso/sdk-typescript/models/operations";

let value: RecipientUpdateTemplateRecipientsResponse = {
  recipients: [
    {
      role: "APPROVER",
      readStatus: "OPENED",
      signingStatus: "REJECTED",
      sendStatus: "NOT_SENT",
      id: 1170.08,
      documentId: 7745.35,
      templateId: 9455.53,
      email: "Gerry52@gmail.com",
      name: "<value>",
      token: "<value>",
      documentDeletedAt: "<value>",
      expired: "<value>",
      signedAt: "<value>",
      authOptions: {
        accessAuth: [],
        actionAuth: [
          "EXPLICIT_NONE",
        ],
      },
      signingOrder: 7782.94,
      rejectionReason: "<value>",
      fields: [],
    },
  ],
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `recipients`                                                                                                                                     | [operations.RecipientUpdateTemplateRecipientsRecipientResponse](../../models/operations/recipientupdatetemplaterecipientsrecipientresponse.md)[] | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |