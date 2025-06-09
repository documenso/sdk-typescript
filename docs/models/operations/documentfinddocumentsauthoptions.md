# DocumentFindDocumentsAuthOptions

## Example Usage

```typescript
import { DocumentFindDocumentsAuthOptions } from "@documenso/sdk-typescript/models/operations";

let value: DocumentFindDocumentsAuthOptions = {
  globalAccessAuth: [],
  globalActionAuth: [
    "TWO_FACTOR_AUTH",
  ],
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `globalAccessAuth`                                                                                                     | [operations.DocumentFindDocumentsGlobalAccessAuth](../../models/operations/documentfinddocumentsglobalaccessauth.md)[] | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `globalActionAuth`                                                                                                     | [operations.DocumentFindDocumentsGlobalActionAuth](../../models/operations/documentfinddocumentsglobalactionauth.md)[] | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |