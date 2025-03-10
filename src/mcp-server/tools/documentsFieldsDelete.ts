/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { documentsFieldsDelete } from "../../funcs/documentsFieldsDelete.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.FieldDeleteDocumentFieldRequest$inboundSchema,
};

export const tool$documentsFieldsDelete: ToolDefinition<typeof args> = {
  name: "documents-fields_delete",
  description: `Delete document field`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await documentsFieldsDelete(
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
