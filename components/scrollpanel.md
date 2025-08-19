# ScrollPanel

ScrollPanel is a cross browser, lightweight and skinnable alternative to native browser scrollbar.

## Import

```typescript
import { ScrollPanelModule } from 'primeng/scrollpanel';
```

## Basic

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

## Custom

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

## Accessibility

Scrollbars of the ScrollPanel has a scrollbar role along with the aria-controls attribute that refers to the id of the scrollable content container and the aria-orientation to indicate the orientation of scrolling.

## ScrollPanel

ScrollPanel is a cross browser, lightweight and themable alternative to native browser scrollbar.

---

[View Official Documentation](https://primeng.org/scrollpanel)
