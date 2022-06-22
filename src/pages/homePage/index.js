import React, { useEffect, useState } from "react";
import { Container, PageOne, PageTwo } from "./style";
import ReactCardFlip from "react-card-flip";
import TableList from "../../components/tableList";
import DetailList from "../../components/detailList";
import Service from "./../../utils/service";

const HomePage = () => {
  const { getAllList, getDetailList } = new Service();
  const [isFlipped, setIsFlipped] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [dataDetail, setDataDetail] = useState({});
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({
    count: "",
    next: "",
    previous: "",
  });
  const handleClick = (val) => {
    setDataDetail(val || {});
    setIsFlipped(!isFlipped);
  };

  const handlePagination = (type) => {
    setData([]);
    setIsLoading(true);

    const link = type ? pagination.next : pagination.previous;
    getDetailList(link).then((res) => {
      let datas = res.data.results;
      datas.splice(3, 7);
      setData(datas);
      setPagination({
        count: res.data.count,
        next: res.data.next,
        previous: res.data.previous,
      });
      setIsLoading(false);
    });
  };

  useEffect(() => {
    setIsLoading(true);
    getAllList(1).then((res) => {
      let datas = res.data.results;
      datas.splice(3, 7);
      setData(datas);
      setPagination({
        count: res.data.count,
        next: res.data.next,
        previous: res.data.previous,
      });
      setIsLoading(false);
    });
  }, []);
  return (
    <Container>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <PageOne>
          <TableList
            handleClick={handleClick}
            data={data}
            pagination={pagination}
            handlePagination={handlePagination}
            isLoading={isLoading}
          />
        </PageOne>
        <PageTwo onClick={handleClick}>
          <DetailList data={dataDetail} />
        </PageTwo>
      </ReactCardFlip>
    </Container>
  );
};

export default HomePage;
