# EnvelopeCreateRequest

## Example Usage

```typescript
import { EnvelopeCreateRequest } from "@documenso/sdk-typescript/models/operations";

let value: EnvelopeCreateRequest = {
  payload: {
    title: "<value>",
    type: "DOCUMENT",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `payload`                                                                            | [operations.EnvelopeCreatePayload](../../models/operations/envelopecreatepayload.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `files`                                                                              | [operations.EnvelopeCreateFile](../../models/operations/envelopecreatefile.md)[]     | :heavy_minus_sign:                                                                   | N/A                                                                                  |