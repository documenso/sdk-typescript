/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { templatesRecipientsCreate } from "../funcs/templatesRecipientsCreate.js";
import { templatesRecipientsCreateMany } from "../funcs/templatesRecipientsCreateMany.js";
import { templatesRecipientsDelete } from "../funcs/templatesRecipientsDelete.js";
import { templatesRecipientsGet } from "../funcs/templatesRecipientsGet.js";
import { templatesRecipientsUpdate } from "../funcs/templatesRecipientsUpdate.js";
import { templatesRecipientsUpdateMany } from "../funcs/templatesRecipientsUpdateMany.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class TemplatesRecipients extends ClientSDK {
  /**
   * Get template recipient
   *
   * @remarks
   * Returns a single recipient. If you want to retrieve all the recipients for a template, use the "Get Template" endpoint.
   */
  async get(
    request: operations.RecipientGetTemplateRecipientRequest,
    options?: RequestOptions,
  ): Promise<operations.RecipientGetTemplateRecipientResponse> {
    return unwrapAsync(templatesRecipientsGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Create template recipient
   *
   * @remarks
   * Create a single recipient for a template.
   */
  async create(
    request: operations.RecipientCreateTemplateRecipientRequest,
    options?: RequestOptions,
  ): Promise<operations.RecipientCreateTemplateRecipientResponse> {
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
    request: operations.RecipientCreateTemplateRecipientsRequest,
    options?: RequestOptions,
  ): Promise<operations.RecipientCreateTemplateRecipientsResponse> {
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
    request: operations.RecipientUpdateTemplateRecipientRequest,
    options?: RequestOptions,
  ): Promise<operations.RecipientUpdateTemplateRecipientResponse> {
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
    request: operations.RecipientUpdateTemplateRecipientsRequest,
    options?: RequestOptions,
  ): Promise<operations.RecipientUpdateTemplateRecipientsResponse> {
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
    request: operations.RecipientDeleteTemplateRecipientRequest,
    options?: RequestOptions,
  ): Promise<operations.RecipientDeleteTemplateRecipientResponse> {
    return unwrapAsync(templatesRecipientsDelete(
      this,
      request,
      options,
    ));
  }
}
