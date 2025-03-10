# DocumentFindDocumentsResponse

Successful response

## Example Usage

```typescript
import { DocumentFindDocumentsResponse } from "@documenso/sdk-typescript/models/operations";

let value: DocumentFindDocumentsResponse = {
  data: [
    {
      visibility: "EVERYONE",
      status: "PENDING",
      source: "DOCUMENT",
      id: 5759.47,
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
      createdAt: "1732620080339",
      updatedAt: "1741504590743",
      completedAt: "<value>",
      deletedAt: "<value>",
      teamId: 1831.91,
      templateId: 5865.13,
      user: {
        id: 201.07,
        name: "<value>",
        email: "Abigale_Glover96@hotmail.com",
      },
      recipients: [
        {
          role: "VIEWER",
          readStatus: "OPENED",
          signingStatus: "SIGNED",
          sendStatus: "NOT_SENT",
          id: 9527.49,
          documentId: 4471.25,
          templateId: 8464.09,
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
        id: 5013.24,
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