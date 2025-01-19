# Fields2

## Example Usage

```typescript
import { Fields2 } from "@documenso/sdk-typescript/models/operations";

let value: Fields2 = {
  type: "FREE_SIGNATURE",
  recipientId: 7358.94,
  pageNumber: 1415.06,
  pageX: 8659.46,
  pageY: 4413.21,
  width: 4864.1,
  height: 4483.69,
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