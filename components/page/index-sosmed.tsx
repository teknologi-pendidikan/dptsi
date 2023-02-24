export default function IndexSosmed(): JSX.Element {
  return (
    <>
      <div className="px-4 pt-4">
        <div className="rounded-sm">
          <div className="bg-white flex flex-row relative py-5 px-4 border-brand-100 border-2 rounded-lg justify-between">
            <div className="flex flex-row items-center">
              <div
                aria-hidden="true"
                className="flex flex-none items-center justify-center w-12 h-12"
              >
                <svg
                  className="none"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 28 28"
                  xmlns="http://www.w3.org/2000/svg"
                  height="28"
                  width="28"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
              </div>
              <div className="ml-4 space-y-1">
                <h3 className="text-base leading-5 font-semibold">
                  <a
                    className="helper-link-cover"
                    href="https://wa.me/6285748250120"
                  >
                    Tim Bidang Aplikasi Cloud dan Layanan (ACL) DPTSI
                  </a>
                </h3>
                <p className="text-sm leading-4 text-gray-500">
                  Dukungan pada akses layanan Google Workspace, Active Directory dan layanan pada public cloud.
                </p>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="flex flex-none items-center justify-center ml-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className="w-6 h-6 text-brand-500"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-6">
        <ul className="grid grid-cols-2 gap-3 sm:gap-6 sm:grid-cols-4">
          <li className="inline-flex flex-col items-center justify-center text-center relative rounded-lg py-3 px-2 bg-orange-500">
            <a
              className="text-gray-100 font-semibold text-lg helper-link-cover"
              href="https://instagram.com/hmjtep_um"
            >
              GitLab
            </a>
          </li>
          <li className="inline-flex flex-col items-center justify-center text-center relative rounded-lg py-3 px-2 bg-gray-800">
            <a
              className="text-gray-100 font-semibold text-lg helper-link-cover"
              href="https://github/teknologi-pendidikan"
            >
              GitHub
            </a>
          </li>
          <li className="inline-flex flex-col items-center justify-center text-center relative rounded-lg py-3 px-2 bg-red-800">
            <a
              className="text-gray-100 font-semibold text-lg helper-link-cover"
              href="https://www.youtube.com/@teknologi-pendidikan"
            >
              YouTube
            </a>
          </li>
          <li className="inline-flex flex-col items-center justify-center text-center relative rounded-lg py-3 px-2 bg-purple-500">
            <a
              className="text-gray-100 font-semibold text-lg helper-link-cover"
              href="https://instagram.com/teknologipendidikan.or.id"
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
