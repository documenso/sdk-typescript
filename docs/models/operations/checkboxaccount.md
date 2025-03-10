# CheckboxAccount

## Example Usage

```typescript
import { CheckboxAccount } from "@documenso/sdk-typescript/models/operations";

let value: CheckboxAccount = {
  type: "CHECKBOX",
  pageNumber: 1481.41,
  pageX: 9818.3,
  pageY: 4783.7,
  width: 4973.91,
  height: 6394.73,
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `type`                                                                                     | [operations.TypeAccountCheckbox](../../models/operations/typeaccountcheckbox.md)           | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `fieldMeta`                                                                                | [operations.FieldMetaCheckboxAccount](../../models/operations/fieldmetacheckboxaccount.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `pageNumber`                                                                               | *number*                                                                                   | :heavy_check_mark:                                                                         | The page number the field will be on.                                                      |
| `pageX`                                                                                    | *number*                                                                                   | :heavy_check_mark:                                                                         | The X coordinate of where the field will be placed.                                        |
| `pageY`                                                                                    | *number*                                                                                   | :heavy_check_mark:                                                                         | The Y coordinate of where the field will be placed.                                        |
| `width`                                                                                    | *number*                                                                                   | :heavy_check_mark:                                                                         | The width of the field.                                                                    |
| `height`                                                                                   | *number*                                                                                   | :heavy_check_mark:                                                                         | The height of the field.                                                                   |