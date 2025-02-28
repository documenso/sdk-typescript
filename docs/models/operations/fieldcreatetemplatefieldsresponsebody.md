# FieldCreateTemplateFieldsResponseBody

Successful response

## Example Usage

```typescript
import { FieldCreateTemplateFieldsResponseBody } from "@documenso/sdk-typescript/models/operations";

let value: FieldCreateTemplateFieldsResponseBody = {
  fields: [
    {
      type: "RADIO",
      id: 623867,
      secondaryId: "<id>",
      documentId: 439745,
      templateId: 10585,
      recipientId: 964928,
      page: 9620.24,
      customText: "<value>",
      inserted: false,
      fieldMeta: {
        type: "name",
      },
    },
  ],
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `fields`                                                                                                                                 | [operations.FieldCreateTemplateFieldsTemplatesFieldsFields](../../models/operations/fieldcreatetemplatefieldstemplatesfieldsfields.md)[] | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |