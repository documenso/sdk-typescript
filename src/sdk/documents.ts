/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { documentsCreateV0 } from "../funcs/documentsCreateV0.js";
import { documentsDelete } from "../funcs/documentsDelete.js";
import { documentsDistribute } from "../funcs/documentsDistribute.js";
import { documentsDuplicate } from "../funcs/documentsDuplicate.js";
import { documentsFind } from "../funcs/documentsFind.js";
import { documentsGet } from "../funcs/documentsGet.js";
import { documentsMoveToTeam } from "../funcs/documentsMoveToTeam.js";
import { documentsRedistribute } from "../funcs/documentsRedistribute.js";
import { documentsUpdate } from "../funcs/documentsUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { Fields } from "./fields.js";
import { Recipients } from "./recipients.js";

export class Documents extends ClientSDK {
  private _fields?: Fields;
  get fields(): Fields {
    return (this._fields ??= new Fields(this._options));
  }

  private _recipients?: Recipients;
  get recipients(): Recipients {
    return (this._recipients ??= new Recipients(this._options));
  }

  /**
   * Find documents
   *
   * @remarks
   * Find documents based on a search criteria
   */
  async find(
    request: operations.DocumentFindDocumentsRequest,
    options?: RequestOptions,
  ): Promise<operations.DocumentFindDocumentsResponseBody> {
    return unwrapAsync(documentsFind(
      this,
      request,
      options,
    ));
  }

  /**
   * Get document
   *
   * @remarks
   * Returns a document given an ID
   */
  async get(
    request: operations.DocumentGetDocumentWithDetailsByIdRequest,
    options?: RequestOptions,
  ): Promise<operations.DocumentGetDocumentWithDetailsByIdResponseBody> {
    return unwrapAsync(documentsGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Create document
   *
   * @remarks
   * You will need to upload the PDF to the provided URL returned. Note: Once V2 API is released, this will be removed since we will allow direct uploads, instead of using an upload URL.
   */
  async createV0(
    request: operations.DocumentCreateDocumentTemporaryRequestBody,
    options?: RequestOptions,
  ): Promise<operations.DocumentCreateDocumentTemporaryResponseBody> {
    return unwrapAsync(documentsCreateV0(
      this,
      request,
      options,
    ));
  }

  /**
   * Update document
   */
  async update(
    request: operations.DocumentSetSettingsForDocumentRequestBody,
    options?: RequestOptions,
  ): Promise<operations.DocumentSetSettingsForDocumentResponseBody> {
    return unwrapAsync(documentsUpdate(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete document
   */
  async delete(
    request: operations.DocumentDeleteDocumentRequestBody,
    options?: RequestOptions,
  ): Promise<operations.DocumentDeleteDocumentResponseBody> {
    return unwrapAsync(documentsDelete(
      this,
      request,
      options,
    ));
  }

  /**
   * Move document
   *
   * @remarks
   * Move a document from your personal account to a team
   */
  async moveToTeam(
    request: operations.DocumentMoveDocumentToTeamRequestBody,
    options?: RequestOptions,
  ): Promise<operations.DocumentMoveDocumentToTeamResponseBody> {
    return unwrapAsync(documentsMoveToTeam(
      this,
      request,
      options,
    ));
  }

  /**
   * Distribute document
   *
   * @remarks
   * Send the document out to recipients based on your distribution method
   */
  async distribute(
    request: operations.DocumentSendDocumentRequestBody,
    options?: RequestOptions,
  ): Promise<operations.DocumentSendDocumentResponseBody> {
    return unwrapAsync(documentsDistribute(
      this,
      request,
      options,
    ));
  }

  /**
   * Redistribute document
   *
   * @remarks
   * Redistribute the document to the provided recipients who have not actioned the document. Will use the distribution method set in the document
   */
  async redistribute(
    request: operations.DocumentResendDocumentRequestBody,
    options?: RequestOptions,
  ): Promise<operations.DocumentResendDocumentResponseBody> {
    return unwrapAsync(documentsRedistribute(
      this,
      request,
      options,
    ));
  }

  /**
   * Duplicate document
   */
  async duplicate(
    request: operations.DocumentDuplicateDocumentRequestBody,
    options?: RequestOptions,
  ): Promise<operations.DocumentDuplicateDocumentResponseBody> {
    return unwrapAsync(documentsDuplicate(
      this,
      request,
      options,
    ));
  }
}
