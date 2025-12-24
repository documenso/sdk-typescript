# DocumentGetManyResponse

Successful response

## Example Usage

```typescript
import { DocumentGetManyResponse } from "@documenso/sdk-typescript/models/operations";

let value: DocumentGetManyResponse = {
  data: [
    {
      visibility: "EVERYONE",
      status: "REJECTED",
      source: "DOCUMENT",
      id: 69.58,
      externalId: "<id>",
      userId: 7129.81,
      authOptions: null,
      formValues: {
        "key": false,
      },
      title: "<value>",
      createdAt: "1708359736478",
      updatedAt: "1735657657804",
      completedAt: "<value>",
      deletedAt: "<value>",
      teamId: 2475.49,
      folderId: "<id>",
      useLegacyFieldInsertion: false,
      envelopeId: "<id>",
      internalVersion: 9748.75,
      user: {
        id: 6226.23,
        name: "<value>",
        email: "Zola.Gutkowski@yahoo.com",
      },
      recipients: [],
      team: {
        id: 7630.95,
        url: "https://numb-spring.info",
      },
    },
  ],
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `data`                                                                             | [operations.DocumentGetManyData](../../models/operations/documentgetmanydata.md)[] | :heavy_check_mark:                                                                 | N/A                                                                                |