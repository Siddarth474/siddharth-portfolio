import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

export default function ContactNotification({ name, email, subject, message }) {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio</Preview>

      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container className="bg-white mx-auto my-10 p-6 rounded-xl shadow-lg max-w-xl">

            {/* Header */}
            <Section className="mb-6">
              <Text className="text-2xl font-bold text-center text-orange-600">
                New Portfolio Message 🚀
              </Text>
            </Section>

            <Hr className="my-4" />

            <Section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
              <Text className="text-lg font-semibold">Contact Details:</Text>

              <Text className="mt-2">
                <span className="font-semibold">Name:</span> {name}
              </Text>
              <Text>
                <span className="font-semibold">Email:</span> {email}
              </Text>
              <Text>
                <span className="font-semibold">Subject:</span> {subject || "—"}
              </Text>
            </Section>

            <Section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
              <Text className="text-lg font-semibold mb-2">Message:</Text>

              <Text className="leading-relaxed whitespace-pre-line">
                {message}
              </Text>
            </Section>

            <Text className="text-xs text-center text-gray-500">
              You received this email from your portfolio contact form.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
