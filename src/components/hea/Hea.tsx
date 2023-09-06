type propsType ={
    topic: String,
}
export default function Heading(props : propsType){
const {topic} = props
    return<>
        <h1 className="py-4 text-danger ">{topic}</h1>
    </>
    
}