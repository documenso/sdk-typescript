# FieldCreateTemplateFieldsResponseBody

Successful response

## Example Usage

```typescript
import { FieldCreateTemplateFieldsResponseBody } from "@documenso/sdk-typescript/models/operations";

let value: FieldCreateTemplateFieldsResponseBody = {
  fields: [
    {
      type: "EMAIL",
      id: 230594,
      secondaryId: "<id>",
      documentId: 344010,
      templateId: 948297,
      recipientId: 292571,
      page: 2459.9,
      customText: "<value>",
      inserted: false,
      fieldMeta: {
        type: "number",
      },
    },
  ],
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `fields`                                                                                                                                 | [operations.FieldCreateTemplateFieldsTemplatesFieldsFields](../../models/operations/fieldcreatetemplatefieldstemplatesfieldsfields.md)[] | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |