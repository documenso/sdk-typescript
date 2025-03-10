/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { documentsRecipientsCreate } from "../funcs/documentsRecipientsCreate.js";
import { documentsRecipientsCreateMany } from "../funcs/documentsRecipientsCreateMany.js";
import { documentsRecipientsDelete } from "../funcs/documentsRecipientsDelete.js";
import { documentsRecipientsGet } from "../funcs/documentsRecipientsGet.js";
import { documentsRecipientsUpdate } from "../funcs/documentsRecipientsUpdate.js";
import { documentsRecipientsUpdateMany } from "../funcs/documentsRecipientsUpdateMany.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class DocumentsRecipients extends ClientSDK {
  /**
   * Get document recipient
   *
   * @remarks
   * Returns a single recipient. If you want to retrieve all the recipients for a document, use the "Get Document" endpoint.
   */
  async get(
    request: operations.RecipientGetDocumentRecipientRequest,
    options?: RequestOptions,
  ): Promise<operations.RecipientGetDocumentRecipientResponse> {
    return unwrapAsync(documentsRecipientsGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Create document recipient
   *
   * @remarks
   * Create a single recipient for a document.
   */
  async create(
    request: operations.RecipientCreateDocumentRecipientRequest,
    options?: RequestOptions,
  ): Promise<operations.RecipientCreateDocumentRecipientResponse> {
    return unwrapAsync(documentsRecipientsCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Create document recipients
   *
   * @remarks
   * Create multiple recipients for a document.
   */
  async createMany(
    request: operations.RecipientCreateDocumentRecipientsRequest,
    options?: RequestOptions,
  ): Promise<operations.RecipientCreateDocumentRecipientsResponse> {
    return unwrapAsync(documentsRecipientsCreateMany(
      this,
      request,
      options,
    ));
  }

  /**
   * Update document recipient
   *
   * @remarks
   * Update a single recipient for a document.
   */
  async update(
    request: operations.RecipientUpdateDocumentRecipientRequest,
    options?: RequestOptions,
  ): Promise<operations.RecipientUpdateDocumentRecipientResponse> {
    return unwrapAsync(documentsRecipientsUpdate(
      this,
      request,
      options,
    ));
  }

  /**
   * Update document recipients
   *
   * @remarks
   * Update multiple recipients for a document.
   */
  async updateMany(
    request: operations.RecipientUpdateDocumentRecipientsRequest,
    options?: RequestOptions,
  ): Promise<operations.RecipientUpdateDocumentRecipientsResponse> {
    return unwrapAsync(documentsRecipientsUpdateMany(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete document recipient
   */
  async delete(
    request: operations.RecipientDeleteDocumentRecipientRequest,
    options?: RequestOptions,
  ): Promise<operations.RecipientDeleteDocumentRecipientResponse> {
    return unwrapAsync(documentsRecipientsDelete(
      this,
      request,
      options,
    ));
  }
}
