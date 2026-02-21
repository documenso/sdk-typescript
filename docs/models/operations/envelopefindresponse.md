# EnvelopeFindResponse

Successful response

## Example Usage

```typescript
import { EnvelopeFindResponse } from "@documenso/sdk-typescript/models/operations";

let value: EnvelopeFindResponse = {
  data: [
    {
      internalVersion: 6371.3,
      type: "TEMPLATE",
      status: "REJECTED",
      source: "DOCUMENT",
      visibility: "ADMIN",
      templateType: "PUBLIC",
      id: "<id>",
      secondaryId: "<id>",
      externalId: "<id>",
      createdAt: "1729634210397",
      updatedAt: "1735620445401",
      completedAt: "<value>",
      deletedAt: "<value>",
      title: "<value>",
      authOptions: {
        globalAccessAuth: [
          "TWO_FACTOR_AUTH",
        ],
        globalActionAuth: [
          "PASSKEY",
        ],
      },
      formValues: {},
      publicTitle: "<value>",
      publicDescription: "<value>",
      userId: 2072.39,
      teamId: 7974.24,
      folderId: "<id>",
      templateId: 9019.23,
      user: {
        id: 5528.02,
        name: "<value>",
        email: "Ursula_Okuneva@gmail.com",
      },
      recipients: [
        {
          envelopeId: "<id>",
          role: "ASSISTANT",
          readStatus: "OPENED",
          signingStatus: "REJECTED",
          sendStatus: "SENT",
          id: 1710.79,
          email: "Keara2@yahoo.com",
          name: "<value>",
          token: "<value>",
          documentDeletedAt: "<value>",
          expired: "<value>",
          expiresAt: "1764510134943",
          expirationNotifiedAt: "<value>",
          signedAt: "<value>",
          authOptions: {
            accessAuth: [
              "ACCOUNT",
            ],
            actionAuth: [
              "EXPLICIT_NONE",
            ],
          },
          signingOrder: 2057.3,
          rejectionReason: "<value>",
        },
      ],
      team: {
        id: 54.61,
        url: "https://cuddly-bin.com/",
      },
    },
  ],
  count: 4346.68,
  currentPage: 6234.32,
  perPage: 9826.96,
  totalPages: 5533.91,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `data`                                                                       | [operations.EnvelopeFindData](../../models/operations/envelopefinddata.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |
| `count`                                                                      | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `currentPage`                                                                | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `perPage`                                                                    | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `totalPages`                                                                 | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |