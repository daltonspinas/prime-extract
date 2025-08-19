# ScrollTop

ScrollTop gets displayed after a certain scroll position and used to navigates to the top of the page quickly.

## Import

```typescript
import { ScrollTopModule } from 'primeng/scrolltop';
```

## Basic

ScrollTop listens window scroll by default.

```html
<p-scrolltop />
```

## Target Element

Setting the target property to parent binds ScrollTop to its parent element that has scrolling content.

```html
<p-scrolltop target="parent" [threshold]="100" icon="pi pi-arrow-up" [buttonProps]="{ severity: 'contrast', raised: true, rounded: true }" />
```

## Accessibility

ScrollTop uses a button element with an aria-label that refers to the aria.scrollTop property of the locale API by default, you may use your own aria roles and attributes as any valid attribute is passed to the button element implicitly.

## ScrollTop

ScrollTop gets displayed after a certain scroll position and used to navigates to the top of the page quickly.

---

[View Official Documentation](https://primeng.org/scrolltop)
