import type { Documenso } from './index.js';

/** Request types keyed by the OpenAPI operationId used to generate them. */
export interface SdkOperationRequestMap {
  "document-attachment-create": Documenso.documents.CreateAttachmentsRequest;
  "document-attachment-delete": Documenso.documents.DeleteAttachmentsRequest;
  "document-attachment-find": Documenso.documents.FindAttachmentsRequest;
  "document-attachment-update": Documenso.documents.UpdateAttachmentsRequest;
  "document-create": Documenso.CreateDocumentsRequest;
  "document-createDocumentTemporary": Documenso.CreateV0DocumentsRequest;
  "document-delete": Documenso.DeleteDocumentsRequest;
  "document-distribute": Documenso.DistributeDocumentsRequest;
  "document-download": Documenso.DownloadDocumentsRequest;
  "document-downloadBeta": Documenso.DocumentDownloadDocumentRequest;
  "document-duplicate": Documenso.DuplicateDocumentsRequest;
  "document-find": Documenso.FindDocumentsRequest;
  "document-get": Documenso.GetDocumentsRequest;
  "document-getMany": Documenso.DocumentGetManyDocumentRequest;
  "document-redistribute": Documenso.RedistributeDocumentsRequest;
  "document-update": Documenso.UpdateDocumentsRequest;
  "embeddingPresign-createEmbeddingPresignToken": Documenso.EmbeddingPresignCreateEmbeddingPresignTokenEmbeddingRequest;
  "embeddingPresign-verifyEmbeddingPresignToken": Documenso.EmbeddingPresignVerifyEmbeddingPresignTokenEmbeddingRequest;
  "envelope-attachment-create": Documenso.envelopes.CreateAttachmentsRequest;
  "envelope-attachment-delete": Documenso.envelopes.DeleteAttachmentsRequest;
  "envelope-attachment-find": Documenso.envelopes.FindAttachmentsRequest;
  "envelope-attachment-update": Documenso.envelopes.UpdateAttachmentsRequest;
  "envelope-auditLog-downloadPdf": Documenso.EnvelopeAuditLogDownloadPdfEnvelopeRequest;
  "envelope-auditLog-find": Documenso.EnvelopeAuditLogFindEnvelopeRequest;
  "envelope-cancel": Documenso.EnvelopeCancelEnvelopeRequest;
  "envelope-certificate-downloadPdf": Documenso.EnvelopeCertificateDownloadPdfEnvelopeRequest;
  "envelope-create": Documenso.CreateEnvelopesRequest;
  "envelope-delete": Documenso.DeleteEnvelopesRequest;
  "envelope-distribute": Documenso.DistributeEnvelopesRequest;
  "envelope-duplicate": Documenso.DuplicateEnvelopesRequest;
  "envelope-field-createMany": Documenso.envelopes.CreateManyFieldsRequest;
  "envelope-field-delete": Documenso.envelopes.DeleteFieldsRequest;
  "envelope-field-get": Documenso.envelopes.GetFieldsRequest;
  "envelope-field-updateMany": Documenso.envelopes.UpdateManyFieldsRequest;
  "envelope-find": Documenso.EnvelopeFindEnvelopeRequest;
  "envelope-get": Documenso.GetEnvelopesRequest;
  "envelope-getMany": Documenso.EnvelopeGetManyEnvelopeRequest;
  "envelope-item-createMany": Documenso.envelopes.CreateManyItemsRequest;
  "envelope-item-delete": Documenso.envelopes.DeleteItemsRequest;
  "envelope-item-download": Documenso.envelopes.DownloadItemsRequest;
  "envelope-item-updateMany": Documenso.envelopes.UpdateManyItemsRequest;
  "envelope-recipient-createMany": Documenso.envelopes.CreateManyRecipientsRequest;
  "envelope-recipient-delete": Documenso.envelopes.DeleteRecipientsRequest;
  "envelope-recipient-get": Documenso.envelopes.GetRecipientsRequest;
  "envelope-recipient-rejectOnBehalfOf": Documenso.EnvelopeRecipientRejectOnBehalfOfEnvelopeRecipientsRequest;
  "envelope-recipient-updateMany": Documenso.envelopes.UpdateManyRecipientsRequest;
  "envelope-redistribute": Documenso.RedistributeEnvelopesRequest;
  "envelope-update": Documenso.UpdateEnvelopesRequest;
  "envelope-use": Documenso.UseEnvelopesRequest;
  "field-createDocumentField": Documenso.documents.CreateFieldsRequest;
  "field-createDocumentFields": Documenso.documents.CreateManyFieldsRequest;
  "field-createTemplateField": Documenso.templates.CreateFieldsRequest;
  "field-createTemplateFields": Documenso.templates.CreateManyFieldsRequest;
  "field-deleteDocumentField": Documenso.documents.DeleteFieldsRequest;
  "field-deleteTemplateField": Documenso.templates.DeleteFieldsRequest;
  "field-getDocumentField": Documenso.documents.GetFieldsRequest;
  "field-getTemplateField": Documenso.templates.GetFieldsRequest;
  "field-updateDocumentField": Documenso.documents.UpdateFieldsRequest;
  "field-updateDocumentFields": Documenso.documents.UpdateManyFieldsRequest;
  "field-updateTemplateField": Documenso.templates.UpdateFieldsRequest;
  "field-updateTemplateFields": Documenso.templates.UpdateManyFieldsRequest;
  "folder-createFolder": Documenso.CreateFoldersRequest;
  "folder-deleteFolder": Documenso.DeleteFoldersRequest;
  "folder-findFolders": Documenso.FindFoldersRequest;
  "folder-updateFolder": Documenso.UpdateFoldersRequest;
  "recipient-createDocumentRecipient": Documenso.documents.CreateRecipientsRequest;
  "recipient-createDocumentRecipients": Documenso.documents.CreateManyRecipientsRequest;
  "recipient-createTemplateRecipient": Documenso.templates.CreateRecipientsRequest;
  "recipient-createTemplateRecipients": Documenso.templates.CreateManyRecipientsRequest;
  "recipient-deleteDocumentRecipient": Documenso.documents.DeleteRecipientsRequest;
  "recipient-deleteTemplateRecipient": Documenso.templates.DeleteRecipientsRequest;
  "recipient-getDocumentRecipient": Documenso.documents.GetRecipientsRequest;
  "recipient-getTemplateRecipient": Documenso.templates.GetRecipientsRequest;
  "recipient-updateDocumentRecipient": Documenso.documents.UpdateRecipientsRequest;
  "recipient-updateDocumentRecipients": Documenso.documents.UpdateManyRecipientsRequest;
  "recipient-updateTemplateRecipient": Documenso.templates.UpdateRecipientsRequest;
  "recipient-updateTemplateRecipients": Documenso.templates.UpdateManyRecipientsRequest;
  "template-createDocumentFromTemplate": Documenso.UseTemplatesRequest;
  "template-createTemplate": Documenso.CreateTemplatesRequest;
  "template-createTemplateDirectLink": Documenso.templates.CreateDirectLinkRequest;
  "template-createTemplateTemporary": Documenso.TemplateCreateTemplateTemporaryTemplateRequest;
  "template-deleteTemplate": Documenso.DeleteTemplatesRequest;
  "template-deleteTemplateDirectLink": Documenso.templates.DeleteDirectLinkRequest;
  "template-duplicateTemplate": Documenso.DuplicateTemplatesRequest;
  "template-findTemplates": Documenso.FindTemplatesRequest;
  "template-getMany": Documenso.TemplateGetManyTemplateRequest;
  "template-getTemplateById": Documenso.GetTemplatesRequest;
  "template-toggleTemplateDirectLink": Documenso.templates.ToggleDirectLinkRequest;
  "template-updateTemplate": Documenso.UpdateTemplatesRequest;
}

/** Query-only projections of generated SDK request types. */
export interface SdkOperationQueryMap {
  "document-attachment-find": Pick<Documenso.documents.FindAttachmentsRequest, Extract<"documentId", keyof Documenso.documents.FindAttachmentsRequest>>;
  "document-download": Pick<Documenso.DownloadDocumentsRequest, Extract<"version", keyof Documenso.DownloadDocumentsRequest>>;
  "document-downloadBeta": Pick<Documenso.DocumentDownloadDocumentRequest, Extract<"version", keyof Documenso.DocumentDownloadDocumentRequest>>;
  "document-find": Pick<Documenso.FindDocumentsRequest, Extract<"query" | "page" | "perPage" | "templateId" | "source" | "status" | "hasExpiredRecipients" | "folderId" | "orderByColumn" | "orderByDirection", keyof Documenso.FindDocumentsRequest>>;
  "envelope-attachment-find": Pick<Documenso.envelopes.FindAttachmentsRequest, Extract<"envelopeId" | "token", keyof Documenso.envelopes.FindAttachmentsRequest>>;
  "envelope-auditLog-find": Pick<Documenso.EnvelopeAuditLogFindEnvelopeRequest, Extract<"page" | "perPage" | "orderByColumn" | "orderByDirection", keyof Documenso.EnvelopeAuditLogFindEnvelopeRequest>>;
  "envelope-find": Pick<Documenso.EnvelopeFindEnvelopeRequest, Extract<"query" | "page" | "perPage" | "type" | "templateId" | "source" | "status" | "hasExpiredRecipients" | "folderId" | "orderByColumn" | "orderByDirection", keyof Documenso.EnvelopeFindEnvelopeRequest>>;
  "envelope-item-download": Pick<Documenso.envelopes.DownloadItemsRequest, Extract<"version", keyof Documenso.envelopes.DownloadItemsRequest>>;
  "folder-findFolders": Pick<Documenso.FindFoldersRequest, Extract<"query" | "page" | "perPage" | "parentId" | "type", keyof Documenso.FindFoldersRequest>>;
  "template-findTemplates": Pick<Documenso.FindTemplatesRequest, Extract<"query" | "page" | "perPage" | "type" | "folderId", keyof Documenso.FindTemplatesRequest>>;
}

export type SdkOperationId = keyof SdkOperationRequestMap;
export type SdkQueryOperationId = keyof SdkOperationQueryMap;

export type SdkRequest<OperationId extends SdkOperationId> =
  SdkOperationRequestMap[OperationId];

export type SdkQuery<OperationId extends SdkQueryOperationId> =
  SdkOperationQueryMap[OperationId];

