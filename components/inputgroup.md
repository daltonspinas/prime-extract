# InputGroup

Text, icon, buttons and other content can be grouped next to an input.

## Features

### Import

```typescript
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
```

### Basic

A group is created by wrapping the input and add-ons with the p-inputgroup component. Each add-on element is defined as a child of p-inputgroup-addon component.

```html
<p-inputgroup>
    <p-inputgroup-addon>
        <i class="pi pi-user"></i>
    </p-inputgroup-addon>
    <input pInputText [(ngModel)]="text1" placeholder="Username" />
</p-inputgroup>

<p-inputgroup>
    <p-inputgroup-addon>$</p-inputgroup-addon>
    <p-inputnumber [(ngModel)]="number" placeholder="Price" />
    <p-inputgroup-addon>.00</p-inputgroup-addon>
</p-inputgroup>

<p-inputgroup>
    <p-inputgroup-addon>www</p-inputgroup-addon>
    <input pInputText  [(ngModel)]="text2" placeholder="Website" />
</p-inputgroup>

<p-inputgroup>
    <p-inputgroup-addon>
        <i class="pi pi-map"></i>
    </p-inputgroup-addon>
    <p-select [(ngModel)]="selectedCity" [options]="cities" optionLabel="name" placeholder="City" />
</p-inputgroup>
```

### Multiple

Multiple add-ons can be placed inside the same group.

```html
<p-inputgroup class="w-full md:!w-[30rem]">
    <p-inputgroup-addon>
        <i class="pi pi-clock"></i>
    </p-inputgroup-addon>
    <p-inputgroup-addon>
        <i class="pi pi-star-fill"></i>
    </p-inputgroup-addon>
    <input type="text" pInputText placeholder="Price" />
    <p-inputgroup-addon>$</p-inputgroup-addon>
    <p-inputgroup-addon>.00</p-inputgroup-addon>
</p-inputgroup>
```

### Button

Buttons can be placed at either side of an input element.

```html
<p-inputgroup>
    <p-button label="Search" />
    <input pInputText placeholder="Keyword" />
</p-inputgroup>

<p-inputgroup>
    <input pInputText placeholder="Keyword" />
    <p-inputgroup-addon>
        <p-button icon="pi pi-search" severity="secondary" variant="text" (click)="menu.toggle($event)" />
    </p-inputgroup-addon>
</p-inputgroup>
<p-menu #menu [model]="items" popup styleClass="!min-w-fit" />

<p-inputgroup>
    <p-inputgroup-addon>
        <p-button icon="pi pi-check" severity="secondary" />
    </p-inputgroup-addon>
    <input pInputText placeholder="Vote" />
    <p-inputgroup-addon>
        <p-button icon="pi pi-times" severity="secondary" />
    </p-inputgroup-addon>
</p-inputgroup>
```

### Checkbox & Radio

Checkbox and RadioButton components can be combined with an input element under the same group.

```html
<p-inputgroup>
    <input type="text" pInputText placeholder="Price" />
    <p-inputgroup-addon>
        <p-radiobutton [(ngModel)]="radioValue1" name="rb1" value="rb1"/>
    </p-inputgroup-addon>
</p-inputgroup>

<p-inputgroup>
    <p-inputgroup-addon><p-checkbox [(ngModel)]="checked1" [binary]="true"/></p-inputgroup-addon>
    <input type="text" pInputText placeholder="Username" />
</p-inputgroup>

<p-inputgroup>
    <p-inputgroup-addon><p-checkbox [(ngModel)]="checked2" [binary]="true"/></p-inputgroup-addon>
    <input type="text" pInputText placeholder="Website" />
    <p-inputgroup-addon><p-radiobutton name="rb2" value="rb2" [(ngModel)]="category"/></p-inputgroup-addon>
</p-inputgroup>
```

### Float Label

FloatLabel visually integrates a label with its form element. Visit FloatLabel documentation for more information.

```html
<p-inputgroup>
    <p-inputgroup-addon>
        <i class="pi pi-user"></i>
    </p-inputgroup-addon>
    <p-floatlabel>
        <input pInputText id="over_label" [(ngModel)]="value1" />
        <label for="over_label">Over Label</label>
    </p-floatlabel>
</p-inputgroup>

<p-inputgroup>
    <p-inputgroup-addon>$</p-inputgroup-addon>
    <p-floatlabel variant="in">
        <input pInputText id="in_label" [(ngModel)]="value2" />
        <label for="in_label">In Label</label>
    </p-floatlabel>
    <p-inputgroup-addon>.00</p-inputgroup-addon>
</p-inputgroup>

<p-inputgroup>
    <p-inputgroup-addon>www</p-inputgroup-addon>
    <p-floatlabel variant="on">
        <input pInputText id="on_label" [(ngModel)]="value3" />
        <label for="on_label">On Label</label>
    </p-floatlabel>
</p-inputgroup>
```

### Ifta Label

IftaLabel is used to create infield top aligned labels. Visit IftaLabel documentation for more information.

```html
<p-inputgroup class="md:!w-80">
    <p-inputgroup-addon>
        <i class="pi pi-shopping-cart"></i>
    </p-inputgroup-addon>
    <p-iftalabel>
        <p-inputnumber [(ngModel)]="value" inputId="price" mode="currency" currency="USD" locale="en-US" />
        <label for="price">Price</label>
    </p-iftalabel>
</p-inputgroup>
```

### Accessibility

InputGroup and InputGroupAddon does not require any roles and attributes.

---

[View Official Documentation](https://primeng.org/inputgroup)
