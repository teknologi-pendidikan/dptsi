/* eslint-disable @next/next/no-img-element */
export default function Footer() {
  return (
    <footer id="footer" className="pb-8">
      <div className="pt-4 px-8 border-t-2 border-gray-200" />
      <div className="flex flex-col items-center gap-2 text-center">
        <p>Direktorat Pengembangan Teknologi dan Sistem Informasi (DPTSI)</p>
        <p>Tim Pelayanan Pengadaan Infrastruktur Digital</p>
        <a title="Netlify Sponsor" href="https://www.netlify.com">
          <img
            src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg"
            alt=""
            width="114"
            height="51"
          />
        </a>
      </div>
    </footer>
  );
}
