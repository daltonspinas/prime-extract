# TieredMenu

TieredMenu displays submenus in nested overlays.

## Import

```typescript
import { TieredMenuModule } from 'primeng/tieredmenu';
```

## Basic

TieredMenu requires a collection of menuitems as its model.

```html
<p-tieredmenu [model]="items" />
```

## Popup

Popup mode is enabled by adding popup property and calling toggle method with an event of the target.

```html
<p-button label="Toggle" (click)="menu.toggle($event)" />
<p-tieredmenu #menu [model]="items" [popup]="true" />
```

## Template

TieredMenu offers item customization with the item template that receives the menuitem instance from the model as a parameter.

```html
<p-tieredMenu [model]="items">
    <ng-template #item let-item let-hasSubmenu="hasSubmenu">
        <a pRipple class="flex items-center p-tieredmenu-item-link">
            <span [class]="item.icon" class="p-tieredmenu-item-icon"></span>
            <span class="ml-2">{{ item.label }}</span>
            <p-badge *ngIf="item.badge" class="ml-auto" [value]="item.badge" />
            <span *ngIf="item.shortcut" class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">
                {{ item.shortcut }}
            </span>
            <i *ngIf="hasSubmenu" class="pi pi-angle-right ml-auto"></i>
        </a>
    </ng-template>
</p-tieredMenu>
```

## Command

The command property defines the callback to run when an item is activated by click or a key event.

```html
<p-toast/>
<p-tieredmenu [model]="items" />
```

## Router

Menu items support navigation via routerLink, programmatic routing using commands, or external URLs.

```html
<p-tieredmenu [model]="items" />
```

## Accessibility

TieredMenu component uses the menubar role with aria-orientation set to "vertical" and the value to describe the menu can either be provided with aria-labelledby or aria-label props. Each list item has a presentation role whereas anchor elements have a menuitem role with aria-label referring to the label of the item and aria-disabled defined if the item is disabled. A submenu within a TieredMenu uses the menu role with an aria-labelledby defined as the id of the submenu root menuitem label. In addition, menuitems that open a submenu have aria-haspopup, aria-expanded and aria-controls to define the relation between the item and the submenu.

## TieredMenu

TieredMenu displays submenus in nested overlays.

## MenuItem

---

[View Official Documentation](https://primeng.org/tieredmenu)
