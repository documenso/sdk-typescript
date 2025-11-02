# TemplateFindTemplatesRequest

## Example Usage

```typescript
import { TemplateFindTemplatesRequest } from "@documenso/sdk-typescript/models/operations";

let value: TemplateFindTemplatesRequest = {};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `query`                                                                                                          | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | The search query.                                                                                                |
| `page`                                                                                                           | *number*                                                                                                         | :heavy_minus_sign:                                                                                               | The pagination page number, starts at 1.                                                                         |
| `perPage`                                                                                                        | *number*                                                                                                         | :heavy_minus_sign:                                                                                               | The number of items per page.                                                                                    |
| `type`                                                                                                           | [operations.TemplateFindTemplatesQueryParamType](../../models/operations/templatefindtemplatesqueryparamtype.md) | :heavy_minus_sign:                                                                                               | Filter templates by type.                                                                                        |
| `folderId`                                                                                                       | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | The ID of the folder to filter templates by.                                                                     |