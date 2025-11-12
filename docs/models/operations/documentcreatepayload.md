# DocumentCreatePayload

## Example Usage

```typescript
import { DocumentCreatePayload } from "@documenso/sdk-typescript/models/operations";

let value: DocumentCreatePayload = {
  title: "<value>",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `title`                                                                                      | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `timezone`                                                                                   | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `folderId`                                                                                   | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `attachments`                                                                                | [operations.DocumentCreateAttachment](../../models/operations/documentcreateattachment.md)[] | :heavy_minus_sign:                                                                           | N/A                                                                                          |