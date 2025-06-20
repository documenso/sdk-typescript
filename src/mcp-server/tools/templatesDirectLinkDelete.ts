/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { templatesDirectLinkDelete } from "../../funcs/templatesDirectLinkDelete.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.TemplateDeleteTemplateDirectLinkRequest$inboundSchema,
};

export const tool$templatesDirectLinkDelete: ToolDefinition<typeof args> = {
  name: "templates-direct-link-delete",
  description: `Delete direct link

Delete a direct link for a template`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await templatesDirectLinkDelete(
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
