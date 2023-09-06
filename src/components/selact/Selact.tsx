type propsType = {
   options: string[],
   label: string,
   fun: Function
}
export default function Selact(props: propsType) {
   const { options, label, fun } = props
   return <>
      <label className="text-danger fw-bold">{label}</label>
      <select className="bg-secendry  w-25 text-center" onChange={(e) => fun(e.target.value)} >
         {options.map((x, i) => <option value={x} key={i}>{x}</option>)}
      </select>
   </>
}





//let arrofObj = [
// {
//    id: 1,
//       name: "Ahmed",
//          fName: "Abid",
//             DOB: "18-06-2005"
// },
// {
//    id: 2,
//       name: "Adil",
//          fName: "Abid",
//             DOB: "19-04-2002"
// },
// {
//    id: 3,
//       name: "Ubaid",
//          fName: "Abid",
//             DOB: "31-01-1998"
// },
// ];
// <Table row={[
//    {
//       key: "id",
//    },
//    {
//       key: "name",
//    },
//    {
//       key: "fName",
//    },
//    {
//       key: "DOB",
//    },
// ]} col={arrofObj} />//