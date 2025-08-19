# Button

Button is an extension to standard button element with icons and theming.

## Import

```typescript
import { ButtonModule } from 'primeng/button';
```

## Basic

Text to display on a button is defined with the label property.

```html
<p-button label="Submit" />
```

## Directive

Button can also be used as directive using pButton along with pButtonLabel and pButtonIcon helper directives.

```html
<button pButton>
    <i class="pi pi-check" pButtonIcon></i>
    <span pButtonLabel>Save</span>
</button>
```

## Link

A button can be rendered as a link when link property is present, while the pButton directive can be applied on an anchor element to style the link as a button.

```html
<p-button label="Link" link />
<a href="https://angular.dev/" pButton target="_blank" rel="noopener noreferrer">
    <span pButtonLabel>Angular Website</span>
</a>
<a routerLink="/" pButton>
    <span pButtonLabel>Router Link</span>
</a>
```

## Icons

Icon of a button is specified with icon property and position is configured using iconPos attribute.

```html
<p-button icon="pi pi-home" aria-label="Save" />
<p-button label="Profile" icon="pi pi-user" />
<p-button label="Save" icon="pi pi-check" iconPos="right" />
<p-button label="Search" icon="pi pi-search" iconPos="top" />
<p-button label="Update" icon="pi pi-refresh" iconPos="bottom" />
```

## Loading

Busy state is controlled with the loading property.

```html
<p-button label="Search" icon="pi pi-check" [loading]="loading" (onClick)="load()" />
```

## Severity

Severity defines the type of button.

```html
<p-button label="Primary" />
<p-button label="Secondary" severity="secondary" />
<p-button label="Success" severity="success" />
<p-button label="Info" severity="info" />
<p-button label="Warn" severity="warn" />
<p-button label="Help" severity="help" />
<p-button label="Danger" severity="danger" />
<p-button label="Contrast" severity="contrast" />
```

## Disabled

When disabled is present, the element cannot be edited and focused.

```html
<p-button label="Submit" [disabled]="true" />
```

## Raised

Raised buttons display a shadow to indicate elevation.

```html
<p-button label="Primary" [raised]="true" />
<p-button label="Secondary" [raised]="true" severity="secondary" />
<p-button label="Success" [raised]="true" severity="success" />
<p-button label="Info" [raised]="true" severity="info" />
<p-button label="Warn" [raised]="true" severity="warn" />
<p-button label="Help" [raised]="true" severity="help" />
<p-button label="Danger" [raised]="true" severity="danger" />
<p-button label="Contrast" [raised]="true" severity="contrast" />
```

## Rounded

Rounded buttons have a circular border radius.

```html
<p-button label="Primary" [rounded]="true" />
<p-button label="Secondary" [rounded]="true" severity="secondary" />
<p-button label="Success" [rounded]="true" severity="success" />
<p-button label="Info" [rounded]="true" severity="info" />
<p-button label="Warn" [rounded]="true" severity="warn" />
<p-button label="Help" [rounded]="true" severity="help" />
<p-button label="Danger" [rounded]="true" severity="danger" />
<p-button label="Contrast" [rounded]="true" severity="contrast" />
```

## Text

Text buttons are displayed as textual elements.

```html
<p-button label="Primary" variant="text" />
<p-button label="Secondary" variant="text" severity="secondary" />
<p-button label="Success" variant="text" severity="success" />
<p-button label="Info" variant="text" severity="info" />
<p-button label="Warn" variant="text" severity="warn" />
<p-button label="Help" variant="text" severity="help" />
<p-button label="Danger" variant="text" severity="danger" />
<p-button label="Plain" variant="text" />
```

## Raised Text

Text buttons can be displayed as raised for elevation.

```html
<p-button label="Primary" variant="text" [raised]="true" />
<p-button label="Secondary" variant="text" [raised]="true" severity="secondary" />
<p-button label="Success" variant="text" [raised]="true" severity="success" />
<p-button label="Info" variant="text" [raised]="true" severity="info" />
<p-button label="Warn" variant="text" [raised]="true" severity="warn" />
<p-button label="Help" variant="text" [raised]="true" severity="help" />
<p-button label="Danger" variant="text" [raised]="true" severity="danger" />
<p-button label="Plain" variant="text" [raised]="true" />
```

## Outlined

Outlined buttons display a border without a background initially.

```html
<p-button label="Primary" variant="outlined" />
<p-button label="Secondary" variant="outlined" severity="secondary" />
<p-button label="Success" variant="outlined" severity="success" />
<p-button label="Info" variant="outlined" severity="info" />
<p-button label="Warn" variant="outlined" severity="warn" />
<p-button label="Help" variant="outlined" severity="help" />
<p-button label="Danger" variant="outlined" severity="danger" />
<p-button label="Contrast" variant="outlined" severity="contrast" />
```

## Icon Only

Buttons can have icons without labels.

```html
<p-button icon="pi pi-check" />
<p-button icon="pi pi-bookmark" severity="secondary" />
<p-button icon="pi pi-search" severity="success" />
<p-button icon="pi pi-user" severity="info" />
<p-button icon="pi pi-bell" severity="warn" />
<p-button icon="pi pi-heart" severity="help" />
<p-button icon="pi pi-times" severity="danger" />

<p-button icon="pi pi-check" [rounded]="true" />
<p-button icon="pi pi-bookmark" [rounded]="true" severity="secondary" />
<p-button icon="pi pi-search" [rounded]="true" severity="success" />
<p-button icon="pi pi-user" [rounded]="true" severity="info" />
<p-button icon="pi pi-bell" [rounded]="true" severity="warn" />
<p-button icon="pi pi-heart" [rounded]="true" severity="help" />
<p-button icon="pi pi-times" [rounded]="true" severity="danger" />

<p-button icon="pi pi-check" [rounded]="true" [outlined]="true" />
<p-button icon="pi pi-bookmark" [rounded]="true" severity="secondary" [outlined]="true" />
<p-button icon="pi pi-search" [rounded]="true" severity="success" [outlined]="true" />
<p-button icon="pi pi-user" [rounded]="true" severity="info" [outlined]="true" />
<p-button icon="pi pi-bell" [rounded]="true" severity="warn" [outlined]="true" />
<p-button icon="pi pi-heart" [rounded]="true" severity="help" [outlined]="true" />
<p-button icon="pi pi-times" [rounded]="true" severity="danger" [outlined]="true" />

<p-button icon="pi pi-check" [rounded]="true" [text]="true" [raised]="true" />
<p-button icon="pi pi-bookmark" [rounded]="true" [text]="true" [raised]="true" severity="secondary" />
<p-button icon="pi pi-search" [rounded]="true" [text]="true" [raised]="true" severity="success" />
<p-button icon="pi pi-user" [rounded]="true" [text]="true" [raised]="true" severity="info" />
<p-button icon="pi pi-bell" [rounded]="true" [text]="true" [raised]="true" severity="warn" />
<p-button icon="pi pi-heart" [rounded]="true" [text]="true" [raised]="true" severity="help" />
<p-button icon="pi pi-times" [rounded]="true" [text]="true" [raised]="true" severity="danger" />

<p-button icon="pi pi-check" [rounded]="true" [text]="true" />
<p-button icon="pi pi-bookmark" [rounded]="true" [text]="true" severity="secondary" />
<p-button icon="pi pi-search" [rounded]="true" [text]="true" severity="success" />
<p-button icon="pi pi-user" [rounded]="true" [text]="true" severity="info" />
<p-button icon="pi pi-bell" [rounded]="true" [text]="true" severity="warn" />
<p-button icon="pi pi-heart" [rounded]="true" [text]="true" severity="help" />
<p-button icon="pi pi-times" [rounded]="true" [text]="true" severity="danger" />
```

## Badge

Buttons have built-in badge support with badge and badgeClass properties.

```html
<p-button label="Emails" badge="2" styleClass="m-0" />
<p-button label="Messages" icon="pi pi-users" badge="2" badgeSeverity="contrast" styleClass="m-0" [outlined]="true" />
```

## Button Group

Multiple buttons are grouped when wrapped inside an element with ButtonGroup component.

```html
<p-buttongroup>
    <p-button label="Save" icon="pi pi-check" />
    <p-button label="Delete" icon="pi pi-trash" />
    <p-button label="Cancel" icon="pi pi-times" />
</p-buttongroup>
```

## Sizes

Button provides small and large sizes as alternatives to the standard.

```html
<p-button label="Small" icon="pi pi-check" size="small" />
<p-button label="Normal" icon="pi pi-check" />
<p-button label="Large" icon="pi pi-check" size="large" />
```

## Template

Custom content inside a button is defined as children.

```html
<p-button [outlined]="true">
    <svg width="35" height="40" viewBox="0 0 33 35" fill="none" xmlns="http://www.w3.org/2000/svg" class="block mx-auto">
        <path d="..." fill="var(--primary-color)" />
    </svg>
</p-button>
```

## Accessibility

Button component renders a native button element that implicitly includes any passed prop. Text to describe the button is defined with the aria-label prop, if not present label prop is used as the value. If the button is icon only or custom templating is used, it is recommended to use aria-label so that screen readers would be able to read the element properly.

```html
<p-button icon="pi pi-check" aria-label="Submit" />
<p-button icon="pi pi-check" label="Submit" />

<p-button class="youtube p-0" aria-label="Youtube">
    <i class="pi pi-youtube px-2"></i>
    <span class="px-4">Youtube</span>
</p-button>
```

## Button

Button is an extension to standard button element with icons and theming.

## ButtonDirective

Button directive is an extension to button component.

---

[View Official Documentation](https://primeng.org/button)
