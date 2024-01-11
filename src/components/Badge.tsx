import type { RecipeVariantProps } from '~/styled-system/css';
import { cva } from '~/styled-system/css';
import { component$, Slot } from '@builder.io/qwik';

const badgeStyle = cva({
  base: {
    display: 'inline-block',
    bgColor: 'blue.50',
    color: 'blue.700',
    fontWeight: 'bold',
    borderRadius: 5,
    whiteSpace: 'nowrap',
  },
  variants: {
    size: {
      sm: {
        paddingX: 1,
        fontSize: 'xs',
      },
      md: {
        paddingX: 2,
        paddingY: 1,
        fontSize: 'sm',
      },
      lg: {
        paddingX: 2,
        paddingY: 1,
        fontSize: 'md',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

type BadgeProps = {} & RecipeVariantProps<typeof badgeStyle>;

export const Badge = component$<BadgeProps>(({ size, ...props }) => {
  return (
    <span {...props} class={badgeStyle({ size })}>
      <Slot />
    </span>
  );
});
