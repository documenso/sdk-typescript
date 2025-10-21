# DocumentFindResponse

Successful response

## Example Usage

```typescript
import { DocumentFindResponse } from "@documenso/sdk-typescript/models/operations";

let value: DocumentFindResponse = {
  data: [
    {
      visibility: "ADMIN",
      status: "DRAFT",
      source: "TEMPLATE_DIRECT_LINK",
      id: 6838.55,
      externalId: "<id>",
      userId: 8047.98,
      authOptions: {
        globalAccessAuth: [
          "ACCOUNT",
        ],
        globalActionAuth: [],
      },
      formValues: {},
      title: "<value>",
      createdAt: "1705204726944",
      updatedAt: "1735656163417",
      completedAt: "<value>",
      deletedAt: null,
      teamId: 9234.15,
      folderId: "<id>",
      useLegacyFieldInsertion: false,
      envelopeId: "<id>",
      user: {
        id: 4968.94,
        name: "<value>",
        email: "Jabari.Gleichner99@yahoo.com",
      },
      recipients: [
        {
          envelopeId: "<id>",
          role: "CC",
          readStatus: "OPENED",
          signingStatus: "NOT_SIGNED",
          sendStatus: "NOT_SENT",
          id: 2972.6,
          email: "Sabryna98@gmail.com",
          name: "<value>",
          token: "<value>",
          documentDeletedAt: "<value>",
          expired: null,
          signedAt: null,
          authOptions: {
            accessAuth: [],
            actionAuth: [],
          },
          signingOrder: 839.49,
          rejectionReason: "<value>",
        },
      ],
      team: null,
    },
  ],
  count: 3857.43,
  currentPage: 1846.05,
  perPage: 1717.5,
  totalPages: 5717.91,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `data`                                                                       | [operations.DocumentFindData](../../models/operations/documentfinddata.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |
| `count`                                                                      | *number*                                                                     | :heavy_check_mark:                                                           | The total number of items.                                                   |
| `currentPage`                                                                | *number*                                                                     | :heavy_check_mark:                                                           | The current page number, starts at 1.                                        |
| `perPage`                                                                    | *number*                                                                     | :heavy_check_mark:                                                           | The number of items per page.                                                |
| `totalPages`                                                                 | *number*                                                                     | :heavy_check_mark:                                                           | The total number of pages.                                                   |