# DocumentFindDocumentsResponse

Successful response

## Example Usage

```typescript
import { DocumentFindDocumentsResponse } from "@documenso/sdk-typescript/models/operations";

let value: DocumentFindDocumentsResponse = {
  data: [
    {
      visibility: "ADMIN",
      status: "DRAFT",
      source: "TEMPLATE",
      id: 2331.96,
      externalId: "<id>",
      userId: 2244.35,
      authOptions: {
        globalAccessAuth: "ACCOUNT",
        globalActionAuth: "PASSKEY",
      },
      formValues: {
        "key": 3646.1,
      },
      title: "<value>",
      documentDataId: "<id>",
      createdAt: "1724665271177",
      updatedAt: "1743997384880",
      completedAt: "<value>",
      deletedAt: "<value>",
      teamId: 805.69,
      templateId: 4467.97,
      user: {
        id: 4334.93,
        name: "<value>",
        email: "Werner11@yahoo.com",
      },
      recipients: [
        {
          role: "APPROVER",
          readStatus: "OPENED",
          signingStatus: "NOT_SIGNED",
          sendStatus: "NOT_SENT",
          id: 9347.69,
          documentId: 3988.06,
          templateId: 245.87,
          email: "Watson_Rau@gmail.com",
          name: "<value>",
          token: "<value>",
          documentDeletedAt: "<value>",
          expired: "<value>",
          signedAt: "<value>",
          authOptions: {
            accessAuth: "ACCOUNT",
            actionAuth: "EXPLICIT_NONE",
          },
          signingOrder: 3389.96,
          rejectionReason: "<value>",
        },
      ],
      team: {
        id: 1363.04,
        url: "https://complicated-backburn.biz",
      },
    },
  ],
  count: 3158.57,
  currentPage: 6099.19,
  perPage: 1928.02,
  totalPages: 9385.12,
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