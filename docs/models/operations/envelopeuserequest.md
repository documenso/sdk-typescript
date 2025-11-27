# EnvelopeUseRequest

## Example Usage

```typescript
import { EnvelopeUseRequest } from "@documenso/sdk-typescript/models/operations";

let value: EnvelopeUseRequest = {
  payload: {
    envelopeId: "<id>",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `payload`                                                                      | [operations.EnvelopeUsePayload](../../models/operations/envelopeusepayload.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `files`                                                                        | [operations.EnvelopeUseFile](../../models/operations/envelopeusefile.md)[]     | :heavy_minus_sign:                                                             | N/A                                                                            |