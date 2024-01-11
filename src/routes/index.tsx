import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { RESUME_DATA } from '~/data/resume-data';
import { Button } from '~/components/Button';
import { Card } from '~/components/Card';
import { Badge } from '~/components/Badge';
import { Heading } from '~/components/Heading';
import { css } from '~/styled-system/css';
import { HiEnvelopeOutline, HiGlobeEuropeAfricaOutline } from '@qwikest/icons/heroicons';
import { DateTime } from '~/components/DateTime';
import { BadgesList } from '~/components/BadgesList';
import { Dot } from '~/components/Dot';
import { CardContent } from '~/components/CardContent';

export default component$(() => {
  return (
    <>
      <main
        class={css({
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          padding: 2,
          marginX: 'auto',
          maxWidth: '3xl',
        })}
      >
        <section
          class={css({
            display: 'flex',
          })}
        >
          <div
            class={css({
              flex: '1',
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            })}
          >
            <Heading level={1}>{RESUME_DATA.name}</Heading>
            <div>
              <p
                class={css({
                  color: 'gray.900',
                })}
              >
                {RESUME_DATA.about}
              </p>

              <a
                href={RESUME_DATA.locationLink}
                class={css({
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: 'sm',
                })}
              >
                <HiGlobeEuropeAfricaOutline
                  class={css({
                    marginRight: 1,
                  })}
                />
                {RESUME_DATA.location}
              </a>
            </div>

            <div
              class={css({
                display: 'flex',
                gap: 2,
              })}
            >
              <Button href={`mailto:${RESUME_DATA.contact.email}`} title="Contact">
                <HiEnvelopeOutline />
              </Button>

              {RESUME_DATA.contact.social.map((social) => (
                <Button key={social.name} href={social.url} title={social.name}>
                  {social.icon}
                </Button>
              ))}
            </div>
          </div>

          <div>{RESUME_DATA.avatar}</div>
        </section>

        <section
          class={css({
            display: 'grid',
            gap: 2,
          })}
        >
          <Heading level={2}>Expériences professionnelles</Heading>

          <div
            class={css({
              display: 'grid',
              gap: 2,
            })}
          >
            {RESUME_DATA.work.map((work, index) => {
              return (
                <Card key={`${work.company} ${work.title}`}>
                  <header
                    class={css({
                      display: 'grid',
                      gridTemplateColumns: '1fr auto',
                      alignItems: 'center',
                    })}
                  >
                    <Heading level={3}>
                      <span
                        class={css({
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                        })}
                      >
                        <a
                          href={work.link}
                          rel="noreferrer noopener"
                          class={css({
                            _hover: {
                              textDecoration: 'underline',
                            },
                          })}
                        >
                          {work.company}
                        </a>
                        <Dot color={index === 0 ? 'green' : 'red'} />
                      </span>
                    </Heading>

                    <span
                      class={css({
                        fontSize: 'xs',
                        fontWeight: 'bold',
                      })}
                    >
                      <DateTime date={work.start} formattingOptions={{ year: 'numeric', month: 'short' }} />
                      {' - '}
                      <DateTime date={work.end} formattingOptions={{ year: 'numeric', month: 'short' }} />
                    </span>
                  </header>

                  <p
                    class={css({
                      fontSize: 'sm',
                      fontWeight: 'bold',
                    })}
                  >
                    {work.title}
                  </p>

                  <CardContent>
                    <p>{work.description}</p>
                  </CardContent>

                  <BadgesList>
                    {work.badges.map((badge) => (
                      <Badge key={badge} size="sm">
                        {badge}
                      </Badge>
                    ))}
                  </BadgesList>
                </Card>
              );
            })}
          </div>
        </section>

        <section
          class={css({
            display: 'grid',
            gap: 2,
          })}
        >
          <Heading level={2}>Skills</Heading>

          <BadgesList>
            {RESUME_DATA.skills.map((skill) => (
              <Badge key={skill} size="md">
                {skill}
              </Badge>
            ))}
          </BadgesList>
        </section>

        <section
          class={css({
            display: 'grid',
            gap: 2,
          })}
        >
          <Heading level={2}>Projets</Heading>

          <div
            class={css({
              display: 'grid',
              gap: 2,
              gridTemplateColumns: '1fr',
              md: {
                gridTemplateColumns: 'repeat(2, 1fr)',
              },
              lg: {
                gridTemplateColumns: 'repeat(3, 1fr)',
              },
            })}
          >
            {RESUME_DATA.projects.map((project) => (
              <Card key={project.title}>
                <Heading level={3}>
                  <a
                    href={project.link.href}
                    class={css({
                      _hover: {
                        textDecoration: 'underline',
                      },
                    })}
                  >
                    {project.title}
                  </a>
                </Heading>

                <p
                  class={css({
                    fontSize: 'sm',
                    fontWeight: 'bold',
                  })}
                >
                  {project.date}
                </p>

                <CardContent>
                  <p>{project.description}</p>
                </CardContent>

                <BadgesList>
                  {project.techStack.map((tech) => (
                    <Badge key={tech} size="sm">
                      {tech}
                    </Badge>
                  ))}
                </BadgesList>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer
        class={css({
          bgColor: 'gray.100',
          color: 'gray.800',
          fontSize: 'sm',
          textAlign: 'center',
          padding: 3,
        })}
      >
        Hugo Alliaume
        {' - '}
        <a
          href="https://github.com/Kocal/cv"
          class={css({
            _hover: {
              textDecoration: 'underline',
            },
          })}
        >
          Sources
        </a>
      </footer>
    </>
  );
});

export const head: DocumentHead = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  meta: [
    {
      name: 'description',
      content: RESUME_DATA.summary,
    },
  ],
};
