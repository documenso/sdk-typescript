# TemplateCreateDocumentFromTemplateRequest

## Example Usage

```typescript
import { TemplateCreateDocumentFromTemplateRequest } from "@documenso/sdk-typescript/models/operations";

let value: TemplateCreateDocumentFromTemplateRequest = {
  templateId: 2041.44,
  recipients: [
    {
      id: 2552.64,
      email: "Cooper_Schowalter11@hotmail.com",
    },
  ],
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `templateId`                                                                                                                                       | *number*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `recipients`                                                                                                                                       | [operations.TemplateCreateDocumentFromTemplateRequestRecipients](../../models/operations/templatecreatedocumentfromtemplaterequestrecipients.md)[] | :heavy_check_mark:                                                                                                                                 | The information of the recipients to create the document with.                                                                                     |
| `distributeDocument`                                                                                                                               | *boolean*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                 | Whether to create the document as pending and distribute it to recipients.                                                                         |
| `customDocumentDataId`                                                                                                                             | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The data ID of an alternative PDF to use when creating the document. If not provided, the PDF attached to the template will be used.               |
| `prefillFields`                                                                                                                                    | *operations.PrefillFields*[]                                                                                                                       | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |