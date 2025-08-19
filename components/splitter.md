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

## Theming

### Splitter Theming

#### CSS Classes

List of class names used in the styled mode.

| class | description |
| --- | --- |
| p-splitter | Class name of the root element |
| p-splitter-gutter | Class name of the gutter element |
| p-splitter-gutter-handle | Class name of the gutter handle element |

#### Splitter Design Tokens

List of design tokens used in a preset.

| name | token | variable | description |
| --- | --- | --- | --- |
| splitter.root.background | splitter.background | --p-splitter-background | Background of root |
| splitter.root.borderColor | splitter.border.color | --p-splitter-border-color | Border color of root |
| splitter.root.color | splitter.color | --p-splitter-color | Color of root |
| splitter.root.transitionDuration | splitter.transition.duration | --p-splitter-transition-duration | Transition duration of root |
| splitter.gutter.background | splitter.gutter.background | --p-splitter-gutter-background | Background of gutter |
| splitter.handle.size | splitter.handle.size | --p-splitter-handle-size | Size of handle |
| splitter.handle.background | splitter.handle.background | --p-splitter-handle-background | Background of handle |
| splitter.handle.borderRadius | splitter.handle.border.radius | --p-splitter-handle-border-radius | Border radius of handle |
| splitter.handle.focusRing.width | splitter.handle.focus.ring.width | --p-splitter-handle-focus-ring-width | Focus ring width of handle |
| splitter.handle.focusRing.style | splitter.handle.focus.ring.style | --p-splitter-handle-focus-ring-style | Focus ring style of handle |
| splitter.handle.focusRing.color | splitter.handle.focus.ring.color | --p-splitter-handle-focus-ring-color | Focus ring color of handle |
| splitter.handle.focusRing.offset | splitter.handle.focus.ring.offset | --p-splitter-handle-focus-ring-offset | Focus ring offset of handle |
| splitter.handle.focusRing.shadow | splitter.handle.focus.ring.shadow | --p-splitter-handle-focus-ring-shadow | Focus ring shadow of handle |

#### Built-in Presets

PrimeNG offers various preset options that allow you to customize the component's styling to match your application's design system. Below you'll find links to the implementation and type definitions for each preset.

| Preset | Implementation | Types |
| --- | --- | --- |
| Aura | Aura | Aura |
| Lara | Lara | Lara |
| Nora | Nora | Nora |
| Material | Material | Material |

---

[View Official Documentation](https://primeng.org/splitter)
