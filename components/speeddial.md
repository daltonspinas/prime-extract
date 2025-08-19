# Speed Dial

SpeedDial is a floating button with a popup menu.

## Import

```typescript
import { SpeedDialModule } from 'primeng/speeddial';
```

## Linear

SpeedDial items are defined with the model property based on MenuModel API. Default orientation of the items is linear and direction property is used to define the position of the items related to the button.

```html
<p-speeddial [model]="items" direction="up" [style]="{ position: 'absolute', left: 'calc(50% - 2rem)', bottom: 0 }" />
<p-speeddial [model]="items" direction="down" [style]="{ position: 'absolute', left: 'calc(50% - 2rem)', top: 0 }" />
<p-speeddial [model]="items" direction="left" [style]="{ position: 'absolute', top: 'calc(50% - 2rem)', right: 0 }" />
<p-speeddial [model]="items" direction="right" [style]="{ position: 'absolute', top: 'calc(50% - 2rem)', left: 0 }" />
```

## Circle

Items can be displayed around the button when type is set to circle. Additional radius property defines the radius of the circle.

```html
<p-speeddial [model]="items" [radius]="80" type="circle" [style]="{ position: 'absolute' }" [buttonProps]="{ severity: 'warn', rounded: true }" />
```

## Semi Circle

When type is defined as semi-circle, items are displayed in a half-circle around the button.

```html
<p-speeddial [model]="items" [radius]="80" type="semi-circle" direction="down" [style]="{ position: 'absolute', left: 'calc(50% - 2rem)', top: 0 }" />
<p-speeddial [model]="items" [radius]="80" type="semi-circle" direction="right" [style]="{ position: 'absolute', top: 'calc(50% - 2rem)', left: 0 }" />
<p-speeddial [model]="items" [radius]="80" type="semi-circle" direction="left" [style]="{ position: 'absolute', top: 'calc(50% - 2rem)', right: 0 }" />
<p-speeddial [model]="items" [radius]="80" type="semi-circle" direction="up" [style]="{ position: 'absolute', left: 'calc(50% - 2rem)', bottom: 0 }" />
```

## Quarter Circle

When type is defined as quarter-circle, items are displayed in a half-circle around the button.

```html
<p-speeddial [model]="items" [radius]="120" type="quarter-circle" direction="up-left" [style]="{ position: 'absolute', right: 0, bottom: 0 }" />
<p-speeddial [model]="items" [radius]="120" type="quarter-circle" direction="up-right" [style]="{ position: 'absolute', left: 0, bottom: 0 }" />
<p-speeddial [model]="items" [radius]="120" type="quarter-circle" direction="down-left" [style]="{ position: 'absolute', right: 0, top: 0 }" />
<p-speeddial [model]="items" [radius]="120" type="quarter-circle" direction="down-right" [style]="{ position: 'absolute', left: 0, top: 0 }" />
```

## Tooltip

Items display a tooltip on hover when a standalone Tooltip is present with a target that matches the items.

```html
<p-speeddial [model]="items" direction="up" [style]="{ position: 'absolute', right: 0, bottom: 0 }" [buttonProps]="{ severity: 'help', rounded: true }" [tooltipOptions]="{ tooltipPosition: 'left' }" />
<p-speeddial [model]="items" direction="up" [style]="{ position: 'absolute', left: 0, bottom: 0 }" [buttonProps]="{ severity: 'danger', rounded: true }" [tooltipOptions]="{ tooltipPosition: 'right' }" />
```

## Mask

Adding mask property displays a modal layer behind the popup items.

```html
<p-speeddial [model]="items" direction="up" mask [style]="{ position: 'absolute', right: '1rem', bottom: '1rem' }" />
```

## Template

SpeedDial offers item customization with the item template that receives the menuitem instance from the model as a parameter. The button has its own button template, additional template named icon is provided to embed icon content for default button.

```html
<p-speeddial [model]="items" direction="up" [transitionDelay]="80" style="position: 'absolute'">
    <ng-template #button let-toggleCallback="toggleCallback">
        <p-button outlined styleClass="border" (click)="toggleCallback($event)">
            <svg width="31" height="33" viewBox="0 0 31 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="..." fill="var(--p-primary-color)" />
            </svg>
        </p-button>
    </ng-template>
    <ng-template #item let-item let-toggleCallback="toggleCallback">
        <div
            class="flex flex-col items-center justify-between gap-2 p-2 border rounded border-surface-200 dark:border-surface-700 w-20 cursor-pointer"
            (click)="toggleCallback($event, item)"
        >
            <span [class]="item.icon"></span>
            <span>
                {{ item.label }}
            </span>
        </div>
    </ng-template>
</p-speeddial>
```

## Accessibility

SpeedDial component renders a native button element that implicitly includes any passed prop. Text to describe the button can be defined with the aria-labelledby or aria-label props. Addititonally the button includes includes aria-haspopup, aria-expanded for states along with aria-controls to define the relation between the popup and the button.

```html
<p-speeddial aria-label="Options" />
```

## SpeedDial

When pressed, a floating action button can display multiple primary actions that can be performed on a page.

---

[View Official Documentation](https://primeng.org/speeddial)
