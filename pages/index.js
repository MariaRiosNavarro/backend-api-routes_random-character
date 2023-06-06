import useSWR from "swr";
import styled from "styled-components";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function HomePage() {
  const { data, isLoading } = useSWR("/api/random-character", fetcher);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  console.log(data);
  if (!data) {
    return;
  }

  return (
    <StyledDiv>
      <h1>Ramdon Character of Now</h1>
      <h3>first Name:{data.firstName}</h3>
      <h3>second Name:{data.lastName}</h3>
      <h3>age:{data.age}</h3>
      <h4>profession:{data.profession}</h4>
      <h4>country:{data.country}</h4>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: lightgreen;
  border-radius: 10px;
  border: 2px solid green;
  padding: 1rem;
  margin: 1rem;
  width: 50%;
`;
