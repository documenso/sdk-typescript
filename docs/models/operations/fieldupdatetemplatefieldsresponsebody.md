# FieldUpdateTemplateFieldsResponseBody

Successful response

## Example Usage

```typescript
import { FieldUpdateTemplateFieldsResponseBody } from "@documenso/sdk-typescript/models/operations";

let value: FieldUpdateTemplateFieldsResponseBody = {
  fields: [
    {
      type: "NUMBER",
      id: 820462,
      secondaryId: "<id>",
      documentId: 230774,
      templateId: 325924,
      recipientId: 708360,
      page: 3927.59,
      customText: "<value>",
      inserted: false,
      fieldMeta: {
        type: "initials",
      },
    },
  ],
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `fields`                                                                                                                                 | [operations.FieldUpdateTemplateFieldsTemplatesFieldsFields](../../models/operations/fieldupdatetemplatefieldstemplatesfieldsfields.md)[] | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |