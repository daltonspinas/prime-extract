# Fieldset

Fieldset is a grouping component with a content toggle feature.

## Import

```typescript
import { FieldsetModule } from 'primeng/fieldset';
```

## Basic

A simple Fieldset is created with a legend property along with the content as children.

```html
<p-fieldset legend="Header">
    <p class="m-0">
        Lorem ipsum dolor sit amet...
    </p>
</p-fieldset>
```

## Toggleable

Content of the fieldset can be expanded and collapsed using toggleable option, default state is defined with collapsed option.

```html
<p-fieldset legend="Header" [toggleable]="true">
    <p>
        Lorem ipsum dolor sit amet...
    </p>
</p-fieldset>
```

## Template

Header section can also be defined with custom content instead of primitive values.

```html
<p-fieldset>
    <ng-template #header>
        <div class="flex items-center gap-2 px-2">
            <p-avatar
                image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png"
                shape="circle" />
            <span class="font-bold">Amy Elsner</span>
        </div>
    </ng-template>
    <p class="m-0">
        Lorem ipsum dolor sit amet...
    </p>
</p-fieldset>
```

## Accessibility

Fieldset component uses the semantic fieldset element. When toggleable option is enabled, a clickable element with button role is included inside the legend element, this button has aria-controls to define the id of the content section along with aria-expanded for the visibility state. The value to read the button defaults to the value of the legend property and can be customized by defining an aria-label or aria-labelledby via the toggleButtonProps property.

## Fieldset

Fieldset is a grouping component with the optional content toggle feature.

---

[View Official Documentation](https://primeng.org/fieldset)
