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
    createdAt: "1735365426728",
    updatedAt: "1735677554870",
    publicTitle: "<value>",
    publicDescription: "<value>",
    folderId: "<id>",
    envelopeId: "<id>",
    templateDocumentData: {
      type: "S3_PATH",
      id: "<id>",
      data: "<value>",
      initialData: "<value>",
      envelopeItemId: "<id>",
    },
    templateMeta: {
      id: "<id>",
      subject: "<value>",
      message: "<value>",
      timezone: "America/Anchorage",
      dateFormat: "<value>",
      signingOrder: "PARALLEL",
      typedSignatureEnabled: false,
      uploadSignatureEnabled: true,
      drawSignatureEnabled: false,
      allowDictateNextSigner: false,
      distributionMethod: "EMAIL",
      redirectUrl: "https://awesome-jellyfish.org",
      language: "<value>",
      emailSettings: {},
      emailId: "<id>",
      emailReplyTo: null,
      templateId: 6491.25,
    },
    directLink: null,
    user: {
      id: 7492.04,
      name: "<value>",
      email: "Rosina27@hotmail.com",
    },
    recipients: [],
    fields: [
      {
        envelopeId: "<id>",
        envelopeItemId: "<id>",
        type: "FREE_SIGNATURE",
        id: 3408.88,
        secondaryId: "<id>",
        recipientId: 6489.9,
        page: 9528.83,
        positionX: "<value>",
        positionY: "<value>",
        width: "<value>",
        height: "<value>",
        customText: "<value>",
        inserted: false,
        fieldMeta: {
          fontSize: 12,
          type: "date",
        },
      },
    ],
    folder: {
      id: "<id>",
      name: "<value>",
      type: "TEMPLATE",
      visibility: "EVERYONE",
      userId: 7117.7,
      teamId: 9120.37,
      pinned: false,
      parentId: null,
      createdAt: "1705299366497",
      updatedAt: "1735672258347",
    },
    envelopeItems: [
      {
        id: "<id>",
        envelopeId: "<id>",
      },
    ],
  },
  uploadUrl: "https://unwritten-diver.biz/",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `template`                                                 | [operations.Template](../../models/operations/template.md) | :heavy_check_mark:                                         | N/A                                                        |
| `uploadUrl`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |