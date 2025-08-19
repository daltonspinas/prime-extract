# Dock

Dock is a navigation component consisting of menuitems.

## Import

```typescript
import { DockModule } from 'primeng/dock';
```

## Basic

Dock requires a collection of menuitems as its model. Default location is bottom and other sides are also available when defined with the position property. Content of the dock component is defined by item template.

```html
<p-dock [model]="items" [position]="position">
    <ng-template #item let-item>
        <img [pTooltip]="item.label" tooltipPosition="top" [src]="item.icon" [alt]="item.label" width="100%" />
    </ng-template>
</p-dock>
```

## Advanced

A mock desktop UI implemented with various components in addition to Dock.

```html
<p-menubar [model]="menubarItems">
    <ng-template #start>
        <i class="pi pi-apple px-2"></i>
    </ng-template>
    <ng-template #end>
        <i class="pi pi-video px-2"></i>
        <i class="pi pi-wifi px-2"></i>
        <i class="pi pi-volume-up px-2"></i>
        <span class="px-2">Fri 13:07</span>
        <i class="pi pi-search px-2"></i>
        <i class="pi pi-bars px-2"></i>
    </ng-template>
</p-menubar>
<div class="dock-window">
    <p-dock [model]="dockItems" position="bottom">
        <ng-template #item let-item>
            <a [pTooltip]="item.label" tooltipPosition="top" class="p-dock-item-link">
                <img [alt]="item.label" [src]="item.icon" style="width: 100%" />
            </a>
        </ng-template>
    </p-dock>

    <p-toast position="top-center" key="tc" />

    <p-dialog
        [(visible)]="displayFinder"
        [breakpoints]="{ '960px': '50vw' }"
        [style]="{ width: '30vw', height: '18rem' }"
        [draggable]="false"
        [resizable]="false"
        header="Finder"
    >
        <p-tree [value]="nodes" />
    </p-dialog>

    <p-dialog
        [maximizable]="true"
        [(visible)]="displayTerminal"
        [breakpoints]="{ '960px': '50vw' }"
        [style]="{ width: '30vw' }"
        [draggable]="false"
        [resizable]="false"
        header="Terminal"
    >
        <p-terminal welcomeMessage="Welcome to PrimeNG (cmd: 'date', 'greet {0}', 'random')" prompt="primeng $" />
    </p-dialog>

    <p-galleria
        [(value)]="images"
        [showThumbnails]="false"
        [showThumbnailNavigators]="false"
        [showItemNavigators]="true"
        [(visible)]="displayGalleria"
        [circular]="true"
        [responsiveOptions]="responsiveOptions"
        [circular]="true"
        [fullScreen]="true"
        [containerStyle]="{ width: '400px' }"
    >
        <ng-template #item let-item>
            <img [src]="item.itemImageSrc" style="width: 100%; display: block;" />
        </ng-template>
    </p-galleria>
```

## Accessibility

Dock component uses the menu role with the aria-orientation and the value to describe the menu can either be provided with aria-labelledby or aria-label props. Each list item has a presentation role whereas anchor elements have a menuitem role with aria-label referring to the label of the item and aria-disabled defined if the item is disabled.

## Dock

Dock is a navigation component consisting of menuitems.

## MenuItem

---

[View Official Documentation](https://primeng.org/dock)
