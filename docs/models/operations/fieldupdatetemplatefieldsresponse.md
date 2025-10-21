# FieldUpdateTemplateFieldsResponse

Successful response

## Example Usage

```typescript
import { FieldUpdateTemplateFieldsResponse } from "@documenso/sdk-typescript/models/operations";

let value: FieldUpdateTemplateFieldsResponse = {
  fields: [
    {
      envelopeId: "<id>",
      envelopeItemId: "<id>",
      type: "FREE_SIGNATURE",
      id: 6817.07,
      secondaryId: "<id>",
      recipientId: 1094.84,
      page: 2673.63,
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

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `fields`                                                                                                                 | [operations.FieldUpdateTemplateFieldsFieldResponse](../../models/operations/fieldupdatetemplatefieldsfieldresponse.md)[] | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |