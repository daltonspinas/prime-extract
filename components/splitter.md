# Splitter

Splitter is utilized to separate and resize panels.

## Features

### Import

```typescript
import { SplitterModule } from 'primeng/splitter';
```

### Horizontal

Splitter requires two SplitterPanel components as children which are displayed horizontally by default.

```html
<p-splitter [style]="{ height: '300px' }" class="mb-8">
    <ng-template #panel>
        <div class="flex items-center justify-center h-full">Panel 1</div>
    </ng-template>
    <ng-template #panel>
        <div class="flex items-center justify-center h-full">Panel 2</div>
    </ng-template>
</p-splitter>
```

### Size

When no panelSizes are defined, panels are split 50/50, use the panelSizes property to give relative widths e.g. [25, 75].

```html
<p-splitter [panelSizes]="[25, 75]" [style]="{ height: '300px' }" class="mb-8">
    <ng-template #panel>
        <div class="flex items-center justify-center h-full">Panel 1</div>
    </ng-template>
    <ng-template #panel>
        <div class="flex items-center justify-center h-full">Panel 2</div>
    </ng-template>
</p-splitter>
```

### Vertical

Panels are displayed as stacked by setting the layout to vertical.

```html
<p-splitter [style]="{ height: '300px' }" class="mb-8" layout="vertical">
    <ng-template #panel>
        <div class="flex items-center justify-center h-full">Panel 1</div>
    </ng-template>
    <ng-template #panel>
        <div class="flex items-center justify-center h-full">Panel 2</div>
    </ng-template>
</p-splitter>
```

### Nested

Splitters can be combined to create advanced layouts.

```html
<p-splitter [style]="{ height: '300px' }" [panelSizes]="[20, 80]" [minSizes]="[10, 0]" class="mb-8">
    <ng-template #panel>
        <div class="col flex w-full items-center justify-center">Panel 1</div>
    </ng-template>
    <ng-template #panel>
        <p-splitter layout="vertical" [panelSizes]="[50, 50]">
            <ng-template #panel>
                <div style="flex-grow: 1;" class="flex items-center justify-center">Panel 2</div>
            </ng-template>
            <ng-template #panel>
                <p-splitter [panelSizes]="[20, 80]">
                    <ng-template #panel>
                        <div class="col h-full flex items-center justify-center">Panel 3</div>
                    </ng-template>
                    <ng-template #panel>
                        <div class="col h-full flex items-center justify-center">Panel 4</div>
                    </ng-template>
                </p-splitter>
            </ng-template>
        </p-splitter>
    </ng-template>
</p-splitter>
```

### Accessibility

Splitter bar defines separator as the role with aria-orientation set to either horizontal or vertical.

### Splitter

Splitter is utilized to separate and resize panels.

## API

### Splitter API

API defines helper props, events and others for the PrimeNG Splitter module.

#### Splitter

Splitter is utilized to separate and resize panels.

##### Properties

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| styleClass | string | null | Style class of the component. |
| panelStyleClass | string | null | Style class of the panel. |
| panelStyle | { [klass: string]: any } | null | Inline style of the panel. |
| stateStorage | string | session | Defines where a stateful splitter keeps its state, valid values are 'session' for sessionStorage and 'local' for localStorage. |
| stateKey | string | null | Storage identifier of a stateful Splitter. |
| layout | string | horizontal | Orientation of the panels. Valid values are 'horizontal' and 'vertical'. |
| gutterSize | number | 4 | Size of the divider in pixels. |
| step | number | 5 | Step factor to increment/decrement the size of the panels while pressing the arrow keys. |
| minSizes | number[] | [] | Minimum size of the elements relative to 100%. |
| panelSizes | number[] | null | Size of the elements relative to 100%. |

##### Emitters

Defines emit that determine the behavior of the component based on a given condition or report the actions that the component takes.

| name | parameters | description |
| --- | --- | --- |
| onResizeEnd | event :  SplitterResizeEndEvent | Callback to invoke when resize ends. |
| onResizeStart | event :  SplitterResizeStartEvent | Callback to invoke when resize starts. |

---

[View Official Documentation](https://primeng.org/splitter)
