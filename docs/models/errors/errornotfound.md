# ErrorNOTFOUND

The error information

## Example Usage

```typescript
import { ErrorNOTFOUND } from "@documenso/sdk-typescript/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `message`                                                                  | *string*                                                                   | :heavy_check_mark:                                                         | The error message                                                          | Not found                                                                  |
| `code`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | The error code                                                             | NOT_FOUND                                                                  |
| `issues`                                                                   | [errors.ErrorNOTFOUNDIssues](../../models/errors/errornotfoundissues.md)[] | :heavy_minus_sign:                                                         | An array of issues that were responsible for the error                     | []                                                                         |