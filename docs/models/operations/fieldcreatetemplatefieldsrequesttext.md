# FieldCreateTemplateFieldsRequestText

## Example Usage

```typescript
import { FieldCreateTemplateFieldsRequestText } from "@documenso/sdk-typescript/models/operations";

let value: FieldCreateTemplateFieldsRequestText = {
  type: "TEXT",
  recipientId: 3440.1,
  pageNumber: 9482.97,
  pageX: 2925.71,
  pageY: 2459.9,
  width: 5831.38,
  height: 2580.36,
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                               | [operations.FieldCreateTemplateFieldsRequestTypeText](../../models/operations/fieldcreatetemplatefieldsrequesttypetext.md)           | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `fieldMeta`                                                                                                                          | [operations.FieldCreateTemplateFieldsRequestFieldMetaText](../../models/operations/fieldcreatetemplatefieldsrequestfieldmetatext.md) | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
| `recipientId`                                                                                                                        | *number*                                                                                                                             | :heavy_check_mark:                                                                                                                   | The ID of the recipient to create the field for.                                                                                     |
| `pageNumber`                                                                                                                         | *number*                                                                                                                             | :heavy_check_mark:                                                                                                                   | The page number the field will be on.                                                                                                |
| `pageX`                                                                                                                              | *number*                                                                                                                             | :heavy_check_mark:                                                                                                                   | The X coordinate of where the field will be placed.                                                                                  |
| `pageY`                                                                                                                              | *number*                                                                                                                             | :heavy_check_mark:                                                                                                                   | The Y coordinate of where the field will be placed.                                                                                  |
| `width`                                                                                                                              | *number*                                                                                                                             | :heavy_check_mark:                                                                                                                   | The width of the field.                                                                                                              |
| `height`                                                                                                                             | *number*                                                                                                                             | :heavy_check_mark:                                                                                                                   | The height of the field.                                                                                                             |