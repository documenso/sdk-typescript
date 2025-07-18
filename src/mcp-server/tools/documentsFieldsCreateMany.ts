/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { documentsFieldsCreateMany } from "../../funcs/documentsFieldsCreateMany.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.FieldCreateDocumentFieldsRequest$inboundSchema,
};

export const tool$documentsFieldsCreateMany: ToolDefinition<typeof args> = {
  name: "documents-fields-create-many",
  description: `Create document fields

Create multiple fields for a document.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await documentsFieldsCreateMany(
      client,
      args.request,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    if (!result.ok) {
      return {
        content: [{ type: "text", text: result.error.message }],
        isError: true,
      };
    }

    const value = result.value;

    return formatResult(value, apiCall);
  },
};
