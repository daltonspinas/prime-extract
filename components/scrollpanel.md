# ScrollPanel

ScrollPanel is a cross browser, lightweight and skinnable alternative to native browser scrollbar.

## Features

### Import

```typescript
import { ScrollPanelModule } from 'primeng/scrollpanel';
```

### Basic

ScrollPanel is defined using dimensions for the scrollable viewport.

```html
<p-scrollpanel [style]="{ width: '100%', height: '150px' }">
    <p>
        Lorem ipsum dolor sit amet...
    </p>
    <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium...
    </p>
    <p class="m-0">
        At vero eos et accusamus et iusto odio dignissimos...
    </p>
</p-scrollpanel>
```

### Custom

Scrollbar visuals can be styled for a unified look across different platforms.

```html
<p-scrollpanel [style]="{ width: '100%', height: '200px' }" >
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit...
    </p>
    <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium...
    </p>
    <p>
        At vero eos et accusamus et iusto odio dignissimos...
    </p>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit...
    </p>
    <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium...
    </p>
    <p>
        At vero eos et accusamus et iusto odio dignissimos...
    </p>
</p-scrollpanel>
```

### Accessibility

Scrollbars of the ScrollPanel has a scrollbar role along with the aria-controls attribute that refers to the id of the scrollable content container and the aria-orientation to indicate the orientation of scrolling.

### ScrollPanel

ScrollPanel is a cross browser, lightweight and themable alternative to native browser scrollbar.

## API

### ScrollPanel API

API defines helper props, events and others for the PrimeNG ScrollPanel module.

#### ScrollPanel

ScrollPanel is a cross browser, lightweight and themable alternative to native browser scrollbar.

##### Properties

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| styleClass | string | null | Style class of the component. |
| step | number | 5 | Step factor to scroll the content while pressing the arrow keys. |

##### Methods

Defines methods that can be accessed by the component's reference.

| name | parameters | description |
| --- | --- | --- |
| scrollTop | scrollTop :  number | Scrolls the top location to the given value. |
| refresh |  | Refreshes the position and size of the scrollbar. |

##### Templates

Defines the templates used by the component.

| name | parameters | description |
| --- | --- | --- |
| content |  | Defines template option for content. |

---

[View Official Documentation](https://primeng.org/scrollpanel)
