export const ColorConfiguration = () => {
  return (
    <>
      <h3 className="mt-8 text-xl font-semibold text-black">Colors</h3>
      <div className="border-dark_border border-opacity-60 mt-4 rounded-md border p-6">
        <p className="text-muted text-opacity-60 text-base font-medium">
          <span className="text-lg font-semibold text-black">
            1. Override Colors
          </span>{' '}
          <br />
          For any change in colors : tailwind.config.ts
        </p>
        <div className="mt-8 rounded-md bg-black px-5 py-4">
          <p className="flex flex-col gap-2 text-sm text-white/60">
            <span>--color-primary: #611f69;</span>
            <span>--color-cream: #fcf5ef;</span>
            <span>--color-success: #6b9f36;</span>
            <span>--color-orange: #f9cd92;</span>
          </p>
        </div>
      </div>
      <div className="border-dark_border border-opacity-60 mt-4 rounded-md border p-6">
        <p className="text-muted text-opacity-60 text-base font-medium">
          <span className="text-lg font-semibold text-black">
            2. Override Theme Colors
          </span>{' '}
          <br />
          For change , go to : tailwind.config.ts
        </p>
        <div className="mt-8 rounded-md bg-black px-5 py-4">
          <p className="flex flex-col gap-2 text-sm text-white/60">
            <span>--color-primary: #611f69;</span>
          </p>
        </div>
      </div>
    </>
  );
};
