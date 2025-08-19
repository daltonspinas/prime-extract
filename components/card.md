# Card

Card is a flexible container component.

## Import

```typescript
import { CardModule } from 'primeng/card';
```

## Basic

A simple Card is created with a header property along with the content as children.

```html
<p-card header="Simple Card">
    <p class="m-0">
        Lorem ipsum dolor sit amet...
    </p>
</p-card>
```

## Advanced

Card content can be customized further with subHeader, header and footer properties.

```html
<p-card [style]="{ width: '25rem', overflow: 'hidden' }">
    <ng-template #header>
        <img alt="Card" class="w-full" src="https://primefaces.org/cdn/primeng/images/card-ng.jpg" />
    </ng-template>
    <ng-template #title> Advanced Card </ng-template>
    <ng-template #subtitle> Card subtitle </ng-template>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
        quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
    </p>
    <ng-template #footer>
        <div class="flex gap-4 mt-1">
            <p-button label="Cancel" severity="secondary" class="w-full" [outlined]="true" styleClass="w-full" />
            <p-button label="Save" class="w-full" styleClass="w-full" />
        </div>
    </ng-template>
</p-card>
```

## Accessibility

A card can be utilized in many use cases as a result no role is enforced, in fact a role may not be necessary if the card is used for presentational purposes only. Any valid attribute is passed to the container element so if you require to use one of the landmark roles like region, you may use the role property.

```html
<p-card role="region">
    Content
</p-card>
```

## Card

Card is a flexible container component.

---

[View Official Documentation](https://primeng.org/card)
