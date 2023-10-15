import SignUpForm from '@/components/sign-up/SignUpForm';

export default function SignUpPage() {
  return (
    <div className="flex justify-center w-full">
      <section className="w-1/3 min-w-[600px]">
        <SignUpForm />
      </section>
    </div>
  );
}
