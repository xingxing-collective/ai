import type { SidebarLink } from '~/types';
import type { Group } from '#ui/types';

 const _useRouteLink = () => {
  const colorMode = useColorMode();
  const links = computed<SidebarLink[]>(() => [
    
  ]);

  const groups = computed<Group[]>(() => {
    return [
      {
        key: 'themes',
        label: 'Themes',
        commands: [
          {
            id: 'light',
            label: 'Light',
            icon: 'i-heroicons-sun-20-solid',
            click: () => (colorMode.value = 'light'),
          },
          {
            id: 'dark',
            label: 'Dark',
            icon: 'i-heroicons-moon-20-solid',
            click: () => (colorMode.value = 'dark'),
          },
        ],
      },
    ];
  });

  return {
    links,
    groups,
  };
};

export const useRouteLink = createSharedComposable(_useRouteLink);