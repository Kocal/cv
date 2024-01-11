import type { RecipeVariantProps } from '~/styled-system/css';
import { cva } from '~/styled-system/css';
import { component$, Slot } from '@builder.io/qwik';

const buttonStyle = cva({
  base: {
    display: 'inline-block',
    padding: 2,
    borderRadius: 4,
    borderWidth: '1px',
    borderColor: 'gray.200',
  },
});

type ButtonProps = { title?: HTMLElement['title'] } & {
  href?: string;
} & RecipeVariantProps<typeof buttonStyle>;

export const Button = component$<ButtonProps>(({ href = undefined, ...props }) => {
  const ourProps = {
    class: buttonStyle(),
  };

  if (href) {
    return (
      <a href={href} {...ourProps} {...props}>
        <Slot />
      </a>
    );
  }

  return (
    <button type="button" {...ourProps} {...props}>
      <Slot />
    </button>
  );
});
