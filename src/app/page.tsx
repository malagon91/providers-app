import Navbar from '../components/Navbar';
import { Heading, Text } from '@radix-ui/themes';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen px-4 bg-gray-50">
        <Heading size="8" as="h1" className="text-center mb-4">
          Welcome to <span className="text-blue-600">MyApp</span>
        </Heading>
        <Text size="4" color="gray" className="text-center max-w-xl">
          This page uses <strong>Tailwind CSS v4</strong> +{' '}
          <strong>Radix UI Themes</strong> to style components. If you're seeing
          this layout correctly, everything is working! 🎉
        </Text>
      </main>
    </>
  );
}
