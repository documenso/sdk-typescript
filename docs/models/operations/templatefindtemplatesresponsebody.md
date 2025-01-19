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
      id: 701841,
      externalId: "<id>",
      title: "<value>",
      userId: 30192,
      teamId: 873320,
      authOptions: {
        globalAccessAuth: "ACCOUNT",
        globalActionAuth: "PASSKEY",
      },
      templateDocumentDataId: "<id>",
      createdAt: "1721596126279",
      updatedAt: "1737248911469",
      publicTitle: "<value>",
      publicDescription: "<value>",
      team: {
        id: 645544,
        url: "https://candid-farmer.biz/",
      },
      fields: [
        {
          type: "TEXT",
          id: 318028,
          secondaryId: "<id>",
          documentId: 958068,
          templateId: 965735,
          recipientId: 620126,
          page: 6174.97,
          customText: "<value>",
          inserted: false,
          fieldMeta: {
            type: "dropdown",
          },
        },
      ],
      recipients: [
        {
          role: "APPROVER",
          readStatus: "OPENED",
          signingStatus: "NOT_SIGNED",
          sendStatus: "NOT_SENT",
          id: 201266,
          documentId: 487148,
          templateId: 990369,
          email: "Billy20@hotmail.com",
          name: "<value>",
          token: "<value>",
          documentDeletedAt: "<value>",
          expired: "<value>",
          signedAt: "<value>",
          authOptions: {
            accessAuth: "ACCOUNT",
            actionAuth: "TWO_FACTOR_AUTH",
          },
          signingOrder: 1220.85,
          rejectionReason: "<value>",
        },
      ],
      templateMeta: {
        signingOrder: "PARALLEL",
        distributionMethod: "EMAIL",
      },
      directLink: {
        token: "<value>",
        enabled: false,
      },
    },
  ],
  count: 2098.6,
  currentPage: 1323.05,
  perPage: 1932.36,
  totalPages: 6854.67,
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