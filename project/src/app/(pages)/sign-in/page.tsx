import SignInForm from '@/components/sign-in/SignInForm';

export default function SignInPage() {
  return (
    <div className="flex w-full justify-center">
      <section className="w-[90%] max-w-[800px] sm:w-1/2">
        <SignInForm />
      </section>
    </div>
  );
}
