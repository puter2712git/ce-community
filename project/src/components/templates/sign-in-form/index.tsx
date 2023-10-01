import SignInForm from '@/components/organisms/sign-in-form';

export default function SignInFormTemplate() {
  return (
    <section className="flex flex-col justify-center items-center w-full mt-40 gap-20">
      <h1 className="text-xxlg text-3xl">Please login</h1>
      <SignInForm />
    </section>
  );
}
