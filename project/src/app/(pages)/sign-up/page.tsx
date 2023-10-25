import SignUpForm from '@/components/sign-up/SignUpForm';

export default function SignUpPage() {
  return (
    <div className="flex w-full justify-center">
      <section className="w-[90%] max-w-[800px] sm:w-1/2">
        <SignUpForm />
      </section>
    </div>
  );
}
