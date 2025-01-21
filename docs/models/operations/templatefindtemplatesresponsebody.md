# TemplateFindTemplatesResponseBody

Successful response

## Example Usage

```typescript
import { TemplateFindTemplatesResponseBody } from "@documenso/sdk-typescript/models/operations";

let value: TemplateFindTemplatesResponseBody = {
  data: [
    {
      type: "PUBLIC",
      visibility: "EVERYONE",
      id: 685467,
      externalId: "<id>",
      title: "<value>",
      userId: 49499,
      teamId: 101854,
      authOptions: {
        globalAccessAuth: "ACCOUNT",
        globalActionAuth: "ACCOUNT",
      },
      templateDocumentDataId: "<id>",
      createdAt: "1715865297302",
      updatedAt: "1737358268556",
      publicTitle: "<value>",
      publicDescription: "<value>",
      team: {
        id: 255064,
        url: "https://zealous-lounge.org",
      },
      fields: [
        {
          type: "EMAIL",
          id: 106682,
          secondaryId: "<id>",
          documentId: 408774,
          templateId: 296128,
          recipientId: 493407,
          page: 6570.44,
          customText: "<value>",
          inserted: false,
          fieldMeta: {
            type: "text",
          },
        },
      ],
      recipients: [
        {
          role: "APPROVER",
          readStatus: "OPENED",
          signingStatus: "REJECTED",
          sendStatus: "NOT_SENT",
          id: 131687,
          documentId: 397014,
          templateId: 704402,
          email: "Beaulah79@gmail.com",
          name: "<value>",
          token: "<value>",
          documentDeletedAt: "<value>",
          expired: "<value>",
          signedAt: "<value>",
          authOptions: {
            accessAuth: "ACCOUNT",
            actionAuth: "PASSKEY",
          },
          signingOrder: 8811.89,
          rejectionReason: "<value>",
        },
      ],
      templateMeta: {
        signingOrder: "SEQUENTIAL",
        distributionMethod: "EMAIL",
      },
      directLink: {
        token: "<value>",
        enabled: false,
      },
    },
  ],
  count: 6075.45,
  currentPage: 5265.84,
  perPage: 5379.46,
  totalPages: 9376.64,
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `data`                                                                                         | [operations.TemplateFindTemplatesData](../../models/operations/templatefindtemplatesdata.md)[] | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `count`                                                                                        | *number*                                                                                       | :heavy_check_mark:                                                                             | The total number of items.                                                                     |
| `currentPage`                                                                                  | *number*                                                                                       | :heavy_check_mark:                                                                             | The current page number, starts at 1.                                                          |
| `perPage`                                                                                      | *number*                                                                                       | :heavy_check_mark:                                                                             | The number of items per page.                                                                  |
| `totalPages`                                                                                   | *number*                                                                                       | :heavy_check_mark:                                                                             | The total number of pages.                                                                     |