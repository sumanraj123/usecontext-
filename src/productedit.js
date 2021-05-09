export default function Productedit(props)
{
  console.log(props)
    return(
     <>
     <h1>Product Edit{props.match.params.id}</h1>
    </>
    )
}