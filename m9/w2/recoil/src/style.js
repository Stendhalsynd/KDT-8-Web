import styled from "styled-components";

export const HeaderStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 800;
  background-color: ivory;
  line-height: 3;
  font-size: x-large;
`;

export const BtnStyle = styled.button`
  margin: 5px;
  border: none;
  background: black;
  color: white;
  border-radius: 20px;
  padding: 10px;
`;

export const ContainerStyle = styled.div`
  display: flex;
`;

export const ListContainerStyle = styled(ContainerStyle)`
  flex-direction: column;
  height: 300px;
  overflow-y: auto;
`;

export const InputStyle = styled.input`
  width: 100%;
  margin: 10px;
`;

export const CheckBoxStyle = styled.input`
  width: 25px;
`;

export const ReverseContainerStyle = styled(ContainerStyle)`
  justify-content: flex-end;
  padding: 10px;
`;

export const StatsStyle = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  & span {
    padding: 5px;
  }
`;
