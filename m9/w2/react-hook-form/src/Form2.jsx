import { useForm } from "react-hook-form";

export default function Form2() {
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

  // console.log("errors : ", errors);

  // console.log(watch());

  return (
    <>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          placeholder="이름"
          type="text"
          {...register("name", {
            required: "이름은 필수 항목입니다.",
          })}
        />
        {errors.name?.message}
        <input
          placeholder="나이"
          type="text"
          {...register("age", {
            required: "나이를 입력하세요",
            min: { message: "0 이상의 숫자만 입력 가능합니다.", value: 0 },
          })}
        />
        {errors.age?.message}
        <button type="submit">제출</button>
      </form>
    </>
  );
}
