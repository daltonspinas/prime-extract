# Avatar

Avatar represents people using icons, labels and images.

## Import

```typescript
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
```

## Label

A letter Avatar is defined with the label property.

```html
<p-avatar label="P" class="mr-2" size="xlarge" />
<p-avatar label="V" class="mr-2" size="large" [style]="{ 'background-color': '#ece9fc', color: '#2a1261' }" />
<p-avatar label="U" class="mr-2" [style]="{ 'background-color': '#dee9fc', color: '#1a2551' }" />
<p-avatar label="P" class="mr-2" size="xlarge" shape="circle" />
<p-avatar label="V" class="mr-2" size="large" [style]="{ 'background-color': '#ece9fc', color: '#2a1261' }" shape="circle" />
<p-avatar label="U" class="mr-2" [style]="{ 'background-color': '#dee9fc', color: '#1a2551' }" shape="circle" />

<p-overlay-badge value="4" severity="danger" class="inline-flex">
    <p-avatar label="U" size="xlarge" />
</p-overlay-badge>
```

## Icon

A font icon is displayed as an Avatar with the icon property.

```html
<p-avatar icon="pi pi-user" class="mr-2" size="xlarge" />
<p-avatar icon="pi pi-user" class="mr-2" size="large" style="background-color: #ece9fc; color: #2a1261" />
<p-avatar icon="pi pi-user" style="background-color: #dee9fc; color: #1a2551" />
<p-avatar icon="pi pi-user" class="mr-2" size="xlarge" shape="circle" />
<p-avatar icon="pi pi-user" class="mr-2" size="large" style="background-color: #ece9fc; color: #2a1261" shape="circle" />
<p-avatar icon="pi pi-user" style="background-color: #dee9fc; color: #1a2551" shape="circle" />

<p-overlay-badge value="4" severity="danger" class="inline-flex">
    <p-avatar icon="pi pi-user" size="xlarge" />
</p-overlay-badge>
```

## Image

Use the image property to display an image as an Avatar.

```html
<p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" class="mr-2" size="xlarge" shape="circle" />
<p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/asiyajavayant.png" class="mr-2" size="large" shape="circle" />
<p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png" shape="circle" />

<p-overlay-badge value="4" severity="danger" class="inline-flex">
    <p-avatar class="p-overlay-badge" image="https://primefaces.org/cdn/primeng/images/demo/avatar/walter.jpg" size="xlarge" />
</p-overlay-badge>

<p-avatar image="https://www.gravatar.com/avatar/05dfd4b41340d09cae045235eb0893c3?d=mp" class="flex items-center justify-center mr-2" size="xlarge" />
```

## AvatarGroup

Grouping is available by wrapping multiple Avatar components inside an AvatarGroup.

```html
<p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" size="large" shape="circle" />
<p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/asiyajavayant.png" size="large" shape="circle" />
<p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png" size="large" shape="circle" />
<p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/ionibowcher.png" size="large" shape="circle" />
<p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/xuxuefeng.png" size="large" shape="circle" />
<p-avatar label="+2" shape="circle" size="large" />
```

## Shape

Avatar comes in two different styles specified with the shape property, square is the default and circle is the alternative.

```html
<p-avatar label="P" shape="circle" />
<p-avatar label="T" />
```

## Accessibility

Avatar does not include any roles and attributes by default. Any attribute is passed to the root element so you may add a role like img along with aria-labelledby or aria-label to describe the component. In case avatars need to be tabbable, tabIndex can be added as well to implement custom key handlers.

## Avatar

Avatar represents people using icons, labels and images.

## AvatarGroup

---

[View Official Documentation](https://primeng.org/avatar)
