# ToggleSwitch

ToggleSwitch is used to select a boolean value.

## Import

```typescript
import { ToggleSwitchModule } from 'primeng/toggleswitch';
```

## Basic

Two-way value binding is defined using ngModel.

```html
<p-toggleswitch [(ngModel)]="checked" />
```

## Preselection

Enabling ngModel property displays the component as active initially.

```html
<p-toggleswitch [(ngModel)]="checked" />
```

## Template

The handle template is available to display custom content.

```html
<p-toggleswitch [(ngModel)]="checked">
    <ng-template #handle let-checked="checked">
        <i [ngClass]="['!text-xs', 'pi', checked ? 'pi-check' : 'pi-times']"></i>
    </ng-template>
</p-toggleswitch>
```

## Disabled

When disabled is present, the element cannot be edited and focused.

```html
<p-toggleswitch [(ngModel)]="checked" [disabled]="true" />
```

## Invalid

The invalid state is applied using the ⁠invalid property to indicate failed validation, which can be integrated with Angular Forms.

```html
<p-toggleswitch [(ngModel)]="checked" [invalid]="!checked" />
```

## Forms

ToggleSwitch can also be used with reactive forms. In this case, the formControlName property is used to bind the component to a form control.

```html
<form #exampleForm="ngForm" (ngSubmit)="onSubmit(exampleForm)" class="flex flex-col gap-4 w-48">
    <div class="flex flex-col items-center gap-2">
        <p-toggleswitch #model="ngModel" [(ngModel)]="checked" name="activation" [invalid]="model.invalid && exampleForm.submitted" required />
        @if (model.invalid && exampleForm.submitted) {
            <p-message severity="error" size="small" variant="simple">Activation is required.</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>
```

```html
<div class="card flex justify-center">
    <form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-4 w-48">
        <div class="flex flex-col items-center gap-2">
            <p-toggleswitch name="activation" formControlName="activation" [invalid]="isInvalid('activation')" />
            @if (isInvalid('activation')) {
                <p-message severity="error" size="small" variant="simple">Activation is required.</p-message>
            }
        </div>
        <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
    </form>
</div>
```

## Accessibility

InputSwitch component uses a hidden native checkbox element with switch role internally that is only visible to screen readers. Value to describe the component can either be provided via label tag combined with inputId prop or using ariaLabelledBy, ariaLabel props.

```html
<label for="switch1">Remember Me</label>
<p-toggleswitch inputId="switch1" />

<span id="switch2">Remember Me</span>
<p-toggleswitch ariaLabelledBy="switch2" />

<p-toggleswitch ariaLabel="Remember Me" />
```

## ToggleSwitch

ToggleSwitch is used to select a boolean value.

---

[View Official Documentation](https://primeng.org/toggleswitch)
