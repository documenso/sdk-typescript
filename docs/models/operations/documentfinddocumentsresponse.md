# DocumentFindDocumentsResponse

Successful response

## Example Usage

```typescript
import { DocumentFindDocumentsResponse } from "@documenso/sdk-typescript/models/operations";

let value: DocumentFindDocumentsResponse = {
  data: [
    {
      visibility: "EVERYONE",
      status: "COMPLETED",
      source: "DOCUMENT",
      id: 2244.35,
      externalId: "<id>",
      userId: 9899.66,
      authOptions: {
        globalAccessAuth: [],
        globalActionAuth: [],
      },
      formValues: {},
      title: "<value>",
      documentDataId: "<id>",
      createdAt: "1706694428669",
      updatedAt: "1735641802793",
      completedAt: "<value>",
      deletedAt: "<value>",
      teamId: 9757.2,
      templateId: 3961.77,
      folderId: "<id>",
      useLegacyFieldInsertion: true,
      user: {
        id: 7807.96,
        name: "<value>",
        email: "Daisy.Sanford@gmail.com",
      },
      recipients: [
        {
          role: "SIGNER",
          readStatus: "NOT_OPENED",
          signingStatus: "REJECTED",
          sendStatus: "NOT_SENT",
          id: 5137.87,
          documentId: 7673.48,
          templateId: 2287.2,
          email: "Cassie.Gutkowski87@gmail.com",
          name: "<value>",
          token: "<value>",
          documentDeletedAt: "<value>",
          expired: "<value>",
          signedAt: "<value>",
          authOptions: {
            accessAuth: [],
            actionAuth: [],
          },
          signingOrder: 9437.05,
          rejectionReason: "<value>",
        },
      ],
      team: {
        id: 388.74,
        url: "https://unripe-pension.name/",
      },
    },
  ],
  count: 8329.45,
  currentPage: 3007.69,
  perPage: 3718.68,
  totalPages: 9347.69,
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