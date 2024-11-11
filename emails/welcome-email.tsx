import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";

const WelcomeEmail: React.FC = () => (
  <Html>
    <Head />
    <Preview>Thanks for Subscribing!</Preview>
    <Tailwind
      config={{
        theme: {
          extend: {
            colors: {
              brand: "#2250f4",
              offwhite: "#fafbfb",
            },
            spacing: {
              0: "0px",
              20: "20px",
              45: "45px",
            },
          },
        },
      }}
    >
      <Body className="bg-teal-50 p-4 font-sans text-base">
        <Container className="p-45 rounded bg-white">
          <Heading className="mb-6 text-center leading-8">David Norton</Heading>

          <Img
            src={`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}/images/authors/ted.jpg`}
            width="403"
            height="226"
            alt="Ted"
            className="mx-auto rounded-lg"
          />

          <Heading as="h2" className="my-3 text-center">
            Thanks for Subscribing!
          </Heading>

          <Text className="text-base">
            Thank you for signing up for my newsletter. I&apos;m excited to have
            you onboard.
          </Text>

          <Text className="text-base">
            Click the link below to access my portfolio.
          </Text>
          <Section className="text-center">
            <Button
              className="bg-brand mx-auto my-4 rounded-lg px-[18px] py-3 text-white"
              href="https://davidnorton.app/"
            >
              Go to portfolio
            </Button>
          </Section>
          <Text className="text-base">All the best,</Text>
          <Text className="text-base">David</Text>
        </Container>

        <Container className="mt-20">
          <Section>
            <Row>
              <Column className="text-center text-sm">
                <Link
                  href={`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}/unsubscribe`}
                >
                  Unsubscribe
                </Link>
              </Column>
            </Row>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default WelcomeEmail;
