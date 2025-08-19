# Menubar

Menubar is a horizontal menu component.

## Import

```typescript
import { MenubarModule } from 'primeng/menubar';
```

## Basic

Menubar requires nested menuitems as its model.

```html
<p-menubar [model]="items" />
```

## Template

Custom content can be placed inside the menubar using the start and end templates.

```html
<p-menubar [model]="items">
    <ng-template #start>
        <svg width="33" height="35" viewBox="0 0 33 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="..." fill="var(--primary-color)" />
        </svg>
    </ng-template>
    <ng-template #item let-item let-root="root">
        <a pRipple class="flex items-center p-menubar-item-link">
            <span>{{ item.label }}</span>
            <p-badge *ngIf="item.badge" [ngClass]="{ 'ml-auto': !root, 'ml-2': root }" [value]="item.badge" />
            <span *ngIf="item.shortcut" class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">{{ item.shortcut }}</span>
            <i *ngIf="item.items" [ngClass]="['ml-auto pi', root ? 'pi-angle-down' : 'pi-angle-right']"></i>
        </a>
    </ng-template>
    <ng-template #end>
        <div class="flex items-center gap-2">
            <input type="text" pInputText placeholder="Search" class="w-36" />
            <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" shape="circle" />
        </div>
    </ng-template>
</p-menubar>
```

## Command

The command property defines the callback to run when an item is activated by click or a key event.

```html
<p-toast />
<p-menubar [model]="items" />
```

## Router

Menu items support navigation via routerLink, programmatic routing using commands, or external URLs.

```html
<p-menubar [model]="items" />
```

## Accessibility

Menubar component uses the menubar role and the value to describe the menu can either be provided with aria-labelledby or aria-label props. Each list item has a presentation role whereas anchor elements have a menuitem role with aria-label referring to the label of the item and aria-disabled defined if the item is disabled. A submenu within a MenuBar uses the menu role with an aria-labelledby defined as the id of the submenu root menuitem label. In addition, menuitems that open a submenu have aria-haspopup, aria-expanded and aria-controls to define the relation between the item and the submenu.

## Menubar

Menubar is a horizontal menu component.

## MenuItem

---

[View Official Documentation](https://primeng.org/menubar)
