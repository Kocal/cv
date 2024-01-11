import type { RecipeVariantProps } from '~/styled-system/css';
import { cva } from '~/styled-system/css';
import { component$, Slot } from '@builder.io/qwik';

const cardContentStyle = cva({
  base: {
    fontSize: 'sm',
    color: 'gray.700',
    lineHeight: 1.4,
    paddingY: 2,
  },
});

type CardContentProps = {} & RecipeVariantProps<typeof cardContentStyle>;

export const CardContent = component$<CardContentProps>(({ ...props }) => {
  return (
    <div {...props} class={cardContentStyle()}>
      <Slot />
    </div>
  );
});
