import SignUpForm from '@/components/organisms/sign-up-form';

export default function SignUp() {
  return (
    <section className="flex flex-col justify-center items-center w-full mt-40 gap-20">
      <h1 className="text-xxlg">Sign Up</h1>
      <SignUpForm />
    </section>
  );
}
