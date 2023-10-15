import SignInForm from '@/components/sign-in/SignInForm';

export default function SignInPage() {
  return (
    <div className="flex justify-center w-full">
      <section className="w-[90%] sm:w-1/2 max-w-[800px]">
        <SignInForm />
      </section>
    </div>
  );
}
