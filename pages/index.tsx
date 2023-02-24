import {
  Header,
  Footer,
  SEO,
  PageTitle,
  CardInformasi,
  SectionGrub,
  IndexHeader,
  IndexSosmed,
} from "components";

function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-neutral-200">
      <SEO
        title="DPTSI EDTECH-ID | Tim IT Teknologi Pendidikan ID"
        description="Direktorat Pengembangan Teknologi dan Sistem Informasi (DPTSI) EDTECH-ID | Tim IT Teknologi Pendidikan ID"
        image=""
      />
      <Header title="Beranda" />
      <section className="flex flex-col flex-1 pt-16 bg-white">
        <PageTitle
          title="Direktorat Pengembangan Teknologi dan Sistem Informasi EDTECH-ID"
          description="Direktorat yang menyediakan dan mengelola layanan Teknologi Informasi di lingkungan Teknologi Pendidikan ID. Berpedan dalam mendukung aktivitas pembelajaran, penelitian dan eksperimen serta manajerial di lingkungan organisasi EDTECH-ID serta lembaga yang bekerjasama"
        />
        <div className="flex-1">
          <div className="w-full sm:max-w-xl mx-auto space-y-3">
            <IndexHeader>
              <IndexSosmed />
            </IndexHeader>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default Home;
