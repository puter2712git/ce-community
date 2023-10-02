import SignInForm from '@/components/organisms/sign-in-form';

export default function SignIn() {
  return (
    <section className="flex flex-col justify-center items-center w-full mt-40 gap-20">
      <h1 className="text-xxlg">Please login</h1>
      <SignInForm />
    </section>
  );
}
