# Errorinternalservererror

The error information

## Example Usage

```typescript
import { Errorinternalservererror } from "@documenso/sdk-typescript/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `message`                                                                                        | *string*                                                                                         | :heavy_check_mark:                                                                               | The error message                                                                                | Internal server error                                                                            |
| `code`                                                                                           | *string*                                                                                         | :heavy_check_mark:                                                                               | The error code                                                                                   | INTERNAL_SERVER_ERROR                                                                            |
| `issues`                                                                                         | [errors.ERRORINTERNALSERVERERRORIssues](../../models/errors/errorinternalservererrorissues.md)[] | :heavy_minus_sign:                                                                               | An array of issues that were responsible for the error                                           | []                                                                                               |