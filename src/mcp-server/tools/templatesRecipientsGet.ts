/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { templatesRecipientsGet } from "../../funcs/templatesRecipientsGet.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.RecipientGetTemplateRecipientRequest$inboundSchema,
};

export const tool$templatesRecipientsGet: ToolDefinition<typeof args> = {
  name: "templates-recipients_get",
  description: `Get template recipient

Returns a single recipient. If you want to retrieve all the recipients for a template, use the "Get Template" endpoint.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await templatesRecipientsGet(
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
