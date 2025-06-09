# TemplateFindTemplatesResponse

Successful response

## Example Usage

```typescript
import { TemplateFindTemplatesResponse } from "@documenso/sdk-typescript/models/operations";

let value: TemplateFindTemplatesResponse = {
  data: [],
  count: 1013.62,
  currentPage: 8714.7,
  perPage: 7235.15,
  totalPages: 7910.02,
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `data`                                                                                         | [operations.TemplateFindTemplatesData](../../models/operations/templatefindtemplatesdata.md)[] | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `count`                                                                                        | *number*                                                                                       | :heavy_check_mark:                                                                             | The total number of items.                                                                     |
| `currentPage`                                                                                  | *number*                                                                                       | :heavy_check_mark:                                                                             | The current page number, starts at 1.                                                          |
| `perPage`                                                                                      | *number*                                                                                       | :heavy_check_mark:                                                                             | The number of items per page.                                                                  |
| `totalPages`                                                                                   | *number*                                                                                       | :heavy_check_mark:                                                                             | The total number of pages.                                                                     |