# DocumentFindDocumentsRequest

## Example Usage

```typescript
import { DocumentFindDocumentsRequest } from "@documenso/sdk-typescript/models/operations";

let value: DocumentFindDocumentsRequest = {};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `query`                                                                    | *string*                                                                   | :heavy_minus_sign:                                                         | The search query.                                                          |
| `page`                                                                     | *number*                                                                   | :heavy_minus_sign:                                                         | The pagination page number, starts at 1.                                   |
| `perPage`                                                                  | *number*                                                                   | :heavy_minus_sign:                                                         | The number of items per page.                                              |
| `templateId`                                                               | *number*                                                                   | :heavy_minus_sign:                                                         | Filter documents by the template ID used to create it.                     |
| `source`                                                                   | [operations.QueryParamSource](../../models/operations/queryparamsource.md) | :heavy_minus_sign:                                                         | Filter documents by how it was created.                                    |
| `status`                                                                   | [operations.QueryParamStatus](../../models/operations/queryparamstatus.md) | :heavy_minus_sign:                                                         | Filter documents by the current status                                     |
| `folderId`                                                                 | *string*                                                                   | :heavy_minus_sign:                                                         | Filter documents by folder ID                                              |
| `orderByColumn`                                                            | [operations.OrderByColumn](../../models/operations/orderbycolumn.md)       | :heavy_minus_sign:                                                         | N/A                                                                        |
| `orderByDirection`                                                         | [operations.OrderByDirection](../../models/operations/orderbydirection.md) | :heavy_minus_sign:                                                         | N/A                                                                        |