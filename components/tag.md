# Tag

Tag component is used to categorize content.

## Import

```typescript
import { TagModule } from 'primeng/tag';
```

## Basic

Label of the tag is defined with the value property.

```html
<p-tag value="New" />
```

## Severity

Severity defines the color of the tag, possible values are success, info, warn and danger in addition to the default theme color.

```html
<p-tag value="Primary" />
<p-tag severity="secondary" value="Secondary" />
<p-tag severity="success" value="Success" />
<p-tag severity="info" value="Info" />
<p-tag severity="warn" value="Warn" />
<p-tag severity="danger" value="Danger" />
<p-tag severity="contrast" value="Contrast" />
```

## Pill

Enabling rounded, displays a tag as a pill.

```html
<p-tag value="Primary" [rounded]="true" />
<p-tag severity="secondary" value="Secondary" [rounded]="true" />
<p-tag severity="success" value="Success" [rounded]="true" />
<p-tag severity="info" value="Info" [rounded]="true" />
<p-tag severity="warn" value="Warn" [rounded]="true" />
<p-tag severity="danger" value="Danger" [rounded]="true" />
<p-tag severity="contrast" value="Contrast" [rounded]="true" />
```

## Icon

A font icon next to the value can be displayed with the icon property.

```html
<p-tag icon="pi pi-user" value="Primary" />
<p-tag icon="pi pi-search" severity="secondary" value="Secondary" />
<p-tag icon="pi pi-check" severity="success" value="Success" />
<p-tag icon="pi pi-info-circle" severity="info" value="Info" />
<p-tag icon="pi pi-exclamation-triangle" severity="warn" value="Warn" />
<p-tag icon="pi pi-times" severity="danger" value="Danger" />
<p-tag icon="pi pi-cog" severity="contrast" value="Contrast" />
```

## Template

Children of the component are passed as the content for templating.

```html
<p-tag [style]="{ border: '2px solid var(--border-color)', background: 'transparent', color: 'var(--text-color)'}">
    <div class="flex items-center gap-2 px-1">
        <img alt="Country" src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" class="flag flag-it" style="width: 18px" />
        <span class="text-base">
            Italy
        </span>
    </div>
</p-tag>
```

## Accessibility

Tag does not include any roles and attributes by default, any attribute is passed to the root element so aria roles and attributes can be added if required. If the tags are dynamic,aria-live may be utilized as well. In case badges need to be tabbable, tabIndex can be added to implement custom key handlers.

## Tag

Tag component is used to categorize content.

---

[View Official Documentation](https://primeng.org/tag)
