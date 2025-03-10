# TemplateFindTemplatesResponse

Successful response

## Example Usage

```typescript
import { TemplateFindTemplatesResponse } from "@documenso/sdk-typescript/models/operations";

let value: TemplateFindTemplatesResponse = {
  data: [
    {
      type: "PRIVATE",
      visibility: "ADMIN",
      id: 7980.79,
      externalId: "<id>",
      title: "<value>",
      userId: 5509.94,
      teamId: 9804.67,
      authOptions: {
        globalAccessAuth: "ACCOUNT",
        globalActionAuth: "PASSKEY",
      },
      templateDocumentDataId: "<id>",
      createdAt: "1711465214979",
      updatedAt: "1741496694665",
      publicTitle: "<value>",
      publicDescription: "<value>",
      team: {
        id: 4047.74,
        url: "https://some-haversack.net",
      },
      fields: [
        {
          type: "RADIO",
          id: 3172.6,
          secondaryId: "<id>",
          documentId: 9792.71,
          templateId: 6496.57,
          recipientId: 8809.98,
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
          id: 4283.78,
          documentId: 9231.59,
          templateId: 1050.94,
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