# grays

Turn your site gray and automatically cancel it at a certain time

# Instal

```shell
pnpm i grays

#or

npm i grays

#or

yarn add grays
```

# Basic Used

```typescript
import { grays } from "grays";

grays();
```

# Custom Graysale

```typescript
import { grays } from "grays";

grays("html", 60);
```

# Immediate (Default behavior)

```typescript
import { grays } from "grays";

grays("html", 99, {
  immediate: true,
});
```

# Automatic expiration on Immediate

```typescript
import { grays } from "grays";

grays("html", 99, {
  expire: new Date(2022, 11, 1).getTime() // Expires automatically after "2022-12-1
  immediate: true,
});
```

# Custom ClassName

```typescript
import { grays } from "grays";

grays("html", 99, {
  className: "grays-for",
});
```

# API

```typescript
import { grays } from "grays";

const { cancel, apply } = grays();
```
