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
      internalVersion: 8978.64,
      user: {
        id: 6143.21,
        name: "<value>",
        email: "Lizeth_Harvey@yahoo.com",
      },
      recipients: [],
      team: {
        id: 2316.39,
        url: "https://friendly-designation.org/",
      },
    },
  ],
  count: 1846.05,
  currentPage: 1717.5,
  perPage: 5717.91,
  totalPages: 4907.67,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `data`                                                                       | [operations.DocumentFindData](../../models/operations/documentfinddata.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |
| `count`                                                                      | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `currentPage`                                                                | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `perPage`                                                                    | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `totalPages`                                                                 | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |