import SignUpForm from '@/components/sign-up/SignUpForm';

export default function SignUpPage() {
  return (
    <div className="flex justify-center w-full">
      <section className="w-[90%] sm:w-1/2 max-w-[800px]">
        <SignUpForm />
      </section>
    </div>
  );
}
