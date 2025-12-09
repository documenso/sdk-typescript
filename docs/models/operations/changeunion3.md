# ChangeUnion3


## Supported Types

### `operations.ChangeActionAuth`

```typescript
const value: operations.ChangeActionAuth = {
  from: [
    "<value 1>",
    "<value 2>",
  ],
  to: "<value>",
  type: "ACTION_AUTH",
};
```

### `operations.ChangeAccessAuth`

```typescript
const value: operations.ChangeAccessAuth = {
  from: "<value>",
  to: "<value>",
  type: "ACCESS_AUTH",
};
```

### `operations.ChangeName`

```typescript
const value: operations.ChangeName = {
  from: [
    "<value 1>",
    "<value 2>",
  ],
  to: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  type: "NAME",
};
```

### `operations.ChangeRole`

```typescript
const value: operations.ChangeRole = {
  from: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  to: [
    "<value 1>",
    "<value 2>",
  ],
  type: "ROLE",
};
```

### `operations.ChangeEmail`

```typescript
const value: operations.ChangeEmail = {
  from: [],
  to: "<value>",
  type: "EMAIL",
};
```

