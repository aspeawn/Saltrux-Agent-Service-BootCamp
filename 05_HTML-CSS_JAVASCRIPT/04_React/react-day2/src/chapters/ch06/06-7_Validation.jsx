import { useState } from "react";

const initialForm = { email: "", password: "", passwordConfirm: "" };

// validate 순수함수 형태로 form을 받아 error 객체를 return함 
function validate(form) {
  const errors = {};
  if (!form.email) errors.email = "이메일을 입력하세요.";
  else if (!/^\S+@\S+\.\S+$/.test(form.email))
    errors.email = "이메일 형식이 아닙니다.";

  if (form.password.length < 8)
    errors.password = "비밀번호는 8자 이상이어야 합니다.";
  else if (!/\d/.test(form.password))
    errors.password = "숫자를 하나 이상 포함하세요.";

  if (form.passwordConfirm !== form.password)
    errors.passwordConfirm = "비밀번호가 일치하지 않습니다.";
  return errors;
}

function Field({ label, error, children }) {
  return (
    <label className="stack" style={{ gap: 4 }}>
      <b style={{ fontSize: 14 }}>{label}</b>
      {children}
      {error && (
        <span className="bad" style={{ fontSize: 13 }}>
          {error}
        </span>
      )}
    </label>
  );
}

export default function Validation() {
  const [form, setForm] = useState(initialForm);
  const [touched, setTouched] = useState({});
  const [done, setDone] = useState(false);

  // 렌더링할 때마다 validate 함수 호출
  const errors = validate(form);
  const isValid = Object.keys(errors).length === 0;

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function handleBlur(e) {
    setTouched({ ...touched, [e.target.name]: true });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTouched({ email: true, password: true, passwordConfirm: true });
    if (!isValid) return;
    setDone(true);
  }

  if (done) {
    return (
      <div className="box">
        <h3>🎉 가입 완료: {form.email}</h3>
        <button
          className="btn"
          onClick={() => {
            setForm(initialForm);
            setTouched({});
            setDone(false);
          }}
        >
          다시 하기
        </button>
      </div>
    );
  }

  const inputProps = (name) => ({
    name,
    value: form[name],
    onChange: handleChange,
    onBlur: handleBlur,
    className: "input",
    style:
      touched[name] && errors[name]
        ? { borderColor: "var(--danger)" }
        : undefined,
  });

  return (
    <form
      className="box stack"
      style={{ maxWidth: 420 }}
      onSubmit={handleSubmit}
      noValidate
    >
      <h3>회원가입</h3>
      <Field label="이메일" error={touched.email && errors.email}>
        <input
          type="email"
          placeholder="hello@react.dev"
          {...inputProps("email")}
        />
      </Field>
      <Field label="비밀번호" error={touched.password && errors.password}>
        <input
          type="password"
          placeholder="8자 이상, 숫자 포함"
          {...inputProps("password")}
        />
      </Field>
      <Field
        label="비밀번호 확인"
        error={touched.passwordConfirm && errors.passwordConfirm}
      >
        <input type="password" {...inputProps("passwordConfirm")} />
      </Field>
      <button className="btn primary">가입하기</button>
      <p className="hint">
        현재 상태:{" "}
        {isValid ? (
          <span className="good">모두 통과</span>
        ) : (
          `오류 ${Object.keys(errors).length}개`
        )}
      </p>
    </form>
  );
}
