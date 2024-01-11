import type { RecipeVariantProps } from '~/styled-system/css';
import { cva } from '~/styled-system/css';
import { component$, Slot } from '@builder.io/qwik';

const dotStyle = cva({
  base: {
    display: 'inline-block',
    height: 2,
    width: 2,
    bgColor: 'gray.400',
    borderRadius: 'full',
  },
  variants: {
    color: {
      red: {
        bgColor: 'red.400',
      },
      green: {
        bgColor: 'green.400',
      },
    },
  },
});

type DotProps = {} & RecipeVariantProps<typeof dotStyle>;

export const Dot = component$<DotProps>(({ color, ...props }) => {
  return (
    <span {...props} class={dotStyle({ color })}>
      <Slot />
    </span>
  );
});
