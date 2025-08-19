# Breadcrumb

Breadcrumb provides contextual information about page hierarchy.

## Import

```typescript
import { BreadcrumbModule } from 'primeng/breadcrumb';
```

## Basic

Breadcrumb provides contextual information about page hierarchy.

```html
<p-breadcrumb [model]="items" [home]="home" />
```

## Template

Custom content can be placed inside the items using the item template. The divider between the items has its own separator template.

```html
<p-breadcrumb [model]="items" [home]="home">
    <ng-template #item let-item>
        <a class="cursor-pointer" [routerLink]="item.url">
            <i [class]="item.icon"></i>
        </a>
    </ng-template>
    <ng-template #separator> / </ng-template>
</p-breadcrumb>
```

## Router

Menu items support navigation via routerLink, programmatic routing using commands, or external URLs.

```html
<p-breadcrumb [home]="home" [model]="items" />
```

## Accessibility

Breadcrumb uses the nav element and since any attribute is passed to the root implicitly aria-labelledby or aria-label can be used to describe the component. Inside an ordered list is used where the list item separators have aria-hidden to be able to ignored by the screen readers. If the last link represents the current route, aria-current is added with "page" as the value.

## Breadcrumb

Breadcrumb provides contextual information about page hierarchy.

## MenuItem

---

[View Official Documentation](https://primeng.org/breadcrumb)
