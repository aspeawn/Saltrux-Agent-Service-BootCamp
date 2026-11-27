import { create } from "zustand";
import { useShallow } from "zustand/react/shallow";
import RenderBadge from "../../components/RenderBadge";

// store
const useDemoStore = create((set) => ({
  // 상태값 2가지
  count: 0,
  memo: "",
  increase: () => set((state) => ({ count: state.count + 1 })),
  setMemo: (memo) => set({ memo }),
}));

/**
 *  Selector : store에서 무엇을 꺼낼지 결정하는 함수
 * -> 컴포넌트는 selector가 고른 값이 바뀔 때만 다시 렌더링
 */

function WholeStoreCounter() {
  // Selector 없이 사용하고 있음
  const { count } = useDemoStore();

  return (
    <div className="box stack" style={{ flex: 1, minWidth: 220 }}>
      <b className="bad">❌ useDemoStore()</b>
      <p className="big-number">{count}</p>
      <RenderBadge />
    </div>
  );
}

function SelectedCounter() {
  // Selector 사용중
  const count = useDemoStore((state) => state.count);

  return (
    <div className="box stack" style={{ flex: 1, minWidth: 220 }}>
      <b className="good">✅ (state) =&gt; state.count</b>
      <p className="big-number">{count}</p>
      <RenderBadge />
    </div>
  );
}

function ShallowCounter() {
  /**
   * useShallow : Store에서 state, action을 한 번에 꺼내오고 싶을 때 사용 (즉 아래에 한줄씩 쓰는거랑 동일함)
   */
  const { count, increase } = useDemoStore(
    useShallow((state) => ({ count: state.count, increase: state.increase })),
  );
  // 이 두줄과 위 함수는 동일
  // const count = useDemoStre((state) => state.count)
  // const increase = useDemoStore((state) => state.increase)

  return (
    <div className="box stack" style={{ flex: 1, minWidth: 220 }}>
      <b className="good">✅ useShallow(…)</b>
      <p className="big-number">{count}</p>
      <div className="row">
        <button className="btn primary" onClick={increase}>
          +1
        </button>
        <RenderBadge />
      </div>
    </div>
  );
}

function MemoInput() {
  const memo = useDemoStore((state) => state.memo);
  const setMemo = useDemoStore((state) => state.setMemo);

  return (
    <div className="box row">
      <b>memo</b>
      <input
        className="input"
        placeholder="여기에 글자를 쳐 보세요"
        value={memo}
        onChange={(e) => setMemo(e.target.value)}
      />
      <span className="hint">← store의 memo만 바뀐다</span>
    </div>
  );
}

export default function Selector() {
  return (
    <div className="stack">
      <MemoInput />
      <div className="row" style={{ alignItems: "stretch" }}>
        <WholeStoreCounter />
        <SelectedCounter />
        <ShallowCounter />
      </div>

      <div className="note">
        <h3>👉 확인해 보세요</h3>
        <ul>
          <li>
            memo에 글자를 치면 ❌ 쪽만 "렌더링 N회"가 계속 올라간다 — count는
            그대로인데도!
          </li>
          <li>[+1]을 누르면 셋 다 올라간다 — 셋 다 count를 쓰니까 정상</li>
          <li>
            화면이 작을 때는 차이가 안 느껴지지만, 목록이 크거나 컴포넌트가
            많으면 느려지는 원인이 된다
          </li>
        </ul>
      </div>

      <div className="note">
        <h3>🤖 AI 코드에서 이런 모양을 보면</h3>
        <div className="cmd">{`const { items, addItem } = useCartStore()          // ⚠️ 전체 구독 → selector로 바꾸게 하자
const items = useCartStore((state) => state.items)   // ✅
const addItem = useCartStore((state) => state.addItem)`}</div>
      </div>
    </div>
  );
}
