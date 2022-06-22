import React from "react";
import { Container, Initial, Box, Next, Prev, Title, Loading } from "./style";
const Row = ({ title, data }) => {
  return (
    <Box>
      <div>{title}</div>
      <div>{data}</div>
    </Box>
  );
};
const TableList = ({
  handleClick,
  data,
  pagination,
  handlePagination,
  isLoading,
}) => {
  return (
    <Container>
      <Title>START WARS PEOPLE</Title>
      {isLoading ? (
        <Loading />
      ) : (
        <div class="wrapper">
          {data.map((val, i) => (
            <div
              class="container"
              id={`c${i}`}
              onClick={() => handleClick(val)}
            >
              <div class="image" id={`i${i}`}>
                <Initial>
                  {val.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </Initial>
              </div>
              <div class="story" id={`s${i}`}>
                <Row title="Nama" data={val.name} />
                <Row title="Jenis Kelamin" data={val.gender} />
                <Row title="Kelahiran Tahun" data={val.birth_year} />
              </div>
            </div>
          ))}
        </div>
      )}
      {pagination.previous && (
        <Prev onClick={() => handlePagination(false)}>Prev</Prev>
      )}
      {pagination.next && (
        <Next onClick={() => handlePagination(true)}>Next</Next>
      )}
    </Container>
  );
};

export default TableList;
