/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { documentsFieldsUpdate } from "../../funcs/documentsFieldsUpdate.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.FieldUpdateDocumentFieldRequest$inboundSchema,
};

export const tool$documentsFieldsUpdate: ToolDefinition<typeof args> = {
  name: "documents-fields-update",
  description: `Update document field

Update a single field for a document.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await documentsFieldsUpdate(
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
