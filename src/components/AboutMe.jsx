

export default function AboutMe(props) {
    return (
        <div className="text-white">
            <h1 className="text-center text-orange-400">About Me.</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia vel ut praesentium at numquam amet nemo aspernatur vero soluta tempora quae temporibus similique, sint commodi magnam ab vitae nam blanditiis ducimus aliquid, alias non quidem dignissimos! Iste aut, enim minus nostrum molestiae provident, culpa, ut temporibus inventore porro unde illo.</p>
            <br />
            <hr />
            <br />
            <p>my name is {props.name}</p>
        </div>
    )
};