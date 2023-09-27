import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  // handleSubmit : 두개의 함수를 받는데 하나는 유효할때 실행되는 함수, 하나는 오류가 발생할때 실행되는 함수이다.
  const onValid = (data) => {
    console.log("data : ", data);
  };
  // const onInvalid = (errors) => {
  //   console.log("error : ", errors);
  // };

  console.log("errors : ", errors);

  // console.log(watch());

  return (
    <>
      {/* <form onSubmit={handleSubmit(onValid, onInvalid)}> */}
      <form onSubmit={handleSubmit(onValid)}>
        {/* <input type="text" {...register("username", { required: true })} /> */}
        <input
          type="text"
          {...register("username", {
            required: "이름을 입력하세요",
            minLength: { message: "최소 2글자 이상 작성", value: 2 },
          })}
        />
        {errors.username?.message}
        <input
          type="text"
          {...register("email", {
            required: "이메일을 입력하세요",
            validate: {
              useGmail: (v) =>
                v.includes("gmail.com") || "gmail 만 전달 가능하다",
            },
          })}
        />
        <input type="text" {...register("password")} />
        <button type="submit">Submit</button>
      </form>
      Form
    </>
  );
}
