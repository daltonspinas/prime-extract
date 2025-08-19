# Tabs

Tabs is a container component to group content with tabs.

## Import

```typescript
import { TabsModule } from 'primeng/tabs';
```

## Basic

Tabs is defined using TabList, Tab, TabPanels and TabPanel components. Tab and TabPanel components are associated with their value properties

```html
<p-tabs value="0">
    <p-tablist>
        <p-tab value="0">Header I</p-tab>
        <p-tab value="1">Header II</p-tab>
        <p-tab value="2">Header III</p-tab>
    </p-tablist>
    <p-tabpanels>
        <p-tabpanel value="0">
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                anim id est laborum.
            </p>
        </p-tabpanel>
        <p-tabpanel value="1">
            <p class="m-0">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
                dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius
                modi.
            </p>
        </p-tabpanel>
        <p-tabpanel value="2">
            <p class="m-0">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
                atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique
                sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum
                facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
                impedit quo minus.
            </p>
        </p-tabpanel>
    </p-tabpanels>
</p-tabs>
```

## Dynamic

Tabs can be generated dynamically using the standard @for block.

```html
<p-tabs value="0">
    <p-tablist>
        @for (tab of tabs; track tab.value) {
            <p-tab [value]="tab.value">{{ tab.title }}</p-tab>
        }
    </p-tablist>
    <p-tabpanels>
        @for (tab of tabs; track tab.value) {
            <p-tabpanel [value]="tab.value">
                <p class="m-0">{{ tab.content }}</p>
            </p-tabpanel>
        }
    </p-tabpanels>
</p-tabs>
```

## Controlled

Tabs can be controlled programmatically using value property as a model.

```html
<div class="flex mb-2 gap-2 justify-end">
    <p-button (onClick)="value = 0" rounded="true" styleClass="w-8 h-8 p-0" [outlined]="value !== 0" label="1" />
    <p-button (onClick)="value = 1" rounded="true" styleClass="w-8 h-8 p-0" [outlined]="value !== 1" label="2" />
    <p-button (onClick)="value = 2" rounded="true" styleClass="w-8 h-8 p-0" [outlined]="value !== 2" label="3" />
</div>
<p-tabs [value]="value">
    <p-tablist>
        <p-tab [value]="0">Header I</p-tab>
        <p-tab [value]="1">Header II</p-tab>
        <p-tab [value]="2">Header III</p-tab>
    </p-tablist>
    <p-tabpanels>
        <p-tabpanel [value]="0">
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
            </p>
        </p-tabpanel>
        <p-tabpanel [value]="1">
            <p class="m-0">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
                qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
            </p>
        </p-tabpanel>
        <p-tabpanel [value]="2">
            <p class="m-0">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
                corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et
                expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
            </p>
        </p-tabpanel>
    </p-tabpanels>
</p-tabs>
```

## Scrollable

Adding scrollable property displays navigational buttons at each side to scroll between tabs.

```html
<p-tabs value="0" scrollable>
    <p-tablist>
        @for(tab of scrollableTabs; track tab.value){
            <p-tab [value]="tab.value">
                {{ tab.title }}
            </p-tab>
        }
    </p-tablist>
    <p-tabpanels>
        @for(tab of scrollableTabs; track tab.value){
            <p-tabpanel [value]="tab.value">
                <p class="m-0">{{ tab.content }}</p>
            </p-tabpanel>
        }
    </p-tabpanels>
</p-tabs>
```

## Disabled

Enabling disabled property of a Tab prevents user interaction.

```html
<p-tabs value="0">
    <p-tablist>
        <p-tab value="0">Header I</p-tab>
        <p-tab value="1">Header II</p-tab>
        <p-tab value="2">Header III</p-tab>
        <p-tab disabled>Header IV</p-tab>
    </p-tablist>
    <p-tabpanels>
        <p-tabpanel value="0">
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                anim id est laborum.
            </p>
        </p-tabpanel>
        <p-tabpanel value="1">
            <p class="m-0">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
                dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius
                modi.
            </p>
        </p-tabpanel>
        <p-tabpanel value="2">
            <p class="m-0">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
                atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique
                sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum
                facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
                impedit quo minus.
            </p>
        </p-tabpanel>
    </p-tabpanels>
</p-tabs>
```

## Template

Custom content for a tab is defined with the default ng-content.

```html
<p-tabs value="0" scrollable>
    <p-tablist>
        <ng-template #previcon>
            <i class="pi pi-minus"></i>
        </ng-template>
        <p-tab value="0" class="flex items-center !gap-2">
            <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" shape="circle"/>
            <span class="font-bold whitespace-nowrap">Amy Elsner</span>
        </p-tab>
        <p-tab value="1" class="flex items-center !gap-2">
            <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png" shape="circle" />
            <span class="font-bold whitespace-nowrap">Onyama Limba</span>
        </p-tab>
        <p-tab value="2" class="flex items-center !gap-2">
            <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/ionibowcher.png" shape="circle" />
            <span class="font-bold whitespace-nowrap">Ioni Bowcher</span>
            <p-badge value="2" />
        </p-tab>
        <ng-template #nexticon>
            <i class="pi pi-plus"></i>
        </ng-template>
    </p-tablist>
    <p-tabpanels>
        <p-tabpanel value="0">
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                anim id est laborum.
            </p>
        </p-tabpanel>
        <p-tabpanel value="1">
            <p class="m-0">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
                dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius
                modi.
            </p>
        </p-tabpanel>
        <p-tabpanel value="2">
            <p class="m-0">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
                atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique
                sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum
                facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
                impedit quo minus.
            </p>
        </p-tabpanel>
    </p-tabpanels>
</p-tabs>
```

## Tab Menu

A navigation menu is implemented using tabs without the panels where the content of a tab is provided by a route component like router-outlet. For the purpose of this demo, router-outlet is not included.

```html
<p-tabs value="/dashboard">
    <p-tablist>
        @for(tab of tabs; track tab.route){
            <p-tab [value]="tab.route" [routerLink]="tab.route" class="flex items-center !gap-2 text-inherit">
                <i [class]="tab.icon"></i>
                <span>{{ tab.label }}</span>
            </p-tab>
        }
    </p-tablist>
</p-tabs>
<!--<router-outlet></router-outlet>-->
```

## Accessibility

Tabs container is defined with the tablist role, as any attribute is passed to the container element aria-labelledby can be optionally used to specify an element to describe the Tabs. Each tab header has a tab role along with aria-selected state attribute and aria-controls to refer to the corresponding tab content element. The content element of each tab has tabpanel role, an id to match thearia-controls of the header and aria-labelledby reference to the header as the accessible name.

## Tabs

Tabs facilitates seamless switching between different views.

## TabPanel

## Tab

---

[View Official Documentation](https://primeng.org/tabs)
