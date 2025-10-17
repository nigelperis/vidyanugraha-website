export const LogoConfiguration = () => {
  return (
    <>
      <h3 className="mt-8 text-xl font-semibold text-black">Logo</h3>
      <div className="border-dark_border border-opacity-60 mt-4 border p-6">
        <p className="text-muted text-opacity-60 flex flex-col text-base font-medium lg:flex-row">
          1. Change Logo over here :{' '}
          <span className="overflow-x-auto text-base font-semibold">
            {' '}
            src/components/Layout/Header/Logo/index.tsx
          </span>{' '}
        </p>
        <div className="mt-8 bg-black px-3 py-4">
          <div className="text-sm text-white/60">
            <p>&#x3C;Link href=&#x22;/&#x22;&#x3E;</p>
            <p>&#x3C;Image</p>
            <p>src=&#x22;/images/logo/logo.svg&#x22;</p>
            <p>alt=&#x22;logo&#x22;</p>
            <p>width={160}</p>
            <p>height={50}</p>
            <p>quality={100}</p>
            <p>
              style=&#x7B;width: &#x22;auto&#x22;, height:
              &#x22;auto&#x22;&#x7D;
            </p>
            <p>/&#x3E;</p>
          </div>
        </div>
      </div>
    </>
  );
};
