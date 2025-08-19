# Tooltip

Tooltip directive provides advisory information for a component. Tooltip is integrated within various PrimeNG components.

## Import

```typescript
import { TooltipModule } from 'primeng/tooltip';
```

## Position

Position of the tooltip is specified using tooltipPosition attribute. Valid values are top, bottom, right and left. Default position of the tooltip is right.

```html
<input type="text" pInputText pTooltip="Enter your username" tooltipPosition="right" placeholder="Right" />
<input type="text" pInputText pTooltip="Enter your username" tooltipPosition="top" placeholder="Top" />
<input type="text" pInputText pTooltip="Enter your username" tooltipPosition="bottom" placeholder="Bottom" />
<input type="text" pInputText pTooltip="Enter your username" tooltipPosition="left" placeholder="Left" />
```

## Event

Tooltip gets displayed on hover event of its target by default, other option is the focus event to display and blur to hide.

```html
<input type="text" pInputText pTooltip="Enter your username" tooltipEvent="focus" placeholder="focus to display tooltip" />
```

## Auto Hide

Tooltip is hidden when mouse leaves the target element, in cases where tooltip needs to be interacted with, set autoHide to false to change the default behavior.

```html
<input type="text" pInputText pTooltip="Enter your username" [autoHide]="false" placeholder="autoHide: false" />
<input type="text" pInputText pTooltip="Enter your username" placeholder="autoHide: true" />
```

## Delay

Adding delays to the show and hide events are defined with showDelay and hideDelay options respectively.

```html
<p-button pTooltip="Confirm to proceed" showDelay="1000" hideDelay="300" label="Save" />
```

## Custom

Tooltip can use either a string or a TemplateRef.

```html
<p-button [pTooltip]="tooltipContent" severity="secondary" tooltipPosition="bottom" label="Button" />
<ng-template #tooltipContent>
    <div class="flex items-center">
        <svg width="31" height="33" viewBox="0 0 31 33" fill="none" xmlns="http://www.w3.org/2000/svg" class="mr-2">
            <path
                d="..."
                fill="var(--p-primary-color)"
            />
        </svg>
        <span> <b>PrimeNG</b> rocks! </span>
    </div>
</ng-template>
```

## Tooltip Options

Tooltip is also configurable by using tooltipOptions property.

```html
<input type="text" pInputText pTooltip="Enter your username" [tooltipOptions]="tooltipOptions" placeholder="hover to display tooltip" />
```

## Accessibility

Tooltip component uses tooltip role and when it becomes visible the generated id of the tooltip is defined as the aria-describedby of the target.

## Tooltip

Tooltip directive provides advisory information for a component.

## TooltipOptions

---

[View Official Documentation](https://primeng.org/tooltip)
