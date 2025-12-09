# DocumentCreateFieldMetaDropdown

## Example Usage

```typescript
import { DocumentCreateFieldMetaDropdown } from "@documenso/sdk-typescript/models/operations";

let value: DocumentCreateFieldMetaDropdown = {
  type: "dropdown",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `label`                                                                                                | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `placeholder`                                                                                          | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `required`                                                                                             | *boolean*                                                                                              | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `readOnly`                                                                                             | *boolean*                                                                                              | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `fontSize`                                                                                             | *number*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `type`                                                                                                 | [operations.DocumentCreateTypeDropdownEnum](../../models/operations/documentcreatetypedropdownenum.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `values`                                                                                               | [operations.DocumentCreateValueDropdown](../../models/operations/documentcreatevaluedropdown.md)[]     | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `defaultValue`                                                                                         | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |