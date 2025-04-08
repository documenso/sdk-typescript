# DocumentMoveDocumentToTeamRequest

## Example Usage

```typescript
import { DocumentMoveDocumentToTeamRequest } from "@documenso/sdk-typescript/models/operations";

let value: DocumentMoveDocumentToTeamRequest = {
  documentId: 866.68,
  teamId: 9672.47,
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `documentId`                                | *number*                                    | :heavy_check_mark:                          | The ID of the document to move to a team.   |
| `teamId`                                    | *number*                                    | :heavy_check_mark:                          | The ID of the team to move the document to. |