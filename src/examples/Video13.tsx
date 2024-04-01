interface IProps {
    name?: string;
    age?: number;
    address?: string;
}
const Video13 = (props: IProps) => {
    // const person = {
    //     name: "TA",
    //     age: 25,
    //     address: "BN",
    // };
    const { name = "HAHA", age, address } = props;
    return <div>Exam13: Hello {name}</div>;
};
export default Video13;
