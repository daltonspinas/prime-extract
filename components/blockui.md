# BlockUI

BlockUI can either block other components or the whole page.

## Features

### Import

```typescript
import { BlockUIModule } from 'primeng/blockui';
```

### Basic

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

### Document

If the target element is not specified, BlockUI blocks the document by default.

```html
<p-blockui [blocked]="blockedDocument" />
```

### Accessibility

BlockUI manages aria-busy state attribute when the UI gets blocked and unblocked. Any valid attribute is passed to the root element so additional attributes like role and aria-live can be used to define live regions.

### BlockUI

BlockUI can either block other components or the whole page.

## API

### BlockUI API

API defines helper props, events and others for the PrimeNG BlockUI module.

#### BlockUI

BlockUI can either block other components or the whole page.

##### Properties

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| target | any | null | Name of the local ng-template variable referring to another component. |
| autoZIndex | boolean | true | Whether to automatically manage layering. |
| baseZIndex | number | 0 | Base zIndex value to use in layering. |
| styleClass | string | null | Class of the element. |
| blocked | boolean | null | Current blocked state as a boolean. |

##### Templates

Defines the templates used by the component.

| name | parameters | description |
| --- | --- | --- |
| content |  | template of the content |

---

[View Official Documentation](https://primeng.org/blockui)
