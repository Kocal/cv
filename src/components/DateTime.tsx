import { component$ } from '@builder.io/qwik';

type DateTimeProps = {
  date: Date;
  formattingOptions?: Intl.DateTimeFormatOptions;
};

export const DateTime = component$<DateTimeProps>(({ date, formattingOptions, ...props }) => {
  return (
    <time {...props} dateTime={date.toUTCString()}>
      {date.toLocaleDateString('fr-FR', {
        timeZone: 'Europe/Paris',
        ...formattingOptions,
      })}
    </time>
  );
});
