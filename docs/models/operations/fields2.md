# Fields2

## Example Usage

```typescript
import { Fields2 } from "@documenso/sdk-typescript/models/operations";

let value: Fields2 = {
  type: "FREE_SIGNATURE",
  recipientId: 4014.28,
  pageNumber: 4166.92,
  pageX: 8108.39,
  pageY: 3481.92,
  width: 2114.55,
  height: 593.83,
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