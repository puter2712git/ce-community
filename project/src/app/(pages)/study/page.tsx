import StackSimulator from '@/components/study/stack/simulator/StackSimulator';

export default function StudyPage() {
  return (
    <div className="mt-[80px] flex w-full justify-center">
      <div className="w-[90%] max-w-[800px] space-y-3 sm:w-1/2">
        <StackSimulator />
      </div>
    </div>
  );
}
