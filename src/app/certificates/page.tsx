import CertificateGrid from "@/components/certificates/CertificateGrid";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata = {
  title: "Certificates | Malik Saifullah",
  description: "Verified courses and internship certifications completed by Malik Saifullah, including Anthropic Academy and Microsoft AI credentials.",
};

export const dynamic = "force-static";

export default function CertificatesPage() {
  return (
    <main className="min-h-screen px-6 pt-40 pb-28 md:px-12 lg:px-20">
      <SectionHeading
        eyebrow="Verified Learning"
        title={<>Certificates & <span className="text-gradient">credentials</span></>}
        description="Courses and internship certifications I've completed, click any card to view the full certificate."
      />
      <CertificateGrid />
    </main>
  );
}