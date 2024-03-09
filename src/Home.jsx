import { Link, Outlet } from "react-router-dom";
import Nav from "./components/nav";

export default function Home () {
    return (
        <div>
            <Nav />
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-2xl text-slate-800 font-bold m-5">The game rule introduction</h1>
                <div className="flex flex-col justify-start items-start gap-5 m-10">
                    <p>
                        The Game of Life is a zero-player cellular automaton. 
                        It is really cool, and you can navigate to the game page through the navbar.
                    </p>
                    <p>
                        In the game, every cell interacts with its eight neighbors following these four simple rules:
                    </p>
                    <ul>
                        <li>Live cells with fewer than two live neighbors die by underpopulation.</li>
                        <li>Live cells with two or three live neighbors live to the next generation.</li>
                        <li>Live cells with more than three live neighbors die by overpopulation.</li>
                        <li>Dead cells with three live neighbors become a live cell by reproduction.</li>
                    </ul>
                    <p>
                        You can customize the size of the grid through inputting the number of columns and rows. 
                        The range of columns and rows should be 3-40. 
                        Initially, some cells would be set to alive automatically and you can click on cells to make them alive, 
                        then press Next or Auto Run to simulate the game. 
                        You can also click the cells while you are playing with the Next format. 
                        There is a toggle at the left bottom corner. 
                        When you turn off the toggle, the alive cells show in black color and the dead cells are white. 
                        While you turn on the toggle, the color of the cells will show like a heatmap, and the color represent following this rule:
                    </p>
                    <ul>
                        <li>The cells never being alive show in white.</li>
                        <li>The cells currently alive show in red.</li>
                        <li>The cells which have been dead between 1 to 3 generations (including 1 and 3 generations) show in yellow.</li>
                        <li>The cells which have been dead between 4 to 6 generations (including 4 and 6 generations) show in blue.</li>
                        <li>The cells which have been dead between 7 to 9 generations (including 7 and 9 generations) show in purple.</li>
                        <li>The cells which have been dead for more than 10 generations (including 10 generations) show in grey.</li>
                    </ul>
                </div>


            </div>
        </div>
        
    );
}