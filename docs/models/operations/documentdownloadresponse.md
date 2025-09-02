# DocumentDownloadResponse

Successful response

## Example Usage

```typescript
import { DocumentDownloadResponse } from "@documenso/sdk-typescript/models/operations";

let value: DocumentDownloadResponse = {
  downloadUrl: "https://whopping-edge.biz",
  filename: "example.file",
  contentType: "<value>",
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `downloadUrl`                               | *string*                                    | :heavy_check_mark:                          | Pre-signed URL for downloading the PDF file |
| `filename`                                  | *string*                                    | :heavy_check_mark:                          | The filename of the PDF file                |
| `contentType`                               | *string*                                    | :heavy_check_mark:                          | MIME type of the file                       |