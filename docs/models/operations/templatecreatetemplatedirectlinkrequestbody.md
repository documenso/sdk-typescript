# TemplateCreateTemplateDirectLinkRequestBody

## Example Usage

```typescript
import { TemplateCreateTemplateDirectLinkRequestBody } from "@documenso/sdk-typescript/models/operations";

let value: TemplateCreateTemplateDirectLinkRequestBody = {
  templateId: 351.07,
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `templateId`                                                                                                    | *number*                                                                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `directRecipientId`                                                                                             | *number*                                                                                                        | :heavy_minus_sign:                                                                                              | The of the recipient in the current template to transform into the primary recipient when the template is used. |