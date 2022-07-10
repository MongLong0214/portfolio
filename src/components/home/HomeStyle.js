import styled from "styled-components";

export const FirstPage = styled.section`
  width: 100%;
  height: 85vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #e3c53d;
`;

export const FirstPageProfileImg = styled.img`
  width: 18rem;
  height: 18rem;
  border-radius: 50%;
  background-color: #e3c53d;
`;

export const FirstPageProfileCopy = styled.div`
  width: 28vw;
  height: 20vh;
  margin-top: 2rem;
  margin-bottom: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* background-color: black; */
  font-size: 2rem;
  font-weight: bold;
  color: #7579da;
`;

export const ContactButton = styled.button`
  width: 13rem;
  height: 3.5rem;
  justify-content: center;
  background: #d3d65a;
  border: 2px solid #7579da;
  border-radius: 15px;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
  color: #7579da;

  &:hover {
    background: #d3d65a;
    opacity: 0.7;
    border: 2px solid white;
  }
`;

export const SecondPage = styled(FirstPage)`
  height: 100vh;
  background-color: #19c4eb;
`;

// export const SecondPageCopyBox = styled.div`
//   width: 28vw;
//   height: 40vh;

//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;

//   font-size: 2rem;
//   font-weight: bold;
//   color: #7579da;

//   background-color: black;
// `;

export const SecondPageHeadCopy = styled.div`
  height: 20vh;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* background-color: blue; */
  font-size: 5rem;
  font-weight: bold;
  color: #dcdf50;
`;
export const SecondPageSubCopy = styled.div`
  margin-bottom: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: bold;
  /* background-color: red; */
  font-size: 1.3rem;
  color: #dcdf50;
`;

export const SecondPageSubCopy2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: bold;
  /* background-color: red; */
  font-size: 1.3rem;
  color: #aa78bc;

  margin-bottom: 2rem;
`;

export const SecondPageSubCopy3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* background-color: gray; */
  font-size: 2.7rem;
  font-weight: bold;
  color: #dcdf50;
`;
