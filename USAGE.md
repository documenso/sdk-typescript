<!-- Start SDK Example Usage [usage] -->
```typescript
import { Documenso } from "@documenso/sdk-typescript";

const documenso = new Documenso({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function run() {
  const result = await documenso.documents.find({
    orderByDirection: "desc",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->