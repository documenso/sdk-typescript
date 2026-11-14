# EnvelopeAuditLogFindData32

## Example Usage

```typescript
import { EnvelopeAuditLogFindData32 } from "@documenso/sdk-typescript/models/operations";

let value: EnvelopeAuditLogFindData32 = {
  contentId: "<id>",
  contentType: "<value>",
  envelopeItemId: "<id>",
  changes: [],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `contentId`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `contentType`                                                            | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `envelopeItemId`                                                         | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `changes`                                                                | [operations.ChangeProperty](../../models/operations/changeproperty.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |