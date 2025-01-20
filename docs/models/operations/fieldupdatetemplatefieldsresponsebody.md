# FieldUpdateTemplateFieldsResponseBody

Successful response

## Example Usage

```typescript
import { FieldUpdateTemplateFieldsResponseBody } from "@documenso/sdk-typescript/models/operations";

let value: FieldUpdateTemplateFieldsResponseBody = {
  fields: [
    {
      type: "DATE",
      id: 356007,
      secondaryId: "<id>",
      documentId: 987435,
      templateId: 13655,
      recipientId: 612181,
      page: 7236.23,
      customText: "<value>",
      inserted: false,
      fieldMeta: {
        type: "email",
      },
    },
  ],
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `fields`                                                                                                                                 | [operations.FieldUpdateTemplateFieldsTemplatesFieldsFields](../../models/operations/fieldupdatetemplatefieldstemplatesfieldsfields.md)[] | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |