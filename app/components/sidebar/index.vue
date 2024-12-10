<script setup lang="ts">
const { links } = useRouteLink()

const config = {
  wrapper: 'flex-col items-stretch relative w-full border-b lg:border-b-0 lg:border-r border-gray-200 dark:border-gray-800 lg:w-[--sidebar-width] flex-shrink-0 hidden lg:flex',
  container: 'h-[--header-height] flex-shrink-0 flex items-center border-b border-gray-200 dark:border-gray-800 px-4 gap-x-4 min-w-0 !border-transparent w-full',
  body: 'flex items-center justify-between flex-1 gap-x-1.5 min-w-0',
  center: 'flex items-stretch gap-1.5 min-w-0 flex-1',
  title: 'truncate text-gray-900 dark:text-white font-semibold',
  sidebar: {
    wrapper: 'flex flex-col w-full flex-1 relative overflow-hidden',
    container: 'flex-grow flex flex-col min-h-0 gap-y-2 py-2',
    body: 'flex-1 px-4 flex flex-col gap-y-2 overflow-y-auto'
  }
};

const props = defineProps({
  class: {
    type: [String, Object, Array] as PropType<any>,
    default: undefined,
  },
  ui: {
    type: Object as PropType<Partial<typeof config>>,
    default: () => ({}),
  },
});

const { ui, attrs } = useUI(
  'ai.sidebar',
  toRef(props, 'ui'),
  config,
  toRef(props, 'class'),
  true
);
</script>
<template>
  <div :class="ui.wrapper" v-bind="attrs">
    <div :class="ui.container">
      <div :class="ui.body">
        <div :class="ui.center">
          <ULink :to="'/'" v-bind="$ui.button?.secondary" />
          <div class="w-full">
            <slot name="header"/>
          </div>
        </div>
      </div>
    </div>
    <div :class="ui.sidebar.wrapper">
      <div :class="ui.sidebar.container">
        <div :class="ui.sidebar.body">
          <SidebarLinks :links="links" />
          <!-- <UDivider /> -->
          <div class="flex-1" />
          <!-- <UDivider /> -->
        </div>
      </div>
    </div>
  </div>
</template>