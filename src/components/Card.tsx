import type { RecipeVariantProps } from '~/styled-system/css';
import { cva } from '~/styled-system/css';
import { component$, Slot } from '@builder.io/qwik';

const cardStyle = cva({
  base: {
    display: 'inline-block',
    padding: 3,
    borderRadius: 4,
    borderWidth: '1px',
    borderColor: 'gray.200',
  },
});

type CardProps = {} & RecipeVariantProps<typeof cardStyle>;

export const Card = component$<CardProps>(({ ...props }) => {
  return (
    <div {...props} class={cardStyle()}>
      <Slot />
    </div>
  );
});
