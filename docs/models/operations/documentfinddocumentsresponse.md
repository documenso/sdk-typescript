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
      teamId: 2427.77,
      templateId: 9617.43,
      folderId: "<id>",
      useLegacyFieldInsertion: false,
      user: {
        id: 2710.15,
        name: "<value>",
        email: "Maci33@gmail.com",
      },
      recipients: [
        {
          role: "ASSISTANT",
          readStatus: "NOT_OPENED",
          signingStatus: "SIGNED",
          sendStatus: "SENT",
          id: 3988.06,
          documentId: null,
          templateId: 9729.87,
          email: "Michele.Mitchell@gmail.com",
          name: "<value>",
          token: "<value>",
          documentDeletedAt: "<value>",
          expired: "<value>",
          signedAt: "<value>",
          authOptions: null,
          signingOrder: 3158.57,
          rejectionReason: "<value>",
        },
      ],
      team: {
        id: 7776.99,
        url: "https://metallic-caption.net/",
      },
    },
  ],
  count: 9385.12,
  currentPage: 3431.49,
  perPage: 1374.97,
  totalPages: 1169.66,
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