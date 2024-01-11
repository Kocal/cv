import type { RecipeVariantProps } from '~/styled-system/css';
import { cva } from '~/styled-system/css';
import { component$, Slot } from '@builder.io/qwik';

const badgesListStyle = cva({
  base: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 2,
  },
});

type BadgesListProps = {} & RecipeVariantProps<typeof badgesListStyle>;

export const BadgesList = component$<BadgesListProps>(({ ...props }) => {
  return (
    <div {...props} class={badgesListStyle({})}>
      <Slot />
    </div>
  );
});
