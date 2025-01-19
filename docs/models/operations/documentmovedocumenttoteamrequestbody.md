# DocumentMoveDocumentToTeamRequestBody

## Example Usage

```typescript
import { DocumentMoveDocumentToTeamRequestBody } from "@documenso/sdk-typescript/models/operations";

let value: DocumentMoveDocumentToTeamRequestBody = {
  documentId: 9587.41,
  teamId: 1173.2,
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `documentId`                                | *number*                                    | :heavy_check_mark:                          | The ID of the document to move to a team.   |
| `teamId`                                    | *number*                                    | :heavy_check_mark:                          | The ID of the team to move the document to. |