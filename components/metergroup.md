# MeterGroup

MeterGroup displays scalar measurements within a known range.

## Import

```typescript
import { MeterGroupModule } from 'primeng/metergroup';
```

## Basic

MeterGroup requires a value as the data to display where each item in the collection should be a type of MeterItem.

```html
<p-metergroup [value]="value" />
```

## Multiple

Adding more items to the array displays the meters in a group.

```html
<p-metergroup [value]="value" />
```

## Icon

Icons can be displayed next to the labels instead of the default marker.

```html
<p-metergroup [value]="value" />
```

## Label

The position of the labels relative to the meters is defined using the labelPosition property. The default orientation of the labels is horizontal, and the vertical alternative is available through the labelOrientation option.

```html
<p-metergroup [value]="value" labelPosition="start" labelOrientation="vertical" />
```

## Vertical

Layout of the MeterGroup is configured with the orientation property that accepts either horizontal or vertical as available options.

```html
<p-metergroup [value]="value" orientation="vertical" labelOrientation="vertical" [style]="{ height: '300px' }" />
```

## Min Max

Boundaries are configured with the min and max values whose defaults are 0 and 100 respectively.

```html
<p-metergroup [value]="value" [max]="200" />
```

## Template

MeterGroup provides templating support for labels, meter items, and content around the meters.

```html
<p-metergroup [value]="value" labelPosition="start">
    <ng-template #label>
        <div class="flex flex-wrap gap-4">
            <ng-container *ngFor="let meterItem of value; let index = index">
                <p-card class="flex-1" styleClass="border border-surface shadow-none">
                    <div class="flex justify-between gap-8">
                        <div class="flex flex-col gap-1">
                            <span class="text-surface-500 dark:text-surface-400 text-sm">{{ meterItem.label }}</span>
                            <span class="font-bold text-lg">{{ meterItem.value }}%</span>
                        </div>
                        <span class="w-8 h-8 rounded-full inline-flex justify-center items-center text-center" [style]="{ 'background-color': meterItem.color1, color: '#ffffff' }">
                            <i [class]="meterItem.icon"></i>
                        </span>
                    </div>
                </p-card>
            </ng-container>
        </div>
    </ng-template>
    <ng-template #meter let-value let-class="class" let-width="size">
        <span [class]="class" [style]="{ background: 'linear-gradient(to right, ' + value.color1 + ', ' + value.color2 + ')', width: width }"></span>
    </ng-template>
    <ng-template #start let-totalPercent="totalPercent">
        <div class="flex justify-between mt-4 mb-2 relative">
            <span>Storage</span>
            <span [style]="{ width: totalPercent + '%' }" class="absolute text-right">{{ totalPercent }}%</span>
            <span class="font-medium">1TB</span>
        </div>
    </ng-template>
    <ng-template #end>
        <div class="flex justify-between mt-4">
            <p-button label="Manage Storage" [outlined]="true" size="small" />
            <p-button label="Update Plan" size="small" />
        </div>
    </ng-template>
</p-metergroup>
```

## Accessibility

MeterGroup component uses meter role in addition to the aria-valuemin, aria-valuemax and aria-valuenow attributes. Value to describe the component can be defined using aria-labelledby prop.

## MeterGroup

MeterGroup displays scalar measurements within a known range.

---

[View Official Documentation](https://primeng.org/metergroup)
