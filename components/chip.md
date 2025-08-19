# Chip

Chip represents entities using icons, labels and images.

## Import

```typescript
import { ChipModule } from 'primeng/chip';
```

## Basic

A basic chip with a text is created with the label property. In addition when removable is added, a delete icon is displayed to remove a chip, the optional onRemove event is available to get notified when a chip is hidden.

```html
<p-chip label="Action" />
<p-chip label="Comedy" />
<p-chip label="Mystery" />
<p-chip label="Thriller" [removable]="true" />
```

## Icon

A font icon next to the label can be displayed with the icon property.

```html
<p-chip label="Apple" icon="pi pi-apple" />
```

## Image

The image property is used to display an image like an avatar.

```html
<p-chip label="Amy Elsner" image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" alt="Avatar image" />
<p-chip label="Asiya Javayant" image="https://primefaces.org/cdn/primeng/images/demo/avatar/asiyajavayant.png" alt="Avatar image" />
<p-chip label="Onyama Limba" image="https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png" alt="Avatar image" />
<p-chip label="Xuxue Feng" image="https://primefaces.org/cdn/primeng/images/demo/avatar/xuxuefeng.png" alt="Avatar image" [removable]="true" />
```

## Template

Content can easily be customized with the dynamic content instead of using the built-in modes.

```html
<p-chip class="!py-0 !pl-0 !pr-4">
    <span class="bg-primary text-primary-contrast rounded-full w-8 h-8 flex items-center justify-center">
        P
    </span>
    <span class="ml-2 font-medium">
        PRIME
    </span>
</p-chip>
```

## Accessibility

Chip uses the label property as the default aria-label, since any attribute is passed to the root element aria-labelledby or aria-label can be used to override the default behavior. Removable chips have a tabindex and focusable with the tab key.

## Chip

Chip represents people using icons, labels and images.

---

[View Official Documentation](https://primeng.org/chip)
