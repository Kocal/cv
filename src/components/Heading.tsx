import { cva, type RecipeVariantProps } from '~/styled-system/css';
import { component$, Slot } from '@builder.io/qwik';

const headingStyle = cva({
  base: {
    fontWeight: 'bold',
  },
  variants: {
    level: {
      1: {
        fontSize: '3xl',
      },
      2: {
        fontSize: '2xl',
      },
      3: {
        fontSize: 'xl',
      },
      4: {
        fontSize: 'lg',
      },
      5: {
        fontSize: 'md',
      },
      6: {
        fontSize: 'sm',
      },
    },
  },
});

type HeadingProps = {} & RecipeVariantProps<typeof headingStyle>;

export const Heading = component$<HeadingProps>(({ level, ...props }) => {
  const Tag = `h${level}`;

  return (
    // @ts-ignore
    <Tag {...props} class={headingStyle({ level })}>
      <Slot />
    </Tag>
  );
});
