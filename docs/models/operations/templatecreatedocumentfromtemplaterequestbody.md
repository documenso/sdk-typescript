# TemplateCreateDocumentFromTemplateRequestBody

## Example Usage

```typescript
import { TemplateCreateDocumentFromTemplateRequestBody } from "@documenso/sdk-typescript/models/operations";

let value: TemplateCreateDocumentFromTemplateRequestBody = {
  templateId: 3830.66,
  recipients: [
    {
      id: 3931.22,
      email: "Shannon.Becker11@yahoo.com",
    },
  ],
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `templateId`                                                                                                                         | *number*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `recipients`                                                                                                                         | [operations.TemplateCreateDocumentFromTemplateRecipients](../../models/operations/templatecreatedocumentfromtemplaterecipients.md)[] | :heavy_check_mark:                                                                                                                   | The information of the recipients to create the document with.                                                                       |
| `distributeDocument`                                                                                                                 | *boolean*                                                                                                                            | :heavy_minus_sign:                                                                                                                   | Whether to create the document as pending and distribute it to recipients.                                                           |
| `customDocumentDataId`                                                                                                               | *string*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | The data ID of an alternative PDF to use when creating the document. If not provided, the PDF attached to the template will be used. |