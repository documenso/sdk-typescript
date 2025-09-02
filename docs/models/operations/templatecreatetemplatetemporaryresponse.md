# TemplateCreateTemplateTemporaryResponse

Successful response

## Example Usage

```typescript
import { TemplateCreateTemplateTemporaryResponse } from "@documenso/sdk-typescript/models/operations";

let value: TemplateCreateTemplateTemporaryResponse = {
  template: {
    type: "PRIVATE",
    visibility: "MANAGER_AND_ABOVE",
    id: 6302.86,
    externalId: "<id>",
    title: "<value>",
    userId: 7083.99,
    teamId: 1555.46,
    authOptions: {
      globalAccessAuth: [],
      globalActionAuth: [],
    },
    templateDocumentDataId: "<id>",
    createdAt: "1735365426728",
    updatedAt: "1735677554870",
    publicTitle: "<value>",
    publicDescription: "<value>",
    folderId: "<id>",
    templateDocumentData: {
      type: "S3_PATH",
      id: "<id>",
      data: "<value>",
      initialData: "<value>",
    },
    templateMeta: null,
    directLink: null,
    user: {
      id: 2012.56,
      name: "<value>",
      email: "Domenica.DuBuque@hotmail.com",
    },
    recipients: [
      {
        role: "ASSISTANT",
        readStatus: "OPENED",
        signingStatus: "SIGNED",
        sendStatus: "NOT_SENT",
        id: 1921.91,
        documentId: 8540.85,
        templateId: null,
        email: "Bernard_Sipes@hotmail.com",
        name: "<value>",
        token: "<value>",
        documentDeletedAt: "<value>",
        expired: "<value>",
        signedAt: "<value>",
        authOptions: {
          accessAuth: [],
          actionAuth: [
            "PASSKEY",
          ],
        },
        signingOrder: 135.48,
        rejectionReason: null,
      },
    ],
    fields: [],
    folder: {
      id: "<id>",
      name: "<value>",
      type: "DOCUMENT",
      visibility: "ADMIN",
      userId: 9120.37,
      teamId: 5757.17,
      pinned: true,
      parentId: null,
      createdAt: "1729360187536",
      updatedAt: "1735634686334",
    },
  },
  uploadUrl: "https://well-groomed-sermon.org",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `template`                                                 | [operations.Template](../../models/operations/template.md) | :heavy_check_mark:                                         | N/A                                                        |
| `uploadUrl`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |