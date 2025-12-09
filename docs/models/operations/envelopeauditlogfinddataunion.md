# EnvelopeAuditLogFindDataUnion


## Supported Types

### `operations.DataEnvelopeItemCreated`

```typescript
const value: operations.DataEnvelopeItemCreated = {
  type: "ENVELOPE_ITEM_CREATED",
  data: {
    envelopeItemId: "<id>",
    envelopeItemTitle: "<value>",
  },
  id: "<id>",
  createdAt: "1732799650517",
  envelopeId: "<id>",
};
```

### `operations.DataEnvelopeItemDeleted`

```typescript
const value: operations.DataEnvelopeItemDeleted = {
  type: "ENVELOPE_ITEM_DELETED",
  data: {
    envelopeItemId: "<id>",
    envelopeItemTitle: "<value>",
  },
  id: "<id>",
  createdAt: "1714267258181",
  envelopeId: "<id>",
};
```

### `operations.DataEmailSent`

```typescript
const value: operations.DataEmailSent = {
  type: "EMAIL_SENT",
  data: {
    recipientEmail: "<value>",
    recipientName: "<value>",
    recipientId: 9335.74,
    recipientRole: "<value>",
    emailType: "DOCUMENT_COMPLETED",
    isResending: false,
  },
  id: "<id>",
  createdAt: "1722472983744",
  envelopeId: "<id>",
};
```

### `operations.DataDocumentCompleted`

```typescript
const value: operations.DataDocumentCompleted = {
  type: "DOCUMENT_COMPLETED",
  data: {
    transactionId: "<id>",
  },
  id: "<id>",
  createdAt: "1704807485774",
  envelopeId: "<id>",
};
```

### `operations.DataDocumentCreated`

```typescript
const value: operations.DataDocumentCreated = {
  type: "DOCUMENT_CREATED",
  data: {
    title: "<value>",
  },
  id: "<id>",
  createdAt: "1723455760622",
  envelopeId: "<id>",
};
```

### `operations.DataDocumentDeleted`

```typescript
const value: operations.DataDocumentDeleted = {
  type: "DOCUMENT_DELETED",
  data: {
    type: "SOFT",
  },
  id: "<id>",
  createdAt: "1732875357516",
  envelopeId: "<id>",
};
```

### `operations.DataDocumentMovedToTeam`

```typescript
const value: operations.DataDocumentMovedToTeam = {
  type: "DOCUMENT_MOVED_TO_TEAM",
  data: {
    movedByUserId: 1024.84,
    fromPersonalAccount: false,
    toTeamId: 1253.92,
  },
  id: "<id>",
  createdAt: "1730643952717",
  envelopeId: "<id>",
};
```

### `operations.DataDocumentFieldsAutoInserted`

```typescript
const value: operations.DataDocumentFieldsAutoInserted = {
  type: "DOCUMENT_FIELDS_AUTO_INSERTED",
  data: {
    fields: [],
  },
  id: "<id>",
  createdAt: "1710168454304",
  envelopeId: "<id>",
};
```

### `operations.DataDocumentFieldInserted`

```typescript
const value: operations.DataDocumentFieldInserted = {
  type: "DOCUMENT_FIELD_INSERTED",
  data: {
    recipientEmail: "<value>",
    recipientName: "<value>",
    recipientId: 7303.8,
    recipientRole: "<value>",
    fieldId: "<id>",
    field: {
      type: "TEXT",
      data: "<value>",
    },
  },
  id: "<id>",
  createdAt: "1732535991035",
  envelopeId: "<id>",
};
```

### `operations.DataDocumentFieldUninserted`

```typescript
const value: operations.DataDocumentFieldUninserted = {
  type: "DOCUMENT_FIELD_UNINSERTED",
  data: {
    field: "NUMBER",
    fieldId: "<id>",
  },
  id: "<id>",
  createdAt: "1729973476448",
  envelopeId: "<id>",
};
```

### `operations.DataDocumentFieldPrefilled`

```typescript
const value: operations.DataDocumentFieldPrefilled = {
  type: "DOCUMENT_FIELD_PREFILLED",
  data: {
    recipientEmail: "<value>",
    recipientName: "<value>",
    recipientId: 5485.48,
    recipientRole: "<value>",
    fieldId: "<id>",
    field: {
      type: "FREE_SIGNATURE",
      data: "<value>",
    },
  },
  id: "<id>",
  createdAt: "1721369507607",
  envelopeId: "<id>",
};
```

### `operations.DataDocumentVisibilityUpdated`

```typescript
const value: operations.DataDocumentVisibilityUpdated = {
  type: "DOCUMENT_VISIBILITY_UPDATED",
  data: {
    from: [],
    to: "<value>",
  },
  id: "<id>",
  createdAt: "1708980001607",
  envelopeId: "<id>",
};
```

### `operations.DataDocumentGlobalAuthAccessUpdated`

```typescript
const value: operations.DataDocumentGlobalAuthAccessUpdated = {
  type: "DOCUMENT_GLOBAL_AUTH_ACCESS_UPDATED",
  data: {
    from: "<value>",
    to: "<value>",
  },
  id: "<id>",
  createdAt: "1708608430714",
  envelopeId: "<id>",
};
```

### `operations.DataDocumentGlobalAuthActionUpdated`

```typescript
const value: operations.DataDocumentGlobalAuthActionUpdated = {
  type: "DOCUMENT_GLOBAL_AUTH_ACTION_UPDATED",
  data: {
    from: "<value>",
    to: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  id: "<id>",
  createdAt: "1715129532490",
  envelopeId: "<id>",
};
```

### `operations.DataDocumentMetaUpdated`

```typescript
const value: operations.DataDocumentMetaUpdated = {
  type: "DOCUMENT_META_UPDATED",
  data: {
    changes: [
      {
        type: "MESSAGE",
        from: "<value>",
        to: "<value>",
      },
    ],
  },
  id: "<id>",
  createdAt: "1714906633579",
  envelopeId: "<id>",
};
```

### `operations.DataDocumentOpened`

```typescript
const value: operations.DataDocumentOpened = {
  type: "DOCUMENT_OPENED",
  data: {
    recipientEmail: "<value>",
    recipientName: "<value>",
    recipientId: 4561.6,
    recipientRole: "<value>",
    accessAuth: [],
  },
  id: "<id>",
  createdAt: "1725596441917",
  envelopeId: "<id>",
};
```

### `operations.DataDocumentViewed`

```typescript
const value: operations.DataDocumentViewed = {
  type: "DOCUMENT_VIEWED",
  data: {
    recipientEmail: "<value>",
    recipientName: "<value>",
    recipientId: 1341.02,
    recipientRole: "<value>",
    accessAuth: [
      "TWO_FACTOR_AUTH",
    ],
  },
  id: "<id>",
  createdAt: "1727002097674",
  envelopeId: "<id>",
};
```

### `operations.DataDocumentRecipientCompleted`

```typescript
const value: operations.DataDocumentRecipientCompleted = {
  type: "DOCUMENT_RECIPIENT_COMPLETED",
  data: {
    recipientEmail: "<value>",
    recipientName: "<value>",
    recipientId: 9099.79,
    recipientRole: "<value>",
    actionAuth: [
      "ACCOUNT",
    ],
  },
  id: "<id>",
  createdAt: "1716992419397",
  envelopeId: "<id>",
};
```

### `operations.DataDocumentRecipientRejected`

```typescript
const value: operations.DataDocumentRecipientRejected = {
  type: "DOCUMENT_RECIPIENT_REJECTED",
  data: {
    recipientEmail: "<value>",
    recipientName: "<value>",
    recipientId: 3696.06,
    recipientRole: "<value>",
    reason: "<value>",
  },
  id: "<id>",
  createdAt: "1720791669913",
  envelopeId: "<id>",
};
```

### `operations.DataDocumentAccessAuth2FaRequested`

```typescript
const value: operations.DataDocumentAccessAuth2FaRequested = {
  type: "DOCUMENT_ACCESS_AUTH_2FA_REQUESTED",
  data: {
    recipientEmail: "<value>",
    recipientName: "<value>",
    recipientId: 6159.81,
  },
  id: "<id>",
  createdAt: "1714122946944",
  envelopeId: "<id>",
};
```

### `operations.DataDocumentAccessAuth2FaValidated`

```typescript
const value: operations.DataDocumentAccessAuth2FaValidated = {
  type: "DOCUMENT_ACCESS_AUTH_2FA_VALIDATED",
  data: {
    recipientEmail: "<value>",
    recipientName: "<value>",
    recipientId: 8526.25,
  },
  id: "<id>",
  createdAt: "1711125735668",
  envelopeId: "<id>",
};
```

### `operations.DataDocumentAccessAuth2FaFailed`

```typescript
const value: operations.DataDocumentAccessAuth2FaFailed = {
  type: "DOCUMENT_ACCESS_AUTH_2FA_FAILED",
  data: {
    recipientEmail: "<value>",
    recipientName: "<value>",
    recipientId: 7510,
  },
  id: "<id>",
  createdAt: "1725395099170",
  envelopeId: "<id>",
};
```

### `operations.DataDocumentSent`

```typescript
const value: operations.DataDocumentSent = {
  type: "DOCUMENT_SENT",
  data: {},
  id: "<id>",
  createdAt: "1728759998897",
  envelopeId: "<id>",
};
```

### `operations.DataDocumentTitleUpdated`

```typescript
const value: operations.DataDocumentTitleUpdated = {
  type: "DOCUMENT_TITLE_UPDATED",
  data: {
    from: "<value>",
    to: "<value>",
  },
  id: "<id>",
  createdAt: "1709229531213",
  envelopeId: "<id>",
};
```

### `operations.DataDocumentExternalIDUpdated`

```typescript
const value: operations.DataDocumentExternalIDUpdated = {
  type: "DOCUMENT_EXTERNAL_ID_UPDATED",
  data: {},
  id: "<id>",
  createdAt: "1704866446295",
  envelopeId: "<id>",
};
```

### `operations.DataFieldCreated`

```typescript
const value: operations.DataFieldCreated = {
  type: "FIELD_CREATED",
  data: {
    fieldId: "<id>",
    fieldRecipientEmail: "<value>",
    fieldRecipientId: 4889.96,
    fieldType: "<value>",
  },
  id: "<id>",
  createdAt: "1706199669497",
  envelopeId: "<id>",
};
```

### `operations.DataFieldDeleted`

```typescript
const value: operations.DataFieldDeleted = {
  type: "FIELD_DELETED",
  data: {
    fieldId: "<id>",
    fieldRecipientEmail: "<value>",
    fieldRecipientId: 4251.72,
    fieldType: "<value>",
  },
  id: "<id>",
  createdAt: "1704631234204",
  envelopeId: "<id>",
};
```

### `operations.DataFieldUpdated`

```typescript
const value: operations.DataFieldUpdated = {
  type: "FIELD_UPDATED",
  data: {
    fieldId: "<id>",
    fieldRecipientEmail: "<value>",
    fieldRecipientId: 9060.75,
    fieldType: "<value>",
    changes: [
      {
        type: "POSITION",
        from: {
          page: 6349.45,
          positionX: 9065.35,
          positionY: 5207.41,
        },
        to: {
          page: 3540.14,
          positionX: 9008.77,
          positionY: 3467.71,
        },
      },
    ],
  },
  id: "<id>",
  createdAt: "1730089775773",
  envelopeId: "<id>",
};
```

### `operations.DataRecipientCreated`

```typescript
const value: operations.DataRecipientCreated = {
  type: "RECIPIENT_CREATED",
  data: {
    recipientEmail: "<value>",
    recipientName: "<value>",
    recipientId: 1294.34,
    recipientRole: "<value>",
    accessAuth: [],
    actionAuth: [],
  },
  id: "<id>",
  createdAt: "1720544124674",
  envelopeId: "<id>",
};
```

### `operations.DataRecipientUpdated`

```typescript
const value: operations.DataRecipientUpdated = {
  type: "RECIPIENT_UPDATED",
  data: {
    recipientEmail: "<value>",
    recipientName: "<value>",
    recipientId: 8193.29,
    recipientRole: "<value>",
    changes: [
      {
        from: "<value>",
        to: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
        type: "ROLE",
      },
    ],
  },
  id: "<id>",
  createdAt: "1734709983419",
  envelopeId: "<id>",
};
```

### `operations.DataRecipientDeleted`

```typescript
const value: operations.DataRecipientDeleted = {
  type: "RECIPIENT_DELETED",
  data: {
    recipientEmail: "<value>",
    recipientName: "<value>",
    recipientId: 206.74,
    recipientRole: "<value>",
  },
  id: "<id>",
  createdAt: "1735362176071",
  envelopeId: "<id>",
};
```

