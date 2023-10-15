import SignInForm from '@/components/sign-in/SignInForm';

export default function SignInPage() {
  return (
    <div className="flex justify-center w-full">
      <section className="w-1/3 min-w-[600px]">
        <SignInForm />
      </section>
    </div>
  );
}
