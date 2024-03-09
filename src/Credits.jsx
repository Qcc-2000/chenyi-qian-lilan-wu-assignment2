import Nav from "./components/nav";

export default function Credits () {
    return (
        <div>
            <Nav />
            <div className="flex flex-col justify-center items-center">
                <div className="text-2xl text-slate-800 font-bold m-5">Credits information</div>
                <div className="flex flex-col justify-start items-start gap-5 m-10">
                    <div>Developer: Chenyi Qian, Lilan Wu</div>
                    <div>Github Repo: https://github.com/Qcc-2000/cs5610-project2</div>
                </div>
            </div>

        </div>
        
    );
}