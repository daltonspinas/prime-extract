# PanelMenu

PanelMenu is a hybrid of Accordion and Tree components.

## Import

```typescript
import { PanelMenuModule } from 'primeng/panelmenu';
```

## Basic

PanelMenu requires a collection of menuitems as its model.

```html
<p-panelmenu [model]="items" class="w-full md:w-20rem" />
```

## Multiple

Only one single root menuitem can be active by default, enable multiple property to be able to open more than one items.

```html
<p-panelmenu [model]="items" [style]="{'width':'300px'}" [multiple]="true" />
```

## Controlled

Menu items can be controlled programmatically.

```html
<p-button label="Toggle All" [text]="true" (onClick)="toggleAll()" />
<p-panelmenu [model]="items" class="w-full md:w-80" />
```

## Template

PanelMenu requires a collection of menuitems as its model.

```html
<p-panelmenu [model]="items" class="w-full md:w-80">
    <ng-template #item let-item>
        <a pRipple class="flex items-center px-4 py-2 cursor-pointer group">
            <i [class]="item.icon + ' text-primary group-hover:text-inherit'"></i>
            <span class="ml-2">
                {{ item.label }}
            </span>
            <p-badge *ngIf="item.badge" class="ml-auto" [value]="item.badge" />
            <span *ngIf="item.shortcut" class="ml-auto border border-surface rounded
            bg-emphasis text-muted-color text-xs p-1">
                {{ item.shortcut }}
            </span>
        </a>
    </ng-template>
</p-panelmenu>
```

## Command

The command property defines the callback to run when an item is activated by click or a key event.

```html
<p-toast />
<p-panelmenu [model]="items" class="w-full md:w-80" />
```

## Router

Menu items support navigation via routerLink, programmatic routing using commands, or external URLs.

```html
<p-panelmenu [model]="items" class="w-full md:w-80" />
```

## Accessibility

Accordion header elements have a button role, an aria-label defined using the label property of the menuitem model and aria-controls to define the id of the content section along with aria-expanded for the visibility state.

## PanelMenu

PanelMenu is a hybrid of Accordion and Tree components.

## MenuItem

---

[View Official Documentation](https://primeng.org/panelmenu)
