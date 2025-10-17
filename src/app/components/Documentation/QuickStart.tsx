export const QuickStart = () => {
  return (
    <div className="scroll-m-28 pb-10 md:scroll-m-[180px]" id="start">
      <h3 className="mt-8 text-2xl font-semibold text-black">Quick Start</h3>
      <div className="border-dark_border border-opacity-60 mt-6 border p-6">
        <h6 className="text-lg font-medium text-black">1. Requirements</h6>
        <p className="text-muted text-opacity-60 text-base font-medium">
          Before proceeding, you need to have the latest stable{' '}
          <a href="https://nodejs.org/" className="text-primary">
            node.js
          </a>{' '}
        </p>
        <h6 className="mt-4 mb-2 text-base font-medium text-black">
          Recommended environment:
        </h6>
        <ul className="text-muted text-opacity-60 list-disc ps-6">
          <li>node js 20+</li>
          <li>npm js 10+</li>
        </ul>
      </div>
      <div className="border-dark_border border-opacity-60 mt-6 border p-6">
        <h6 className="text-lg font-medium text-black">2. Install</h6>
        <p className="text-muted text-opacity-60 text-base font-medium">
          Open package folder and install its dependencies. We recommanded yarn
          or npm.{' '}
        </p>
        <h6 className="text-dark mt-4 mb-2 text-base font-medium text-black">
          1) Install with npm:
        </h6>
        <div className="bg-black px-3 py-4">
          <p className="text-sm text-white/60">
            <span className="text-yellow-500">cd</span> project-folder
          </p>
          <p className="mt-2 text-sm text-white/60">npm install</p>
        </div>
        <h6 className="text-dark mt-4 mb-2 text-base font-medium text-black">
          1) Install with yarn:
        </h6>
        <div className="bg-black px-3 py-4">
          <p className="text-sm text-white/60">
            <span className="text-yellow-500">cd</span> project-folder
          </p>
          <p className="mt-2 text-sm text-white/60">yarn install</p>
        </div>
      </div>
      <div className="border-dark_border border-opacity-60 mt-6 border p-6">
        <h6 className="text-lg font-medium text-black">3. Start</h6>
        <p className="text-muted text-opacity-60 mb-4 text-base font-medium">
          Once npm install is done now you an run the app.
        </p>

        <div className="bg-black px-3 py-4">
          <p className="text-sm text-white/60">npm run dev or yarn run dev</p>
        </div>
        <p className="text-muted text-opacity-60 my-4 text-base font-medium">
          This command will start a local webserver{' '}
          <span className="dark:text-black">http://localhost:3000:</span>
        </p>
        <div className="bg-black px-3 py-4">
          <p className="text-sm text-white/60">
            {'> sieducational_project@2.0.0 dev'}
          </p>
          <p className="mt-1 text-sm text-white/60">{'> next dev'}</p>
          <p className="mt-6 text-sm text-white/60">{'-Next.js 14.2.4'}</p>
          <p className="mt-1 text-sm text-white/60">
            {'-Local: http://localhost:3000'}
          </p>
        </div>
      </div>
      <div className="border-dark_border border-opacity-60 mt-6 border p-6">
        <h6 className="text-lg font-medium text-black">
          4. Build / Deployment
        </h6>
        <p className="text-muted text-opacity-60 mb-4 text-base font-medium">
          After adding url run below command for build a app.
        </p>

        <div className="bg-black px-3 py-4">
          <p className="text-sm text-white/60">npm run build or yarn build</p>
        </div>
        <p className="text-muted text-opacity-60 mt-6 text-base font-medium">
          Finally, Your webiste is ready to be deployed.🥳
        </p>
      </div>
    </div>
  );
};
