# Fields2

## Example Usage

```typescript
import { Fields2 } from "@documenso/sdk-typescript/models/operations";

let value: Fields2 = {
  type: "FREE_SIGNATURE",
  recipientId: 2168.7,
  pageNumber: 9031.5,
  pageX: 429.24,
  pageY: 3330.72,
  width: 997.33,
  height: 4755.89,
};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                         | [operations.FieldCreateDocumentFieldsFieldsDocumentsFieldsType](../../models/operations/fieldcreatedocumentfieldsfieldsdocumentsfieldstype.md) | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `recipientId`                                                                                                                                  | *number*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | The ID of the recipient to create the field for.                                                                                               |
| `pageNumber`                                                                                                                                   | *number*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | The page number the field will be on.                                                                                                          |
| `pageX`                                                                                                                                        | *number*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | The X coordinate of where the field will be placed.                                                                                            |
| `pageY`                                                                                                                                        | *number*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | The Y coordinate of where the field will be placed.                                                                                            |
| `width`                                                                                                                                        | *number*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | The width of the field.                                                                                                                        |
| `height`                                                                                                                                       | *number*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | The height of the field.                                                                                                                       |