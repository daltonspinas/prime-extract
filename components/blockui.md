# BlockUI

BlockUI can either block other components or the whole page.

## Import

```typescript
import { BlockUIModule } from 'primeng/blockui';
```

## Basic

The element to block should be placed as a child of BlockUI and blocked property is required to control the state.

```html
<p-button label="Block" (click)="blockedPanel = true" />
<p-button label="Unblock" (click)="blockedPanel = false" />
<p-blockui [target]="pnl" [blocked]="blockedPanel" />
<p-panel #pnl header="Header" class="mt-6">
    <p class="m-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit...
    </p>
</p-panel>
```

## Document

If the target element is not specified, BlockUI blocks the document by default.

```html
<p-blockui [blocked]="blockedDocument" />
```

## Accessibility

BlockUI manages aria-busy state attribute when the UI gets blocked and unblocked. Any valid attribute is passed to the root element so additional attributes like role and aria-live can be used to define live regions.

## BlockUI

BlockUI can either block other components or the whole page.

---

[View Official Documentation](https://primeng.org/blockui)
