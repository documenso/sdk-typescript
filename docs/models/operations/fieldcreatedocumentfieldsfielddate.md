# FieldCreateDocumentFieldsFieldDate

## Example Usage

```typescript
import { FieldCreateDocumentFieldsFieldDate } from "@documenso/sdk-typescript/models/operations";

let value: FieldCreateDocumentFieldsFieldDate = {
  type: "DATE",
  recipientId: 5599.3,
  pageNumber: 6732.38,
  pageX: 1205.16,
  pageY: 8176.29,
  width: 1601.08,
  height: 5761.97,
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                               | [operations.FieldCreateDocumentFieldsTypeDateRequest1](../../models/operations/fieldcreatedocumentfieldstypedaterequest1.md)         | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `fieldMeta`                                                                                                                          | [operations.FieldCreateDocumentFieldsFieldMetaDateRequest](../../models/operations/fieldcreatedocumentfieldsfieldmetadaterequest.md) | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
| `recipientId`                                                                                                                        | *number*                                                                                                                             | :heavy_check_mark:                                                                                                                   | The ID of the recipient to create the field for.                                                                                     |
| `pageNumber`                                                                                                                         | *number*                                                                                                                             | :heavy_check_mark:                                                                                                                   | The page number the field will be on.                                                                                                |
| `pageX`                                                                                                                              | *number*                                                                                                                             | :heavy_check_mark:                                                                                                                   | The X coordinate of where the field will be placed.                                                                                  |
| `pageY`                                                                                                                              | *number*                                                                                                                             | :heavy_check_mark:                                                                                                                   | The Y coordinate of where the field will be placed.                                                                                  |
| `width`                                                                                                                              | *number*                                                                                                                             | :heavy_check_mark:                                                                                                                   | The width of the field.                                                                                                              |
| `height`                                                                                                                             | *number*                                                                                                                             | :heavy_check_mark:                                                                                                                   | The height of the field.                                                                                                             |