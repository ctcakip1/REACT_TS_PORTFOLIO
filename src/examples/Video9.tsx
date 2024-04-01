import { useState } from "react"

const Video9 = ()=>{
    const [name, setName] = useState<string>('TA')
    return(
        <div>Video9: Hello + {name}</div>
    )
}
export default Video9