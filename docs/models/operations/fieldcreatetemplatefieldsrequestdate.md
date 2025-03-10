# FieldCreateTemplateFieldsRequestDate

## Example Usage

```typescript
import { FieldCreateTemplateFieldsRequestDate } from "@documenso/sdk-typescript/models/operations";

let value: FieldCreateTemplateFieldsRequestDate = {
  type: "DATE",
  recipientId: 8341.77,
  pageNumber: 2304,
  pageX: 4266.91,
  pageY: 6104.9,
  width: 5456.29,
  height: 9747.24,
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                               | [operations.FieldCreateTemplateFieldsRequestTypeDate](../../models/operations/fieldcreatetemplatefieldsrequesttypedate.md)           | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `fieldMeta`                                                                                                                          | [operations.FieldCreateTemplateFieldsRequestFieldMetaDate](../../models/operations/fieldcreatetemplatefieldsrequestfieldmetadate.md) | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
| `recipientId`                                                                                                                        | *number*                                                                                                                             | :heavy_check_mark:                                                                                                                   | The ID of the recipient to create the field for.                                                                                     |
| `pageNumber`                                                                                                                         | *number*                                                                                                                             | :heavy_check_mark:                                                                                                                   | The page number the field will be on.                                                                                                |
| `pageX`                                                                                                                              | *number*                                                                                                                             | :heavy_check_mark:                                                                                                                   | The X coordinate of where the field will be placed.                                                                                  |
| `pageY`                                                                                                                              | *number*                                                                                                                             | :heavy_check_mark:                                                                                                                   | The Y coordinate of where the field will be placed.                                                                                  |
| `width`                                                                                                                              | *number*                                                                                                                             | :heavy_check_mark:                                                                                                                   | The width of the field.                                                                                                              |
| `height`                                                                                                                             | *number*                                                                                                                             | :heavy_check_mark:                                                                                                                   | The height of the field.                                                                                                             |