# TemplateMoveTemplateToTeamResponse

Successful response

## Example Usage

```typescript
import { TemplateMoveTemplateToTeamResponse } from "@documenso/sdk-typescript/models/operations";

let value: TemplateMoveTemplateToTeamResponse = {
  type: "PRIVATE",
  visibility: "EVERYONE",
  id: 1874.34,
  externalId: "<id>",
  title: "<value>",
  userId: 82.32,
  teamId: 8343.82,
  authOptions: {
    globalAccessAuth: "ACCOUNT",
    globalActionAuth: "ACCOUNT",
  },
  templateDocumentDataId: "<id>",
  createdAt: "1723770518827",
  updatedAt: "1743987341155",
  publicTitle: "<value>",
  publicDescription: "<value>",
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                               | [operations.TemplateMoveTemplateToTeamType](../../models/operations/templatemovetemplatetoteamtype.md)               | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `visibility`                                                                                                         | [operations.TemplateMoveTemplateToTeamVisibility](../../models/operations/templatemovetemplatetoteamvisibility.md)   | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `id`                                                                                                                 | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `externalId`                                                                                                         | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `title`                                                                                                              | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `userId`                                                                                                             | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `teamId`                                                                                                             | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `authOptions`                                                                                                        | [operations.TemplateMoveTemplateToTeamAuthOptions](../../models/operations/templatemovetemplatetoteamauthoptions.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `templateDocumentDataId`                                                                                             | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `createdAt`                                                                                                          | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `updatedAt`                                                                                                          | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `publicTitle`                                                                                                        | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `publicDescription`                                                                                                  | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |