import { CertificateCard } from "@/components/sub/certificate-card";
import { CERTIFICATIONS } from "@/constants";

export const Certifications = () => {
  return (
    <section
      id="certificates"
      className="flex flex-col items-center justify-center py-20"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Certifications
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        {CERTIFICATIONS.map((certificate) => (
          <CertificateCard
            key={certificate.title}
            src={certificate.image}
            title={certificate.title}
            description={certificate.description}
            link={certificate.link}
          />
        ))}
      </div>
    </section>
  );
};
