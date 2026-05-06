import { CertificateCard } from "@/components/sub/certificate-card";
import { CERTIFICATIONS } from "@/constants";

export const Certifications = () => {
  return (
    <section
      id="certificates"
      className="flex flex-col items-center justify-center py-20"
    >
      <h2 className="text-white text-4xl font-bold py-20">
        {" "}
        My Certifications
      </h2>

      <div className="h-full w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
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
