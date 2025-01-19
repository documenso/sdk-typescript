# FieldCreateTemplateFieldsResponseBody

Successful response

## Example Usage

```typescript
import { FieldCreateTemplateFieldsResponseBody } from "@documenso/sdk-typescript/models/operations";

let value: FieldCreateTemplateFieldsResponseBody = {
  fields: [
    {
      type: "RADIO",
      id: 769247,
      secondaryId: "<id>",
      documentId: 536999,
      templateId: 978857,
      recipientId: 396184,
      page: 6019.44,
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
| `fields`                                                                                                                                 | [operations.FieldCreateTemplateFieldsTemplatesFieldsFields](../../models/operations/fieldcreatetemplatefieldstemplatesfieldsfields.md)[] | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |