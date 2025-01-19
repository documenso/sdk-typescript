# ErrorBADREQUEST

The error information

## Example Usage

```typescript
import { ErrorBADREQUEST } from "@documenso/sdk-typescript/models/errors";

// No examples available for this model
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            | Example                                                |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `message`                                              | *string*                                               | :heavy_check_mark:                                     | The error message                                      | Invalid input data                                     |
| `code`                                                 | *string*                                               | :heavy_check_mark:                                     | The error code                                         | BAD_REQUEST                                            |
| `issues`                                               | [errors.Issues](../../models/errors/issues.md)[]       | :heavy_minus_sign:                                     | An array of issues that were responsible for the error | []                                                     |