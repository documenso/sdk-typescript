/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { templatesRecipientsCreate } from "../funcs/templatesRecipientsCreate.js";
import { templatesRecipientsCreateMany } from "../funcs/templatesRecipientsCreateMany.js";
import { templatesRecipientsDelete } from "../funcs/templatesRecipientsDelete.js";
import { templatesRecipientsUpdate } from "../funcs/templatesRecipientsUpdate.js";
import { templatesRecipientsUpdateMany } from "../funcs/templatesRecipientsUpdateMany.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class DocumensoTemplatesRecipients extends ClientSDK {
  /**
   * Create template recipient
   *
   * @remarks
   * Create a single recipient for a template.
   */
  async create(
    request: operations.RecipientCreateTemplateRecipientRequestBody,
    options?: RequestOptions,
  ): Promise<operations.RecipientCreateTemplateRecipientResponseBody> {
    return unwrapAsync(templatesRecipientsCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Create template recipients
   *
   * @remarks
   * Create multiple recipients for a template.
   */
  async createMany(
    request: operations.RecipientCreateTemplateRecipientsRequestBody,
    options?: RequestOptions,
  ): Promise<operations.RecipientCreateTemplateRecipientsResponseBody> {
    return unwrapAsync(templatesRecipientsCreateMany(
      this,
      request,
      options,
    ));
  }

  /**
   * Update template recipient
   *
   * @remarks
   * Update a single recipient for a template.
   */
  async update(
    request: operations.RecipientUpdateTemplateRecipientRequestBody,
    options?: RequestOptions,
  ): Promise<operations.RecipientUpdateTemplateRecipientResponseBody> {
    return unwrapAsync(templatesRecipientsUpdate(
      this,
      request,
      options,
    ));
  }

  /**
   * Update template recipients
   *
   * @remarks
   * Update multiple recipients for a template.
   */
  async updateMany(
    request: operations.RecipientUpdateTemplateRecipientsRequestBody,
    options?: RequestOptions,
  ): Promise<operations.RecipientUpdateTemplateRecipientsResponseBody> {
    return unwrapAsync(templatesRecipientsUpdateMany(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete template recipient
   */
  async delete(
    request: operations.RecipientDeleteTemplateRecipientRequestBody,
    options?: RequestOptions,
  ): Promise<any> {
    return unwrapAsync(templatesRecipientsDelete(
      this,
      request,
      options,
    ));
  }
}
