export const TypographyConfiguration = () => {
  return (
    <>
      <h3 className="mt-8 text-xl font-semibold text-black">Typography</h3>
      <div className="border-dark_border border-opacity-60 mt-4 rounded-md border p-6">
        <p className="text-muted text-opacity-60 text-base font-medium">
          1. Change Font family over here :{' '}
          <span className="text-base font-semibold">
            src/app/layout.tsx
          </span>{' '}
        </p>
        <div className="mt-8 rounded-md bg-black px-3 py-4">
          <p className="mb-3 flex flex-col gap-2 text-sm text-white/60">
            {`import { Inter } from "next/font/google";`}
          </p>
          <p className="flex flex-col gap-2 text-sm text-white/60">
            {`const font = Inter({ subsets: ["latin"] });`}
          </p>
        </div>
      </div>
    </>
  );
};
