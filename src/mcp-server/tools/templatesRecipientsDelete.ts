/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { templatesRecipientsDelete } from "../../funcs/templatesRecipientsDelete.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.RecipientDeleteTemplateRecipientRequest$inboundSchema,
};

export const tool$templatesRecipientsDelete: ToolDefinition<typeof args> = {
  name: "templates-recipients_delete",
  description: `Delete template recipient`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await templatesRecipientsDelete(
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
