# DocumentUpdateAuthOptions

## Example Usage

```typescript
import { DocumentUpdateAuthOptions } from "@documenso/sdk-typescript/models/operations";

let value: DocumentUpdateAuthOptions = {
  globalAccessAuth: [
    "ACCOUNT",
  ],
  globalActionAuth: [
    "PASSWORD",
  ],
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `globalAccessAuth`                                                                                                       | [operations.DocumentUpdateGlobalAccessAuthResponse](../../models/operations/documentupdateglobalaccessauthresponse.md)[] | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `globalActionAuth`                                                                                                       | [operations.DocumentUpdateGlobalActionAuthResponse](../../models/operations/documentupdateglobalactionauthresponse.md)[] | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |