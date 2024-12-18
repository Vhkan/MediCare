import PatientForm from "@/components/forms/PatientForm";
import RegisterForm from "@/components/forms/RegisterForm";
import Link from "next/link";
import Image from "next/image";

export default function NewAppointment() {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
          <Image
            src="/assets/icons/medicare-high-resolution-logo-transparent.png"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-10 w-fit"
          />
          {/* <PatientForm /> */}
          <p className="justify-items-end text-dark-600 xl:text-left">
            © 2024 MediCare
          </p>
        </div>
      </section>
      <Image
        src="/assets/images/appointment-img.png"
        height={1000}
        width={1000}
        alt="appointment"
        className="side-img max-w-[390px] bg-bottom"
      />
    </div>
  );
}
