# TemplateFindTemplatesResponseBody

Successful response

## Example Usage

```typescript
import { TemplateFindTemplatesResponseBody } from "@documenso/sdk-typescript/models/operations";

let value: TemplateFindTemplatesResponseBody = {
  data: [
    {
      type: "PRIVATE",
      visibility: "ADMIN",
      id: 798079,
      externalId: "<id>",
      title: "<value>",
      userId: 550994,
      teamId: 980467,
      authOptions: {
        globalAccessAuth: "ACCOUNT",
        globalActionAuth: "PASSKEY",
      },
      templateDocumentDataId: "<id>",
      createdAt: "1710169447332",
      updatedAt: "1740200927018",
      publicTitle: "<value>",
      publicDescription: "<value>",
      team: {
        id: 404774,
        url: "https://some-haversack.net",
      },
      fields: [
        {
          type: "RADIO",
          id: 317260,
          secondaryId: "<id>",
          documentId: 979271,
          templateId: 649657,
          recipientId: 880998,
          page: 5559.38,
          customText: "<value>",
          inserted: false,
          fieldMeta: {
            type: "radio",
          },
        },
      ],
      recipients: [
        {
          role: "APPROVER",
          readStatus: "OPENED",
          signingStatus: "NOT_SIGNED",
          sendStatus: "SENT",
          id: 428378,
          documentId: 923159,
          templateId: 105094,
          email: "Sebastian73@hotmail.com",
          name: "<value>",
          token: "<value>",
          documentDeletedAt: "<value>",
          expired: "<value>",
          signedAt: "<value>",
          authOptions: {
            accessAuth: "ACCOUNT",
            actionAuth: "EXPLICIT_NONE",
          },
          signingOrder: 3109.3,
          rejectionReason: "<value>",
        },
      ],
      templateMeta: {
        signingOrder: "PARALLEL",
        distributionMethod: "NONE",
      },
      directLink: {
        token: "<value>",
        enabled: false,
      },
    },
  ],
  count: 1384.36,
  currentPage: 1939.9,
  perPage: 4810.42,
  totalPages: 2982.46,
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