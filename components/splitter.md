# Splitter

Splitter is utilized to separate and resize panels.

## Import

```typescript
import { SplitterModule } from 'primeng/splitter';
```

## Horizontal

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

## Size

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

## Vertical

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

## Nested

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

## Accessibility

Splitter bar defines separator as the role with aria-orientation set to either horizontal or vertical.

## Splitter

Splitter is utilized to separate and resize panels.

---

[View Official Documentation](https://primeng.org/splitter)
