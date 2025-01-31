import { useSignal } from "@preact/signals";

interface CounterProps {
  count: number;
}

export default function Counter(props: CounterProps) {
  const count = useSignal(props.count);
  return (
    <div class="flex gap-2 w-full">
      <button
        class="px-2 py-1 border-gray-500 border-2 rounded bg-white hover:bg-gray-200 transition-colors"
        onClick={() => count.value -= 1}
      >
        -1
      </button>
      <p class="text-xl">{count}</p>
      <button
        class="px-2 py-1 border-gray-500 border-2 rounded bg-white hover:bg-gray-200 transition-colors"
        onClick={() => count.value += 1}
      >
        +1
      </button>
    </div>
  );
}
