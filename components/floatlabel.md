# FloatLabel

FloatLabel appears on top of the input field when focused.

## Import

```typescript
import { FloatLabelModule } from 'primeng/floatlabel';
```

## Basic

FloatLabel is used by wrapping the input and its label.

```html
<p-floatlabel>
    <input id="username" pInputText [(ngModel)]="value" />
    <label for="username">Username</label>
</p-floatlabel>
```

## Variants

The variant property defines the position of the label. Default value is over, whereas in and on are the alternatives.

```html
<p-floatlabel variant="in">
    <input pInputText id="in_label" [(ngModel)]="value1" autocomplete="off" />
    <label for="in_label">In Label</label>
</p-floatlabel>

<p-floatlabel variant="on">
    <input pInputText id="on_label" [(ngModel)]="value2" autocomplete="off" />
    <label for="on_label">On Label</label>
</p-floatlabel>
```

## Invalid

When the form element is invalid, the label is also highlighted.

```html
<p-floatlabel>
    <input pInputText id="value1" [(ngModel)]="value1" [invalid]="!value1" autocomplete="off" />
    <label for="value1">Username</label>
</p-floatlabel>

<p-floatlabel variant="in">
    <input pInputText id="value2" [(ngModel)]="value2" [invalid]="!value2" autocomplete="off" />
    <label for="value2">Username</label>
</p-floatlabel>

<p-floatlabel variant="on">
    <input pInputText id="value3" [(ngModel)]="value3" [invalid]="!value3" autocomplete="off" />
    <label for="value3">Username</label>
</p-floatlabel>
```

## Accessibility

FloatLabel does not require any roles and attributes.

## FloatLabel

FloatLabel appears on top of the input field when focused.

---

[View Official Documentation](https://primeng.org/floatlabel)
