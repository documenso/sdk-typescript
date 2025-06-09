# FieldCreateDocumentFieldsFieldName

## Example Usage

```typescript
import { FieldCreateDocumentFieldsFieldName } from "@documenso/sdk-typescript/models/operations";

let value: FieldCreateDocumentFieldsFieldName = {
  type: "NAME",
  recipientId: 4447.59,
  pageNumber: 3962.57,
  pageX: 8763.31,
  pageY: 3496.94,
  width: 1025.63,
  height: 9994.86,
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                               | [operations.FieldCreateDocumentFieldsTypeNameRequest1](../../models/operations/fieldcreatedocumentfieldstypenamerequest1.md)         | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `fieldMeta`                                                                                                                          | [operations.FieldCreateDocumentFieldsFieldMetaNameRequest](../../models/operations/fieldcreatedocumentfieldsfieldmetanamerequest.md) | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
| `recipientId`                                                                                                                        | *number*                                                                                                                             | :heavy_check_mark:                                                                                                                   | The ID of the recipient to create the field for.                                                                                     |
| `pageNumber`                                                                                                                         | *number*                                                                                                                             | :heavy_check_mark:                                                                                                                   | The page number the field will be on.                                                                                                |
| `pageX`                                                                                                                              | *number*                                                                                                                             | :heavy_check_mark:                                                                                                                   | The X coordinate of where the field will be placed.                                                                                  |
| `pageY`                                                                                                                              | *number*                                                                                                                             | :heavy_check_mark:                                                                                                                   | The Y coordinate of where the field will be placed.                                                                                  |
| `width`                                                                                                                              | *number*                                                                                                                             | :heavy_check_mark:                                                                                                                   | The width of the field.                                                                                                              |
| `height`                                                                                                                             | *number*                                                                                                                             | :heavy_check_mark:                                                                                                                   | The height of the field.                                                                                                             |