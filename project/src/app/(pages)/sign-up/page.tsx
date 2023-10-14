import SignUpForm from '@/components/sign-up/SignUpForm';

export default function SignUpPage() {
  return (
    <div className="flex justify-center w-full">
      <section className="w-1/3 max-w-[1200px]">
        <SignUpForm />
      </section>
    </div>
  );
}
