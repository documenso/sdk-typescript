# DocumentCreateDocumentFormDataAuthOptions

## Example Usage

```typescript
import { DocumentCreateDocumentFormDataAuthOptions } from "@documenso/sdk-typescript/models/operations";

let value: DocumentCreateDocumentFormDataAuthOptions = {
  globalAccessAuth: [
    "TWO_FACTOR_AUTH",
  ],
  globalActionAuth: [
    "PASSKEY",
  ],
};
```

## Fields

| Field                                                                                                                                                    | Type                                                                                                                                                     | Required                                                                                                                                                 | Description                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `globalAccessAuth`                                                                                                                                       | [operations.DocumentCreateDocumentFormDataGlobalAccessAuthResponse](../../models/operations/documentcreatedocumentformdataglobalaccessauthresponse.md)[] | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `globalActionAuth`                                                                                                                                       | [operations.DocumentCreateDocumentFormDataGlobalActionAuthResponse](../../models/operations/documentcreatedocumentformdataglobalactionauthresponse.md)[] | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |