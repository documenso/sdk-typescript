# DocumentDropdown

## Example Usage

```typescript
import { DocumentDropdown } from "@documenso/sdk-typescript/models/operations";

let value: DocumentDropdown = {
  type: "dropdown",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `label`                                                                                  | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `placeholder`                                                                            | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `required`                                                                               | *boolean*                                                                                | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `readOnly`                                                                               | *boolean*                                                                                | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `type`                                                                                   | [operations.DocumentTypeDropdown](../../models/operations/documenttypedropdown.md)       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `values`                                                                                 | [operations.DocumentValuesDropdown](../../models/operations/documentvaluesdropdown.md)[] | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `defaultValue`                                                                           | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |