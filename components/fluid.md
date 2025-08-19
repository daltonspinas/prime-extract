# Fluid

Fluid is a layout component to make descendant components span full width of their container.

## Features

### Import

```typescript
import { FluidModule } from 'primeng/fluid';
```

### Basic

Components with the fluid option like InputText have the ability to span the full width of their component. Enabling the fluid for each component individually may be cumbersome so wrap the content with Fluid to instead for an easier alternative.

```html
<div>
    <label for="non-fluid" class="font-bold mb-2 block">Non-Fluid</label>
    <input type="text" pInputText id="non-fluid" />
</div>
<div>
    <label for="fluid" class="font-bold mb-2 block">Fluid Prop</label>
    <input type="text" pInputText id="fluid" fluid />
</div>
<p-fluid>
    <span class="font-bold mb-2 block">Fluid Container</span>
    <div class="grid grid-cols-2 gap-4">
        <div><input type="text" pInputText /></div>
        <div><input type="text" pInputText /></div>
        <div class="col-span-full"><input type="text" pInputText /></div>
        <div><input type="text" pInputText [fluid]="false" placeholder="Non-Fluid" /></div>
    </div>
</p-fluid>
```

### Accessibility

Fluid does not require any roles and attributes.

---

[View Official Documentation](https://primeng.org/fluid)
