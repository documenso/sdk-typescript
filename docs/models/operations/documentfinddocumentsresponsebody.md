# DocumentFindDocumentsResponseBody

Successful response

## Example Usage

```typescript
import { DocumentFindDocumentsResponseBody } from "@documenso/sdk-typescript/models/operations";

let value: DocumentFindDocumentsResponseBody = {
  data: [
    {
      visibility: "EVERYONE",
      status: "PENDING",
      source: "DOCUMENT",
      id: 575947,
      externalId: "<id>",
      userId: 9292.97,
      authOptions: {
        globalAccessAuth: "ACCOUNT",
        globalActionAuth: "ACCOUNT",
      },
      formValues: {
        "key": 1317.97,
      },
      title: "<value>",
      documentDataId: "<id>",
      createdAt: "1728342744430",
      updatedAt: "1737227254834",
      completedAt: "<value>",
      deletedAt: "<value>",
      teamId: 183191,
      templateId: 586513,
      user: {
        id: 20107,
        name: "<value>",
        email: "Abigale_Glover96@hotmail.com",
      },
      recipients: [
        {
          role: "VIEWER",
          readStatus: "OPENED",
          signingStatus: "SIGNED",
          sendStatus: "NOT_SENT",
          id: 952749,
          documentId: 447125,
          templateId: 846409,
          email: "Elfrieda58@hotmail.com",
          name: "<value>",
          token: "<value>",
          documentDeletedAt: "<value>",
          expired: "<value>",
          signedAt: "<value>",
          authOptions: {
            accessAuth: "ACCOUNT",
            actionAuth: "TWO_FACTOR_AUTH",
          },
          signingOrder: 7252.55,
          rejectionReason: "<value>",
        },
      ],
      team: {
        id: 501324,
        url: "https://proud-hierarchy.name",
      },
    },
  ],
  count: 191.93,
  currentPage: 3015.75,
  perPage: 6601.74,
  totalPages: 2900.77,
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `data`                                                                                         | [operations.DocumentFindDocumentsData](../../models/operations/documentfinddocumentsdata.md)[] | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `count`                                                                                        | *number*                                                                                       | :heavy_check_mark:                                                                             | The total number of items.                                                                     |
| `currentPage`                                                                                  | *number*                                                                                       | :heavy_check_mark:                                                                             | The current page number, starts at 1.                                                          |
| `perPage`                                                                                      | *number*                                                                                       | :heavy_check_mark:                                                                             | The number of items per page.                                                                  |
| `totalPages`                                                                                   | *number*                                                                                       | :heavy_check_mark:                                                                             | The total number of pages.                                                                     |