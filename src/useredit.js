export default function Useredit(props)
{
    console.log(props)
    return (
    <>
    <h1>User Edit{props.match.params.id}</h1>
    </>
    )
}