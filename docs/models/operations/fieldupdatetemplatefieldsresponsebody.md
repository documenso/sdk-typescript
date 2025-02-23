# FieldUpdateTemplateFieldsResponseBody

Successful response

## Example Usage

```typescript
import { FieldUpdateTemplateFieldsResponseBody } from "@documenso/sdk-typescript/models/operations";

let value: FieldUpdateTemplateFieldsResponseBody = {
  fields: [
    {
      type: "DATE",
      id: 424553,
      secondaryId: "<id>",
      documentId: 286464,
      templateId: 501591,
      recipientId: 879418,
      page: 2750.06,
      customText: "<value>",
      inserted: false,
      fieldMeta: {
        type: "text",
      },
    },
  ],
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `fields`                                                                                                                                 | [operations.FieldUpdateTemplateFieldsTemplatesFieldsFields](../../models/operations/fieldupdatetemplatefieldstemplatesfieldsfields.md)[] | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |