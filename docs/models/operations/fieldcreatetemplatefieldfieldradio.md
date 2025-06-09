# FieldCreateTemplateFieldFieldRadio

## Example Usage

```typescript
import { FieldCreateTemplateFieldFieldRadio } from "@documenso/sdk-typescript/models/operations";

let value: FieldCreateTemplateFieldFieldRadio = {
  type: "RADIO",
  recipientId: 7051.89,
  pageNumber: 7153.15,
  pageX: 9812.35,
  pageY: 994.43,
  width: 8620.14,
  height: 6409.32,
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                               | [operations.FieldCreateTemplateFieldTypeRadioRequest1](../../models/operations/fieldcreatetemplatefieldtyperadiorequest1.md)         | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `fieldMeta`                                                                                                                          | [operations.FieldCreateTemplateFieldFieldMetaRadioRequest](../../models/operations/fieldcreatetemplatefieldfieldmetaradiorequest.md) | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
| `recipientId`                                                                                                                        | *number*                                                                                                                             | :heavy_check_mark:                                                                                                                   | The ID of the recipient to create the field for.                                                                                     |
| `pageNumber`                                                                                                                         | *number*                                                                                                                             | :heavy_check_mark:                                                                                                                   | The page number the field will be on.                                                                                                |
| `pageX`                                                                                                                              | *number*                                                                                                                             | :heavy_check_mark:                                                                                                                   | The X coordinate of where the field will be placed.                                                                                  |
| `pageY`                                                                                                                              | *number*                                                                                                                             | :heavy_check_mark:                                                                                                                   | The Y coordinate of where the field will be placed.                                                                                  |
| `width`                                                                                                                              | *number*                                                                                                                             | :heavy_check_mark:                                                                                                                   | The width of the field.                                                                                                              |
| `height`                                                                                                                             | *number*                                                                                                                             | :heavy_check_mark:                                                                                                                   | The height of the field.                                                                                                             |