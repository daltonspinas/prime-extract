# Accordion

Accordion groups a collection of contents in tabs.

## Features

### Import

```typescript
import { AccordionModule } from 'primeng/accordion';
```

### Basic

Accordion is defined using AccordionPanel, AccordionHeader and AccordionContent components. Each AccordionPanel must contain a unique value property to specify the active item.

```html
<p-accordion value="0">
    <p-accordion-panel value="0">
        <p-accordion-header>Header I</p-accordion-header>
        <p-accordion-content>
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
            </p>
        </p-accordion-content>
    </p-accordion-panel>

    <p-accordion-panel value="1">
        <p-accordion-header>Header II</p-accordion-header>
        <p-accordion-content>
            <p class="m-0">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
                qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
            </p>
        </p-accordion-content>
    </p-accordion-panel>

    <p-accordion-panel value="2">
        <p-accordion-header>Header III</p-accordion-header>
        <p-accordion-content>
            <p class="m-0">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
                qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
            </p>
        </p-accordion-content>
    </p-accordion-panel>
</p-accordion>
```

### Dynamic

AccordionPanel can be generated dynamically using the standard @for block.

```html
<p-accordion [value]="0">
    @for (tab of tabs; track tab.title) {
        <p-accordion-panel [value]="tab.value">
            <p-accordion-header>{{ tab.title }}</p-accordion-header>
            <p-accordion-content>
                <p class="m-0">{{ tab.content }}</p>
            </p-accordion-content>
        </p-accordion-panel>
    }
</p-accordion>
```

### Multiple

Only one tab at a time can be active by default, enabling multiple property changes this behavior to allow multiple tabs. In this case activeIndex needs to be an array.

```html
<p-accordion [value]="['0']" [multiple]="true">
    <p-accordion-panel value="0">
        <p-accordion-header>Header I</p-accordion-header>
        <p-accordion-content>
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
            </p>
        </p-accordion-content>
    </p-accordion-panel>
    <p-accordion-panel value="1">
        <p-accordion-header>Header II</p-accordion-header>
        <p-accordion-content>
            <p class="m-0">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
                qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
            </p>
        </p-accordion-content>
    </p-accordion-panel>
    <p-accordion-panel value="2">
        <p-accordion-header>Header III</p-accordion-header>
        <p-accordion-content>
            <p class="m-0">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
                corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et
                expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
            </p>
        </p-accordion-content>
    </p-accordion-panel>
</p-accordion>
```

### Disabled

Enabling disabled property of an AccordionTab prevents user interaction.

```html
<p-accordion [value]="['0']" [multiple]="true">
    <p-accordion-panel value="0">
        <p-accordion-header>Header I</p-accordion-header>
        <p-accordion-content>
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
            </p>
        </p-accordion-content>
    </p-accordion-panel>
    <p-accordion-panel value="1">
        <p-accordion-header>Header II</p-accordion-header>
        <p-accordion-content>
            <p class="m-0">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
                qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
            </p>
        </p-accordion-content>
    </p-accordion-panel>
    <p-accordion-panel value="2">
        <p-accordion-header>Header III</p-accordion-header>
        <p-accordion-content>
            <p class="m-0">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
                corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et
                expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
            </p>
        </p-accordion-content>
    </p-accordion-panel>
    <p-accordion-panel value="3" [disabled]="true">
        <p-accordion-header>Header IV</p-accordion-header>
    </p-accordion-panel>
</p-accordion>
```

### Controlled

Panels can be controlled programmatically using value property as a model.

```html
<div class="flex mb-4 gap-2 justify-end">
        <p-button (onClick)="active = '0'" [rounded]="true" label="1" styleClass="w-8 h-8 p-0" [outlined]="active !== '0'" />
        <p-button (onClick)="active = '1'" [rounded]="true" label="2" styleClass="w-8 h-8 p-0" [outlined]="active !== '1'" />
        <p-button (onClick)="active = '2'" [rounded]="true" label="3" styleClass="w-8 h-8 p-0" [outlined]="active !== '2'" />
    </div>

    <p-accordion [(value)]="active">
        <p-accordion-panel value="0">
            <p-accordion-header>Header I</p-accordion-header>
            <p-accordion-content>
                <p class="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                    laborum.
                </p>
            </p-accordion-content>
        </p-accordion-panel>
        <p-accordion-panel value="1">
            <p-accordion-header>Header II</p-accordion-header>
            <p-accordion-content>
                <p class="m-0">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
                    qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                </p>
            </p-accordion-content>
        </p-accordion-panel>
        <p-accordion-panel value="2">
            <p-accordion-header>Header III</p-accordion-header>
            <p-accordion-content>
                <p class="m-0">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
                    corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                    culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et
                    expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                </p>
            </p-accordion-content>
        </p-accordion-panel>
    </p-accordion>
```

### Template

Accordion is customized with toggleicon template.

```html
<p-accordion value="0">
    <p-accordion-panel value="0">
        <p-accordion-header>
            <ng-template #toggleicon let-active="active">
                @if (active) {
                    <i class="pi pi-minus"></i>
                } @else {
                    <i class="pi pi-plus"></i>
                }
            </ng-template>
            <span class="flex items-center gap-2 w-full">
                <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" shape="circle" />
                <span class="font-bold whitespace-nowrap">Amy Elsner</span>
                <p-badge value="3" class="ml-auto mr-2" />
            </span>
        </p-accordion-header>
        <p-accordion-content>
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
            </p>
        </p-accordion-content>
    </p-accordion-panel>
    <p-accordion-panel value="1">
        <p-accordion-header>
            <ng-template #toggleicon let-active="active">
                @if (active) {
                    <i class="pi pi-minus"></i>
                } @else {
                    <i class="pi pi-plus"></i>
                }
            </ng-template>
            <span class="flex items-center gap-2 w-full">
                <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png" shape="circle" />
                <span class="font-bold whitespace-nowrap">Onyama Limba</span>
                <p-badge value="4" class="ml-auto mr-2" />
            </span>
        </p-accordion-header>
        <p-accordion-content>
            <p class="m-0">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
                qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
            </p>
        </p-accordion-content>
    </p-accordion-panel>
    <p-accordion-panel value="2">
        <p-accordion-header>
            <ng-template #toggleicon let-active="active">
                @if (active) {
                    <i class="pi pi-minus"></i>
                } @else {
                    <i class="pi pi-plus"></i>
                }
            </ng-template>
            <span class="flex items-center gap-2 w-full">
                <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/ionibowcher.png" shape="circle" />
                <span class="font-bold whitespace-nowrap">Ioni Bowcher</span>
                <p-badge value="2" class="ml-auto mr-2" />
            </span>
        </p-accordion-header>
        <p-accordion-content>
            <p class="m-0">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
                corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et
                expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
            </p>
        </p-accordion-content>
    </p-accordion-panel>
</p-accordion>
```

### Accessibility

Accordion header elements have a button role and use aria-controls to define the id of the content section along with aria-expanded for the visibility state. The value to read a header element defaults to the value of the header property and can be customized by defining an aria-label or aria-labelledby property. Each header has a heading role, for which the level is customized by headerAriaLevel and has a default level of 2 as per W3C specifications.

### Accordion

Accordion groups a collection of contents in tabs.

### AccordionPanel

AccordionPanel is a helper component for Accordion component.

### AccordionHeader

AccordionHeader is a helper component for Accordion component.

## API

### Accordion API

API defines helper props, events and others for the PrimeNG Accordion module.

#### Accordion

Accordion groups a collection of contents in tabs.

##### Properties

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| value | ModelSignal<string | number | string[] | number[]> | undefined | Value of the active tab. |
| multiple | InputSignalWithTransform<boolean, any> | false | When enabled, multiple tabs can be activated at the same time. |
| styleClass | string | null | Class of the element. |
| expandIcon | string | null | Icon of a collapsed tab. |
| collapseIcon | string | null | Icon of an expanded tab. |
| selectOnFocus | InputSignalWithTransform<boolean, any> | false | When enabled, the focused tab is activated. |
| transitionOptions | string | 400ms cubic-bezier(0.86, 0, 0.07, 1) | Transition options of the animation. |

##### Emitters

Defines emit that determine the behavior of the component based on a given condition or report the actions that the component takes.

| name | parameters | description |
| --- | --- | --- |
| onClose | event :  AccordionTabCloseEvent | Callback to invoke when an active tab is collapsed by clicking on the header. |
| onOpen | event :  AccordionTabOpenEvent | Callback to invoke when a tab gets expanded. |

#### AccordionPanel

AccordionPanel is a helper component for Accordion component.

##### Properties

Defines the input properties of the component.

| name | type | default | description |
| --- | --- | --- | --- |
| value | ModelSignal<string | number | string[] | number[]> | undefined | Value of the active tab. |
| disabled | InputSignalWithTransform<any, boolean> | false | Disables the tab when enabled. |

#### AccordionHeader

AccordionHeader is a helper component for Accordion component.

##### Templates

Defines the templates used by the component.

| name | parameters | description |
| --- | --- | --- |
| toggleicon |  | Toggle icon template. |

---

[View Official Documentation](https://primeng.org/accordion)
