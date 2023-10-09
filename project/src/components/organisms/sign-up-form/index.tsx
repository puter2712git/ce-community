'use client';

import { useForm, FieldErrors } from 'react-hook-form';
import { useRouter } from 'next/navigation';

import Button from '@/components/atoms/Button';
import Input from '@/components/atoms/Input';

interface HookFormType {
  name: string;
  email: string;
  password: string;
}

export default function SignUpForm() {
  const {
    register,
    watch,
    handleSubmit,
    setValue,
    formState: { errors },
    setError,
  } = useForm<HookFormType>();
  const router = useRouter();

  async function onValid(data: HookFormType) {
    fetch('/api/auth/sign-up', {
      method: 'POST',
      body: JSON.stringify(data),
    }).then((res) => {
      alert('회원가입 완료! 로그인 후 이용해 주세요!');
      router.push('sign-in');
    });
  }

  function onInvalid(errors: FieldErrors) {}

  return (
    <form
      className="flex flex-col items-center w-full h-auto gap-5"
      onSubmit={handleSubmit(onValid, onInvalid)}
    >
      <Input
        id="name"
        type="name"
        placeholder="John Smith"
        variant="primary"
        fontSize="xlarge"
        {...register('name', {
          required: true,
          validate: {
            isNone: (value) => {
              console.log(value);
              return !value.includes('admin') || 'admin is not allowed';
            },
          },
        })}
      />
      <span>{errors.name?.message}</span>
      <Input
        id="email"
        type="email"
        placeholder="example@ajou.ac.kr"
        variant="primary"
        fontSize="xlarge"
        {...register('email', {
          required: true,
        })}
      />
      <Input
        id="password"
        type="password"
        placeholder="***********"
        variant="primary"
        fontSize="xlarge"
        {...register('password', {
          required: true,
        })}
      />
      <Button variant="primary" fontSize="large">
        회원가입
      </Button>
    </form>
  );
}
