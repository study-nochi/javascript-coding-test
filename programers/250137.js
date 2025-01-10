import React, {useState, useEffect} from 'react';

const USERS_URL = 'https://example.com/api/users';

// count는 총 결과 수
// 페이지 당 10개의 항목을 반환
// 첫 번째 버튼 클릭 시, 처음 페이지
// 두 번째 버튼 이전 페이지
// if(현재 페이지 === 처음 페이지 || 데이터 로드 중) 버튼 비활성화
// 세 번째 버튼 다음 페이지
// 네 번째 버튼 데이터의 마지막 페이지
// - 현재 페이지 === 마지막 페이지 || 데이터 로드 중 => 버튼 비활성화
// 버튼 로드 중 모든 비활성화
// 

const getJson = async(res) => await res.json()
const PAGE_SIZE = 10

export default function Table () {
  const [page, setPage] = useState(0)
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const totalPageCount = useMemo(() => data ? Math.ceil(data.count / PAGE_SIZE) : 0, data)
  const disabledPrev = false;// useMemo(() => isLoading || page === 0, [isLoading, page,])
  const disabledNext = false; // useMemo(() => isLoading || page === totalPageCount, [isLoading, page, totalPageCount])

  const [text, setText] = useState()

  const handleClick = useCallback((e) => {
    setText(e)
  }, [setPage])

  const handleClickFirst = useCallback((e) => {
    console.log(e)
    setPage(0)
  }, [setPage])

  const handleClickPrev = useCallback(() => {
    setPage((prev) => prev - 1)
  }, [setPage])

  useEffect(() => {
    setIsLoading(true)
    fetch(`${USERS_URL}?page=${4}`)
      .then(async(res) => {
        setData(getJson(res))
      })
      .catch((err) => {
        // 에러처리?
        console.log("err", err)
      })
      .finally(() => {
        setIsLoading(false)
      }) 
  }, [page])

  return (
    <div>
      <div>{text}</div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
        //  render elements in tbody
        </tbody>
      </table>
      <section className="pagination">
        <button className="first-page-btn" onClick={handleClick} disabled={disabledPrev}>first</button>
        <button className="previous-page-btn" onClick={handleClick} disabled={disabledPrev}>previous</button>
        <button className="next-page-btn" onClick={handleClick} disabled={disabledNext}>next</button>
        <button className="last-page-btn" onClick={handleClick} disabled={disabledNext}>last</button>
      </section>
    </div>
  );
};
