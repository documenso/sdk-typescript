# FieldUpdateDocumentFieldsResponse

Successful response

## Example Usage

```typescript
import { FieldUpdateDocumentFieldsResponse } from "@documenso/sdk-typescript/models/operations";

let value: FieldUpdateDocumentFieldsResponse = {
  fields: [
    {
      envelopeId: "<id>",
      envelopeItemId: "<id>",
      type: "NAME",
      id: 6326.22,
      secondaryId: "<id>",
      recipientId: 4223.59,
      page: 892,
      positionX: "<value>",
      positionY: "<value>",
      width: "<value>",
      height: "<value>",
      customText: "<value>",
      inserted: false,
      fieldMeta: null,
    },
  ],
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `fields`                                                                                                                 | [operations.FieldUpdateDocumentFieldsFieldResponse](../../models/operations/fieldupdatedocumentfieldsfieldresponse.md)[] | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |