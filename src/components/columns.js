import { format } from "date-fns";

export const COLUMNS = [
  {
    Header: "번호",
    accessor: "id",
  },
  {
    Header: "상태",
    accessor: "status",
  },
  {
    Header: "등급",
    accessor: "grade",
  },
  {
    Header: "아이디",
    accessor: "userid",
  },
  {
    Header: "고객명",
    accessor: "customer_name",
  },
  {
    Header: "이메일",
    accessor: "email",
  },
  {
    Header: "주소",
    accessor: "address",
  },
  {
    Header: "전화번호",
    accessor: "phone",
  },
  {
    Header: "최근접속일",
    accessor: "date",
    Cell: ({ value }) => {
      return format(new Date(value), "yyyy-MM-dd");
    },
  },
  {
    Header: "관리",
    accessor: "manage",
    Cell: ({ cell }) => <button>조회</button>,
  },
];
