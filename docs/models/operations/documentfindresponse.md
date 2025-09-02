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
      documentDataId: "<id>",
      createdAt: "1705204726944",
      updatedAt: "1735656163417",
      completedAt: "<value>",
      deletedAt: null,
      teamId: 9234.15,
      templateId: 8660.44,
      folderId: "<id>",
      useLegacyFieldInsertion: true,
      user: {
        id: 4875.96,
        name: "<value>",
        email: "Jessica33@yahoo.com",
      },
      recipients: [],
      team: {
        id: 721.66,
        url: "https://enraged-advancement.biz",
      },
    },
  ],
  count: 1717.5,
  currentPage: 5717.91,
  perPage: 4907.67,
  totalPages: 9207.47,
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