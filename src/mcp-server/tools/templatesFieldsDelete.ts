/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { templatesFieldsDelete } from "../../funcs/templatesFieldsDelete.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.FieldDeleteTemplateFieldRequest$inboundSchema,
};

export const tool$templatesFieldsDelete: ToolDefinition<typeof args> = {
  name: "templates-fields-delete",
  description: `Delete template field`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await templatesFieldsDelete(
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
