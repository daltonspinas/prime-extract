# Panel

Panel is a container component with an optional content toggle feature.

## Import

```typescript
import { PanelModule } from 'primeng/panel';
```

## Basic

A simple Panel is created with a header property along with the content as children.

```html
<p-panel header="Header">
    <p class="m-0">
        Lorem ipsum dolor sit amet...
    </p>
</p-panel>
```

## Toggleable

Content of the panel can be expanded and collapsed using toggleable option, default state is defined with collapsed option. By default, toggle icon is used to toggle the contents whereas setting toggler to "header" enables clicking anywhere in the header to trigger a toggle.

```html
<p-panel header="Header" [toggleable]="true">
    <p class="m-0">
        Lorem ipsum dolor sit amet...
    </p>
</p-panel>
```

## Template

Header and Footers sections can be customized using header and footer templates.

```html
<p-panel [toggleable]="true">
    <ng-template #header>
        <div class="flex items-center gap-2">
            <p-avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
            <span class="font-bold">Amy Elsner</span>
        </div>
    </ng-template>
    <ng-template #footer>
        <div class="flex flex-wrap items-center justify-between gap-4">
            <div class="flex items-center gap-2">
                <p-button icon="pi pi-user" rounded text></p-button>
                <p-button icon="pi pi-bookmark" severity="secondary" rounded text></p-button>
            </div>
            <span class="text-surface-500 dark:text-surface-400">Updated 2 hours ago</span>
        </div>
    </ng-template>
    <ng-template #icons>
        <p-button icon="pi pi-cog" severity="secondary" rounded text (click)="menu.toggle($event)" />
        <p-menu #menu id="config_menu" [model]="items" [popup]="true" />
    </ng-template>
    <p class="m-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
        aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
</p-panel>
```

## Accessibility

Toggleable panels use a content toggle button at the header that has aria-controls to define the id of the content section along with aria-expanded for the visibility state. The value to read the button defaults to the value of the header property and can be customized by defining an aria-label or aria-labelledby via the toggleButtonProps property.

## Panel

Panel is a container with the optional content toggle feature.

---

[View Official Documentation](https://primeng.org/panel)
