interface LayoutProps {
  children: React.ReactNode;
}

export default function IndexHeader({ children }: LayoutProps): JSX.Element {
  return (
    <section className="overflow-hidden">
      <div className="bg-red-600 py-6 mx-4 text-center">
        <h2 className="text-lg sm:text-xl font-semibold sm:mx-3 text-white">
          Permohonan Layanan Teknologi Sistem Informasi dan Kebutuhan Infrastruktur Umum kepada DPTSI
        </h2>
        <div className="px-4">
          <a
            className="flex flex-row py-2 text-base items-center justify-center border border-transparent font-bold shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 text-black bg-white hover:bg-red-200 focus:ring-neutral-500 disabled:cursor-not-allowed disabled:opacity-75 mt-4"
            href="mailto:dptsi@teknologipendidikan.or.id?cc=admin@teknologipendidikan.or.id&subject=SUPPORT%20%7C%20%3Ctentang%3E%20-%20%3Cdepartemen%3E&body=Disini%20modelnya"
          >
            Hubungi Servicedesk DPTSI EDTECH-ID
          </a>
        </div>
      </div>
      {children}
    </section>
  );
}
